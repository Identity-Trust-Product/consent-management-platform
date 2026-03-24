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
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import {
  checkSlaStatus,
  formatTimeRemaining,
  getSlaStatusColor,
  getSlaStatusLabel,
  type SlaStatus,
} from "@/lib/utils/sla";
import { GrievanceSeverity } from "@prisma/client";
import { AlertTriangle, CheckCircle2, Clock, TrendingUp } from "lucide-react";

interface SlaTracker {
  id: number;
  severity: GrievanceSeverity;
  startedAt: Date;
  expectedResolutionAt: Date;
  resolvedAt: Date | null;
  isBreached: boolean;
  breachedAt: Date | null;
  escalatedAt: Date | null;
}

interface SlaStatusCardProps {
  slaTracker: SlaTracker | null;
  className?: string;
}

const severityLabels: Record<GrievanceSeverity, string> = {
  CRITICAL: "Critical",
  HIGH: "High",
  MEDIUM: "Medium",
  LOW: "Low",
};

const severityColors: Record<
  GrievanceSeverity,
  "destructive" | "default" | "secondary" | "outline"
> = {
  CRITICAL: "destructive",
  HIGH: "destructive",
  MEDIUM: "default",
  LOW: "secondary",
};

const statusIcons: Record<SlaStatus, React.ReactNode> = {
  "on-track": <CheckCircle2 className="h-4 w-4" />,
  "at-risk": <AlertTriangle className="h-4 w-4" />,
  breached: <AlertTriangle className="h-4 w-4" />,
  resolved: <CheckCircle2 className="h-4 w-4" />,
};

export function SlaStatusCard({ slaTracker, className }: SlaStatusCardProps) {
  if (!slaTracker) {
    return null;
  }

  const status = checkSlaStatus(
    slaTracker.startedAt,
    slaTracker.expectedResolutionAt,
    slaTracker.resolvedAt,
    slaTracker.isBreached
  );

  const expectedDate = new Date(slaTracker.expectedResolutionAt);
  const startDate = new Date(slaTracker.startedAt);

  return (
    <Card className={className}>
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-sm font-medium flex items-center gap-2">
            <Clock className="h-4 w-4" />
            SLA Status
          </CardTitle>
          <Badge variant={severityColors[slaTracker.severity]}>
            {severityLabels[slaTracker.severity]}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Status Badge */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            {statusIcons[status.status]}
            <span
              className={`text-sm font-medium ${getSlaStatusColor(status.status).split(" ")[1]
                }`}
            >
              {getSlaStatusLabel(status.status)}
            </span>
          </div>
          {!status.isBreached && !slaTracker.resolvedAt && (
            <span className="text-xs text-muted-foreground">
              {formatTimeRemaining(status.timeRemaining)}
            </span>
          )}
        </div>

        {/* Progress Bar */}
        {!slaTracker.resolvedAt && (
          <div className="space-y-2">
            <Progress value={status.percentComplete} className="h-2" />
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>Started {startDate.toLocaleDateString()}</span>
              <span>{status.percentComplete.toFixed(0)}%</span>
            </div>
          </div>
        )}

        {/* Expected Resolution */}
        <div className="space-y-1">
          <div className="text-xs text-muted-foreground">
            Expected Resolution
          </div>
          <div className="text-sm font-medium">
            {expectedDate.toLocaleDateString()} at{" "}
            {expectedDate.toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            })}
          </div>
        </div>

        {/* Breach Info */}
        {slaTracker.isBreached && slaTracker.breachedAt && (
          <div className="rounded-md bg-destructive/10 p-3 space-y-1">
            <div className="text-xs font-medium text-destructive">
              SLA Breached
            </div>
            <div className="text-xs text-muted-foreground">
              {new Date(slaTracker.breachedAt).toLocaleDateString()} at{" "}
              {new Date(slaTracker.breachedAt).toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </div>
          </div>
        )}

        {/* Escalation Info */}
        {slaTracker.escalatedAt && (
          <div className="rounded-md bg-orange-100 dark:bg-orange-900/20 p-3 space-y-1">
            <div className="text-xs font-medium text-orange-800 dark:text-orange-200 flex items-center gap-1">
              <TrendingUp className="h-3 w-3" />
              Escalated
            </div>
            <div className="text-xs text-muted-foreground">
              {new Date(slaTracker.escalatedAt).toLocaleDateString()} at{" "}
              {new Date(slaTracker.escalatedAt).toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </div>
          </div>
        )}

        {/* Resolved Info */}
        {slaTracker.resolvedAt && (
          <div className="rounded-md bg-green-100 dark:bg-green-900/20 p-3 space-y-1">
            <div className="text-xs font-medium text-green-800 dark:text-green-200">
              {slaTracker.isBreached
                ? "Resolved (After SLA)"
                : "Resolved (Within SLA)"}
            </div>
            <div className="text-xs text-muted-foreground">
              {new Date(slaTracker.resolvedAt).toLocaleDateString()} at{" "}
              {new Date(slaTracker.resolvedAt).toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
