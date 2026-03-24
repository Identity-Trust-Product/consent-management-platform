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

// FILE: lib/services/consent-update-transform-service.ts

import type { BusinessProcessVersionDiff } from "./consent-version-diff-service";

export interface ProcessingData {
  id: string;
  title: string;
  description: string;
  oldDescription?: string;
  isNew: boolean;
  isDeleted?: boolean;
  isExpiring?: boolean;
  expiresAt?: Date | string;
  daysUntilExpiry?: number;
  defaultChecked: boolean;
  mandatory: boolean;
  updateNotice: string | null;
  descriptionChangeNotice?: string; // separate description change
  ruleChangeNotices?: string[]; // array of rule changes
  attributes: {
    list: {
      name: string;
      status: string;
    }[];
    newlyAddedCount: number;
    deletedCount?: number;
    deletedList?: string[];
  };
  translations: Record<string, any>;
}

export interface PurposeData {
  id: string;
  title: string;
  duration: string;
  isNew: boolean;
  isDeleted?: boolean;
  defaultChecked: boolean;
  processingList: ProcessingData[];
  translations: Record<string, any>;
}

export interface ConsentData {
  services: Record<
    string,
    {
      name: string;
      purposes: PurposeData[];
      translations: any; // Added translations
    }
  >;
}

/**
 * Transform version diff data into UI-compatible format
 * Only shows changed items and deduplicates
 */
export function transformVersionDiffToUIData(
  consentsWithDiffs: Array<{
    consent: any;
    diff: BusinessProcessVersionDiff;
  }>
): ConsentData {
  const services: Record<string, any> = {};

  // Group by business process to avoid processing the same BP diff multiple times
  const bpDiffMap = new Map<string, BusinessProcessVersionDiff>();
  const bpServiceMap = new Map<string, { id: string; name: string }>();

  consentsWithDiffs.forEach(({ consent, diff }) => {
    const bpId = consent.businessProcess.publicId;
    if (!bpDiffMap.has(bpId)) {
      bpDiffMap.set(bpId, diff);
      bpServiceMap.set(bpId, {
        id: consent.businessProcess.publicId,
        name: consent.businessProcess.name,
      });
    }
  });

  // Process each unique business process once
  bpDiffMap.forEach((diff, bpId) => {
    const serviceInfo = bpServiceMap.get(bpId)!;
    const serviceId = serviceInfo.id;
    const serviceName = serviceInfo.name;

    if (!services[serviceId]) {
      services[serviceId] = {
        name: serviceName,
        translations: diff.translations || {}, // Map translations
        purposes: [],
      };
    }

    // Track added purposes by ID to avoid duplicates
    const addedPurposes = new Set<string>();

    diff.consentPurposes.forEach((cpDiff) => {
      // Only show purposes with changes
      const showPurpose =
        cpDiff.status !== "unchanged" ||
        cpDiff.processingPurposes.some(
          (ppDiff) =>
            ppDiff.status !== "unchanged" ||
            ppDiff.descriptionChanged ||
            ppDiff.ruleChanges.length > 0 ||
            ppDiff.userAttributes.some(
              (attr) => attr.status === "added" || attr.status === "removed"
            )
        );

      if (!showPurpose) {
        return;
      }

      // Skip if already added
      if (addedPurposes.has(cpDiff.cpPublicId)) {
        return;
      }

      const purpose: PurposeData = {
        id: cpDiff.cpPublicId,
        title: cpDiff.cpName,
        duration: "3 years",
        isNew: cpDiff.status === "added",
        isDeleted: cpDiff.status === "removed",
        defaultChecked: true,
        processingList: [],
        translations: cpDiff.translations || {},
      };

      // Track added processing purposes (by cp + purposeOfProcessingId)
      const addedProcessing = new Set<string>();

      cpDiff.processingPurposes.forEach((ppDiff) => {
        // Only show processing purposes with changes
        const showPP =
          ppDiff.status !== "unchanged" ||
          ppDiff.descriptionChanged ||
          ppDiff.ruleChanges.length > 0 ||
          ppDiff.userAttributes.some(
            (attr) => attr.status === "added" || attr.status === "removed"
          );

        if (!showPP) {
          return;
        }

        // Use purposeOfProcessingId as the unique key (not ppPublicId)
        const ppKey = `${cpDiff.cpPublicId}-${ppDiff.purposeOfProcessingId}`;
        if (addedProcessing.has(ppKey)) {
          return;
        }

        const processing = transformProcessingPurpose(ppDiff);
        purpose.processingList.push(processing);
        addedProcessing.add(ppKey);
      });

      // Only add purposes with at least one changed processing purpose
      if (purpose.processingList.length > 0) {
        services[serviceId].purposes.push(purpose);
        addedPurposes.add(cpDiff.cpPublicId);
      }
    });
  });

  return { services };
}

/**
 * Transform a processing purpose diff to UI format
 */
