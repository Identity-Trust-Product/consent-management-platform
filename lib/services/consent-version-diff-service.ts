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

// FILE: lib/services/consent-version-diff-service.ts

import prisma from "../prisma";

export interface ConsentPurposeDiff {
  cpId: string;
  cpName: string;
  cpPublicId: string;
  cpCode: string;
  cpVersion: number;
  latestCpVersion: number | null;
  status: "added" | "removed" | "unchanged";
  processingPurposes: ProcessingPurposeDiff[];
  translations: Record<string, any>;
}

export interface ProcessingPurposeDiff {
  ppId: string;
  purposeOfProcessingId: string;
  ppPublicId: string;
  ppName: string;
  ppDescription: string;
  status: "added" | "removed" | "unchanged";
  descriptionChanged: boolean;
  oldDescription?: string;
  userAttributes: UserAttributeDiff[];
  ruleChanges: RuleChange[];
  rulePublicId?: string;
  mandatory: boolean;
  translations: Record<string, any>;
}

export interface UserAttributeDiff {
  name: string;
  status: "added" | "removed" | "unchanged";
}

export interface RuleChange {
  field: "mandatory" | "reconsentableByPrincipal" | "revocableByPrincipal";
  oldValue: boolean;
  newValue: boolean;
  description: string;
}

export interface BusinessProcessVersionDiff {
  hasNewerVersion: boolean;
  currentBpId: string;
  currentBpPublicId: string;
  currentVersion: number;
  latestBpId: number | null;
  latestBpPublicId: string | null;
  latestVersion: number | null;
  consentPurposes: ConsentPurposeDiff[];
  translations: Record<string, any>; // Added translations
  requiresAcknowledgement: boolean;
  changesSummary: {
    cpAdded: number;
    cpRemoved: number;
    ppAdded: number;
    ppRemoved: number;
    ppDescriptionChanged: number;
    attributesAdded: number;
    attributesRemoved: number;
    rulesChanged: number;
  };
}

/**
 * Get the latest version of a business process by code
 */
async function getLatestBusinessProcessVersion(
  code: string,
  currentVersion: number
) {
  return await prisma.businessProcess.findFirst({
    where: {
      code,
      version: { gt: currentVersion },
      status: "published",
    },
    orderBy: { version: "desc" },
    include: {
      businessProcessRules: {
        include: {
          consentPurpose: true,
          processingPurpose: {
            include: {
              purposeOfProcessing: true,
            },
          },
        },
      },
      businessProcessToConsentPurposes: {
        include: {
          consentPurpose: true,
        },
      },
    },
  });
}

/**
 * Calculate differences between current and latest BP version
 */
