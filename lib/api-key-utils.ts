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

import { randomBytes, createHash } from "crypto";
import { API_KEY_PREFIX, API_KEY_CONFIG } from "@/lib/constants/api";

export { API_KEY_PREFIX };

/**
 * Generate a secure random API key
 * @returns Object containing the full key and prefix for display
 */
export function generateApiKey(): { fullKey: string; prefix: string } {
  const prefix = API_KEY_PREFIX;

  // Generate random data and convert to base64
  // Remove non-alphanumeric characters for clean key format
  const randomPart = randomBytes(API_KEY_CONFIG.RANDOM_BYTES)
    .toString("base64")
    .replace(/[+/=]/g, "") // Remove special characters
    .slice(0, API_KEY_CONFIG.RANDOM_LENGTH); // Take first N characters

  const fullKey = `${prefix}${randomPart}`;

  return {
    fullKey,
    prefix: fullKey.slice(0, API_KEY_CONFIG.DISPLAY_PREFIX_LENGTH), // First N characters for display (e.g., "pk_AbCdE")
  };
}

/**
 * Hash an API key for secure storage using SHA-256
 * Since API keys are already cryptographically random (unlike passwords),
 * we can use a fast hash function instead of slow bcrypt.
 * This reduces authentication time from ~100ms to <1ms.
 * 
 * @param apiKey - The full API key to hash
 * @returns Hashed API key (hex string)
 */
export function hashApiKey(apiKey: string): string {
  return createHash("sha256").update(apiKey).digest("hex");
}

/**
 * Verify an API key against its hash using constant-time comparison
 * @param apiKey - The plain API key from request
 * @param hashedKey - The hashed API key from database
 * @returns True if the key matches
 */
export function verifyApiKey(
  apiKey: string,
  hashedKey: string
): boolean {
  const computedHash = hashApiKey(apiKey);

  // Use constant-time comparison to prevent timing attacks
  // Both strings should be hex (64 chars for SHA-256)
  if (computedHash.length !== hashedKey.length) {
    return false;
  }

  let result = 0;
  for (let i = 0; i < computedHash.length; i++) {
    result |= computedHash.charCodeAt(i) ^ hashedKey.charCodeAt(i);
  }

  return result === 0;
}

/**
 * Validate API key format
 * @param apiKey - The API key to validate
 * @returns True if format is valid (pk_...)
 */
export function isValidApiKeyFormat(apiKey: string): boolean {
  const pattern = /^pk_[a-zA-Z0-9]{32,}$/;
  return pattern.test(apiKey);
}

/**
 * Mask an API key for safe display
 * Shows only the prefix and last 4 characters
 * @param apiKey - The full API key
 * @returns Masked key (e.g., "pk_...xyz")
 */
export function maskApiKey(apiKey: string): string {
  if (apiKey.length < 16) return "***";

  const prefix = apiKey.slice(0, 8); // "pk_" + first 5 chars
  const suffix = apiKey.slice(-4); // Last 4 chars
  return `${prefix}...${suffix}`;
}
