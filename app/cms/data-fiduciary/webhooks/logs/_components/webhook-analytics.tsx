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
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartConfig,
} from "@/components/ui/chart";
import { WebhookLogsAnalytics } from "@/actions/webhook-logs";
import {
  Activity,
  CheckCircle2,
  Clock,
  TrendingUp,
  XCircle,
} from "lucide-react";
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Legend,
  Line,
  LineChart,
  Pie,
  PieChart,
  XAxis,
  YAxis,
} from "recharts";

interface WebhookAnalyticsProps {
  analytics: WebhookLogsAnalytics;
}

const STATUS_COLORS = {
  delivered: "#10b981",
  failed: "#ef4444",
  timeout: "#f59e0b",
  pending: "#6b7280",
};

const EVENT_COLORS = [
  "#3b82f6",
  "#8b5cf6",
  "#ec4899",
  "#f59e0b",
  "#10b981",
  "#06b6d4",
  "#6366f1",
];

export function WebhookAnalytics({ analytics }: WebhookAnalyticsProps) {
  // Prepare data for pie chart
  const statusData = [
    { name: "Delivered", value: analytics.statusBreakdown.delivered, color: STATUS_COLORS.delivered },
    { name: "Failed", value: analytics.statusBreakdown.failed, color: STATUS_COLORS.failed },
    { name: "Timeout", value: analytics.statusBreakdown.timeout, color: STATUS_COLORS.timeout },
    { name: "Pending", value: analytics.statusBreakdown.pending, color: STATUS_COLORS.pending },
  ].filter((item) => item.value > 0);

  // Prepare data for event type bar chart
  const eventTypeData = analytics.eventTypeDistribution.map((item, index) => ({
    eventType: item.eventType.replace(/_/g, " "),
    count: item.count,
    color: EVENT_COLORS[index % EVENT_COLORS.length],
  }));

  // Prepare data for timeline chart
  const timelineData = analytics.recentDeliveries.map((item) => ({
    date: new Date(item.date).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
    }),
    delivered: item.delivered,
    failed: item.failed,
    total: item.delivered + item.failed,
  }));

  return (
    <div className="space-y-6">
      {/* Stats Cards */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Total Deliveries
            </CardTitle>
            <Activity className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {analytics.totalAttempts.toLocaleString()}
            </div>
            <p className="text-xs text-muted-foreground">
              All webhook delivery attempts
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Success Rate</CardTitle>
            <CheckCircle2 className="h-4 w-4 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">
              {analytics.successRate.toFixed(1)}%
            </div>
            <p className="text-xs text-muted-foreground">
              {analytics.statusBreakdown.delivered.toLocaleString()} successful
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Avg Response Time
            </CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {analytics.averageResponseTime}ms
            </div>
            <p className="text-xs text-muted-foreground">
              Average delivery time
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Failed</CardTitle>
            <XCircle className="h-4 w-4 text-red-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-red-600">
              {(
                analytics.statusBreakdown.failed +
                analytics.statusBreakdown.timeout
              ).toLocaleString()}
            </div>
            <p className="text-xs text-muted-foreground">
              Failed + timeout deliveries
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Charts */}
      <div className="grid gap-6 md:grid-cols-2">
        {/* Status Distribution Pie Chart */}
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Status Distribution</CardTitle>
          </CardHeader>
          <CardContent>
            <ChartContainer
              config={{
                delivered: { label: "Delivered", color: STATUS_COLORS.delivered },
                failed: { label: "Failed", color: STATUS_COLORS.failed },
                timeout: { label: "Timeout", color: STATUS_COLORS.timeout },
                pending: { label: "Pending", color: STATUS_COLORS.pending },
              }}
              className="h-[250px]"
            >
              <PieChart>
                <Pie
                  data={statusData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) =>
                    `${name} ${(percent * 100).toFixed(0)}%`
                  }
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {statusData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <ChartTooltip content={<ChartTooltipContent />} />
              </PieChart>
            </ChartContainer>
          </CardContent>
        </Card>

        {/* Event Type Distribution Bar Chart */}
        <Card>
          <CardHeader>
            <CardTitle className="text-base">
              Event Type Distribution
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ChartContainer
              config={eventTypeData.reduce((acc, item, index) => {
                acc[item.eventType] = { label: item.eventType, color: item.color };
                return acc;
              }, {} as ChartConfig)}
              className="h-[250px]"
            >
              <BarChart data={eventTypeData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis
                  dataKey="eventType"
                  angle={-45}
                  textAnchor="end"
                  height={80}
                  className="text-xs"
                />
                <YAxis />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Bar dataKey="count" radius={[8, 8, 0, 0]}>
                  {eventTypeData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Bar>
              </BarChart>
            </ChartContainer>
          </CardContent>
        </Card>
      </div>

      {/* Timeline Chart */}
      {timelineData.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Delivery Timeline</CardTitle>
          </CardHeader>
          <CardContent>
            <ChartContainer
              config={{
                delivered: { label: "Delivered", color: "#10b981" },
                failed: { label: "Failed", color: "#ef4444" },
              }}
              className="h-[300px] w-full"
            >
              <AreaChart data={timelineData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Legend />
                <Area
                  type="monotone"
                  dataKey="delivered"
                  stackId="1"
                  stroke="#10b981"
                  fill="#10b981"
                  fillOpacity={0.6}
                  name="Delivered"
                />
                <Area
                  type="monotone"
                  dataKey="failed"
                  stackId="1"
                  stroke="#ef4444"
                  fill="#ef4444"
                  fillOpacity={0.6}
                  name="Failed"
                />
              </AreaChart>
            </ChartContainer>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
