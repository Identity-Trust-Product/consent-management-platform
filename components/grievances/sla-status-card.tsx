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

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { checkSlaStatus, formatTimeRemaining, getSlaStatusColor, getSlaStatusLabel } from "@/lib/utils/sla";
import { Clock, AlertTriangle, CheckCircle2, XCircle } from "lucide-react";
import { GrievanceSeverity } from "@prisma/client";

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

const severityColors: Record<GrievanceSeverity, string> = {
  CRITICAL: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200 border-red-200",
  HIGH: "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200 border-orange-200",
  MEDIUM: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200 border-yellow-200",
  LOW: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 border-green-200",
};

export function SlaStatusCard({ slaTracker, className }: SlaStatusCardProps) {
  if (!slaTracker) {
    return (
      <Card className={className}>
        <CardHeader className="pb-3">
          <CardTitle className="text-base flex items-center gap-2">
            <Clock className="h-4 w-4" />
            SLA Status
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            No SLA tracking available
          </p>
        </CardContent>
      </Card>
    );
  }

  const slaStatus = checkSlaStatus(
    slaTracker.startedAt,
    slaTracker.expectedResolutionAt,
    slaTracker.resolvedAt,
    slaTracker.isBreached
  );

  const getStatusIcon = () => {
    switch (slaStatus.status) {
      case "on-track":
        return <CheckCircle2 className="h-4 w-4 text-green-600" />;
      case "at-risk":
        return <AlertTriangle className="h-4 w-4 text-yellow-600" />;
      case "breached":
        return <XCircle className="h-4 w-4 text-red-600" />;
      case "resolved":
        return <CheckCircle2 className="h-4 w-4 text-blue-600" />;
      default:
        return <Clock className="h-4 w-4" />;
    }
  };

  const getProgressColor = () => {
    switch (slaStatus.status) {
      case "on-track":
        return "bg-green-500";
      case "at-risk":
        return "bg-yellow-500";
      case "breached":
        return "bg-red-500";
      case "resolved":
        return "bg-blue-500";
      default:
        return "bg-gray-500";
    }
  };

  return (
    <Card className={className}>
      <CardHeader className="pb-3">
        <CardTitle className="text-base flex items-center justify-between">
          <span className="flex items-center gap-2">
            <Clock className="h-4 w-4" />
            SLA Status
          </span>
          <Badge variant="outline" className={severityColors[slaTracker.severity]}>
            {severityLabels[slaTracker.severity]}
          </Badge>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Status Badge */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            {getStatusIcon()}
            <span className="text-sm font-medium">
              {getSlaStatusLabel(slaStatus.status)}
            </span>
          </div>
          <Badge className={getSlaStatusColor(slaStatus.status)}>
            {slaStatus.status === "resolved" && slaStatus.isBreached
              ? "Resolved (Breached)"
              : getSlaStatusLabel(slaStatus.status)}
          </Badge>
        </div>

        {/* Progress Bar */}
        {!slaTracker.resolvedAt && (
          <div className="space-y-2">
            <div className="relative h-2 w-full overflow-hidden rounded-full bg-secondary">
              <div
                className={`h-full transition-all ${getProgressColor()}`}
                style={{ width: `${slaStatus.percentComplete}%` }}
              />
            </div>
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>{slaStatus.percentComplete.toFixed(0)}% elapsed</span>
              <span>{formatTimeRemaining(slaStatus.timeRemaining)}</span>
            </div>
          </div>
        )}

        {/* Timeline */}
        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span className="text-muted-foreground">Started</span>
            <span className="font-medium">
              {new Date(slaTracker.startedAt).toLocaleDateString()} {new Date(slaTracker.startedAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Expected Resolution</span>
            <span className="font-medium">
              {new Date(slaTracker.expectedResolutionAt).toLocaleDateString()} {new Date(slaTracker.expectedResolutionAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
            </span>
          </div>
          {slaTracker.resolvedAt && (
            <div className="flex justify-between">
              <span className="text-muted-foreground">Resolved</span>
              <span className="font-medium">
                {new Date(slaTracker.resolvedAt).toLocaleDateString()} {new Date(slaTracker.resolvedAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              </span>
            </div>
          )}
          {slaTracker.breachedAt && (
            <div className="flex justify-between text-red-600">
              <span>Breached</span>
              <span className="font-medium">
                {new Date(slaTracker.breachedAt).toLocaleDateString()} {new Date(slaTracker.breachedAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              </span>
            </div>
          )}
          {slaTracker.escalatedAt && (
            <div className="flex justify-between text-orange-600">
              <span>Escalated</span>
              <span className="font-medium">
                {new Date(slaTracker.escalatedAt).toLocaleDateString()} {new Date(slaTracker.escalatedAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              </span>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
