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
import {
  GRIEVANCE_STATUS_COLORS,
  GRIEVANCE_STATUS_LABELS,
} from "@/lib/constants/grievances";
import { cn } from "@/lib/utils";
import { GrievanceStatus } from "@prisma/client";

interface StatusBadgeProps {
  status: GrievanceStatus;
  className?: string;
}

export function StatusBadge({ status, className }: StatusBadgeProps) {
  const colors = GRIEVANCE_STATUS_COLORS[status];
  const label = GRIEVANCE_STATUS_LABELS[status];

  return (
    <Badge
      variant="outline"
      className={cn(
        "font-medium",
        colors.bg,
        colors.text,
        colors.border,
        className
      )}
    >
      {label}
    </Badge>
  );
}
