"use client";

import { ConsentReceipt } from "@/components/consent-receipt/consent-receipt";
import { ConsentReceiptData } from "@/lib/types/consent-receipt";
import { LanguageCode, SUPPORTED_LANGUAGES } from "@/lib/constants/languages";
import { useState, useTransition } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { refreshReceipt } from "@/app/cms/principal/receipt/[notice_id]/[access_token]/actions";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";
import { PrintButton } from "./print-button";
import { CloseButton } from "./close-button";

interface ReceiptPageClientProps {
  initialData: ConsentReceiptData;
  noticeId: string;
}

export function ReceiptPageClient({
  initialData,
  noticeId,
}: ReceiptPageClientProps) {
  const [data, setData] = useState<ConsentReceiptData>(initialData);
  const [currentLanguage, setCurrentLanguage] = useState<LanguageCode>(
    (initialData.language as LanguageCode) || "en"
  );
  const [isPending, startTransition] = useTransition();

  const handleLanguageChange = (value: string) => {
    const newLang = value as LanguageCode;
    setCurrentLanguage(newLang);

    startTransition(async () => {
      const result = await refreshReceipt(noticeId, newLang);
      if (result.success && result.data) {
        setData(result.data);
      } else {
        toast.error("Failed to load translation");
        // Revert language selection if failed
        setCurrentLanguage(data.language as LanguageCode);
      }
    });
  };

  // Convert supported languages object to array for the select
  const languages = Object.entries(SUPPORTED_LANGUAGES).map(([code, info]) => ({
    code,
    name: info.name,
    nativeName: info.nativeName,
  }));

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-5xl mx-auto px-4">
        {/* Controls Header - Hidden on print */}
        <div className="no-print mb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div className="flex items-center gap-2">
            <Select
              value={currentLanguage}
              onValueChange={handleLanguageChange}
              disabled={isPending}
            >
              <SelectTrigger className="w-[180px] bg-white">
                <SelectValue placeholder="Select Language" />
              </SelectTrigger>
              <SelectContent>
                {languages.map((lang) => (
                  <SelectItem key={lang.code} value={lang.code}>
                    {lang.name} ({lang.nativeName})
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {isPending && <Loader2 className="h-4 w-4 animate-spin text-gray-500" />}
          </div>

          <div className="flex gap-4">
            <PrintButton />
            <CloseButton />
          </div>
        </div>

        {/* Receipt */}
        <div className="bg-white shadow-sm relative min-h-[600px]">
          {isPending && (
            <div className="absolute inset-0 bg-white/50 z-10 flex items-center justify-center backdrop-blur-[1px]">
              <Loader2 className="h-8 w-8 animate-spin text-primary" />
            </div>
          )}
          <ConsentReceipt data={data} />
        </div>
      </div>
    </div>
  );
}
