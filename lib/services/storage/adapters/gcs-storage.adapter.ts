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
 * Google Cloud Storage (GCS) Adapter
 *
 * Stores files in Google Cloud Storage bucket with signed URL support.
 * Requires @google-cloud/storage package.
 */

import { logger } from "@/lib/utils/logger";
import {
  FileMetadata,
  StorageAdapter,
  UploadParams,
  UploadResult,
} from "../storage-adapter.interface";

export interface GCSStorageConfig {
  projectId: string;
  bucketName: string;
  keyFilePath?: string; // Path to service account key file
  useApplicationDefault?: boolean; // Use application default credentials
  urlExpiry?: number; // Default URL expiry in seconds (default: 3600)
}

export class GCSStorageAdapter implements StorageAdapter {
  private storage: any;
  private bucket: any;
  private config: GCSStorageConfig;

  constructor(config: GCSStorageConfig) {
    this.config = {
      urlExpiry: 3600, // 1 hour default
      ...config,
    };

    // Lazy load GCS - will throw if not installed when actually used
    this.initializeStorage();
  }

  private async initializeStorage() {
    try {
      // Dynamic import to avoid build-time errors
      const { Storage } = await import("@google-cloud/storage");

      const storageOptions: any = {
        projectId: this.config.projectId,
      };

      if (this.config.keyFilePath) {
        storageOptions.keyFilename = this.config.keyFilePath;
      }

      this.storage = new Storage(storageOptions);
      this.bucket = this.storage.bucket(this.config.bucketName);
    } catch (error) {
      throw new Error(
        "@google-cloud/storage is not installed. Run: pnpm add @google-cloud/storage"
      );
    }
  }

  private async ensureInitialized() {
    if (!this.storage) {
      await this.initializeStorage();
    }
  }

  /**
   * Generate a unique file key with folder organization
   * Format: folder/timestamp-uuid-filename (if folder provided)
   * Format: timestamp-uuid-filename (if no folder)
   */
  private generateFileKey(fileName: string, folder?: string): string {
    const timestamp = Date.now();
    const uuid = crypto.randomUUID().split("-")[0]; // Short UUID

    // Sanitize filename
    const sanitized = fileName.replace(/[^a-zA-Z0-9.-]/g, "_").slice(0, 100);

    const uniqueFileName = `${timestamp}-${uuid}-${sanitized}`;

    if (folder) {
      return `${folder}/${uniqueFileName}`;
    }

    return uniqueFileName;
  }

  async upload(params: UploadParams): Promise<UploadResult> {
    try {
      logger.info("GCS Adapter: Upload started", {
        fileName: params.fileName,
        folder: params.folder,
        bufferLength: params.file?.length,
      });

      if (!params.file || params.file.length === 0) {
        logger.error("GCS Adapter: No file buffer provided or buffer is empty");
        throw new Error("No file buffer provided");
      }

      await this.ensureInitialized();
      logger.debug("GCS Adapter: Storage initialized successfully");

      let fileKey;
      if (params.doesNotRequireUniqueName) {
        fileKey = params.fileName;
      } else {
        fileKey = this.generateFileKey(params.fileName, params.folder);
      }

      logger.debug("GCS Adapter: Generated fileKey", { fileKey });

      const file = this.bucket.file(fileKey);

      // Upload with metadata
      logger.debug("GCS Adapter: Starting file.save()");
      await file.save(params.file, {
        metadata: {
          contentType: params.mimeType,
          metadata: {
            originalName: params.fileName,
          },
        },
      });
      logger.debug("GCS Adapter: File saved successfully");

      // Generate signed URL
      logger.debug("GCS Adapter: Generating signed URL");
      const [url] = await file.getSignedUrl({
        action: "read",
        expires: Date.now() + this.config.urlExpiry! * 1000,
      });
      logger.debug("GCS Adapter: Signed URL generated successfully");

      const result = {
        fileKey,
        url,
        size: params.file.length,
        mimeType: params.mimeType,
      };

      logger.info("GCS Adapter: Upload completed successfully", {
        fileKey,
        size: result.size,
      });
      return result;
    } catch (error: any) {
      logger.error("GCS Adapter: Upload error", {
        message: error?.message,
        code: error?.code,
        errors: error?.errors,
        stack: error?.stack,
      });
      throw new Error(
        `Failed to upload file to Google Cloud Storage: ${error?.message || "Unknown error"}`
      );
    }
  }

  /**
   * Specific method to generate signed download URLs for Consent Artifacts.
   * Reconstructs the filename based on business keys.
   */
  async createSignedUrlForDownload(
    data: {
      business_process_code: string;
      reference_id: string;
      data_principal_id: string;
    },
    expiresIn: number = 900 // Default 15 minutes
  ): Promise<string> {
    try {
      // 1. Ensure GCS is loaded and bucket is ready
      await this.ensureInitialized();

      // 2. Reconstruct the specific object path
      // Format: meity/artifacts/{bp_code}-{ref_id}-{dp_id}.json
      const objectName = `meity/artifacts/${data.business_process_code}-${data.reference_id}-${data.data_principal_id}.json`;

      logger.debug("GCS Adapter: Generating download URL for", { objectName });

      const file = this.bucket.file(objectName);

      // 3. Generate Signed URL
      // version: 'v4' provides better security and longer expiration limits if needed
      const [url] = await file.getSignedUrl({
        version: "v4",
        action: "read",
        expires: Date.now() + expiresIn * 1000,
      });

      return url;
    } catch (error: any) {
      logger.error("GCS Adapter: createSignedUrlForDownload error", {
        message: error.message,
        data,
      });
      throw new Error(`Failed to generate download URL: ${error.message}`);
    }
  }

  async getUrl(fileKey: string, expiresIn?: number): Promise<string> {
    try {
      await this.ensureInitialized();

      const file = this.bucket.file(fileKey);
      const expires = Date.now() + (expiresIn || this.config.urlExpiry!) * 1000;

      const [url] = await file.getSignedUrl({
        action: "read",
        expires,
      });

      return url;
    } catch (error) {
      logger.error("GCS Adapter: getUrl error", { error });
      throw new Error("Failed to generate signed URL");
    }
  }

  async delete(fileKey: string): Promise<void> {
    try {
      await this.ensureInitialized();

      const file = this.bucket.file(fileKey);
      await file.delete();
    } catch (error) {
      logger.error("GCS Adapter: delete error", { error });
      // Don't throw if file doesn't exist
      if ((error as any).code !== 404) {
        throw new Error("Failed to delete file from Google Cloud Storage");
      }
    }
  }

  async exists(fileKey: string): Promise<boolean> {
    try {
      await this.ensureInitialized();

      const file = this.bucket.file(fileKey);
      const [exists] = await file.exists();
      return exists;
    } catch (error) {
      logger.error("GCS Adapter: exists error", { error });
      return false;
    }
  }

  async getMetadata(fileKey: string): Promise<FileMetadata> {
    try {
      await this.ensureInitialized();

      const file = this.bucket.file(fileKey);
      const [metadata] = await file.getMetadata();

      // Extract original filename from metadata or key
      const fileName =
        metadata.metadata?.originalName ||
        fileKey.split("/").pop()?.split("-").slice(2).join("-") ||
        fileKey;

      return {
        fileKey,
        fileName,
        size: parseInt(metadata.size, 10),
        mimeType: metadata.contentType || "application/octet-stream",
        uploadedAt: new Date(metadata.timeCreated),
      };
    } catch (error) {
      logger.error("GCS Adapter: getMetadata error", { error });
      throw new Error("Failed to get file metadata from Google Cloud Storage");
    }
  }
}
