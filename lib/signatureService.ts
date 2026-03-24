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

import crypto from "crypto";

export class Signatures {
  /**
   * Signs the hashes and attaches signatures to the data object
   */
  static buildFinalDataWithSignatures(
    dataPayload: any, // The JSON payload from the previous step
    artifactHash: string,
    dbHashes: any | null,
    privateKey: string
  ) {
    try {
      // 1. Sign the Artifact Hash
      const artifactSignature = this.signData(artifactHash, privateKey);

      // 2. Sign DB Hashes (if they exist)
      let dbHashSignature = null;
      if (dbHashes) {
        const dbHashesString = JSON.stringify(dbHashes);
        dbHashSignature = this.signData(dbHashesString, privateKey);
      }

      // 3. Append Signatures to the Payload (Creating "Final Data")
      // We clone the data to avoid mutation
      const finalData = JSON.parse(JSON.stringify(dataPayload));

      // In the Elixir XML logic, it appended <artifact_signature> tags.
      // In JSON, we add them to the root or metadata section.
      // We will add them to the root to match the logic of "modifying the doc".
      finalData.artifact_signature = artifactSignature;
      finalData.signature_generation_timestamp = new Date().toISOString();

      if (dbHashSignature) {
        finalData.db_hash_signature = dbHashSignature;
      }

      return {
        final_data: finalData,
        artifact_signature: artifactSignature,
        db_hash_signature: dbHashSignature,
      };
    } catch (error) {
      console.error("Signature Generation Failed", error);
      throw error;
    }
  }

  private static signData(data: string, privateKey: string): string {
    const strData = Buffer.from(JSON.stringify(data));

    const sign = crypto.sign("SHA256", strData, privateKey);

    // Convert returned buffer to base64
    return sign.toString("base64");
  }
}
