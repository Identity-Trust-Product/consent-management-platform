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

import { UserAttributeData } from "./types";
import { NoticeBadge } from "./notice-badge";
import { cn } from "@/lib/utils";

interface NoticeUserAttributeProps {
  userAttribute: UserAttributeData;
  selected?: boolean;
  onToggle?: () => void;
  className?: string;
  disabled?: boolean;
  variant?: "badge" | "list" | "compact";
  showPiiIndicator?: boolean;
}

export function NoticeUserAttribute({
  userAttribute,
  selected = false,
  onToggle,
  className,
  disabled = false,
  variant = "badge",
  showPiiIndicator = true,
}: NoticeUserAttributeProps) {
  const renderBadgeVariant = () => (
    <NoticeBadge
      variant="secondary"
      onClick={onToggle}
      className={cn(disabled && "opacity-50 cursor-not-allowed", className)}
    >
      <span className="flex items-center gap-1">{userAttribute.name}</span>
    </NoticeBadge>
  );

  const renderListVariant = () => (
    <div
      className={cn(
        "flex items-center gap-3 p-2 rounded border",
        selected ? "bg-blue-50 border-blue-200" : "bg-white border-gray-200",
        onToggle && "cursor-pointer hover:bg-gray-50",
        disabled && "opacity-50 cursor-not-allowed",
        className,
      )}
      onClick={onToggle && !disabled ? onToggle : undefined}
      role={onToggle ? "button" : undefined}
      tabIndex={onToggle && !disabled ? 0 : undefined}
    >
      <div className="flex items-center gap-2 flex-1">
        <span className="font-medium">{userAttribute.name}</span>
        {showPiiIndicator && userAttribute.pii && (
          <span className="text-xs px-1.5 py-0.5 bg-yellow-100 text-yellow-800 rounded">
            PII
          </span>
        )}
      </div>
      {onToggle && (
        <div className="w-4 h-4">
          {selected ? (
            <div className="w-4 h-4 bg-blue-600 border-2 border-blue-600 rounded flex items-center justify-center">
              <svg
                className="w-2.5 h-2.5 text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          ) : (
            <div className="w-4 h-4 border-2 border-gray-300 rounded bg-white"></div>
          )}
        </div>
      )}
    </div>
  );

  const renderCompactVariant = () => (
    <span className={cn("text-sm text-gray-600", className)}>
      {userAttribute.name}
      {showPiiIndicator && userAttribute.pii && " ⚠"}
    </span>
  );

  switch (variant) {
    case "list":
      return renderListVariant();
    case "compact":
      return renderCompactVariant();
    case "badge":
    default:
      return renderBadgeVariant();
  }
}
