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

import { updateSlaConfiguration } from "@/actions/sla";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { GrievanceSeverity } from "@prisma/client";
import {
  Calendar,
  ChevronDown,
  ChevronRight,
  Clock,
  Loader2,
  Users,
} from "lucide-react";
import React, { useState } from "react";
import { toast } from "sonner";

interface SlaConfig {
  id: number;
  severity: GrievanceSeverity;
  resolutionTimeInDays: number;
  escalationUserIds: string[];
  active: boolean;
  businessHoursEnabled: boolean;
  businessHoursStart: string | null;
  businessHoursEnd: string | null;
  businessDays: number[] | null;
}

interface Agent {
  id: string;
  name: string | null;
  email: string;
}

interface Props {
  configs: SlaConfig[];
  agents: Agent[];
  canUpdate: boolean;
}

const severityLabels: Record<GrievanceSeverity, string> = {
  CRITICAL: "Critical",
  HIGH: "High",
  MEDIUM: "Medium",
  LOW: "Low",
};

const severityColors: Record<GrievanceSeverity, string> = {
  CRITICAL: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200",
  HIGH: "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200",
  MEDIUM:
    "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200",
  LOW: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
};

export default function SlaConfigClient({ configs, agents, canUpdate }: Props) {
  const [editingConfig, setEditingConfig] = useState<SlaConfig | null>(null);
  const [expandedRow, setExpandedRow] = useState<GrievanceSeverity | null>(
    null
  );
  const [loading, setLoading] = useState(false);

  const handleEdit = (config: SlaConfig) => {
    setEditingConfig({ ...config });
    setExpandedRow(config.severity);
  };

  const handleSave = async () => {
    if (!editingConfig) return;

    setLoading(true);
    try {
      const result = await updateSlaConfiguration({
        severity: editingConfig.severity,
        resolutionTimeInDays: editingConfig.resolutionTimeInDays,
        escalationUserIds: editingConfig.escalationUserIds,
        active: editingConfig.active,
        businessHoursEnabled: editingConfig.businessHoursEnabled,
        businessHoursStart: editingConfig.businessHoursStart,
        businessHoursEnd: editingConfig.businessHoursEnd,
        businessDays: editingConfig.businessDays,
      });

      if (result.success) {
        toast.success("SLA configuration updated successfully");
        setEditingConfig(null);
        // Refresh page to get updated data
        window.location.reload();
      } else {
        toast.error(result.error || "Failed to update configuration");
      }
    } catch (error) {
      toast.error("An unexpected error occurred");
    } finally {
      setLoading(false);
    }
  };

  const handleCancel = () => {
    setEditingConfig(null);
  };

  const updateField = <K extends keyof SlaConfig>(
    field: K,
    value: SlaConfig[K]
  ) => {
    if (editingConfig) {
      setEditingConfig({ ...editingConfig, [field]: value });
    }
  };

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[50px]"></TableHead>
            <TableHead>Severity</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Resolution Time</TableHead>
            <TableHead>Business Hours</TableHead>
            <TableHead>Escalation Recipients</TableHead>
            {canUpdate && <TableHead className="text-right">Actions</TableHead>}
          </TableRow>
        </TableHeader>
        <TableBody>
          {configs.map((config) => {
            const isEditing = editingConfig?.severity === config.severity;
            const isExpanded = expandedRow === config.severity;
            const current = isEditing ? editingConfig : config;

            return (
              <React.Fragment key={config.severity}>
                <TableRow className="cursor-pointer hover:bg-muted/50">
                  <TableCell>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-8 w-8 p-0"
                      onClick={() =>
                        setExpandedRow(isExpanded ? null : config.severity)
                      }
                    >
                      {isExpanded ? (
                        <ChevronDown className="h-4 w-4" />
                      ) : (
                        <ChevronRight className="h-4 w-4" />
                      )}
                    </Button>
                  </TableCell>
                  <TableCell>
                    <Badge className={severityColors[config.severity]}>
                      {severityLabels[config.severity]}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    {current.active ? (
                      <Badge
                        variant="outline"
                        className="bg-green-50 text-green-700 border-green-200"
                      >
                        Active
                      </Badge>
                    ) : (
                      <Badge
                        variant="outline"
                        className="bg-gray-50 text-gray-700 border-gray-200"
                      >
                        Inactive
                      </Badge>
                    )}
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <span>{current.resolutionTimeInDays} days</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    {current.businessHoursEnabled ? (
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm">
                          {current.businessHoursStart || "09:00"} - {current.businessHoursEnd || "17:00"}
                        </span>
                      </div>
                    ) : (
                      <span className="text-muted-foreground text-sm">
                        24/7
                      </span>
                    )}
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4 text-muted-foreground" />
                      <span>
                        {current.escalationUserIds.length} recipient(s)
                      </span>
                    </div>
                  </TableCell>
                  {canUpdate && (
                    <TableCell className="text-right">
                      {!isEditing && (
                        <Button
                          onClick={() => handleEdit(config)}
                          variant="outline"
                          size="sm"
                        >
                          Edit
                        </Button>
                      )}
                    </TableCell>
                  )}
                </TableRow>

                {/* Expanded Row for Editing */}
                {isExpanded && (
                  <TableRow>
                    <TableCell
                      colSpan={canUpdate ? 7 : 6}
                      className="bg-muted/30"
                    >
                      <div className="p-4 space-y-6">
                        {/* Active Toggle */}
                        <div className="flex items-center justify-between">
                          <div className="space-y-0.5">
                            <Label>Active</Label>
                            <div className="text-sm text-muted-foreground">
                              Enable SLA tracking for this severity
                            </div>
                          </div>
                          <Switch
                            checked={current.active}
                            onCheckedChange={(checked) =>
                              updateField("active", checked)
                            }
                            disabled={!isEditing}
                          />
                        </div>

                        {/* Resolution Time */}
                        <div className="space-y-2">
                          <Label>Resolution Time (Days)</Label>
                          <Input
                            type="number"
                            min={1}
                            max={30}
                            value={current.resolutionTimeInDays}
                            onChange={(e) =>
                              updateField(
                                "resolutionTimeInDays",
                                parseInt(e.target.value)
                              )
                            }
                            disabled={!isEditing}
                            className="max-w-xs"
                          />
                          <p className="text-sm text-muted-foreground">
                            Expected resolution time in calendar days
                          </p>
                        </div>

                        {/* Business Hours */}
                        <div className="space-y-4">
                          <div className="flex items-center justify-between">
                            <div className="space-y-0.5">
                              <Label>Business Hours</Label>
                              <div className="text-sm text-muted-foreground">
                                Count only business hours for SLA calculations
                              </div>
                            </div>
                            <Switch
                              checked={current.businessHoursEnabled}
                              onCheckedChange={(checked) =>
                                updateField("businessHoursEnabled", checked)
                              }
                              disabled={!isEditing}
                            />
                          </div>

                          {current.businessHoursEnabled && (
                            <div className="grid grid-cols-2 gap-4 ml-6">
                              <div className="space-y-2">
                                <Label>Start Time</Label>
                                <Input
                                  type="time"
                                  value={current.businessHoursStart || "09:00"}
                                  onChange={(e) =>
                                    updateField(
                                      "businessHoursStart",
                                      e.target.value
                                    )
                                  }
                                  disabled={!isEditing}
                                />
                              </div>
                              <div className="space-y-2">
                                <Label>End Time</Label>
                                <Input
                                  type="time"
                                  value={current.businessHoursEnd || "17:00"}
                                  onChange={(e) =>
                                    updateField(
                                      "businessHoursEnd",
                                      e.target.value
                                    )
                                  }
                                  disabled={!isEditing}
                                />
                              </div>
                            </div>
                          )}
                        </div>

                        {/* Escalation Recipients */}
                        <div className="space-y-2">
                          <Label>Escalation Recipients</Label>
                          <div className="text-sm text-muted-foreground mb-2">
                            {current.escalationUserIds.length === 0
                              ? "No recipients configured"
                              : `${current.escalationUserIds.length} recipient(s) will be notified on SLA breach`}
                          </div>
                          {isEditing && (
                            <Select
                              value=""
                              onValueChange={(userId) => {
                                if (
                                  !current.escalationUserIds.includes(userId)
                                ) {
                                  updateField("escalationUserIds", [
                                    ...current.escalationUserIds,
                                    userId,
                                  ]);
                                }
                              }}
                            >
                              <SelectTrigger className="max-w-xs">
                                <SelectValue placeholder="Add recipient..." />
                              </SelectTrigger>
                              <SelectContent>
                                {agents.map((agent) => (
                                  <SelectItem key={agent.id} value={agent.id}>
                                    {agent.name || agent.email}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          )}
                          {current.escalationUserIds.length > 0 && (
                            <div className="flex flex-wrap gap-2 mt-2">
                              {current.escalationUserIds.map((userId) => {
                                const agent = agents.find(
                                  (a) => a.id === userId
                                );
                                return (
                                  <div
                                    key={userId}
                                    className="flex items-center gap-2 px-2 py-1 bg-secondary rounded text-sm"
                                  >
                                    <span>
                                      {agent?.name || agent?.email || userId}
                                    </span>
                                    {isEditing && (
                                      <button
                                        onClick={() =>
                                          updateField(
                                            "escalationUserIds",
                                            current.escalationUserIds.filter(
                                              (id) => id !== userId
                                            )
                                          )
                                        }
                                        className="text-muted-foreground hover:text-foreground"
                                      >
                                        ×
                                      </button>
                                    )}
                                  </div>
                                );
                              })}
                            </div>
                          )}
                        </div>

                        {/* Action Buttons */}
                        {isEditing && (
                          <div className="flex gap-2 pt-4 border-t">
                            <Button onClick={handleSave} disabled={loading}>
                              {loading && (
                                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                              )}
                              Save Changes
                            </Button>
                            <Button
                              onClick={handleCancel}
                              variant="outline"
                              disabled={loading}
                            >
                              Cancel
                            </Button>
                          </div>
                        )}
                      </div>
                    </TableCell>
                  </TableRow>
                )}
              </React.Fragment>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
}
