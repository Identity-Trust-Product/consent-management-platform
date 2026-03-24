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
 * Constants Index
 * Central export point for all application constants
 *
 * Usage:
 * ```ts
 * // Import specific constants
 * import { API_ERROR_CODES, SUPPORTED_LANGUAGES } from '@/lib/constants';
 *
 * // Or import from specific files
 * import { API_ERROR_CODES } from '@/lib/constants/api';
 * ```
 */

// API Constants
export * from "./api";

// RBAC Constants
export * from "./rbac";

// UI Constants
export * from "./ui";

// Language Constants
export * from "./languages";

// Route Constants
export * from "./routes";

// Service Constants
export * from "./services";

// Schema Constants
export * from "./schemas";

// Notice Metadata Constants
export * from "./notice-metadata";
