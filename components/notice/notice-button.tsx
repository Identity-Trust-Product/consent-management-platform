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

import { useHighContrast } from "@/contexts/high-contrast-context";
import { Button } from "@/components/ui/button";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface NoticeButtonProps {
  children: ReactNode;
  onClick?: () => void;
  variant?:
  | "default"
  | "destructive"
  | "outline"
  | "secondary"
  | "ghost"
  | "link";
  size?: "default" | "sm" | "lg" | "icon";
  className?: string;
  disabled?: boolean;
  purpose: "accept" | "reject";
  type?: "button" | "submit" | "reset";
}

export function NoticeButton({
  children,
  onClick,
  variant = "default",
  size = "default",
  className,
  disabled = false,
  purpose,
  type = "button",
}: NoticeButtonProps) {
  const { isHighContrast } = useHighContrast();

  return (
    <Button
      type={type}
      onClick={onClick}
      disabled={disabled}
      variant={variant}
      size={size}
      className={cn(
        purpose === "accept" &&
          "rounded-lg border-0 bg-[#4e73df] font-black text-white shadow-[0_6px_14px_rgba(78,115,223,0.24)] hover:bg-[#224abe]",
        purpose === "reject" &&
          "rounded-lg border border-[#d9e2ef] bg-white font-black text-[#4e73df] shadow-sm hover:border-[#4e73df] hover:bg-[#f4f7fb] hover:text-[#224abe]",
        className,
        isHighContrast && "hc-footer-button",
      )}
    >
      {children}
    </Button>
  );
}
