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
import {
  findProcessingPurposesByPoPCodes,
  findConsentsForValidation,
} from "@/lib/queries/consent-queries";
import {
  groupConsentsByLatestRule,
  formatConsentsForValidation,
} from "@/lib/services/consents-service";
import {
  consentValidationSchema,
  type ConsentValidationData,
} from "@/lib/schemas/consent-validation-schemas";
import { NextRequest } from "next/server";

/**
 * Consent Validation API
 * POST /cms/api/v1/consents/validate
 *
 * Validates consents based on different identifier types and processing purposes.
 *
 * Headers:
 *   Authorization: Bearer <your-api-key>
 *
 * Request Body (Type 1 - data_principal_id):
 *   {
 *     "id": "user@example.com",
 *     "type": "data_principal_id",
 *     "processing_purpose_codes": ["PP001", "PP002"]  // REQUIRED
 *   }
 *
 * Request Body (Type 2 - reference_id):
 *   {
 *     "id": "txn_12345",
 *     "type": "reference_id",
 *     "processing_purpose_codes": ["PP001", "PP002"]  // REQUIRED
 *   }
 *
 * Request Body (Type 3 - consent_id):
 *   {
 *     "id": "consent_uuid_123",
 *     "type": "consent_id",
 *     "processing_purpose_codes": ["PP001"]  // OPTIONAL
 *   }
 *
 * Response (200 OK):
 *   {
 *     "success": true,
 *     "data": {
 *       "consents": [
 *         {
 *           "is_active": true,  // true for "accepted" consents, false for "revoked"
 *           "data_principal_id": "uuid",
 *           "processing_purpose_code": "marketing_and_promotions",
 *           "consent_id": "uuid",
 *           "status": "accepted",  // "accepted" or "revoked"
 *           "business_process_code": "BP001",
 *           "business_process_version": 1,
 *           "consent_purpose_code": "CP001",
 *           "consent_purpose_version": 2,
 *           "recorded_at": "2025-08-20T14:15:00Z"
 *         }
 *       ]
 *     }
 *   }
 *
 * Note: Returns the latest consent status for each unique business process rule.
 *       If a consent was granted, then revoked, then granted again, only the
 *       latest status will be returned.
 */
export async function POST(request: NextRequest) {
  try {
    // Parse request body
    const body = await request.json();

    // Validate request body
    let validatedData: ConsentValidationData;
    try {
      validatedData = consentValidationSchema.parse(body);
    } catch (error: any) {
      return ApiErrors.validationError(
        "Invalid request body",
        error.errors || error.message
      );
    }

    const { id, type, processing_purpose_codes } = validatedData;

    // Resolve processing purpose IDs if codes are provided
    let processingPurposeIds: string[] | undefined;
    if (processing_purpose_codes && processing_purpose_codes.length > 0) {
      processingPurposeIds = await findProcessingPurposesByPoPCodes(
        processing_purpose_codes
      );

      if (processingPurposeIds.length === 0) {
        // No matching processing purposes found
        return createSuccessResponse({
          consents: [],
        });
      }
    }

    // Build query options based on type
    const queryOptions: any = {
      processingPurposeIds,
      statuses: ["accepted", "revoked"],
    };

    // Add identifier-based filtering
    switch (type) {
      case "data_principal_id":
        queryOptions.dataPrincipalId = id;
        break;
      case "reference_id":
        queryOptions.referenceId = id;
        break;
      case "consent_id":
        queryOptions.consentId = id;
        break;
    }

    // Fetch consents using query function
    const consents = await findConsentsForValidation(queryOptions);

    // Group by latest rule and format response
    const latestConsentsByRule = groupConsentsByLatestRule(consents);
    const formattedConsents = formatConsentsForValidation(
      Array.from(latestConsentsByRule.values())
    );

    return createSuccessResponse({
      consents: formattedConsents,
    });
  } catch (error: any) {
    // Log unexpected errors
    console.error("Error validating consents via API:", error);

    // Return generic error
    return ApiErrors.internalError("Failed to validate consents");
  }
}
