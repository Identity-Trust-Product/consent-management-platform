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

import { z } from "zod";

/**
 * Schema for consent validation request
 * 
 * Supports three validation types:
 * 1. data_principal_id - Validates consents for a specific data principal
 * 2. reference_id - Validates consents for a reference (e.g., transaction ID)
 * 3. consent_id - Validates a specific consent
 */

// Custom validation function for processing_purpose_codes based on type
const validateProcessingPurposeCodes = (
  data: {
    id: string;
    type: "data_principal_id" | "reference_id" | "consent_id";
    processing_purpose_codes?: string[] | null;
  }
) => {
  const { type, processing_purpose_codes } = data;

  // For consent_id: processing_purpose_codes are optional
  if (type === "consent_id") {
    return true;
  }

  // For data_principal_id or reference_id: processing_purpose_codes are REQUIRED
  if (type === "data_principal_id" || type === "reference_id") {
    // Must not be null or undefined
    if (processing_purpose_codes == null) {
      return false;
    }
    // Must not be empty array
    if (Array.isArray(processing_purpose_codes) && processing_purpose_codes.length === 0) {
      return false;
    }
  }

  return true;
};

// Schema for consent validation API
export const consentValidationSchema = z
  .object({
    id: z.string().min(1, "ID is required"),
    type: z.enum(["data_principal_id", "reference_id", "consent_id"]),
    processing_purpose_codes: z
      .array(z.string().min(1, "Processing purpose code cannot be empty"))
      .optional()
      .nullable(),
  })
  .refine(validateProcessingPurposeCodes, {
    message: "processing_purpose_codes is required and must not be empty when type is data_principal_id or reference_id",
    path: ["processing_purpose_codes"],
  });

export type ConsentValidationData = z.infer<typeof consentValidationSchema>;
