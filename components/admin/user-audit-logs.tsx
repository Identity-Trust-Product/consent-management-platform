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

import { getResourceNames } from "@/actions/admin";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import {
  formatActionWithResource,
  getActionIcon,
} from "@/lib/utils/audit-helpers";
import { formatDistanceToNow } from "date-fns";
import { ExternalLink, Activity } from "lucide-react";
import { useEffect, useState } from "react";

interface AuditLog {
  id: string;
  action: string;
  resource: string;
  resourceId: string | null;
  createdAt: Date;
  status: string;
  performedByUser: {
    id: string;
    name: string | null;
    email: string | null;
  } | null;
}

interface UserAuditLogsProps {
  userId: string;
  logs: AuditLog[];
  isLoading?: boolean;
  onViewAll: () => void;
}

export function UserAuditLogs({
  userId,
  logs,
  isLoading,
  onViewAll,
}: UserAuditLogsProps) {
  const [resourceNames, setResourceNames] = useState<{ [key: string]: string }>(
    {}
  );
  const [loadingNames, setLoadingNames] = useState(true);

  useEffect(() => {
    async function fetchResourceNames() {
      setLoadingNames(true);

      // Collect unique resource items
      const resourceItems = logs
        .filter(log => log.resourceId)
        .map(log => ({
          resource: log.resource,
          resourceId: log.resourceId!,
        }));

      if (resourceItems.length > 0) {
        try {
          const result = await getResourceNames(resourceItems);
          if (result.success && result.data) {
            setResourceNames(result.data);
          }
        } catch (error) {
          console.error("Error fetching resource names:", error);
        }
      }

      setLoadingNames(false);
    }

    if (logs.length > 0) {
      fetchResourceNames();
    } else {
      setLoadingNames(false);
    }
  }, [logs]);

  if (isLoading) {
    return (
      <div className="space-y-3">
        {[1, 2, 3, 4, 5].map((i) => (
          <div key={i} className="flex gap-3">
            <Skeleton className="h-10 w-10 rounded-full flex-shrink-0" />
            <div className="flex-1 space-y-2">
              <Skeleton className="h-4 w-3/4" />
              <Skeleton className="h-3 w-1/2" />
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (logs.length === 0) {
    return (
      <div className="rounded-lg border-2 border-dashed p-8 text-center">
        <Activity className="mx-auto h-12 w-12 text-muted-foreground/30 mb-3" />
        <p className="text-sm text-muted-foreground font-medium">
          No activity logs found
        </p>
        <p className="text-xs text-muted-foreground mt-1">
          User actions will appear here once they start using the system
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="relative max-h-[350px] overflow-y-auto pr-2 space-y-0">
        {logs.map((log, index) => {
          const Icon = getActionIcon(log.action);
          const cacheKey = log.resourceId
            ? `${log.resource}:${log.resourceId}`
            : null;
          const resourceName = cacheKey ? resourceNames[cacheKey] : null;

          return (
            <div key={log.id} className="relative flex gap-3 pb-4">
              {/* Connector line */}
              {index < logs.length - 1 && (
                <div className="absolute left-5 top-10 bottom-0 w-px bg-border" />
              )}

              {/* Icon */}
              <div
                className={`relative flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full ${log.status === "FAILURE"
                    ? "bg-destructive/10 text-destructive"
                    : "bg-primary/10 text-primary"
                  }`}
              >
                <Icon className="h-4 w-4" />
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0 pt-1">
                <div className="flex items-start justify-between gap-2">
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium leading-tight">
                      {formatActionWithResource(log.action, log.resource)}
                    </p>
                    {log.action !== "LOGIN" && log.action !== "LOGOUT" && (
                      <>
                        {resourceName && !loadingNames && (
                          <p className="text-xs text-muted-foreground mt-0.5 truncate">
                            {resourceName}
                          </p>
                        )}
                        {loadingNames && log.resourceId && (
                          <Skeleton className="h-3 w-24 mt-1" />
                        )}
                      </>
                    )}
                  </div>
                  <span className="text-xs text-muted-foreground whitespace-nowrap">
                    {formatDistanceToNow(new Date(log.createdAt), {
                      addSuffix: true,
                    })}
                  </span>
                </div>

                {log.status === "FAILURE" && (
                  <p className="text-xs text-destructive mt-1">Action failed</p>
                )}
              </div>
            </div>
          );
        })}
      </div>

      <Button
        variant="outline"
        className="w-full"
        onClick={onViewAll}
        size="sm"
      >
        <ExternalLink className="mr-2 h-4 w-4" />
        View All Activity Logs
      </Button>
    </div>
  );
}
