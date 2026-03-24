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

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react";
import * as React from "react";

import { getAvailableAgents, getGrievanceById } from "@/actions/grievances";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { GRIEVANCE_CATEGORY_LABELS } from "@/lib/constants/grievances";
import {
  GrievanceCategory,
  GrievanceStatus,
  GrievanceSeverity,
} from "@prisma/client";
import { format } from "date-fns";
import { GrievanceDetailClient } from "./grievance-detail-client";
import { StatusBadge } from "./status-badge";
import { Badge } from "@/components/ui/badge";
import {
  checkSlaStatus,
  getSlaStatusColor,
  getSlaStatusLabel,
} from "@/lib/utils/sla";

export type GrievanceTableData = {
  id: number;
  publicId: string;
  dataPrincipalId: string;
  metadata: any;
  category: GrievanceCategory;
  severity: GrievanceSeverity;
  subject: string;
  status: GrievanceStatus;
  createdAt: Date;
  updatedAt: Date;
  assignedTo: {
    id: string;
    name: string | null;
    email: string | null;
  } | null;
  businessProcess: {
    id: number;
    name: string;
  };
  slaTracker: {
    severity: GrievanceSeverity;
    startedAt: Date;
    expectedResolutionAt: Date;
    resolvedAt: Date | null;
    isBreached: boolean;
    breachedAt: Date | null;
    escalatedAt: Date | null;
  } | null;
};

interface GrievanceDataTableProps {
  data: GrievanceTableData[];
  pagination?: {
    total: number;
    page: number;
    pageSize: number;
    totalPages: number;
  } | null;
  onAssign?: (grievanceId: number) => void;
  openDetailSheetForId?: number | string | null;
  onDetailSheetClose?: () => void;
}

