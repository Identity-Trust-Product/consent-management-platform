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

import { GetSignedUrlConfig, Storage } from "@google-cloud/storage";
import crypto from "crypto";
import { Config } from "./config";

const storage = new Storage();

export class StorageService {
  /**
   * Creates a signed URL for uploading the consent artifact.
   */
  static async createSignedUrlForUpload(data: any, metadata: any) {
    try {
      const objectName = this.buildObjectName(data);

      const contentType = data.content_type || "application/json";
      const bucketName = Config.get("GCS_BUCKET_NAME", "my-consent-bucket");
      const expiry = parseInt(Config.get("UPLOAD_URL_EXPIRY_TIME", "3600")); // 1 hour

      // Prepare Headers for GCS
      const extensionHeaders: Record<string, string> = {
        "content-type": contentType,
      };

      // Add custom metadata headers (x-goog-meta-*)
      Object.keys(metadata).forEach((key) => {
        if (metadata[key]) {
          extensionHeaders[`x-goog-meta-${key}`] = String(metadata[key]);
        }
      });

      const options: any = {
        version: "v4",
        action: "write",
        expires: Date.now() + expiry * 1000,
        contentType: contentType,
        extensionHeaders: extensionHeaders,
      };

      const [url] = await storage
        .bucket(bucketName)
        .file(objectName)
        .getSignedUrl(options);

      return {
        signed_url: url,
        object_name: objectName,
      };
    } catch (error: any) {
      console.error("Storage Service Error (Upload)", error);
      throw new Error(`Failed to generate upload URL: ${error.message}`);
    }
  }

  /**
   * NEW: Creates a signed URL for DOWNLOADING the consent artifact.
   */
  static async createSignedUrlForDownload(data: {
    business_process_code: string;
    reference_id: string;
    data_principal_id: string;
  }) {
    try {
      const objectName = this.buildObjectName(data);
      const bucketName = Config.get("GCS_BUCKET_NAME", "my-consent-bucket");
      const expiry = parseInt(Config.get("DOWNLOAD_URL_EXPIRY_TIME", "900")); // 15 minutes default

      const options: GetSignedUrlConfig = {
        version: "v4",
        action: "read",
        expires: Date.now() + expiry * 1000,
      };

      const [url] = await storage
        .bucket(bucketName)
        .file(objectName)
        .getSignedUrl(options);

      return url;
    } catch (error: any) {
      console.error("Storage Service Error (Download)", error);
      // We handle the 404 case specifically in the UI if needed, or throw generic here
      throw new Error(`Failed to generate download URL: ${error.message}`);
    }
  }

  /**
   * Helper to build the canonical object path
   */
  public static buildObjectName(data: any): string {
    return `meity/artifacts/${data.business_process_code}-${data.reference_id}-${data.data_principal_id}.json`;
  }
}
