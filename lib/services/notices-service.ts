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

import {
  ConsentChanges,
  generateConsentDiff,
  regroupBpData,
} from "@/app/cms/principal/dprm/[access_token]/consent-action-center/consent-diff";
import { BusinessProcessRuleSelection } from "@/components/notice";
import prisma from "@/lib/prisma";
import { generateAccessToken } from "@/lib/utils";
import { WebhookEventType } from "@prisma/client";
import { createConsents } from "./consents-service";
import { triggerWebhookEvent } from "./webhook-service";
import { sendForArtifactCreation } from "./artifact-creation-service";

// Notice submission validation interfaces
export interface NoticeSubmissionValidationError {
  code: string;
  message: string;
  details?: any;
}

export interface NoticeSubmissionValidationResult {
  isValid: boolean;
  errors: NoticeSubmissionValidationError[];
}

export interface NoticeConsentAcceptanceResult {
  success: boolean;
  message?: string;
  errors?: NoticeSubmissionValidationError[];
}

// Notice submission validation functions
function validateAtLeastOneRuleSelected(
  selections: BusinessProcessRuleSelection[],
): NoticeSubmissionValidationError | null {
  const selectedCount = selections.filter((s) => s.selected).length;
  if (selectedCount === 0) {
    return {
      code: "NO_RULES_SELECTED",
      message: "At least one rule must be selected to accept the notice",
      details: { selectedCount: 0 },
    };
  }
  return null;
}

function validateMandatoryRulesSelected(
  selections: BusinessProcessRuleSelection[],
  businessProcessRules: any[],
): NoticeSubmissionValidationError | null {
  const mandatoryRuleIds = businessProcessRules
    .filter((rule) => rule.mandatory)
    .map((rule) => rule.id);

  const unselectedMandatoryRules = mandatoryRuleIds.filter((ruleId) => {
    const selection = selections.find((s) => s.ruleId === ruleId);
    return !selection || !selection.selected;
  });

  if (unselectedMandatoryRules.length > 0) {
    return {
      code: "MANDATORY_RULES_NOT_SELECTED",
      message: "All mandatory rules must be selected",
      details: {
        unselectedMandatoryRuleIds: unselectedMandatoryRules,
        totalMandatoryRules: mandatoryRuleIds.length,
      },
    };
  }
  return null;
}

function validateNoDuplicateOrInvalidRules(
  selections: BusinessProcessRuleSelection[],
  businessProcessRules: any[],
): NoticeSubmissionValidationError | null {
  const validRuleIds = businessProcessRules.map((rule) => rule.id);
  const submittedRuleIds = selections.map((s) => s.ruleId);

  // Check for duplicates in submission
  const duplicateRuleIds = submittedRuleIds.filter(
    (id, index) => submittedRuleIds.indexOf(id) !== index,
  );

  if (duplicateRuleIds.length > 0) {
    return {
      code: "DUPLICATE_RULES",
      message: "Duplicate rules found in submission",
      details: { duplicateRuleIds },
    };
  }

  // Check for invalid rules (not in database)
  const invalidRuleIds = submittedRuleIds.filter(
    (id) => !validRuleIds.includes(id),
  );

  if (invalidRuleIds.length > 0) {
    return {
      code: "INVALID_RULES",
      message: "Invalid rules found in submission",
      details: {
        invalidRuleIds,
        validRuleIds: validRuleIds.slice(0, 10), // Show first 10 for reference
      },
    };
  }

  return null;
}

export async function validateNoticeSubmission(
  noticePublicId: string,
  selections: BusinessProcessRuleSelection[],
): Promise<NoticeSubmissionValidationResult> {
  const errors: NoticeSubmissionValidationError[] = [];

  try {
    // Fetch the notice with full business process data
    const notice = await getNoticeWithFullDataByPublicId(noticePublicId);

    if (!notice) {
      errors.push({
        code: "NOTICE_NOT_FOUND",
        message: "Notice not found",
        details: { noticePublicId },
      });
      return { isValid: false, errors };
    }

    const businessProcessRules = notice.businessProcess.businessProcessRules;

    // Validation 1: At least one rule must be selected
    const atLeastOneError = validateAtLeastOneRuleSelected(selections);
    if (atLeastOneError) {
      errors.push(atLeastOneError);
    }

    // Validation 2: All mandatory rules must be selected
    const mandatoryError = validateMandatoryRulesSelected(
      selections,
      businessProcessRules,
    );
    if (mandatoryError) {
      errors.push(mandatoryError);
    }

    // Validation 3: No duplicate or invalid rules
    const duplicateInvalidError = validateNoDuplicateOrInvalidRules(
      selections,
      businessProcessRules,
    );
    if (duplicateInvalidError) {
      errors.push(duplicateInvalidError);
    }

    return {
      isValid: errors.length === 0,
      errors,
    };
  } catch (error) {
    console.error("Error validating notice submission:", error);
    errors.push({
      code: "VALIDATION_ERROR",
      message: "Failed to validate notice submission",
      details: {
        error: error instanceof Error ? error.message : "Unknown error",
      },
    });
    return { isValid: false, errors };
  }
}

