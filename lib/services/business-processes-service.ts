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
import {
  BusinessProcessState,
  detectBreakingChanges,
} from "@/lib/utils/business-process-breaking-changes";

// Interfaces for complex operations
interface ConsentPurposeConfig {
  id: number;
  consentPurposeId: number;
  durationType: "until_purpose_met" | "custom_duration";
  consentDuration?: number;
  durationUnit?: "days" | "weeks" | "months" | "years";
  processingRules: Array<{
    processingPurposeId: number;
    userAttributeNames?: string[];
    isMandatory: boolean;
    isReconsentable: boolean;
    isRevocable: boolean;
    retentionDurationValue?: number;
    retentionDurationUnit?: string;
  }>;
}

interface BusinessProcessFormData {
  // Step 1 data
  name: string;
  code: string;
  businessUnitId: number;
  grantDescription: string;
  revokeDescription?: string;
  reconsentDescription?: string;

  // Step 2 data
  consentPurposes: ConsentPurposeConfig[];

  // Step 3 data
  legalDocuments?: Record<string, string>;
}

// Basic CRUD operations for business processes
export async function getAllBusinessProcesses() {
  try {
    const businessProcesses = await prisma.businessProcess.findMany({
      include: {
        businessUnit: {
          select: {
            name: true,
            code: true,
          },
        },
      },
      orderBy: {
        updatedAt: "desc",
      },
    });
    return businessProcesses;
  } catch (error) {
    console.error("Error fetching business processes:", error);
    throw new Error("Failed to fetch business processes");
  }
}

export async function getBusinessProcessById(id: number) {
  try {
    // 1. Fetch the business process and its relations (same as your original query)
    const businessProcess = await prisma.businessProcess.findUnique({
      where: { id },
      include: {
        businessUnit: {
          select: {
            id: true,
            name: true,
            code: true,
          },
        },
        businessProcessRules: {
          include: {
            consentPurpose: {
              select: {
                id: true,
                name: true,
                code: true,
              },
            },
            processingPurpose: {
              select: {
                id: true,
                name: true,
                userAttributeNames: true,
              },
            },
          },
        },
        businessProcessToConsentPurposes: {
          include: {
            consentPurpose: {
              select: {
                id: true,
                name: true,
                code: true,
                version: true,
              },
            },
          },
        },
      },
    });

    // 2. If no process or no consent purposes, return the result immediately
    if (
      !businessProcess ||
      !businessProcess.businessProcessToConsentPurposes ||
      businessProcess.businessProcessToConsentPurposes.length === 0
    ) {
      return businessProcess;
    }

    // 3. --- NEW LOGIC STARTS HERE ---
    // Collect all unique consent purpose codes from the result
    const consentPurposeCodes = [
      ...new Set(
        businessProcess.businessProcessToConsentPurposes.map(
          (bpToCp) => bpToCp.consentPurpose.code,
        ),
      ),
    ];

    // 4. Run a single "groupBy" query to find the max version for each code
    const maxVersions = await prisma.consentPurpose.groupBy({
      by: ["code"], // Group by the code
      where: {
        code: {
          in: consentPurposeCodes, // Only for the codes we care about
        },
      },
      _max: {
        version: true, // Get the maximum version
      },
    });

    // 5. Create a simple lookup map for max versions (e.g., { 'CP_CODE_A': 3 })
    const maxVersionMap = new Map<string, number | null>();
    for (const item of maxVersions) {
      maxVersionMap.set(item.code, item._max.version);
    }

    // 6. Augment the consent purposes with the new flag
    // We must re-map the array to create new objects with the added field
    const augmentedBpToCps =
      businessProcess.businessProcessToConsentPurposes.map((bpToCp) => {
        const cp = bpToCp.consentPurpose;
        const maxVersionForCode = maxVersionMap.get(cp.code);

        // The flag is true if a max version was found AND it's greater than the current one
        const hasNewerVersion =
          maxVersionForCode !== null &&
          maxVersionForCode !== undefined &&
          maxVersionForCode > cp.version;

        // Convert retention duration (hours) to value/unit for each rule
        // Filter rules for this specific consent purpose from the main businessProcess.businessProcessRules array
        const rules =
          businessProcess.businessProcessRules?.filter(
            (r) => r.consentPurposeId === cp.id,
          ) || [];
        const augmentedRules = rules.map((rule: any) => {
          let value = rule.retentionDurationValue;
          let unit = rule.retentionDurationUnit;

          // If we have retentionDuration (hours) but no value/unit (which is expected now), convert it
          if (
            rule.retentionDuration !== null &&
            rule.retentionDuration !== undefined
          ) {
            const hours = rule.retentionDuration;
            if (hours % (24 * 365) === 0) {
              value = hours / (24 * 365);
              unit = "years";
            } else if (hours % (24 * 30) === 0) {
              value = hours / (24 * 30);
              unit = "months";
            } else if (hours % (24 * 7) === 0) {
              value = hours / (24 * 7);
              unit = "weeks";
            } else if (hours % 24 === 0) {
              value = hours / 24;
              unit = "days";
            } else {
              // Fallback to days with decimal if needed, or just days
              value = parseFloat((hours / 24).toFixed(2));
              unit = "days";
            }
          }

          return {
            ...rule,
            retentionDurationValue: value,
            retentionDurationUnit: unit,
          };
        });

        return {
          ...bpToCp, // Keep all original join table properties
          consentPurpose: {
            ...cp, // Keep all original consent purpose properties
            businessProcessRules: augmentedRules, // Use our augmented rules
            hasNewerVersion: hasNewerVersion, // Add our new flag
          },
        };
      });

    // 7. Return the modified businessProcess object
    // We create a new object, replacing the original array with our augmented one
    return {
      ...businessProcess,
      businessProcessToConsentPurposes: augmentedBpToCps,
    };
  } catch (error) {
    console.error("Error fetching business process:", error);
    throw new Error("Failed to fetch business process");
  }
}

