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

import { WebhookLogWithRelations } from "@/actions/webhook-logs";
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
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { WebhookDeliveryStatus } from "@prisma/client";
import { AlertCircle, CheckCircle2, Clock, XCircle } from "lucide-react";
import { useState } from "react";

interface WebhookLogsTableProps {
  logs: WebhookLogWithRelations[];
}

function getStatusBadge(status: WebhookDeliveryStatus) {
  const config = {
    DELIVERED: {
      variant: "default" as const,
      icon: CheckCircle2,
      className: "bg-green-500 hover:bg-green-600",
    },
    FAILED: {
      variant: "destructive" as const,
      icon: XCircle,
      className: "",
    },
    TIMEOUT: {
      variant: "secondary" as const,
      icon: Clock,
      className: "bg-orange-500 hover:bg-orange-600 text-white",
    },
    PENDING: {
      variant: "outline" as const,
      icon: AlertCircle,
      className: "",
    },
  };

  const { variant, icon: Icon, className } = config[status];

  return (
    <Badge variant={variant} className={className}>
      <Icon className="h-3 w-3 mr-1" />
      {status.toLowerCase()}
    </Badge>
  );
}

function getEventTypeBadge(eventType: string) {
  const colors: Record<string, string> = {
    CONSENT_CREATED:
      "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
    CONSENT_REVOKED:
      "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200",
    CONSENT_EXPIRED:
      "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200",
    CONSENT_UPDATED:
      "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200",
    CONSENT_ARTIFACTS_CREATED_OR_UPDATED:
      "bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200",
    NOTICE_CREATED:
      "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
    NOTICE_SUBMITTED:
      "bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-200",
    DATA_RETENTION_ACTION:
      "bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-200",
  };

  return (
    <Badge variant="outline" className={colors[eventType] || ""}>
      {eventType.replace(/_/g, " ")}
    </Badge>
  );
}

function getResponseTimeColor(responseTime: number | null) {
  if (!responseTime) return "text-muted-foreground";
  if (responseTime < 500) return "text-green-600 dark:text-green-400";
  if (responseTime < 2000) return "text-orange-600 dark:text-orange-400";
  return "text-red-600 dark:text-red-400";
}

function truncateUrl(url: string, maxLength = 40) {
  if (url.length <= maxLength) return url;
  return url.substring(0, maxLength - 3) + "...";
}

function formatInIst(date: Date | string, includeYear = false) {
  return new Intl.DateTimeFormat("en-IN", {
    timeZone: "Asia/Kolkata",
    month: includeYear ? "numeric" : "short",
    day: "numeric",
    year: includeYear ? "numeric" : undefined,
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  }).format(new Date(date));
}