export async function getAllNotices() {
  try {
    getConsentNotice(
      "2ea3c6a7-da30-424a-b86f-a27d059fe927",
      "eb24e488-8eb7-42af-a4c5-1abcf25dd669",
    );
    const notices = await prisma.notice.findMany({
      include: {
        businessProcess: {
          select: {
            name: true,
            code: true,
          },
        },
        metadata: true,
      },
      orderBy: {
        updatedAt: "desc",
      },
    });
    return notices;
  } catch (error) {
    console.error("Error fetching notices:", error);
    throw new Error("Failed to fetch notices");
  }
}

export async function getNoticeById(id: number) {
  try {
    const notice = await prisma.notice.findUnique({
      where: { id },
      include: {
        businessProcess: {
          select: {
            name: true,
            code: true,
          },
        },
      },
    });
    return notice;
  } catch (error) {
    console.error("Error fetching notice:", error);
    throw new Error("Failed to fetch notice");
  }
}

export async function getNoticeByPublicId(publicId: string) {
  try {
    const notice = await prisma.notice.findUnique({
      where: { publicId },
      include: {
        businessProcess: {
          select: {
            name: true,
            code: true,
          },
        },
      },
    });
    return notice;
  } catch (error) {
    console.error("Error fetching notice by public ID:", error);
    throw new Error("Failed to fetch notice");
  }
}

export async function getBusinessProcessWithFullDataById(
  businessProcessId: number,
) {
  try {
    const businessProcess = await prisma.businessProcess.findUnique({
      where: { id: businessProcessId },
      select: {
        id: true,
        name: true,
        code: true,
        grantDescription: true,
        revokeDescription: true,
        reconsentDescription: true,
        legalDocuments: true,
        translations: true,
        supportedLanguages: true,
        businessProcessRules: {
          select: {
            id: true,
            mandatory: true,
            reconsentableByPrincipal: true,
            revocableByPrincipal: true,
            consentPurposeId: true,
            processingPurposeId: true,
            consentPurpose: {
              select: {
                id: true,
                name: true,
                code: true,
                description: true,
                translations: true,
                supportedLanguages: true,
              },
            },
            processingPurpose: {
              select: {
                id: true,
                name: true,
                description: true,
                userAttributeNames: true,
                translations: true,
                supportedLanguages: true,
                purposeOfProcessing: true,
              },
            },
          },
        },
        businessProcessToConsentPurposes: {
          select: {
            consentPurposeId: true,
            consentDuration: true,
          },
        },
      },
    });

    if (!businessProcess) return null;

    // Get all user attribute names from all processing purposes in rules
    const userAttributeNames = new Set<string>();
    businessProcess.businessProcessRules.forEach((rule) => {
      rule.processingPurpose.userAttributeNames.forEach((name) =>
        userAttributeNames.add(name),
      );
    });

    // Fetch user attributes
    const userAttributes = await prisma.userAttribute.findMany({
      where: {
        name: {
          in: Array.from(userAttributeNames),
        },
      },
      select: {
        id: true,
        name: true,
        pii: true,
        translations: true,
        supportedLanguages: true,
      },
    });

    // Create a map for quick lookup by name
    const userAttributesMap = new Map(
      userAttributes.map((ua) => [ua.name, ua]),
    );

    // Create consent duration map
    const consentDurationMap = new Map<number, number | null>();
    businessProcess.businessProcessToConsentPurposes.forEach((bpcp) => {
      consentDurationMap.set(bpcp.consentPurposeId, bpcp.consentDuration);
    });

    // Transform the data structure to be rules-based
    const transformedBusinessProcess = {
      ...businessProcess,
      legalDocuments: businessProcess.legalDocuments as
        | Record<string, string>
        | undefined,
      businessProcessRules: businessProcess.businessProcessRules.map(
        (rule) => ({
          id: rule.id,
          mandatory: rule.mandatory,
          reconsentableByPrincipal: rule.reconsentableByPrincipal,
          revocableByPrincipal: rule.revocableByPrincipal,
          consentPurposeId: rule.consentPurpose.id,
          processingPurposeId: rule.processingPurpose.id,
          consentPurpose: {
            id: rule.consentPurpose.id,
            name: rule.consentPurpose.name,
            code: rule.consentPurpose.code,
            description: rule.consentPurpose.description,
            consentDuration:
              consentDurationMap.get(rule.consentPurpose.id) || null,
            mandatory: false, // Will be computed in view mode processing
          },
          processingPurpose: {
            id: rule.processingPurpose.id,
            name: rule.processingPurpose.name,
            description: rule.processingPurpose.description,
            userAttributeNames: rule.processingPurpose.userAttributeNames,
            userAttributes: rule.processingPurpose.userAttributeNames
              .map((name) => userAttributesMap.get(name)!)
              .filter(Boolean),
            mandatory: rule.mandatory,
            reconsentableByPrincipal: rule.reconsentableByPrincipal,
            revocableByPrincipal: rule.revocableByPrincipal,
            showSelection: true, // Default to true, will be modified by view mode
          },
        }),
      ),
    };

    return transformedBusinessProcess;
  } catch (error) {
    console.error(
      "Error fetching business process with full data by ID:",
      error,
    );
    throw new Error("Failed to fetch business process with full data");
  }
}

