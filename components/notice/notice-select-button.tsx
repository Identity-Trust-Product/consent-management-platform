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

import { SelectionState } from "./types";
import { cn } from "@/lib/utils";
import { Check, Minus } from "lucide-react";
import { toast } from "sonner";
import { useHighContrast } from "@/contexts/high-contrast-context";

interface NoticeSelectButtonProps {
  selectionState: SelectionState;
  onSelectionChange?: () => void;
  disabled?: boolean;
  preventDeselection?: boolean;
  size?: "sm" | "md" | "lg";
  className?: string;
  onClick?: (e: React.MouseEvent) => void;
  onKeyDown?: (e: React.KeyboardEvent) => void;
  tabIndex?: number;
  role?: string;
}

export function NoticeSelectButton({
  selectionState,
  onSelectionChange,
  disabled = false,
  preventDeselection = false,
  size = "md",
  className,
  onClick,
  onKeyDown,
  tabIndex,
  role = "button",
}: NoticeSelectButtonProps) {
  const { isHighContrast } = useHighContrast();

  const getSizeClasses = () => {
    switch (size) {
      case "sm":
        return "w-4 h-4";
      case "lg":
        return "w-6 h-6";
      case "md":
      default:
        return "w-5 h-5";
    }
  };

  const getIconSizeClasses = () => {
    switch (size) {
      case "sm":
        return "w-2.5 h-2.5";
      case "lg":
        return "w-4 h-4";
      case "md":
      default:
        return "w-3 h-3";
    }
  };

  const getPartialIconSizeClasses = () => {
    switch (size) {
      case "sm":
        return "w-2.5 h-2.5";
      case "lg":
        return "w-3.5 h-3.5";
      case "md":
      default:
        return "w-3 h-3";
    }
  };

  const handleClick = (e: React.MouseEvent) => {
    if (onClick) {
      onClick(e);
      return;
    }

    e.stopPropagation();
    if (disabled || !onSelectionChange) return;

    // Prevent deselecting when preventDeselection is true and currently selected
    if (preventDeselection && selectionState === "all") {
      toast.warning("This is a mandatory field and cannot be deselected.");
      return;
    }

    onSelectionChange();
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (onKeyDown) {
      onKeyDown(e);
      return;
    }

    if ((e.key === "Enter" || e.key === " ") && !disabled) {
      e.preventDefault();
      if (disabled || !onSelectionChange) return;

      // Prevent deselecting when preventDeselection is true and currently selected
      if (preventDeselection && selectionState === "all") {
        toast.warning("This is a mandatory field and cannot be deselected.");
        return;
      }

      onSelectionChange();
    }
  };

  const isInteractionDisabled =
    disabled || (preventDeselection && selectionState === "all");

  const getSelectionIcon = () => {
    const sizeClasses = getSizeClasses();
    const iconSizeClasses = getIconSizeClasses();
    const partialIconSizeClasses = getPartialIconSizeClasses();

    switch (selectionState) {
      case "all":
        return (
          <div
            className={cn(
              sizeClasses,
              "bg-blue-600 border-2 border-blue-600 rounded flex items-center justify-center",
              isHighContrast && "hc-select-button-selected",
            )}
          >
            <Check
              className={cn(
                iconSizeClasses,
                "text-white",
                isHighContrast && "text-black",
              )}
              strokeWidth={4}
            />
          </div>
        );
      case "partial":
        return (
          <div
            className={cn(
              sizeClasses,
              "bg-blue-600 border-2 border-blue-600 rounded flex items-center justify-center",
              isHighContrast && "hc-checkbox-partial",
            )}
          >
            <Minus
              className={cn(
                partialIconSizeClasses,
                "text-white bg-blue-600 rounded",
                isHighContrast && "hc-minus-icon",
              )}
              strokeWidth={5}
            />
          </div>
        );
      case "none":
      default:
        return (
          <div
            className={cn(
              sizeClasses,
              "border-2 border-gray-300 rounded bg-white",
              isHighContrast && "hc-checkbox-unselected",
            )}
          ></div>
        );
    }
  };

  return (
    <div
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      role={role}
      tabIndex={isInteractionDisabled ? -1 : (tabIndex ?? 0)}
      className={cn(
        "flex-shrink-0",
        !isInteractionDisabled && "cursor-pointer",
        isInteractionDisabled && "cursor-not-allowed",
        isHighContrast && "hc-select-button-focus",
        className,
      )}
    >
      {getSelectionIcon()}
    </div>
  );
}
