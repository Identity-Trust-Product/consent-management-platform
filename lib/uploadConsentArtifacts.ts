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

import { KMSService } from "./kmsService";
import { StorageFactory } from "./services/storage/storage-factory";
import { Signatures } from "./signatureService";

export class UploadConsentArtifacts {
  /**
   * Orchestrates the signing and uploading process.
   * Matches: handle_event
   */
  static async handleEvent(message: any) {
    try {
      const {
        timeline_data_with_hashes,
        metadata,
        data_fiduciary_id,
        reference_id,
        data_principal_id,
        business_process_code,
        business_process_version,
      } = message;

      // 1. Get Private Key
      const keys = await KMSService.getSecretKey();
      const privateKey = keys.private_key;
      // 2. Build Signatures (Sign payload + hashes)
      const signatureResult = Signatures.buildFinalDataWithSignatures(
        timeline_data_with_hashes,
        metadata.artifact_hash,
        metadata.db_hashes, // This might be undefined/null, which is handled
        privateKey
      );

      const { final_data, artifact_signature, db_hash_signature } =
        signatureResult;

      // 3. Update Metadata for Storage Headers
      const updatedMetadata = this.buildMetadata(metadata, {
        artifact_signature,
        db_hash_signature,
      });

      // 4. Prepare Context for Object Naming
      const noticeContext = {
        data_fiduciary_id,
        reference_id,
        data_principal_id,
        business_process_code,
        business_process_version,
        content_type: "application/json",
      };
      const fileBuffer = Buffer.from(JSON.stringify(final_data));
      const storage = StorageFactory.getInstance();
      // Construct the file path manually (or import the helper if you prefer)
      const objectName = `meity/artifacts/${noticeContext.business_process_code}-${noticeContext.reference_id}-${noticeContext.data_principal_id}.json`;

      const uploadResult = await storage.upload({
        file: fileBuffer,
        fileName: objectName,
        mimeType: "application/json",
        // explicit 'folder' might be redundant if you included it in fileName,
        // but keeping it based on your specific StorageFactory implementation:
        folder: `artifacts`,
        doesNotRequireUniqueName: true,
      });

      return { status: "ok", result: "success" };
    } catch (error: any) {
      console.error(`[UploadConsentArtifacts] Error: ${error.message}`);
      throw error;
    }
  }

  private static buildMetadata(originalMetadata: any, signatures: any) {
    const newMeta: any = {
      notice_id: originalMetadata.notice_id,
      artifact_hash: originalMetadata.artifact_hash,
      artifact_signature: signatures.artifact_signature,
    };

    if (signatures.db_hash_signature) {
      // Note: GCS headers have size limits. If db_hashes is large, do not put it in headers.
      // Elixir code put "db_hashes" in metadata, careful with size.
      // newMeta.db_hashes = originalMetadata.db_hashes;
      newMeta.db_hash_signature = signatures.db_hash_signature;
    }

    return newMeta;
  }
}