export async function getNoticeWithFullDataByPublicId(publicId: string) {
  try {
    const notice = await prisma.notice.findUnique({
      where: { publicId },
      select: {
        id: true,
        publicId: true,
        status: true,
        consentDuration: true,
        dataPrincipalId: true,
        defaultLanguage: true,
        noticeConfig: true,
        updatedAt: true,
        forMinor: true,
        metadata: {
          select: {
            key: true,
            value: true,
          },
        },
        businessProcess: {
          select: {
            id: true,
            name: true,
            code: true,
            grantDescription: true,
            revokeDescription: true,
            reconsentDescription: true,
            legalDocuments: true,
            template: true,
            translations: true,
            supportedLanguages: true,
            businessProcessRules: {
              select: {
                id: true,
                mandatory: true,
                reconsentableByPrincipal: true,
                revocableByPrincipal: true,
                consentPurposeId: true,
                processingPurposeId: true,
                consentPurpose: {
                  select: {
                    id: true,
                    name: true,
                    code: true,
                    description: true,
                    translations: true,
                    supportedLanguages: true,
                  },
                },
                processingPurpose: {
                  select: {
                    id: true,
                    name: true,
                    description: true,
                    userAttributeNames: true,
                    translations: true,
                    supportedLanguages: true,
                    purposeOfProcessing: true,
                  },
                },
              },
            },
            businessProcessToConsentPurposes: {
              select: {
                consentPurposeId: true,
                consentDuration: true,
              },
            },
          },
        },
      },
    });

    if (!notice) return null;

    // Get all user attribute names from all processing purposes in rules
    const userAttributeNames = new Set<string>();
    notice.businessProcess.businessProcessRules.forEach((rule) => {
      rule.processingPurpose.userAttributeNames.forEach((name) =>
        userAttributeNames.add(name),
      );
    });

    // Fetch user attributes
    const userAttributes = await prisma.userAttribute.findMany({
      where: {
        name: {
          in: Array.from(userAttributeNames),
        },
      },
      select: {
        id: true,
        name: true,
        pii: true,
        translations: true,
        supportedLanguages: true,
      },
    });

    // Create a map for quick lookup by name
    const userAttributesMap = new Map(
      userAttributes.map((ua) => [ua.name, ua]),
    );

    // Create consent duration map
    const consentDurationMap = new Map<number, number | null>();
    notice.businessProcess.businessProcessToConsentPurposes.forEach((bpcp) => {
      consentDurationMap.set(bpcp.consentPurposeId, bpcp.consentDuration);
    });

    // Transform the data structure to be rules-based
    const transformedNotice = {
      ...notice,
      businessProcess: {
        ...notice.businessProcess,
        legalDocuments: notice.businessProcess.legalDocuments as
          | Record<string, string>
          | undefined,
        businessProcessRules: notice.businessProcess.businessProcessRules.map(
          (rule) => ({
            id: rule.id,
            mandatory: rule.mandatory,
            reconsentableByPrincipal: rule.reconsentableByPrincipal,
            revocableByPrincipal: rule.revocableByPrincipal,
            consentPurposeId: rule.consentPurpose.id,
            processingPurposeId: rule.processingPurpose.id,
            consentPurpose: {
              id: rule.consentPurpose.id,
              name: rule.consentPurpose.name,
              code: rule.consentPurpose.code,
              description: rule.consentPurpose.description,
              consentDuration:
                consentDurationMap.get(rule.consentPurpose.id) || null,
              mandatory: false, // Will be computed in view mode processing
              translations: rule.consentPurpose.translations,
              supportedLanguages: rule.consentPurpose.supportedLanguages,
            },
            processingPurpose: {
              id: rule.processingPurpose.id,
              name: rule.processingPurpose.name,
              description: rule.processingPurpose.description,
              userAttributeNames: rule.processingPurpose.userAttributeNames,
              userAttributes: rule.processingPurpose.userAttributeNames
                .map((name) => userAttributesMap.get(name)!)
                .filter(Boolean),
              mandatory: rule.mandatory,
              reconsentableByPrincipal: rule.reconsentableByPrincipal,
              revocableByPrincipal: rule.revocableByPrincipal,
              showSelection: true, // Default to true, will be modified by view mode
              translations: rule.processingPurpose.translations,
              supportedLanguages: rule.processingPurpose.supportedLanguages,
            },
          }),
        ),
      },
    };

    return transformedNotice;
  } catch (error) {
    console.error("Error fetching notice with full data by public ID:", error);
    throw new Error("Failed to fetch notice with full data");
  }
}

