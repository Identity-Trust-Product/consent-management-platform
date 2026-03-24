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
 * Consent Receipt Print Page
 * 
 * Dedicated page for viewing and printing consent receipts.
 * Opens in new window/tab with clean layout optimized for printing.
 * Requires access token for security validation.
 * 
 * Route: /cms/principal/receipt/[notice_id]/[access_token]
 * 
 * This page uses the same token validation as other notice pages to ensure
 * only authorized users can view receipts.
 */

import { generateConsentReceipt } from "@/lib/services/consent-receipt-service";
import { redirect } from "next/navigation";
import {
  ValidatedNoticePageProps,
  withNoticeTokenValidation,
} from "@/components/hoc/with-notice-token-validation";
import { ReceiptPageClient } from "@/components/consent-receipt/receipt-page-client";

async function ReceiptPageComponent({
  tokenPayload,
  searchParams,
}: ValidatedNoticePageProps & { searchParams: Promise<{ [key: string]: string | string[] | undefined }> }) {
  const { lang } = await searchParams;
  const targetLanguage = typeof lang === 'string' ? lang : undefined;

  // Generate receipt data using the validated notice's public ID from token
  // Uses targetLanguage if provided, otherwise notice's default language
  const receiptData = await generateConsentReceipt(tokenPayload.public_id, targetLanguage as any);

  // If failed or no data, redirect to invalid link page
  if (!receiptData) {
    redirect("/cms/invalid-link");
  }

  return (
    <ReceiptPageClient
      initialData={receiptData}
      noticeId={tokenPayload.public_id}
    />
  );
}

// Wrap with token validation HOC for security
export default withNoticeTokenValidation(ReceiptPageComponent);
