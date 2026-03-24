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

import { cn } from "@/lib/utils";
import { useHighContrast } from "@/contexts/high-contrast-context";

interface NoticeDescriptionProps {
  description: string;
  className?: string;
}

export function NoticeDescription({
  description,
  className,
}: NoticeDescriptionProps) {
  const { isHighContrast } = useHighContrast();

  return (
    <div
      className={cn(
        "mb-6 text-gray-700",
        isHighContrast && "text-white",
        className,
      )}
    >
      <p className="text-lg font-normal leading-snug text-center">
        {description}
      </p>
    </div>
  );
}
