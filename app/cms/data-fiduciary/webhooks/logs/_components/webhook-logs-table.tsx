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
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ArrowUpRight, FileSearch } from "lucide-react";
import { useRef, useState } from "react";
import { AuditLogDetails, EventBadge, formatInIst } from "./audit-log-details";

export function WebhookLogsTable({
  logs,
}: {
  logs: WebhookLogWithRelations[];
}) {
  const [selectedLog, setSelectedLog] =
    useState<WebhookLogWithRelations | null>(null);
  const opener = useRef<HTMLButtonElement | null>(null);
  return (
    <>
      <div className="space-y-3">
        <p className="text-xs text-muted-foreground">
          Select a log to inspect its event and delivery details. All timestamps
          are in IST.
        </p>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Timestamp (IST)</TableHead>
              <TableHead>Event type</TableHead>
              <TableHead>Target</TableHead>
              <TableHead className="text-right">Details</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {!logs.length ? (
              <TableRow>
                <TableCell
                  colSpan={4}
                  className="h-40 text-center text-muted-foreground"
                >
                  No audit logs found. Try changing the date range or filters.
                </TableCell>
              </TableRow>
            ) : (
              logs.map((log) => (
                <TableRow
                  key={log.publicId}
                  className="group cursor-pointer hover:bg-blue-50/50"
                  onClick={(event) => {
                    opener.current =
                      event.currentTarget.querySelector("button");
                    setSelectedLog(log);
                  }}
                >
                  <TableCell className="whitespace-nowrap text-xs">
                    {formatInIst(log.attemptedAt)}
                  </TableCell>
                  <TableCell>
                    <EventBadge eventType={log.eventType} />
                  </TableCell>
                  <TableCell>
                    <div className="flex flex-col gap-1">
                      <Badge variant="outline" className="w-fit">
                        {log.webhook.targetType === "DATA_PROCESSOR"
                          ? "Processor"
                          : "Fiduciary"}
                      </Badge>
                      {log.webhook.dataProcessor && (
                        <span className="text-xs text-muted-foreground">
                          {log.webhook.dataProcessor.brandName ||
                            log.webhook.dataProcessor.legalName}
                        </span>
                      )}
                    </div>
                  </TableCell>
                  <TableCell className="text-right">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-primary"
                      aria-label={`View ${log.eventType.replace(/_/g, " ").toLowerCase()} log from ${formatInIst(log.attemptedAt)}`}
                      onClick={(event) => {
                        event.stopPropagation();
                        opener.current = event.currentTarget;
                        setSelectedLog(log);
                      }}
                    >
                      View details
                      <ArrowUpRight className="size-4" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>
      <Dialog
        open={!!selectedLog}
        onOpenChange={(open) => {
          if (!open) setSelectedLog(null);
        }}
      >
        <DialogContent
          className="cms-theme flex max-h-[90dvh] flex-col gap-0 overflow-hidden rounded-2xl bg-[#f5f6f8] p-0 sm:max-w-4xl motion-reduce:animate-none"
          onCloseAutoFocus={(event) => {
            event.preventDefault();
            opener.current?.focus();
          }}
        >
          <DialogHeader className="shrink-0 border-b bg-white px-6 py-5 pr-12 text-left">
            <div className="mb-1 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-primary">
              <FileSearch className="size-4" />
              Audit trail
            </div>
            <DialogTitle className="text-xl font-bold text-slate-900">
              Audit Log Details
            </DialogTitle>
            <DialogDescription>
              Inspect the recorded event, its destination, and delivery outcome.
            </DialogDescription>
          </DialogHeader>
          <div className="min-h-0 flex-1 overflow-y-auto p-4 sm:p-6">
            {selectedLog && (
              <AuditLogDetails key={selectedLog.publicId} log={selectedLog} />
            )}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