export async function getBusinessProcessesByCode(
  code: string,
  version: number,
) {
  try {
    // 1. Fetch all business processes matching the code
    const businessProcesses = await prisma.businessProcess.findMany({
      where: {
        code: code,
        version: {
          gte: version, // ✅ version > givenVersion
        },
      },
      // --- MODIFICATION: Order by version, not id ---
      orderBy: { version: "asc" }, // Order by version
      select: {
        id: true,
        name: true,
        code: true,
        // --- ADDITION: You must select the version column ---
        version: true,
        // --- End Addition ---
        grantDescription: true,
        revokeDescription: true,
        reconsentDescription: true,
        legalDocuments: true,
        businessProcessRules: {
          select: {
            id: true,
            mandatory: true,
            reconsentableByPrincipal: true,
            revocableByPrincipal: true,
            consentPurposeId: true,
            processingPurposeId: true,
            consentPurpose: {
              select: {
                id: true,
                name: true,
                code: true,
                description: true,
                translations: true,
                supportedLanguages: true,
              },
            },
            processingPurpose: {
              select: {
                id: true,
                name: true,
                description: true,
                userAttributeNames: true,
                translations: true,
                supportedLanguages: true,
                purposeOfProcessing: true,
              },
            },
          },
        },
        businessProcessToConsentPurposes: {
          select: {
            consentPurposeId: true,
            consentDuration: true,
          },
        },
      },
    });

    if (!businessProcesses || businessProcesses.length === 0) {
      return [];
    }

    // 2. Efficiently fetch all unique UserAttributes for all versions at once
    const allUserAttributeNames = new Set<string>();
    businessProcesses.forEach((bp) => {
      bp.businessProcessRules.forEach((rule) => {
        rule.processingPurpose.userAttributeNames.forEach((name) =>
          allUserAttributeNames.add(name),
        );
      });
    });

    const userAttributes = await prisma.userAttribute.findMany({
      where: {
        name: {
          in: Array.from(allUserAttributeNames),
        },
      },
      select: {
        id: true,
        name: true,
        pii: true,
        translations: true,
        supportedLanguages: true,
      },
    });

    const userAttributesMap = new Map(
      userAttributes.map((ua) => [ua.name, ua]),
    );

    // 3. Transform all fetched business processes in the array
    const transformedBusinessProcesses = businessProcesses.map(
      (businessProcess) => {
        const consentDurationMap = new Map<number, number | null>();
        businessProcess.businessProcessToConsentPurposes.forEach((bpcp) => {
          consentDurationMap.set(bpcp.consentPurposeId, bpcp.consentDuration);
        });

        return {
          ...businessProcess,
          legalDocuments: businessProcess.legalDocuments as
            | Record<string, string>
            | undefined,
          businessProcessRules: businessProcess.businessProcessRules.map(
            (rule) => ({
              id: rule.id,
              mandatory: rule.mandatory,
              reconsentableByPrincipal: rule.reconsentableByPrincipal,
              revocableByPrincipal: rule.revocableByPrincipal,
              consentPurposeId: rule.consentPurpose.id,
              processingPurposeId: rule.processingPurpose.id,
              consentPurpose: {
                id: rule.consentPurpose.id,
                name: rule.consentPurpose.name,
                code: rule.consentPurpose.code,
                description: rule.consentPurpose.description,
                consentDuration:
                  consentDurationMap.get(rule.consentPurpose.id) || null,
                mandatory: false,
              },
              processingPurpose: {
                id: rule.processingPurpose.id,
                name: rule.processingPurpose.name,
                description: rule.processingPurpose.description,
                userAttributeNames: rule.processingPurpose.userAttributeNames,
                userAttributes: rule.processingPurpose.userAttributeNames
                  .map((name) => userAttributesMap.get(name)!)
                  .filter(Boolean),
                mandatory: rule.mandatory,
                reconsentableByPrincipal: rule.reconsentableByPrincipal,
                revocableByPrincipal: rule.revocableByPrincipal,
                showSelection: true,
              },
            }),
          ),
        };
      },
    );

    return transformedBusinessProcesses as (typeof transformedBusinessProcesses)[0][];
  } catch (error) {
    console.error("Error fetching business processes by code:", error);
    throw new Error("Failed to fetch business processes by code");
  }
}

