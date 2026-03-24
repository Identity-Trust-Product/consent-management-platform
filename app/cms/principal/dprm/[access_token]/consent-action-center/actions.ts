"use server";
/**
 * Open Bharat Digital Consent by IDfy
 * Copyright (c) 2025 Baldor Technologies Private Limited (IDfy)
 * 
 * This software is licensed under the Privy Public License.
 * See LICENSE.md for the full terms of use.
 * 
 * Unauthorized copying, modification, distribution, or commercial use
 * is strictly prohibited without prior written permission from IDfy.
 */

import prisma from "@/lib/prisma";
import { sendForArtifactCreation } from "@/lib/services/artifact-creation-service";
import { calculateBusinessProcessDiff } from "@/lib/services/consent-version-diff-service";
import { triggerWebhookEvent } from "@/lib/services/webhook-service";
import { WebhookEventType } from "@prisma/client";
import { revalidatePath } from "next/cache";

interface UpdateConsentPayload {
  selectedProcessingPurposes: string[];
  renewConsents?: boolean;
}

export async function updateConsent(
  dataPrincipalId: string,
  currentBpPublicId: string,
  payload: UpdateConsentPayload,
  majorDataPrincipalId?: string
) {
  try {
    const { selectedProcessingPurposes } = payload;

    // 1. Fetch Active Consents
    const activeConsents = await prisma.consent.findMany({
      where: {
        dataPrincipalId,
        ...(majorDataPrincipalId && { majorDataPrincipalId }),
        businessProcessId: currentBpPublicId,
        status: "accepted",
      },
      include: {
        businessProcessRule: {
          include: { processingPurpose: true },
        },
      },
    });

    // 2. Diff Snapshot
    let bpDiff: any = null;
    try {
      bpDiff = await calculateBusinessProcessDiff(currentBpPublicId);
    } catch (e) { }

    // 3. Get Target BP
    const currentBp = await prisma.businessProcess.findUnique({
      where: { publicId: currentBpPublicId },
    });
    if (!currentBp) throw new Error("Current BP not found");

    const latestBp = await prisma.businessProcess.findFirst({
      where: {
        code: currentBp.code,
        status: "published",
        version: { gt: currentBp.version },
      },
      orderBy: { version: "desc" },
      include: {
        businessProcessRules: {
          include: { processingPurpose: true, consentPurpose: true },
        },
      },
    });

    const targetBp =
      latestBp ||
      (await prisma.businessProcess.findUnique({
        where: { publicId: currentBpPublicId },
        include: {
          businessProcessRules: {
            include: { processingPurpose: true, consentPurpose: true },
          },
        },
      }));

    if (!targetBp) throw new Error("Target BP not found");
    const requestId = `upd_${Date.now()}`;

    // Track for Email
    const updatedProcessingPurposes: Array<{ cpName: string; ppName: string }> =
      [];

    // 4. Execute Transaction
    await prisma
      .$transaction(async (tx) => {
        const processedNewRuleIds = new Set<string>();

        // =========================================================
        // PASS 1: Handle EXISTING Consents (Update, Migrate, or Revoke)
        // =========================================================
        for (const oldConsent of activeConsents) {
          const pp = oldConsent.businessProcessRule.processingPurpose;
          const stableId = String(pp.purposeOfProcessingId);

          const newRule = targetBp?.businessProcessRules.find(
            (r) =>
              String(r.processingPurpose.purposeOfProcessingId) === stableId
          );

          const isExplicitlySelected = selectedProcessingPurposes.some(
            (sel) => String(sel) === stableId || String(sel) === pp.publicId
          );

          if (newRule) {
            processedNewRuleIds.add(stableId);

            // Track for Email
            updatedProcessingPurposes.push({
              cpName: newRule.consentPurpose.name,
              ppName: newRule.processingPurpose.name,
            });

            await tx.consent.update({
              where: { publicId: oldConsent.publicId },
              data: { status: "revoked", updatedAt: new Date() },
            });

            // --- DETECT ATTRIBUTE CHANGES ---
            const oldAttrs = new Set(oldConsent.userAttributeNames);
            const newAttrs = new Set(
              newRule.processingPurpose.userAttributeNames
            );
            const addedAttrs =
              newRule.processingPurpose.userAttributeNames.filter(
                (a) => !oldAttrs.has(a)
              );
            const removedAttrs = oldConsent.userAttributeNames.filter(
              (a) => !newAttrs.has(a)
            );
            const hasAttributeChanges =
              addedAttrs.length > 0 || removedAttrs.length > 0;

            // Timestamps Logic
            const isFreshConsent =
              isExplicitlySelected ||
              targetBp.version === currentBp.version ||
              hasAttributeChanges;

            const newConsent = await tx.consent.create({
              data: {
                parentConsentId: oldConsent.publicId,
                requestId,
                requestType: isFreshConsent
                  ? "version_update"
                  : "version_migration",
                referenceId: oldConsent.referenceId,
                dataPrincipalId: oldConsent.dataPrincipalId,
                businessProcessId: targetBp!.publicId,
                businessProcessRuleId: newRule.publicId,
                consentPurposeId: newRule.consentPurpose.publicId,
                processingPurposeId: newRule.processingPurpose.publicId,
                businessUnitId: String(oldConsent.businessUnitId),
                userAttributeNames:
                  newRule.processingPurpose.userAttributeNames,
                language: oldConsent.language,
                status: "accepted",
                insertedAt: isFreshConsent ? new Date() : oldConsent.insertedAt,
                expiresAt: isFreshConsent ? undefined : oldConsent.expiresAt,
              },
            });

            // --- PREPARE AUDIT DETAILS ---
            const auditDetails: any = {
              previousConsentId: oldConsent.publicId,
              reason: isFreshConsent ? "Terms Updated" : "Version Migration",
            };

            if (isFreshConsent) {
              const attrDiffs = [
                ...addedAttrs.map((name) => ({ name, status: "added" })),
                ...removedAttrs.map((name) => ({ name, status: "removed" })),
              ];
              if (attrDiffs.length > 0) auditDetails.attributesDiff = attrDiffs;

              if (bpDiff) {
                const ppDiff = bpDiff.consentPurposes
                  .flatMap((cp: any) => cp.processingPurposes)
                  .find(
                    (diff: any) =>
                      String(diff.purposeOfProcessingId) === stableId
                  );
                if (ppDiff) {
                  const changesText = [];
                  if (ppDiff.descriptionChanged)
                    changesText.push("Description Changed");
                  ppDiff.ruleChanges.forEach((rc: any) =>
                    changesText.push(rc.description)
                  );
                  if (changesText.length > 0)
                    auditDetails.changes = changesText;
                }
              }
            }

            await tx.consentAuditTrail.create({
              data: {
                consentId: newConsent.publicId,
                dataPrincipalId,
                action: "VERSION_UPDATED",
                actor: "data_principal",
                details: auditDetails,
              },
            });
          } else {
            await revokeSingleConsent(
              tx,
              oldConsent,
              "Purpose removed in new version"
            );
          }
        }

        // =========================================================
        // PASS 2: Handle NEWLY ADDED Rules
        // =========================================================
        if (targetBp && targetBp.businessProcessRules) {
          for (const rule of targetBp.businessProcessRules) {
            const ruleStableId = String(
              rule.processingPurpose.purposeOfProcessingId
            );

            if (!processedNewRuleIds.has(ruleStableId)) {
              const isSelected = selectedProcessingPurposes.some(
                (sel) =>
                  String(sel) === ruleStableId ||
                  String(sel) === rule.processingPurpose.publicId
              );

              if (isSelected) {
                // Track for Email
                updatedProcessingPurposes.push({
                  cpName: rule.consentPurpose.name,
                  ppName: rule.processingPurpose.name,
                });

                const newConsent = await tx.consent.create({
                  data: {
                    requestId,
                    requestType: "version_addition",
                    referenceId:
                      activeConsents[0]?.referenceId || `ref_${Date.now()}`,
                    dataPrincipalId: dataPrincipalId,
                    businessProcessId: targetBp.publicId,
                    businessProcessRuleId: rule.publicId,
                    consentPurposeId: rule.consentPurpose.publicId,
                    processingPurposeId: rule.processingPurpose.publicId,
                    businessUnitId: String(
                      activeConsents[0]?.businessUnitId ||
                      targetBp.businessUnitId
                    ),
                    userAttributeNames:
                      rule.processingPurpose.userAttributeNames,
                    language: activeConsents[0]?.language || "en",
                    status: "accepted",
                    insertedAt: new Date(),
                  },
                });

                const allNewAttributes =
                  rule.processingPurpose.userAttributeNames.map((attr) => ({
                    name: attr,
                    status: "added",
                  }));

                await tx.consentAuditTrail.create({
                  data: {
                    consentId: newConsent.publicId,
                    dataPrincipalId,
                    action: "VERSION_UPDATED",
                    actor: "data_principal",
                    details: {
                      reason: "New Purpose Added",
                      changes: ["New Processing Purpose Added"],
                      attributesDiff: allNewAttributes,
                    },
                  },
                });
              }
            }
          }
        }
      })
      .then(async () => {
        if (activeConsents.length === 0) return;
        await sendForArtifactCreation(
          activeConsents[0].dataPrincipalId,
          activeConsents[0].referenceId,
          currentBp.code,
          "updated"
        );
      })
      .catch((artifactError) => {
        console.error("Artifact Creation Error:", artifactError);
      });

    // --- NOTIFICATIONS & EMAILS (From Merged Code) ---

    // 1. Mark notifications as seen
    await prisma.notification.updateMany({
      where: {
        dataPrincipalId: dataPrincipalId,
        type: { in: ["update", "expiry"] },
        seen: false,
        metadata: {
          path: ["businessProcessId"],
          equals: currentBpPublicId, // Use ID passed to function
        },
      },
      data: { seen: true },
    });

    revalidatePath("/consent-wallet");
    revalidatePath("/notifications");
    revalidatePath("/consent-action-center");

    // 2. Send Email
    try {
      const { emailService } = await import(
        "@/lib/services/email/email-service"
      );
      const { generateDprmLink } = await import("@/lib/services/dprm-service");

      const businessProcess = await prisma.businessProcess.findUnique({
        where: { publicId: currentBpPublicId },
        select: { id: true, name: true },
      });

      if (!businessProcess) {
        console.warn(
          `Business process not found for publicId: ${currentBpPublicId}`
        );
      } else {
        const notice = await prisma.notice.findFirst({
          where: {
            dataPrincipalId,
            businessProcessId: businessProcess.id,
          },
          include: { metadata: true },
          orderBy: { createdAt: "desc" },
        });

        if (notice) {
          const metadata = notice.metadata.reduce(
            (acc, item) => {
              acc[item.key] = item.value;
              return acc;
            },
            {} as Record<string, string>
          );

          const principalEmail = metadata.email || metadata.Email;
          const principalName = metadata.name || metadata.Name || "User";

          if (principalEmail) {
            const dprmLink = await generateDprmLink(
              dataPrincipalId,
              new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)
            );

            emailService
              .sendTemplatedEmail({
                templateName: "consent-updated-successfully",
                to: { email: principalEmail, name: principalName },
                variables: {
                  principalName,
                  businessProcessName: businessProcess.name,
                  updateDate: new Date().toLocaleDateString("en-GB"),
                  updatedPurposes: updatedProcessingPurposes,
                  dprmLink,
                },
              })
              .catch((err) =>
                console.error(`Failed to send consent update email:`, err)
              );
          }
        }
      }
    } catch (emailError) {
      console.error(
        "Failed to send consent update confirmation email:",
        emailError
      );
    }

    return { success: true };
  } catch (error) {
    console.error("Update Error:", error);
    return { success: false, error: "Failed to update consents" };
  }
}

