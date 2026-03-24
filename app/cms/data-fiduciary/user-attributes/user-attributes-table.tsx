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
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react";
import { Prisma } from "@prisma/client";

export type UserAttribute = {
  id: number;
  name: string;
  pii: boolean;
  supportedLanguages: string[];
  translations?: Prisma.JsonValue | null;
  createdAt: Date;
  updatedAt: Date;
};

interface UserAttributesTableProps {
  data: UserAttribute[];
  onEdit: (id: number) => void;
  onView: (id: number) => void;
  onDelete: (id: number) => void;
  filterValue?: string;
  canUpdate: boolean;
  canDelete: boolean;
}

export function UserAttributesTable({
  data,
  onEdit,
  onView,
  onDelete,
  filterValue = "",
  canUpdate,
  canDelete,
}: UserAttributesTableProps) {
  const columns: ColumnDef<UserAttribute>[] = [
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
      accessorKey: "pii",
      header: "PII Status",
      cell: ({ row }) => {
        const isPii = row.getValue("pii") as boolean;
        return (
          <div className={`${isPii ? "text-orange-600" : "text-green-600"}`}>
            {isPii ? "PII" : "Non-PII"}
          </div>
        );
      },
    },
    {
      accessorKey: "supportedLanguages",
      header: "Languages",
      cell: ({ row }) => {
        const languages = row.getValue("supportedLanguages") as string[];
        const count = languages?.length || 0;
        return (
          <div className="flex items-center gap-2">
            <Badge variant="secondary">{count} {count === 1 ? 'language' : 'languages'}</Badge>
          </div>
        );
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
      id: "actions",
      header: "Actions",
      enableHiding: false,
      cell: ({ row, table }) => {
        const userAttribute = row.original;
        const meta = table.options.meta as {
          onEdit?: (item: UserAttribute) => void;
          onDelete?: (item: UserAttribute) => void;
        };

        return (
          <ActionButtonsGroup
            onEdit={(e) => {
              e?.stopPropagation();
              onEdit(userAttribute.id);
            }}
            onDelete={(e) => {
              e?.stopPropagation();
              meta?.onDelete?.(userAttribute);
            }}
          />
        );
      },
    },
  ];

  const handleDelete = (userAttribute: UserAttribute) => {
    onDelete(userAttribute.id);
  };

  return (
    <DataTable
      data={data}
      columns={columns}
      onDelete={handleDelete}
      onRowClick={(userAttribute: UserAttribute) => onView(userAttribute.id)}
      filterValue={filterValue}
      filterKey="name"
      deleteDialogTitle="Delete User Attribute"
      deleteDialogDescription={(userAttribute: UserAttribute) =>
        `Are you sure you want to delete the user attribute "${userAttribute.name}"? This action cannot be undone.`
      }
      getItemName={(userAttribute: UserAttribute) => userAttribute.name}
    />
  );
}
