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

import { EditButton, DeleteButton } from "@/components/ui/action-buttons";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { DataTable } from "@/components/ui/data-table";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react";
import { Prisma } from "@prisma/client";

export type ConsentPurpose = {
  id: number;
  name: string;
  code: string;
  version: number;
  status: string;
  description: string | null;
  supportedLanguages: string[];
  translations?: Prisma.JsonValue | null;
  createdBy: string;
  createdAt: Date;
  updatedAt: Date;
};

interface ConsentPurposesTableProps {
  data: ConsentPurpose[];
  onEdit: (id: number) => void;
  onDelete: (id: number) => void;
  onView: (id: number) => void;
  filterValue?: string;
  canUpdate: boolean;
  canDelete: boolean;
}

export function ConsentPurposesTable({
  data,
  onEdit,
  onDelete,
  onView,
  filterValue = "",
  canUpdate,
  canDelete,
}: ConsentPurposesTableProps) {
  const columns: ColumnDef<ConsentPurpose>[] = [
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
        <div>{row.getValue("name")}</div>
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
      cell: ({ row }) => (
        <Badge variant="outline" className="font-mono">
          v{row.getValue("version")}
        </Badge>
      ),
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
        const supportedLanguages = row.getValue("supportedLanguages") as string[];
        const count = supportedLanguages?.filter(code => code !== "en").length || 0;
        return count > 0 ? (
          <Badge variant="secondary">{count} languages</Badge>
        ) : (
          <span className="text-xs text-muted-foreground">No translations</span>
        );
      },
    },
    {
      id: "actions",
      header: "Actions",
      enableHiding: false,
      cell: ({ row, table }) => {
        const consentPurpose = row.original;
        const isPublished = consentPurpose.status === "published";
        const meta = table.options.meta as {
          onEdit?: (item: ConsentPurpose) => void;
          onDelete?: (item: ConsentPurpose) => void;
        };

        return (
          <div className="flex items-center gap-2">
            {canUpdate && (
              <EditButton
                onClick={(e) => {
                  e?.stopPropagation();
                  onEdit(consentPurpose.id);
                }}
              />
            )}
            {canDelete && (
              <DeleteButton
                onClick={(e) => {
                  e?.stopPropagation();
                  !isPublished && meta?.onDelete?.(consentPurpose);
                }}
                disabled={isPublished}
              />
            )}
          </div>
        );
      },
    },
  ];

  const handleDelete = (consentPurpose: ConsentPurpose) => {
    onDelete(consentPurpose.id);
  };

  return (
    <DataTable
      data={data}
      columns={columns}
      onDelete={handleDelete}
      onRowClick={(consentPurpose: ConsentPurpose) => onView(consentPurpose.id)}
      filterValue={filterValue}
      filterKey="name"
      deleteDialogTitle="Delete Consent Purpose"
      deleteDialogDescription={(consentPurpose: ConsentPurpose) =>
        `Are you sure you want to delete the consent purpose "${consentPurpose.name}"? This action cannot be undone.`
      }
      getItemName={(consentPurpose: ConsentPurpose) => consentPurpose.name}
    />
  );
}
