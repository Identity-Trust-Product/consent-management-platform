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
 * Schema Constants
 * Constants used in validation schemas and form configurations
 */

/**
 * Industry options for data processors
 */
export const INDUSTRY_OPTIONS = [
  { value: "gaming", label: "Gaming" },
  { value: "banking", label: "Banking" },
  { value: "finance", label: "Finance" },
  { value: "healthcare", label: "Healthcare" },
  { value: "retail", label: "Retail" },
  { value: "technology", label: "Technology" },
  { value: "telecommunications", label: "Telecommunications" },
  { value: "education", label: "Education" },
  { value: "manufacturing", label: "Manufacturing" },
  { value: "other", label: "Other" },
] as const;

export type IndustryOption = (typeof INDUSTRY_OPTIONS)[number];

/**
 * Data processor OU ID configuration
 */
export const OU_ID_CONFIG = {
  PREFIX: "OU",
  DEFAULT_LENGTH: 12,
  ALLOWED_CHARS: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
} as const;

/**
 * Validation constraints
 */
export const VALIDATION_CONSTRAINTS = {
  OU_ID: {
    MIN_LENGTH: 1,
    MAX_LENGTH: 50,
  },
  LEGAL_NAME: {
    MIN_LENGTH: 3,
    MAX_LENGTH: 255,
  },
  BRAND_NAME: {
    MIN_LENGTH: 3,
    MAX_LENGTH: 255,
  },
  CIN: {
    MIN_LENGTH: 1,
    MAX_LENGTH: 21,
  },
} as const;