export async function deleteNotice(id: number) {
  try {
    await prisma.notice.delete({
      where: { id },
    });
    return { success: true };
  } catch (error) {
    console.error("Error deleting notice:", error);
    throw new Error("Failed to delete notice");
  }
}

export async function generateNoticeAccessToken(
  publicId: string,
  expiresAt: Date,
) {
  try {
    const attrs = { public_id: publicId };
    const accessToken = await generateAccessToken(attrs, expiresAt);
    return accessToken;
  } catch (error) {
    console.error("Error generating notice access token:", error);
    throw new Error("Failed to generate access token");
  }
}

export async function generateNoticeLink(noticeId: number) {
  try {
    // Get the notice to check if it has a valid expiry date and get public ID
    const notice = await getNoticeById(noticeId);
    if (!notice) {
      throw new Error("Notice not found");
    }

    // Use the notice's linkExpiresAt or default to half an hour from now
    const expiresAt =
      notice.linkExpiresAt || new Date(Date.now() + 30 * 60 * 1000);

    const accessToken = await generateNoticeAccessToken(
      notice.publicId,
      expiresAt,
    );

    const basePath =
      process.env.BASE_PATH || process.env.AUTH_URL || "http://localhost:3000";
    const noticeUrl = `${basePath}/principal/notice/${notice.publicId}/view/${accessToken}`;

    return noticeUrl;
  } catch (error) {
    console.error("Error generating notice link:", error);
    throw new Error("Failed to generate notice link");
  }
}

/**
 * Generate notice link from notice object (without DB lookup)
 * @param notice - Notice object with publicId and linkExpiresAt
 * @param isEmbed - Whether to generate embed link (adds ?embed=true)
 * @returns Full notice URL with access token
 */
export async function generateNoticeLinkFromObject(
  notice: { publicId: string; linkExpiresAt: Date | null },
  isEmbed: boolean = false,
): Promise<string> {
  const expiresAt =
    notice.linkExpiresAt || new Date(Date.now() + 30 * 60 * 1000);

  const accessToken = await generateNoticeAccessToken(
    notice.publicId,
    expiresAt,
  );

  const basePath =
    process.env.BASE_PATH || process.env.AUTH_URL || "http://localhost:3000";
  const link = `${basePath}/principal/notice/${notice.publicId}/view/${accessToken}`;

  return isEmbed ? `${link}?embed=true` : link;
}

/**
 * Submits a notice with data principal selections
 * This function expects all validations to have been performed
 * Updates notice status to 'submitted' and stores submission data
 * Does NOT await the complete_notice function
 */
