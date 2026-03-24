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
import { ConsentWithRelations } from "./types";
import { Prisma, ConsentAction } from "@prisma/client";

// 1. Define the include object as a plain const (Type Inference will handle the rest)
const dbInclude = {
  businessProcess: true,
  businessProcessRule: {
    include: {
      processingPurpose: {
        include: {
          purposeOfProcessing: true,
          processingPurposeToDataProcessors: {
            include: { dataProcessor: true },
          },
        },
      },
      consentPurpose: true,
    },
  },
  processingPurpose: {
    include: {
      purposeOfProcessing: true,
      processingPurposeToDataProcessors: {
        include: { dataProcessor: true },
      },
    },
  },
  consentPurpose: true,

  // --- FIX IS HERE ---
  childConsents: {
    where: {
      auditTrail: {
        some: {
          action: {
            in: [
              ConsentAction.VERSION_UPDATED,
              ConsentAction.RENEWED,
              ConsentAction.SUPERCEDED
            ],
          },
        },
      },
    },
    select: { id: true },
  },
} satisfies Prisma.ConsentInclude;

async function getUserAttributesDictionary() {
  const attributes = await prisma.userAttribute.findMany({
    select: {
      name: true,
      translations: true,
    },
  });

  return attributes.reduce((acc, attr) => {
    acc[attr.name] = {
      name: attr.name,
      translations: attr.translations as Record<string, any>,
    };
    return acc;
  }, {} as Record<string, { name: string; translations: Record<string, any> }>);
}

export async function getConsentWalletData(
  dataPrincipalId: string,
  majorDataPrincipalId?: string
) {
  try {
    // 2. Remove explicit type annotation.
    // 'allConsents' automatically infers the shape based on 'dbInclude' above.
    const allConsents = await prisma.consent.findMany({
      where: {
        dataPrincipalId,
        ...(majorDataPrincipalId && { majorDataPrincipalId }),
      },
      include: dbInclude,
      orderBy: {
        insertedAt: "desc",
      },
    });

    const userAttributes = await getUserAttributesDictionary();

    const servicesMap = new Map<
      string,
      {
        serviceName: string;
        serviceTranslations?: Record<string, any>;
        servicePublicId: string;
        consents: ConsentWithRelations[];
      }
    >();

    for (const dbConsent of allConsents) {
      // TS knows businessProcess exists because of the inferred 'dbInclude'
      if (!dbConsent.businessProcess) continue;

      // TS knows childConsents exists and is an array
      const isSuperseded =
        dbConsent.status === "revoked" &&
        dbConsent.childConsents &&
        dbConsent.childConsents.length > 0;

      if (isSuperseded) {
        continue;
      }

      // Map to frontend type
      const consentForFrontend: ConsentWithRelations = {
        ...dbConsent,
        versionUpdates: dbConsent.childConsents,
        childConsents: undefined,
      } as unknown as ConsentWithRelations;

      const bpId = consentForFrontend.businessProcess.publicId;

      if (!servicesMap.has(bpId)) {
        servicesMap.set(bpId, {
          serviceName: consentForFrontend.businessProcess.name,
          serviceTranslations: (consentForFrontend.businessProcess as any).translations,
          servicePublicId: bpId,
          consents: [],
        });
      }

      servicesMap.get(bpId)!.consents.push(consentForFrontend);
    }

    return {
      success: true,
      services: Array.from(servicesMap.values()),
      userAttributes,
    };
  } catch (error) {
    console.error("Error fetching consent wallet data:", error);
    return { success: false, services: [], userAttributes: {} };
  }
}

/**
 * Fetches the identifiers required to view the Receipt in the CMS.
 * Resolves the Notice Public ID based on the Business Process, Reference ID, and Data Principal ID.
 */
export async function getReceiptViewDetails(
  referenceId: string,
  dataPrincipalId: string,
  processCode: string,
  version: number
) {
  try {
    const businessProcess = await prisma.businessProcess.findUnique({
      where: {
        code_version: {
          code: processCode,
          version: version,
        },
      },
      select: { id: true },
    });

    if (!businessProcess) {
      return { success: false, error: "Business Process not found" };
    }

    const notice = await prisma.notice.findUnique({
      where: {
        notice_accepted_unique_index: {
          referenceId: referenceId,
          dataPrincipalId: dataPrincipalId,
          businessProcessId: businessProcess.id,
        },
      },
      select: {
        publicId: true,
        dataPrincipalId: true, // This serves as the access token
      },
    });

    if (!notice) {
      return { success: false, error: "Receipt/Notice not found" };
    }

    return {
      success: true,
      noticePublicId: notice.publicId,
      accessToken: notice.dataPrincipalId,
    };
  } catch (error: any) {
    console.error("Error fetching receipt details:", error);
    return { success: false, error: "Failed to retrieve receipt details." };
  }
}

import { generateConsentReceipt } from "@/lib/services/consent-receipt-service";

export async function getReceiptData(
  referenceId: string,
  dataPrincipalId: string,
  processCode: string,
  version: number
) {
  try {
    // 1. Resolve Notice Public ID using the existing helper
    const result = await getReceiptViewDetails(
      referenceId,
      dataPrincipalId,
      processCode,
      version
    );

    if (!result.success || !result.noticePublicId) {
      return { success: false, error: result.error || "Notice not found" };
    }

    // 2. Generate the receipt JSON data
    const receiptData = await generateConsentReceipt(result.noticePublicId);

    return { success: true, data: receiptData };
  } catch (error: any) {
    console.error("Error fetching receipt data:", error);
    return { success: false, error: "Failed to load receipt data." };
  }
}