export async function calculateBusinessProcessDiff(
  currentBpPublicId: string
): Promise<BusinessProcessVersionDiff> {
  // Fetch current BP with all relations
  const currentBp = await prisma.businessProcess.findUnique({
    where: { publicId: currentBpPublicId },
    include: {
      businessProcessRules: {
        include: {
          consentPurpose: true,
          processingPurpose: {
            include: {
              purposeOfProcessing: true,
            },
          },
        },
      },
      businessProcessToConsentPurposes: {
        include: {
          consentPurpose: true,
        },
      },
    },
  });

  if (!currentBp) {
    throw new Error("Process not found");
  }

  // Check for newer version
  const latestBp = await getLatestBusinessProcessVersion(
    currentBp.code,
    currentBp.version
  );

  if (!latestBp) {
    return {
      hasNewerVersion: false,
      currentBpId: currentBp.id.toString(),
      currentBpPublicId: currentBp.publicId,
      currentVersion: currentBp.version,
      latestBpId: null,
      latestBpPublicId: null,
      latestVersion: null,
      consentPurposes: [],
      translations: (currentBp.translations || {}) as Record<string, any>,
      requiresAcknowledgement: false,
      changesSummary: {
        cpAdded: 0,
        cpRemoved: 0,
        ppAdded: 0,
        ppRemoved: 0,
        ppDescriptionChanged: 0,
        attributesAdded: 0,
        attributesRemoved: 0,
        rulesChanged: 0,
      },
    };
  }

  // Group rules by consent purpose CODE (not publicId) to match across versions
  const currentCPMap = groupRulesByConsentPurposeCode(
    currentBp.businessProcessRules
  );
  const latestCPMap = groupRulesByConsentPurposeCode(
    latestBp.businessProcessRules
  );

  // Get consent durations by CODE
  const currentDurationsMap = new Map(
    currentBp.businessProcessToConsentPurposes.map((cp) => [
      cp.consentPurpose.code,
      cp.consentDuration,
    ])
  );
  const latestDurationsMap = new Map(
    latestBp.businessProcessToConsentPurposes.map((cp) => [
      cp.consentPurpose.code,
      cp.consentDuration,
    ])
  );

  const allCPCodes = new Set([...currentCPMap.keys(), ...latestCPMap.keys()]);
  const consentPurposes: ConsentPurposeDiff[] = [];

  let cpAdded = 0,
    cpRemoved = 0,
    ppAdded = 0,
    ppRemoved = 0,
    ppDescriptionChanged = 0,
    attributesAdded = 0,
    attributesRemoved = 0,
    rulesChanged = 0;

  let requiresAcknowledgement = false;

  for (const cpCode of allCPCodes) {
    const currentRules = currentCPMap.get(cpCode) || [];
    const latestRules = latestCPMap.get(cpCode) || [];

    let cpStatus: "added" | "removed" | "unchanged" = "unchanged";

    if (currentRules.length === 0) {
      cpStatus = "added";
      cpAdded++;
    } else if (latestRules.length === 0) {
      cpStatus = "removed";
      cpRemoved++;
    }

    // Get CP details
    const currentCP = currentRules[0]?.consentPurpose;
    const latestCP = latestRules[0]?.consentPurpose;

    const cpName = latestCP?.name || currentCP?.name || "";
    const cpPublicId = latestCP?.publicId || currentCP?.publicId || "";
    const cpVersion = currentCP?.version || 1;
    const latestCpVersion = latestCP?.version || null;

    // Compare processing purposes within this consent purpose
    const ppDiffs = compareProcessingPurposes(currentRules, latestRules);

    // Count changes
    ppDiffs.forEach((pp) => {
      if (pp.status === "added") ppAdded++;
      if (pp.status === "removed") ppRemoved++;
      if (pp.descriptionChanged) ppDescriptionChanged++;

      pp.userAttributes.forEach((attr) => {
        if (attr.status === "added") attributesAdded++;
        if (attr.status === "removed") attributesRemoved++;
      });

      if (pp.ruleChanges.length > 0) {
        rulesChanged += pp.ruleChanges.length;
        // Optional to Mandatory or Reconsentable to Non-reconsentable requires acknowledgement
        pp.ruleChanges.forEach((change) => {
          if (
            (change.field === "mandatory" &&
              !change.oldValue &&
              change.newValue) ||
            (change.field === "reconsentableByPrincipal" &&
              change.oldValue &&
              !change.newValue)
          ) {
            requiresAcknowledgement = true;
          }
        });
      }
    });

    consentPurposes.push({
      cpId: cpCode,
      cpPublicId: cpPublicId,
      cpCode: cpCode,
      cpName,
      cpVersion,
      latestCpVersion,
      status: cpStatus,
      processingPurposes: ppDiffs,
      translations: (latestCP?.translations || currentCP?.translations || {}) as Record<string, any>,
    });
  }

  return {
    hasNewerVersion: true,
    currentBpId: currentBp.id.toString(),
    currentBpPublicId: currentBp.publicId,
    currentVersion: currentBp.version,
    latestBpId: latestBp.id,
    latestBpPublicId: latestBp.publicId,
    latestVersion: latestBp.version,
    consentPurposes,
    translations: (latestBp.translations || currentBp.translations || {}) as Record<string, any>,
    requiresAcknowledgement,
    changesSummary: {
      cpAdded,
      cpRemoved,
      ppAdded,
      ppRemoved,
      ppDescriptionChanged,
      attributesAdded,
      attributesRemoved,
      rulesChanged,
    },
  };
}