export async function submitNotice(
  noticePublicId: string,
  selections: BusinessProcessRuleSelection[],
  language: string = "en",
): Promise<NoticeConsentAcceptanceResult> {
  try {
    // Create the data principal submitted data object
    const dataPrincipalSubmittedData: { [ruleId: string]: boolean } = {};
    selections.forEach((selection) => {
      dataPrincipalSubmittedData[selection.ruleId.toString()] =
        selection.selected;
    });

    // Update notice with submission data and mark as submitted
    const updatedNotice = await prisma.notice.update({
      where: { publicId: noticePublicId },
      data: {
        dataPrincipalSubmittedData,
        status: "submitted",
        updatedAt: new Date(),
      },
      include: {
        businessProcess: {
          select: {
            name: true,
            code: true,
            version: true,
          },
        },
      },
    });

    // Trigger NOTICE_SUBMITTED webhook (fire-and-forget)
    triggerWebhookEvent(WebhookEventType.NOTICE_SUBMITTED, {
      notice_id: updatedNotice.publicId,
      data_principal_id: updatedNotice.dataPrincipalId,
      reference_id: updatedNotice.referenceId,
      business_process_code: updatedNotice.businessProcess.code,
      business_process_name: updatedNotice.businessProcess.name,
      business_process_version: updatedNotice.businessProcess.version,
      status: updatedNotice.status,
      consent_status: "accepted",
      resource_type: "grant_notice",
      inserted_at: updatedNotice.createdAt.toISOString(),
      updated_at: updatedNotice.updatedAt.toISOString(),
      submitted_selections: selections,
    }).catch((webhookError) => {
      console.error(
        "Failed to trigger NOTICE_SUBMITTED webhook:",
        webhookError,
      );
      // Don't fail the submission if webhook fails
    });

    // Start the complete_notice process asynchronously (don't await)
    completeNotice(noticePublicId, selections, language).catch((error) => {
      console.error("Error in complete_notice process:", error);
      // update notice status to indicate completion error
      prisma.notice
        .update({
          where: { publicId: noticePublicId },
          data: {
            status: "completion_failed",
            statusReason:
              error instanceof Error ? error.message : "Unknown error",
          },
        })
        .catch(console.error);
    });
    const notice = await prisma.notice.update({
      where: { publicId: noticePublicId },
      data: { status: "completed" },
    });

    return {
      success: true,
      message:
        "Notice submitted successfully. Processing will complete in the background.",
    };
  } catch (error) {
    console.error("Error submitting notice:", error);
    return {
      success: false,
      message: "Failed to submit notice",
      errors: [
        {
          code: "SUBMISSION_ERROR",
          message: error instanceof Error ? error.message : "Unknown error",
          details: { noticePublicId },
        },
      ],
    };
  }
}

/**
 * Completes the notice processing by creating consents
 * This function is called asynchronously after submitNotice
 * Marks the notice as 'completed' after successful consent creation
 */
export async function completeNotice(
  noticePublicId: string,
  selections: BusinessProcessRuleSelection[],
  language: string = "en",
): Promise<void> {
  try {
    // Get the notice to access language and other details
    const notice = await prisma.notice.findUnique({
      where: { publicId: noticePublicId },
      select: {
        defaultLanguage: true,
        dataPrincipalId: true,
        businessProcessId: true,
      },
    });

    if (!notice) {
      throw new Error("Notice not found for completion");
    }

    // Create consents based on the selections using the user's selected language
    const consentResult = await createConsents(
      noticePublicId,
      selections,
      language,
    );

    if (!consentResult.success) {
      throw new Error(`Failed to create consents: ${consentResult}`);
    }

    // Mark notice as completed with accepted consent status
    const updatedNotice = await prisma.notice.update({
      where: { publicId: noticePublicId },
      data: {
        status: "completed",
        consentStatus: "accepted",
        markCompletedTimestamp: new Date(),
        updatedAt: new Date(),
      },
    });

    const bp = await prisma.businessProcess.findUnique({
      where: { id: updatedNotice.businessProcessId },
    });
    await sendForArtifactCreation(
      updatedNotice.dataPrincipalId,
      updatedNotice.referenceId,
      bp.code,
    );
  } catch (error) {
    console.error("Error completing notice:", error);
    throw error; // Re-throw to be caught by submitNotice
  }
}

