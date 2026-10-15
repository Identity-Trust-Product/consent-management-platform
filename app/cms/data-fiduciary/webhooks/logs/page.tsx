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

import { getWebhookLogs } from "@/actions/webhook-logs";
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
    status?: WebhookDeliveryStatus | WebhookDeliveryStatus[];
    eventType?: WebhookEventType | WebhookEventType[];
    dateRange?: string;
    query?: string;
    targetType?: string;
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
  const requestedPage = Number(params.page || 1);
  const page =
    Number.isSafeInteger(requestedPage) && requestedPage > 0
      ? requestedPage
      : 1;
  const status = [params.status]
    .flat()
    .filter(
      (value): value is WebhookDeliveryStatus =>
        !!value && Object.values(WebhookDeliveryStatus).includes(value),
    );
  const eventType = [params.eventType]
    .flat()
    .filter(
      (value): value is WebhookEventType =>
        !!value && Object.values(WebhookEventType).includes(value),
    );
  const dateRange = params.dateRange || "7d";

  // Calculate date range
  let dateFrom: Date | undefined;
  const dateTo = new Date();

  switch (dateRange) {
    case "24h":
      dateFrom = new Date(dateTo.getTime() - 24 * 60 * 60 * 1000);
      break;
    case "7d":
      dateFrom = new Date(dateTo.getTime() - 7 * 24 * 60 * 60 * 1000);
      break;
    case "30d":
      dateFrom = new Date(dateTo.getTime() - 30 * 24 * 60 * 60 * 1000);
      break;
    case "90d":
      dateFrom = new Date(dateTo.getTime() - 90 * 24 * 60 * 60 * 1000);
      break;
    case "all":
      dateFrom = undefined;
      break;
    default:
      dateFrom = new Date(dateTo.getTime() - 7 * 24 * 60 * 60 * 1000);
  }

  // Fetch logs
  const logsResult = await getWebhookLogs({
    page,
    pageSize: 10,
    query: params.query,
    targetType:
      params.targetType === "DATA_FIDUCIARY" ||
      params.targetType === "DATA_PROCESSOR"
        ? params.targetType
        : undefined,
    status,
    eventType,
    dateFrom,
    dateTo,
    sortBy: "attemptedAt",
    sortOrder: "desc",
  });

  if (!logsResult.success) {
    return (
      <div className="px-5 py-6 sm:px-8 lg:px-10">
        <div className="text-center py-12">
          <p className="text-red-600">
            {logsResult.error || "Failed to load audit logs"}
          </p>
        </div>
      </div>
    );
  }

  const { logs, summary, pagination } = logsResult.data!;

  return (
    <div className="px-5 py-6 sm:px-8 lg:px-10">
      <div className="mx-auto pb-4">
        <WebhookLogsClient
          logs={logs}
          summary={summary}
          pagination={pagination}
        />
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
            <p className="mt-2 text-sm text-muted-foreground">
              Loading audit logs...
            </p>
          </div>
        </div>
      }
    >
      <WebhookLogsContent searchParams={searchParams} />
    </Suspense>
  );
}
