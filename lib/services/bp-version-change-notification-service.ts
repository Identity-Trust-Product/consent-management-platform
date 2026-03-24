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

/**
 * Business Process Version Change Notification Service
 *
 * This service handles sending emails to data principals when:
 * 1. New processing purposes are added to a business process version
 * 2. Existing processing purposes are modified in a business process version
 */

import prisma from "@/lib/prisma";
import { generateDprmLink } from "./dprm-service";
import { emailService } from "./email/email-service";

interface VersionChangeDetails {
  newPurposes: {
    id: string;
    name: string;
    description: string;
    userAttributeNames: string[];
  }[];
  modifiedPurposes: {
    id: string;
    name: string;
    changes: { field: string; before: string; after: string }[];
  }[];
  removedPurposes: {
    id: string;
    name: string;
  }[];
}

/**
 * Detect changes between two business process versions
 */
export async function detectVersionChanges(
  oldVersionId: string,
  newVersionId: string
): Promise<VersionChangeDetails> {
  // Get old version with full data
  const oldVersion = await prisma.businessProcess.findUnique({
    where: { publicId: oldVersionId },
    include: {
      businessProcessRules: {
        include: {
          processingPurpose: {
            include: {
              purposeOfProcessing: true,
              consentPurpose: true, // Include CP to check version
            },
          },
          consentPurpose: true,
        },
      },
      businessProcessToConsentPurposes: {
        include: {
          consentPurpose: true,
        },
      },
    },
  });

  // Get new version with full data
  const newVersion = await prisma.businessProcess.findUnique({
    where: { publicId: newVersionId },
    include: {
      businessProcessRules: {
        include: {
          processingPurpose: {
            include: {
              purposeOfProcessing: true,
              consentPurpose: true, // Include CP to check version
            },
          },
          consentPurpose: true,
        },
      },
      businessProcessToConsentPurposes: {
        include: {
          consentPurpose: true,
        },
      },
    },
  });

  if (!oldVersion || !newVersion) {
    throw new Error("Business process version not found");
  }

  const changes: VersionChangeDetails = {
    newPurposes: [],
    modifiedPurposes: [],
    removedPurposes: [],
  };

  // Check for Consent Purpose changes (version updates)
  const oldCPsMap = new Map(
    oldVersion.businessProcessToConsentPurposes.map((bpToCp) => [
      bpToCp.consentPurpose.code,
      bpToCp.consentPurpose,
    ])
  );

  const newCPsMap = new Map(
    newVersion.businessProcessToConsentPurposes.map((bpToCp) => [
      bpToCp.consentPurpose.code,
      bpToCp.consentPurpose,
    ])
  );

  // Detect CP version changes - this means PPs inside changed
  for (const [cpCode, newCP] of newCPsMap) {
    const oldCP = oldCPsMap.get(cpCode);
    if (oldCP && oldCP.version !== newCP.version) {
      // CP version changed - check which PPs in this CP changed
      const oldPPsInCP = oldVersion.businessProcessRules.filter(
        (rule) => rule.consentPurpose.code === cpCode
      );
      const newPPsInCP = newVersion.businessProcessRules.filter(
        (rule) => rule.consentPurpose.code === cpCode
      );

      // Compare PPs within this CP
      const oldPPsByPopId = new Map(
        oldPPsInCP.map((rule) => [
          rule.processingPurpose.purposeOfProcessingId,
          rule,
        ])
      );
      const newPPsByPopId = new Map(
        newPPsInCP.map((rule) => [
          rule.processingPurpose.purposeOfProcessingId,
          rule,
        ])
      );

      // Check for new PPs in this CP version
      for (const [popId, newRule] of newPPsByPopId) {
        if (!oldPPsByPopId.has(popId)) {
          changes.newPurposes.push({
            id: newRule.processingPurpose.publicId,
            name: newRule.processingPurpose.name,
            description: newRule.processingPurpose.description || "",
            userAttributeNames: newRule.processingPurpose.userAttributeNames,
          });
        }
      }

      // Check for modified PPs in this CP version
      for (const [popId, newRule] of newPPsByPopId) {
        const oldRule = oldPPsByPopId.get(popId);
        if (oldRule) {
          const ppChanges: {
            field: string;
            before: string;
            after: string;
          }[] = [];

          // Check for description changes
          if (
            oldRule.processingPurpose.description !==
            newRule.processingPurpose.description
          ) {
            ppChanges.push({
              field: "Description",
              before: oldRule.processingPurpose.description || "",
              after: newRule.processingPurpose.description || "",
            });
          }

          // Check for name changes
          if (
            oldRule.processingPurpose.name !== newRule.processingPurpose.name
          ) {
            ppChanges.push({
              field: "Name",
              before: oldRule.processingPurpose.name,
              after: newRule.processingPurpose.name,
            });
          }

          // Check for user attribute changes
          const oldAttrs =
            oldRule.processingPurpose.userAttributeNames.sort();
          const newAttrs =
            newRule.processingPurpose.userAttributeNames.sort();
          if (JSON.stringify(oldAttrs) !== JSON.stringify(newAttrs)) {
            ppChanges.push({
              field: "User Attributes",
              before: oldAttrs.join(", "),
              after: newAttrs.join(", "),
            });
          }

          // Check for mandatory flag changes
          if (oldRule.mandatory !== newRule.mandatory) {
            ppChanges.push({
              field: "Mandatory",
              before: oldRule.mandatory ? "Yes" : "No",
              after: newRule.mandatory ? "Yes" : "No",
            });
          }

          if (ppChanges.length > 0) {
            changes.modifiedPurposes.push({
              id: newRule.processingPurpose.publicId,
              name: newRule.processingPurpose.name,
              changes: ppChanges,
            });
          }
        }
      }

      // Check for removed PPs in this CP version
      for (const [popId, oldRule] of oldPPsByPopId) {
        if (!newPPsByPopId.has(popId)) {
          changes.removedPurposes.push({
            id: oldRule.processingPurpose.publicId,
            name: oldRule.processingPurpose.name,
          });
        }
      }
    }
  }

  // Also check for completely new or removed CPs
  // New CPs
  for (const [cpCode, newCP] of newCPsMap) {
    if (!oldCPsMap.has(cpCode)) {
      // All PPs in this CP are new
      const ppsInNewCP = newVersion.businessProcessRules.filter(
        (rule) => rule.consentPurpose.code === cpCode
      );
      for (const rule of ppsInNewCP) {
        changes.newPurposes.push({
          id: rule.processingPurpose.publicId,
          name: rule.processingPurpose.name,
          description: rule.processingPurpose.description || "",
          userAttributeNames: rule.processingPurpose.userAttributeNames,
        });
      }
    }
  }

  // Removed CPs
  for (const [cpCode, oldCP] of oldCPsMap) {
    if (!newCPsMap.has(cpCode)) {
      // All PPs in this CP are removed
      const ppsInOldCP = oldVersion.businessProcessRules.filter(
        (rule) => rule.consentPurpose.code === cpCode
      );
      for (const rule of ppsInOldCP) {
        changes.removedPurposes.push({
          id: rule.processingPurpose.publicId,
          name: rule.processingPurpose.name,
        });
      }
    }
  }

  return changes;
}