/**
 * Group rules by consent purpose CODE (not publicId)
 * This allows matching consent purposes across versions
 */
function groupRulesByConsentPurposeCode(rules: any[]): Map<string, any[]> {
  const map = new Map<string, any[]>();

  rules.forEach((rule) => {
    const cpCode = rule.consentPurpose.code;
    if (!map.has(cpCode)) {
      map.set(cpCode, []);
    }
    map.get(cpCode)!.push(rule);
  });

  return map;
}

/**
 * Compare processing purposes between two rule sets
 * Matches processing purposes by their publicId (assumes PP doesn't have versions)
 */
function compareProcessingPurposes(
  currentRules: any[],
  latestRules: any[]
): ProcessingPurposeDiff[] {
  // Map by purposeOfProcessingId - this is the stable identifier
  const currentPPMap = new Map(
    currentRules.map((r) => [r.processingPurpose.purposeOfProcessingId, r])
  );
  const latestPPMap = new Map(
    latestRules.map((r) => [r.processingPurpose.purposeOfProcessingId, r])
  );

  const allPurposeOfProcessingIds = new Set([
    ...currentPPMap.keys(),
    ...latestPPMap.keys(),
  ]);
  const diffs: ProcessingPurposeDiff[] = [];

  for (const purposeOfProcessingId of allPurposeOfProcessingIds) {
    const currentRule = currentPPMap.get(purposeOfProcessingId);
    const latestRule = latestPPMap.get(purposeOfProcessingId);

    let status: "added" | "removed" | "unchanged" = "unchanged";
    let descriptionChanged = false;
    let oldDescription: string | undefined;
    let ppName = "";
    let ppDescription = "";
    let ppPublicId = "";
    let mandatory: boolean = false;
    let rulePublicId: string | undefined;
    const ruleChanges: RuleChange[] = [];
    const userAttributes: UserAttributeDiff[] = [];
    let translations: Record<string, any> = {};

    if (!currentRule && latestRule) {
      // New processing purpose added
      status = "added";
      ppName = latestRule.processingPurpose.name;
      mandatory = latestRule.mandatory;
      ppDescription = latestRule.processingPurpose.description || "";
      ppPublicId = latestRule.processingPurpose.publicId;
      rulePublicId = latestRule.publicId;
      translations = (latestRule.processingPurpose.translations || {}) as Record<string, any>;

      // All attributes are new
      latestRule.processingPurpose.userAttributeNames.forEach(
        (attr: string) => {
          userAttributes.push({ name: attr, status: "added" });
        }
      );
    } else if (currentRule && !latestRule) {
      // Processing purpose was removed
      status = "removed";
      ppName = currentRule.processingPurpose.name;
      mandatory = currentRule.mandatory;
      ppDescription = currentRule.processingPurpose.description || "";
      ppPublicId = currentRule.processingPurpose.publicId;
      rulePublicId = currentRule.publicId;
      translations = (currentRule.processingPurpose.translations || {}) as Record<string, any>;

      // All attributes are removed (deleted)
      currentRule.processingPurpose.userAttributeNames.forEach(
        (attr: string) => {
          userAttributes.push({ name: attr, status: "removed" });
        }
      );
    } else if (currentRule && latestRule) {
      // Processing purpose exists in both versions
      // Use the LATEST version's data
      ppName = latestRule.processingPurpose.name;
      mandatory = currentRule.mandatory;
      ppDescription = latestRule.processingPurpose.description || "";
      ppPublicId = latestRule.processingPurpose.publicId;
      rulePublicId = latestRule.publicId;
      translations = (latestRule.processingPurpose.translations || {}) as Record<string, any>;

      // Check description change
      const currentDesc = currentRule.processingPurpose.description || "";
      const latestDesc = latestRule.processingPurpose.description || "";

      if (currentDesc !== latestDesc) {
        descriptionChanged = true;
        oldDescription = currentDesc;
      }

      // Compare user attributes
      const currentAttrs = new Set(
        currentRule.processingPurpose.userAttributeNames || []
      );
      const latestAttrs = new Set(
        latestRule.processingPurpose.userAttributeNames || []
      );

      // Get ALL attributes (union of current and latest)
      const allAttributes = new Set([...currentAttrs, ...latestAttrs]);

      allAttributes.forEach((attr) => {
        const existsInCurrent = currentAttrs.has(attr);
        const existsInLatest = latestAttrs.has(attr);

        if (existsInCurrent && existsInLatest) {
          // Attribute unchanged
          userAttributes.push({ name: attr as string, status: "unchanged" });
        } else if (!existsInCurrent && existsInLatest) {
          // Attribute added in new version
          userAttributes.push({ name: attr as string, status: "added" });
        } else if (existsInCurrent && !existsInLatest) {
          // Attribute removed/deleted in new version
          userAttributes.push({ name: attr as string, status: "removed" });
        }
      });

      // Compare rule properties (mandatory, reconsentable, revocable)
      if (currentRule.mandatory !== latestRule.mandatory) {
        ruleChanges.push({
          field: "mandatory",
          oldValue: currentRule.mandatory,
          newValue: latestRule.mandatory,
          description: latestRule.mandatory
            ? "Consent is now Mandatory"
            : "Consent is now Non-Mandatory",
        });
      }

      if (
        currentRule.reconsentableByPrincipal !==
        latestRule.reconsentableByPrincipal
      ) {
        ruleChanges.push({
          field: "reconsentableByPrincipal",
          oldValue: currentRule.reconsentableByPrincipal,
          newValue: latestRule.reconsentableByPrincipal,
          description: latestRule.reconsentableByPrincipal
            ? "Consent is now re-consentable"
            : "Consent is now non-re-consentable",
        });
      }

      if (
        currentRule.revocableByPrincipal !== latestRule.revocableByPrincipal
      ) {
        ruleChanges.push({
          field: "revocableByPrincipal",
          oldValue: currentRule.revocableByPrincipal,
          newValue: latestRule.revocableByPrincipal,
          description: latestRule.revocableByPrincipal
            ? "Consent is now revocable"
            : "Consent is now non-revocable",
        });
      }

      // If nothing changed, keep status as "unchanged"
      // This prevents showing duplicate entries
      if (
        !descriptionChanged &&
        ruleChanges.length === 0 &&
        !userAttributes.some((attr) => attr.status !== "unchanged")
      ) {
        status = "unchanged";
      }
    }

    diffs.push({
      ppId: purposeOfProcessingId.toString(),
      ppPublicId: ppPublicId,
      ppName,
      ppDescription,
      purposeOfProcessingId,
      status,
      descriptionChanged,
      oldDescription,
      userAttributes,
      ruleChanges,
      rulePublicId,
      mandatory,
      translations,
    });
  }

  return diffs;
}