export async function createBusinessProcess(data: {
  name: string;
  code: string;
  status?: string;
  grantDescription: string;
  revokeDescription?: string;
  reconsentDescription?: string;
  defaultLanguage?: string;
  supportedLanguages?: string[];
  legalDocuments?: any;
  creationType?: string;
  createdBy: string;
  businessUnitId: number;
}) {
  try {
    const businessProcess = await prisma.businessProcess.create({
      data: {
        name: data.name,
        code: data.code,
        status: data.status || "draft",
        grantDescription: data.grantDescription,
        revokeDescription: data.revokeDescription || null,
        reconsentDescription: data.reconsentDescription || null,
        defaultLanguage: data.defaultLanguage ?? "en",
        supportedLanguages: data.supportedLanguages ?? ["en"],
        legalDocuments: data.legalDocuments ?? {},
        creationType: data.creationType || "manual",
        createdBy: data.createdBy,
        businessUnitId: data.businessUnitId,
      },
    });
    return businessProcess;
  } catch (error) {
    console.error("Error creating business process:", error);
    throw new Error("Failed to create business process");
  }
}

export async function updateBusinessProcess(
  id: number,
  data: {
    name?: string;
    code?: string;
    status?: string;
    grantDescription?: string;
    revokeDescription?: string;
    reconsentDescription?: string;
    defaultLanguage?: string;
    supportedLanguages?: string[];
    legalDocuments?: any;
    creationType?: string;
    businessUnitId?: number;
  },
) {
  try {
    const businessProcess = await prisma.businessProcess.update({
      where: { id },
      data,
    });
    return businessProcess;
  } catch (error) {
    console.error("Error updating business process:", error);
    throw new Error("Failed to update business process");
  }
}

export async function deleteBusinessProcess(id: number) {
  try {
    // Use transaction to ensure all deletes succeed or all fail
    await prisma.$transaction(async (tx) => {
      // Delete business process rules related to this business process
      await tx.businessProcessRule.deleteMany({
        where: { businessProcessId: id },
      });

      // Delete business process to consent purpose mappings
      await tx.businessProcessToConsentPurpose.deleteMany({
        where: { businessProcessId: id },
      });

      // Finally, delete the business process itself
      await tx.businessProcess.delete({
        where: { id },
      });
    });

    return { success: true };
  } catch (error) {
    console.error("Error deleting business process:", error);
    throw new Error("Failed to delete business process");
  }
}

