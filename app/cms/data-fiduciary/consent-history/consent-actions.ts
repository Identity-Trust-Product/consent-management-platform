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

import { PrismaClient, Prisma } from "@prisma/client";
import { ConsentFilters, ConsentResponse, ConsentTableRow } from "./types";

const prisma = new PrismaClient();

export async function getConsents(
  filters: ConsentFilters
): Promise<ConsentResponse> {
  const {
    searchType,
    searchQuery,
    startDate,
    endDate,
    businessProcessIds,
    status,
    page = 1,
    pageSize = 10,
  } = filters;

  // 1. Build the Where Clause for NOTICES
  const where: Prisma.NoticeWhereInput = {};

  // Handle Search Query
  if (searchQuery && searchQuery.trim() !== "") {
    const ids = searchQuery
      .split(",")
      .map((s) => s.trim())
      .filter((s) => s !== "");

    if (searchType === "reference_id") {
      where.referenceId = { in: ids };
    } else if (searchType === "data_principal_id") {
      where.dataPrincipalId = { in: ids };
    }
  }

  // Handle Date Range
  if (startDate || endDate) {
    where.createdAt = {};
    if (startDate) where.createdAt.gte = new Date(startDate);
    if (endDate) where.createdAt.lte = new Date(endDate);
  }

  // Handle Business Process Filter
  if (businessProcessIds.length > 0) {
    where.businessProcess = {
      code: { in: businessProcessIds },
    };
  }

  // Handle Consent Status Filter
  if (status && status.length > 0) {
    const hasPending = status.includes("pending");

    if (hasPending) {
      where.OR = [
        { consentStatus: { in: status as string[] } },
        { consentStatus: null },
      ];
    } else {
      where.consentStatus = { in: status as string[] };
    }
  }

  const skip = (page - 1) * pageSize;

  // 2. Fetch Notices
  const [notices, total] = await prisma.$transaction([
    prisma.notice.findMany({
      where,
      include: {
        businessProcess: {
          include: {
            businessUnit: true,
          },
        },
      },
      orderBy: { createdAt: "desc" },
      skip,
      take: pageSize,
    }),
    prisma.notice.count({ where }),
  ]);

  // 3. Map to Table Rows
  const data: ConsentTableRow[] = notices.map((notice) => {
    return {
      publicId: notice.publicId,
      referenceId: notice.referenceId || "-",
      dataPrincipalId: notice.dataPrincipalId,
      requestId: notice.publicId,

      insertedAt: notice.createdAt,
      updatedAt: notice.updatedAt,
      expiresAt: notice.linkExpiresAt,
      status: notice.consentStatus || "pending",
      noticeStatus: notice.status,

      businessProcess: {
        name: notice.businessProcess.name,
        code: notice.businessProcess.code,
      },
      businessUnit: notice.businessProcess.businessUnit
        ? { name: notice.businessProcess.businessUnit.name }
        : null,
    };
  });

  return {
    data,
    total,
    totalPages: Math.ceil(total / pageSize),
  };
}

export async function getBusinessProcessOptions() {
  return await prisma.businessProcess.findMany({
    select: { name: true, code: true },
    distinct: ["code"],
  });
}

// --- ADDED MISSING EXPORT ---
export async function getNoticeStatusOptions() {
  const statuses = await prisma.notice.findMany({
    select: { status: true },
    distinct: ["status"],
  });

  return statuses.map((s) => s.status);
}
