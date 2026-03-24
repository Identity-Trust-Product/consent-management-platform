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
 * Find a business process by code and version
 * @param code - Business process code
 * @param version - Business process version
 * @returns Business process with basic info or null
 */
export async function findBusinessProcessByCodeAndVersion(
  code: string,
  version: number
) {
  return await prisma.businessProcess.findUnique({
    where: {
      code_version: {
        code,
        version,
      },
    },
    select: {
      id: true,
      name: true,
      code: true,
      version: true,
      status: true,
    },
  });
}

/**
 * Notice creation data interface
 */
export interface NoticeCreationData {
  referenceId: string;
  dataPrincipalId: string;
  businessProcessId: number;
  linkExpiresAt: Date;
  consentDuration: number | null;
  noticeConfig: any;
  redirectionUrl: string | null;
  defaultLanguage: string;
  creationMethod: string;
  createdByUserId: string;
  forMinor?: boolean;
}

/**
 * Create a notice record
 * @param data - Notice creation data
 * @returns Created notice with business process data
 */
export async function createNoticeRecord(data: NoticeCreationData) {
  return await prisma.notice.create({
    data: {
      referenceId: data.referenceId,
      dataPrincipalId: data.dataPrincipalId,
      businessProcessId: data.businessProcessId,
      linkExpiresAt: data.linkExpiresAt,
      consentDuration: data.consentDuration,
      noticeConfig: data.noticeConfig,
      redirectionUrl: data.redirectionUrl,
      defaultLanguage: data.defaultLanguage,
      creationMethod: data.creationMethod,
      createdByUserId: data.createdByUserId,
      markCompletedTimestamp: null,
      forMinor: data.forMinor || false,
    },
    include: {
      businessProcess: {
        select: {
          name: true,
          code: true,
        },
      },
    },
  });
}

/**
 * Create notice metadata records
 * @param noticeId - Notice ID
 * @param metadata - Array of key-value pairs
 */
export async function createNoticeMetadata(
  noticeId: number,
  metadata: Array<{ key: string; value: string }>
) {
  if (metadata.length === 0) {
    return;
  }

  return await prisma.noticeMetadata.createMany({
    data: metadata.map((meta) => ({
      noticeId,
      key: meta.key,
      value: meta.value,
    })),
  });
}