// Core business process management operations
// Note: Step-specific logic is handled in the actions layer,
// this service focuses on core create/update business logic
export async function saveOrUpdateBusinessProcess(
  formData: BusinessProcessFormData,
  createdBy: string,
  businessProcessId?: number,
  status?: string,
) {
  try {
    const result = await prisma.$transaction(async (tx) => {
      let businessProcess;

      if (businessProcessId) {
        // Prepare update data
        const updateData: any = {
          name: formData.name,
          code: formData.code,
          grantDescription: formData.grantDescription,
          revokeDescription: formData.revokeDescription || null,
          reconsentDescription: formData.reconsentDescription || null,
          businessUnitId: formData.businessUnitId,
          ...(status && { status }),
          // Only update legalDocuments if provided
          ...(formData.legalDocuments && {
            legalDocuments: formData.legalDocuments,
          }),
        };

        // Update existing business process - only update basic fields and status
        businessProcess = await tx.businessProcess.update({
          where: { id: businessProcessId },
          data: updateData,
        });

        // Only update consent purposes if they are provided
        if (formData.consentPurposes && formData.consentPurposes.length > 0) {
          // Delete existing consent purpose relationships and rules
          await tx.businessProcessRule.deleteMany({
            where: { businessProcessId },
          });
          await tx.businessProcessToConsentPurpose.deleteMany({
            where: { businessProcessId },
          });
        }
      } else {
        // Create new business process
        businessProcess = await tx.businessProcess.create({
          data: {
            name: formData.name,
            code: formData.code,
            status: status || "draft",
            grantDescription: formData.grantDescription,
            revokeDescription: formData.revokeDescription || null,
            reconsentDescription: formData.reconsentDescription || null,
            defaultLanguage: "en",
            supportedLanguages: ["en"],
            legalDocuments: formData.legalDocuments || {},
            template: "default",
            creationType: "manual",
            createdBy,
            businessUnitId: formData.businessUnitId,
          },
        });
      }

      // 2. Create BusinessProcessToConsentPurpose records and BusinessProcessRules
      // Only do this if consent purposes are provided and not empty
      if (formData.consentPurposes && formData.consentPurposes.length > 0) {
        for (const consentConfig of formData.consentPurposes) {
          // Calculate duration in hours
          let durationInHours: number | null = null;

          if (
            consentConfig.durationType === "custom_duration" &&
            consentConfig.consentDuration
          ) {
            const duration = consentConfig.consentDuration;
            const unit = consentConfig.durationUnit || "days";

            switch (unit) {
              case "days":
                durationInHours = duration * 24;
                break;
              case "weeks":
                durationInHours = duration * 24 * 7;
                break;
              case "months":
                durationInHours = duration * 24 * 30; // approximate
                break;
              case "years":
                durationInHours = duration * 24 * 365; // approximate
                break;
              default:
                durationInHours = duration * 24; // default to days
            }
          }

          // Create BusinessProcessToConsentPurpose record
          await tx.businessProcessToConsentPurpose.create({
            data: {
              businessProcessId: businessProcess.id,
              consentPurposeId: consentConfig.consentPurposeId,
              consentDuration: durationInHours,
            },
          });

          // Create BusinessProcessRule records for each processing purpose
          for (const rule of consentConfig.processingRules) {
            await tx.businessProcessRule.create({
              data: {
                businessProcessId: businessProcess.id,
                consentPurposeId: consentConfig.consentPurposeId,
                processingPurposeId: rule.processingPurposeId,
                mandatory: rule.isMandatory,
                reconsentableByPrincipal: rule.isReconsentable,
                revocableByPrincipal: rule.isRevocable,
                retentionDuration:
                  rule.retentionDurationValue !== undefined &&
                    rule.retentionDurationValue !== null &&
                    rule.retentionDurationUnit
                    ? (() => {
                      const val = rule.retentionDurationValue;
                      switch (rule.retentionDurationUnit) {
                        case "years":
                          return val * 365 * 24;
                        case "months":
                          return val * 30 * 24;
                        case "weeks":
                          return val * 7 * 24;
                        case "days":
                        default:
                          return val * 24;
                      }
                    })()
                    : null,
                createdBy,
              },
            });
          }
        }
      }

      return businessProcess;
    });

    return result;
  } catch (error) {
    console.error("Error saving business process:", error);
    throw new Error("Failed to save business process");
  }
}