export function WebhookLogsTable({ logs }: WebhookLogsTableProps) {
  const [selectedLog, setSelectedLog] =
    useState<WebhookLogWithRelations | null>(null);

  return (
    <>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Timestamp</TableHead>
              <TableHead>Event Type</TableHead>
              {/* <TableHead>Endpoint</TableHead> */}
              <TableHead>Target</TableHead>
              {/*
              <TableHead>Status</TableHead>
              <TableHead className="text-right">HTTP</TableHead>
              <TableHead className="text-right">Time (ms)</TableHead>
              <TableHead>Error</TableHead>
              */}
            </TableRow>
          </TableHeader>
          <TableBody>
            {logs.length === 0 ? (
              <TableRow>
                <TableCell
                  colSpan={3}
                  className="text-center text-muted-foreground"
                >
                  No webhook logs found
                </TableCell>
              </TableRow>
            ) : (
              logs.map((log) => (
                <TableRow
                  key={log.id}
                  className="cursor-pointer hover:bg-muted/50"
                  onClick={() => setSelectedLog(log)}
                >
                  <TableCell className="font-mono text-xs">
                    {formatInIst(log.attemptedAt)}
                  </TableCell>
                  <TableCell>{getEventTypeBadge(log.eventType)}</TableCell>
                  {/* <TableCell>
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <span className="text-sm">
                            {truncateUrl(log.webhook.endpointUrl)}
                          </span>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>{log.webhook.endpointUrl}</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </TableCell> */}
                  <TableCell>
                    <div className="flex flex-col gap-1">
                      <Badge
                        variant={
                          log.webhook.targetType === "DATA_PROCESSOR"
                            ? "secondary"
                            : "outline"
                        }
                        className="w-fit text-xs"
                      >
                        {log.webhook.targetType === "DATA_PROCESSOR"
                          ? "Processor"
                          : "Fiduciary"}
                      </Badge>
                      {log.webhook.dataProcessor && (
                        <span className="text-xs text-muted-foreground">
                          {log.webhook.dataProcessor.brandName}
                        </span>
                      )}
                    </div>
                  </TableCell>
                  {/*
                  <TableCell>{getStatusBadge(log.status)}</TableCell>
                  <TableCell className="text-right font-mono text-sm">
                    {log.httpStatus ?? "-"}
                  </TableCell>
                  <TableCell
                    className={`text-right font-mono text-sm font-semibold ${getResponseTimeColor(log.responseTime)}`}
                  >
                    {log.responseTime?.toLocaleString() ?? "-"}
                  </TableCell>
                  <TableCell className="max-w-[200px]">
                    {log.errorMessage ? (
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <span className="text-xs text-red-600 dark:text-red-400 truncate block">
                              {log.errorMessage.substring(0, 50)}
                              {log.errorMessage.length > 50 && "..."}
                            </span>
                          </TooltipTrigger>
                          <TooltipContent className="max-w-md">
                            <p className="whitespace-pre-wrap">{log.errorMessage}</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    ) : (
                      <span className="text-muted-foreground text-xs">-</span>
                    )}
                  </TableCell>
                  */}
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>

      {/* Detail Dialog */}
      <Dialog open={!!selectedLog} onOpenChange={() => setSelectedLog(null)}>
        <DialogContent className="max-w-[90vw] sm:max-w-3xl max-h-[80vh] overflow-hidden flex flex-col">
          <DialogHeader>
            <DialogTitle>Webhook Delivery Details</DialogTitle>
            <DialogDescription className="break-all">
              Event ID: {selectedLog?.eventId}
            </DialogDescription>
          </DialogHeader>
          {selectedLog && (
            <div className="space-y-4 overflow-y-auto pr-2">
              <div className="grid grid-cols-2 gap-4">
                {/*
                <div>
                  <p className="text-sm font-medium">Status</p>
                  <div className="mt-1">{getStatusBadge(selectedLog.status)}</div>
                </div>
                */}
                <div>
                  <p className="text-sm font-medium">Event Type</p>
                  <div className="mt-1">
                    {getEventTypeBadge(selectedLog.eventType)}
                  </div>
                </div>
                {/*
                <div>
                  <p className="text-sm font-medium">HTTP Status</p>
                  <p className="mt-1 font-mono">{selectedLog.httpStatus ?? "N/A"}</p>
                </div>
                */}
                <div>
                  <p className="text-sm font-medium">Response Time</p>
                  <p
                    className={`mt-1 font-mono ${getResponseTimeColor(selectedLog.responseTime)}`}
                  >
                    {selectedLog.responseTime
                      ? `${selectedLog.responseTime.toLocaleString()}ms`
                      : "N/A"}
                  </p>
                </div>
                <div>
                  <p className="text-sm font-medium">Target Type</p>
                  <p className="mt-1">{selectedLog.webhook.targetType}</p>
                </div>
                {selectedLog.webhook.dataProcessor && (
                  <div>
                    <p className="text-sm font-medium">Data Processor</p>
                    <p className="mt-1">
                      {selectedLog.webhook.dataProcessor.legalName}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {selectedLog.webhook.dataProcessor.ouId}
                    </p>
                  </div>
                )}
              </div>

              {/* <div>
                <p className="text-sm font-medium">Endpoint URL</p>
                <div className="mt-1 font-mono text-sm break-all overflow-wrap-anywhere">
                  {selectedLog.webhook.endpointUrl}
                </div>
              </div> */}

              <div>
                <p className="text-sm font-medium">Attempted At</p>
                <p className="mt-1 font-mono text-sm">
                  {formatInIst(selectedLog.attemptedAt, true)}
                </p>
              </div>

              {/* {selectedLog.errorMessage && (
                <div>
                  <p className="text-sm font-medium text-red-600 dark:text-red-400">
                    Error Message
                  </p>
                  <p className="mt-1 text-sm bg-red-50 dark:bg-red-950 p-3 rounded border border-red-200 dark:border-red-800 whitespace-pre-wrap break-words">
                    {selectedLog.errorMessage}
                  </p>
                </div>
              )} */}

              <div>
                <p className="text-sm font-medium mb-2">Payload</p>
                <div className="bg-muted p-4 rounded overflow-x-auto">
                  <pre className="text-xs whitespace-pre-wrap break-all min-w-0">
                    {JSON.stringify(selectedLog.payload, null, 2)}
                  </pre>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
