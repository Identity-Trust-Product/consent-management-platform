"use server";

import { generateConsentReceipt } from "@/lib/services/consent-receipt-service";
import { LanguageCode } from "@/lib/types/languages";

/**
 * Server action to refresh consent receipt with a new language
 */
export async function refreshReceipt(
  noticeId: string,
  languageCode: LanguageCode
) {
  try {
    const data = await generateConsentReceipt(noticeId, languageCode);
    if (!data) {
      return { success: false, error: "Failed to generate receipt" };
    }
    return { success: true, data };
  } catch (error) {
    console.error("Error refreshing receipt:", error);
    return { success: false, error: "Internal server error" };
  }
}
