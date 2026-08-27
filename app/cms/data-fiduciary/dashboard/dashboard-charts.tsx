"use client";

import { useMemo, useState } from "react";
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
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { BarChart3, ChartArea, LineChartIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

type TrendPoint = {
  date: string;
  label: string;
  notices: number;
  accepted: number;
  rejected: number;
};

type NamedValue = {
  name: string;
  value: number;
};

type ChartMode = "line" | "bar" | "area";

interface DashboardChartsProps {
  trend: TrendPoint[];
  statuses: NamedValue[];
  processes: NamedValue[];
}

const STATUS_COLORS = ["#16a34a", "#dc2626", "#f59e0b", "#2563eb"];

export function DashboardCharts({
  trend,
  statuses,
  processes,
}: DashboardChartsProps) {
  const [range, setRange] = useState(30);
  const [chartMode, setChartMode] = useState<ChartMode>("area");

  const filteredTrend = useMemo(() => trend.slice(-range), [range, trend]);
  const maximumValue = Math.max(
    ...filteredTrend.flatMap((point) => [
      point.notices,
      point.accepted,
      point.rejected,
    ]),
    1,
  );
  const tickStep = Math.max(1, Math.ceil(maximumValue / 4));
  const yAxisMaximum = Math.ceil(maximumValue / tickStep) * tickStep;
  const yAxisTicks = Array.from(
    { length: yAxisMaximum / tickStep + 1 },
    (_, index) => index * tickStep,
  );
  const xAxisInterval = range === 7 ? 0 : range === 14 ? 1 : 4;

  const chart = (() => {
    const grid = (
      <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" vertical={false} />
    );
    const xAxis = (
      <XAxis
        dataKey="label"
        interval={xAxisInterval}
        height={58}
        tick={{ fill: "#475569", fontSize: 12 }}
        tickLine={{ stroke: "#94a3b8" }}
        axisLine={{ stroke: "#64748b" }}
        tickMargin={10}
        label={{
          value: "Notice date",
          position: "insideBottom",
          offset: -5,
          fill: "#0f172a",
          fontSize: 13,
          fontWeight: 600,
        }}
      />
    );
    const yAxis = (
      <YAxis
        allowDecimals={false}
        domain={[0, yAxisMaximum]}
        ticks={yAxisTicks}
        width={76}
        tick={{ fill: "#475569", fontSize: 12 }}
        tickLine={{ stroke: "#94a3b8" }}
        axisLine={{ stroke: "#64748b" }}
        label={{
          value: "Notice count",
          angle: -90,
          position: "insideLeft",
          offset: 8,
          fill: "#0f172a",
          fontSize: 13,
          fontWeight: 600,
        }}
      />
    );
    const tooltip = (
      <Tooltip
        labelFormatter={(label) => `Notice date: ${label}`}
        contentStyle={{
          borderRadius: 12,
          border: "1px solid #e2e8f0",
          boxShadow: "0 12px 30px -12px rgba(15, 23, 42, 0.3)",
        }}
      />
    );
    const legend = (
      <Legend
        verticalAlign="top"
        align="right"
        height={38}
        iconType="circle"
        wrapperStyle={{ color: "#334155", fontSize: 13 }}
      />
    );

    if (chartMode === "bar") {
      return (
        <BarChart data={filteredTrend} margin={{ top: 8, right: 20, left: 12, bottom: 8 }}>
          {grid}
          {xAxis}
          {yAxis}
          {tooltip}
          {legend}
          <Bar dataKey="notices" name="Notices" fill="#2563eb" radius={[5, 5, 0, 0]} />
          <Bar dataKey="accepted" name="Accepted" fill="#16a34a" radius={[5, 5, 0, 0]} />
          <Bar dataKey="rejected" name="Rejected" fill="#dc2626" radius={[5, 5, 0, 0]} />
        </BarChart>
      );
    }

    if (chartMode === "line") {
      return (
        <LineChart data={filteredTrend} margin={{ top: 8, right: 20, left: 12, bottom: 8 }}>
          {grid}
          {xAxis}
          {yAxis}
          {tooltip}
          {legend}
          <Line type="monotone" dataKey="notices" name="Notices" stroke="#2563eb" strokeWidth={3} dot={false} />
          <Line type="monotone" dataKey="accepted" name="Accepted" stroke="#16a34a" strokeWidth={2} dot={false} />
          <Line type="monotone" dataKey="rejected" name="Rejected" stroke="#dc2626" strokeWidth={2} dot={false} />
        </LineChart>
      );
    }

    return (
      <AreaChart data={filteredTrend} margin={{ top: 8, right: 20, left: 12, bottom: 8 }}>
        <defs>
          <linearGradient id="noticeArea" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#2563eb" stopOpacity={0.35} />
            <stop offset="95%" stopColor="#2563eb" stopOpacity={0.03} />
          </linearGradient>
        </defs>
        {grid}
        {xAxis}
        {yAxis}
        {tooltip}
        {legend}
        <Area type="monotone" dataKey="notices" name="Notices" stroke="#2563eb" strokeWidth={3} fill="url(#noticeArea)" />
        <Area type="monotone" dataKey="accepted" name="Accepted" stroke="#16a34a" strokeWidth={2} fill="transparent" />
        <Area type="monotone" dataKey="rejected" name="Rejected" stroke="#dc2626" strokeWidth={2} fill="transparent" />
      </AreaChart>
    );
  })();

  const chartOptions: Array<{ mode: ChartMode; label: string; icon: typeof ChartArea }> = [
    { mode: "area", label: "Area", icon: ChartArea },
    { mode: "line", label: "Line", icon: LineChartIcon },
    { mode: "bar", label: "Bar", icon: BarChart3 },
  ];

  return (
    <div className="grid gap-6 xl:grid-cols-3">
      <Card className="border-slate-200 shadow-sm xl:col-span-2">
        <CardHeader className="gap-4 border-b border-slate-100 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <CardTitle>Consent Activity</CardTitle>
            <p className="mt-1 text-sm text-muted-foreground">Daily notice and decision trends</p>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <div className="flex rounded-lg border border-slate-200 bg-slate-50 p-1">
              {[7, 14, 30].map((days) => (
                <Button
                  key={days}
                  type="button"
                  variant="ghost"
                  size="sm"
                  onClick={() => setRange(days)}
                  className={cn("h-8 px-3", range === days && "bg-white text-blue-700 shadow-sm")}
                >
                  {days}D
                </Button>
              ))}
            </div>
            <div className="flex rounded-lg border border-slate-200 bg-slate-50 p-1">
              {chartOptions.map(({ mode, label, icon: Icon }) => (
                <Button
                  key={mode}
                  type="button"
                  variant="ghost"
                  size="sm"
                  title={`${label} chart`}
                  onClick={() => setChartMode(mode)}
                  className={cn("h-8 gap-1.5 px-2.5", chartMode === mode && "bg-white text-blue-700 shadow-sm")}
                >
                  <Icon className="h-4 w-4" />
                  <span className="hidden sm:inline">{label}</span>
                </Button>
              ))}
            </div>
          </div>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="h-[400px] w-full rounded-xl border border-slate-100 bg-white p-2">
            <ResponsiveContainer width="100%" height="100%">
              {chart}
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      <Card className="border-slate-200 shadow-sm">
        <CardHeader className="border-b border-slate-100">
          <CardTitle>Consent Status</CardTitle>
          <p className="mt-1 text-sm text-muted-foreground">Current notice distribution</p>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="h-[230px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={statuses} dataKey="value" nameKey="name" innerRadius={58} outerRadius={88} paddingAngle={3}>
                  {statuses.map((status, index) => (
                    <Cell key={status.name} fill={STATUS_COLORS[index % STATUS_COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {statuses.map((status, index) => (
              <div key={status.name} className="rounded-xl border border-slate-100 bg-slate-50 p-3">
                <div className="flex items-center gap-2 text-xs text-slate-600">
                  <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: STATUS_COLORS[index % STATUS_COLORS.length] }} />
                  {status.name}
                </div>
                <p className="mt-1 text-xl font-bold text-slate-900">{status.value}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card className="border-slate-200 shadow-sm xl:col-span-3">
        <CardHeader className="border-b border-slate-100">
          <CardTitle>Top Processes</CardTitle>
          <p className="mt-1 text-sm text-muted-foreground">Notice volume by business process over the last 30 days</p>
        </CardHeader>
        <CardContent className="pt-6">
          {processes.length ? (
            <div className="h-[320px] rounded-xl border border-slate-100 bg-white p-2">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={processes} layout="vertical" margin={{ top: 0, right: 30, left: 24, bottom: 28 }}>
                  <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="#e2e8f0" />
                  <XAxis
                    type="number"
                    allowDecimals={false}
                    tick={{ fill: "#475569", fontSize: 12 }}
                    axisLine={{ stroke: "#94a3b8" }}
                    tickLine={{ stroke: "#cbd5e1" }}
                    label={{ value: "Number of notices", position: "insideBottom", offset: -14, fill: "#334155", fontWeight: 600 }}
                  />
                  <YAxis
                    type="category"
                    dataKey="name"
                    width={170}
                    tick={{ fill: "#334155", fontSize: 12 }}
                    axisLine={{ stroke: "#94a3b8" }}
                    tickLine={false}
                  />
                  <Tooltip />
                  <Bar dataKey="value" name="Notices" fill="#1d4ed8" radius={[0, 7, 7, 0]} barSize={24} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          ) : (
            <div className="py-16 text-center text-sm text-muted-foreground">No process activity is available yet.</div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
