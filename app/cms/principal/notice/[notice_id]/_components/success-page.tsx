"use client";
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

import { GrantNoticeIcon } from "@/components/icons/notice-icons";
import { Button } from "@/components/ui/button";
import { generateDprmLinkForNotice } from "@/actions/dprm";
import { toast } from "sonner";
import { getReceiptTranslation } from "@/lib/utils/consent-receipt-translations";

interface SuccessPageProps {
  title?: string;
  description?: string;
  dataPrincipalId?: string;
  noticePublicId?: string;
  accessToken?: string;
  forMinor?: boolean;
  metadata?: { key: string; value: string }[];
  lang?: string;
}

export function SuccessPage({
  title,
  description,
  dataPrincipalId,
  noticePublicId,
  accessToken,
  forMinor = false,
  metadata = [],
  lang = "en",
}: SuccessPageProps) {
  const t = getReceiptTranslation(lang);

  const displayTitle = title || t.successTitle;
  const displayDescription = description || t.successDesc;

  const handleManageConsents = async () => {
    if (!dataPrincipalId) {
      toast.error("Data principal ID not available");
      return;
    }

    try {
      const result = await generateDprmLinkForNotice({
        dataPrincipalId,
        forMinor,
        metadata,
      });

      if (result.success && result.url) {
        // Redirect to the DPRM link
        window.location.href = result.url;
      } else {
        toast.error(result.error || "Failed to generate DPRM link");
      }
    } catch (error) {
      console.error("Error generating DPRM link:", error);
      toast.error("Failed to generate DPRM link");
    }
  };

  const handleViewReceipt = () => {
    if (!noticePublicId) {
      toast.error("Notice ID not available");
      return;
    }
    if (!accessToken) {
      toast.error("Access token not available");
      return;
    }
    // Open receipt in new window with access token for validation
    const printUrl = `/cms/principal/receipt/${noticePublicId}/${accessToken}?lang=${lang}`;
    window.open(printUrl, "_blank", "width=1024,height=768");
  };

  return (
    <section className="flex flex-col items-center min-h-screen justify-center pb-24">
      <GrantNoticeIcon />
      <div className="max-w-[45rem] text-center -mt-12">
        <h1 className="text-xl font-bold">{displayTitle}</h1>
        <p className="text-lg pb-4">{displayDescription}</p>

        <div className="mt-6 flex items-center justify-center gap-4">
          {dataPrincipalId && (
            <Button onClick={handleManageConsents}>{t.manageConsentsBtn}</Button>
          )}
          {noticePublicId && (
            <Button variant="outline" onClick={handleViewReceipt}>
              {t.viewReceiptBtn}
            </Button>
          )}
        </div>
      </div>
    </section>
  );
}
