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
 * Route Constants
 * Application route paths and prefixes
 */

/**
 * Public routes accessible without authentication
 */
export const PUBLIC_ROUTES = [
  "/cms/signup",
  "/cms/login",
  "/cms/link-expired",
  "/cms/invalid-link",
] as const;

/**
 * Authentication routes (redirect away if already logged in)
 */
export const AUTH_ROUTES = ["/cms/signup", "/cms/login"] as const;

/**
 * API route prefixes
 */
export const API_PREFIXES = {
  AUTH: "/cms/api/auth",
  V1: "/cms/api/v1",
} as const;

/**
 * Route prefixes for different user types
 */
export const ROUTE_PREFIXES = {
  PRINCIPAL: "/cms/principal",
  DATA_FIDUCIARY: "/cms/data-fiduciary",
  ADMIN: "/cms/admin",
} as const;

/**
 * Default redirect after login
 */
export const DEFAULT_LOGIN_REDIRECT = "/cms/data-fiduciary/dashboard";

/**
 * Health check endpoint
 */
export const HEALTH_CHECK_ENDPOINT = "/_health";