// ... (Revoke Function below) ...

export async function revokeConsent(
  dataPrincipalId: string,
  serviceId: string,
  consentPublicIds: string[],
  majorDataPrincipalId?: string
) {
  try {
    const consents = await prisma.consent.findMany({
      where: {
        processingPurposeId: { in: consentPublicIds },
        dataPrincipalId,
        ...(majorDataPrincipalId && { majorDataPrincipalId }),
        status: "accepted",
      },
      include: {
        businessProcessRule: {
          include: {
            consentPurpose: true,
            processingPurpose: true,
          },
        },
      },
    });

    const withdrawnPurposes: Array<{ cpName: string; ppName: string }> = [];
    const revokedConsentIds: string[] = [];

    await prisma
      .$transaction(async (tx) => {
        for (const consent of consents) {
          const result = await revokeSingleConsent(
            tx,
            consent,
            "User revoked via wallet"
          );
          revokedConsentIds.push(result.publicId);

          if (consent.businessProcessRule) {
            withdrawnPurposes.push({
              cpName:
                consent.businessProcessRule.consentPurpose?.name ||
                "Unknown Purpose",
              ppName:
                consent.businessProcessRule.processingPurpose?.name ||
                "Unknown Processing",
            });
          }
        }
      })
      .then(async () => {
        if (consents.length === 0) return;

        const bp = await prisma.businessProcess.findUnique({
          where: { publicId: consents[0].businessProcessId },
        });

        if (!bp) return;

        await sendForArtifactCreation(
          consents[0].dataPrincipalId,
          consents[0].referenceId,
          bp.code,
          "updated"
        );

        // Trigger webhooks for all revoked consents (fire-and-forget)
        for (const consentId of revokedConsentIds) {
          prisma.consent
            .findUnique({
              where: { publicId: consentId },
              include: {
                businessProcess: true,
                consentPurpose: true,
                processingPurpose: {
                  include: {
                    purposeOfProcessing: true,
                    processingPurposeToDataProcessors: {
                      include: { dataProcessor: true },
                    },
                  },
                },
                businessUnit: true,
              },
            })
            .then((consent) => {
              if (!consent) return;

              const userAttributeName =
                consent.userAttributeNames.length > 0
                  ? consent.userAttributeNames[0]
                  : null;

              const dataProcessorIds =
                consent.processingPurpose.processingPurposeToDataProcessors
                  .map((dp) => dp.dataProcessor.ouId)
                  .filter((id): id is string => id !== null);

              triggerWebhookEvent(
                WebhookEventType.CONSENT_REVOKED,
                {
                  business_process_code: consent.businessProcess.code,
                  business_process_version: consent.businessProcess.version,
                  consent_id: consent.publicId,
                  consent_purpose_code: consent.consentPurpose.code,
                  consent_purpose_version: consent.consentPurpose.version,
                  data_principal_id: consent.dataPrincipalId,
                  user_attribute_name: userAttributeName,
                  status: "consent_revoked",
                  selected_language: consent.language,
                  notice_id: consent.requestId,
                  parent_consent_id: consent.parentConsentId,
                  business_unit_code: consent.businessUnit.code,
                  processing_purpose_code:
                    consent.processingPurpose.purposeOfProcessing.code,
                  reference_id: consent.referenceId,
                  inserted_at: consent.insertedAt.toISOString(),
                  updated_at: consent.updatedAt.toISOString(),
                  revoked_at: consent.updatedAt.toISOString(),
                  reason: "User revoked via wallet",
                },
                dataProcessorIds
              ).catch((error) => {
                console.error(
                  `Failed to trigger CONSENT_REVOKED webhook for ${consentId}:`,
                  error
                );
              });
            })
            .catch((error) => {
              console.error(
                `Failed to fetch consent ${consentId} for webhook:`,
                error
              );
            });
        }
      })
      .catch((artifactError) => {
        console.error("Artifact Creation Error:", artifactError);
      });

    revalidatePath("/consent-wallet");
    revalidatePath("/consent-action-center");

    // Send Email
    if (withdrawnPurposes.length > 0) {
      try {
        const { emailService } = await import(
          "@/lib/services/email/email-service"
        );
        const { generateDprmLink } = await import(
          "@/lib/services/dprm-service"
        );

        const businessProcess = await prisma.businessProcess.findFirst({
          where: { publicId: serviceId },
          select: { id: true, name: true },
        });

        if (businessProcess) {
          const notice = await prisma.notice.findFirst({
            where: { dataPrincipalId, businessProcessId: businessProcess.id },
            include: { metadata: true },
            orderBy: { createdAt: "desc" },
          });

          if (notice) {
            const metadata = notice.metadata.reduce(
              (acc, item) => {
                acc[item.key] = item.value;
                return acc;
              },
              {} as Record<string, string>
            );

            const principalEmail = metadata.email || metadata.Email;
            const principalName = metadata.name || metadata.Name || "User";

            if (principalEmail) {
              const dprmLink =
                (await generateDprmLink(
                  dataPrincipalId,
                  new Date(Date.now() + 30 * 24 * 60 * 60 * 1000)
                )) + "/consent-action-center";

              emailService
                .sendTemplatedEmail({
                  templateName: "consent-withdrawn-successfully",
                  to: { email: principalEmail, name: principalName },
                  variables: {
                    principalName,
                    withdrawnPurposes,
                    dprmLink,
                    withdrawalDate: new Date().toLocaleDateString("en-US", {
                      month: "2-digit",
                      day: "2-digit",
                      year: "numeric",
                    }),
                    organizationName: process.env.DATA_FIDUCIARY_NAME,
                    organizationEmail: process.env.DATA_FIDUCIARY_CONTACT_EMAIL,
                  },
                })
                .catch((err) =>
                  console.error("Failed to send consent withdrawal email:", err)
                );
            }
          }
        }
      } catch (emailError) {
        console.error("Error preparing withdrawal email:", emailError);
      }
    }

    return { success: true };
  } catch (e) {
    return { success: false };
  }
}

async function revokeSingleConsent(tx: any, consent: any, reason: string) {
  await tx.consent.update({
    where: { publicId: consent.publicId },
    data: { status: "revoked", updatedAt: new Date() },
  });
  await tx.consentAuditTrail.create({
    data: {
      consentId: consent.publicId,
      dataPrincipalId: consent.dataPrincipalId,
      action: "REVOKED",
      actor: "data_principal",
      details: { reason },
    },
  });

  // Return consent details for webhook triggering
  return {
    publicId: consent.publicId,
    dataPrincipalId: consent.dataPrincipalId,
    businessProcessRuleId: consent.businessProcessRuleId,
  };
}
