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

import { ChangeSeverityDialog } from "@/components/grievances/change-severity-dialog";
import { SlaStatusCard } from "@/components/grievances/sla-status-card";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  GRIEVANCE_CATEGORY_DESCRIPTIONS,
  GRIEVANCE_CATEGORY_LABELS,
} from "@/lib/constants/grievances";
import {
  GrievanceCategory,
  GrievanceSeverity,
  GrievanceStatus,
} from "@prisma/client";
import { format } from "date-fns";
import { AlertTriangle, RotateCcw, UserPlus } from "lucide-react";
import { useState } from "react";
import { AssignAgentDialog } from "./assign-agent-dialog";
import { AuditLogTimeline } from "./audit-log-timeline";
import { ReopenGrievanceDialog } from "./reopen-grievance-dialog";
import { StatusBadge } from "./status-badge";

interface GrievanceData {
  id: number;
  publicId: string;
  dataPrincipalId: string;
  metadata: any;
  status: GrievanceStatus;
  category: GrievanceCategory;
  severity: GrievanceSeverity;
  subject: string;
  description: string;
  businessProcessId: number;
  assignedToId: string | null;
  resolvedAt: Date | null;
  closedAt: Date | null;
  createdAt: Date;
  updatedAt: Date;
  businessProcess: {
    id: number;
    name: string;
    code: string;
  };
  assignedTo: {
    id: string;
    name: string | null;
    email: string | null;
  } | null;
  slaTracker?: {
    id: number;
    severity: GrievanceSeverity;
    startedAt: Date;
    expectedResolutionAt: Date;
    resolvedAt: Date | null;
    isBreached: boolean;
    breachedAt: Date | null;
    escalatedAt: Date | null;
  } | null;
  auditLogs: Array<{
    id: number;
    action: string;
    details: any;
    createdAt: Date;
    performedByUser: {
      id: string;
      name: string | null;
      email: string | null;
    } | null;
  }>;
}

interface GrievanceDetailClientProps {
  grievance: GrievanceData;
  agents: Array<{
    id: string;
    name: string | null;
    email: string | null;
  }>;
  canUpdate: boolean;
}

