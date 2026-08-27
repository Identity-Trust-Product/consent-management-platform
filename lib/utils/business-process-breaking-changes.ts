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
 * Business Process Breaking Change Detection
 *
 * Detects breaking changes between baseline and current business process state.
 * Breaking changes require creating a new version instead of updating in-place.
 */

export interface BusinessProcessState {
  step1Data: {
    name: string;
    code: string;
    businessUnitId: number;
    grantDescription: string;
    revokeDescription?: string;
    reconsentDescription?: string;
  } | null;
  step2Data: Record<string, any>;
  step3Data: Record<string, any>;
  step4Data: Record<string, any>;
  consentPurposes: Array<{
    id: number;
    consentPurposeId: number;
    durationType: "until_purpose_met" | "custom_duration";
    consentDuration?: number;
    durationUnit?: "days" | "weeks" | "months" | "years";
    processingRules: Array<{
      processingPurposeId: number;
      userAttributes?: string[]; // Changed from userAttributeNames to match context
      isMandatory: boolean;
      isReconsentable: boolean;
      isRevocable: boolean;
      retentionDurationValue?: number;
      retentionDurationUnit?: string;
    }>;
  }>;
  eulas: Array<{
    id: number;
    title: string;
    link: string;
  }>;
  baseline?: BusinessProcessState | null;
}

export interface BreakingChange {
  type: string;
  field: string;
  oldValue: any;
  newValue: any;
  description: string;
}

/**
 * Detect breaking changes between baseline and current state
 *
 * For Business Process, breaking changes are ONLY in Step 2 (BusinessProcessRules)
 * All other steps (Step 1, 3, 4, 5) can be updated without creating a new version
 */
