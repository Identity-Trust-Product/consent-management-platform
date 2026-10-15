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

import type { WebhookLogWithRelations } from "@/actions/webhook-logs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  MultiSelect,
  MultiSelectContent,
  MultiSelectGroup,
  MultiSelectItem,
  MultiSelectTrigger,
  MultiSelectValue,
} from "@/components/ui/multi-select";
import { WebhookEventType } from "@prisma/client";
import {
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  ClipboardList,
  RefreshCw,
  Search,
  ShieldAlert,
} from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { useRef, useState, useTransition } from "react";
import {
  AuditLogDetails,
  auditStatus,
  eventLabel,
  formatInIst,
  getAuditContext,
} from "./audit-log-details";

interface WebhookLogsClientProps {
  logs: WebhookLogWithRelations[];
  summary: {
    total: number;
    successful: number;
    failed: number;
    pending: number;
  };
  pagination: {
    total: number;
    page: number;
    pageSize: number;
    totalPages: number;
  };
}
// The Analytics tab stays disabled. Audit events and their details are shown together.
export function WebhookLogsClient({
  logs,
  summary,
  pagination,
}: WebhookLogsClientProps) {
  const router = useRouter();
  const params = useSearchParams();
  const [pending, startTransition] = useTransition();
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const selected = logs.find((log) => log.publicId === selectedId) ?? logs[0];
  const detailsRef = useRef<HTMLElement>(null);
  const navigate = (next: URLSearchParams) => {
    next.delete("tab");
    startTransition(() =>
      router.push(`?${next.toString()}`, { scroll: false }),
    );
  };
  const setFilter = (key: string, values: string[]) => {
    const next = new URLSearchParams(params.toString());
    next.delete(key);
    values.filter(Boolean).forEach((value) => next.append(key, value));
    next.set("page", "1");
    navigate(next);
  };
  const changePage = (page: number) => {
    const next = new URLSearchParams(params.toString());
    next.set("page", String(page));
    navigate(next);
  };
  const cards = [
    {
      label: "Total Events",
      value: summary.total,
      caption: summary.pending
        ? `${summary.pending.toLocaleString("en-IN")} pending delivery`
        : "Matching audit records",
      icon: ClipboardList,
      color: "bg-blue-50 text-blue-600",
    },
    {
      label: "Successful Events",
      value: summary.successful,
      caption: "Successfully delivered events",
      icon: CheckCircle2,
      color: "bg-emerald-50 text-emerald-600",
    },
    {
      label: "Failed Events",
      value: summary.failed,
      caption: "Failed or timed out deliveries",
      icon: ShieldAlert,
      color: "bg-orange-50 text-orange-600",
    },
  ];
  const selectClass =
    "h-10 w-full rounded-lg border border-input bg-white px-3 text-sm font-medium text-slate-800 outline-none focus-visible:ring-2 focus-visible:ring-ring";
  const labelClass =
    "mb-2 block text-[11px] font-bold uppercase tracking-wide text-muted-foreground";
  return (
    <div className="space-y-5" aria-busy={pending}>
      <div className="flex flex-wrap items-center justify-between gap-3">
        <p className="text-sm text-muted-foreground">
          Track consent and notice delivery events. All timestamps are in IST.
        </p>
        <div className="flex items-center gap-2">
          <label htmlFor="audit-date-range" className="sr-only">
            Date range
          </label>
          <select
            id="audit-date-range"
            className={selectClass}
            value={params.get("dateRange") || "7d"}
            onChange={(event) => setFilter("dateRange", [event.target.value])}
          >
            <option value="24h">Last 24 hours</option>
            <option value="7d">Last 7 days</option>
            <option value="30d">Last 30 days</option>
            <option value="90d">Last 90 days</option>
            <option value="all">All time</option>
          </select>
          <Button
            variant="outline"
            disabled={pending}
            onClick={() => startTransition(() => router.refresh())}
            aria-label="Refresh audit logs"
          >
            <RefreshCw className={pending ? "size-4 animate-spin" : "size-4"} />
            <span className="hidden sm:inline">Refresh</span>
          </Button>
        </div>
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        {cards.map((card) => (
          <div
            key={card.label}
            className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm"
          >
            <span
              className={`mb-3 grid size-10 place-items-center rounded-xl ${card.color}`}
            >
              <card.icon className="size-4" />
            </span>
            <p className="text-3xl font-bold tabular-nums text-slate-900">
              {card.value.toLocaleString("en-IN")}
            </p>
            <h2 className="mt-1 text-sm font-bold text-slate-900">
              {card.label}
            </h2>
            <p className="mt-2 text-xs text-muted-foreground">{card.caption}</p>
          </div>
        ))}
      </div>
      <div className="grid items-end gap-4 rounded-xl border border-slate-200 bg-white p-5 shadow-sm lg:grid-cols-[minmax(220px,1.7fr)_1fr_1fr_1.2fr]">
        <form
          key={params.get("query") || ""}
          onSubmit={(event) => {
            event.preventDefault();
            const data = new FormData(event.currentTarget);
            setFilter("query", [String(data.get("query") || "").trim()]);
          }}
        >
          <label htmlFor="audit-search" className={labelClass}>
            Search logs
          </label>
          <div className="flex gap-2">
            <Input
              id="audit-search"
              name="query"
              defaultValue={params.get("query") || ""}
              placeholder="Search event, ID, endpoint..."
              className="h-10 min-w-0 bg-white"
            />
            <Button
              type="submit"
              variant="outline"
              size="icon"
              className="size-10"
              disabled={pending}
              aria-label="Search logs"
            >
              <Search className="size-4" />
            </Button>
          </div>
        </form>
        <div>
          <label htmlFor="audit-status" className={labelClass}>
            Status
          </label>
          <MultiSelect
            values={params.getAll("status")}
            onValuesChange={(values) => setFilter("status", values)}
          >
            <MultiSelectTrigger
              id="audit-status"
              className="h-10 w-full bg-white"
            >
              <MultiSelectValue placeholder="All statuses" />
            </MultiSelectTrigger>
            <MultiSelectContent>
              <MultiSelectGroup>
                {["DELIVERED", "FAILED", "TIMEOUT", "PENDING"].map((status) => (
                  <MultiSelectItem key={status} value={status}>
                    {auditStatus(status).label}
                  </MultiSelectItem>
                ))}
              </MultiSelectGroup>
            </MultiSelectContent>
          </MultiSelect>
        </div>
        <div>
          <label htmlFor="audit-recipient" className={labelClass}>
            Recipient
          </label>
          <select
            id="audit-recipient"
            className={selectClass}
            value={params.get("targetType") || ""}
            onChange={(event) => setFilter("targetType", [event.target.value])}
          >
            <option value="">All recipients</option>
            <option value="DATA_FIDUCIARY">Data Fiduciary</option>
            <option value="DATA_PROCESSOR">Data Processor</option>
          </select>
        </div>
        <div>
          <label htmlFor="audit-action" className={labelClass}>
            Action
          </label>
          <MultiSelect
            values={params.getAll("eventType")}
            onValuesChange={(values) => setFilter("eventType", values)}
          >
            <MultiSelectTrigger
              id="audit-action"
              className="h-10 w-full bg-white"
            >
              <MultiSelectValue placeholder="All actions" />
            </MultiSelectTrigger>
            <MultiSelectContent>
              <MultiSelectGroup>
                {Object.values(WebhookEventType).map((type) => (
                  <MultiSelectItem key={type} value={type}>
                    {eventLabel(type)}
                  </MultiSelectItem>
                ))}
              </MultiSelectGroup>
            </MultiSelectContent>
          </MultiSelect>
        </div>
        {params.get("query") ||
        params.has("status") ||
        params.has("eventType") ||
        params.has("targetType") ? (
          <div className="flex justify-end lg:col-span-4">
            <button
              type="button"
              className="text-xs font-semibold text-primary hover:underline"
              onClick={() => {
                const next = new URLSearchParams(params.toString());
                ["query", "status", "eventType", "targetType"].forEach((key) =>
                  next.delete(key),
                );
                next.set("page", "1");
                navigate(next);
              }}
            >
              Clear search and filters
            </button>
          </div>
        ) : null}
      </div>
      <div
        className={`grid items-start gap-5 xl:grid-cols-[minmax(320px,0.85fr)_minmax(0,1.15fr)] ${pending ? "opacity-70" : ""}`}
      >
        <section
          className="min-w-0 rounded-xl border border-slate-200 bg-white p-4 shadow-sm sm:p-5"
          aria-label="Recent events"
        >
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-sm font-bold text-slate-900">Recent Events</h2>
            <span className="text-xs text-muted-foreground">
              {pagination.total.toLocaleString("en-IN")} matching
            </span>
          </div>
          <div className="space-y-2">
            {logs.length ? (
              logs.map((log) => {
                const state = auditStatus(log.status);
                const context = getAuditContext(log.payload);
                const active = selected?.publicId === log.publicId;
                return (
                  <button
                    key={log.publicId}
                    type="button"
                    aria-pressed={active}
                    aria-controls="audit-event-details"
                    onClick={() => {
                      setSelectedId(log.publicId);
                      if (window.matchMedia("(max-width: 1279px)").matches)
                        detailsRef.current?.scrollIntoView({
                          behavior: window.matchMedia(
                            "(prefers-reduced-motion: reduce)",
                          ).matches
                            ? "auto"
                            : "smooth",
                          block: "start",
                        });
                    }}
                    className={`flex w-full items-center gap-3 rounded-lg border p-3 text-left transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary ${active ? "border-blue-400 bg-blue-50" : "border-slate-200 bg-slate-50/70 hover:border-blue-200 hover:bg-blue-50/50"}`}
                  >
                    <span
                      className={`size-2 shrink-0 rounded-full ${state.dot}`}
                    />
                    <span className="min-w-0 flex-1">
                      <span className="block text-xs font-bold leading-5 text-slate-900">
                        {eventLabel(log.eventType)}
                      </span>
                      <span
                        className="mt-1 block truncate text-[11px] text-muted-foreground"
                        title={log.webhook.endpointUrl}
                      >
                        {context.actor ||
                          (log.webhook.targetType === "DATA_PROCESSOR"
                            ? "Processor"
                            : "Fiduciary")}{" "}
                        - {log.webhook.endpointUrl}
                      </span>
                    </span>
                    <span
                      className={`shrink-0 rounded-full px-2 py-1 text-[10px] font-semibold ${state.color}`}
                    >
                      {state.label}
                    </span>
                    <time
                      dateTime={new Date(log.attemptedAt).toISOString()}
                      className="hidden w-28 shrink-0 text-right text-[10px] font-semibold leading-5 text-muted-foreground sm:block"
                    >
                      {formatInIst(log.attemptedAt)}
                    </time>
                  </button>
                );
              })
            ) : (
              <div className="grid min-h-64 place-items-center rounded-lg border border-dashed p-6 text-center text-sm text-muted-foreground">
                No audit logs match these filters. Try another search or date
                range.
              </div>
            )}
          </div>
          <div className="mt-4 flex items-center justify-between border-t pt-4">
            <p className="text-xs font-semibold text-muted-foreground">
              {logs.length
                ? (pagination.page - 1) * pagination.pageSize + 1
                : 0}
              -
              {logs.length
                ? (pagination.page - 1) * pagination.pageSize + logs.length
                : 0}{" "}
              of {pagination.total.toLocaleString("en-IN")}
            </p>
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="icon"
                className="size-8"
                aria-label="Previous page"
                disabled={pending || pagination.page <= 1}
                onClick={() => changePage(pagination.page - 1)}
              >
                <ChevronLeft className="size-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="size-8"
                aria-label="Next page"
                disabled={pending || pagination.page >= pagination.totalPages}
                onClick={() => changePage(pagination.page + 1)}
              >
                <ChevronRight className="size-4" />
              </Button>
            </div>
          </div>
        </section>
        <section
          ref={detailsRef}
          id="audit-event-details"
          aria-label="Selected event details"
          className="min-w-0 scroll-mt-5 rounded-xl border border-slate-200 bg-white p-4 shadow-sm sm:p-5 xl:sticky xl:top-5"
        >
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-sm font-bold text-slate-900">Event Details</h2>
            {selected && (
              <span
                className={`rounded-full px-2 py-1 text-[10px] font-semibold ${auditStatus(selected.status).color}`}
              >
                {auditStatus(selected.status).label}
              </span>
            )}
          </div>
          {selected ? (
            <AuditLogDetails key={selected.publicId} log={selected} />
          ) : (
            <div className="grid min-h-64 place-items-center rounded-lg bg-slate-50 text-sm text-muted-foreground">
              Select an event to view its details.
            </div>
          )}
        </section>
      </div>
    </div>
  );
}
