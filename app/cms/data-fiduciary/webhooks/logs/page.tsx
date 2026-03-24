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

import { getWebhookLogs, getWebhookLogsAnalytics } from "@/actions/webhook-logs";
import { checkPermission } from "@/lib/rbac";
import { Resources, Actions } from "@/lib/constants/rbac";
import { Forbidden } from "@/components/forbidden";
import { Suspense } from "react";
import { WebhookLogsClient } from "./_components/webhook-logs-client";
import { Loader2 } from "lucide-react";
import { WebhookDeliveryStatus, WebhookEventType } from "@prisma/client";

export const dynamic = "force-dynamic";

interface PageProps {
  searchParams: Promise<{
    page?: string;
    status?: WebhookDeliveryStatus;
    eventType?: WebhookEventType;
    dateRange?: string;
  }>;
}

async function WebhookLogsContent({ searchParams }: PageProps) {
  // Check permissions
  const canRead = await checkPermission(Resources.WEBHOOK, Actions.READ);

  if (!canRead) {
    return <Forbidden requiredRole="privy_cgp_user" />;
  }

  // Await searchParams
  const params = await searchParams;

  // Parse filters
  const page = parseInt(params.page || "1");
  const status = params.status;
  const eventType = params.eventType;
  const dateRange = params.dateRange || "7d";

  // Calculate date range
  let dateFrom: Date | undefined;
  const dateTo = new Date();

  switch (dateRange) {
    case "24h":
      dateFrom = new Date();
      dateFrom.setHours(dateFrom.getHours() - 24);
      break;
    case "7d":
      dateFrom = new Date();
      dateFrom.setDate(dateFrom.getDate() - 7);
      break;
    case "30d":
      dateFrom = new Date();
      dateFrom.setDate(dateFrom.getDate() - 30);
      break;
    case "90d":
      dateFrom = new Date();
      dateFrom.setDate(dateFrom.getDate() - 90);
      break;
    case "all":
      dateFrom = undefined;
      break;
  }

  // Fetch logs
  const logsResult = await getWebhookLogs({
    page,
    pageSize: 50,
    status,
    eventType,
    dateFrom,
    dateTo,
    sortBy: "attemptedAt",
    sortOrder: "desc",
  });

  // Fetch analytics
  const analyticsResult = await getWebhookLogsAnalytics({
    dateFrom,
    dateTo,
  });

  if (!logsResult.success || !analyticsResult.success) {
    return (
      <div className="pt-4 px-6">
        <div className="text-center py-12">
          <p className="text-red-600">
            {logsResult.error || analyticsResult.error || "Failed to load webhook logs"}
          </p>
        </div>
      </div>
    );
  }

  const { logs, pagination } = logsResult.data!;
  const analytics = analyticsResult.data!;

  return (
    <div className="pt-4 px-6">
      <div className="mx-auto pb-4">
        <WebhookLogsClient logs={logs} analytics={analytics} pagination={pagination} />
      </div>
    </div>
  );
}

export default function WebhookLogsPage({ searchParams }: PageProps) {
  return (
    <Suspense
      fallback={
        <div className="flex items-center justify-center h-96">
          <div className="text-center">
            <Loader2 className="h-8 w-8 animate-spin text-primary mx-auto" />
            <p className="mt-2 text-sm text-muted-foreground">Loading webhook logs...</p>
          </div>
        </div>
      }
    >
      <WebhookLogsContent searchParams={searchParams} />
    </Suspense>
  );
}
