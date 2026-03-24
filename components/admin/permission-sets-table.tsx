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

import { Button } from "@/components/ui/button";
import { DataTable } from "@/components/ui/data-table";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown, Shield } from "lucide-react";

interface Role {
  id: string;
  name: string;
  description?: string | null;
  createdAt?: Date | string | null;
  updatedAt?: Date | string | null;
}

interface User {
  id: string;
  name?: string | null;
  email: string | null;
  createdAt?: Date | string | null;
  userRoles: {
    role: {
      id: string;
      name: string;
    };
  }[];
}

interface PermissionSetsTableProps {
  roles: Role[];
  users: User[];
  onRowClick: (role: Role) => void;
  formatRoleName: (name: string) => string;
  getRolePermissions: (name: string) => readonly string[];
}

export function PermissionSetsTable({
  roles,
  users,
  onRowClick,
  formatRoleName,
  getRolePermissions,
}: PermissionSetsTableProps) {
  const columns: ColumnDef<Role>[] = [
    {
      accessorKey: "index",
      header: "S.No.",
      cell: ({ row }) => <div className="w-12">{row.index + 1}</div>,
    },
    {
      accessorKey: "name",
      header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
            className="-ml-4"
          >
            Set Name
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        );
      },
      cell: ({ row }) => (
        <div className="flex items-center gap-2">
          <Shield className="h-4 w-4 text-muted-foreground" />
          <span className="font-medium">
            {formatRoleName(row.original.name)}
          </span>
        </div>
      ),
    },
    {
      id: "access",
      header: "Access",
      cell: ({ row }) => {
        const permissions = getRolePermissions(row.original.name);
        const hasFullAccess = permissions.includes("*:*");
        return (
          <span className="text-sm text-muted-foreground">
            {hasFullAccess
              ? "Full Access"
              : `${permissions.length} Permissions`}
          </span>
        );
      },
    },
    {
      id: "totalUsers",
      header: "Total Users",
      cell: ({ row }) => {
        const usersWithRole = users.filter((u) =>
          u.userRoles.some((ur) => ur.role.id === row.original.id)
        ).length;
        return <span className="text-sm">{usersWithRole}</span>;
      },
    },
    {
      id: "createdOn",
      header: "Added On",
      cell: ({ row }) => {
        const date = row.original.createdAt;
        if (!date) return <span className="text-muted-foreground">-</span>;
        const formattedDate = new Date(date).toLocaleDateString("en-US", {
          day: "2-digit",
          month: "short",
          year: "numeric",
        });
        return <span className="text-sm">{formattedDate}</span>;
      },
    },
  ];

  return (
    <DataTable
      data={roles}
      columns={columns}
      onRowClick={onRowClick}
      filterKey="name"
    />
  );
}
