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
import { EditButton, DeleteButton } from "@/components/ui/action-buttons";

export type BusinessUnit = {
  id: number;
  name: string;
  code: string;
  active: boolean;
  createdAt: Date;
  updatedAt: Date;
};

interface BusinessUnitsTableProps {
  data: BusinessUnit[];
  onView: (id: number) => void;
  onEdit: (id: number) => void;
  onDelete: (id: number) => void;
  filterValue?: string;
  canUpdate: boolean;
  canDelete: boolean;
}

export function BusinessUnitsTable({
  data,
  onView,
  onEdit,
  onDelete,
  filterValue = "",
  canUpdate,
  canDelete,
}: BusinessUnitsTableProps) {
  const columns: ColumnDef<BusinessUnit>[] = [
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
      accessorKey: "active",
      header: "Active",
      cell: ({ row }) => {
        const isActive = row.getValue("active") as boolean;
        return (
          <div className={`${isActive ? "text-green-600" : "text-red-600"}`}>
            {isActive ? "True" : "False"}
          </div>
        );
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
        const businessUnit = row.original;
        const meta = table.options.meta as {
          onEdit?: (item: BusinessUnit) => void;
          onDelete?: (item: BusinessUnit) => void;
        };

        return (
          <div className="flex items-center gap-2">
            {canUpdate && (
              <EditButton
                onClick={(e) => {
                  e?.stopPropagation();
                  onEdit(businessUnit.id);
                }}
              />
            )}
            {canDelete && (
              <DeleteButton
                onClick={(e) => {
                  e?.stopPropagation();
                  meta?.onDelete?.(businessUnit);
                }}
              />
            )}
          </div>
        );
      },
    },
  ];

  const handleDelete = (businessUnit: BusinessUnit) => {
    onDelete(businessUnit.id);
  };

  return (
    <DataTable
      data={data}
      columns={columns}
      onDelete={handleDelete}
      onRowClick={(businessUnit: BusinessUnit) => onView(businessUnit.id)}
      filterValue={filterValue}
      filterKey="name"
      deleteDialogTitle="Delete Business Unit"
      deleteDialogDescription={(businessUnit: BusinessUnit) =>
        `Are you sure you want to delete the business unit "${businessUnit.name}"? This action cannot be undone.`
      }
      getItemName={(businessUnit: BusinessUnit) => businessUnit.name}
    />
  );
}
