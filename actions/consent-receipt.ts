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
 * Consent Receipt Server Actions
 * 
 * Server actions for fetching and managing consent receipts.
 */

"use server";

import { generateConsentReceipt } from "@/lib/services/consent-receipt-service";
import { ConsentReceiptData } from "@/lib/types/consent-receipt";

interface ConsentReceiptResult {
  success: boolean;
  data?: ConsentReceiptData;
  error?: string;
}

/**
 * Fetch consent receipt by notice public ID
 * 
 * @param noticePublicId - The public ID of the notice
 * @returns ConsentReceiptResult with receipt data or error
 */
export async function getConsentReceipt(
  noticePublicId: string
): Promise<ConsentReceiptResult> {
  try {
    if (!noticePublicId) {
      return {
        success: false,
        error: "Notice ID is required",
      };
    }

    const receiptData = await generateConsentReceipt(noticePublicId);

    if (!receiptData) {
      return {
        success: false,
        error: "Unable to generate consent receipt. Please ensure the notice is completed.",
      };
    }

    return {
      success: true,
      data: receiptData,
    };
  } catch (error) {
    console.error("Error fetching consent receipt:", error);
    return {
      success: false,
      error: "An error occurred while generating the consent receipt",
    };
  }
}