export function GrievanceDataTable({
  data,
  pagination,
  openDetailSheetForId,
  onAssign,
  onDetailSheetClose,
}: GrievanceDataTableProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({
      businessProcess: false, // Hide by default to reduce width
      assignedTo: true,
    });
  const [rowSelection, setRowSelection] = React.useState({});

  const [selectedGrievanceId, setSelectedGrievanceId] = React.useState<
    number | string | null
  >(null);
  const [isSheetOpen, setIsSheetOpen] = React.useState(false);
  const [grievanceDetail, setGrievanceDetail] = React.useState<any>(null);
  const [agents, setAgents] = React.useState<any[]>([]);
  const [isLoading, setIsLoading] = React.useState(false);

  // Handle opening detail sheet from query parameter
  React.useEffect(() => {
    if (openDetailSheetForId) {
      handleRowClick(openDetailSheetForId);
    }
  }, [openDetailSheetForId]);

  const columns: ColumnDef<GrievanceTableData>[] = [
    {
      accessorKey: "publicId",
      header: "Ref #",
      size: 100,
      cell: ({ row }) => (
        <div className="font-mono text-xs">
          {row.getValue<string>("publicId").slice(0, 8).toUpperCase()}
        </div>
      ),
    },
    {
      accessorKey: "metadata",
      header: "Principal",
      size: 200,
      cell: ({ row }) => {
        const metadata = row.getValue("metadata") as any;
        const name = metadata?.name || "N/A";
        const email = metadata?.email || row.original.dataPrincipalId;
        return (
          <div className="flex flex-col min-w-[150px]">
            <span className="font-medium text-sm truncate">{name}</span>
            <span className="text-xs text-muted-foreground truncate">
              {email}
            </span>
          </div>
        );
      },
    },
    {
      accessorKey: "subject",
      header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Subject
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        );
      },
      size: 250,
      cell: ({ row }) => (
        <div className="max-w-[250px] truncate text-sm">
          {row.getValue("subject")}
        </div>
      ),
    },
    {
      accessorKey: "category",
      header: "Category",
      size: 150,
      cell: ({ row }) => {
        const category = row.getValue("category") as GrievanceCategory;
        return (
          <div className="text-sm whitespace-nowrap">
            {GRIEVANCE_CATEGORY_LABELS[category]}
          </div>
        );
      },
    },
    {
      accessorKey: "severity",
      header: "Severity",
      size: 100,
      cell: ({ row }) => {
        const severity = row.getValue("severity") as GrievanceSeverity;
        const severityColors = {
          LOW: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
          MEDIUM:
            "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200",
          HIGH: "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200",
          CRITICAL: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200",
        };
        return (
          <Badge
            variant="outline"
            className={`${severityColors[severity]} text-xs whitespace-nowrap`}
          >
            {severity}
          </Badge>
        );
      },
    },
    {
      accessorKey: "slaTracker",
      header: "SLA",
      size: 110,
      cell: ({ row }) => {
        const slaTracker = row.getValue(
          "slaTracker"
        ) as GrievanceTableData["slaTracker"];
        if (!slaTracker) {
          return <span className="text-xs text-muted-foreground">N/A</span>;
        }
        const slaStatusInfo = checkSlaStatus(
          slaTracker.startedAt,
          slaTracker.expectedResolutionAt,
          slaTracker.resolvedAt,
          slaTracker.isBreached
        );
        const color = getSlaStatusColor(slaStatusInfo.status);
        const label = getSlaStatusLabel(slaStatusInfo.status);
        return (
          <Badge
            variant="outline"
            className={`${color} text-xs whitespace-nowrap`}
          >
            {label}
          </Badge>
        );
      },
    },
    {
      accessorKey: "status",
      header: "Status",
      size: 110,
      cell: ({ row }) => <StatusBadge status={row.getValue("status")} />,
    },
    {
      accessorKey: "assignedTo",
      header: "Assigned",
      size: 130,
      cell: ({ row }) => {
        const assignedTo = row.getValue(
          "assignedTo"
        ) as GrievanceTableData["assignedTo"];
        if (!assignedTo) {
          return (
            <span className="text-xs text-muted-foreground">Unassigned</span>
          );
        }
        return (
          <div className="text-sm truncate max-w-[120px]">
            {assignedTo.name || assignedTo.email || "Unknown"}
          </div>
        );
      },
    },
    {
      accessorKey: "businessProcess",
      header: "Process",
      size: 150,
      cell: ({ row }) => {
        const bp = row.getValue(
          "businessProcess"
        ) as GrievanceTableData["businessProcess"];
        return <div className="text-sm truncate max-w-[140px]">{bp.name}</div>;
      },
    },
    {
      accessorKey: "createdAt",
      header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Created
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        );
      },
      size: 140,
      cell: ({ row }) => {
        const date = row.getValue("createdAt") as Date;
        return <div className="text-sm">{format(new Date(date), "PPp")}</div>;
      },
    },
  ];

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    manualPagination: true,
    pageCount: pagination ? pagination.totalPages : -1,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  });

  const handleNextPage = () => {
    if (pagination && pagination.page < pagination.totalPages) {
      const params = new URLSearchParams(searchParams.toString());
      params.set("page", (pagination.page + 1).toString());
      router.push(`${pathname}?${params.toString()}`, { scroll: false });
    }
  };

  const handlePrevPage = () => {
    if (pagination && pagination.page > 1) {
      const params = new URLSearchParams(searchParams.toString());
      params.set("page", (pagination.page - 1).toString());
      router.push(`${pathname}?${params.toString()}`, { scroll: false });
    }
  };

  const handleRowClick = async (grievanceId: number | string) => {
    setSelectedGrievanceId(grievanceId);
    setIsSheetOpen(true);
    setIsLoading(true);

    try {
      const [grievanceResult, agentsResult] = await Promise.all([
        getGrievanceById(grievanceId),
        getAvailableAgents(),
      ]);

      if (grievanceResult.success && grievanceResult.data) {
        setGrievanceDetail(grievanceResult.data);
      }

      if (agentsResult.success) {
        setAgents(agentsResult.data);
      }
    } catch (error) {
      console.error("Error fetching grievance details:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSheetClose = () => {
    setIsSheetOpen(false);
    setSelectedGrievanceId(null);
    setGrievanceDetail(null);
    onDetailSheetClose?.();
  };

  return (
    <>
      <div className="w-full">
        <div className="rounded-md border overflow-hidden">
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                {table.getHeaderGroups().map((headerGroup) => (
                  <TableRow key={headerGroup.id}>
                    {headerGroup.headers.map((header) => {
                      return (
                        <TableHead key={header.id}>
                          {header.isPlaceholder
                            ? null
                            : flexRender(
                              header.column.columnDef.header,
                              header.getContext()
                            )}
                        </TableHead>
                      );
                    })}
                  </TableRow>
                ))}
              </TableHeader>
              <TableBody>
                {table.getRowModel().rows?.length ? (
                  table.getRowModel().rows.map((row) => (
                    <TableRow
                      key={row.id}
                      data-state={row.getIsSelected() && "selected"}
                      className="cursor-pointer hover:bg-muted/50"
                      onClick={() => handleRowClick(row.original.id)}
                    >
                      {row.getVisibleCells().map((cell) => (
                        <TableCell key={cell.id}>
                          {flexRender(
                            cell.column.columnDef.cell,
                            cell.getContext()
                          )}
                        </TableCell>
                      ))}
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell
                      colSpan={columns.length}
                      className="h-24 text-center"
                    >
                      No grievances found.
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>
        </div>
        <div className="flex items-center justify-end space-x-2 py-4">
          <div className="flex-1 text-sm text-muted-foreground">
            {pagination ? `${pagination.total} grievance(s) total` : `${data.length} grievance(s) total`}
          </div>
          <div className="space-x-2">
            <Button
              variant="outline"
              size="sm"
              onClick={handlePrevPage}
              disabled={!pagination || pagination.page <= 1}
            >
              Previous
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={handleNextPage}
              disabled={!pagination || pagination.page >= pagination.totalPages}
            >
              Next
            </Button>
          </div>
        </div>
      </div>

      <Sheet open={isSheetOpen} onOpenChange={handleSheetClose}>
        <SheetContent className="w-full sm:max-w-2xl overflow-y-auto">
          <SheetHeader className="pb-3 border-b">
            <SheetTitle className="text-2xl">Grievance Details</SheetTitle>
            <SheetDescription>
              View and manage grievance information
            </SheetDescription>
          </SheetHeader>

          {isLoading ? (
            <div className="flex items-center justify-center h-96">
              <div className="text-center">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto"></div>
                <p className="mt-2 text-sm text-muted-foreground">
                  Loading grievance details...
                </p>
              </div>
            </div>
          ) : grievanceDetail ? (
            <div className="mt-2">
              <GrievanceDetailClient
                grievance={grievanceDetail}
                agents={agents}
                canUpdate={!!onAssign}
              />
            </div>
          ) : (
            <div className="flex items-center justify-center h-96">
              <p className="text-sm text-muted-foreground">
                Failed to load grievance details.
              </p>
            </div>
          )}
        </SheetContent>
      </Sheet>
    </>
  );
}
