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

import { ReactNode } from "react";

interface DPRMCardProps {
  children: ReactNode;
  className?: string;
}

export function DPRMCard({ children, className = "" }: DPRMCardProps) {
  return (
    <div
      className={`rounded-lg bg-white border-t border-r border-l border-b-2 border-[rgba(0,0,0,0.08)] ${className}`}
    >
      {children}
    </div>
  );
}

interface DPRMCardHeaderProps {
  children: ReactNode;
  className?: string;
}

export function DPRMCardHeader({
  children,
  className = "",
}: DPRMCardHeaderProps) {
  return <div className={`px-6 pt-4 ${className}`}>{children}</div>;
}

interface DPRMCardContentProps {
  children: ReactNode;
  className?: string;
}

export function DPRMCardContent({
  children,
  className = "",
}: DPRMCardContentProps) {
  return <div className={`px-6 py-4 ${className}`}>{children}</div>;
}

interface DPRMCardTitleProps {
  children: ReactNode;
  className?: string;
}

export function DPRMCardTitle({
  children,
  className = "",
}: DPRMCardTitleProps) {
  return (
    <h3 className={`text-lg font-medium text-neutral-500 ${className}`}>
      {children}
    </h3>
  );
}

interface DPRMCardIconProps {
  children: ReactNode;
  className?: string;
}

export function DPRMCardIcon({ children, className = "" }: DPRMCardIconProps) {
  return (
    <div className={`p-2 bg-primary-20 rounded ${className}`}>{children}</div>
  );
}

interface DPRMCardDescriptionProps {
  children: ReactNode;
  className?: string;
}

export function DPRMCardDescription({
  children,
  className = "",
}: DPRMCardDescriptionProps) {
  return <p className={`text-neutral-300 text-sm pt-2 max-w-[80%] ${className}`}>{children}</p>;
}
