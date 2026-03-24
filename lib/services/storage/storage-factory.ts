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
 * Storage Factory
 * 
 * Central factory for creating storage adapter instances.
 * Automatically detects which provider to use based on environment variables.
 */

import { logger } from "@/lib/utils/logger";
import { StorageAdapter } from "./storage-adapter.interface";
import { LocalStorageAdapter } from "./adapters/local-storage.adapter";
import { GCSStorageAdapter } from "./adapters/gcs-storage.adapter";

export enum StorageProvider {
  LOCAL = "local",
  GCS = "gcs",
  S3 = "s3", // Reserved for future implementation
}

export class StorageFactory {
  private static instance: StorageAdapter | null = null;

  /**
   * Get singleton instance of storage adapter
   * Uses environment variables to determine which adapter to create
   */
  static getInstance(): StorageAdapter {
    if (!this.instance) {
      const provider = this.detectProvider();
      this.instance = this.createAdapter(provider);
    }
    return this.instance;
  }

  /**
   * Create a new storage adapter instance
   * @param provider Storage provider type
   * @returns Storage adapter instance
   */
  static createAdapter(provider?: StorageProvider): StorageAdapter {
    const selectedProvider = provider || this.detectProvider();

    logger.info("Storage adapter created", { provider: selectedProvider });

    switch (selectedProvider) {
      case StorageProvider.GCS:
        return this.createGCSAdapter();

      case StorageProvider.S3:
        throw new Error("S3 storage adapter not yet implemented");

      case StorageProvider.LOCAL:
      default:
        return this.createLocalAdapter();
    }
  }

  /**
   * Auto-detect storage provider based on environment variables
   * Priority: Explicit STORAGE_PROVIDER > GCS env vars > S3 env vars > Local (default)
   */
  private static detectProvider(): StorageProvider {
    // Check explicit provider setting
    const explicitProvider = process.env.STORAGE_PROVIDER?.toLowerCase();
    if (explicitProvider === "gcs") return StorageProvider.GCS;
    if (explicitProvider === "s3") return StorageProvider.S3;
    if (explicitProvider === "local") return StorageProvider.LOCAL;

    // Auto-detect based on available configuration
    if (this.hasGCSConfig()) {
      logger.info("GCS configuration detected");
      return StorageProvider.GCS;
    }

    if (this.hasS3Config()) {
      logger.info("S3 configuration detected (not yet implemented)");
      // return StorageProvider.S3; // Uncomment when S3 is implemented
    }

    // Default to local storage
    logger.info("No cloud storage configured, using local storage");
    return StorageProvider.LOCAL;
  }

  /**
   * Check if GCS configuration is available
   */
  private static hasGCSConfig(): boolean {
    return !!(
      process.env.GCS_PROJECT_ID &&
      process.env.GCS_BUCKET_NAME &&
      (process.env.GCS_KEYFILE_PATH || process.env.GCS_USE_APPLICATION_DEFAULT === "true")
    );
  }

  /**
   * Check if S3 configuration is available
   */
  private static hasS3Config(): boolean {
    return !!(
      process.env.AWS_REGION &&
      process.env.AWS_S3_BUCKET &&
      (process.env.AWS_ACCESS_KEY_ID || process.env.AWS_USE_IAM_ROLE === "true")
    );
  }

  /**
   * Create local storage adapter instance
   */
  private static createLocalAdapter(): LocalStorageAdapter {
    return new LocalStorageAdapter({
      uploadDir: process.env.LOCAL_STORAGE_PATH,
      baseUrl: process.env.LOCAL_STORAGE_BASE_URL || "/cms/uploads",
    });
  }

  /**
   * Create GCS storage adapter instance
   */
  private static createGCSAdapter(): GCSStorageAdapter {
    const projectId = process.env.GCS_PROJECT_ID;
    const bucketName = process.env.GCS_BUCKET_NAME;

    if (!projectId || !bucketName) {
      throw new Error("GCS_PROJECT_ID and GCS_BUCKET_NAME are required for GCS storage");
    }

    return new GCSStorageAdapter({
      projectId,
      bucketName,
      keyFilePath: process.env.GCS_KEYFILE_PATH,
      useApplicationDefault: process.env.GCS_USE_APPLICATION_DEFAULT === "true",
      urlExpiry: process.env.GCS_URL_EXPIRY
        ? parseInt(process.env.GCS_URL_EXPIRY, 10)
        : 3600,
    });
  }

  /**
   * Reset singleton instance (useful for testing)
   */
  static reset(): void {
    this.instance = null;
  }
}
