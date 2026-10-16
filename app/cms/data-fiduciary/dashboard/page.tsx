import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import prisma from "@/lib/prisma";
import {
  activeConsentFilter,
  activityWindowStart,
  INDIA_TIME_ZONE,
  buildTrend,
  noticeFilter,
} from "@/lib/dashboard-data";
import { checkPermission } from "@/lib/rbac";
import { Resources, Actions } from "@/lib/constants/rbac";
import { Forbidden } from "@/components/forbidden";
import { DashboardRefresh } from "./dashboard-refresh";
import {
  CheckCircle2,
  Clock3,
  FileText,
  ShieldCheck,
  ArrowUpRight,
  XCircle,
} from "lucide-react";
import Link from "next/link";
import { DashboardCharts } from "./dashboard-charts";

export const dynamic = "force-dynamic";

function formatDate(date: Date) {
  return (
    new Intl.DateTimeFormat("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
      timeZone: INDIA_TIME_ZONE,
    }).format(date) + " IST"
  );
}

function formatStatus(status: string) {
  return status.charAt(0).toUpperCase() + status.slice(1);
}

export default async function DashboardPage() {
  if (!(await checkPermission(Resources.NOTICE, Actions.READ)))
    return <Forbidden requiredRole="privy_cgp_user" />;
  const now = new Date();
  const activityStart = activityWindowStart(now);
  const [
    totalNotices,
    pendingNotices,
    completedNotices,
    acceptedNotices,
    rejectedNotices,
    activeConsents,
    otherNotices,
    recentNotices,
    activityNotices,
  ] = await Promise.all([
    prisma.notice.count(),
    prisma.notice.count({ where: noticeFilter("pending") }),
    prisma.notice.count({ where: { status: "completed" } }),
    prisma.notice.count({ where: { consentStatus: "accepted" } }),
    prisma.notice.count({ where: { consentStatus: "rejected" } }),
    prisma.consent.count({ where: activeConsentFilter(now) }),
    prisma.notice.count({ where: noticeFilter("other") }),
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
      where: {
        OR: [
          { createdAt: { gte: activityStart, lte: now } },
          { markCompletedTimestamp: { gte: activityStart, lte: now } },
          { updatedAt: { gte: activityStart, lte: now } },
        ],
      },
      select: {
        createdAt: true,
        consentStatus: true,
        markCompletedTimestamp: true,
        updatedAt: true,
        businessProcess: { select: { name: true } },
      },
    }),
  ]);

  const resolvedNotices = acceptedNotices + rejectedNotices;
  const acceptanceRate = resolvedNotices
    ? Math.round((acceptedNotices / resolvedNotices) * 100)
    : 0;

  const trend = buildTrend(activityNotices, now);
  const processCounts = new Map<string, number>();
  for (const notice of activityNotices) {
    if (notice.createdAt < activityStart || notice.createdAt > now) continue;
    const name = notice.businessProcess.name;
    processCounts.set(name, (processCounts.get(name) || 0) + 1);
  }
  const statuses = [
    { name: "Accepted", value: acceptedNotices },
    { name: "Rejected", value: rejectedNotices },
    { name: "Pending", value: pendingNotices },
    {
      name: "Other",
      value: otherNotices,
    },
  ];
  const processes = Array.from(processCounts, ([name, value]) => ({
    name,
    value,
  }))
    .sort((left, right) => right.value - left.value)
    .slice(0, 8);

  const metrics = [
    {
      href: "/cms/data-fiduciary/notices",
      title: "Total Notices",
      value: totalNotices,
      detail: `${completedNotices} completed`,
      icon: FileText,
      color: "bg-blue-100 text-blue-700",
    },
    {
      href: "/cms/data-fiduciary/notices?view=pending",
      title: "Pending Notices",
      value: pendingNotices,
      detail: "Awaiting user action",
      icon: Clock3,
      color: "bg-amber-100 text-amber-700",
    },
    {
      href: "/cms/data-fiduciary/notices?view=accepted",
      title: "Accepted Notices",
      value: acceptedNotices,
      detail: `${acceptanceRate}% acceptance rate`,
      icon: CheckCircle2,
      color: "bg-green-100 text-green-700",
    },
    {
      href: "/cms/data-fiduciary/notices?view=rejected",
      title: "Rejected Notices",
      value: rejectedNotices,
      detail: "Consent declined",
      icon: XCircle,
      color: "bg-red-100 text-red-700",
    },
    {
      href: "/cms/data-fiduciary/dashboard/active-consents",
      title: "Active Consents",
      value: activeConsents,
      detail: "Accepted and not expired",
      icon: ShieldCheck,
      color: "bg-indigo-100 text-indigo-700",
    },
  ];

  return (
    <div className="space-y-6 bg-background px-5 py-6 sm:px-8 lg:px-10">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">
          Live notice and consent records from your database.
        </p>
        <DashboardRefresh updatedAt={now.toISOString()} />
      </div>
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-5">
        {metrics.map((metric, index) => (
          <Link
            key={metric.title}
            href={metric.href}
            className="dashboard-metric group block rounded-2xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
            style={{ animationDelay: `${index * 65}ms` }}
          >
            <Card className="h-full overflow-hidden border-border bg-card py-0 transition-all duration-300 group-hover:border-primary/40 group-hover:shadow-lg">
              <CardContent className="p-5">
                <div className="flex items-center justify-between gap-3">
                  <p className="text-sm font-semibold text-muted-foreground">
                    {metric.title}
                  </p>
                  <div
                    className={`shrink-0 rounded-xl p-2.5 transition-transform duration-300 group-hover:scale-110 ${metric.color}`}
                  >
                    <metric.icon className="size-5" />
                  </div>
                </div>
                <p className="mt-5 text-4xl font-bold tracking-tight tabular-nums">
                  {metric.value.toLocaleString("en-IN")}
                </p>
                <p className="mt-2 min-h-10 text-xs leading-5 text-muted-foreground">
                  {metric.detail}
                </p>
                <div className="mt-4 flex items-center justify-between border-t pt-3 text-xs font-semibold text-primary">
                  View records
                  <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>

      <DashboardCharts
        trend={trend}
        statuses={statuses}
        processes={processes}
      />

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
                      <td className="max-w-48 truncate px-4 py-3">
                        <Link
                          href={`/cms/data-fiduciary/notices/${notice.publicId}`}
                          className="text-primary hover:underline"
                        >
                          {notice.referenceId || notice.publicId}
                        </Link>
                      </td>
                      <td className="max-w-48 truncate px-4 py-3">
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
                                ? "border-transparent bg-success-50 text-success-600"
                                : "border-transparent bg-red-50 text-red-700"
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
