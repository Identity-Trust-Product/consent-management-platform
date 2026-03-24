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

import { getUserAuditLogs, getResourceNames } from "@/actions/admin";
import { Button } from "@/components/ui/button";
import { Calendar as CalendarComponent } from "@/components/ui/calendar";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import {
  MultiSelect,
  MultiSelectContent,
  MultiSelectGroup,
  MultiSelectItem,
  MultiSelectTrigger,
  MultiSelectValue,
} from "@/components/ui/multi-select";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  AVAILABLE_ACTIONS,
  AVAILABLE_RESOURCES,
  formatActionWithResource,
  getActionIcon,
} from "@/lib/utils/audit-helpers";
import { format, endOfDay, startOfDay } from "date-fns";
import {
  Activity,
  ArrowDown,
  ArrowUp,
  ArrowUpDown,
  Calendar,
  CheckCircle2,
  ChevronDown,
  Clock,
  Download,
  FileText,
  Layers,
  Loader2,
  RefreshCw,
  Search,
  X,
} from "lucide-react";
import React, { useEffect, useState, useMemo } from "react";
import { toast } from "sonner";

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

interface UserAuditLogsDialogProps {
  isOpen: boolean;
  onClose: () => void;
  userId: string;
  userName: string | null;
}

export function UserAuditLogsDialog({
  isOpen,
  onClose,
  userId,
  userName,
}: UserAuditLogsDialogProps) {
  const [logs, setLogs] = useState<AuditLog[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [total, setTotal] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  // Filter states
  const [searchQuery, setSearchQuery] = useState("");
  const [actionFilters, setActionFilters] = useState<string[]>([]);
  const [resourceFilters, setResourceFilters] = useState<string[]>([]);

  // Sorting state
  const [sortColumn, setSortColumn] = useState<string | null>(null);
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("desc");
  const [dateRange, setDateRange] = useState<{
    from: Date | undefined;
    to: Date | undefined;
  }>({ from: undefined, to: undefined });
  const [tempDateRange, setTempDateRange] = useState<{
    from: Date | undefined;
    to: Date | undefined;
  }>({ from: undefined, to: undefined });
  const [isDateFilterOpen, setIsDateFilterOpen] = useState(false);

  // Resource names cache
  const [resourceNames, setResourceNames] = useState<{ [key: string]: string }>(
    {}
  );

  const PAGE_SIZE = 20;

  useEffect(() => {
    if (isOpen) {
      setCurrentPage(1);
      fetchLogs(1);
    }
  }, [isOpen, userId, searchQuery, actionFilters, resourceFilters, dateRange]);

  const fetchLogs = async (page: number = 1) => {
    if (isLoading) return;

    setIsLoading(true);
    const offset = (page - 1) * PAGE_SIZE;

    try {
      // Only pass single filter to server if exactly one is selected
      // Otherwise fetch all and filter client-side
      const result = await getUserAuditLogs(userId, {
        search: searchQuery || undefined,
        action: actionFilters.length === 1 ? actionFilters[0] : undefined,
        resource: resourceFilters.length === 1 ? resourceFilters[0] : undefined,
        dateFrom: dateRange.from
          ? startOfDay(dateRange.from)
          : undefined,
        dateTo: dateRange.to ? endOfDay(dateRange.to) : undefined,
        limit: PAGE_SIZE,
        offset: offset,
      });

      if (result.success && result.data) {
        setLogs(result.data.logs);
        setTotal(result.data.total);
        setCurrentPage(page);

        // Fetch resource names for new logs
        fetchResourceNamesForLogs(result.data.logs);
      } else {
        toast.error(result.message || "Failed to fetch audit logs");
      }
    } catch (error) {
      console.error("Error fetching audit logs:", error);
      toast.error("An error occurred while fetching audit logs");
    } finally {
      setIsLoading(false);
    }
  };

  const fetchResourceNamesForLogs = async (newLogs: AuditLog[]) => {
    // Collect unique resource items that we don't already have
    const resourceItems = newLogs
      .filter(log => {
        if (!log.resourceId) return false;
        const cacheKey = `${log.resource}:${log.resourceId}`;
        return !resourceNames[cacheKey];
      })
      .map(log => ({
        resource: log.resource,
        resourceId: log.resourceId!,
      }));

    if (resourceItems.length > 0) {
      try {
        const result = await getResourceNames(resourceItems);
        if (result.success && result.data) {
          setResourceNames(prev => ({ ...prev, ...result.data }));
        }
      } catch (error) {
        console.error("Error fetching resource names:", error);
      }
    }
  };

  const handleApplyDateFilter = () => {
    setDateRange(tempDateRange);
    setIsDateFilterOpen(false);
  };

  const handleClearDateFilter = () => {
    setTempDateRange({ from: undefined, to: undefined });
    setDateRange({ from: undefined, to: undefined });
    setIsDateFilterOpen(false);
  };

  const handleQuickDateFilter = (days: number) => {
    const to = new Date();
    const from = new Date();
    from.setDate(from.getDate() - days);
    setTempDateRange({ from, to });
    setDateRange({ from, to });
    setIsDateFilterOpen(false);
  };

  const clearFilters = () => {
    setSearchQuery("");
    setActionFilters([]);
    setResourceFilters([]);
    setDateRange({ from: undefined, to: undefined });
    setTempDateRange({ from: undefined, to: undefined });
    setSortColumn(null);
    setSortDirection("desc");
  };

  const hasActiveFilters =
    searchQuery !== "" ||
    actionFilters.length > 0 ||
    resourceFilters.length > 0 ||
    dateRange.from !== undefined ||
    dateRange.to !== undefined;

  // Client-side filtering for multi-select
  const filteredLogs = React.useMemo(() => {
    let filtered = logs;

    // Filter by multiple actions
    if (actionFilters.length > 1) {
      filtered = filtered.filter(log => actionFilters.includes(log.action));
    }

    // Filter by multiple resources
    if (resourceFilters.length > 1) {
      filtered = filtered.filter(log => resourceFilters.includes(log.resource));
    }

    return filtered;
  }, [logs, actionFilters, resourceFilters]);

  // Check if we need client-side filtering
  const isClientFiltering = actionFilters.length > 1 || resourceFilters.length > 1;

  // Pagination calculations
  const totalPages = Math.ceil(total / PAGE_SIZE);
  const displayTotal = isClientFiltering ? filteredLogs.length : total;

  // Client-side sorting
  const sortedLogs = React.useMemo(() => {
    if (!sortColumn) return filteredLogs;

    return [...filteredLogs].sort((a, b) => {
      let aVal: any;
      let bVal: any;

      switch (sortColumn) {
        case "action":
          aVal = a.action;
          bVal = b.action;
          break;
        case "resource":
          aVal = a.resource;
          bVal = b.resource;
          break;
        case "timestamp":
          aVal = new Date(a.createdAt).getTime();
          bVal = new Date(b.createdAt).getTime();
          break;
        case "status":
          aVal = a.status;
          bVal = b.status;
          break;
        default:
          return 0;
      }

      if (aVal < bVal) return sortDirection === "asc" ? -1 : 1;
      if (aVal > bVal) return sortDirection === "asc" ? 1 : -1;
      return 0;
    });
  }, [filteredLogs, sortColumn, sortDirection]);

  const handleSort = (column: string) => {
    if (sortColumn === column) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortColumn(column);
      setSortDirection("asc");
    }
  };

  const SortIcon = ({ column }: { column: string }) => {
    if (sortColumn !== column) return <ArrowUpDown className="h-3.5 w-3.5 opacity-50" />;
    return sortDirection === "asc" ? (
      <ArrowUp className="h-3.5 w-3.5" />
    ) : (
      <ArrowDown className="h-3.5 w-3.5" />
    );
  };

  const handleExport = () => {
    // Export to CSV
    const csv = [
      ['Action', 'Resource', 'Resource Name', 'Timestamp', 'Status'].join(','),
      ...sortedLogs.map(log => {
        const resourceName = log.resourceId ? resourceNames[`${log.resource}:${log.resourceId}`] || log.resourceId : '';
        return [
          formatActionWithResource(log.action, log.resource),
          log.resource,
          resourceName,
          format(new Date(log.createdAt), 'PPp'),
          log.status
        ].join(',');
      })
    ].join('\n');

    const blob = new Blob([csv], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `activity-logs-${userName || 'user'}-${format(new Date(), 'yyyy-MM-dd')}.csv`;
    a.click();
    URL.revokeObjectURL(url);
    toast.success('Exported activity logs');
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="!max-w-[95vw] !w-[95vw] h-[96vh] flex flex-col p-0 gap-0">
        <DialogHeader className="px-6 pt-6 pb-4 border-b bg-muted/20 flex-shrink-0">
          <div className="flex items-start justify-between gap-4">
            <div>
              <DialogTitle className="text-2xl">
                Activity Logs - {userName || "User"}
              </DialogTitle>
              <DialogDescription>
                View all user actions and system interactions
              </DialogDescription>
            </div>
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => {
                  setCurrentPage(1);
                  fetchLogs(1);
                }}
                className="gap-2"
              >
                <RefreshCw className="h-4 w-4" />
                Refresh
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={handleExport}
                disabled={logs.length === 0}
                className="gap-2"
              >
                <Download className="h-4 w-4" />
                Export CSV
              </Button>
            </div>
          </div>
        </DialogHeader>

        <div className="flex-1 flex flex-col overflow-hidden">
          {/* Filters */}
          <div className="px-6 py-4 border-b bg-muted/20 flex-shrink-0">
            <div className="flex items-start gap-3 flex-wrap">
              {/* Search */}
              <div className="relative flex-1 min-w-[200px]">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  placeholder="Search by resource, action, or ID..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>

              {/* Action Filter */}
              <MultiSelect
                values={actionFilters}
                onValuesChange={setActionFilters}
              >
                <MultiSelectTrigger className="w-[200px] max-h-[60px] overflow-y-auto">
                  <MultiSelectValue placeholder="All Actions" />
                </MultiSelectTrigger>
                <MultiSelectContent>
                  <MultiSelectGroup>
                    {AVAILABLE_ACTIONS.map((action) => (
                      <MultiSelectItem key={action.value} value={action.value}>
                        {action.label}
                      </MultiSelectItem>
                    ))}
                  </MultiSelectGroup>
                </MultiSelectContent>
              </MultiSelect>

              {/* Resource Filter */}
              <MultiSelect
                values={resourceFilters}
                onValuesChange={setResourceFilters}
              >
                <MultiSelectTrigger className="w-[200px] max-h-[60px] overflow-y-auto">
                  <MultiSelectValue placeholder="All Resources" />
                </MultiSelectTrigger>
                <MultiSelectContent>
                  <MultiSelectGroup>
                    {AVAILABLE_RESOURCES.map((resource) => (
                      <MultiSelectItem key={resource.value} value={resource.value}>
                        {resource.label}
                      </MultiSelectItem>
                    ))}
                  </MultiSelectGroup>
                </MultiSelectContent>
              </MultiSelect>

              {/* Date Range Filter */}
              <Popover
                open={isDateFilterOpen}
                onOpenChange={setIsDateFilterOpen}
              >
                <PopoverTrigger asChild>
                  <Button variant="outline" size="default" className="gap-2">
                    <Calendar className="h-4 w-4" />
                    {dateRange.from && dateRange.to
                      ? `${format(dateRange.from, "dd/MM/yyyy")} - ${format(
                        dateRange.to,
                        "dd/MM/yyyy"
                      )}`
                      : "All Dates"}
                    <ChevronDown className="h-4 w-4 opacity-50" />
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <div className="p-4 space-y-4">
                    <div className="flex gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleQuickDateFilter(7)}
                      >
                        Last 7 days
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleQuickDateFilter(30)}
                      >
                        Last 30 days
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleQuickDateFilter(90)}
                      >
                        Last 90 days
                      </Button>
                    </div>
                    <CalendarComponent
                      mode="range"
                      selected={{ from: tempDateRange.from, to: tempDateRange.to }}
                      onSelect={(range) => {
                        if (range) {
                          setTempDateRange({ from: range.from, to: range.to });
                        }
                      }}
                      numberOfMonths={2}
                      disabled={(date) => date > new Date()}
                      initialFocus
                    />
                    <div className="flex gap-2">
                      <Button
                        variant="outline"
                        onClick={handleClearDateFilter}
                        className="flex-1"
                      >
                        Clear
                      </Button>
                      <Button
                        onClick={handleApplyDateFilter}
                        className="flex-1"
                      >
                        Apply
                      </Button>
                    </div>
                  </div>
                </PopoverContent>
              </Popover>

              {/* Clear Filters */}
              {hasActiveFilters && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={clearFilters}
                  className="gap-2"
                >
                  <X className="h-4 w-4" />
                  Clear Filters
                </Button>
              )}
            </div>
          </div>

          {/* Table */}
          <div className="flex-1 overflow-y-auto">
            <div className="px-6">
              <Table>
                <TableHeader className="sticky top-0 bg-background z-10 shadow-sm">
                  <TableRow>
                    <TableHead className="w-[240px]">
                      <button
                        className="flex items-center gap-2 hover:text-primary transition-colors"
                        onClick={() => handleSort("action")}
                      >
                        <Activity className="h-3.5 w-3.5" />
                        Action
                        <SortIcon column="action" />
                      </button>
                    </TableHead>
                    <TableHead className="w-[180px]">
                      <button
                        className="flex items-center gap-2 hover:text-primary transition-colors"
                        onClick={() => handleSort("resource")}
                      >
                        <Layers className="h-3.5 w-3.5" />
                        Resource Type
                        <SortIcon column="resource" />
                      </button>
                    </TableHead>
                    <TableHead className="min-w-[300px]">
                      <div className="flex items-center gap-2">
                        <FileText className="h-3.5 w-3.5" />
                        Resource Name
                      </div>
                    </TableHead>
                    <TableHead className="w-[220px]">
                      <button
                        className="flex items-center gap-2 hover:text-primary transition-colors"
                        onClick={() => handleSort("timestamp")}
                      >
                        <Clock className="h-3.5 w-3.5" />
                        Timestamp
                        <SortIcon column="timestamp" />
                      </button>
                    </TableHead>
                    <TableHead className="w-[100px] text-center">
                      <button
                        className="flex items-center justify-center gap-2 hover:text-primary transition-colors w-full"
                        onClick={() => handleSort("status")}
                      >
                        <CheckCircle2 className="h-3.5 w-3.5" />
                        Status
                        <SortIcon column="status" />
                      </button>
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {isLoading && logs.length === 0 ? (
                    // Loading skeleton
                    Array.from({ length: 10 }).map((_, i) => (
                      <TableRow key={i}>
                        <TableCell>
                          <Skeleton className="h-4 w-full" />
                        </TableCell>
                        <TableCell>
                          <Skeleton className="h-4 w-full" />
                        </TableCell>
                        <TableCell>
                          <Skeleton className="h-4 w-full" />
                        </TableCell>
                        <TableCell>
                          <Skeleton className="h-4 w-full" />
                        </TableCell>
                        <TableCell>
                          <Skeleton className="h-4 w-full" />
                        </TableCell>
                      </TableRow>
                    ))
                  ) : logs.length === 0 ? (
                    // Empty state
                    <TableRow>
                      <TableCell colSpan={5} className="h-32 text-center">
                        <div className="flex flex-col items-center justify-center gap-2">
                          <Search className="h-8 w-8 text-muted-foreground/30" />
                          <p className="text-sm text-muted-foreground font-medium">
                            No activity logs found
                          </p>
                          {hasActiveFilters && (
                            <p className="text-xs text-muted-foreground">
                              Try adjusting your filters
                            </p>
                          )}
                        </div>
                      </TableCell>
                    </TableRow>
                  ) : (
                    // Data rows
                    sortedLogs.map((log) => {
                      const Icon = getActionIcon(log.action);
                      const cacheKey = log.resourceId
                        ? `${log.resource}:${log.resourceId}`
                        : null;
                      const resourceName = cacheKey
                        ? resourceNames[cacheKey]
                        : null;

                      return (
                        <TableRow key={log.id}>
                          <TableCell>
                            <div className="flex items-center gap-2">
                              <div
                                className={`flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full ${log.status === "FAILURE"
                                    ? "bg-destructive/10 text-destructive"
                                    : "bg-primary/10 text-primary"
                                  }`}
                              >
                                <Icon className="h-4 w-4" />
                              </div>
                              <span className="text-sm font-medium">
                                {formatActionWithResource(
                                  log.action,
                                  log.resource
                                )}
                              </span>
                            </div>
                          </TableCell>
                          <TableCell className="text-sm text-muted-foreground">
                            {log.resource.replace(/_/g, " ")}
                          </TableCell>
                          <TableCell>
                            {log.action === "LOGIN" || log.action === "LOGOUT" ? (
                              <span className="text-muted-foreground/30 text-sm">-</span>
                            ) : resourceName ? (
                              <span className="font-mono text-sm bg-muted/30 px-2 py-0.5 rounded border border-border/50">
                                {resourceName}
                              </span>
                            ) : (
                              <Skeleton className="h-5 w-32" />
                            )}
                          </TableCell>
                          <TableCell className="text-sm text-muted-foreground whitespace-nowrap">
                            {format(new Date(log.createdAt), "PPp")}
                          </TableCell>
                          <TableCell className="text-center">
                            <span
                              className={`text-xs font-medium px-2 py-1 rounded-full ${log.status === "SUCCESS"
                                  ? "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400"
                                  : "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400"
                                }`}
                            >
                              {log.status}
                            </span>
                          </TableCell>
                        </TableRow>
                      );
                    })
                  )}
                </TableBody>
              </Table>
            </div>
          </div>

          {/* Pagination */}
          {!isClientFiltering && totalPages > 1 && (
            <div className="px-6 py-4 border-t flex items-center justify-between">
              <div className="text-sm text-muted-foreground">
                Page {currentPage} of {totalPages}
              </div>
              <div className="flex gap-2">
                <Button
                  onClick={() => fetchLogs(currentPage - 1)}
                  variant="outline"
                  size="sm"
                  disabled={currentPage === 1 || isLoading}
                >
                  Previous
                </Button>
                <Button
                  onClick={() => fetchLogs(currentPage + 1)}
                  variant="outline"
                  size="sm"
                  disabled={currentPage === totalPages || isLoading}
                >
                  Next
                </Button>
              </div>
            </div>
          )}
          {isClientFiltering && filteredLogs.length < logs.length && (
            <div className="px-6 py-2 text-center text-xs text-muted-foreground">
              Showing {filteredLogs.length} of {logs.length} results on this page
            </div>
          )}

          {isLoading && logs.length > 0 && (
            <div className="px-6 py-4 border-t flex justify-center">
              <Loader2 className="h-5 w-5 animate-spin text-muted-foreground" />
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
