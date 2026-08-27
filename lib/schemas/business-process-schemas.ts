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

// Step 1: Basic Business Process Schema
export const businessProcessSchema = z.object({
  name: z
    .string()
    .min(3, "Name should be at least 3 characters long")
    .max(255, "Name must be less than 255 characters"),
  code: z
    .string()
    .min(1, "Code is required")
    .max(50, "Code must be less than 50 characters"),
  businessUnitId: z.number().min(1, "Department is required"),
  grantDescription: z
    .string()
    .min(8, "Grant description should be at least 8 characters long")
    .max(1000, "Grant description must be less than 1000 characters"),
  revokeDescription: z.string().optional(),
  reconsentDescription: z.string().optional(),
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

export type BusinessProcessFormSchema = z.infer<typeof businessProcessSchema>;
