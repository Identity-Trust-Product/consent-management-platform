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
 * File Upload Validation Schemas and Configuration
 */

import { z } from "zod";

// File upload configuration
export const FILE_UPLOAD_CONFIG = {
  // Max file size in bytes (configurable via env)
  MAX_FILE_SIZE:
    parseInt(process.env.MAX_FILE_SIZE_MB || "5", 10) * 1024 * 1024, // Default: 5MB

  // Max number of files per message
  MAX_FILES_PER_MESSAGE: 5,

  // Allowed MIME types
  ALLOWED_MIME_TYPES: [
    // Images
    "image/jpeg",
    "image/jpg",
    "image/png",
    "image/gif",
    "image/webp",
    // Documents
    "application/pdf",
    "application/msword",
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document", // .docx
    "application/vnd.ms-excel",
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", // .xlsx
    // Text
    "text/plain",
    "text/csv",
  ] as const,

  // File name restrictions
  MAX_FILENAME_LENGTH: 255,
} as const;

// Helper to get file extension from MIME type
export const MIME_TYPE_EXTENSIONS: Record<string, string> = {
  "image/jpeg": ".jpg",
  "image/jpg": ".jpg",
  "image/png": ".png",
  "image/gif": ".gif",
  "image/webp": ".webp",
  "application/pdf": ".pdf",
  "application/msword": ".doc",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document":
    ".docx",
  "application/vnd.ms-excel": ".xls",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": ".xlsx",
  "text/plain": ".txt",
  "text/csv": ".csv",
};

// Zod schema for file validation
export const fileUploadSchema = z.object({
  fileName: z
    .string()
    .min(1, "File name is required")
    .max(FILE_UPLOAD_CONFIG.MAX_FILENAME_LENGTH, "File name too long")
    .refine(
      (name) => !/[<>:"|?*\\\/]/.test(name),
      "File name contains invalid characters"
    ),
  mimeType: z
    .string()
    .refine(
      (type) => FILE_UPLOAD_CONFIG.ALLOWED_MIME_TYPES.includes(type as any),
      "File type not allowed. Allowed types: images, PDFs, Word, Excel, text files"
    ),
  fileSize: z
    .number()
    .positive("File size must be positive")
    .max(
      FILE_UPLOAD_CONFIG.MAX_FILE_SIZE,
      `File too large. Maximum size is ${FILE_UPLOAD_CONFIG.MAX_FILE_SIZE / 1024 / 1024}MB`
    ),
});

// Type for validated file
export type ValidatedFile = z.infer<typeof fileUploadSchema>;

/**
 * Sanitize filename to prevent path traversal and other attacks
 */
export function sanitizeFileName(fileName: string): string {
  // Remove path separators and special characters
  let sanitized = fileName.replace(/[<>:"|?*\\\/]/g, "_");

  // Remove leading/trailing spaces and dots
  sanitized = sanitized.trim().replace(/^\.+/, "");

  // Limit length
  if (sanitized.length > FILE_UPLOAD_CONFIG.MAX_FILENAME_LENGTH) {
    const ext = sanitized.substring(sanitized.lastIndexOf("."));
    const name = sanitized.substring(
      0,
      FILE_UPLOAD_CONFIG.MAX_FILENAME_LENGTH - ext.length
    );
    sanitized = name + ext;
  }

  return sanitized || "unnamed";
}

/**
 * Format file size to human-readable string
 */
export function formatFileSize(bytes: number): string {
  if (bytes === 0) return "0 Bytes";

  const k = 1024;
  const sizes = ["Bytes", "KB", "MB", "GB"];
  const i = Math.floor(Math.log(bytes) / Math.log(k));

  return Math.round((bytes / Math.pow(k, i)) * 100) / 100 + " " + sizes[i];
}

/**
 * Get file icon based on MIME type
 */
export function getFileIcon(mimeType: string): string {
  if (mimeType.startsWith("image/")) return "📷";
  if (mimeType === "application/pdf") return "📄";
  if (
    mimeType === "application/msword" ||
    mimeType ===
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
  ) {
    return "📝";
  }
  if (
    mimeType === "application/vnd.ms-excel" ||
    mimeType ===
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
  ) {
    return "📊";
  }
  if (mimeType.startsWith("text/")) return "📃";
  return "📎";
}