export async function saveBusinessProcess(
  formData: BusinessProcessFormData,
  createdBy: string,
) {
  try {
    const result = await prisma.$transaction(async (tx) => {
      // 1. Create the business process
      const businessProcess = await tx.businessProcess.create({
        data: {
          name: formData.name,
          code: formData.code,
          status: "draft",
          grantDescription: formData.grantDescription,
          revokeDescription: formData.revokeDescription || null,
          reconsentDescription: formData.reconsentDescription || null,
          defaultLanguage: "en",
          supportedLanguages: ["en"],
          legalDocuments: {},
          template: "default",
          creationType: "manual",
          createdBy,
          businessUnitId: formData.businessUnitId,
        },
      });

      // 2. Create BusinessProcessToConsentPurpose records and BusinessProcessRules
      for (const consentConfig of formData.consentPurposes) {
        // Calculate duration in hours
        let durationInHours: number | null = null;

        if (
          consentConfig.durationType === "custom_duration" &&
          consentConfig.consentDuration
        ) {
          const duration = consentConfig.consentDuration;
          const unit = consentConfig.durationUnit || "days";

          switch (unit) {
            case "days":
              durationInHours = duration * 24;
              break;
            case "weeks":
              durationInHours = duration * 24 * 7;
              break;
            case "months":
              durationInHours = duration * 24 * 30; // approximate
              break;
            case "years":
              durationInHours = duration * 24 * 365; // approximate
              break;
            default:
              durationInHours = duration * 24; // default to days
          }
        }

        // Create BusinessProcessToConsentPurpose record
        await tx.businessProcessToConsentPurpose.create({
          data: {
            businessProcessId: businessProcess.id,
            consentPurposeId: consentConfig.consentPurposeId,
            consentDuration: durationInHours,
          },
        });

        // Create BusinessProcessRule records for each processing purpose
        for (const rule of consentConfig.processingRules) {
          await tx.businessProcessRule.create({
            data: {
              businessProcessId: businessProcess.id,
              consentPurposeId: consentConfig.consentPurposeId,
              processingPurposeId: rule.processingPurposeId,
              mandatory: rule.isMandatory,
              reconsentableByPrincipal: rule.isReconsentable,
              revocableByPrincipal: rule.isRevocable,
              retentionDuration:
                rule.retentionDurationValue !== undefined &&
                  rule.retentionDurationValue !== null &&
                  rule.retentionDurationUnit
                  ? (() => {
                    const val = rule.retentionDurationValue;
                    switch (rule.retentionDurationUnit) {
                      case "years":
                        return val * 365 * 24;
                      case "months":
                        return val * 30 * 24;
                      case "weeks":
                        return val * 7 * 24;
                      case "days":
                      default:
                        return val * 24;
                    }
                  })()
                  : null,
              createdBy,
            },
          });
        }
      }

      return businessProcess;
    });

    return result;
  } catch (error) {
    console.error("Error saving business process:", error);
    throw new Error("Failed to save business process");
  }
}

// Data fetching utilities for forms and dropdowns
export async function getPublishedConsentPurposes() {
  try {
    const consentPurposes = await prisma.consentPurpose.findMany({
      where: {
        status: "published",
      },
      include: {
        processingPurposes: {
          where: {
            status: "published",
          },
          include: {
            purposeOfProcessing: true,
          },
        },
      },
      orderBy: {
        name: "asc",
      },
    });

    return consentPurposes;
  } catch (error) {
    console.error("Error fetching published consent purposes:", error);
    throw new Error("Failed to fetch published consent purposes");
  }
}

export async function getBusinessProcessFormData() {
  try {
    const [consentPurposes, userAttributes, dataProcessors] = await Promise.all(
      [
        getPublishedConsentPurposes(),
        prisma.userAttribute.findMany({
          orderBy: { name: "asc" },
        }),
        prisma.dataProcessor.findMany({
          where: { active: true },
          orderBy: { brandName: "asc" },
        }),
      ],
    );

    return {
      consentPurposes,
      userAttributes,
      dataProcessors,
    };
  } catch (error) {
    console.error("Error fetching business process form data:", error);
    throw new Error("Failed to fetch business process form data");
  }
}

// Utility functions for validation
export async function checkBusinessProcessCodeExists(
  code: string,
  excludeId?: number,
) {
  try {
    // Build the where clause to find business processes with the same code
    const where: any = { code };

    // If excludeId is provided, exclude that specific record
    if (excludeId !== undefined) {
      where.id = { not: excludeId };
    }

    const businessProcess = await prisma.businessProcess.findFirst({
      where,
    });

    // Return true if a business process with this code exists (excluding the current one)
    return !!businessProcess;
  } catch (error) {
    console.error("Error checking business process code:", error);
    throw new Error("Failed to check business process code");
  }
}

/**
 * Save or publish business process with automatic versioning support
 *
 * Logic:
 * 1. If new BP → create with version 1
 * 2. If editing draft BP → update in place (no versioning)
 * 3. If editing published BP:
 *    - Detect breaking changes (Step 2 only)
 *    - If breaking changes → create new version (increment version)
 *    - If no breaking changes → update in place
 */
