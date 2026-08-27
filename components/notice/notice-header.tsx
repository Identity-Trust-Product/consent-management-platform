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

import { FiduciaryLogo } from "@/components/fiduciary-logo";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { useHighContrast } from "@/contexts/high-contrast-context";
import { useNoticeLanguage } from "@/contexts/notice-language-context";
import { useIsMobile } from "@/hooks/use-mobile";
import { LanguageCode, SUPPORTED_LANGUAGES } from "@/lib/types/languages";
import { cn } from "@/lib/utils";
import { Contrast, Languages } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback, useEffect } from "react";
import { useNoticeTranslation } from "@/hooks/use-notice-translation";

interface NoticeHeaderProps {
  className?: string;
  speechReadoutButton?: React.ReactNode;
}

export function NoticeHeader({
  className,
  speechReadoutButton,
}: NoticeHeaderProps) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const isMobile = useIsMobile();
  const { isHighContrast, setIsHighContrast } = useHighContrast();
  const { currentLanguage, availableLanguages, setLanguage } =
    useNoticeLanguage();
  const { t } = useNoticeTranslation();

  const currentFontSize = searchParams.get("font_size") || "m";

  const updateQueryParam = useCallback(
    (key: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(key, value);
      router.push(`${pathname}?${params.toString()}`);
    },
    [searchParams, router, pathname],
  );

  const handleFontSizeChange = (value: string) => {
    if (value) {
      updateQueryParam("font_size", value);
    }
  };

  const handleLanguageChange = (value: string) => {
    setLanguage(value as LanguageCode);
  };

  const handleHighContrastToggle = () => {
    setIsHighContrast(!isHighContrast);
  };

  // Handle font size changes with zoom
  useEffect(() => {
    let zoomLevel;
    if (currentFontSize === "l") {
      zoomLevel = 1.15;
    } else if (currentFontSize === "s") {
      zoomLevel = 0.85;
    } else {
      zoomLevel = 1.0;
    }

    document.body.style.zoom = zoomLevel.toString();
  }, [currentFontSize]);

  return (
    <div
      className={cn(
        "flex items-center justify-between border-b border-blue-800 bg-gradient-to-r from-blue-950 via-blue-900 to-indigo-900 px-10 py-6 text-white",
        isHighContrast && "hc-bg-header hc-no-border",
        className,
      )}
    >
      {/* Logo */}
      <FiduciaryLogo
        isHighContrast={isHighContrast}
        className="text-white"
      />

      {/* Right side controls */}
      <div className="flex items-center gap-3">
        {/* Font size toggles - individual - hidden on mobile */}
        {!isMobile && (
          <>
            <div className="flex items-center">
              <ToggleGroup
                type="single"
                value={currentFontSize}
                onValueChange={handleFontSizeChange}
                className="gap-1"
              >
                <ToggleGroupItem
                  value="s"
                  aria-label="Descrease size"
                  size="sm"
                  className={cn(
                    "h-6.5 w-6 cursor-pointer rounded-md text-blue-100 hover:bg-white/10 hover:text-white data-[state=on]:text-white",
                    currentFontSize === "s" && "bg-white/20 text-white",
                    isHighContrast && "hc-text-white",
                  )}
                >
                  A⁻
                </ToggleGroupItem>
                <ToggleGroupItem
                  value="m"
                  aria-label="Default size"
                  className={cn(
                    "h-6.5 w-6 cursor-pointer rounded-md text-blue-100 hover:bg-white/10 hover:text-white data-[state=on]:text-white",
                    currentFontSize === "m" && "bg-white/20 text-white",
                    isHighContrast && "hc-text-white",
                  )}
                >
                  A
                </ToggleGroupItem>
                <ToggleGroupItem
                  value="l"
                  aria-label="Increase size"
                  className={cn(
                    "h-6.5 w-6 cursor-pointer rounded-md text-blue-100 hover:bg-white/10 hover:text-white data-[state=on]:text-white",
                    currentFontSize === "l" && "bg-white/20 text-white",
                    isHighContrast && "hc-text-white",
                  )}
                >
                  A⁺
                </ToggleGroupItem>
              </ToggleGroup>
            </div>

            {/* Separator */}
            <div
              className={cn(
                "h-6 w-px bg-white/30",
                isHighContrast && "hc-border-light-gray",
              )}
            />
          </>
        )}

        {/* High contrast toggle */}
        <button
          onClick={handleHighContrastToggle}
          className={cn(
            "flex items-center justify-center rounded-md cursor-pointer transition-colors",
            isHighContrast ? "text-yellow-500" : "text-blue-100",
            isHighContrast && "hc-text-gold",
          )}
          aria-label="Toggle high contrast mode"
        >
          <Contrast className="h-5 w-5" strokeWidth={2} />
        </button>

        {/* Separator */}
        <div
          className={cn(
            "h-6 w-px bg-white/30",
            isHighContrast && "hc-border-light-gray",
          )}
        />

        {/* Speech Readout Button */}
        {speechReadoutButton}

        {/* Separator */}
        <div
          className={cn(
            "h-6 w-px bg-white/30",
            isHighContrast && "hc-border-light-gray",
          )}
        />

        {/* Language dropdown */}
        <Select value={currentLanguage} onValueChange={handleLanguageChange}>
          <SelectTrigger
            className={cn(
              "flex cursor-pointer items-center gap-2 border-white/30 bg-white/10 text-white hover:bg-white/20",
              isMobile ? "w-auto px-2" : "w-40",
              isHighContrast &&
              "hc-language-dropdown hc-bg-black hc-text-white notice-language-dropdown",
            )}
            data-notice-language-dropdown="true"
          >
            <Languages
              className={cn(
                "h-6 w-6 text-white",
                isHighContrast && "hc-text-white",
              )}
            />
            {!isMobile && (
              <SelectValue
                placeholder={t("Select Language")}
                className={isHighContrast ? "hc-text-white" : ""}
              />
            )}
          </SelectTrigger>
          <SelectContent
            className={
              isHighContrast
                ? "hc-language-dropdown notice-language-dropdown-content"
                : ""
            }
            data-notice-language="true"
          >
            {availableLanguages.map((langCode) => {
              const languageInfo = SUPPORTED_LANGUAGES[langCode];
              return (
                <SelectItem
                  key={langCode}
                  value={langCode}
                  className={isHighContrast ? "hc-language-dropdown" : ""}
                >
                  {languageInfo?.nativeName ||
                    languageInfo?.name ||
                    langCode.toUpperCase()}
                </SelectItem>
              );
            })}
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}
