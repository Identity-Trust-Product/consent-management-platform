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

import { WebhookEventType } from "@prisma/client";
import { ConsentsJSONHasher } from "../consentsJSONHasher";
import { NoticeUpdates } from "../noticeUpdates";
import { UploadConsentArtifacts } from "../uploadConsentArtifacts";
import { fetchConsentHistoryFromDB } from "./consents-service";
import { triggerWebhookEvent } from "./webhook-service";

export async function sendForArtifactCreation(
  dataPrincipalId: string,
  referenceId: string,
  businessProcessCode: string,
  operation: "created" | "updated" = "created"
) {
  const artifactPayload = await processAndLogConsentData(
    dataPrincipalId,
    referenceId,
    businessProcessCode
  );

  // Trigger CONSENT_ARTIFACTS_CREATED_OR_UPDATED webhook
  triggerWebhookEvent(WebhookEventType.CONSENT_ARTIFACTS_CREATED_OR_UPDATED, {
    data_principal_id: dataPrincipalId,
    reference_id: referenceId,
    business_process_code: businessProcessCode,
    artifact_payload: artifactPayload,
    updated_at: new Date().toISOString(),
    operation: operation,
  }).catch((webhookError) => {
    console.error(
      "Failed to trigger CONSENT_ARTIFACTS_CREATED_OR_UPDATED webhook:",
      webhookError
    );
  });
}

// Exported for on-demand generation (e.g. download fallback)
export async function generateArtifactPayload(
  dataPrincipalId: string,
  referenceId: string,
  businessProcessCode: string
) {
  try {
    // A. Get Data (using the service we built in Step 4)
    const consentData = await fetchConsentHistoryFromDB(
      dataPrincipalId,
      referenceId,
      businessProcessCode
    );

    // B. Hash Data (using the logic from Step 2)
    const hashResult =
      ConsentsJSONHasher.buildConsentRecordsWithHash(consentData);

    // C. Prepare Payload Metadata
    const messagePayload = {
      eid: `evt_${Date.now()}`,
      type: "grant", // Assumed context
      data_principal_id: dataPrincipalId,
      reference_id: referenceId,
      business_process_code: consentData.history[0]?.business_process_code,
      timestamp: new Date().toISOString(),
      consent_ids: [],
      performed_by: "self",
      notice_metadata: {},
    };

    // D. Enrich Data
    const finalMessage = NoticeUpdates.buildMessageBrokerEvent(
      consentData,
      hashResult.creator_data,
      messagePayload,
      {
        artifact_hash: hashResult.artifact_hash,
        db_hashes: {},
      }
    );

    return finalMessage;
  } catch (error) {
    console.error("Error generating artifact payload:", error);
    throw error;
  }
}

async function processAndLogConsentData(
  dataPrincipalId: string,
  referenceId: string,
  businessProcessCode: string
) {
  try {
    const finalMessage = await generateArtifactPayload(
      dataPrincipalId,
      referenceId,
      businessProcessCode
    );

    await UploadConsentArtifacts.handleEvent(finalMessage);
    return finalMessage;
  } catch (error) {
    console.error("Error in processing consent data:", error);
    throw error;
  }
}
