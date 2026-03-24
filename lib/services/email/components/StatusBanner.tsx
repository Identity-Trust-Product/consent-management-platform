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

import { Img } from "@react-email/components";

interface StatusBannerProps {
  type: "success" | "info" | "reminder" | "error";
  title: string;
  baseUrl?: string;
}

export function StatusBanner({ type, title, baseUrl }: StatusBannerProps) {
  const styles = {
    success: {
      bg: "bg-[#EFFBE7]",
      text: "text-[#08461B]",
      iconPath: "/icons/check-circle.png",
      iconWidth: 24,
      iconHeight: 24,
    },
    info: {
      bg: "bg-[#E8FCFB]",
      text: "text-[#003464]",
      iconPath: "/icons/refresh-cw.png",
      iconWidth: 24,
      iconHeight: 24,
    },
    error: {
      bg: "bg-[#FEE2E2]",
      text: "text-[#991B1B]",
      iconPath: "/icons/alert-circle.png",
      iconWidth: 24,
      iconHeight: 24,
    },
    reminder: {
      bg: "bg-[#E8FCFB]",
      text: "text-[#003464]",
      iconPath: "/icons/bell.png",
      iconWidth: 24,
      iconHeight: 24,
    },
  };

  const style = styles[type];
  const iconSrc = baseUrl ? `${baseUrl}${style.iconPath}` : style.iconPath;

  return (
    <div className={`${style.bg} mb-6 rounded-lg px-6 py-4`}>
      <div className="flex items-center justify-center gap-3 text-center">
        <Img
          src={iconSrc}
          alt=""
          width={style.iconWidth}
          height={style.iconHeight}
          className="my-auto"
        />
        <p
          className={`m-0 text-[17px] font-semibold leading-snug ${style.text} ml-2`}
        >
          {title}
        </p>
      </div>
    </div>
  );
}
