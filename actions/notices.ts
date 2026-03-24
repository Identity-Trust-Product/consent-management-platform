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

import { Actions, Resources } from "@/lib/constants/rbac";
import prisma from "@/lib/prisma";
import { createSafeAction } from "@/lib/safe-action";
import { createNoticeSchema } from "@/lib/schemas/notice-schemas";
import {
  deleteNotice as deleteNoticeService,
  generateNoticeLink as generateNoticeLinkService,
  getAllNotices as getAllNoticesService,
  getNoticeById as getNoticeByIdService,
  getNoticeByPublicId as getNoticeByPublicIdService,
} from "@/lib/services/notices-service";
import { triggerWebhookEvent } from "@/lib/services/webhook-service";
import { WebhookEventType } from "@prisma/client";
import { revalidatePath } from "next/cache";
import { z } from "zod";

// Helper function to convert duration to hours
function convertToHours(
  duration: number,
  type: "hours" | "days" | "weeks" | "months"
): number {
  switch (type) {
    case "hours":
      return duration;
    case "days":
      return duration * 24;
    case "weeks":
      return duration * 24 * 7;
    case "months":
      return duration * 24 * 30; // Approximate 30 days per month
    default:
      return duration;
  }
}

// Helper function to calculate expiry date
function calculateExpiryDate(
  duration: number,
  type: "hours" | "days" | "weeks" | "months"
): Date {
  const now = new Date();
  const hoursToAdd = convertToHours(duration, type);
  return new Date(now.getTime() + hoursToAdd * 60 * 60 * 1000);
}

// Read operations - No RBAC wrapper needed (handled at page level)
export async function getNotices() {
  try {
    return await getAllNoticesService();
  } catch (error) {
    console.error("Error in getNotices action:", error);
    return [];
  }
}

export async function getNoticeById(id: number) {
  try {
    return await getNoticeByIdService(id);
  } catch (error) {
    console.error("Error in getNoticeById action:", error);
    return null;
  }
}

export async function getNoticeByPublicId(publicId: string) {
  try {
    return await getNoticeByPublicIdService(publicId);
  } catch (error) {
    console.error("Error in getNoticeByPublicId action:", error);
    return null;
  }
}

const deleteNoticeSchema = z.object({
  id: z.number(),
});

export const deleteNotice = createSafeAction(
  { resource: Resources.NOTICE, action: Actions.DELETE },
  deleteNoticeSchema,
  async (input, user) => {
    await deleteNoticeService(input.id);
    revalidatePath("/cms/data-fiduciary/notices");
    return true;
  }
);

export async function generateNoticeLink(noticeId: number) {
  try {
    // TODO: Add RBAC check here
    const noticeUrl = await generateNoticeLinkService(noticeId);
    return { success: true, url: noticeUrl };
  } catch (error) {
    console.error("Error in generateNoticeLink action:", error);
    return { success: false, error: "Failed to generate notice link" };
  }
}

export const createNotice = createSafeAction(
  { resource: Resources.NOTICE, action: Actions.CREATE },
  createNoticeSchema,
  async (data, user) => {
    // Calculate link expiry date
    const linkExpiresAt = calculateExpiryDate(
      data.noticeDuration,
      data.noticeDurationType
    );

    // Calculate consent duration in hours if provided
    const consentDurationInHours =
      data.consentDuration && data.consentDurationType
        ? convertToHours(data.consentDuration, data.consentDurationType)
        : null;

    // Prepare notice config
    const noticeConfig = {
      viewMode: data.noticeViewMode,
      attributesDefaultSelection: data.attributesDefaultSelection,
    };

    // Create the notice with metadata
    const notice = await prisma.notice.create({
      data: {
        referenceId: data.referenceId,
        dataPrincipalId: data.dataPrincipalId,
        businessProcessId: data.businessProcessId,
        linkExpiresAt,
        consentDuration: consentDurationInHours,
        noticeConfig,
        redirectionUrl: data.redirectionEndpoint || null,
        defaultLanguage: "en",
        creationMethod: "ui",
        createdByUserId: user.id,
        markCompletedTimestamp: null,
        forMinor: data.forMinor || false,
        metadata: data.metadata?.length
          ? {
            create: data.metadata.map((item) => ({
              key: item.key,
              value: item.value,
            })),
          }
          : undefined,
      },
      include: {
        businessProcess: {
          select: {
            name: true,
            code: true,
            version: true,
          },
        },
      },
    });

    // Trigger NOTICE_CREATED webhook
    try {
      triggerWebhookEvent(WebhookEventType.NOTICE_CREATED, {
        notice_id: notice.publicId,
        data_principal_id: notice.dataPrincipalId,
        reference_id: notice.referenceId,
        business_process_code: notice.businessProcess.code,
        business_process_name: notice.businessProcess.name,
        business_process_version: notice.businessProcess.version,
        status: notice.status,
        resource_type: "grant_notice",
        inserted_at: notice.createdAt.toISOString(),
        updated_at: notice.updatedAt.toISOString(),
        link_expires_at: notice.linkExpiresAt.toISOString(),
      });
    } catch (webhookError) {
      console.error("Failed to trigger NOTICE_CREATED webhook:", webhookError);
      // Don't fail the notice creation if webhook fails
    }

    revalidatePath("/cms/data-fiduciary/notices");
    return notice;
  }
);
