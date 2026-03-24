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

import { getFiduciaryAgents, getSlaConfigurations, getSlaStatistics } from "@/actions/sla";
import { Actions, Resources } from "@/lib/constants/rbac";
import { checkPermission } from "@/lib/rbac";
import { Clock, Settings, Shield, TrendingUp, AlertCircle, CheckCircle2 } from "lucide-react";
import SlaConfigClient from "./sla-config-client";
import { Forbidden } from "@/components/forbidden";
import { Card, CardContent } from "@/components/ui/card";

export default async function SlaConfigurationPage() {
  // Check permissions using standard pattern
  const canRead = await checkPermission(Resources.SLA, Actions.READ);

  if (!canRead) {
    return <Forbidden requiredRole="privy_cgp_admin" />;
  }

  const canUpdate = await checkPermission(Resources.SLA, Actions.UPDATE);

  const [configsResult, agentsResult, statsResult] = await Promise.all([
    getSlaConfigurations(),
    getFiduciaryAgents(),
    getSlaStatistics(),
  ]);

  if (!configsResult.success) {
    console.error("Failed to fetch SLA configs:", configsResult.error);
  }

  if (!agentsResult.success) {
    console.error("Failed to fetch agents:", agentsResult.error);
  }

  if (!statsResult.success) {
    console.error("Failed to fetch stats:", statsResult.error);
  }

  const configs = configsResult.data || [];
  const agents = agentsResult.data || [];
  const stats = statsResult.data || {
    totalGrievances: 0,
    pendingGrievances: 0,
    resolvedGrievances: 0,
    slaBreaches: 0,
    avgResolutionHours: 0,
    complianceRate: 100,
    bySeverity: {},
  };

  // Calculate stats
  const activeConfigs = configs.filter((c) => c.active).length;
  const avgResolutionTime =
    configs.reduce((sum, c) => sum + c.resolutionTimeInDays, 0) /
    configs.length || 0;

  return (
    <div className="pt-4 px-6 pb-6">
      <div className="space-y-6">
        {/* Analytics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* SLA Compliance */}
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <p className="text-sm font-medium text-muted-foreground">
                    SLA Compliance
                  </p>
                  <p className="text-2xl font-bold">{stats.complianceRate}%</p>
                </div>
                <div className="h-12 w-12 rounded-full bg-green-100 dark:bg-green-900/20 flex items-center justify-center">
                  <CheckCircle2 className="h-6 w-6 text-green-600 dark:text-green-400" />
                </div>
              </div>
              <p className="text-xs text-muted-foreground mt-2">
                {stats.resolvedGrievances - stats.slaBreaches} of {stats.resolvedGrievances} met SLA
              </p>
            </CardContent>
          </Card>

          {/* Pending Grievances */}
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <p className="text-sm font-medium text-muted-foreground">
                    Pending Grievances
                  </p>
                  <p className="text-2xl font-bold">{stats.pendingGrievances}</p>
                </div>
                <div className="h-12 w-12 rounded-full bg-orange-100 dark:bg-orange-900/20 flex items-center justify-center">
                  <AlertCircle className="h-6 w-6 text-orange-600 dark:text-orange-400" />
                </div>
              </div>
              <p className="text-xs text-muted-foreground mt-2">
                Currently open or in progress
              </p>
            </CardContent>
          </Card>

          {/* Avg Resolution Time */}
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <p className="text-sm font-medium text-muted-foreground">
                    Avg Resolution Time
                  </p>
                  <p className="text-2xl font-bold">
                    {stats.avgResolutionHours < 24
                      ? `${stats.avgResolutionHours}h`
                      : `${(stats.avgResolutionHours / 24).toFixed(1)}d`}
                  </p>
                </div>
                <div className="h-12 w-12 rounded-full bg-blue-100 dark:bg-blue-900/20 flex items-center justify-center">
                  <Clock className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
              </div>
              <p className="text-xs text-muted-foreground mt-2">
                Target: {avgResolutionTime.toFixed(1)} days
              </p>
            </CardContent>
          </Card>

          {/* Total Grievances */}
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <p className="text-sm font-medium text-muted-foreground">
                    Total Grievances
                  </p>
                  <p className="text-2xl font-bold">{stats.totalGrievances}</p>
                </div>
                <div className="h-12 w-12 rounded-full bg-purple-100 dark:bg-purple-900/20 flex items-center justify-center">
                  <TrendingUp className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                </div>
              </div>
              <p className="text-xs text-muted-foreground mt-2">
                {stats.resolvedGrievances} resolved, {stats.pendingGrievances} pending
              </p>
            </CardContent>
          </Card>
        </div>

        {/* SLA Configuration Table */}
        <div className="space-y-2">
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Settings className="h-4 w-4" />
              <span>Active: {activeConfigs}/{configs.length}</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="h-4 w-4" />
              <span>Recipients: {agents.length}</span>
            </div>
          </div>
          <SlaConfigClient
            configs={configs}
            agents={agents}
            canUpdate={canUpdate}
          />
        </div>
      </div>
    </div>
  );
}
