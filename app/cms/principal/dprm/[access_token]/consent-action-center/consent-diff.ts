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

// lib/consent-diff.ts

import { getBusinessProcessesByCode, getConsentNotice } from "@/lib/services/notices-service";
import { PrismaClient } from "@prisma/client";

// --- Assumed Import ---
// We import your existing function just to get its return type.
// Please adjust this path to where your `getBusinessProcessesByCode` function is located.


// --- 1. Define the Types for the Change Notice ---

/**
 * Type Alias for the complex object returned by your `getBusinessProcessesByCode` function.
 */
export type TransformedBusinessProcess = Awaited<
  ReturnType<typeof getBusinessProcessesByCode>
>[0];

export type AttributeData = {
  newlyAddedCount: number;
  list: string[];
};

/**
 * Represents a single Processing Purpose (e.g., "Customer Service Support")
 * and its associated rules.
 */
export type Processing = {
  id: string; // From ProcessingPurpose.id
  title: string; // From ProcessingPurpose.name
  description: string; // From ProcessingPurpose.description

  // --- Rule-specific fields ---
  defaultChecked: boolean; // From BusinessProcessRule.mandatory
  reconsentableByPrincipal: boolean;
  revocableByPrincipal: boolean;

  // --- Diff-specific fields ---
  isNew: boolean;
  isDeleted?: boolean; // Flag for deletions
  updateNotice: string | null; // e.g., "Changes: description, 1 new attribute added"
  attributes: AttributeData;
};

/**
 * Represents a single Consent Purpose (e.g., "Credit Assessment")
 * and groups all its Processing Purposes.
 */
export type Purpose = {
  id: string; // From ConsentPurpose.code
  title: string; // From ConsentPurpose.name
  duration: string; // From BusinessProcessToConsentPurpose.consentDuration
  defaultChecked: boolean; // True if any child processingList item is mandatory

  // --- Diff-specific fields ---
  isNew: boolean;
  isDeleted?: boolean; // Flag for deletions
  updateNotice?: string | null; // For changes to the purpose itself or deletions
  processingList: Processing[];
};

/**
 * Represents the top-level service (e.g., "Penguin E-commerce")
 * which corresponds to a BusinessProcess.
 */
export type ServiceData = {
  name: string; // From BusinessProcess.name
  purposes: Purpose[];
};

/**
 * The final output: A record mapping each Business Process Code
 * to its corresponding set of changes.
 */
export type ConsentChanges = Record<string, ServiceData>;

// --- 2. Helper Functions ---

/**
 * Converts a duration in hours (from the DB) into a human-readable string.
 */
function formatDuration(hours: number | null | undefined): string {
  if (hours === null || typeof hours === "undefined") {
    return "Not specified";
  }
  if (hours > 720) {
    // Approx > 1 month
    const years = Math.floor(hours / 8760);
    if (years > 0) return `${years} year(s)`;
    const months = Math.floor(hours / 720);
    if (months > 0) return `${months} month(s)`;
  }
  const days = Math.floor(hours / 24);
  if (days > 0) return `${days} day(s)`;
  return `${hours} hour(s)`;
}

/**
 * Regroups the flat `businessProcessRules` array from the Prisma query
 * into the hierarchical `ServiceData` -> `Purpose` -> `Processing` structure.
 */
