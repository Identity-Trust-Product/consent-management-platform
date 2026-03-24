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
 * Storage Adapter Interface
 *
 * Defines the contract for all storage providers (Local, GCS, S3, etc.)
 * to ensure consistent behavior across different storage backends.
 */

export interface UploadParams {
  file: Buffer;
  fileName: string;
  mimeType: string;
  doesNotRequireUniqueName?: boolean; // Default: true
  folder?: string; // Optional folder path (e.g., "grievances/123")
}

export interface UploadResult {
  fileKey: string; // Unique identifier/path in storage
  url: string; // Public or signed URL for accessing the file
  size: number; // File size in bytes
  mimeType: string; // MIME type
}

export interface FileMetadata {
  fileKey: string;
  fileName: string;
  size: number;
  mimeType: string;
  uploadedAt: Date;
}

/**
 * Base interface that all storage adapters must implement
 */
export interface StorageAdapter {
  /**
   * Upload a file to storage
   * @param params Upload parameters including file buffer and metadata
   * @returns Upload result with file location and access URL
   */
  upload(params: UploadParams): Promise<UploadResult>;

  /**
   * Generate a URL for accessing a file
   * @param fileKey Unique file identifier
   * @param expiresIn Optional expiry time in seconds (for signed URLs)
   * @returns URL for accessing the file
   */
  getUrl(fileKey: string, expiresIn?: number): Promise<string>;

  /**
   * Delete a file from storage
   * @param fileKey Unique file identifier
   */
  delete(fileKey: string): Promise<void>;

  /**
   * Check if a file exists in storage
   * @param fileKey Unique file identifier
   * @returns True if file exists, false otherwise
   */
  exists(fileKey: string): Promise<boolean>;

  /**
   * Get metadata for a file
   * @param fileKey Unique file identifier
   * @returns File metadata
   */
  getMetadata(fileKey: string): Promise<FileMetadata>;
}
