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

import { ChevronRight } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { createDprmLink } from "@/lib/dprm-utils";
import { useNoticeTranslation } from "@/hooks/use-notice-translation";
import { localizeDigits } from "@/lib/utils/digit-localization";

interface OverviewSectionClientProps {
  activeConsentsCount: number;
  servicesCount: number;
  accessToken: string;
}

export function OverviewSectionClient({
  activeConsentsCount,
  servicesCount,
  accessToken,
}: OverviewSectionClientProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { t, currentLanguage } = useNoticeTranslation("dprm");
  const { t: tCommon } = useNoticeTranslation("common");

  const handleOverviewClick = () => {
    router.push(
      createDprmLink(
        `/cms/principal/dprm/${accessToken}/consent-wallet`,
        searchParams
      )
    );
  };

  return (
    <div className="w-full flex flex-col items-start">
      {/* Title - at the edge of the box */}
      <h2 className="hidden md:block text-2xl font-semibold mb-4">{t("Overview")}</h2>

      <div
        onClick={handleOverviewClick}
        className="relative w-full md:w-[28rem] aspect-square md:rounded-2xl overflow-visible isolate md:bg-[linear-gradient(359deg,#FFF_-39.5%,#1766d6_99.51%)] flex justify-center items-center group bg-[linear-gradient(180deg,#1766d6_0%,#F9FAFB_100%)] cursor-pointer hover:opacity-90 transition-opacity"
      >
        {/* Shield SVG Icons - positioned to center properly */}
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 325 370"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid meet"
          style={{ overflow: "visible" }}
        >
          {/* Layer 1 - Outermost shield */}
          <path
            className="transition-[transform] duration-500 ease-out shield-layer-1"
            style={{
              transitionDelay: "500ms",
              transformOrigin: "162.5px 185px",
            }}
            opacity="0.15"
            d="M14.1388 20.2497L162.5 -12.741L310.861 20.2497C319.123 22.0868 325 29.4187 325 37.8869V218.321C325 254.566 306.897 288.413 276.759 308.518L162.5 384.741L48.2408 308.518C18.1027 288.413 0 254.566 0 218.321V37.8869C0 29.4187 5.87763 22.0868 14.1388 20.2497Z"
            fill="white"
            fillOpacity="0.4"
          />

          {/* Layer 2 - Second shield */}
          <path
            className="transition-[transform] duration-500 ease-out shield-layer-2"
            style={{
              transitionDelay: "250ms",
              transformOrigin: "162px 185px",
            }}
            opacity="0.15"
            d="M45.137 55.4397L162 29.4532L278.863 55.4397C285.371 56.8868 290 62.6621 290 69.3324V211.459C290 240.009 275.741 266.67 252.001 282.507L162 342.547L71.9989 282.507C48.2593 266.67 34 240.009 34 211.459V69.3324C34 62.6621 38.6298 56.8868 45.137 55.4397Z"
            fill="white"
            fillOpacity="0.4"
          />

          {/* Layer 3 - Third shield */}
          <path
            className="transition-[transform] duration-500 ease-out shield-layer-3"
            style={{
              transitionDelay: "0ms",
              transformOrigin: "162px 185px",
            }}
            opacity="0.2"
            d="M67.9618 80.9158L162 60L256.038 80.9158C261.275 82.0805 265 86.7288 265 92.0976V206.491C265 229.47 253.526 250.929 234.423 263.676L162 312L89.5773 263.676C70.4743 250.929 59 229.47 59 206.491V92.0976C59 86.7288 62.7255 82.0805 67.9618 80.9158Z"
            fill="white"
            fillOpacity="0.4"
          />

          {/* Layer 4 - White shield (content background) */}
          <path
            className="shield-layer-4"
            style={{
              transformOrigin: "163px 182px",
            }}
            d="M89.9606 100.268L163 84L236.039 100.268C240.107 101.174 243 104.789 243 108.965V197.937C243 215.81 234.088 232.5 219.251 242.414L163 280L106.749 242.414C91.9121 232.5 83 215.81 83 197.937V108.965C83 104.789 85.8936 101.174 89.9606 100.268Z"
            fill="white"
          />
        </svg>

        {/* Content overlay - absolute positioned in center */}
        <div className="absolute inset-0 z-10 flex items-center justify-center px-4">
          <div
            className="text-center w-full max-w-[180px] xl:max-w-[240px]"
            style={{ transform: "translateY(-10px)" }}
          >
            {/* Number */}
            <h2 className="text-[2rem] xl:text-[3.25rem] font-semibold text-[#131a25] pb-2 xl:pb-3 leading-none">
              {localizeDigits(activeConsentsCount, tCommon("numerals"))}
            </h2>

            {/* Label */}
            <h4 className="text-[0.875rem] xl:text-[1.125rem] font-semibold xl:font-normal text-[#131a25] xl:text-[#484e56] px-2">
              {t("Active Consents")}
            </h4>

            {/* Divider */}
            <div
              className="w-28 xl:w-32 h-[1px] mx-auto my-2"
              style={{
                background:
                  "linear-gradient(90deg, rgba(255, 255, 255, 0.1) -17.26%, #F5F5F5 48.54%, rgba(255, 255, 255, 0.1) 115.51%)",
              }}
            />

            {/* Link */}
            <div className="flex items-center justify-center px-2 gap-1">
              <p className="text-[0.8rem] xl:text-base font-normal text-[#484e56] leading-[1.4]">
                {t("across {{count}} services", {
                  count: localizeDigits(servicesCount, tCommon("numerals")),
                })}
              </p>
              <span className="flex items-center justify-center h-4 w-4">
                <ChevronRight
                  className="h-3 w-3 transition-transform duration-200 ease-out group-hover:translate-x-1 flex-shrink-0"
                  style={{ transform: "translateY(1px)" }}
                />
              </span>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        /* Mobile - smaller size */
        .shield-layer-1,
        .shield-layer-2,
        .shield-layer-3,
        .shield-layer-4 {
          transform: scale(1);
        }

        /* Tablet - moderate size */
        @media (min-width: 768px) {
          .shield-layer-1,
          .shield-layer-2,
          .shield-layer-3,
          .shield-layer-4 {
            transform: scale(1.15);
          }
        }

        /* Desktop - slightly smaller */
        @media (min-width: 1280px) {
          .shield-layer-1,
          .shield-layer-2,
          .shield-layer-3,
          .shield-layer-4 {
            transform: scale(1.2);
          }
        }

        .group:hover .shield-layer-1,
        .group:hover .shield-layer-2,
        .group:hover .shield-layer-3 {
          transform: scale(1.18);
        }

        @media (min-width: 768px) {
          .group:hover .shield-layer-1,
          .group:hover .shield-layer-2,
          .group:hover .shield-layer-3 {
            transform: scale(1.33);
          }
        }

        @media (min-width: 1280px) {
          .group:hover .shield-layer-1,
          .group:hover .shield-layer-2,
          .group:hover .shield-layer-3 {
            transform: scale(1.37);
          }
        }

        .group:hover .shield-layer-4 {
          transform: scale(1);
        }

        @media (min-width: 768px) {
          .group:hover .shield-layer-4 {
            transform: scale(1.15);
          }
        }

        @media (min-width: 1280px) {
          .group:hover .shield-layer-4 {
            transform: scale(1.2);
          }
        }
      `}</style>
    </div>
  );
}
