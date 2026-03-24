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

import type { ConsentPurposeState } from "@/contexts/consent-purpose-context";

export interface BreakingChange {
  type: "pp_deleted" | "pp_modified" | "ua_removed";
  description: string;
  details?: string;
  oldValue?: any;
  newValue?: any;
}

/**
 * Detects breaking changes between baseline and current state
 * Breaking changes are changes that affect existing published consent purposes:
 * - Deleting a processing purpose
 * - Modifying a processing purpose (changing name, POP, description, or user attributes)
 * - Removing user attributes from processing purposes
 */
export function detectBreakingChanges(
  baseline: ConsentPurposeState | null,
  current: ConsentPurposeState
): BreakingChange[] {
  const breakingChanges: BreakingChange[] = [];

  // If no baseline, this is a new CP - no breaking changes possible
  if (!baseline) {
    return breakingChanges;
  }

  // 1. Check for deleted processing purposes
  if (current.step2Data.deleted.length > 0) {
    // Get names from baseline for deleted IDs
    const deletedNames = current.step2Data.deleted
      .map((id) => baseline.step2Data.existing.find((pp) => pp.id === id)?.name)
      .filter(Boolean)
      .join(", ");
    breakingChanges.push({
      type: "pp_deleted",
      description: `${current.step2Data.deleted.length} processing purpose(s) deleted`,
      details: deletedNames,
      oldValue: deletedNames,
      newValue: null,
    });
  }

  // 2. Check for ANY modifications to processing purposes
  for (const modifiedPP of current.step2Data.modified) {
    // Find baseline PP by comparing: id (if exists), tempId, or purposeOfProcessingCode
    const baselinePP = baseline.step2Data.existing.find((pp) => {
      if (modifiedPP.id && pp.id === modifiedPP.id) return true;
      if (modifiedPP.tempId && pp.tempId === modifiedPP.tempId) return true;
      if (
        modifiedPP.purposeOfProcessingCode &&
        pp.purposeOfProcessingCode === modifiedPP.purposeOfProcessingCode
      )
        return true;
      return false;
    });

    if (baselinePP) {
      // Check if name changed
      if (baselinePP.name !== modifiedPP.name) {
        breakingChanges.push({
          type: "pp_modified",
          description: `Processing purpose name changed`,
          oldValue: baselinePP.name,
          newValue: modifiedPP.name,
        });
      }

      // Check if description changed
      if ((baselinePP.description || "") !== (modifiedPP.description || "")) {
        breakingChanges.push({
          type: "pp_modified",
          description: `Processing purpose "${baselinePP.name}": Description changed`,
          oldValue: baselinePP.description || "None",
          newValue: modifiedPP.description || "None",
        });
      }

      // Check if purpose of processing changed
      if (
        baselinePP.purposeOfProcessingId !== modifiedPP.purposeOfProcessingId
      ) {
        breakingChanges.push({
          type: "pp_modified",
          description: `Processing purpose "${baselinePP.name}": Purpose of processing changed`,
          details:
            "Changing the purpose of processing category requires a new version",
        });
      }

      // Check if user attributes were removed
      const removedAttributes = baselinePP.userAttributeNames.filter(
        (ua) => !modifiedPP.userAttributeNames.includes(ua)
      );

      if (removedAttributes.length > 0) {
        breakingChanges.push({
          type: "ua_removed",
          description: `Processing purpose "${baselinePP.name}": User attributes removed`,
          oldValue: baselinePP.userAttributeNames,
          newValue: modifiedPP.userAttributeNames,
        });
      }

      // Check if user attributes were added
      const addedAttributes = modifiedPP.userAttributeNames.filter(
        (ua) => !baselinePP.userAttributeNames.includes(ua)
      );

      if (addedAttributes.length > 0) {
        breakingChanges.push({
          type: "pp_modified",
          description: `Processing purpose "${baselinePP.name}": User attributes added`,
          oldValue: baselinePP.userAttributeNames,
          newValue: modifiedPP.userAttributeNames,
        });
      }
    }
  }

  // 3. Check for new processing purposes added (also requires versioning for published CPs)
  if (current.step2Data.new.length > 0) {
    const newNames = current.step2Data.new.map((pp) => pp.name).join(", ");
    breakingChanges.push({
      type: "pp_modified",
      description: `${current.step2Data.new.length} new processing purpose(s) added`,
      details: newNames,
      oldValue: null,
      newValue: newNames,
    });
  }

  return breakingChanges;
}

/**
 * Check if there are any breaking changes
 */
export function hasBreakingChanges(
  baseline: ConsentPurposeState | null,
  current: ConsentPurposeState
): boolean {
  return detectBreakingChanges(baseline, current).length > 0;
}