export async function saveOrUpdateBusinessProcessWithVersioning(
  clientState: BusinessProcessState,
  createdBy: string,
  businessProcessId?: number,
  status?: string,
) {
  try {
    // Calculate supported languages from translations
    const translations = clientState.step4Data?.translations || {};
    const supportedLanguages =
      Object.keys(translations).length > 0 ? Object.keys(translations) : ["en"]; // Default to English if no translations

    // Detect breaking changes
    const breakingChanges = detectBreakingChanges(
      clientState.baseline,
      clientState,
    );
    const hasBreakingChanges = breakingChanges.length > 0;

    const result = await prisma.$transaction(async (tx) => {
      let bpId = businessProcessId;
      const bpStatus = status || "draft";
      let isNewVersion = false;

      if (!clientState.step1Data) {
        throw new Error("Step 1 data is required");
      }

      // Determine if we need to create a new version
      if (hasBreakingChanges && bpId) {
        const currentBP = await tx.businessProcess.findUnique({
          where: { id: bpId },
          select: { version: true, code: true, status: true },
        });

        if (!currentBP) {
          throw new Error("Business process not found");
        }

        // Only create new version if current BP is published
        if (currentBP.status === "published") {
          // Find the highest version for this code to avoid conflicts
          const highestVersion = await getLatestBusinessProcessVersionByCode(
            currentBP.code,
          );

          const newVersion = highestVersion + 1;

          // Create new version
          const newBP = await tx.businessProcess.create({
            data: {
              name: clientState.step1Data.name,
              code: currentBP.code, // Keep same code
              version: newVersion, // Use calculated version
              status: bpStatus,
              grantDescription: clientState.step1Data.grantDescription,
              revokeDescription:
                clientState.step1Data.revokeDescription || null,
              reconsentDescription:
                clientState.step1Data.reconsentDescription || null,
              businessUnit: {
                connect: { id: clientState.step1Data.businessUnitId },
              },
              template: "default",
              defaultLanguage: "en",
              supportedLanguages: supportedLanguages,
              translations: clientState.step4Data?.translations || {},
              legalDocuments: clientState.step3Data?.legalDocuments || {},
              publishedAt: bpStatus === "published" ? new Date() : null,
              creationType: "manual",
              createdBy,
            },
          });

          bpId = newBP.id;
          isNewVersion = true;
        } else {
          // Draft BP with breaking changes → update in place
          await tx.businessProcess.update({
            where: { id: bpId },
            data: {
              name: clientState.step1Data.name,
              code: clientState.step1Data.code,
              status: bpStatus,
              grantDescription: clientState.step1Data.grantDescription,
              revokeDescription:
                clientState.step1Data.revokeDescription || null,
              reconsentDescription:
                clientState.step1Data.reconsentDescription || null,
              businessUnitId: clientState.step1Data.businessUnitId,
              supportedLanguages: supportedLanguages,
              template: "default",
              translations: clientState.step4Data?.translations || {},
              legalDocuments: clientState.step3Data?.legalDocuments || {},
              publishedAt: bpStatus === "published" ? new Date() : null,
            },
          });
        }
      } else if (bpId) {
        // Update existing (no breaking changes or draft)

        const updateData = {
          name: clientState.step1Data.name,
          code: clientState.step1Data.code,
          status: bpStatus,
          grantDescription: clientState.step1Data.grantDescription,
          revokeDescription: clientState.step1Data.revokeDescription || null,
          reconsentDescription:
            clientState.step1Data.reconsentDescription || null,
          businessUnitId: clientState.step1Data.businessUnitId,
          supportedLanguages: supportedLanguages,
          template: "default",
          translations: clientState.step4Data?.translations || {},
          legalDocuments: clientState.step3Data?.legalDocuments || {},
          publishedAt: bpStatus === "published" ? new Date() : null,
        };

        await tx.businessProcess.update({
          where: { id: bpId },
          data: updateData,
        });
      } else {
        const translationsToSave = clientState.step4Data?.translations || {};
        const legalDocsToSave = clientState.step3Data?.legalDocuments || {};

        // Create new BP
        const newBP = await tx.businessProcess.create({
          data: {
            name: clientState.step1Data.name,
            code: clientState.step1Data.code,
            version: 1, // First version
            status: bpStatus,
            grantDescription: clientState.step1Data.grantDescription,
            revokeDescription: clientState.step1Data.revokeDescription || null,
            reconsentDescription:
              clientState.step1Data.reconsentDescription || null,
            businessUnit: {
              connect: { id: clientState.step1Data.businessUnitId },
            },
            template: "default",
            defaultLanguage: "en",
            supportedLanguages: supportedLanguages,
            translations: translationsToSave,
            legalDocuments: legalDocsToSave,
            publishedAt: bpStatus === "published" ? new Date() : null,
            creationType: "manual",
            createdBy,
          },
        });
        bpId = newBP.id;
      }

      // Handle Step 2: Consent Purposes and Business Process Rules
      // Only recreate rules if there were Step 2 changes or it's a new version/BP
      const step2Changes = breakingChanges.filter((c) => c.type === "step2");
      const hasStep2Changes =
        step2Changes.length > 0 || isNewVersion || !businessProcessId;

      if (bpId && hasStep2Changes) {
        // Only delete existing rules if we're updating an existing BP (not creating a new version)
        // When creating a new version, bpId is the NEW BP's ID which has no rules yet
        if (!isNewVersion && businessProcessId) {
          // Check if there are any business process rules for this BP
          const existingRules = await tx.businessProcessRule.findMany({
            where: { businessProcessId: bpId },
            select: { publicId: true },
          });

          if (existingRules.length > 0) {
            // Check if any of these rules have consents referencing them
            const rulePublicIds = existingRules.map((r) => r.publicId);
            const existingConsents = await tx.consent.findFirst({
              where: { businessProcessRuleId: { in: rulePublicIds } },
              select: { id: true },
            });

            if (existingConsents) {
              throw new Error(
                "Cannot modify business process rules as there are existing consents. Please create a new version instead.",
              );
            }
          }

          // Safe to delete as no consents exist
          await tx.businessProcessRule.deleteMany({
            where: { businessProcessId: bpId },
          });
          await tx.businessProcessToConsentPurpose.deleteMany({
            where: { businessProcessId: bpId },
          });
        }

        // Create new rules (for new versions, new BPs, or when Step 2 has changes)
        const consentPurposes = clientState.consentPurposes || [];
        for (const consentConfig of consentPurposes) {
          // Calculate duration in hours
          let durationInHours: number | null = null;

          if (
            consentConfig.durationType === "custom_duration" &&
            consentConfig.consentDuration
          ) {
            const duration = consentConfig.consentDuration;
            const unit = consentConfig.durationUnit || "days";

            switch (unit) {
              case "days":
                durationInHours = duration * 24;
                break;
              case "weeks":
                durationInHours = duration * 24 * 7;
                break;
              case "months":
                durationInHours = duration * 24 * 30;
                break;
              case "years":
                durationInHours = duration * 24 * 365;
                break;
              default:
                durationInHours = duration * 24;
            }
          }

          // Create BusinessProcessToConsentPurpose record
          await tx.businessProcessToConsentPurpose.create({
            data: {
              businessProcessId: bpId,
              consentPurposeId: consentConfig.consentPurposeId,
              consentDuration: durationInHours,
            },
          });

          // Create BusinessProcessRule records
          for (const rule of consentConfig.processingRules) {
            await tx.businessProcessRule.create({
              data: {
                businessProcessId: bpId,
                consentPurposeId: consentConfig.consentPurposeId,
                processingPurposeId: rule.processingPurposeId,
                mandatory: rule.isMandatory,
                reconsentableByPrincipal: rule.isReconsentable,
                revocableByPrincipal: rule.isRevocable,
                retentionDuration:
                  rule.retentionDurationValue !== undefined &&
                    rule.retentionDurationValue !== null &&
                    rule.retentionDurationUnit
                    ? (() => {
                      const val = rule.retentionDurationValue;
                      switch (rule.retentionDurationUnit) {
                        case "years":
                          return val * 365 * 24;
                        case "months":
                          return val * 30 * 24;
                        case "weeks":
                          return val * 7 * 24;
                        case "days":
                        default:
                          return val * 24;
                      }
                    })()
                    : null,
                createdBy,
              },
            });
          }
        }
      }

      return {
        businessProcessId: bpId!,
        isNewVersion,
        hasBreakingChanges,
        breakingChanges,
      };
    });

    return result;
  } catch (error) {
    console.error("Error saving business process with versioning:", error);
    throw new Error("Failed to save business process");
  }
}
// Helper: Get all business processes using a given consent purpose (by code+version)
export async function getBusinessProcessesUsingConsentPurpose(
  code: string,
  version: number,
) {
  return prisma.businessProcess.findMany({
    where: {
      businessProcessToConsentPurposes: {
        some: {
          consentPurpose: {
            code,
            version,
          },
        },
      },
    },
    include: {
      businessProcessToConsentPurposes: true,
    },
  });
}