export function transformProcessingPurpose(ppDiff: any): ProcessingData {
  const deletedAttributes = ppDiff.userAttributes.filter(
    (attr: any) => attr.status === "removed"
  );

  const processing: ProcessingData = {
    id: ppDiff.ppPublicId,
    title: ppDiff.ppName,
    description: ppDiff.ppDescription,
    oldDescription: ppDiff.descriptionChanged
      ? ppDiff.oldDescription
      : undefined,
    isNew: ppDiff.status === "added",
    isDeleted: ppDiff.status === "removed",
    mandatory: ppDiff.mandatory,
    defaultChecked: true,
    updateNotice: null,
    descriptionChangeNotice: undefined,
    ruleChangeNotices: undefined,
    attributes: {
      list: ppDiff.userAttributes
        .filter((attr: any) => attr.status !== "removed")
        .map((attr: any) => ({
          name: attr.name,
          status: attr.status, // Pass status to client
        })),
      newlyAddedCount: ppDiff.userAttributes.filter(
        (attr: any) => attr.status === "added"
      ).length,
      deletedCount: deletedAttributes.length,
      deletedList: deletedAttributes.map((attr: any) => attr.name),
    },
    translations: ppDiff.translations || {},
  };

  // Handle description changes separately (green box)
  if (ppDiff.descriptionChanged && ppDiff.oldDescription) {
    processing.descriptionChangeNotice = ppDiff.ppDescription;
  }

  // Handle rule changes separately (yellow/orange box) - all of them
  if (ppDiff.ruleChanges.length > 0) {
    processing.ruleChangeNotices = ppDiff.ruleChanges.map(
      (change: any) => change.description
    );
  }

  return processing;
}

export function getUpdateNotificationCount(
  consentsWithDiffs: Array<{
    consent: any;
    diff: BusinessProcessVersionDiff;
  }>
): number {
  const uniqueBPs = new Set(
    consentsWithDiffs.map((item) => item.diff.currentBpPublicId)
  );
  return uniqueBPs.size;
}

/**
 * Get total update count (all with newer versions)
 */
export function getTotalUpdateCount(
  consentsWithDiffs: Array<{
    consent: any;
    diff: BusinessProcessVersionDiff;
  }>
): number {
  const uniqueBPs = new Set(
    consentsWithDiffs.map((item) => item.diff.currentBpPublicId)
  );
  return uniqueBPs.size;
}

/**
 * Transform expiring consents to UI format
 */
export function transformExpiringConsentsToUIData(
  expiringConsents: any[]
): ConsentData {
  const services: Record<string, any> = {};

  // Group by business process
  const bpMap = new Map<string, any[]>();
  expiringConsents.forEach((consent) => {
    const bpId = consent.businessProcess.publicId;
    if (!bpMap.has(bpId)) {
      bpMap.set(bpId, []);
    }
    bpMap.get(bpId)!.push(consent);
  });

  bpMap.forEach((consents, bpId) => {
    const bp = consents[0].businessProcess;
    const serviceId = bp.publicId;
    const serviceName = bp.name;

    if (!services[serviceId]) {
      services[serviceId] = {
        name: serviceName,
        translations: bp.translations || {}, // Map translations
        purposes: [],
      };
    }

    // Group by consent purpose
    const cpMap = new Map<string, any[]>();
    consents.forEach((consent) => {
      const cpId = consent.businessProcessRule.consentPurpose.publicId;
      if (!cpMap.has(cpId)) {
        cpMap.set(cpId, []);
      }
      cpMap.get(cpId)!.push(consent);
    });

    cpMap.forEach((consents, cpId) => {
      const cp = consents[0].businessProcessRule.consentPurpose;

      const purpose: PurposeData = {
        id: cpId,
        title: cp.name,
        duration: "3 years",
        isNew: false,
        defaultChecked: true,
        processingList: [],
        translations: cp.translations || {},
      };

      // Track added processing purposes
      const addedProcessing = new Set<string>();
      consents.forEach((consent) => {
        const pp = consent.businessProcessRule.processingPurpose;
        const ppId = pp.publicId;

        if (addedProcessing.has(ppId)) return;

        const daysUntilExpiry = Math.ceil(
          (new Date(consent.expiresAt).getTime() - new Date().getTime()) /
          (1000 * 60 * 60 * 24)
        );
        const attributes = [];
        pp.userAttributeNames.forEach((attr) => {
          attributes.push({ name: attr as string, status: "unchanged" });
        });

        const processing: ProcessingData = {
          id: ppId,
          mandatory: consent.businessProcessRule.mandatory,
          title: pp.name,
          description: pp.description || "",
          isNew: false,
          defaultChecked: true,
          updateNotice: null,
          isExpiring: true,
          expiresAt: consent.expiresAt,
          daysUntilExpiry,
          attributes: {
            list: attributes,
            newlyAddedCount: 0,
          },
          translations: pp.translations || {},
        };

        purpose.processingList.push(processing);
        addedProcessing.add(ppId);
      });

      if (purpose.processingList.length > 0) {
        services[serviceId].purposes.push(purpose);
      }
    });
  });

  return { services };
}
