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
  ConsentPurposeFormSchema,
  ProcessingPurposeFormSchema,
  DataProcessorMappingFormSchema,
} from "@/lib/schemas/consent-purpose-schemas";
import {
  ConsentPurposeFormData,
  ProcessingPurposeFormData,
  DataProcessorMappingFormData,
} from "@/contexts/consent-purpose-context";
import { detectBreakingChanges } from "@/lib/utils/breaking-change-detector";
import type { ConsentPurposeState } from "@/contexts/consent-purpose-context";
import { propagateConsentPurposeVersionToBusinessProcesses } from "./business-processes-service";

// Basic CRUD operations for consent purposes
export async function getAllConsentPurposes() {
  try {
    const consentPurposes = await prisma.consentPurpose.findMany({
      orderBy: {
        updatedAt: "desc",
      },
    });
    return consentPurposes;
  } catch (error) {
    console.error("Error fetching consent purposes:", error);
    throw new Error("Failed to fetch consent purposes");
  }
}

export async function deleteConsentPurpose(id: number) {
  try {
    // Use transaction to ensure all deletes succeed or all fail
    await prisma.$transaction(async (tx) => {
      // First, get all processing purpose IDs for this consent purpose
      const processingPurposes = await tx.processingPurpose.findMany({
        where: { consentPurposeId: id },
        select: { id: true },
      });

      const processingPurposeIds = processingPurposes.map((pp) => pp.id);

      if (processingPurposeIds.length > 0) {
        // Delete business process rules related to these processing purposes
        await tx.businessProcessRule.deleteMany({
          where: { processingPurposeId: { in: processingPurposeIds } },
        });

        // Delete processing purpose to data processor mappings
        await tx.processingPurposeToDataProcessor.deleteMany({
          where: { processingPurposeId: { in: processingPurposeIds } },
        });
      }

      // Delete business process rules directly related to the consent purpose
      await tx.businessProcessRule.deleteMany({
        where: { consentPurposeId: id },
      });

      // Delete all processing purposes for this consent purpose
      await tx.processingPurpose.deleteMany({
        where: { consentPurposeId: id },
      });

      // Finally, delete the consent purpose itself
      await tx.consentPurpose.delete({
        where: { id },
      });
    });

    return { success: true };
  } catch (error) {
    console.error("Error deleting consent purpose:", error);
    throw new Error("Failed to delete consent purpose");
  }
}

