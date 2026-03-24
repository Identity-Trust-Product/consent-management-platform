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

import { DesktopNavbar } from "@/components/dprm/desktop-navbar";
import { MobileNavbar } from "@/components/dprm/mobile-navbar";
import { useDprmToken } from "@/hooks/use-dprm-token";
import { NoticeLanguageProvider } from "@/contexts/notice-language-context";
import { getAllLanguages, LANGUAGE_CODES } from "@/lib/types/languages";

interface LayoutClientProps {
  children: React.ReactNode;
}

export function LayoutClient({ children }: LayoutClientProps) {
  const isValidToken = useDprmToken();

  // If still checking token, show loading spinner
  if (isValidToken === null) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary-600"></div>
          <p className="text-sm text-gray-600">Loading DPRM...</p>
        </div>
      </div>
    );
  }

  // If token validation failed, show content without navbars and padding
  // if (isValidToken === false) {
  //   return (
  //     <div className="min-h-screen bg-gray-50 w-full overflow-x-hidden">
  //       <div className="w-full">{children}</div>
  //     </div>
  //   );
  // }

  // Get all supported languages for the DPRM portal (all 22 languages)
  // We use the language codes as the available languages
  const availableLanguages = Object.values(LANGUAGE_CODES);

  // Token is valid, show navbars and content with padding
  return (
    <NoticeLanguageProvider availableLanguages={availableLanguages}>
      <div className="min-h-screen bg-gray-50 w-full overflow-x-hidden">
        {/* Desktop Navigation - Hidden on mobile */}
        <div className="hidden lg:block fixed top-0 left-0 right-0 z-50">
          <DesktopNavbar />
        </div>

        {/* Mobile Navigation - Hidden on desktop */}
        <div className="block lg:hidden fixed top-0 left-0 right-0 z-50">
          <MobileNavbar />
        </div>

        {/* Main Content with padding to account for sticky navbars */}
        <div className="w-full pt-23 lg:pt-27">{children}</div>
      </div>
    </NoticeLanguageProvider>
  );
}
