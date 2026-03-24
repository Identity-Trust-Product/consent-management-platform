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

// src/lib/config.ts
import "server-only"; // 1. Prevents client-side usage

export const Config = {
  /**
   * Gets an environment variable or returns the default.
   */
  get: (key: string, defaultValue?: any) => {
    return process.env[key.toUpperCase()] || defaultValue;
  },

  /**
   * Gets an environment variable or throws if missing.
   * Useful for critical keys like Private Keys.
   */
  getOrThrow: (key: string) => {
    const val = process.env[key.toUpperCase()];
    if (!val) {
      throw new Error(
        `[Configuration] Missing required environment variable: ${key}`
      );
    }
    return val;
  },

  // 2. Environment Variables Mapping (Cleaner access)
  env: {
    universe: process.env.UNIVERSE || "dev",
    gcpGsaSigner: process.env.GCP_GSA_SIGNER,
    rsaPrivateKey: process.env.RSA_PRIVATE_KEY,
    rsaPublicKey: process.env.RSA_PUBLIC_KEY,
    consentArtifactBucket:
      process.env.GCS_BUCKET_NAME || "my-consent-bucket",
    uploadUrlExpiry: parseInt(process.env.UPLOAD_URL_EXPIRY_TIME || "3600", 10),
  },

  // 3. Mock Data (Only for local dev if env vars are missing)
  mock: {
    rsaPrivateKey: `-----BEGIN PRIVATE KEY-----\nMOCK_KEY_FOR_DEV...\n-----END PRIVATE KEY-----`,
  },
};
