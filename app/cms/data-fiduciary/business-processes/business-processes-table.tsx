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

import { ActionButtonsGroup } from "@/components/ui/action-buttons";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { DataTable } from "@/components/ui/data-table";
import { Prisma } from "@prisma/client";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react";

export type BusinessProcess = {
  id: number;
  name: string;
  code: string;
  status: string;
  grantDescription: string;
  revokeDescription: string | null;
  reconsentDescription: string | null;
  defaultLanguage: string;
  supportedLanguages: string[];
  translations?: Prisma.JsonValue | null;
  legalDocuments: any;
  creationType: string | null;
  createdBy: string;
  createdAt: Date;
  updatedAt: Date;
  businessUnitId: number;
};

interface BusinessProcessesTableProps {
  data: BusinessProcess[];
  onEdit: (id: number) => void;
  onDelete: (id: number) => void;
  onView: (id: number) => void;
  filterValue?: string;
  canUpdate: boolean;
  canDelete: boolean;
}

export function BusinessProcessesTable({
  data,
  onEdit,
  onDelete,
  onView,
  filterValue = "",
  canUpdate,
  canDelete,
}: BusinessProcessesTableProps) {
  const columns: ColumnDef<BusinessProcess>[] = [
    {
      accessorKey: "name",
      header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Name
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        );
      },
      cell: ({ row }) => (
        <div className="capitalize">{row.getValue("name")}</div>
      ),
    },
    {
      accessorKey: "code",
      header: "Code",
      cell: ({ row }) => (
        <div className="font-mono text-sm">{row.getValue("code")}</div>
      ),
    },
    {
      accessorKey: "status",
      header: "Status",
      cell: ({ row }) => {
        const status = row.getValue("status") as string;
        return (
          <Badge
            variant={status === "published" ? "default" : "secondary"}
            className={
              status === "published"
                ? "border-green-200 bg-green-50 text-green-700 pointer-events-none"
                : ""
            }
          >
            {status?.toUpperCase() || "DRAFT"}
          </Badge>
        );
      },
    },
    {
      accessorKey: "supportedLanguages",
      header: "Languages",
      cell: ({ row }) => {
        const supportedLanguages = row.getValue(
          "supportedLanguages"
        ) as string[];
        const count =
          supportedLanguages?.filter((code) => code !== "en").length || 0;
        return count > 0 ? (
          <Badge variant="secondary">{count} languages</Badge>
        ) : (
          <span className="text-xs text-muted-foreground">No translations</span>
        );
      },
    },
    {
      accessorKey: "version",
      header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Version
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        );
      },
      cell: ({ row }) => {
        const version = row.getValue("version") as number;
        return <div className="font-mono text-sm">v{version}</div>;
      },
    },
    {
      accessorKey: "updatedAt",
      header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Last Updated At
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        );
      },
      cell: ({ row }) => {
        const date = row.getValue("updatedAt") as Date;
        return (
          <div className="text-sm">
            {date.toLocaleDateString("en-GB", {
              day: "2-digit",
              month: "2-digit",
              year: "numeric",
            })}
            ,{" "}
            {date.toLocaleTimeString("en-GB", {
              hour: "2-digit",
              minute: "2-digit",
              hour12: true,
            })}
          </div>
        );
      },
    },
    {
      id: "actions",
      header: "Actions",
      enableHiding: false,
      cell: ({ row, table }) => {
        const businessProcess = row.original;
        const isPublished = businessProcess.status === "published";
        const meta = table.options.meta as {
          onEdit?: (item: BusinessProcess) => void;
          onDelete?: (item: BusinessProcess) => void;
        };

        return (
          <ActionButtonsGroup
            onEdit={(e) => {
              e?.stopPropagation();
              onEdit(businessProcess.id);
            }}
            onDelete={(e) => {
              e?.stopPropagation();
              !isPublished && meta?.onDelete?.(businessProcess);
            }}
            deleteDisabled={isPublished}
          />
        );
      },
    },
  ];

  const handleDelete = (businessProcess: BusinessProcess) => {
    onDelete(businessProcess.id);
  };

  return (
    <DataTable
      data={data}
      columns={columns}
      onDelete={handleDelete}
      onRowClick={(businessProcess: BusinessProcess) =>
        onView(businessProcess.id)
      }
      filterValue={filterValue}
      filterKey="name"
      deleteDialogTitle="Delete Business Process"
      deleteDialogDescription={(businessProcess: BusinessProcess) =>
        `Are you sure you want to delete the business process "${businessProcess.name}"? This action cannot be undone.`
      }
      getItemName={(businessProcess: BusinessProcess) => businessProcess.name}
    />
  );
}
