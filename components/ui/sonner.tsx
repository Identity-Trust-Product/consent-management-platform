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

import { useTheme } from "next-themes";
import { Toaster as Sonner, ToasterProps } from "sonner";

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme();

  return (
    <Sonner
      position="top-right"
      richColors
      theme={theme as ToasterProps["theme"]}
      className="toaster group"
      toastOptions={{
        classNames: {
          toast:
            "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
          description: "group-[.toast]:text-muted-foreground",
          actionButton:
            "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
          cancelButton:
            "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground",
        },
      }}
      style={
        {
          // General toast styles
          "--normal-bg": "var(--popover)",
          "--normal-border": "var(--border)",
          "--normal-text": "var(--popover-foreground)",

          // Success toast styles
          "--success-bg": "var(--success-50)",
          "--success-border": "var(--success-200)",
          "--success-text": "var(--success-600)",

          // Error toast styles
          "--error-bg": "var(--destructive-50)",
          "--error-border": "var(--destructive-200)",
          "--error-text": "var(--destructive-600)",

          // Info toast styles
          "--info-bg": "var(--info-50)",
          "--info-border": "var(--info-200)",
          "--info-text": "var(--info-600)",

          // Warning toast styles
          "--warning-bg": "var(--warning-50)",
          "--warning-border": "var(--warning-200)",
          "--warning-text": "var(--warning-600)",
        } as React.CSSProperties
      }
      {...props}
    />
  );
};

export { Toaster };
