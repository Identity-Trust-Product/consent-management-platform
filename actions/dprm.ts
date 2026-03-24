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

import prisma from "@/lib/prisma";
import { generateDprmLink as generateDprmLinkService } from "@/lib/services/dprm-service";
import { verifyDprmToken } from "@/lib/utils";
import { NOTICE_METADATA_KEYS } from "@/lib/constants/notice-metadata";

export async function generateDprmLink(
  dataPrincipalId: string,
  expiresAt?: Date
) {
  try {
    // TODO: Add RBAC check here
    const dprmUrl = await generateDprmLinkService(dataPrincipalId, expiresAt);
    return { success: true, url: dprmUrl };
  } catch (error) {
    console.error("Error in generateDprmLink action:", error);
    return { success: false, error: "Failed to generate DPRM link" };
  }
}

/**
 * Helper to generate DPRM link for a notice
 * Handles logic for minor/major data principals
 */
export async function generateDprmLinkForNotice(notice: {
  dataPrincipalId: string;
  forMinor: boolean;
  metadata: { key: string; value: string }[];
}) {
  try {
    let targetPrincipalId = notice.dataPrincipalId;
    let queryParams = "";

    if (notice.forMinor) {
      const majorMetadata = notice.metadata.find(
        (m) => m.key === NOTICE_METADATA_KEYS.MAJOR_DATA_PRINCIPAL_ID
      );
      if (majorMetadata?.value) {
        targetPrincipalId = majorMetadata.value;
        queryParams = `?minor_data_principal_id=${notice.dataPrincipalId}`;
      }
    }

    const result = await generateDprmLink(
      targetPrincipalId,
      new Date(Date.now() + 7 * 24 * 60 * 60 * 1000) // 7 days
    );

    if (result.success && result.url) {
      return { success: true, url: result.url + queryParams };
    }

    return result;
  } catch (error) {
    console.error("Error in generateDprmLinkForNotice action:", error);
    return { success: false, error: "Failed to generate DPRM link for notice" };
  }
}

/**
 * Get minors associated with a major data principal
 * Used in the DPRM portal navbar to switch accounts
 */
export async function getMinorsForMajor(token: string) {
  try {
    // 1. Verify the DPRM token
    const tokenPayload = await verifyDprmToken(token);
    const majorDataPrincipalId = tokenPayload.data_principal_id as string;

    // 2. Get unique minor data principal IDs from consents
    const minors = await prisma.consent.findMany({
      where: {
        majorDataPrincipalId: majorDataPrincipalId,
      },
      select: {
        dataPrincipalId: true,
      },
      distinct: ["dataPrincipalId"],
    });

    return {
      success: true,
      data: minors.map((m) => m.dataPrincipalId),
    };
  } catch (error: any) {
    console.error("Error in getMinorsForMajor:", error);
    return {
      success: false,
      error: "Failed to fetch minors",
      data: [],
    };
  }
}

/**
 * Get business processes that a data principal has consents for
 * Used across DPRM portal (grievance forms, etc.)
 */
export async function getBusinessProcessesForPrincipal(
  token: string,
  minorDataPrincipalId?: string
) {
  try {
    // 1. Verify the DPRM token
    const tokenPayload = await verifyDprmToken(token);
    const dataPrincipalId = tokenPayload.data_principal_id as string;

    const targetPrincipalId = minorDataPrincipalId || dataPrincipalId;

    // 2. Get unique business processes from active consents
    const consents = await prisma.consent.findMany({
      where: {
        dataPrincipalId: targetPrincipalId,
        ...(minorDataPrincipalId && { majorDataPrincipalId: dataPrincipalId }),
        status: "accepted",
        isExpired: false,
      },
      select: {
        businessProcessId: true,
        businessProcess: {
          select: {
            id: true,
            publicId: true,
            name: true,
          },
        },
      },
      distinct: ["businessProcessId"],
    });

    // Filter out null business processes
    const businessProcesses = consents
      .map((c) => c.businessProcess)
      .filter((bp): bp is NonNullable<typeof bp> => bp !== null);

    return {
      success: true,
      data: businessProcesses,
    };
  } catch (error: any) {
    console.error("Error in getBusinessProcessesForPrincipal:", error);

    if (error.message === "TOKEN_EXPIRED") {
      return { success: false, error: "Your session has expired", data: [] };
    }

    if (error.message === "INVALID_TOKEN") {
      return { success: false, error: "Invalid access token", data: [] };
    }

    return {
      success: false,
      error: "Failed to fetch business processes",
      data: [],
    };
  }
}