// Helper: Bulk update business processes for new consent purpose version
export async function bulkUpdateBusinessProcessesForConsentPurposeVersion({
  code,
  oldVersion,
  newVersion,
  userId,
}: {
  code: string;
  oldVersion: number;
  newVersion: number;
  userId: string;
}) {
  const affectedBPs = await getBusinessProcessesUsingConsentPurpose(
    code,
    oldVersion,
  );

  const newBusinessProcesses: any[] = [];

  for (const bp of affectedBPs) {
    // Find the join objects for BP <-> CP
    const joined = await prisma.businessProcessToConsentPurpose.findMany({
      where: { businessProcessId: bp.id },
      include: { consentPurpose: true },
    });

    // Map to set: for any joined CP with this code, swap to new version; else keep as is
    const newBPtoCPs = await Promise.all(
      joined.map(async (j) => {
        let consentPurposeId = j.consentPurposeId;
        if (
          j.consentPurpose.code === code &&
          j.consentPurpose.version === oldVersion
        ) {
          // Get new version for this code
          const newCP = await prisma.consentPurpose.findFirst({
            where: {
              code,
              version: newVersion,
            },
          });
          if (newCP) consentPurposeId = newCP.id;
        }
        return { consentPurposeId };
      }),
    );

    // Deep clone business process
    const { id, createdAt, updatedAt, publishedAt, ...bpCloneData } = bp;
    const highestVersion = await getLatestBusinessProcessVersionByCode(bp.code);
    const createdBP = await prisma.businessProcess.create({
      data: {
        ...bpCloneData,
        version: highestVersion + 1,
        status: "draft", // Not published until reviewed!
        createdBy: userId,
        createdAt: new Date(),
        updatedAt: new Date(),
        publishedAt: null,

        businessProcessToConsentPurposes: {
          create: newBPtoCPs,
        },
        // If you want to clone rules, relate to new CP, etc, repeat pattern here
      },
    });
    newBusinessProcesses.push(createdBP);
  }
  return newBusinessProcesses;
}

