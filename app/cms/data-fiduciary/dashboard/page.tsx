import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import prisma from "@/lib/prisma";
import {
  CheckCircle2,
  Clock3,
  FileText,
  ShieldCheck,
  Users,
  XCircle,
} from "lucide-react";
import Link from "next/link";
import { DashboardCharts } from "./dashboard-charts";

export const dynamic = "force-dynamic";

function formatDate(date: Date) {
  return new Intl.DateTimeFormat("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  }).format(date);
}

function formatStatus(status: string) {
  return status.charAt(0).toUpperCase() + status.slice(1);
}

export default async function DashboardPage() {
  const now = new Date();
  const activityStart = new Date(now);
  activityStart.setDate(activityStart.getDate() - 29);
  activityStart.setHours(0, 0, 0, 0);
  const [
    totalNotices,
    pendingNotices,
    completedNotices,
    acceptedNotices,
    rejectedNotices,
    activeConsents,
    users,
    recentNotices,
    activityNotices,
  ] = await Promise.all([
    prisma.notice.count(),
    prisma.notice.count({ where: { status: "pending" } }),
    prisma.notice.count({ where: { status: "completed" } }),
    prisma.notice.count({ where: { consentStatus: "accepted" } }),
    prisma.notice.count({ where: { consentStatus: "rejected" } }),
    prisma.consent.count({
      where: {
        status: "accepted",
        isExpired: false,
        OR: [{ expiresAt: null }, { expiresAt: { gt: now } }],
      },
    }),
    prisma.notice.groupBy({ by: ["dataPrincipalId"] }),
    prisma.notice.findMany({
      orderBy: { createdAt: "desc" },
      take: 8,
      select: {
        publicId: true,
        referenceId: true,
        dataPrincipalId: true,
        status: true,
        consentStatus: true,
        createdAt: true,
        businessProcess: { select: { name: true } },
      },
    }),
    prisma.notice.findMany({
      where: { createdAt: { gte: activityStart } },
      select: {
        createdAt: true,
        consentStatus: true,
        businessProcess: { select: { name: true } },
      },
    }),
  ]);

  const resolvedNotices = acceptedNotices + rejectedNotices;
  const acceptanceRate = resolvedNotices
    ? Math.round((acceptedNotices / resolvedNotices) * 100)
    : 0;

  const dateKey = (date: Date) => date.toISOString().slice(0, 10);
  const trendMap = new Map<
    string,
    { date: string; label: string; notices: number; accepted: number; rejected: number }
  >();

  for (let offset = 0; offset < 30; offset += 1) {
    const date = new Date(activityStart);
    date.setDate(activityStart.getDate() + offset);
    trendMap.set(dateKey(date), {
      date: dateKey(date),
      label: new Intl.DateTimeFormat("en-IN", {
        day: "2-digit",
        month: "short",
      }).format(date),
      notices: 0,
      accepted: 0,
      rejected: 0,
    });
  }

  const processCounts = new Map<string, number>();
  for (const notice of activityNotices) {
    const point = trendMap.get(dateKey(notice.createdAt));
    if (point) {
      point.notices += 1;
      if (notice.consentStatus === "accepted") point.accepted += 1;
      if (notice.consentStatus === "rejected") point.rejected += 1;
    }

    const processName = notice.businessProcess.name;
    processCounts.set(processName, (processCounts.get(processName) || 0) + 1);
  }

  const trend = Array.from(trendMap.values());
  const statuses = [
    { name: "Accepted", value: acceptedNotices },
    { name: "Rejected", value: rejectedNotices },
    { name: "Pending", value: pendingNotices },
    {
      name: "Other",
      value: Math.max(totalNotices - acceptedNotices - rejectedNotices - pendingNotices, 0),
    },
  ];
  const processes = Array.from(processCounts, ([name, value]) => ({ name, value }))
    .sort((left, right) => right.value - left.value)
    .slice(0, 8);

  const metrics = [
    {
      title: "Total Notices",
      value: totalNotices,
      detail: `${completedNotices} completed`,
      icon: FileText,
      color: "bg-blue-100 text-blue-700",
    },
    {
      title: "Pending Notices",
      value: pendingNotices,
      detail: "Awaiting user action",
      icon: Clock3,
      color: "bg-amber-100 text-amber-700",
    },
    {
      title: "Accepted Notices",
      value: acceptedNotices,
      detail: `${acceptanceRate}% acceptance rate`,
      icon: CheckCircle2,
      color: "bg-green-100 text-green-700",
    },
    {
      title: "Rejected Notices",
      value: rejectedNotices,
      detail: "Consent declined",
      icon: XCircle,
      color: "bg-red-100 text-red-700",
    },
    {
      title: "Active Consents",
      value: activeConsents,
      detail: "Accepted and not expired",
      icon: ShieldCheck,
      color: "bg-indigo-100 text-indigo-700",
    },
    {
      title: "Unique Users",
      value: users.length,
      detail: "Users with notice records",
      icon: Users,
      color: "bg-violet-100 text-violet-700",
    },
  ];

  return (
    <div className="min-h-screen space-y-6 bg-slate-50/70 p-6">
      <div className="rounded-2xl bg-linear-to-r from-blue-950 via-blue-900 to-indigo-900 px-6 py-7 text-white shadow-lg">
        <h1 className="text-3xl font-bold tracking-tight">Consent Analytics Dashboard</h1>
        <p className="mt-2 text-sm text-blue-100">
          Live overview of notices and consent activity.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {metrics.map((metric) => (
          <Card
            key={metric.title}
            className="border-slate-200 bg-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md"
          >
            <CardContent className="flex items-center justify-between p-5">
              <div>
                <p className="text-sm font-medium text-muted-foreground">
                  {metric.title}
                </p>
                <p className="mt-1 text-3xl font-bold">{metric.value}</p>
                <p className="mt-1 text-xs text-muted-foreground">
                  {metric.detail}
                </p>
              </div>
              <div className={`rounded-full p-3 ${metric.color}`}>
                <metric.icon className="h-5 w-5" />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <DashboardCharts trend={trend} statuses={statuses} processes={processes} />

      <Card className="border-slate-200 shadow-sm">
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle>Recent Notices</CardTitle>
            <p className="mt-1 text-sm text-muted-foreground">
              Latest notice records from the system.
            </p>
          </div>
          <Button variant="outline" asChild>
            <Link href="/cms/data-fiduciary/notices">View all notices</Link>
          </Button>
        </CardHeader>
        <CardContent>
          {recentNotices.length === 0 ? (
            <div className="py-10 text-center text-sm text-muted-foreground">
              No notice data is available yet.
            </div>
          ) : (
            <div className="overflow-x-auto rounded-md border">
              <table className="w-full text-sm">
                <thead className="bg-muted/50 text-left">
                  <tr>
                    <th className="px-4 py-3 font-medium">Reference ID</th>
                    <th className="px-4 py-3 font-medium">User ID</th>
                    <th className="px-4 py-3 font-medium">Process</th>
                    <th className="px-4 py-3 font-medium">Created At</th>
                    <th className="px-4 py-3 font-medium">Status</th>
                    <th className="px-4 py-3 font-medium">Consent Status</th>
                  </tr>
                </thead>
                <tbody>
                  {recentNotices.map((notice) => (
                    <tr key={notice.publicId} className="border-t">
                      <td className="max-w-48 truncate px-4 py-3 font-mono text-xs">
                        {notice.referenceId || "-"}
                      </td>
                      <td className="max-w-48 truncate px-4 py-3 font-mono text-xs">
                        {notice.dataPrincipalId}
                      </td>
                      <td className="px-4 py-3">
                        {notice.businessProcess.name}
                      </td>
                      <td className="whitespace-nowrap px-4 py-3 text-muted-foreground">
                        {formatDate(notice.createdAt)}
                      </td>
                      <td className="px-4 py-3">
                        <Badge variant="secondary">
                          {formatStatus(notice.status)}
                        </Badge>
                      </td>
                      <td className="px-4 py-3">
                        {notice.consentStatus ? (
                          <Badge
                            variant="outline"
                            className={
                              notice.consentStatus === "accepted"
                                ? "border-green-300 text-green-700"
                                : "border-red-300 text-red-700"
                            }
                          >
                            {formatStatus(notice.consentStatus)}
                          </Badge>
                        ) : (
                          <span className="text-muted-foreground">-</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