export function regroupBpData(bp: TransformedBusinessProcess): ServiceData {
  const serviceData: ServiceData = {
    name: bp.name,
    purposes: [],
  };

  const purposeMap = new Map<string, Purpose>();

  // Iterate over each rule (which links one CP to one PP)
  for (const rule of bp.businessProcessRules) {
    const cp = rule.consentPurpose;
    const pp = rule.processingPurpose;

    // Find or create the master Purpose object
    let purpose = purposeMap.get(cp.code);
    if (!purpose) {
      purpose = {
        id: cp.code,
        title: cp.name,
        duration: formatDuration(cp.consentDuration),
        defaultChecked: false, // Will be updated if any child is mandatory
        isNew: false, // Default, will be set by diff
        processingList: [],
      };
      purposeMap.set(cp.code, purpose);
    }

    // Create the Processing object
    const processing: Processing = {
      id: pp.id.toString(), // Use the numeric ID as a string for a unique key
      title: pp.name,
      description: pp.description || "",
      attributes: {
        newlyAddedCount: 0, // Default, will be set by diff
        list: pp.userAttributeNames,
      },
      // --- Add rule fields ---
      defaultChecked: pp.mandatory,
      reconsentableByPrincipal: pp.reconsentableByPrincipal,
      revocableByPrincipal: pp.revocableByPrincipal,
      // --- Diff fields ---
      isNew: false, // Default, will be set by diff
      updateNotice: null,
    };

    // Add to the list
    purpose.processingList.push(processing);

    // Update parent purpose's `defaultChecked`
    if (processing.defaultChecked) {
      purpose.defaultChecked = true;
    }
  }

  serviceData.purposes = Array.from(purposeMap.values());
  return serviceData;
}

// --- 3. Core Diff Function ---

/**
 * Compares an old and new version of a ServiceData and returns an object
 * detailing all changes, additions, and deletions.
 * Returns `null` if there are no changes.
 */
