"use server";
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

import prisma from "../prisma";

// --- 1. HELPER: Format duration (in hours) to a string ---

function formatDuration(hours: number | null | undefined): string {
  if (hours === null || hours === undefined) return "Not specified";

  const hoursInYear = 8760;
  const hoursInDay = 24;

  const years = hours / hoursInYear;
  if (years >= 1) {
    const roundedYears = Math.round(years);
    return `${roundedYears} year${roundedYears > 1 ? "s" : ""}`;
  }

  const days = hours / hoursInDay;
  if (days >= 1) {
    const roundedDays = Math.round(days);
    return `${roundedDays} day${roundedDays > 1 ? "s" : ""}`;
  }

  return `${hours} hour${hours > 1 ? "s" : ""}`;
}

// --- 2. ACTION: Get Opted Services for the Dropdown ---

export type OptedService = {
  id: string; // publicId
  name: string;
};

// --- 3. ACTION: Get Full Revoke Data for a Selected Service ---

// These types match the structure your component expects
type RevokeAttribute = string;

type RevokeProcessing = {
  id: string;
  title: string;
  description: string;
  attributes: RevokeAttribute[];
};

export type RevokePurpose = {
  id: string;
  title: string;
  duration: string;
  processingList: RevokeProcessing[];
};

/**
 * Fetches the detailed consent hierarchy (Purposes and Processing)
 * for a specific user and a specific, 'accepted' Business Process.
 */
export async function getRevokeDataForService(
  dataPrincipalId: string,
  selectedBusinessProcessId: string // This is the publicId
): Promise<RevokePurpose[]> {
  try {
    // 1. Get the internal ID of the selected Business Process
    const businessProcess = await prisma.businessProcess.findUnique({
      where: { publicId: selectedBusinessProcessId },
      select: { id: true },
    });

    if (!businessProcess) {
      throw new Error("Process not found.");
    }
    const bpInternalId = businessProcess.id;

    // 2. Get all 'accepted' consent publicIDs for this user + service
    const acceptedConsents = await prisma.consent.findMany({
      where: {
        dataPrincipalId: dataPrincipalId,
        status: "accepted",
        businessProcessId: selectedBusinessProcessId,
      },
      select: {
        consentPurposeId: true,
        processingPurposeId: true,
      },
    });

    const consentPurposeIds = [
      ...new Set(acceptedConsents.map((c) => c.consentPurposeId)),
    ];
    const processingPurposeIds = [
      ...new Set(acceptedConsents.map((c) => c.processingPurposeId)),
    ];

    // 3. Fetch full ProcessingPurpose details
    const processingPurposesData = await prisma.processingPurpose.findMany({
      where: { publicId: { in: processingPurposeIds } },
      select: {
        publicId: true,
        name: true,
        description: true,
        userAttributeNames: true, // This has the attributes
        consentPurposeId: true, // Internal ID for linking
      },
    });

    // 4. Group processing purposes by their parent's internal ID
    const processingMap = new Map<number, RevokeProcessing[]>();
    for (const pp of processingPurposesData) {
      if (!processingMap.has(pp.consentPurposeId)) {
        processingMap.set(pp.consentPurposeId, []);
      }
      processingMap.get(pp.consentPurposeId)!.push({
        id: pp.publicId,
        title: pp.name,
        description: pp.description || "No description provided.",
        attributes: pp.userAttributeNames,
      });
    }

    // 5. Fetch full ConsentPurpose details, including duration
    const consentPurposesData = await prisma.consentPurpose.findMany({
      where: { publicId: { in: consentPurposeIds } },
      select: {
        id: true, // Internal ID
        publicId: true,
        name: true,
        // Get the duration from the specific link to this BP
        businessProcessToConsentPurposes: {
          where: { businessProcessId: bpInternalId },
          select: { consentDuration: true },
          take: 1,
        },
      },
    });

    // 6. Assemble the final structure
    const outputPurposes: RevokePurpose[] = consentPurposesData.map((cp) => {
      const duration = cp.businessProcessToConsentPurposes[0]?.consentDuration;
      return {
        id: cp.publicId,
        title: cp.name,
        duration: formatDuration(duration),
        processingList: processingMap.get(cp.id) || [], // Get children
      };
    });

    return outputPurposes;
  } catch (error) {
    console.error("Error fetching revoke data for service:", error);
    return [];
  }
}
