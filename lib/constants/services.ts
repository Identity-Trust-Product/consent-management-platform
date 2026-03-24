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
 * Service Constants
 * Configuration constants for various services
 */

/**
 * Event types for principal activity tracking
 */
export const ACTIVITY_EVENT_TYPES = {
  LOGIN: "login",
  LOGOUT: "logout",
} as const;

export type ActivityEventType =
  (typeof ACTIVITY_EVENT_TYPES)[keyof typeof ACTIVITY_EVENT_TYPES];

/**
 * Batch processing configuration for consent expiration
 */
export const CONSENT_BATCH_CONFIG = {
  BATCH_SIZE: 500, // Process 500 records at a time to avoid timeouts
  MAX_TOTAL_RECORDS: 10000, // Maximum records to process in one run
} as const;

/**
 * Activity log pagination defaults
 */
export const ACTIVITY_LOG_CONFIG = {
  DEFAULT_LIMIT: 50,
  MAX_LIMIT: 100,
} as const;

/**
 * DPDPA (Digital Personal Data Protection Act) rights text
 * Static rights that data principals have under the DPDPA
 */
export const DPDPA_RIGHTS = [
  "Right to Access – You can request details on what personal data is collected and how it is processed.",
  "Right to Correction and Erasure – You can request corrections to inaccurate data or deletion of your data under applicable conditions.",
  "Right to Grievance Redressal – You can file a complaint if you believe your data rights have been violated.",
  "Right to Nominate – You can designate a nominee to exercise your rights in case of incapacity or death.",
  "Right to Withdraw Consent – You may withdraw your consent at any time, subject to legal and contractual obligations.",
] as const;

/**
 * Environment variable keys for data fiduciary configuration
 */
export const ENV_KEYS = {
  DATA_FIDUCIARY_NAME: "DATA_FIDUCIARY_NAME",
  DATA_FIDUCIARY_LOGO_URL: "NEXT_PUBLIC_DATA_FIDUCIARY_LOGO_URL",
} as const;
