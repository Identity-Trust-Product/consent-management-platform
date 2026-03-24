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

import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DataTable } from "@/components/ui/data-table";
import { ActionButtonsGroup } from "@/components/ui/action-buttons";

export type PurposeOfProcessing = {
  id: number;
  name: string;
  code: string;
  description: string | null;
  createdAt: Date;
  updatedAt: Date;
};

interface PurposesOfProcessingTableProps {
  data: PurposeOfProcessing[];
  onEdit: (id: number) => void;
  onView: (id: number) => void;
  onDelete: (id: number) => void;
  filterValue?: string;
  canUpdate: boolean;
  canDelete: boolean;
}

export function PurposesOfProcessingTable({
  data,
  onView,
  onEdit,
  onDelete,
  filterValue = "",
  canUpdate,
  canDelete,
}: PurposesOfProcessingTableProps) {
  const columns: ColumnDef<PurposeOfProcessing>[] = [
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
        const purposeOfProcessing = row.original;
        const meta = table.options.meta as {
          onEdit?: (item: PurposeOfProcessing) => void;
          onDelete?: (item: PurposeOfProcessing) => void;
        };

        return (
          <ActionButtonsGroup
            onEdit={(e) => {
              e?.stopPropagation();
              onEdit(purposeOfProcessing.id);
            }}
            onDelete={(e) => {
              e?.stopPropagation();
              meta?.onDelete?.(purposeOfProcessing);
            }}
          />
        );
      },
    },
  ];

  const handleDelete = (purposeOfProcessing: PurposeOfProcessing) => {
    onDelete(purposeOfProcessing.id);
  };

  return (
    <DataTable
      data={data}
      columns={columns}
      onDelete={handleDelete}
      onRowClick={(purposeOfProcessing: PurposeOfProcessing) =>
        onView(purposeOfProcessing.id)
      }
      filterValue={filterValue}
      filterKey="name"
      deleteDialogTitle="Delete Purpose of Processing"
      deleteDialogDescription={(purposeOfProcessing: PurposeOfProcessing) =>
        `Are you sure you want to delete the purpose of processing "${purposeOfProcessing.name}"? This action cannot be undone.`
      }
      getItemName={(purposeOfProcessing: PurposeOfProcessing) =>
        purposeOfProcessing.name
      }
    />
  );
}
