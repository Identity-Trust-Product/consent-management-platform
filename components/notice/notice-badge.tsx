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

import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";
import { useHighContrast } from "@/contexts/high-contrast-context";

interface NoticeBadgeProps {
  children: ReactNode;
  variant?: "default" | "secondary" | "destructive" | "outline";
  className?: string;
  onClick?: () => void;
}

export function NoticeBadge({
  children,
  variant = "default",
  className,
  onClick,
}: NoticeBadgeProps) {
  const { isHighContrast } = useHighContrast();
  // Always use button to prevent hydration mismatches
  return (
    <button
      onClick={onClick}
      disabled={!onClick}
      className={cn(
        // Base button styles
        "border rounded-full bg-transparent p-0 m-0",
        // Interactive styles only when clickable
        onClick &&
        "cursor-pointer hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500",
        // Non-interactive styles
        !onClick && "cursor-default",
        isHighContrast && "hc-user-attribute-chip",
        className,
      )}
    >
      <Badge
        variant={variant}
        className={cn(isHighContrast && "hc-user-attribute-chip")}
      >
        {children}
      </Badge>
    </button>
  );
}