/**
 * Propagates a consent purpose version increment into all affected business processes,
 * by creating a new (draft) version of each process that previously used the old consent purpose,
 * and updating the join to the new consent purpose version.
 *
 * @param code       Consent purpose code (string)
 * @param oldVersion Previous version number
 * @param newVersion Newly published version number
 * @param userId     Who is creating the new drafts
 * @returns          Array of new business process drafts created (fully initialized)
 */
/**
 * Creates new draft versions of selected business processes to point to a new
 * version of a consent purpose.
 * @param code The code of the ConsentPurpose that has been versioned.
 * @param oldVersion The old version number of the ConsentPurpose.
 * @param newVersion The new version number of the ConsentPurpose.
 * @param userId The ID of the user performing the action.
 * @param propagateToBPIds An array of BusinessProcess IDs to propagate changes to.
 */
export async function propagateConsentPurposeVersionToBusinessProcesses(
  code: string,
  oldVersion: number,
  newVersion: number,
  userId: string,
  propagateToBPIds: number[], // <-- Updated parameter
) {
  // 1. Fetch all selected BPs, and relevant sub-entities
  const affectedBPs = await prisma.businessProcess.findMany({
    where: {
      id: { in: propagateToBPIds }, // <-- Filter by selected IDs
    },
    include: {
      businessProcessToConsentPurposes: {
        include: { consentPurpose: true },
      },
      businessProcessRules: true,
    },
  });

  const newBusinessProcesses = [];

  // 2. Fetch both new and old CP versions to create a PP map
  const newCP = await prisma.consentPurpose.findFirst({
    where: { code, version: newVersion },
    include: { processingPurposes: true },
  });

  if (!newCP) {
    throw new Error(`ConsentPurpose ${code} v${newVersion} not found`);
  }

  const oldCP = await prisma.consentPurpose.findFirst({
    where: { code, version: oldVersion },
    include: { processingPurposes: true },
  });

  if (!oldCP) {
    // This should not happen if affectedBPs were found, but it's a safe check
    throw new Error(
      `ConsentPurpose ${code} v${oldVersion} not found for mapping`,
    );
  }

  // 3. Create the Processing Purpose ID mapping
  // Map: purposeOfProcessingId (definition) -> old processingPurpose.id (instance)
  const popIdToOldPPId = new Map<number, number>();
  for (const pp of oldCP.processingPurposes) {
    if (pp.purposeOfProcessingId) {
      popIdToOldPPId.set(pp.purposeOfProcessingId, pp.id);
    }
  }

  // Map: purposeOfProcessingId (definition) -> new processingPurpose.id (instance)
  const popIdToNewPPId = new Map<number, number>();
  for (const pp of newCP.processingPurposes) {
    if (pp.purposeOfProcessingId) {
      popIdToNewPPId.set(pp.purposeOfProcessingId, pp.id);
    }
  }

  // Final Map: old processingPurpose.id -> new processingPurpose.id
  const oldPPIdToNewPPIdMap = new Map<number, number>();
  for (const [popId, oldPPId] of popIdToOldPPId.entries()) {
    const newPPId = popIdToNewPPId.get(popId);
    if (newPPId) {
      oldPPIdToNewPPIdMap.set(oldPPId, newPPId);
    }
  }
  // --- End of PP Mapping ---

  for (const bp of affectedBPs) {
    // 4. Build join data for new BP (swapping new CP ID)
    const newBPtoCPs = bp.businessProcessToConsentPurposes.map((j) => {
      let consentPurposeId = j.consentPurposeId;
      if (
        j.consentPurpose.code === code &&
        j.consentPurpose.version === oldVersion
      ) {
        consentPurposeId = newCP.id;
      }
      return {
        consentPurposeId,
        consentDuration: j.consentDuration,
      };
    });

    // 5. Create the new business process
    const highestVersion = await getLatestBusinessProcessVersionByCode(bp.code);
    const createdBP = await prisma.businessProcess.create({
      data: {
        name: bp.name,
        code: bp.code,
        version: highestVersion + 1,
        status: "published", // Create new versions as draft
        grantDescription: bp.grantDescription,
        revokeDescription: bp.revokeDescription,
        reconsentDescription: bp.reconsentDescription,
        defaultLanguage: bp.defaultLanguage ?? "en",
        supportedLanguages: bp.supportedLanguages ?? ["en"],
        translations: bp.translations ?? {},
        legalDocuments: bp.legalDocuments ?? {},
        creationType: bp.creationType || "manual",
        createdBy: userId,
        businessUnitId: bp.businessUnitId,
        template: bp.template ?? "default",
        createdAt: new Date(),
        updatedAt: new Date(),
        publishedAt: null,
        businessProcessToConsentPurposes: {
          create: newBPtoCPs,
        },
      },
      include: { businessProcessToConsentPurposes: true },
    });

    // 6. Create CP ID map for rule lookup
    const oldCPIdToNewCPIdMap = new Map<number, number>();
    bp.businessProcessToConsentPurposes.forEach((j) => {
      if (
        j.consentPurpose.code === code &&
        j.consentPurpose.version === oldVersion
      ) {
        oldCPIdToNewCPIdMap.set(j.consentPurposeId, newCP.id);
      }
    });

    // 7. Re-create Business Process Rules for the new BP version
    for (const bpToCp of createdBP.businessProcessToConsentPurposes) {
      // Fetch all current processing purposes for this CP
      const currentCP = await prisma.consentPurpose.findUnique({
        where: { id: bpToCp.consentPurposeId },
        include: { processingPurposes: true },
      });

      if (!currentCP) continue;

      // For each processing purpose, find the rule in the old BP (if any)
      for (const procPurpose of currentCP.processingPurposes) {
        // ** UPDATED LOGIC TO FIND OLD RULE **
        const oldRule = bp.businessProcessRules.find((r) => {
          // Check if this rule belonged to the old, versioned CP
          const ruleBelongedToOldCP = oldCPIdToNewCPIdMap.has(
            r.consentPurposeId,
          );

          // --- Consent Purpose Check ---
          let cpMatch = false;
          if (ruleBelongedToOldCP) {
            // Case 1: Rule for the CP that was versioned
            cpMatch =
              oldCPIdToNewCPIdMap.get(r.consentPurposeId) ===
              bpToCp.consentPurposeId;
          } else {
            // Case 2: Rule for a CP that was not versioned
            cpMatch = r.consentPurposeId === bpToCp.consentPurposeId;
          }

          if (!cpMatch) return false;

          // --- Processing Purpose Check ---
          let ppMatch = false;
          if (ruleBelongedToOldCP) {
            // Case 1: This PP belongs to the CP that was versioned.
            // Map its old ID to the new ID using our new map.
            ppMatch =
              oldPPIdToNewPPIdMap.get(r.processingPurposeId) === procPurpose.id;
          } else {
            // Case 2: This PP belongs to a CP that was *not* versioned.
            // The ID should be a direct match.
            ppMatch = r.processingPurposeId === procPurpose.id;
          }

          return ppMatch; // Both CP and PP must match
        });

        // Create the new rule, using defaults if oldRule is not found
        await prisma.businessProcessRule.create({
          data: {
            businessProcessId: createdBP.id,
            consentPurposeId: bpToCp.consentPurposeId,
            processingPurposeId: procPurpose.id,
            // ** ADDED NULL CHECKS **
            mandatory: oldRule?.mandatory ?? false,
            reconsentableByPrincipal:
              oldRule?.reconsentableByPrincipal ?? false,
            revocableByPrincipal: oldRule?.revocableByPrincipal ?? false,
            retentionDuration: oldRule?.retentionDuration ?? null,
            createdBy: userId,
          },
        });
      }
    }

    newBusinessProcesses.push(createdBP);
  }
  return newBusinessProcesses;
}
/**
 * Returns the latest version number (and consent purpose object) for a given consent purpose code.
 * @param code Consent purpose code (string)
 * @returns {Promise<{version: number, consentPurpose: any} | null>}
 */
export async function getLatestBusinessProcessVersionByCode(code: string) {
  const latestBP = await prisma.businessProcess.findFirst({
    where: { code },
    orderBy: { version: "desc" },
  });

  if (!latestBP) return null;

  return latestBP.version;
}
export async function getBusinessProcessesUsingConsentPurposeForView(
  consentPurposeId: number,
) {
  return prisma.businessProcess.findMany({
    where: {
      businessProcessToConsentPurposes: {
        some: {
          consentPurpose: {
            id: consentPurposeId,
          },
        },
      },
    },
    select: {
      id: true,
      name: true,
      code: true,
      status: true,
      version: true,
      updatedAt: true,
      businessUnit: { select: { name: true } },
    },
  });
}
