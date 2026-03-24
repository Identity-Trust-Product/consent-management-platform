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

import { Lightbulb } from "lucide-react";
import { useNoticeTranslation } from "@/hooks/use-notice-translation";

export function DpdpInfoBanner() {
  const { t } = useNoticeTranslation("dprm");

  return (
    <div className="bg-gray-100 rounded-xl p-5 flex items-start gap-4 w-full max-w-[1048px]">
      <Lightbulb className="w-6 h-6 text-yellow-500 flex-shrink-0 mt-0.5" />
      <div className="flex-1 space-y-2">
        <p
          className="text-sm font-semibold text-gray-900 leading-relaxed"
          dangerouslySetInnerHTML={{
            __html: t(
              "The {{dpdp_act}} is India's first-ever comprehensive data protection law",
              {
                dpdp_act: `<span class="font-bold">${t("DPDP Act, 2023")}</span>`,
              }
            ),
          }}
        />
        <a
          href="#"
          className="text-sm font-semibold text-gray-900 underline hover:text-blue-600 transition-colors inline-block"
        >
          {t("Read more about it here")}
        </a>
      </div>
    </div>
  );
}