/**
 * Notify all data principals who have consented to the old version
 */
export async function notifyDataPrincipalsOfVersionChange(
  businessProcessCode: string,
  oldVersion: number,
  newVersionPublicId: string
) {
  try {
    // Get the old version
    const oldBp = await prisma.businessProcess.findFirst({
      where: {
        code: businessProcessCode,
        version: oldVersion,
      },
      select: {
        id: true,
        publicId: true,
        name: true,
        code: true,
      },
    });

    if (!oldBp) {
      console.error("Old business process version not found");
      return { success: false, error: "Old version not found" };
    }

    // Get the new version
    const newBp = await prisma.businessProcess.findUnique({
      where: { publicId: newVersionPublicId },
      select: {
        name: true,
      },
    });

    if (!newBp) {
      console.error("New business process version not found");
      return { success: false, error: "New version not found" };
    }

    // Get all BP IDs (database IDs) for this BP code - we need this to find notices
    const allBpVersions = await prisma.businessProcess.findMany({
      where: { code: businessProcessCode },
      select: { id: true },
    });
    const allBpIds = allBpVersions.map((bp) => bp.id);

    // Detect changes between versions
    const changes = await detectVersionChanges(
      oldBp.publicId,
      newVersionPublicId
    );

    // Get all unique data principals with active consents for the old version
    const activeConsents = await prisma.consent.findMany({
      where: {
        businessProcessId: oldBp.publicId,
        status: "accepted",
        isExpired: false,
      },
      select: {
        dataPrincipalId: true,
      },
      distinct: ["dataPrincipalId"],
    });

    // If no changes, no need to send emails
    if (
      changes.newPurposes.length === 0 &&
      changes.modifiedPurposes.length === 0
    ) {
      return {
        success: true,
        emailsSent: 0,
        emailsFailed: 0,
        changes,
      };
    }

    // Send emails to each data principal
    let emailsSent = 0;
    let emailsFailed = 0;

    for (const consent of activeConsents) {
      try {
        // Get principal's email and name from ANY notice (across all BP versions)
        // since email doesn't change between versions
        const notice = await prisma.notice.findFirst({
          where: {
            dataPrincipalId: consent.dataPrincipalId,
            businessProcessId: {
              in: allBpIds, // Search across all versions of this BP
            },
          },
          include: {
            metadata: true,
          },
          orderBy: { createdAt: "desc" },
        });

        if (!notice) {
          continue;
        }

        // Extract email and name from metadata
        const metadata = notice.metadata.reduce(
          (acc, item) => {
            acc[item.key] = item.value;
            return acc;
          },
          {} as Record<string, string>
        );

        const principalEmail = metadata.email || metadata.Email;
        const principalName = metadata.name || metadata.Name || "User";

        if (!principalEmail) {
          continue;
        }

        // Generate DPRM link
        const dprmLink = await generateDprmLink(
          consent.dataPrincipalId,
          new Date(Date.now() + 7 * 24 * 60 * 60 * 1000) // 7 days from now
        );

        // Send ONE email with both new and modified purposes grouped
        emailService
          .sendTemplatedEmail({
            templateName: "consent-version-changes",
            to: { email: principalEmail, name: principalName },
            variables: {
              principalName,
              businessProcessName: newBp.name,
              newPurposes: changes.newPurposes,
              modifiedPurposes: changes.modifiedPurposes,
              dprmLink,
            },
          })
          .catch((err) =>
            console.error(
              `Failed to send version change email to ${principalEmail}:`,
              err
            )
          );
        emailsSent++;
      } catch (emailError) {
        console.error(
          `Failed to send version change email to data principal ${consent.dataPrincipalId}:`,
          emailError
        );
        emailsFailed++;
      }
    }

    return {
      success: true,
      emailsSent,
      emailsFailed,
      changes,
    };
  } catch (error) {
    console.error("Error in notifyDataPrincipalsOfVersionChange:", error);
    return {
      success: false,
      error:
        error instanceof Error
          ? error.message
          : "Failed to notify data principals",
    };
  }
}
