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

import { BusinessProcessRuleSelection } from "@/components/notice";
import { CONSENT_BATCH_CONFIG } from "@/lib/constants/services";
import { NOTICE_METADATA_KEYS } from "@/lib/constants/notice-metadata";
import prisma from "@/lib/prisma";
import { WebhookEventType } from "@prisma/client";
import { generateDprmLink } from "./dprm-service";
import { triggerWebhookEvent } from "./webhook-service";

// Consent creation interfaces
export interface ConsentCreationData {
  requestId: string;
  requestType: string;
  referenceId: string;
  dataPrincipalId: string;
  businessProcessId: string;
  consentPurposeId: string;
  processingPurposeId: string;
  businessProcessRuleId: string;
  businessUnitId: string;
  userAttributeNames: string[];
  majorDataPrincipalId?: string;
  parentConsentId?: string;
  language: string;
  status: string;
  expiresAt?: Date;
  insertedAt?: Date; // Added to support date propagation
}

export interface ConsentCreationResult {
  success: boolean;
  consentsCreated: number;
  consentIds: string[];
  errors?: string[];
}

/**
 * Creates consents based on notice submission
 * This function will later expand to include audit and artifact creation
 */
export async function createConsents(
  noticePublicId: string,
  selections: BusinessProcessRuleSelection[],
  language: string = "en"
): Promise<ConsentCreationResult> {
  try {
    // Get the notice with full business process data
    const notice = await prisma.notice.findUnique({
      where: { publicId: noticePublicId },
      include: {
        businessProcess: {
          include: {
            businessUnit: true,
            businessProcessRules: {
              include: {
                consentPurpose: true,
                processingPurpose: true,
              },
            },
          },
        },
        metadata: true, // Include notice metadata
      },
    });

    if (!notice) {
      return {
        success: false,
        consentsCreated: 0,
        consentIds: [],
        errors: ["Notice not found"],
      };
    }

    // Extract major data principal ID from metadata if forMinor is true
    let majorDataPrincipalId: string | undefined = undefined;
    if (notice.forMinor && notice.metadata) {
      const majorMetadata = notice.metadata.find(
        (m) => m.key === NOTICE_METADATA_KEYS.MAJOR_DATA_PRINCIPAL_ID
      );
      if (majorMetadata) {
        majorDataPrincipalId = majorMetadata.value;
      }
    }

    const businessProcess = notice.businessProcess;
    const selectedRules = selections.filter((s) => s.selected);

    if (selectedRules.length === 0) {
      return {
        success: false,
        consentsCreated: 0,
        consentIds: [],
        errors: ["No rules selected for consent creation"],
      };
    }

    // Fetch consent durations for each consent purpose in this business process
    const consentDurationsMap =
      await prisma.businessProcessToConsentPurpose.findMany({
        where: {
          businessProcessId: businessProcess.id,
        },
        select: {
          consentPurposeId: true,
          consentDuration: true, // in hours
        },
      });

    // Create a map for quick lookup: consentPurposeId -> duration in hours
    const durationsMap = new Map<number, number | null>(
      consentDurationsMap.map((item) => [
        item.consentPurposeId,
        item.consentDuration,
      ])
    );

    const requestId = `req_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    const referenceId = notice.referenceId || `ref_${Date.now()}`;

    // Prepare consent creation data
    const consentData: ConsentCreationData[] = selectedRules.map(
      (selection) => {
        const rule = businessProcess.businessProcessRules.find(
          (r) => r.id === selection.ruleId
        );
        if (!rule) {
          throw new Error(
            `Process rule not found for ID: ${selection.ruleId}`
          );
        }

        // Calculate expiration date with proper priority
        let expiresAt: Date | undefined = undefined;

        // Priority 1: Notice-level consent duration (if provided and not 0)
        // consentDuration in Notice is stored in HOURS
        if (notice.consentDuration && notice.consentDuration > 0) {
          expiresAt = new Date(
            Date.now() + notice.consentDuration * 60 * 60 * 1000
          );
        }
        // Priority 2: Consent purpose-level duration (from business_processes_to_consent_purposes)
        // consentDuration here is also stored in HOURS
        else {
          const configuredDuration = durationsMap.get(rule.consentPurpose.id);
          if (configuredDuration && configuredDuration > 0) {
            expiresAt = new Date(
              Date.now() + configuredDuration * 60 * 60 * 1000
            );
          }
          // If both are null/0, expiresAt remains undefined (until purpose met)
        }

        return {
          requestId,
          requestType: "notice_submission",
          referenceId,
          dataPrincipalId: notice.dataPrincipalId,
          businessProcessId: businessProcess.publicId,
          consentPurposeId: rule.consentPurpose.publicId,
          processingPurposeId: rule.processingPurpose.publicId,
          businessProcessRuleId: rule.publicId,
          businessUnitId: businessProcess.businessUnit.publicId,
          userAttributeNames: rule.processingPurpose.userAttributeNames,
          majorDataPrincipalId, // Add major data principal ID if present
          language,
          status: "accepted",
          expiresAt,
        };
      }
    );

    // Create consents in the database
    try {
      const createdConsents = await prisma.consent.createMany({
        data: consentData,
      });

      // Get the created consent records with full details for webhook
      const createdConsentRecords = await prisma.consent.findMany({
        where: {
          requestId,
          dataPrincipalId: notice.dataPrincipalId,
        },
        include: {
          businessProcess: {
            select: {
              name: true,
              code: true,
              version: true,
            },
          },
          consentPurpose: {
            select: {
              name: true,
              code: true,
              version: true,
            },
          },
          processingPurpose: {
            select: {
              name: true,
              publicId: true,
              purposeOfProcessing: {
                select: {
                  code: true,
                },
              },
            },
          },
          businessUnit: {
            select: {
              name: true,
              code: true,
            },
          },
          businessProcessRule: {
            select: {
              mandatory: true,
              revocableByPrincipal: true,
              reconsentableByPrincipal: true,
            },
          },
        },
      });

      const consentIds = createdConsentRecords.map((c) => c.publicId);

      // CREATE AUDIT LOGS (Missing in provided snippet, adding back for consistency)
      const auditLogs = createdConsentRecords.map((c) => ({
        consentId: c.publicId,
        dataPrincipalId: c.dataPrincipalId,
        action: "GRANTED" as const,
        actor: "data_principal",
        details: { noticeId: noticePublicId, requestId },
      }));
      await prisma.consentAuditTrail.createMany({ data: auditLogs });

      // WEBHOOK TRIGGER
      const dprmLink = await generateDprmLink(notice.dataPrincipalId);
      const submittedConsents = createdConsentRecords.map((consent) => ({
        consent_purpose_name: consent.consentPurpose.name,
        consent_id: consent.publicId,
        consent_purpose_code: consent.consentPurpose.code,
        consent_purpose_version: consent.consentPurpose.version,
        processing_purpose_name: consent.processingPurpose.name,
        processing_purpose_code:
          consent.processingPurpose.purposeOfProcessing.code,
        user_attribute_name:
          consent.userAttributeNames.length > 0
            ? consent.userAttributeNames[0]
            : null,
        business_unit_name: consent.businessUnit.name,
        business_unit_code: consent.businessUnit.code,
        action: consent.status,
        inserted_at: consent.insertedAt.toISOString(),
        updated_at: consent.updatedAt.toISOString(),
        mandatory: consent.businessProcessRule.mandatory,
        parent_consent_id: consent.parentConsentId,
        performed_by: "self",
        reconsentable_by_principal:
          consent.businessProcessRule.reconsentableByPrincipal,
        revocable_by_principal:
          consent.businessProcessRule.revocableByPrincipal,
        minor_data_principal_id: consent.majorDataPrincipalId,
        has_parent: consent.majorDataPrincipalId !== null,
      }));

      if (createdConsentRecords.length > 0) {
        const first = createdConsentRecords[0];

        // Generate notice links
        const { generateNoticeLinkFromObject } = await import("./notices-service");
        const noticeLink = await generateNoticeLinkFromObject(notice, false);
        const embedLink = await generateNoticeLinkFromObject(notice, true);

        // Generate timeline link (DPRM link with timeline path)
        const basePath = process.env.BASE_PATH || process.env.AUTH_URL || "http://localhost:3000";
        const dprmAccessToken = dprmLink.split("/").pop(); // Extract token from DPRM link
        const timelineLink = `${basePath}/principal/consents/timeline/${notice.dataPrincipalId}/${dprmAccessToken}?type=data_principal_id&data_fiduciary_id=${first.businessUnit.code}&data_principal_ids[]=${notice.dataPrincipalId}`;

        // Get data_fiduciary_id from environment or business unit code
        const dataFiduciaryId = process.env.DATA_FIDUCIARY_ID || first.businessUnit.code;

        // Build consents array with full structure matching the expected format
        const consentsArray = submittedConsents.map((consent) => ({
          consent_id: consent.consent_id,
          consent_purpose_code: consent.consent_purpose_code,
          consent_purpose_name: consent.consent_purpose_name,
          consent_purpose_version: consent.consent_purpose_version,
          processing_purpose_code: consent.processing_purpose_code,
          processing_purpose_name: consent.processing_purpose_name,
          user_attribute_name: consent.user_attribute_name,
          entity_name: consent.user_attribute_name, // Same as user_attribute_name
          business_unit_name: consent.business_unit_name,
          business_unit_code: consent.business_unit_code,
          business_unit_version: 1, // Default version
          business_process_name: first.businessProcess.name,
          business_process_code: first.businessProcess.code,
          business_process_version: first.businessProcess.version,
          company_process_name: first.businessProcess.name, // Alias for business_process
          company_process_code: first.businessProcess.code,
          company_process_version: first.businessProcess.version,
          company_process_rule_id: consent.business_unit_code, // Placeholder - update if available
          policy_name: consent.business_unit_name, // Using business unit as policy
          policy_code: consent.business_unit_code,
          policy_version: 1,
          action: consent.action,
          inserted_at: consent.inserted_at,
          updated_at: consent.updated_at,
          expires_at: null, // Will be populated if consent has expiry
          mandatory: consent.mandatory,
          revocable_by_principal: consent.revocable_by_principal,
          reconsentable_by_principal: consent.reconsentable_by_principal,
          parent_consent_id: consent.parent_consent_id,
          performed_by: consent.performed_by,
          minor_data_principal_id: consent.minor_data_principal_id,
          has_parent: consent.has_parent,
          language: language,
          notice_id: requestId,
          reference_id: referenceId,
          data_principal_id: notice.dataPrincipalId,
          data_fiduciary_id: dataFiduciaryId,
          entity_id: null,
        }));

        // Build webhook payload matching the exact structure
        triggerWebhookEvent(WebhookEventType.CONSENT_CREATED, {
          business_process_code: first.businessProcess.code,
          business_process_name: first.businessProcess.name,
          business_process_version: first.businessProcess.version,
          company_process_code: first.businessProcess.code,
          company_process_name: first.businessProcess.name,
          company_process_version: first.businessProcess.version,
          consent_status: "accepted",
          data_fiduciary_id: dataFiduciaryId,
          data_principal_id: notice.dataPrincipalId,
          data_principal_submitted_data: {
            consents: consentsArray,
            language: language,
          },
          dprm_link: dprmLink,
          embed_link: embedLink,
          inserted_at: notice.createdAt.toISOString(),
          notice_id: requestId,
          notice_link: noticeLink,
          reference_id: referenceId,
          resource_type: "grant_notice",
          selected_language: language,
          status: "completed",
          submitted_consents: submittedConsents, // Keep for backward compatibility
          timeline_link: timelineLink,
          updated_at: new Date().toISOString(),
        }).catch((webhookError) => {
          console.error(
            "Failed to trigger CONSENT_CREATED webhook:",
            webhookError
          );
        });
      }

      return {
        success: true,
        consentsCreated: createdConsents.count,
        consentIds,
      };
    } catch (createError: any) {
      // Handle unique constraint violation specifically
      if (
        createError.code === "P2002" ||
        createError.message?.includes(
          "duplicate key value violates unique constraint"
        )
      ) {
        // Return success with 0 consents created since duplicates were prevented
        return {
          success: true,
          consentsCreated: 0,
          consentIds: [],
        };
      }

      // Re-throw other errors
      throw createError;
    }
  } catch (error) {
    console.error("Error creating consents:", error);
    return {
      success: false,
      consentsCreated: 0,
      consentIds: [],
      errors: [error instanceof Error ? error.message : "Unknown error"],
    };
  }
}

/**
 * Gets consents by data principal ID
 */
export async function getConsentsByDataPrincipal(dataPrincipalId: string) {
  try {
    const consents = await prisma.consent.findMany({
      where: { dataPrincipalId },
      include: {
        businessProcess: {
          select: {
            name: true,
            code: true,
          },
        },
        consentPurpose: {
          select: {
            name: true,
            code: true,
          },
        },
        processingPurpose: {
          select: {
            name: true,
            description: true,
          },
        },
        businessUnit: {
          select: {
            name: true,
            code: true,
          },
        },
      },
      orderBy: {
        insertedAt: "desc",
      },
    });

    return consents;
  } catch (error) {
    console.error("Error fetching consents:", error);
    throw new Error("Failed to fetch consents");
  }
}

/**
 * Gets consents by business process ID
 */
export async function getConsentsByBusinessProcess(businessProcessId: string) {
  try {
    const consents = await prisma.consent.findMany({
      where: { businessProcessId },
      include: {
        businessProcess: {
          select: {
            name: true,
            code: true,
          },
        },
        consentPurpose: {
          select: {
            name: true,
            code: true,
          },
        },
        processingPurpose: {
          select: {
            name: true,
            description: true,
          },
        },
        businessUnit: {
          select: {
            name: true,
            code: true,
          },
        },
      },
      orderBy: {
        insertedAt: "desc",
      },
    });

    return consents;
  } catch (error) {
    console.error("Error fetching consents:", error);
    throw new Error("Failed to fetch consents");
  }
}
/**
 * Checks if consent is expired
 */
export async function checkConsentExpiration(consentId: string) {
  try {
    const consent = await prisma.consent.findUnique({
      where: { publicId: consentId },
      select: {
        expiresAt: true,
        isExpired: true,
        status: true,
      },
    });

    if (!consent) {
      return { isExpired: false, error: "Consent not found" };
    }

    if (consent.isExpired) {
      return { isExpired: true, expiredAt: consent.expiresAt };
    }

    if (consent.expiresAt && consent.expiresAt < new Date()) {
      // Mark as expired
      await prisma.consent.update({
        where: { publicId: consentId },
        data: {
          isExpired: true,
          status: "expired",
        },
      });

      return { isExpired: true, expiredAt: consent.expiresAt };
    }

    return { isExpired: false };
  } catch (error) {
    console.error("Error checking consent expiration:", error);
    return { isExpired: false, error: "Failed to check expiration" };
  }
}

// Interface for user attribute with processing purpose details
export interface UserAttributeWithProcessingPurposes {
  userAttributeName: string;
  processingPurposes: {
    id: string;
    name: string;
    description: string | null;
  }[];
  totalCount: number;
}

/**
 * Gets top 5 user attributes with their processing purposes
 */
export async function getLatestActiveConsents(
  dataPrincipalId: string
): Promise<UserAttributeWithProcessingPurposes[]> {
  try {
    // Step 1: Single raw query to get top 5 attributes with their processing purpose IDs
    const topAttributesResult = await prisma.$queryRaw<
      Array<{
        attribute_name: string;
        purpose_ids: string[];
      }>
    >`
      SELECT
        attr.name AS attribute_name,
        ARRAY_AGG(pp.public_id ORDER BY c.inserted_at DESC) as purpose_ids
      FROM
        consents c
      JOIN
        processing_purposes pp ON c.processing_purpose_id = pp.public_id
      CROSS JOIN
        UNNEST(pp.user_attribute_names) AS attr(name)
      WHERE
        c.data_principal_id = ${dataPrincipalId} AND c.status = 'accepted' AND c.is_expired = false
      GROUP BY
        attribute_name
      ORDER BY
        COUNT(attr.name) DESC
      LIMIT 5;
    `;

    // Step 2: Get first 2 processing purpose IDs for each attribute and create a set
    const processingPurposeIdsToFetch = new Set<string>();
    const attributeProcessingPurposeMap = new Map<string, string[]>();

    for (const { attribute_name, purpose_ids } of topAttributesResult) {
      const firstTwoIds = purpose_ids.slice(0, 2);
      attributeProcessingPurposeMap.set(attribute_name, firstTwoIds);
      firstTwoIds.forEach((id) => processingPurposeIdsToFetch.add(id));
    }

    // Step 3: Query to get title and description of processing purposes
    const processingPurposes = await prisma.processingPurpose.findMany({
      where: {
        publicId: {
          in: Array.from(processingPurposeIdsToFetch),
        },
      },
      select: {
        publicId: true,
        name: true,
        description: true,
      },
    });

    // Create a map for quick lookup
    const processingPurposeMap = new Map(
      processingPurposes.map((pp) => [pp.publicId, pp])
    );

    // Step 4: Build the result
    const result: UserAttributeWithProcessingPurposes[] =
      topAttributesResult.map(({ attribute_name, purpose_ids }) => {
        const firstTwoIds =
          attributeProcessingPurposeMap.get(attribute_name) || [];
        const processingPurposesForAttribute = firstTwoIds
          .map((id) => processingPurposeMap.get(id))
          .filter(Boolean)
          .map((pp) => ({
            id: pp!.publicId,
            name: pp!.name,
            description: pp!.description,
          }));

        return {
          userAttributeName: attribute_name,
          processingPurposes: processingPurposesForAttribute,
          totalCount: purpose_ids.length,
        };
      });

    return result;
  } catch (error) {
    console.error("Error fetching latest active consents:", error);
    throw new Error("Failed to fetch latest active consents");
  }
}

// Consent validation interfaces and types
export interface ValidatedConsent {
  is_active: boolean;
  data_principal_id: string;
  processing_purpose_code: string;
  consent_id: string;
  status: string;
  business_process_code: string;
  business_process_version: number;
  consent_purpose_code: string;
  consent_purpose_version: number;
  recorded_at: string;
}

/**
 * Groups consents by unique business process rule and returns only the latest
 *
 * @param consents - Array of consents with related data
 * @returns Map of unique consent combinations to their latest consent
 */
export function groupConsentsByLatestRule(consents: any[]): Map<string, any> {
  const latestConsentsByRule = new Map<string, any>();

  for (const consent of consents) {
    // Key: dataPrincipalId + referenceId + businessProcessRuleId
    // This ensures we get the latest consent for each unique consent flow
    const key = `${consent.dataPrincipalId}_${consent.referenceId}_${consent.businessProcessRuleId}`;

    // If we haven't seen this combination, store it
    // Since consents are ordered by insertedAt desc, the first occurrence is the latest
    if (!latestConsentsByRule.has(key)) {
      latestConsentsByRule.set(key, consent);
    }
  }

  return latestConsentsByRule;
}

/**
 * Formats consents into API response format
 *
 * @param consents - Array of consents with related data
 * @returns Array of formatted consent objects
 */
export function formatConsentsForValidation(
  consents: any[]
): ValidatedConsent[] {
  return consents.map((consent) => ({
    is_active: consent.status === "accepted" && !consent.isExpired,
    data_principal_id: consent.dataPrincipalId,
    processing_purpose_code: consent.processingPurpose.purposeOfProcessing.code,
    consent_id: consent.publicId,
    status: consent.status,
    business_process_code: consent.businessProcess.code,
    business_process_version: consent.businessProcess.version,
    consent_purpose_code: consent.consentPurpose.code,
    consent_purpose_version: consent.consentPurpose.version,
    recorded_at: consent.insertedAt.toISOString(),
  }));
}

/**
 * Expires consents that have passed their expiration date
 * This function is called by the cron job every minute
 * Uses FOR UPDATE lock to prevent race conditions
 * Processes in batches to avoid transaction timeouts
 */
export async function expireConsents() {
  const BATCH_SIZE = CONSENT_BATCH_CONFIG.BATCH_SIZE;
  const MAX_TOTAL_RECORDS = CONSENT_BATCH_CONFIG.MAX_TOTAL_RECORDS;
  let totalExpiredCount = 0;

  const allExpiredConsents: Array<{
    id: number;
    publicId: string;
    dataPrincipalId: string;
    referenceId: string;
    businessProcessId: string;
    consentPurposeId: string;
    processingPurposeId: string;
    businessUnitId: string;
    userAttributeNames: string[];
    language: string;
    requestId: string;
    parentConsentId: string | null;
    insertedAt: Date;
    updatedAt: Date;
    expiresAt: Date;
  }> = [];

  try {
    const now = new Date();
    let processedCount = 0;

    // Process in batches until no more expired consents or max limit reached
    while (processedCount < MAX_TOTAL_RECORDS) {
      try {
        // Use a transaction with timeout and FOR UPDATE to lock rows
        const result = await prisma.$transaction(
          async (tx) => {
            // Find consents that need to be expired (with row-level locking)
            // We select all fields needed for both the return object and the audit log
            const expiredConsents = await tx.$queryRaw<
              Array<{
                id: number;
                public_id: string;
                data_principal_id: string;
                reference_id: string;
                business_process_id: string;
                consent_purpose_id: string;
                processing_purpose_id: string;
                business_unit_id: string;
                user_attribute_names: string[];
                language: string;
                request_id: string;
                parent_consent_id: string | null;
                inserted_at: Date;
                updated_at: Date;
                expires_at: Date;
              }>
            >`
              SELECT 
                id, 
                public_id, 
                data_principal_id, 
                reference_id,
                business_process_id,
                consent_purpose_id,
                processing_purpose_id,
                business_unit_id,
                user_attribute_names,
                language,
                request_id,
                parent_consent_id,
                inserted_at,
                updated_at,
                expires_at
              FROM consents
              WHERE expires_at IS NOT NULL
                AND is_expired = false
                AND expires_at < ${now}
                AND status = 'accepted'
              LIMIT ${BATCH_SIZE}
              FOR UPDATE SKIP LOCKED
            `;

            if (expiredConsents.length === 0) {
              return { expiredCount: 0, expiredConsents: [] };
            }

            const consentIds = expiredConsents.map((consent) => consent.id);

            // 1. Update the consents to mark them as expired
            await tx.consent.updateMany({
              where: {
                id: {
                  in: consentIds,
                },
              },
              data: {
                isExpired: true,
                status: "expired",
              },
            });

            // 2. Create Audit Trail Entries
            // We map the raw query results (snake_case) to the schema fields
            const auditLogs = expiredConsents.map((consent) => ({
              consentId: consent.public_id,
              dataPrincipalId: consent.data_principal_id,
              action: "EXPIRED" as const,
              actor: "system", // Cron job is a system actor
              timestamp: new Date(),
              details: {
                reason: "Consent expired automatically based on duration",
                expiredAt: consent.expires_at,
              },
            }));

            await tx.consentAuditTrail.createMany({
              data: auditLogs,
            });

            // Return the processed data formatted for the rest of the function
            return {
              expiredCount: expiredConsents.length,
              expiredConsents: expiredConsents.map((consent) => ({
                id: consent.id,
                publicId: consent.public_id,
                dataPrincipalId: consent.data_principal_id,
                referenceId: consent.reference_id,
                businessProcessId: consent.business_process_id,
                consentPurposeId: consent.consent_purpose_id,
                processingPurposeId: consent.processing_purpose_id,
                businessUnitId: consent.business_unit_id,
                userAttributeNames: consent.user_attribute_names,
                language: consent.language,
                requestId: consent.request_id,
                parentConsentId: consent.parent_consent_id,
                insertedAt: consent.inserted_at,
                updatedAt: consent.updated_at,
                expiresAt: consent.expires_at,
              })),
            };
          },
          {
            maxWait: 5000, // Wait max 5 seconds to start transaction
            timeout: 10000, // Transaction timeout after 10 seconds
          }
        );

        // If no more consents to expire, break the loop
        if (result.expiredCount === 0) {
          break;
        }

        // Accumulate results
        totalExpiredCount += result.expiredCount;
        allExpiredConsents.push(...result.expiredConsents);
        processedCount += result.expiredCount;

        // Trigger Webhooks (Fire and Forget - Outside Transaction)
        // We re-fetch details to get codes/names needed for the webhook payload
        const consentPublicIds = result.expiredConsents.map((c) => c.publicId);
        const consentsWithDetails = await prisma.consent.findMany({
          where: {
            publicId: {
              in: consentPublicIds,
            },
          },
          include: {
            businessProcess: true,
            consentPurpose: true,
            processingPurpose: {
              include: {
                purposeOfProcessing: true,
                processingPurposeToDataProcessors: {
                  include: {
                    dataProcessor: true,
                  },
                },
              },
            },
            businessUnit: true,
          },
        });

        const consentDetailsMap = new Map(
          consentsWithDetails.map((c) => [c.publicId, c])
        );

        result.expiredConsents.forEach((consent) => {
          const details = consentDetailsMap.get(consent.publicId);
          if (!details) {
            console.error(`Missing details for consent ${consent.publicId}`);
            return;
          }

          const userAttributeName =
            consent.userAttributeNames.length > 0
              ? consent.userAttributeNames[0]
              : null;

          // Extract data processor IDs for webhook targeting
          const dataProcessorIds = details.processingPurpose.processingPurposeToDataProcessors
            .map((dp) => dp.dataProcessor.ouId)
            .filter((id): id is string => id !== null);

          triggerWebhookEvent(
            WebhookEventType.CONSENT_EXPIRED,
            {
              business_process_code: details.businessProcess.code,
              business_process_version: details.businessProcess.version,
              consent_id: consent.publicId,
              consent_purpose_code: details.consentPurpose.code,
              consent_purpose_version: details.consentPurpose.version,
              data_principal_id: consent.dataPrincipalId,
              user_attribute_name: userAttributeName,
              status: "consent_expired",
              selected_language: consent.language,
              notice_id: consent.requestId,
              parent_consent_id: consent.parentConsentId,
              business_unit_code: details.businessUnit.code,
              processing_purpose_code:
                details.processingPurpose.purposeOfProcessing.code,
              reference_id: consent.referenceId,
              inserted_at: consent.insertedAt.toISOString(),
              updated_at: consent.updatedAt.toISOString(),
              expired_at: consent.expiresAt.toISOString(),
            },
            dataProcessorIds
          ).catch((webhookError) => {
            console.error(
              `Failed to trigger CONSENT_EXPIRED webhook for ${consent.publicId}:`,
              webhookError
            );
          });
        });

        if (result.expiredCount < BATCH_SIZE) {
          break;
        }
      } catch (batchError) {
        console.error(
          `[${now.toISOString()}] Error in batch processing:`,
          batchError
        );

        if (
          batchError instanceof Error &&
          (batchError.message.includes("Unable to start a transaction") ||
            batchError.message.includes("timeout"))
        ) {
          console.error(
            `[${now.toISOString()}] Transaction timeout - stopping batch processing`
          );
          break;
        }
        break;
      }
    }

    return {
      expiredCount: totalExpiredCount,
      expiredConsents: allExpiredConsents,
    };
  } catch (error) {
    console.error(
      `[${new Date().toISOString()}] Error expiring consents:`,
      error
    );
    throw error;
  }
}

/**
 * Get active consents overview for a data principal
 * Returns the count of active consents and unique business processes (services)
 */
export async function getActiveConsentsOverview(
  dataPrincipalId: string
): Promise<{
  activeConsentsCount: number;
  servicesCount: number;
}> {
  try {
    // Fetch active consents for the data principal
    const activeConsents = await prisma.consent.findMany({
      where: {
        dataPrincipalId,
        status: "accepted",
        isExpired: false,
      },
      select: {
        id: true,
        businessProcessId: true,
      },
    });

    // Get active consents count
    const activeConsentsCount = activeConsents.length;

    // Get unique business processes (services)
    const uniqueBusinessProcessIds = new Set(
      activeConsents.map((consent) => consent.businessProcessId)
    );
    const servicesCount = uniqueBusinessProcessIds.size;

    return {
      activeConsentsCount,
      servicesCount,
    };
  } catch (error) {
    console.error(
      `[${new Date().toISOString()}] Error fetching active consents overview:`,
      error
    );
    throw error;
  }
}

export async function fetchConsentHistoryFromDB(
  dataPrincipalId: string,
  referenceId: string,
  businessProcessCode: string
) {
  const consents = await prisma.consent.findMany({
    where: {
      dataPrincipalId: dataPrincipalId,
      referenceId: referenceId,
      businessProcess: {
        code: businessProcessCode, // Gets all versions sharing this code
      },
    },
    include: {
      businessProcess: true,
      processingPurpose: true,
      consentPurpose: true,
      auditTrail: {
        orderBy: { timestamp: "asc" }, // Ensure actions are ordered chronologically
      },
    },
    orderBy: {
      insertedAt: "asc", // Process oldest consents first to build the timeline forward
    },
  });

  if (consents.length === 0) {
    return {
      history: [],
      taxonomy_version: 1,
      id: dataPrincipalId,
      type: "reference_id",
    };
  }

  const currentBp = await prisma.businessProcess.findFirst({
    where: { code: businessProcessCode },
    orderBy: { version: "desc" }, // Get latest version
  });

  // Map to store grouped logs.
  // Key format: "ProcessingCode_ConsentCode_UserAttributeHash"
  const groupedLogs: Record<string, any> = {};

  for (const consent of consents) {
    // 3. Create a Unique Key for the "Trail"
    // A trail is defined by: Same Processing Purpose + Same Consent Purpose + Same Attributes
    // If any of these change, it's conceptually a different "permission"

    const attributesKey = consent.userAttributeNames.sort().join("|");
    const groupKey = `${consent.processingPurposeId}_${consent.consentPurpose.code}_${attributesKey}`;

    // 4. Initialize group if it doesn't exist
    if (!groupedLogs[groupKey]) {
      groupedLogs[groupKey] = {
        // Taxonomy codes
        consent_purpose_code: consent.consentPurpose.code,
        consent_purpose_name: consent.consentPurpose.name,
        consent_purpose_version: consent.consentPurpose.version,
        processing_purpose_code: consent.processingPurposeId,
        processing_purpose_name: consent.processingPurpose.name,

        // The mutable history log object
        log: {
          reference_id: consent.referenceId,
          language: consent.language,
          data_principal_id: consent.dataPrincipalId,
          major_data_principal_id: consent.majorDataPrincipalId,
          inserted_at: consent.insertedAt.toISOString(), // Keep original creation date
          user_attributes: consent.userAttributeNames,
          actions: [], // We will accumulate actions here
        },
      };
    }

    // 5. "Maintain the Trail": Update the existing log with latest state
    const entry = groupedLogs[groupKey];

    // Always update these to the *latest* consent's state
    entry.log.status = consent.status;
    entry.log.updated_at = consent.updatedAt.toISOString();
    entry.log.expires_at = consent.expiresAt
      ? consent.expiresAt.toISOString()
      : null;

    // Update rules (assuming latest version rules apply)
    entry.log.business_process_rules = {
      mandatory: false,
      reconsentable_by_principal: true,
      revocable_by_principal: true,
    };

    // 6. Merge Actions
    // We map the audit trail from THIS consent version and append it to the main list
    // This results in a list containing IDs from V1, V2, V3...
    const newActions = consent.auditTrail.map((audit) => ({
      action: audit.action.toLowerCase(), // e.g., 'granted', 'revoked', 'version_updated'
      consent_id: audit.consentId, // This ID changes per version
      performed_at: audit.timestamp.toISOString(),
      performed_by: audit.actor,
    }));

    entry.log.actions.push(...newActions);
  }

  // 7. Restructure for Final JSON Output
  // We need to group the flat logs back under "Processing Purposes"
  const outputProcessingPurposes: Record<string, any> = {};

  Object.values(groupedLogs).forEach((group: any) => {
    const ppCode = group.processing_purpose_code;

    if (!outputProcessingPurposes[ppCode]) {
      outputProcessingPurposes[ppCode] = {
        processing_purpose_code: group.processing_purpose_code,
        processing_purpose_name: group.processing_purpose_name,
        consent_purpose_code: group.consent_purpose_code, // Assuming 1:1 mapping for simplified structure
        consent_purpose_version: group.consent_purpose_version,
        history_logs: [],
      };
    }

    // Add the consolidated log (with merged actions) to the list
    outputProcessingPurposes[ppCode].history_logs.push(group.log);
  });

  // 8. Construct Final Payload
  const historyItem = {
    business_process_code: currentBp.code,
    business_process_name: currentBp.name,
    policy_code: currentBp.code,
    policy_name: currentBp.name,
    policy_version: currentBp.version,
    data_fiduciary_id: "idfy",
    processing_purposes: Object.values(outputProcessingPurposes),
  };

  return {
    history: [historyItem],
    id: dataPrincipalId,
    taxonomy_version: 1,
    type: "reference_id",
  };
}
