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
 * Schema for creating a new API key
 * API keys are immutable - they cannot be updated, only created or deleted
 */
export const createApiKeySchema = z.object({
  name: z
    .string()
    .min(3, "Name must be at least 3 characters")
    .max(100, "Name must not exceed 100 characters")
    .regex(
      /^[a-zA-Z0-9\s\-_]+$/,
      "Name can only contain letters, numbers, spaces, hyphens, and underscores"
    ),
  description: z
    .string()
    .max(500, "Description must not exceed 500 characters")
    .optional()
    .nullable(),
});

export type CreateApiKeyData = z.infer<typeof createApiKeySchema>;

/**
 * Schema for toggling API key active status (enable/disable)
 */
export const toggleApiKeyStatusSchema = z.object({
  id: z.string().uuid("Invalid API key ID"),
  isActive: z.boolean(),
});

export type ToggleApiKeyStatusData = z.infer<typeof toggleApiKeyStatusSchema>;

/**
 * Schema for validating incoming API requests (middleware)
 */
export const apiKeyAuthSchema = z.object({
  apiKey: z
    .string()
    .min(40, "Invalid API key format")
    .regex(/^pk_[a-zA-Z0-9]{32,}$/, "Invalid API key format"),
});

export type ApiKeyAuthData = z.infer<typeof apiKeyAuthSchema>;

/**
 * Response type for API key (without sensitive data)
 */
export interface ApiKeyResponse {
  id: string;
  name: string;
  description: string | null;
  prefix: string;
  userId: string;
  isActive: boolean;
  lastUsedAt: Date | null;
  createdAt: Date;
  updatedAt: Date;
}

/**
 * Response type for newly created API key (includes full key ONCE)
 */
export interface CreatedApiKeyResponse extends ApiKeyResponse {
  fullKey: string; // Only returned once during creation
}
