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

import { DEFAULT_LANGUAGE, LanguageCode } from "@/lib/types/languages";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { createContext, useContext, useEffect, useState } from "react";

interface NoticeLanguageContextType {
  currentLanguage: LanguageCode;
  availableLanguages: LanguageCode[];
  setLanguage: (lang: LanguageCode) => void;
}

const NoticeLanguageContext = createContext<
  NoticeLanguageContextType | undefined
>(undefined);

interface NoticeLanguageProviderProps {
  children: React.ReactNode;
  availableLanguages: LanguageCode[];
  defaultLanguage?: LanguageCode;
}

export function NoticeLanguageProvider({
  children,
  availableLanguages,
  defaultLanguage = DEFAULT_LANGUAGE,
}: NoticeLanguageProviderProps) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  // Get language from URL or use default
  const urlLanguage = searchParams.get("language") as LanguageCode | null;
  const initialLanguage =
    urlLanguage && availableLanguages.includes(urlLanguage)
      ? urlLanguage
      : defaultLanguage;

  const [currentLanguage, setCurrentLanguage] =
    useState<LanguageCode>(initialLanguage);

  // Update URL when language changes
  const setLanguage = (lang: LanguageCode) => {
    if (availableLanguages.includes(lang)) {
      const params = new URLSearchParams(searchParams.toString());
      params.set("language", lang);
      router.push(`${pathname}?${params.toString()}`);
      setCurrentLanguage(lang);
    }
  };

  // Sync with URL changes
  useEffect(() => {
    if (urlLanguage && availableLanguages.includes(urlLanguage)) {
      setCurrentLanguage(urlLanguage);
    }
  }, [urlLanguage, availableLanguages]);

  return (
    <NoticeLanguageContext.Provider
      value={{ currentLanguage, availableLanguages, setLanguage }}
    >
      {children}
    </NoticeLanguageContext.Provider>
  );
}

export function useNoticeLanguage() {
  const context = useContext(NoticeLanguageContext);
  if (!context) {
    throw new Error(
      "useNoticeLanguage must be used within NoticeLanguageProvider"
    );
  }
  return context;
}