export async function expireNotices() {
  try {
    const now = new Date();

    // Find all notices that are pending and have expired
    const expiredNotices = await prisma.notice.findMany({
      where: {
        status: "pending",
        linkExpiresAt: {
          lt: now,
        },
      },
      select: {
        id: true,
        publicId: true,
        dataPrincipalId: true,
        referenceId: true,
      },
    });

    if (expiredNotices.length === 0) {
      return { expiredCount: 0 };
    }

    // Update all expired notices to cancelled status
    const updateResult = await prisma.notice.updateMany({
      where: {
        id: {
          in: expiredNotices.map((notice) => notice.id),
        },
      },
      data: {
        status: "cancelled",
        statusReason: "system expiry",
      },
    });

    return {
      expiredCount: updateResult.count,
      expiredNotices: expiredNotices.map((notice) => ({
        id: notice.id,
        publicId: notice.publicId,
        dataPrincipalId: notice.dataPrincipalId,
        referenceId: notice.referenceId,
      })),
    };
  } catch (error) {
    console.error(`Error expiring notices:`, error);
    throw error;
  }
}

/**
 * Get resource type based on notice type
 * @param type - Type of notice ('grant', 'revoke', 'reconsent')
 * @returns Resource type string
 */
export function getNoticeResourceType(
  type: "grant" | "revoke" | "reconsent" = "grant",
): string {
  switch (type) {
    case "grant":
      return "grant_notice";
    case "revoke":
      return "revoke_notice";
    case "reconsent":
      return "reconsent_notice";
    default:
      return "grant_notice";
  }
}

/**
 * Generates a complete notice of all changes for a given data principal
 * by comparing their active consents against newer business process versions.
 *
 * @param dataPrincipalId The ID of the user.
 * @param prisma A Prisma client instance.
 * @returns A `ConsentChanges` object (Record<string, ServiceData>)
 * mapping BP codes to their diffs. Returns {} if no changes.
 */
export async function getConsentNotice(
  businessProcessId: string,
  dataPrincipalId: string,
): Promise<ConsentChanges> {
  const finalChanges: ConsentChanges = {};

  // --- Step 1: Get user's active consents and the BP version they consented to ---
  const activeConsents = await prisma.consent.findMany({
    where: {
      businessProcessId: businessProcessId,
      dataPrincipalId: dataPrincipalId,
      status: "accepted",
      isExpired: false, // Also check for expiration
    },
    include: {
      businessProcess: {
        select: {
          id: true,
          version: true,
          code: true,
          publicId: true,
        },
      },
    },
  });

  if (activeConsents.length === 0) {
    return {}; // No active consents, so no changes to show.
  }

  // --- Find the *latest* version the user consented to for each BP code ---
  const latestConsentedBp = new Map<
    string,
    { id: number; publicId: string; version: number }
  >();
  let version;
  for (const consent of activeConsents) {
    const bp = consent.businessProcess;
    const existing = latestConsentedBp.get(bp.code);

    // If we haven't seen this code, or if this consent is for a
    // newer version than one we've already seen, record it.
    version = bp.version;
    if (!existing || bp.version > existing.version) {
      latestConsentedBp.set(bp.code, {
        id: bp.id,
        publicId: bp.publicId,
        version: bp.version,
      });
    }
  }

  // --- Step 2, 3, 4: Get all versions and find newer ones ---
  for (const [
    code,
    { id: consentedVersionId },
  ] of latestConsentedBp.entries()) {
    try {
      // Get ALL versions for this code (using your existing function)
      const allBps = await getBusinessProcessesByCode(code, version);

      // Find the specific BP version the user consented to
      const oldBp = allBps.find((bp) => bp.id === consentedVersionId);

      // Find all BPs that are *newer* than the one they consented to
      const newBps = allBps
        .filter((bp) => bp.id > consentedVersionId)
        .sort((a, b) => a.id - b.id); // Sort ascending by ID/version

      // If there is no old BP or no new versions, there's nothing to diff
      if (!oldBp || newBps.length === 0) {
        continue;
      }

      // Get the *latest* version from the new versions
      const latestBp = newBps[newBps.length - 1];

      // --- Step 5, 6, 7, 8: Regroup, Diff, and store changes ---

      // 5. Regroup data for diffing
      const oldData = regroupBpData(oldBp);
      const newData = regroupBpData(latestBp);

      // 6. Generate diff
      const changes = generateConsentDiff(oldData, newData);

      // 7. Add to final result if changes exist
      if (changes) {
        finalChanges[code] = changes;
      }
    } catch (error) {
      console.error(`Failed to generate diff for BP code ${code}:`, error);
      // Decide if you want to stop or just skip this BP
    }
  }

  return finalChanges;
}
