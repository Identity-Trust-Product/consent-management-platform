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

/**
 * API Constants
 * All API-related constants including error codes and API key configuration
 */

/**
 * Standard API error codes
 */
export const API_ERROR_CODES = {
  UNAUTHORIZED: "UNAUTHORIZED",
  FORBIDDEN: "FORBIDDEN",
  NOT_FOUND: "NOT_FOUND",
  VALIDATION_ERROR: "VALIDATION_ERROR",
  INTERNAL_ERROR: "INTERNAL_ERROR",
  RATE_LIMIT_EXCEEDED: "RATE_LIMIT_EXCEEDED",
  INVALID_API_KEY: "INVALID_API_KEY",
  INACTIVE_API_KEY: "INACTIVE_API_KEY",
} as const;

export type ApiErrorCode = (typeof API_ERROR_CODES)[keyof typeof API_ERROR_CODES];

/**
 * API Key prefix configuration
 * Format: pk_{random}
 * - pk = "Privy Key"
 * - random = 48+ character random string
 */
export const API_KEY_PREFIX = "pk_";

/**
 * API Key configuration
 */
export const API_KEY_CONFIG = {
  PREFIX: API_KEY_PREFIX,
  RANDOM_BYTES: 32,
  RANDOM_LENGTH: 48,
  DISPLAY_PREFIX_LENGTH: 8,
} as const;
