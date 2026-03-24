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

// FILE: app/consent-action-center/page.tsx

import { getConsentsWithVersionDiffs } from "@/lib/services/consent-version-diff-service";
import {
  transformVersionDiffToUIData,
  transformExpiringConsentsToUIData,
} from "@/lib/services/consent-update-transform-service";
import type { RevokeData } from "./types";
import {
  ValidatedDprmPageProps,
  withDprmSessionHandler,
} from "@/components/hoc/with-dprm-session-handler";
import ConsentActionCenter from "./consent-action-center";
import prisma from "@/lib/prisma";

async function getRevokeData(
  dataPrincipalId: string,
  majorDataPrincipalId?: string
): Promise<RevokeData> {
  const consents = await prisma.consent.findMany({
    where: {
      dataPrincipalId,
      ...(majorDataPrincipalId && { majorDataPrincipalId }),
      status: "accepted",
      businessProcessRule: {
        revocableByPrincipal: true,
      },
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

  const services: Record<string, any> = {};

  consents.forEach((consent) => {
    const serviceId = consent.businessProcess.publicId;
    const serviceName = consent.businessProcess.name;

    if (!services[serviceId]) {
      services[serviceId] = {
        name: serviceName,
        translations: consent.businessProcess.translations, // Add translations
        purposes: [],
      };
    }

    const cpId = consent.businessProcessRule.consentPurpose.publicId;
    const cpName = consent.businessProcessRule.consentPurpose.name;
    const cpTranslations = (consent.businessProcessRule.consentPurpose.translations || {}) as Record<string, any>;

    let purpose = services[serviceId].purposes.find((p: any) => p.id === cpId);

    if (!purpose) {
      purpose = {
        id: cpId,
        title: cpName,
        duration: "3 years",
        processingList: [],
        translations: cpTranslations,
      };
      services[serviceId].purposes.push(purpose);
    }

    const ppTranslations = (consent.businessProcessRule.processingPurpose.translations || {}) as Record<string, any>;
    const processing = {
      id: consent.businessProcessRule.processingPurpose.publicId,
      title: consent.businessProcessRule.processingPurpose.name,
      description:
        consent.businessProcessRule.processingPurpose.description || "",
      attributes:
        consent.businessProcessRule.processingPurpose.userAttributeNames,
      translations: ppTranslations,
    };

    const exists = purpose.processingList.some(
      (p: any) => p.id === processing.id
    );

    if (!exists) {
      purpose.processingList.push(processing);
    }
  });

  return { services };
}
async function getOptedServices(
  dataPrincipalId: string,
  majorDataPrincipalId?: string
) {
  // Find all accepted consents for this principal (filter status if you only want current services)
  const consents = await prisma.consent.findMany({
    where: {
      dataPrincipalId,
      ...(majorDataPrincipalId && { majorDataPrincipalId }),
      status: "accepted",
      // You might want to filter by status: "accepted" if you only want active ones
    },
    select: {
      businessProcess: {
        select: {
          id: true,
          publicId: true,
          name: true,
          code: true,
          version: true,
          translations: true,
        },
      },
    },
  });

  // Remove duplicates by BP id
  const seen = new Set();
  const uniqueBPs = consents
    .map((c) => c.businessProcess)
    .filter((bp) => {
      if (!bp || seen.has(bp.id)) return false;
      seen.add(bp.id);
      return true;
    });

  return uniqueBPs;
}

async function getExpiringConsents(
  dataPrincipalId: string,
  majorDataPrincipalId?: string
) {
  const thirtyDaysFromNow = new Date();
  thirtyDaysFromNow.setDate(thirtyDaysFromNow.getDate() + 30);

  return await prisma.consent.findMany({
    where: {
      dataPrincipalId,
      ...(majorDataPrincipalId && { majorDataPrincipalId }),
      status: "accepted",
      expiresAt: {
        lte: thirtyDaysFromNow,
        gte: new Date(),
      },
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
}

async function ConsentActionCenterPage({
  sessionContext,
  searchParams,
}: ValidatedDprmPageProps) {
  const resolvedSearchParams = await searchParams;
  const minorDataPrincipalId = resolvedSearchParams?.minor_data_principal_id as
    | string
    | undefined;

  const dataPrincipalId =
    minorDataPrincipalId || sessionContext.dataPrincipalId;
  const majorDataPrincipalId = minorDataPrincipalId
    ? sessionContext.dataPrincipalId
    : undefined;

  // Get consents with version diffs
  const consentsWithDiffs = await getConsentsWithVersionDiffs(
    dataPrincipalId,
    majorDataPrincipalId
  );

  // Get expiring consents
  const expiringConsents = await getExpiringConsents(
    dataPrincipalId,
    majorDataPrincipalId
  );

  // Transform version diffs to UI format
  const versionUpdateData = transformVersionDiffToUIData(consentsWithDiffs);

  // Transform expiring consents to UI format
  const expiryUpdateData = transformExpiringConsentsToUIData(expiringConsents);

  // Merge both update types
  const combinedUpdateData = mergeUpdateData(
    versionUpdateData,
    expiryUpdateData
  );

  // Get revoke data
  const revokeData = await getRevokeData(dataPrincipalId, majorDataPrincipalId);

  // Get all unique opted services
  const optedServices = await getOptedServices(
    dataPrincipalId,
    majorDataPrincipalId
  );

  // Fetch all UserAttribute translations
  const userAttributes = await prisma.userAttribute.findMany({
    select: {
      name: true,
      translations: true,
    },
  });

  const attributeTranslations = userAttributes.reduce((acc, attr) => {
    acc[attr.name] = attr.translations;
    return acc;
  }, {} as Record<string, any>);

  return (
    <ConsentActionCenter
      dataPrincipalId={dataPrincipalId}
      initialUpdateData={combinedUpdateData}
      initialRevokeData={revokeData}
      optedServices={optedServices}
      majorDataPrincipalId={majorDataPrincipalId}
      attributeTranslations={attributeTranslations}
    />
  );
}

export default withDprmSessionHandler(ConsentActionCenterPage);
export const dynamic = "force-dynamic";

function mergeUpdateData(versionData: any, expiryData: any) {
  const merged = { services: { ...versionData.services } };

  // Merge expiring consents into version update data
  Object.entries(expiryData.services).forEach(
    ([serviceId, serviceData]: any) => {
      if (!merged.services[serviceId]) {
        merged.services[serviceId] = serviceData;
      } else {
        // Merge purposes
        serviceData.purposes.forEach((expiryPurpose: any) => {
          const existingPurpose = merged.services[serviceId].purposes.find(
            (p: any) => p.id === expiryPurpose.id
          );

          if (existingPurpose) {
            // Merge processing purposes
            expiryPurpose.processingList.forEach((expiryPP: any) => {
              const existingPP = existingPurpose.processingList.find(
                (p: any) => p.id === expiryPP.id
              );

              if (!existingPP) {
                existingPurpose.processingList.push(expiryPP);
              } else {
                // If already exists with version update, add expiry notice
                if (!existingPP.isExpiring) {
                  existingPP.isExpiring = true;
                  existingPP.expiresAt = expiryPP.expiresAt;
                  existingPP.daysUntilExpiry = expiryPP.daysUntilExpiry;
                }
              }
            });
          } else {
            merged.services[serviceId].purposes.push(expiryPurpose);
          }
        });
      }
    }
  );

  return merged;
}
