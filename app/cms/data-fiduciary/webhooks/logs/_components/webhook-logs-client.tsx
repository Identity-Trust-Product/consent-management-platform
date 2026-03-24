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

import {
  WebhookLogWithRelations,
  WebhookLogsAnalytics,
} from "@/actions/webhook-logs";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  MultiSelect,
  MultiSelectContent,
  MultiSelectGroup,
  MultiSelectItem,
  MultiSelectTrigger,
  MultiSelectValue,
} from "@/components/ui/multi-select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { WebhookDeliveryStatus, WebhookEventType } from "@prisma/client";
import { Calendar, Loader2, RefreshCw, Settings } from "lucide-react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { WebhookAnalytics } from "./webhook-analytics";
import { WebhookLogsTable } from "./webhook-logs-table";

interface WebhookLogsClientProps {
  logs: WebhookLogWithRelations[];
  analytics: WebhookLogsAnalytics;
  pagination: {
    total: number;
    page: number;
    pageSize: number;
    totalPages: number;
  };
}

export function WebhookLogsClient({
  logs,
  analytics,
  pagination,
}: WebhookLogsClientProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isRefreshing, setIsRefreshing] = useState(false);

  const currentTab = searchParams.get("tab") || "analytics";
  const currentStatus = searchParams.getAll("status");
  const currentEventType = searchParams.getAll("eventType");
  const currentDateRange = searchParams.get("dateRange") || "7d";

  const handleRefresh = () => {
    setIsRefreshing(true);
    router.refresh();
    setTimeout(() => setIsRefreshing(false), 1000);
  };

  const updateFilter = (key: string, value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (value === "all") {
      params.delete(key);
    } else {
      params.set(key, value);
    }
    params.set("page", "1"); // Reset to first page
    router.push(`?${params.toString()}`);
  };

  const updateMultiFilter = (key: string, values: string[]) => {
    const params = new URLSearchParams();
    // Keep other params
    searchParams.forEach((value, k) => {
      if (k !== key && k !== "page") {
        params.append(k, value);
      }
    });
    // Add new values
    values.forEach((value) => {
      if (value) params.append(key, value);
    });
    params.set("page", "1"); // Reset to first page
    router.push(`?${params.toString()}`);
  };

  const handleTabChange = (value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("tab", value);
    router.push(`?${params.toString()}`);
  };

  return (
    <div className="space-y-6">
      {/* Header with filters */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm text-muted-foreground">
            {pagination.total.toLocaleString()} total delivery attempts
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" asChild>
            <Link href="/cms/data-fiduciary/webhooks">
              <Settings className="h-4 w-4 mr-2" />
              Configure Webhooks
            </Link>
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={handleRefresh}
            disabled={isRefreshing}
          >
            {isRefreshing ? (
              <Loader2 className="h-4 w-4 mr-2 animate-spin" />
            ) : (
              <RefreshCw className="h-4 w-4 mr-2" />
            )}
            Refresh
          </Button>
        </div>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-4">
        <div className="flex items-center gap-2">
          <Calendar className="h-4 w-4 text-muted-foreground" />
          <Select value={currentDateRange} onValueChange={(v) => updateFilter("dateRange", v)}>
            <SelectTrigger className="w-[140px]">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="24h">Last 24 hours</SelectItem>
              <SelectItem value="7d">Last 7 days</SelectItem>
              <SelectItem value="30d">Last 30 days</SelectItem>
              <SelectItem value="90d">Last 90 days</SelectItem>
              <SelectItem value="all">All time</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <MultiSelect
          values={currentStatus}
          onValuesChange={(v) => updateMultiFilter("status", v)}
        >
          <MultiSelectTrigger className="w-[180px]">
            <MultiSelectValue placeholder="All Status" />
          </MultiSelectTrigger>
          <MultiSelectContent>
            <MultiSelectGroup>
              <MultiSelectItem value="DELIVERED">Delivered</MultiSelectItem>
              <MultiSelectItem value="FAILED">Failed</MultiSelectItem>
              <MultiSelectItem value="TIMEOUT">Timeout</MultiSelectItem>
              <MultiSelectItem value="PENDING">Pending</MultiSelectItem>
            </MultiSelectGroup>
          </MultiSelectContent>
        </MultiSelect>

        <MultiSelect
          values={currentEventType}
          onValuesChange={(v) => updateMultiFilter("eventType", v)}
        >
          <MultiSelectTrigger className="w-[200px]">
            <MultiSelectValue placeholder="All Events" />
          </MultiSelectTrigger>
          <MultiSelectContent>
            <MultiSelectGroup>
              <MultiSelectItem value="CONSENT_CREATED">Consent Created</MultiSelectItem>
              <MultiSelectItem value="CONSENT_REVOKED">Consent Revoked</MultiSelectItem>
              <MultiSelectItem value="CONSENT_EXPIRED">Consent Expired</MultiSelectItem>
              <MultiSelectItem value="CONSENT_UPDATED">Consent Updated</MultiSelectItem>
              <MultiSelectItem value="CONSENT_ARTIFACTS_CREATED_OR_UPDATED">Consent Artifacts Updated</MultiSelectItem>
              <MultiSelectItem value="NOTICE_CREATED">Notice Created</MultiSelectItem>
              <MultiSelectItem value="NOTICE_SUBMITTED">Notice Submitted</MultiSelectItem>
              <MultiSelectItem value="DATA_RETENTION_ACTION">Data Retention Action</MultiSelectItem>
            </MultiSelectGroup>
          </MultiSelectContent>
        </MultiSelect>
      </div>

      {/* Tabs */}
      <Tabs value={currentTab} onValueChange={handleTabChange} className="space-y-4">
        <TabsList>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
          <TabsTrigger value="logs">
            Logs
            {pagination.total > 0 && (
              <span className="ml-2 rounded-full bg-muted px-2 py-0.5 text-xs">
                {pagination.total}
              </span>
            )}
          </TabsTrigger>
        </TabsList>

        <TabsContent value="analytics" className="space-y-4">
          <WebhookAnalytics analytics={analytics} />
        </TabsContent>

        <TabsContent value="logs" className="space-y-4">
          <WebhookLogsTable logs={logs} />

          {/* Pagination */}
          {pagination.totalPages > 1 && (
            <div className="flex items-center justify-between">
              <p className="text-sm text-muted-foreground">
                Page {pagination.page} of {pagination.totalPages}
              </p>
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  disabled={pagination.page === 1}
                  onClick={() => {
                    const params = new URLSearchParams(searchParams.toString());
                    params.set("page", String(pagination.page - 1));
                    router.push(`?${params.toString()}`);
                  }}
                >
                  Previous
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  disabled={pagination.page === pagination.totalPages}
                  onClick={() => {
                    const params = new URLSearchParams(searchParams.toString());
                    params.set("page", String(pagination.page + 1));
                    router.push(`?${params.toString()}`);
                  }}
                >
                  Next
                </Button>
              </div>
            </div>
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
}
