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
 * Local Storage Adapter
 *
 * Stores files in the public/cms/uploads directory for local development
 * and simple deployments. Files are organized by date (YYYY/MM/DD).
 */

import { existsSync } from "fs";
import fs from "fs/promises";
import path from "path";
import {
  FileMetadata,
  StorageAdapter,
  UploadParams,
  UploadResult,
} from "../storage-adapter.interface";

export interface LocalStorageConfig {
  uploadDir?: string; // Base upload directory (default: public/cms/uploads)
  baseUrl?: string; // Base URL for accessing files (default: /cms/uploads)
}

export class LocalStorageAdapter implements StorageAdapter {
  private uploadDir: string;
  private baseUrl: string;

  constructor(config?: LocalStorageConfig) {
    this.uploadDir =
      config?.uploadDir || path.join(process.cwd(), "public", "cms", "uploads");
    this.baseUrl = config?.baseUrl || "/cms/uploads";
  }

  /**
   * Generate a unique file key with date-based organization
   * Format: YYYY/MM/DD/timestamp-uuid-filename
   */
  private generateFileKey(fileName: string, folder?: string): string {
    const date = new Date();
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    const timestamp = Date.now();
    const uuid = crypto.randomUUID().split("-")[0]; // Short UUID

    // Sanitize filename: remove special chars, keep extension
    const sanitized = fileName.replace(/[^a-zA-Z0-9.-]/g, "_").slice(0, 100); // Limit length

    const datePath = `${year}/${month}/${day}`;
    const uniqueFileName = `${timestamp}-${uuid}-${sanitized}`;

    if (folder) {
      return `${folder}/${datePath}/${uniqueFileName}`;
    }

    return `${datePath}/${uniqueFileName}`;
  }

  /**
   * Ensure directory exists, create if not
   */
  private async ensureDirectory(dirPath: string): Promise<void> {
    try {
      await fs.mkdir(dirPath, { recursive: true });
    } catch (error) {
      console.error("Error creating directory:", error);
      throw new Error("Failed to create upload directory");
    }
  }

  async upload(params: UploadParams): Promise<UploadResult> {
    try {
      const fileKey = this.generateFileKey(params.fileName, params.folder);
      const fullPath = path.join(this.uploadDir, fileKey);
      const dirPath = path.dirname(fullPath);

      // Ensure directory exists
      await this.ensureDirectory(dirPath);

      // Write file
      await fs.writeFile(fullPath, params.file);

      // Generate URL
      const url = `${this.baseUrl}/${fileKey}`;

      return {
        fileKey,
        url,
        size: params.file.length,
        mimeType: params.mimeType,
      };
    } catch (error) {
      console.error("Local storage upload error:", error);
      throw new Error("Failed to upload file to local storage");
    }
  }

  async getUrl(fileKey: string, expiresIn?: number): Promise<string> {
    // Local storage URLs don't expire, just return the public path
    return `${this.baseUrl}/${fileKey}`;
  }

  async delete(fileKey: string): Promise<void> {
    try {
      const fullPath = path.join(this.uploadDir, fileKey);
      await fs.unlink(fullPath);
    } catch (error) {
      console.error("Local storage delete error:", error);
      // Don't throw if file doesn't exist
      if ((error as any).code !== "ENOENT") {
        throw new Error("Failed to delete file from local storage");
      }
    }
  }

  async exists(fileKey: string): Promise<boolean> {
    const fullPath = path.join(this.uploadDir, fileKey);
    return existsSync(fullPath);
  }

  async getMetadata(fileKey: string): Promise<FileMetadata> {
    try {
      const fullPath = path.join(this.uploadDir, fileKey);
      const stats = await fs.stat(fullPath);

      // Extract original filename from key (last part after last -)
      const fileName =
        fileKey.split("/").pop()?.split("-").slice(2).join("-") || fileKey;

      return {
        fileKey,
        fileName,
        size: stats.size,
        mimeType: "application/octet-stream", // Default, can't determine from local fs
        uploadedAt: stats.birthtime,
      };
    } catch (error) {
      console.error("Local storage metadata error:", error);
      throw new Error("Failed to get file metadata");
    }
  }
}
