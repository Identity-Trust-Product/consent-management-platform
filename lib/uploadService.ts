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

import axios from "axios";

export class UploadService {
  static async uploadDataToSignedUrl(
    signedUrl: string,
    data: any,
    metadata: any
  ) {
    try {
      const jsonString = JSON.stringify(data);

      // We must match the headers used to sign the URL
      const headers: any = {
        "Content-Type": "application/json",
      };

      // Attach metadata headers
      Object.keys(metadata).forEach((key) => {
        if (metadata[key]) {
          headers[`x-goog-meta-${key}`] = String(metadata[key]);
        }
      });

      await axios.put(signedUrl, jsonString, {
        headers: headers,
        maxBodyLength: Infinity,
        maxContentLength: Infinity,
      });

      return { status: "success" };
    } catch (error: any) {
      console.error(
        "Upload Failed",
        error.response ? error.response.data : error.message
      );
      throw new Error("Failed to upload data to cloud storage");
    }
  }
}
