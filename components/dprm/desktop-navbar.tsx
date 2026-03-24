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

import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Languages, Bell, User, ChevronDown, Baby } from "lucide-react";
import {
  useSearchParams,
  useRouter,
  usePathname,
  useParams,
} from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { FiduciaryLogo } from "@/components/fiduciary-logo";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import AnimatedBellIcon from "@/app/cms/principal/dprm/[access_token]/_components/bell-icon";
import { getMinorsForMajor } from "@/actions/dprm";
import { Skeleton } from "@/components/ui/skeleton";
import { createDprmLink } from "@/lib/dprm-utils";
import { useNoticeLanguage } from "@/contexts/notice-language-context";
import { getLanguageName } from "@/lib/types/languages";
import { useNoticeTranslation } from "@/hooks/use-notice-translation";
import { localizeDigits } from "@/lib/utils/digit-localization";

export function DesktopNavbar() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();
  const homeUrl = pathname.split("/").slice(0, 5).join("/");

  const currentFontSize = searchParams.get("font_size") || "m";
  // Use context for language
  const { currentLanguage, setLanguage, availableLanguages } =
    useNoticeLanguage();
  const { t } = useNoticeTranslation("dprm");
  const { t: tCommon } = useNoticeTranslation("common");

  const currentMinorId = searchParams.get("minor_data_principal_id");

  const [minors, setMinors] = useState<string[]>([]);
  const [isLoadingMinors, setIsLoadingMinors] = useState(false);
  const [hasLoadedMinors, setHasLoadedMinors] = useState(false);

  const fetchMinors = useCallback(async () => {
    if (hasLoadedMinors) return;
    setIsLoadingMinors(true);
    try {
      const token = params.access_token as string;
      if (token) {
        const result = await getMinorsForMajor(token);
        if (result.success && result.data) {
          setMinors(result.data);
        }
      }
    } catch (error) {
      console.error("Failed to fetch minors:", error);
    } finally {
      setIsLoadingMinors(false);
      setHasLoadedMinors(true);
    }
  }, [hasLoadedMinors, params.access_token]);

  useEffect(() => {
    if (currentMinorId && !hasLoadedMinors) {
      fetchMinors();
    }
  }, [currentMinorId, hasLoadedMinors, fetchMinors]);

  const updateQueryParam = useCallback(
    (key: string, value: string | null) => {
      const params = new URLSearchParams(searchParams.toString());
      if (value) {
        params.set(key, value);
      } else {
        params.delete(key);
      }
      router.push(`${pathname}?${params.toString()}`);
    },
    [searchParams, router, pathname]
  );

  const handleFontSizeChange = (value: string) => {
    if (value) {
      updateQueryParam("font_size", value);
    }
  };

  const handleLanguageChange = (value: string) => {
    // Check if value is a valid language code before setting
    // The Select component usually ensures this via SelectItem values
    setLanguage(value as any);
  };

  const handleAccountChange = (value: string) => {
    if (value === "major") {
      updateQueryParam("minor_data_principal_id", null);
    } else {
      updateQueryParam("minor_data_principal_id", value);
    }
  };

  const handleDropdownOpen = async (open: boolean) => {
    if (open && !hasLoadedMinors) {
      fetchMinors();
    }
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
    <div>
      {/* Top Navbar */}
      <div className="flex justify-end items-center gap-2 px-6 py-1.5 bg-neutral-300 h-9">
        {/* Font size toggles */}
        <div className="flex items-center">
          <ToggleGroup
            type="single"
            value={currentFontSize}
            onValueChange={handleFontSizeChange}
            className="gap-1"
          >
            <ToggleGroupItem
              value="s"
              aria-label="Decrease size"
              size="sm"
              className={`rounded-sm text-xs h-4 w-4 cursor-pointer hover:bg-transparent hover:text-current ${currentFontSize === "s"
                  ? "!text-neutral-300 !bg-white data-[state=on]:!text-neutral-300 data-[state=on]:!bg-white"
                  : "text-white bg-transparent"
                }`}
            >
              A⁻
            </ToggleGroupItem>
            <ToggleGroupItem
              value="m"
              aria-label="Default size"
              className={`rounded-sm text-xs h-4 w-4 cursor-pointer hover:bg-transparent hover:text-current ${currentFontSize === "m"
                  ? "!text-neutral-300 !bg-white data-[state=on]:!text-neutral-300 data-[state=on]:!bg-white"
                  : "text-white bg-transparent"
                }`}
            >
              A
            </ToggleGroupItem>
            <ToggleGroupItem
              value="l"
              aria-label="Increase size"
              className={`rounded-sm text-xs h-4 w-4 cursor-pointer hover:bg-transparent hover:text-current ${currentFontSize === "l"
                  ? "!text-neutral-300 !bg-white data-[state=on]:!text-neutral-300 data-[state=on]:!bg-white"
                  : "text-white bg-transparent"
                }`}
            >
              A⁺
            </ToggleGroupItem>
          </ToggleGroup>
        </div>

        {/* Separator */}
        <div className="w-px h-4 bg-neutral-30" />

        {/* Language dropdown */}
        <Select value={currentLanguage} onValueChange={handleLanguageChange}>
          <SelectTrigger
            className="flex items-center gap-2 cursor-pointer w-auto px-1 border-0 bg-transparent py-0 !text-white [&>svg]:!text-white rounded-xs"
            size="sm"
            style={{ color: "white" }}
          >
            <Languages className="h-3 w-3 text-white" />
            <SelectValue
              placeholder={`Change Language: ${currentLanguage.toUpperCase()}`}
              className="!text-white !text-xs"
              style={{ color: "white" }}
            >
              {/* Show current language name or code */}
              <span className="text-xs uppercase">{currentLanguage}</span>
            </SelectValue>
          </SelectTrigger>
          <SelectContent>
            {availableLanguages.map((lang) => (
              <SelectItem key={lang} value={lang} className="text-xs">
                {getLanguageName(lang)} ({getLanguageName(lang, true)})
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Second Navbar */}
      <div className="bg-white border-b border-neutral-50 px-6 py-4">
        <div className="mx-auto flex items-center justify-between">
          <div className="flex items-center gap-8">
            {/* Logo */}
            <FiduciaryLogo />
          </div>

          {/* Right side controls */}
          <div className="flex items-center gap-4">
            {/* Notifications Bell */}
            <Button variant="ghost" className="relative p-2 h-10 w-10">
              <Link
                href={createDprmLink(`${homeUrl}/notifications`, searchParams)}
              >
                <AnimatedBellIcon />
                <span className="absolute bottom-6 left-5.5 h-1.5 w-1.5 bg-red-500 rounded-full"></span>
              </Link>
            </Button>

            {/* Profile Dropdown */}
            <DropdownMenu onOpenChange={handleDropdownOpen}>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  className="flex items-stretch gap-0 text-primary-600 hover:bg-primary-50 !py-0 rounded-lg h-10 p-0 overflow-hidden border-none shadow-none"
                >
                  <span className="text-primary-500 px-4 flex items-center font-medium border border-neutral-50 rounded-l-lg max-w-[150px] truncate">
                    {currentMinorId
                      ? minors.indexOf(currentMinorId) !== -1
                        ? t("Child {{count}}", {
                          count: localizeDigits(
                            minors.indexOf(currentMinorId) + 1,
                            tCommon("numerals")
                          ),
                        })
                        : currentMinorId
                      : t("My Consents")}
                  </span>
                  <div className="flex items-center gap-2 bg-primary-500 px-4 flex-1">
                    <User className="h-6 w-6 text-white" />
                    <ChevronDown className="h-6 w-6 text-white" />
                  </div>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-[340px] p-2">
                <DropdownMenuItem
                  className={`cursor-pointer p-3 rounded-lg mb-1 focus:bg-accent ${!currentMinorId ? "bg-blue-50" : ""
                    }`}
                  onClick={() => handleAccountChange("major")}
                >
                  <div className="flex items-center w-full gap-3">
                    <div className="shrink-0">
                      <User className="h-6 w-6 text-gray-700" />
                    </div>
                    <div className="flex flex-col flex-1">
                      <span className="font-medium text-gray-900">
                        {t("My Consents")}
                      </span>
                      <span className="text-xs text-gray-500">
                        {t("View your consents")}
                      </span>
                    </div>
                    <div className="shrink-0">
                      <div
                        className={`h-5 w-5 rounded-full border flex items-center justify-center ${!currentMinorId
                            ? "border-blue-600"
                            : "border-gray-300"
                          }`}
                      >
                        {!currentMinorId && (
                          <div className="h-3 w-3 rounded-full bg-blue-600" />
                        )}
                      </div>
                    </div>
                  </div>
                </DropdownMenuItem>

                {isLoadingMinors ? (
                  <div className="p-2 space-y-2">
                    <Skeleton className="h-16 w-full rounded-lg" />
                    <Skeleton className="h-16 w-full rounded-lg" />
                  </div>
                ) : (
                  minors.length > 0 && (
                    <>
                      {minors.map((minorId, index) => (
                        <DropdownMenuItem
                          key={minorId}
                          className={`cursor-pointer p-3 rounded-lg mb-1 focus:bg-accent ${currentMinorId === minorId ? "bg-blue-50" : ""
                            }`}
                          onClick={() => handleAccountChange(minorId)}
                        >
                          <div className="flex items-center w-full gap-3">
                            <div className="shrink-0">
                              <Baby className="h-6 w-6 text-gray-700" />
                            </div>
                            <div className="flex flex-col flex-1">
                              <span className="font-medium text-gray-900">
                                {t("Child {{count}}", {
                                  count: localizeDigits(index + 1, tCommon("numerals")),
                                })}
                                &nbsp;{" "}
                              </span>
                              <span className="text-xs text-gray-500">
                                <span className="text-xs text-gray-500">
                                  {minorId}
                                </span>
                              </span>
                            </div>
                            <div className="shrink-0">
                              <div
                                className={`h-5 w-5 rounded-full border flex items-center justify-center ${currentMinorId === minorId
                                    ? "border-blue-600"
                                    : "border-gray-300"
                                  }`}
                              >
                                {currentMinorId === minorId && (
                                  <div className="h-3 w-3 rounded-full bg-blue-600" />
                                )}
                              </div>
                            </div>
                          </div>
                        </DropdownMenuItem>
                      ))}
                    </>
                  )
                )}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </div>
  );
}
