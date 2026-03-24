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

// Step 1: Basic Consent Purpose Schema
export const consentPurposeSchema = z.object({
  name: z
    .string()
    .min(3, "Name should be at least 3 characters long")
    .max(255, "Name must be less than 255 characters"),
  code: z
    .string()
    .min(1, "Code is required")
    .max(50, "Code must be less than 50 characters"),
  description: z
    .string()
    .min(8, "Description should be at least 8 characters long")
    .max(1000, "Description must be less than 1000 characters"),
});

// Step 2: Processing Purpose Schema
export const processingPurposeSchema = z.object({
  name: z.string(),
  description: z
    .string()
    .min(8, "Description should be at least 8 characters long")
    .max(2000),
  purposeOfProcessingId: z.number().min(1, "Purpose of processing is required"),
  userAttributeNames: z
    .array(z.string())
    .min(1, "At least one user attribute is required"),
});

// Step 3: Data Processor Mapping Schema
export const dataProcessorMappingSchema = z.object({
  dataProcessorId: z.string().min(1, "Data processor is required"),
  userAttributeNames: z
    .array(z.string())
    .min(1, "At least one user attribute is required"),
  processingPurposeId: z.number().min(1, "Processing purpose is required"),
});

// Helper function to generate a random code like "9HUttbeIL7"
export function generateRandomCode(length: number = 10): string {
  const chars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";

  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }

  return result;
}

export type ConsentPurposeFormSchema = z.infer<typeof consentPurposeSchema>;
export type ProcessingPurposeFormSchema = z.infer<
  typeof processingPurposeSchema
>;
export type DataProcessorMappingFormSchema = z.infer<
  typeof dataProcessorMappingSchema
>;
