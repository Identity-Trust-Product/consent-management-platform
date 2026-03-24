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

export type DataProcessor = {
  ouId: string;
  legalName: string;
  brandName: string;
  cin: string | null;
  industry: string | null;
  active: boolean;
  createdAt: Date;
  updatedAt: Date;
};

interface DataProcessorsTableProps {
  data: DataProcessor[];
  filterValue: string;
  onEdit: (ouId: string) => void;
  onView: (ouId: string) => void;
  onDelete: (ouId: string) => void;
  canUpdate: boolean;
  canDelete: boolean;
}

export function DataProcessorsTable({
  data,
  onEdit,
  onView,
  onDelete,
  filterValue = "",
  canUpdate,
  canDelete,
}: DataProcessorsTableProps) {
  const columns: ColumnDef<DataProcessor>[] = [
    {
      accessorKey: "legalName",
      header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Legal Name
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        );
      },
      cell: ({ row }) => (
        <div className="capitalize">{row.getValue("legalName")}</div>
      ),
    },
    {
      accessorKey: "brandName",
      header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Brand Name
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        );
      },
      cell: ({ row }) => (
        <div className="capitalize">{row.getValue("brandName")}</div>
      ),
    },
    {
      accessorKey: "createdAt",
      header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Created At
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        );
      },
      cell: ({ row }) => {
        const date = row.getValue("createdAt") as Date;
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
      accessorKey: "updatedAt",
      header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Updated At
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
      id: "actions",
      header: "Actions",
      enableHiding: false,
      cell: ({ row, table }) => {
        const dataProcessor = row.original;
        const meta = table.options.meta as any;

        return (
          <ActionButtonsGroup
            onEdit={(e) => {
              e?.stopPropagation();
              onEdit(dataProcessor.ouId);
            }}
            onDelete={(e) => {
              e?.stopPropagation();
              meta?.onDelete?.(dataProcessor);
            }}
          />
        );
      },
    },
  ];

  const handleDelete = (dataProcessor: DataProcessor) => {
    onDelete(dataProcessor.ouId);
  };

  return (
    <DataTable
      data={data}
      columns={columns}
      onDelete={handleDelete}
      onRowClick={(dataProcessor: DataProcessor) => onView(dataProcessor.ouId)}
      filterValue={filterValue}
      filterKey="legalName"
      deleteDialogTitle="Delete Data Processor"
      deleteDialogDescription={(dataProcessor: DataProcessor) =>
        `Are you sure you want to delete the data processor "${dataProcessor.legalName}"? This action cannot be undone.`
      }
      getItemName={(dataProcessor: DataProcessor) => dataProcessor.legalName}
    />
  );
}
