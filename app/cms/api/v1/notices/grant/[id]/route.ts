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

import { getApiContext } from "@/lib/api-auth-middleware";
import { ApiErrors } from "@/lib/api-errors";
import { createSuccessResponse } from "@/lib/api-response";
import prisma from "@/lib/prisma";
import {
  generateNoticeLinkFromObject
} from "@/lib/services/notices-service";
import { NextRequest } from "next/server";

/**
 * Get Grant Notice API
 * GET /cms/api/v1/notices/grant/{notice_id}
 *
 * Headers:
 *   Authorization: Bearer <your-api-key>
 *
 * Response:
 *   {
 *     "business_process_code": string,
 *     "consent_status": string | null,
 *     "data_principal_id": string,
 *     "data_principal_submitted_data": object | null,
 *     "for_minor": boolean,
 *     "inserted_at": string,
 *     "notice_id": string,
 *     "notice_link": string,
 *     "reference_id": string,
 *     "status": string,
 *     "updated_at": string
 *   }
 */
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {

    const { id: noticeId } = await params;

    if (!noticeId) {
      return ApiErrors.validationError("Notice ID is required");
    }

    // Find notice by public ID
    const notice = await prisma.notice.findUnique({
      where: { publicId: noticeId },
      include: {
        businessProcess: {
          select: {
            name: true,
            code: true,
          },
        },
      },
    });

    if (!notice) {
      return ApiErrors.notFound(`Notice with ID '${noticeId}' not found`);
    }

    // Generate notice link
    const noticeLink = await generateNoticeLinkFromObject(notice, false);

    // Format response to match OpenAPI spec
    const response = {
      business_process_code: notice.businessProcess.code,
      consent_status: notice.consentStatus,
      data_principal_id: notice.dataPrincipalId,
      data_principal_submitted_data: notice.dataPrincipalSubmittedData,
      for_minor: notice.forMinor,
      inserted_at: notice.createdAt.toISOString(),
      notice_id: notice.publicId,
      notice_link: noticeLink,
      reference_id: notice.referenceId,
      status: notice.status,
      updated_at: notice.updatedAt.toISOString(),
    };

    return createSuccessResponse(response);
  } catch (error: any) {
    // Log unexpected errors
    console.error("Error fetching grant notice via API:", error);

    // Return generic error
    return ApiErrors.internalError("Failed to fetch grant notice");
  }
}