/**
 * Get all consents with version diffs for a data principal
 */
export async function getConsentsWithVersionDiffs(
  dataPrincipalId: string,
  majorDataPrincipalId?: string
) {
  // Get all active consents
  const consents = await prisma.consent.findMany({
    where: {
      dataPrincipalId: dataPrincipalId,
      ...(majorDataPrincipalId && { majorDataPrincipalId }),
      status: "accepted",
    },
    include: {
      businessProcess: true,
      businessProcessRule: {
        include: {
          consentPurpose: true,
          processingPurpose: true,
        },
      },
    },
  });

  const consentsWithDiffs = [];

  // Group consents by business process to avoid duplicate calculations
  const bpMap = new Map<string, any[]>();

  consents.forEach((consent) => {
    const bpId = consent.businessProcessId;
    if (!bpMap.has(bpId)) {
      bpMap.set(bpId, []);
    }
    bpMap.get(bpId)!.push(consent);
  });

  // Calculate diff once per business process
  for (const [bpId, bpConsents] of bpMap) {
    const diff = await calculateBusinessProcessDiff(bpId);

    if (diff.hasNewerVersion) {
      bpConsents.forEach((consent) => {
        consentsWithDiffs.push({
          consent,
          diff,
        });
      });
    }
  }

  return consentsWithDiffs;
}
