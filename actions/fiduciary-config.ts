"use server";
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
 * Server action to get fiduciary branding configuration at runtime.
 * This allows runtime configuration of logo and name without rebuilding.
 */
export async function getFiduciaryConfig() {
  return {
    logoUrl: process.env.DATA_FIDUCIARY_LOGO_URL || process.env.NEXT_PUBLIC_DATA_FIDUCIARY_LOGO_URL || null,
    fiduciaryName: process.env.DATA_FIDUCIARY_NAME || process.env.NEXT_PUBLIC_DATA_FIDUCIARY_NAME || null,
  };
}