export function detectBreakingChanges(
  baseline: BusinessProcessState | null | undefined,
  current: BusinessProcessState,
): BreakingChange[] {
  if (!baseline) {
    return []; // No baseline means new business process
  }

  const changes: BreakingChange[] = [];

  // ONLY Step 2: Consent Purposes & Business Process Rules Changes (CRITICAL)
  // These are the ONLY breaking changes for Business Process
  const baselineConsentPurposes = baseline.consentPurposes || [];
  const currentConsentPurposes = current.consentPurposes || [];

  // Check if consent purposes were added or removed
  const baselineCPIds = new Set(
    baselineConsentPurposes.map((cp) => cp.consentPurposeId),
  );
  const currentCPIds = new Set(
    currentConsentPurposes.map((cp) => cp.consentPurposeId),
  );

  // Consent purposes added
  for (const cpId of currentCPIds) {
    if (!baselineCPIds.has(cpId)) {
      changes.push({
        type: "step2",
        field: "consentPurposes",
        oldValue: null,
        newValue: cpId,
        description: `Consent purpose ${cpId} added`,
      });
    }
  }

  // Consent purposes removed
  for (const cpId of baselineCPIds) {
    if (!currentCPIds.has(cpId)) {
      changes.push({
        type: "step2",
        field: "consentPurposes",
        oldValue: cpId,
        newValue: null,
        description: `Consent purpose ${cpId} removed`,
      });
    }
  }

  // Check changes within existing consent purposes
  for (const currentCP of currentConsentPurposes) {
    const baselineCP = baselineConsentPurposes.find(
      (cp) => cp.consentPurposeId === currentCP.consentPurposeId,
    );

    if (baselineCP) {
      // Duration type change
      if (baselineCP.durationType !== currentCP.durationType) {
        changes.push({
          type: "step2",
          field: "durationType",
          oldValue: baselineCP.durationType,
          newValue: currentCP.durationType,
          description: `Consent purpose ${currentCP.consentPurposeId}: Duration type changed`,
        });
      }

      // Consent duration change
      if (currentCP.durationType === "custom_duration") {
        const baselineDuration = baselineCP.consentDuration;
        const currentDuration = currentCP.consentDuration;
        const baselineUnit = baselineCP.durationUnit || "days";
        const currentUnit = currentCP.durationUnit || "days";

        if (
          baselineDuration !== currentDuration ||
          baselineUnit !== currentUnit
        ) {
          changes.push({
            type: "step2",
            field: "consentDuration",
            oldValue: `${baselineDuration} ${baselineUnit}`,
            newValue: `${currentDuration} ${currentUnit}`,
            description: `Consent purpose ${currentCP.consentPurposeId}: Consent duration changed`,
          });
        }
      }

      // Processing rules changes (CRITICAL - these are BusinessProcessRules)
      const baselineRules = baselineCP.processingRules || [];
      const currentRules = currentCP.processingRules || [];

      const baselinePPIds = new Set(
        baselineRules.map((r) => r.processingPurposeId),
      );
      const currentPPIds = new Set(
        currentRules.map((r) => r.processingPurposeId),
      );

      // Processing purposes added
      for (const ppId of currentPPIds) {
        if (!baselinePPIds.has(ppId)) {
          changes.push({
            type: "step2_rules",
            field: "processingRules",
            oldValue: null,
            newValue: ppId,
            description: `Processing purpose ${ppId} added to consent purpose ${currentCP.consentPurposeId}`,
          });
        }
      }

      // Processing purposes removed
      for (const ppId of baselinePPIds) {
        if (!currentPPIds.has(ppId)) {
          changes.push({
            type: "step2_rules",
            field: "processingRules",
            oldValue: ppId,
            newValue: null,
            description: `Processing purpose ${ppId} removed from consent purpose ${currentCP.consentPurposeId}`,
          });
        }
      }

      // Check rule field changes (mandatory, revocable, reconsentable)
      for (const currentRule of currentRules) {
        const baselineRule = baselineRules.find(
          (r) => r.processingPurposeId === currentRule.processingPurposeId,
        );

        if (baselineRule) {
          // Mandatory flag change
          if (baselineRule.isMandatory !== currentRule.isMandatory) {
            changes.push({
              type: "step2_rules",
              field: "isMandatory",
              oldValue: baselineRule.isMandatory,
              newValue: currentRule.isMandatory,
              description: `Processing purpose ${currentRule.processingPurposeId}: Mandatory flag changed`,
            });
          }

          // Revocable flag change
          if (baselineRule.isRevocable !== currentRule.isRevocable) {
            changes.push({
              type: "step2_rules",
              field: "isRevocable",
              oldValue: baselineRule.isRevocable,
              newValue: currentRule.isRevocable,
              description: `Processing purpose ${currentRule.processingPurposeId}: Revocable flag changed`,
            });
          }

          // Reconsentable flag change
          if (baselineRule.isReconsentable !== currentRule.isReconsentable) {
            changes.push({
              type: "step2_rules",
              field: "isReconsentable",
              oldValue: baselineRule.isReconsentable,
              newValue: currentRule.isReconsentable,
              description: `Processing purpose ${currentRule.processingPurposeId}: Reconsentable flag changed`,
            });
          }

          // User attributes change
          const baselineAttrs = (baselineRule.userAttributes || []).sort();
          const currentAttrs = (currentRule.userAttributes || []).sort();

          if (JSON.stringify(baselineAttrs) !== JSON.stringify(currentAttrs)) {
            changes.push({
              type: "step2_rules",
              field: "userAttributes",
              oldValue: baselineAttrs,
              newValue: currentAttrs,
              description: `Processing purpose ${currentRule.processingPurposeId}: Purpose attributes changed`,
            });
          }

          // Retention duration change (compare calculated hours)
          const baselineHours = calculateRetentionHours(
            baselineRule.retentionDurationValue,
            baselineRule.retentionDurationUnit,
          );
          const currentHours = calculateRetentionHours(
            currentRule.retentionDurationValue,
            currentRule.retentionDurationUnit,
          );

          if (baselineHours !== currentHours) {
            changes.push({
              type: "step2_rules",
              field: "retentionDuration",
              oldValue: `${baselineRule.retentionDurationValue} ${baselineRule.retentionDurationUnit}`,
              newValue: `${currentRule.retentionDurationValue} ${currentRule.retentionDurationUnit}`,
              description: `Processing purpose ${currentRule.processingPurposeId}: Retention duration changed`,
            });
          }
        }
      }
    }
  }

  return changes;
}

/**
 * Helper to group breaking changes by type
 */
export function groupBreakingChangesByType(
  changes: BreakingChange[],
): Record<string, BreakingChange[]> {
  return changes.reduce(
    (acc, change) => {
      if (!acc[change.type]) {
        acc[change.type] = [];
      }
      acc[change.type].push(change);
      return acc;
    },
    {} as Record<string, BreakingChange[]>,
  );
}

/**
 * Helper to get user-friendly type names
 */
export function getBreakingChangeTypeName(type: string): string {
  const typeNames: Record<string, string> = {
    step2: "Consent Purposes",
    step2_rules: "Processing Rules (BusinessProcessRules)",
  };
  return typeNames[type] || type;
}

function calculateRetentionHours(value?: number, unit?: string): number | null {
  if (!value || !unit) return null;
  switch (unit) {
    case "years":
      return value * 365 * 24;
    case "months":
      return value * 30 * 24;
    case "weeks":
      return value * 7 * 24;
    case "days":
    default:
      return value * 24;
  }
}
