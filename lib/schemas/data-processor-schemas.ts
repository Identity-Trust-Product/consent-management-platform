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
import {
  INDUSTRY_OPTIONS,
  OU_ID_CONFIG,
  VALIDATION_CONSTRAINTS,
} from "@/lib/constants/schemas";

// Data Processor Schema for create/edit
export const dataProcessorSchema = z.object({
  ouId: z
    .string()
    .min(VALIDATION_CONSTRAINTS.OU_ID.MIN_LENGTH, "OU ID is required")
    .max(VALIDATION_CONSTRAINTS.OU_ID.MAX_LENGTH, "OU ID must be less than 50 characters"),
  legalName: z
    .string()
    .min(VALIDATION_CONSTRAINTS.LEGAL_NAME.MIN_LENGTH, "Legal name should be at least 3 characters long")
    .max(VALIDATION_CONSTRAINTS.LEGAL_NAME.MAX_LENGTH, "Legal name must be less than 255 characters"),
  brandName: z
    .string()
    .min(VALIDATION_CONSTRAINTS.BRAND_NAME.MIN_LENGTH, "Brand name should be at least 3 characters long")
    .max(VALIDATION_CONSTRAINTS.BRAND_NAME.MAX_LENGTH, "Brand name must be less than 255 characters"),
  cin: z
    .string()
    .min(VALIDATION_CONSTRAINTS.CIN.MIN_LENGTH, "CIN is required")
    .max(VALIDATION_CONSTRAINTS.CIN.MAX_LENGTH, "CIN must be less than 21 characters"),
  industry: z.string().min(1, "Industry is required"),
  active: z.boolean(),
});

// Helper function to generate a random OU ID like "OU9HUttbeIL7"
export function generateRandomOuId(length: number = OU_ID_CONFIG.DEFAULT_LENGTH): string {
  const chars = OU_ID_CONFIG.ALLOWED_CHARS;
  let result = OU_ID_CONFIG.PREFIX;

  for (let i = 0; i < length - OU_ID_CONFIG.PREFIX.length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }

  return result;
}

// Re-export for backward compatibility
export const industryOptions = INDUSTRY_OPTIONS;

export type DataProcessorFormSchema = z.infer<typeof dataProcessorSchema>;
