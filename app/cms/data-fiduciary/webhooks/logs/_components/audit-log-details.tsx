"use client";
import type { WebhookLogWithRelations } from "@/actions/webhook-logs";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ClipboardList, Copy } from "lucide-react";
import { toast } from "sonner";
import {
  auditStatus,
  eventLabel,
  formatInIst,
  getAuditContext,
} from "@/lib/audit-log-presentation";
export {
  auditStatus,
  eventLabel,
  formatInIst,
  getAuditContext,
} from "@/lib/audit-log-presentation";

export function EventBadge({ eventType }: { eventType: string }) {
  return (
    <Badge
      variant="outline"
      className="whitespace-normal border-blue-100 bg-blue-50 text-blue-700"
    >
      {eventLabel(eventType)}
    </Badge>
  );
}
function JsonSection({
  title,
  value,
  note,
}: {
  title: string;
  value: unknown;
  note?: string;
}) {
  const json = JSON.stringify(value, null, 2) ?? "null";
  return (
    <section className="min-w-0 overflow-hidden rounded-lg border border-slate-200">
      <div className="flex items-center justify-between gap-2 border-b bg-white px-3 py-2">
        <h3 className="text-xs font-bold text-slate-900">{title}</h3>
        <Button
          type="button"
          variant="ghost"
          size="sm"
          className="h-7 gap-1 text-xs text-muted-foreground"
          aria-label={`Copy ${title.toLowerCase()} JSON`}
          onClick={async () => {
            try {
              await navigator.clipboard.writeText(json);
              toast.success(`${title} copied`);
            } catch {
              toast.error("Could not copy JSON");
            }
          }}
        >
          <Copy className="size-3" />
          Copy
        </Button>
      </div>
      <pre className="max-h-80 overflow-auto whitespace-pre-wrap break-words bg-slate-50/70 p-3 font-mono text-[11px] leading-6 text-slate-700 [overflow-wrap:anywhere]">
        {json}
      </pre>
      {note && (
        <p className="border-t bg-white px-3 py-2 text-[11px] leading-5 text-muted-foreground">
          {note}
        </p>
      )}
    </section>
  );
}
export function AuditLogDetails({ log }: { log: WebhookLogWithRelations }) {
  const context = getAuditContext(log.payload);
  const state = auditStatus(log.status);
  const fields = [
    ["Actor", context.actor],
    ["Role", context.role],
    ["Entity", context.entity],
    ["Method", context.method],
    ["Configured endpoint", log.webhook.endpointUrl],
    ["Application", context.application],
    ["IP address", context.ip],
    ["Decision", context.decision],
    [
      "HTTP status",
      log.httpStatus != null ? String(log.httpStatus) : undefined,
    ],
    [
      "Response time",
      log.responseTime != null
        ? `${log.responseTime.toLocaleString("en-IN")} ms`
        : undefined,
    ],
  ];
  return (
    <div className="min-w-0 space-y-3">
      <div className="flex items-start gap-3 rounded-lg border border-slate-200 bg-slate-50/70 p-4">
        <span className="grid size-10 shrink-0 place-items-center rounded-lg bg-blue-50 text-primary">
          <ClipboardList className="size-4" />
        </span>
        <div className="min-w-0">
          <h3 className="text-base font-bold leading-6 text-slate-900">
            {eventLabel(log.eventType)}
          </h3>
          <p className="mt-1 text-xs leading-5 text-muted-foreground">
            Consent Management - {formatInIst(log.attemptedAt)}
          </p>
          <span
            className={`mt-2 inline-block rounded-full px-2 py-1 text-[10px] font-semibold ${state.color}`}
          >
            {state.label} delivery
          </span>
        </div>
      </div>
      <dl className="grid min-w-0 gap-2 sm:grid-cols-2">
        {fields.map(([label, value]) => (
          <div
            key={label}
            className="min-w-0 rounded-lg border border-slate-200 px-3 py-2.5"
          >
            <dt className="text-[10px] font-bold uppercase tracking-wide text-muted-foreground">
              {label}
            </dt>
            <dd
              className={`mt-1 break-words text-xs font-semibold leading-5 [overflow-wrap:anywhere] ${value == null ? "text-slate-400" : "text-slate-800"}`}
            >
              {value ?? "Not recorded"}
            </dd>
          </div>
        ))}
      </dl>
      {log.errorMessage && (
        <div className="rounded-lg border border-red-100 bg-red-50 px-3 py-3">
          <h3 className="text-xs font-bold text-red-700">Recorded error</h3>
          <p className="mt-1 whitespace-pre-wrap break-words text-xs leading-6 text-red-800 [overflow-wrap:anywhere]">
            {log.errorMessage}
          </p>
        </div>
      )}
      <JsonSection
        title="Request"
        value={log.payload}
        note="Original event payload recorded for delivery."
      />
      <JsonSection
        title="Response"
        value={{
          httpStatus: log.httpStatus,
          responseTimeMs: log.responseTime,
          errorMessage: log.errorMessage,
        }}
        note="Delivery diagnostics only. Response bodies are not stored in these audit logs."
      />
      <JsonSection
        title="Metadata"
        value={{
          logId: log.publicId,
          eventId: log.eventId,
          webhookId: log.webhook.publicId,
          eventType: log.eventType,
          targetType: log.webhook.targetType,
          attemptedAt: log.attemptedAt,
          ...(log.webhook.dataProcessor
            ? { processor: log.webhook.dataProcessor }
            : {}),
          ...(context.metadata !== undefined
            ? { eventMetadata: context.metadata }
            : {}),
        }}
        note="Original timestamps inside JSON are preserved; displayed event times use IST. Endpoint details reflect the current webhook configuration."
      />
    </div>
  );
}
