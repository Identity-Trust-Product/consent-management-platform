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
import {
  CheckCircle2,
  Clock,
  RefreshCw,
  TicketIcon,
  XCircle,
  UserCheck,
} from "lucide-react";

interface GrievanceStatsProps {
  stats: {
    total: number;
    submitted: number;
    assigned: number;
    inProgress: number;
    resolved: number;
    closed: number;
    reopened: number;
  } | null;
}

export function GrievanceStats({ stats }: GrievanceStatsProps) {
  if (!stats) {
    return null;
  }

  const totalStat = {
    title: "Total Grievances",
    value: stats.total,
    icon: TicketIcon,
    description: "All tickets",
    colorClass: "text-blue-600 dark:text-blue-400",
  };

  const statCards = [
    {
      title: "Unassigned",
      value: stats.submitted,
      icon: Clock,
      description: "Awaiting review",
      colorClass: "text-yellow-600 dark:text-yellow-400",
    },
    {
      title: "Assigned",
      value: stats.assigned,
      icon: UserCheck,
      description: "Allocated",
      colorClass: "text-purple-600 dark:text-purple-400",
    },
    {
      title: "In Progress",
      value: stats.inProgress,
      icon: RefreshCw,
      description: "Working",
      colorClass: "text-orange-600 dark:text-orange-400",
    },
    {
      title: "Resolved",
      value: stats.resolved,
      icon: CheckCircle2,
      description: "Pending",
      colorClass: "text-green-600 dark:text-green-400",
    },
    {
      title: "Closed",
      value: stats.closed,
      icon: XCircle,
      description: "Completed",
      colorClass: "text-gray-600 dark:text-gray-400",
    },
    {
      title: "Reopened",
      value: stats.reopened,
      icon: RefreshCw,
      description: "Returned",
      colorClass: "text-red-600 dark:text-red-400",
    },
  ];

  return (
    <Card className="w-full">
      <CardContent className="p-0">
        <div className="flex flex-col md:flex-row w-full max-w-full overflow-hidden shrink-0">

          {/* Total Section (Sticks to the left) */}
          <div className="p-6 md:border-r border-b md:border-b-0 min-w-[200px] shrink-0 bg-muted/10">
            <div className="flex items-center justify-between space-y-0 pb-2">
              <h3 className="text-sm font-medium tracking-tight">
                {totalStat.title}
              </h3>
              <totalStat.icon className={`h-4 w-4 ${totalStat.colorClass}`} />
            </div>
            <div className="text-3xl font-bold mt-2">{totalStat.value}</div>
            <p className="text-xs text-muted-foreground mt-1">
              {totalStat.description}
            </p>
          </div>

          {/* Status Breakdown Section */}
          <div className="flex-1 grid grid-cols-2 lg:grid-cols-6 divide-x divide-y lg:divide-y-0 divide-border overflow-x-auto min-w-0">
            {statCards.map((stat) => {
              const Icon = stat.icon;
              return (
                <div key={stat.title} className="p-4 md:p-6 flex flex-col justify-center snap-center">
                  <div className="flex items-center space-x-2 pb-2">
                    <Icon className={`h-4 w-4 shrink-0 ${stat.colorClass}`} />
                    <span className="text-sm font-medium truncate">
                      {stat.title}
                    </span>
                  </div>
                  <div className="text-xl md:text-2xl font-bold">{stat.value}</div>
                  <p className="text-xs text-muted-foreground mt-1 truncate">
                    {stat.description}
                  </p>
                </div>
              );
            })}
          </div>

        </div>
      </CardContent>
    </Card>
  );
}