export function GrievanceDetailClient({
  grievance,
  agents,
  canUpdate,
}: GrievanceDetailClientProps) {
  const [assignDialogOpen, setAssignDialogOpen] = useState(false);
  const [reopenDialogOpen, setReopenDialogOpen] = useState(false);
  const [severityDialogOpen, setSeverityDialogOpen] = useState(false);

  const principalName = grievance.metadata?.name || "N/A";
  const principalEmail = grievance.metadata?.email || grievance.dataPrincipalId;

  const canReopen =
    grievance.status === GrievanceStatus.RESOLVED ||
    grievance.status === GrievanceStatus.CLOSED;

  return (
    <div className="space-y-6 px-2 pb-2">
      {/* Header Card */}
      <Card>
        <CardHeader>
          <div className="flex items-start justify-between">
            <div className="space-y-1">
              <CardTitle className="text-2xl">{grievance.subject}</CardTitle>
              <p className="text-sm text-muted-foreground">
                Reference:{" "}
                <span className="font-mono">{grievance.publicId}</span>
              </p>
            </div>
            <div className="flex items-center gap-2">
              <StatusBadge status={grievance.status} />
              {canReopen && (
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setReopenDialogOpen(true)}
                  className="ml-2"
                >
                  <RotateCcw className="h-4 w-4 mr-2" />
                  Reopen
                </Button>
              )}
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Data Principal Info */}
            <div>
              <h3 className="text-sm font-medium mb-2">Data Principal</h3>
              <div className="space-y-1">
                <p className="text-sm">{principalName}</p>
                <p className="text-sm text-muted-foreground">
                  {principalEmail}
                </p>
              </div>
            </div>

            {/* Business Process */}
            <div>
              <h3 className="text-sm font-medium mb-2">Business Process</h3>
              <div className="space-y-1">
                <p className="text-sm">{grievance.businessProcess.name}</p>
                <p className="text-sm text-muted-foreground font-mono">
                  {grievance.businessProcess.code}
                </p>
              </div>
            </div>

            {/* Category */}
            <div>
              <h3 className="text-sm font-medium mb-2">Category</h3>
              <div className="space-y-1">
                <p className="text-sm">
                  {GRIEVANCE_CATEGORY_LABELS[grievance.category]}
                </p>
                <p className="text-xs text-muted-foreground">
                  {GRIEVANCE_CATEGORY_DESCRIPTIONS[grievance.category]}
                </p>
              </div>
            </div>

            {/* Assigned To */}
            <div>
              <h3 className="text-sm font-medium mb-2">Assigned To</h3>
              <div className="flex items-center gap-2">
                {grievance.assignedTo ? (
                  <div className="space-y-1">
                    <p className="text-sm">
                      {grievance.assignedTo.name || grievance.assignedTo.email}
                    </p>
                    {grievance.assignedTo.name &&
                      grievance.assignedTo.email && (
                        <p className="text-xs text-muted-foreground">
                          {grievance.assignedTo.email}
                        </p>
                      )}
                  </div>
                ) : (
                  <p className="text-sm text-muted-foreground">Unassigned</p>
                )}
                {canUpdate && (
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setAssignDialogOpen(true)}
                  >
                    <UserPlus className="h-4 w-4 mr-2" />
                    {grievance.assignedTo ? "Reassign" : "Assign"}
                  </Button>
                )}
              </div>
            </div>

            {/* Timestamps */}
            <div>
              <h3 className="text-sm font-medium mb-2">Created</h3>
              <p className="text-sm">
                {format(new Date(grievance.createdAt), "PPp")}
              </p>
            </div>

            <div>
              <h3 className="text-sm font-medium mb-2">Last Updated</h3>
              <p className="text-sm">
                {format(new Date(grievance.updatedAt), "PPp")}
              </p>
            </div>

            {grievance.resolvedAt && (
              <div>
                <h3 className="text-sm font-medium mb-2">Resolved</h3>
                <p className="text-sm">
                  {format(new Date(grievance.resolvedAt), "PPp")}
                </p>
              </div>
            )}

            {grievance.closedAt && (
              <div>
                <h3 className="text-sm font-medium mb-2">Closed</h3>
                <p className="text-sm">
                  {format(new Date(grievance.closedAt), "PPp")}
                </p>
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      {/* SLA Status Card */}
      <SlaStatusCard slaTracker={grievance.slaTracker || null} />

      {/* Description Card */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Description</CardTitle>
            {canUpdate && (
              <Button
                variant="outline"
                size="sm"
                onClick={() => setSeverityDialogOpen(true)}
                disabled={grievance.status === GrievanceStatus.RESOLVED || grievance.status === GrievanceStatus.CLOSED}
              >
                <AlertTriangle className="h-4 w-4 mr-2" />
                Change Severity
              </Button>
            )}
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-sm whitespace-pre-wrap">{grievance.description}</p>
        </CardContent>
      </Card>

      {/* Audit Log Timeline */}
      <AuditLogTimeline logs={grievance.auditLogs} />

      {/* Assign Dialog */}
      <AssignAgentDialog
        open={assignDialogOpen}
        onOpenChange={setAssignDialogOpen}
        grievanceId={grievance.id}
        currentAssignedTo={grievance.assignedToId}
        agents={agents}
      />

      {/* Reopen Dialog */}
      <ReopenGrievanceDialog
        open={reopenDialogOpen}
        onOpenChange={setReopenDialogOpen}
        grievanceId={grievance.id}
        grievanceSubject={grievance.subject}
      />

      {/* Change Severity Dialog */}
      <ChangeSeverityDialog
        open={severityDialogOpen}
        onOpenChange={setSeverityDialogOpen}
        grievanceId={grievance.id}
        currentSeverity={grievance.severity}
        onSuccess={() => {
          window.location.reload();
        }}
      />
    </div>
  );
}