export function generateConsentDiff(
  oldData: ServiceData,
  newData: ServiceData
): ServiceData | null {
  const changedService: ServiceData = {
    name: newData.name,
    purposes: [],
  };

  const oldPurposes = new Map(oldData.purposes.map((p) => [p.id, p]));
  const newPurposes = new Map(newData.purposes.map((p) => [p.id, p]));

  let hasChanges = false;

  // --- Check for New and Modified Purposes ---
  for (const [newPurposeId, newPurpose] of newPurposes.entries()) {
    const oldPurpose = oldPurposes.get(newPurposeId);

    // --- Case 1: New Purpose ---
    if (!oldPurpose) {
      const changedPurpose: Purpose = {
        ...newPurpose,
        isNew: true,
        // Mark all children as new and update attribute counts
        processingList: newPurpose.processingList.map((pp) => ({
          ...pp,
          isNew: true,
          attributes: {
            ...pp.attributes,
            newlyAddedCount: pp.attributes.list.length,
          },
        })),
      };
      changedService.purposes.push(changedPurpose);
      hasChanges = true;
      continue;
    }

    // --- Case 2: Existing Purpose (Check for modifications) ---
    const changedPurpose: Purpose = {
      ...newPurpose,
      isNew: false,
      processingList: [],
    };
    let purposeHasChanges = false;

    const purposeUpdates: string[] = [];
    if (oldPurpose.title !== newPurpose.title) purposeUpdates.push("title");
    if (oldPurpose.duration !== newPurpose.duration)
      purposeUpdates.push("duration");

    if (purposeUpdates.length > 0) {
      purposeHasChanges = true;
      changedPurpose.updateNotice = `This purpose has been updated. Changes: ${purposeUpdates.join(
        ", "
      )}.`;
    }

    // --- Diff the Processing List ---
    const oldProcessing = new Map(
      oldPurpose.processingList.map((p) => [p.id, p])
    );
    const newProcessing = new Map(
      newPurpose.processingList.map((p) => [p.id, p])
    );

    // --- Check for New and Modified Processing ---
    for (const [
      newProcessingId,
      newProcessingItem,
    ] of newProcessing.entries()) {
      const oldProcessingItem = oldProcessing.get(newProcessingId);

      // --- Case 2a: New Processing ---
      if (!oldProcessingItem) {
        const changedProcessing: Processing = {
          ...newProcessingItem,
          isNew: true,
          attributes: {
            ...newProcessingItem.attributes,
            newlyAddedCount: newProcessingItem.attributes.list.length,
          },
        };
        changedPurpose.processingList.push(changedProcessing);
        purposeHasChanges = true;
        continue;
      }

      // --- Case 2b: Existing Processing (Check for modifications) ---
      const changedProcessing: Processing = {
        ...newProcessingItem,
        isNew: false,
        updateNotice: null,
      };
      let processingHasChanges = false;

      const processingUpdates: string[] = [];
      const oldAttrs = new Set(oldProcessingItem.attributes.list);
      const newAttrs = new Set(newProcessingItem.attributes.list);

      const addedAttrs = newProcessingItem.attributes.list.filter(
        (attr) => !oldAttrs.has(attr)
      );
      const removedAttrs = oldProcessingItem.attributes.list.filter(
        (attr) => !newAttrs.has(attr)
      );

      if (oldProcessingItem.title !== newProcessingItem.title)
        processingUpdates.push("title");
      if (oldProcessingItem.description !== newProcessingItem.description)
        processingUpdates.push("description");
      if (oldProcessingItem.defaultChecked !== newProcessingItem.defaultChecked)
        processingUpdates.push("mandatory status");
      if (
        oldProcessingItem.revocableByPrincipal !==
        newProcessingItem.revocableByPrincipal
      )
        processingUpdates.push("revocation policy");
      if (
        oldProcessingItem.reconsentableByPrincipal !==
        newProcessingItem.reconsentableByPrincipal
      )
        processingUpdates.push("re-consent policy");

      changedProcessing.attributes.newlyAddedCount = addedAttrs.length;

      if (
        processingUpdates.length > 0 ||
        addedAttrs.length > 0 ||
        removedAttrs.length > 0
      ) {
        processingHasChanges = true;
        let notice = "This processing has been updated. ";
        if (processingUpdates.length > 0)
          notice += `Changes: ${processingUpdates.join(", ")}. `;
        if (addedAttrs.length > 0)
          notice += `New attributes: ${addedAttrs.join(", ")}. `;
        if (removedAttrs.length > 0)
          notice += `Removed attributes: ${removedAttrs.join(", ")}. `;
        changedProcessing.updateNotice = notice.trim();
      }

      // --- MODIFICATION START ---
      // Only add the processing item to the list if it has changes.
      // Unchanged items should not be included in the diff.
      if (processingHasChanges) {
        purposeHasChanges = true;
        changedPurpose.processingList.push(changedProcessing);
      }
      // --- MODIFICATION END ---
    }

    // --- Check for Deleted Processing ---
    for (const [
      oldProcessingId,
      oldProcessingItem,
    ] of oldProcessing.entries()) {
      if (!newProcessing.has(oldProcessingId)) {
        const deletedProcessing: Processing = {
          ...oldProcessingItem,
          isNew: false,
          isDeleted: true,
          updateNotice: "This data processing has been removed.",
          attributes: { newlyAddedCount: 0, list: [] }, // Clear attributes
        };
        changedPurpose.processingList.push(deletedProcessing);
        purposeHasChanges = true;
      }
    }

    // Only add the Purpose to the final list if it's new or has *any* changes
    if (purposeHasChanges || changedPurpose.isNew) {
      changedService.purposes.push(changedPurpose);
      hasChanges = true;
    }
  }

  // --- Check for Deleted Purposes ---
  for (const [oldPurposeId, oldPurpose] of oldPurposes.entries()) {
    if (!newPurposes.has(oldPurposeId)) {
      const deletedPurpose: Purpose = {
        ...oldPurpose,
        isNew: false,
        isDeleted: true,
        updateNotice: "This entire purpose has been removed.",
        // Mark all children as deleted for clarity
        processingList: oldPurpose.processingList.map((pp) => ({
          ...pp,
          isNew: false,
          isDeleted: true,
          updateNotice: "Removed as part of purpose deletion.",
        })),
      };
      changedService.purposes.push(deletedPurpose);
      hasChanges = true;
    }
  }

  // --- Final Step (User's Step 9) ---
  // If no changes, additions, or deletions were found, return null.
  return hasChanges ? changedService : null;
}