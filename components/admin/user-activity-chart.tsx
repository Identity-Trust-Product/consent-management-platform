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

import { getUserActivityStats } from "@/actions/admin";
import { Button } from "@/components/ui/button";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { Skeleton } from "@/components/ui/skeleton";
import { humanizeAction } from "@/lib/utils/audit-helpers";
import { format, formatDistanceToNow } from "date-fns";
import { Activity, TrendingUp } from "lucide-react";
import { useEffect, useState } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid } from "recharts";
import { toast } from "sonner";

interface UserActivityChartProps {
  userId: string;
}

export function UserActivityChart({ userId }: UserActivityChartProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [isChangingPeriod, setIsChangingPeriod] = useState(false);
  const [selectedPeriod, setSelectedPeriod] = useState(7);
  const [dailyActivity, setDailyActivity] = useState<
    Array<{ date: string; count: number }>
  >([]);
  const [stats, setStats] = useState<{
    totalActions: number;
    mostCommonAction: string | null;
    lastLoginAt: Date | null;
  } | null>(null);

  useEffect(() => {
    fetchStats(isLoading);
  }, [userId, selectedPeriod]);

  const fetchStats = async (isInitial = false) => {
    if (isInitial) {
      setIsLoading(true);
    } else {
      setIsChangingPeriod(true);
    }

    try {
      const result = await getUserActivityStats(userId, selectedPeriod);

      if (result.success && result.data) {
        setDailyActivity(result.data.dailyActivity);
        setStats({
          totalActions: result.data.totalActions,
          mostCommonAction: result.data.mostCommonAction,
          lastLoginAt: result.data.lastLoginAt
            ? new Date(result.data.lastLoginAt)
            : null,
        });
      } else {
        toast.error(result.message || "Failed to fetch activity statistics");
      }
    } catch (error) {
      console.error("Error fetching activity stats:", error);
      toast.error("An error occurred while fetching activity statistics");
    } finally {
      setIsLoading(false);
      setIsChangingPeriod(false);
    }
  };

  const chartConfig = {
    count: {
      label: "Actions",
      color: "hsl(var(--primary))",
    },
  };

  const formatXAxis = (dateString: string) => {
    const date = new Date(dateString);
    return format(date, "MMM dd");
  };

  if (isLoading) {
    return (
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <Skeleton className="h-5 w-32" />
          <div className="flex gap-2">
            <Skeleton className="h-8 w-16" />
            <Skeleton className="h-8 w-16" />
            <Skeleton className="h-8 w-16" />
          </div>
        </div>
        <div className="grid grid-cols-3 gap-4">
          <Skeleton className="h-20" />
          <Skeleton className="h-20" />
          <Skeleton className="h-20" />
        </div>
        <Skeleton className="h-[250px] w-full" />
      </div>
    );
  }

  const maxCount = Math.max(...dailyActivity.map((d) => d.count), 0);
  const hasActivity = stats && stats.totalActions > 0;

  return (
    <div className="space-y-4">
      {/* Period selector */}
      <div className="flex items-center justify-between">
        <h4 className="text-sm font-semibold flex items-center gap-2">
          <TrendingUp className="h-4 w-4" />
          Activity Trend
          {isChangingPeriod && (
            <span className="text-xs text-muted-foreground animate-pulse">
              Loading...
            </span>
          )}
        </h4>
        <div className="flex gap-2">
          <Button
            variant={selectedPeriod === 7 ? "default" : "outline"}
            size="sm"
            onClick={() => setSelectedPeriod(7)}
            disabled={isChangingPeriod}
          >
            7d
          </Button>
          <Button
            variant={selectedPeriod === 30 ? "default" : "outline"}
            size="sm"
            onClick={() => setSelectedPeriod(30)}
            disabled={isChangingPeriod}
          >
            30d
          </Button>
          <Button
            variant={selectedPeriod === 90 ? "default" : "outline"}
            size="sm"
            onClick={() => setSelectedPeriod(90)}
            disabled={isChangingPeriod}
          >
            90d
          </Button>
        </div>
      </div>

      {/* Stats cards */}
      {hasActivity ? (
        <div className="grid grid-cols-3 gap-4">
          <div className="rounded-lg border p-4 space-y-1">
            <p className="text-xs text-muted-foreground font-medium">
              Total Actions
            </p>
            <p className="text-2xl font-bold">{stats.totalActions}</p>
            <p className="text-xs text-muted-foreground">
              Last {selectedPeriod} days
            </p>
          </div>

          <div className="rounded-lg border p-4 space-y-1">
            <p className="text-xs text-muted-foreground font-medium">
              Most Common
            </p>
            <p className="text-lg font-semibold truncate">
              {stats.mostCommonAction
                ? humanizeAction(stats.mostCommonAction)
                : "N/A"}
            </p>
            <p className="text-xs text-muted-foreground">Action type</p>
          </div>

          <div className="rounded-lg border p-4 space-y-1">
            <p className="text-xs text-muted-foreground font-medium">
              Last Login
            </p>
            <p className="text-sm font-semibold">
              {stats.lastLoginAt
                ? formatDistanceToNow(stats.lastLoginAt, {
                  addSuffix: true,
                })
                : "Never"}
            </p>
            <p className="text-xs text-muted-foreground">
              {stats.lastLoginAt
                ? format(stats.lastLoginAt, "PPp")
                : "No login recorded"}
            </p>
          </div>
        </div>
      ) : null}

      {/* Chart */}
      {hasActivity ? (
        <div className="rounded-lg border p-4 bg-background">
          <ChartContainer config={chartConfig} className="h-[280px] w-full">
            <LineChart
              data={dailyActivity}
              margin={{ top: 10, right: 20, left: 10, bottom: 10 }}
            >
              <CartesianGrid
                strokeDasharray="3 3"
                stroke="hsl(var(--border))"
                opacity={0.3}
              />
              <XAxis
                dataKey="date"
                tickFormatter={formatXAxis}
                stroke="hsl(var(--muted-foreground))"
                tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 12 }}
                tickLine={{ stroke: "hsl(var(--border))" }}
              />
              <YAxis
                stroke="hsl(var(--muted-foreground))"
                tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 12 }}
                tickLine={{ stroke: "hsl(var(--border))" }}
                allowDecimals={false}
              />
              <ChartTooltip
                content={
                  <ChartTooltipContent
                    labelFormatter={(value) => {
                      const date = new Date(value);
                      return format(date, "PPP");
                    }}
                  />
                }
              />
              <Line
                type="monotone"
                dataKey="count"
                stroke="#3b82f6"
                strokeWidth={4}
                dot={{
                  fill: "#3b82f6",
                  stroke: "#ffffff",
                  strokeWidth: 2,
                  r: 6,
                }}
                activeDot={{
                  r: 8,
                  fill: "#3b82f6",
                  stroke: "#ffffff",
                  strokeWidth: 3,
                }}
                connectNulls
                animationDuration={300}
              />
            </LineChart>
          </ChartContainer>
        </div>
      ) : (
        // Empty state
        <div className="rounded-lg border-2 border-dashed p-12 text-center">
          <Activity className="mx-auto h-12 w-12 text-muted-foreground/30 mb-3" />
          <p className="text-sm text-muted-foreground font-medium">
            No activity in the last {selectedPeriod} days
          </p>
          <p className="text-xs text-muted-foreground mt-1">
            Activity data will appear here once the user starts using the system
          </p>
        </div>
      )}
    </div>
  );
}