// Comprehensive save operation from client state
export async function saveConsentPurposeFromClientState(
  clientState: ConsentPurposeState,
  action: "publish" | "draft",
  userId: string,
  consentPurposeId?: number,
  propagateToBPIds?: number[]
) {
  try {
    // Detect breaking changes
    const breakingChanges = detectBreakingChanges(
      clientState.baseline,
      clientState
    );
    const hasBreaking = breakingChanges.length > 0;
    let ltVersion;
    let cpCode;
    let currVersion;
    let isNewVersion = false; // Track if we're creating a new version
    const result = await prisma.$transaction(async (tx) => {
      // Step 1: Create or Update Consent Purpose
      let cpId = consentPurposeId;
      const status = action === "publish" ? "published" : "draft";

      if (!clientState.step1Data) {
        throw new Error("Step 1 data is required");
      }

      // If breaking changes detected and we're editing a published CP, create a new version
      if (hasBreaking && cpId) {
        const currentCP = await tx.consentPurpose.findUnique({
          where: { id: cpId },
          select: { version: true, code: true, status: true },
        });

        if (!currentCP) {
          throw new Error("Consent purpose not found");
        }

        // Only create new version if the current CP is published
        if (currentCP.status === "published") {
          // Create new version - old version stays untouched
          const latestCPVersion =
            (await getLatestConsentPurposeVersionByCode(currentCP.code)) + 1;
          ltVersion = latestCPVersion;
          const newCP = await tx.consentPurpose.create({
            data: {
              name: clientState.step1Data.name,
              code: currentCP.code, // Keep same code
              version: latestCPVersion, // Increment version
              description: clientState.step1Data.description || null,
              status,
              publishedAt: status === "published" ? new Date() : null,
              supportedLanguages: ["en"],
              createdBy: userId,
            },
          });

          cpId = newCP.id;
          isNewVersion = true;
          cpCode = newCP.code;
          currVersion = currentCP.version;
        } else {
          // Draft CP with breaking changes - just update in place
          await tx.consentPurpose.update({
            where: { id: cpId },
            data: {
              name: clientState.step1Data.name,
              code: clientState.step1Data.code,
              description: clientState.step1Data.description || null,
              status,
              publishedAt: status === "published" ? new Date() : null,
            },
          });
        }
      } else if (cpId) {
        // Update existing (no breaking changes)
        await tx.consentPurpose.update({
          where: { id: cpId },
          data: {
            name: clientState.step1Data.name,
            code: clientState.step1Data.code,
            description: clientState.step1Data.description || null,
            status,
            publishedAt: status === "published" ? new Date() : null,
          },
        });
      } else {
        // Create new
        const newCP = await tx.consentPurpose.create({
          data: {
            name: clientState.step1Data.name,
            code: clientState.step1Data.code,
            description: clientState.step1Data.description || null,
            status,
            publishedAt: status === "published" ? new Date() : null,
            supportedLanguages: ["en"], // Default, can be extended
            createdBy: userId,
          },
        });
        cpId = newCP.id;
      }

      // Step 2: Handle Processing Purposes
      const newPPIds: Record<string, number> = {}; // Map refs (id, tempId, or code) to real PP IDs

      // Helper to get processingPurposeRef from a PP object
      const getPPRef = (pp: any): string => {
        if (pp.id) return pp.id.toString();
        if (pp.tempId) return pp.tempId;
        return pp.purposeOfProcessingCode || "";
      };

      if (isNewVersion) {
        // New version: Create ALL processing purposes fresh (don't touch old version)

        // Combine existing and modified PPs, using modified version if it exists
        const modifiedPPIds = new Set(
          clientState.step2Data.modified.map((pp) => pp.id)
        );

        // Create from existing PPs that weren't modified
        for (const pp of clientState.step2Data.existing) {
          // Skip if this PP was modified (we'll use the modified version instead)
          if (pp.id && modifiedPPIds.has(pp.id)) {
            continue;
          }

          const created = await tx.processingPurpose.create({
            data: {
              name: pp.name,
              description: pp.description || null,
              purposeOfProcessingId: pp.purposeOfProcessingId,
              consentPurposeId: cpId!,
              status,
              createdBy: userId,
              userAttributeNames: pp.userAttributeNames || [],
            },
          });
          // Map ref to new ID for data processor mappings
          const ppRef = getPPRef(pp);
          if (ppRef) {
            newPPIds[ppRef] = created.id;
          }
        }

        // Create from modified PPs (these are the updated versions of existing PPs)
        for (const pp of clientState.step2Data.modified) {
          const created = await tx.processingPurpose.create({
            data: {
              name: pp.name,
              description: pp.description || null,
              purposeOfProcessingId: pp.purposeOfProcessingId,
              consentPurposeId: cpId!,
              status,
              createdBy: userId,
              userAttributeNames: pp.userAttributeNames || [],
            },
          });
          // Map ref to new ID
          const ppRef = getPPRef(pp);
          if (ppRef) {
            newPPIds[ppRef] = created.id;
          }
        }

        // Create new PPs
        for (const pp of clientState.step2Data.new) {
          const created = await tx.processingPurpose.create({
            data: {
              name: pp.name,
              description: pp.description || null,
              purposeOfProcessingId: pp.purposeOfProcessingId,
              consentPurposeId: cpId!,
              status,
              createdBy: userId,
              userAttributeNames: pp.userAttributeNames || [],
            },
          });
          const ppRef = getPPRef(pp);
          if (ppRef) {
            newPPIds[ppRef] = created.id;
          }
        }

        // Note: deleted PPs are simply not created in the new version
      } else {
        // Normal update: Delete/Update/Create as before

        // Delete removed processing purposes
        if (clientState.step2Data.deleted.length > 0) {
          // First delete data processor mappings
          await tx.processingPurposeToDataProcessor.deleteMany({
            where: {
              processingPurposeId: { in: clientState.step2Data.deleted },
            },
          });

          // Then delete processing purposes
          await tx.processingPurpose.deleteMany({
            where: { id: { in: clientState.step2Data.deleted } },
          });
        }

        // Create new processing purposes
        for (const pp of clientState.step2Data.new) {
          const created = await tx.processingPurpose.create({
            data: {
              name: pp.name,
              description: pp.description || null,
              purposeOfProcessingId: pp.purposeOfProcessingId,
              consentPurposeId: cpId!,
              status,
              createdBy: userId,
              userAttributeNames: pp.userAttributeNames || [],
            },
          });
          const ppRef = getPPRef(pp);
          if (ppRef) {
            newPPIds[ppRef] = created.id;
          }
        }

        // Update modified processing purposes
        for (const pp of clientState.step2Data.modified) {
          await tx.processingPurpose.update({
            where: { id: pp.id },
            data: {
              name: pp.name,
              description: pp.description || null,
              purposeOfProcessingId: pp.purposeOfProcessingId,
              status,
              userAttributeNames: pp.userAttributeNames || [],
            },
          });
        }
      }

      // Step 3: Handle Data Processor Mappings
      if (isNewVersion) {
        // New version: Create ALL mappings fresh

        // Create from existing mappings (become new records)
        for (const mapping of clientState.step3Data.existing) {
          const ppId =
            newPPIds[mapping.processingPurposeRef] ||
            parseInt(mapping.processingPurposeRef);

          await tx.processingPurposeToDataProcessor.create({
            data: {
              processingPurposeId: ppId,
              dataProcessorId: mapping.dataProcessorId,
              userAttributeNames: mapping.userAttributeNames || [],
              status,
              createdBy: userId,
            },
          });
        }

        // Create from modified mappings (also become new records)
        for (const mapping of clientState.step3Data.modified) {
          const ppId =
            newPPIds[mapping.processingPurposeRef] ||
            parseInt(mapping.processingPurposeRef);

          await tx.processingPurposeToDataProcessor.create({
            data: {
              processingPurposeId: ppId,
              dataProcessorId: mapping.dataProcessorId,
              userAttributeNames: mapping.userAttributeNames || [],
              status,
              createdBy: userId,
            },
          });
        }

        // Create new mappings
        for (const mapping of clientState.step3Data.new) {
          const ppId = newPPIds[mapping.processingPurposeRef];

          if (!ppId) {
            console.error(
              `❌ No PP ID found for ref: ${mapping.processingPurposeRef}`
            );
            throw new Error(
              `Processing purpose not found for ref: ${mapping.processingPurposeRef}`
            );
          }

          await tx.processingPurposeToDataProcessor.create({
            data: {
              processingPurposeId: ppId,
              dataProcessorId: mapping.dataProcessorId,
              userAttributeNames: mapping.userAttributeNames || [],
              status,
              createdBy: userId,
            },
          });
        }

        // Note: deleted mappings are simply not created in the new version
      } else {
        // Normal update: Delete/Update/Create as before

        // Delete removed mappings
        if (clientState.step3Data.deleted.length > 0) {
          await tx.processingPurposeToDataProcessor.deleteMany({
            where: { id: { in: clientState.step3Data.deleted } },
          });
        }

        // Create new mappings
        for (const mapping of clientState.step3Data.new) {
          const ppId = newPPIds[mapping.processingPurposeRef];

          if (!ppId) {
            console.error(
              `❌ No PP ID found for ref: ${mapping.processingPurposeRef}`
            );
            throw new Error(
              `Processing purpose not found for ref: ${mapping.processingPurposeRef}`
            );
          }

          await tx.processingPurposeToDataProcessor.create({
            data: {
              processingPurposeId: ppId,
              dataProcessorId: mapping.dataProcessorId,
              userAttributeNames: mapping.userAttributeNames || [],
              status,
              createdBy: userId,
            },
          });
        }

        // Update modified mappings
        for (const mapping of clientState.step3Data.modified) {
          // For modified existing mappings, the ref should be an ID already
          const ppId =
            newPPIds[mapping.processingPurposeRef] ||
            parseInt(mapping.processingPurposeRef);

          await tx.processingPurposeToDataProcessor.update({
            where: { id: mapping.id },
            data: {
              processingPurposeId: ppId,
              dataProcessorId: mapping.dataProcessorId,
              userAttributeNames: mapping.userAttributeNames || [],
              status,
            },
          });
        }
      }

      // Step 4: Handle Translations
      // Build translation object for consent purpose
      const cpTranslationsObj: Record<string, any> = {
        en: {
          name: clientState.step1Data.name,
          description: clientState.step1Data.description || null,
        },
      };

      for (const [lang, trans] of Object.entries(
        clientState.step4Data.cpTranslations
      )) {
        if (lang !== "en" && ((trans.name || "").trim() || (trans.description || "").trim())) {
          cpTranslationsObj[lang] = {
            name: (trans.name || "").trim() || null,
            description: (trans.description || "").trim() || null,
          };
        }
      }

      // Update consent purpose with translations
      await tx.consentPurpose.update({
        where: { id: cpId! },
        data: {
          translations: cpTranslationsObj,
          supportedLanguages: Object.keys(cpTranslationsObj),
        },
      });

      // Handle processing purpose translations
      if (isNewVersion) {
        // New version: Apply translations to newly created PPs

        for (const [ppRef, newId] of Object.entries(newPPIds)) {
          // Try to find the PP data from existing, modified, or new
          const ppData =
            clientState.step2Data.existing.find(
              (pp) => getPPRef(pp) === ppRef
            ) ||
            clientState.step2Data.modified.find(
              (pp) => getPPRef(pp) === ppRef
            ) ||
            clientState.step2Data.new.find((pp) => getPPRef(pp) === ppRef);

          if (!ppData) continue;

          const ppTranslationsObj: Record<string, any> = {
            en: {
              name: ppData.name,
              description: ppData.description || null,
            },
          };

          const ppTrans = clientState.step4Data.ppTranslations[ppRef];
          if (ppTrans) {
            for (const [lang, trans] of Object.entries(ppTrans)) {
              if (
                lang !== "en" &&
                ((trans.name || "").trim() || (trans.description || "").trim())
              ) {
                ppTranslationsObj[lang] = {
                  name: (trans.name || "").trim() || null,
                  description: (trans.description || "").trim() || null,
                };
              }
            }
          }

          await tx.processingPurpose.update({
            where: { id: newId },
            data: {
              translations: ppTranslationsObj,
              supportedLanguages: Object.keys(ppTranslationsObj),
            },
          });
        }
      } else {
        // Normal update: Update existing PPs and newly created ones

        // Build a map of modified PP IDs for deduplication
        const modifiedPPIds = new Set(
          clientState.step2Data.modified.map((pp) => pp.id).filter(Boolean)
        );

        // Update existing and modified PPs (avoiding duplicates)
        const existingPPRefs = [
          // Only include existing PPs that haven't been modified
          ...clientState.step2Data.existing
            .filter((pp) => !modifiedPPIds.has(pp.id))
            .map((pp) => ({
              ref: getPPRef(pp),
              id: pp.id!,
              name: pp.name,
              description: pp.description,
            })),
          // Include all modified PPs
          ...clientState.step2Data.modified.map((pp) => ({
            ref: getPPRef(pp),
            id: pp.id!,
            name: pp.name,
            description: pp.description,
          })),
        ];

        for (const pp of existingPPRefs) {
          const ppTranslationsObj: Record<string, any> = {
            en: {
              name: pp.name,
              description: pp.description || null,
            },
          };

          const ppTrans = clientState.step4Data.ppTranslations[pp.ref];
          if (ppTrans) {
            for (const [lang, trans] of Object.entries(ppTrans)) {
              if (
                lang !== "en" &&
                ((trans.name || "").trim() || (trans.description || "").trim())
              ) {
                ppTranslationsObj[lang] = {
                  name: (trans.name || "").trim() || null,
                  description: (trans.description || "").trim() || null,
                };
              }
            }
          }

          await tx.processingPurpose.update({
            where: { id: pp.id },
            data: {
              translations: ppTranslationsObj,
              supportedLanguages: Object.keys(ppTranslationsObj),
            },
          });
        }

        // Handle translations for newly created PPs
        for (const [ppRef, realId] of Object.entries(newPPIds)) {
          const pp = clientState.step2Data.new.find(
            (p) => getPPRef(p) === ppRef
          );
          if (!pp) continue;

          const ppTranslationsObj: Record<string, any> = {
            en: {
              name: pp.name,
              description: pp.description || null,
            },
          };

          const ppTrans = clientState.step4Data.ppTranslations[ppRef];
          if (ppTrans) {
            for (const [lang, trans] of Object.entries(ppTrans)) {
              if (
                lang !== "en" &&
                ((trans.name || "").trim() || (trans.description || "").trim())
              ) {
                ppTranslationsObj[lang] = {
                  name: (trans.name || "").trim() || null,
                  description: (trans.description || "").trim() || null,
                };
              }
            }
          }

          await tx.processingPurpose.update({
            where: { id: realId },
            data: {
              translations: ppTranslationsObj,
              supportedLanguages: Object.keys(ppTranslationsObj),
            },
          });
        }
      }

      return { success: true, id: cpId };
    });

    const shouldPropagate = propagateToBPIds && propagateToBPIds.length > 0;
    if (isNewVersion && shouldPropagate) {
      const newBPVersions = await propagateConsentPurposeVersionToBusinessProcesses(
        cpCode,
        currVersion,
        ltVersion,
        userId,
        propagateToBPIds
      );

      // Send version change notifications for each propagated BP
      // Fire and forget - don't block the response
      // if (newBPVersions && newBPVersions.length > 0) {
      //   const { notifyDataPrincipalsOfVersionChange } = await import(
      //     "./bp-version-change-notification-service"
      //   );

      //   for (const newBp of newBPVersions) {
      //     // Get the old BP version
      //     const oldBp = await prisma.businessProcess.findFirst({
      //       where: {
      //         code: newBp.code,
      //         version: newBp.version - 1, // Previous version
      //       },
      //       select: { version: true },
      //     });

      //     if (oldBp) {
      //       // Fire and forget - don't wait for notifications
      //       notifyDataPrincipalsOfVersionChange(
      //         newBp.code,
      //         oldBp.version,
      //         newBp.publicId
      //       ).catch((error) => {
      //         console.error(
      //           `Error sending version change notifications for BP ${newBp.code}:`,
      //           error
      //         );
      //       });
      //     }
      //   }
      // }
    }
    return result;
  } catch (error) {
    console.error("Error saving consent purpose from client state:", error);
    throw new Error("Failed to save consent purpose");
  }
}
/**
 * Returns the latest version number (and consent purpose object) for a given consent purpose code.
 * @param code Consent purpose code (string)
 * @returns {Promise<{version: number, consentPurpose: any} | null>}
 */
export async function getLatestConsentPurposeVersionByCode(code: string) {
  const latestCP = await prisma.consentPurpose.findFirst({
    where: { code },
    orderBy: { version: "desc" },
  });

  if (!latestCP) return null;

  return latestCP.version;
}
