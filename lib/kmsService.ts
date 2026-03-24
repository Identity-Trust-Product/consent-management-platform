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

import { Config } from './config';

export class KMSService {
  /**
   * Fetches the private key from kms service (or env vars) for encryption
   */
  static async getSecretKey() {
    try {
      // In production, this might call an external KMS API or Vault
      // For Node/Prisma apps, this usually lives in secure ENV vars
      const privateKey = Config.get('RSA_PRIVATE_KEY') || Config.mock.rsaPrivateKey;

      if (!privateKey) {
        throw new Error("RSA Private Key not found configuration");
      }

      return {
        private_key: privateKey,
        // Public key is often not needed for signing, strictly speaking, but included for parity
        public_key: Config.get('RSA_PUBLIC_KEY', '')
      };
    } catch (error: any) {
      console.error("KMS Error", error);
      throw new Error(`KMS Service failed: ${error.message}`);
    }
  }
}