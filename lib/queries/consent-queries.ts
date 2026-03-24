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

/**
 * Find processing purposes by purpose of processing codes
 * @param codes - Array of purpose of processing codes
 * @returns Array of processing purpose public IDs
 */
export async function findProcessingPurposesByPoPCodes(codes: string[]) {
  const processingPurposes = await prisma.processingPurpose.findMany({
    where: {
      purposeOfProcessing: {
        code: {
          in: codes,
        },
      },
    },
    select: {
      publicId: true,
    },
  });

  return processingPurposes.map((pp) => pp.publicId);
}

/**
 * Consent validation query options
 */
export interface ConsentValidationOptions {
  dataPrincipalId?: string;
  referenceId?: string;
  consentId?: string;
  processingPurposeIds?: string[];
  statuses?: string[];
}

/**
 * Find consents for validation with all related data
 * Supports filtering by data principal ID, reference ID, or consent ID
 * 
 * @param options - Validation options
 * @returns Array of consents with related data (processingPurpose, businessProcess, consentPurpose)
 */
export async function findConsentsForValidation(
  options: ConsentValidationOptions
) {
  const {
    dataPrincipalId,
    referenceId,
    consentId,
    processingPurposeIds,
    statuses = ["accepted", "revoked"],
  } = options;

  // Build where conditions
  const whereConditions: any = {
    status: {
      in: statuses,
    },
  };

  // Add identifier-based filtering
  if (dataPrincipalId) {
    whereConditions.dataPrincipalId = dataPrincipalId;
  }

  if (referenceId) {
    whereConditions.referenceId = referenceId;
  }

  if (consentId) {
    whereConditions.publicId = consentId;
  }

  // Add processing purpose filtering if provided
  if (processingPurposeIds && processingPurposeIds.length > 0) {
    whereConditions.processingPurposeId = {
      in: processingPurposeIds,
    };
  }

  return await prisma.consent.findMany({
    where: whereConditions,
    include: {
      processingPurpose: {
        include: {
          purposeOfProcessing: true,
        },
      },
      businessProcess: {
        select: {
          code: true,
          version: true,
        },
      },
      consentPurpose: {
        select: {
          code: true,
          version: true,
        },
      },
    },
    orderBy: {
      insertedAt: "desc", // Order by insertedAt to get latest first
    },
  });
}
