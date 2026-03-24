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

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { DataTable } from "@/components/ui/data-table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ColumnDef } from "@tanstack/react-table";
import {
  ArrowUpDown,
  MoreVertical,
  Pencil,
  Shield,
  Trash2,
} from "lucide-react";

interface User {
  id: string;
  name?: string | null;
  email: string | null;
  createdAt?: Date | string | null;
  userRoles: {
    assignedAt?: Date | string | null;
    role: {
      id: string;
      name: string;
    };
  }[];
}

interface UsersTableProps {
  users: User[];
  canUpdate: boolean;
  canDelete: boolean;
  onRowClick: (user: User) => void;
  onEdit: (user: User) => void;
  onDelete: (user: User) => void;
  formatRoleName: (name: string) => string;
  getRoleBadgeColor: (name: string) => string;
  getUserInitials: (
    name: string | null | undefined,
    email: string | null
  ) => string;
  getInitialsColor: (name: string | null | undefined) => string;
}

export function UsersTable({
  users,
  canUpdate,
  canDelete,
  onRowClick,
  onEdit,
  onDelete,
  formatRoleName,
  getRoleBadgeColor,
  getUserInitials,
  getInitialsColor,
}: UsersTableProps) {
  const columns: ColumnDef<User>[] = [
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
            User Name
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        );
      },
      cell: ({ row }) => {
        const user = row.original;
        return (
          <div className="flex items-center gap-3">
            <div
              className={`flex items-center justify-center w-10 h-10 rounded-full text-sm font-semibold ${getInitialsColor(
                user.name
              )}`}
            >
              {getUserInitials(user.name, user.email)}
            </div>
            <span className="font-medium">{user.name || "N/A"}</span>
          </div>
        );
      },
    },
    {
      accessorKey: "email",
      header: "Email",
      cell: ({ row }) => (
        <span className="text-muted-foreground">
          {row.original.email || "N/A"}
        </span>
      ),
    },
    {
      id: "permissionSet",
      header: "Permission Set",
      cell: ({ row }) => {
        const user = row.original;
        if (user.userRoles.length > 0) {
          return (
            <div className="flex flex-wrap gap-1">
              {user.userRoles.map((ur, index) => (
                <Badge
                  key={index}
                  variant="secondary"
                  className={`font-normal text-xs ${getRoleBadgeColor(
                    ur.role.name
                  )}`}
                >
                  <Shield className="mr-1 h-3 w-3" />
                  {formatRoleName(ur.role.name)}
                </Badge>
              ))}
            </div>
          );
        }
        return <span className="text-muted-foreground text-sm">No role</span>;
      },
    },
    {
      id: "addedOn",
      header: "Added On",
      cell: ({ row }) => {
        const user = row.original;
        if (user.createdAt) {
          const date = new Date(user.createdAt);
          return (
            <span className="text-muted-foreground text-sm">
              {date.toLocaleDateString('en-US', {
                day: '2-digit',
                month: 'short',
                year: 'numeric'
              })}
            </span>
          );
        }
        return <span className="text-muted-foreground text-sm">-</span>;
      },
    },
    {
      id: "actions",
      header: "",
      cell: ({ row }) => {
        const user = row.original;

        if (!canUpdate && !canDelete) return null;

        return (
          <div
            className="flex items-center justify-end"
            onClick={(e) => e.stopPropagation()}
          >
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <MoreVertical className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                {canUpdate && (
                  <DropdownMenuItem
                    onClick={(e) => {
                      e.stopPropagation();
                      onEdit(user);
                    }}
                  >
                    <Pencil className="mr-2 h-4 w-4" />
                    Edit
                  </DropdownMenuItem>
                )}
                {canDelete && (
                  <>
                    {canUpdate && <DropdownMenuSeparator />}
                    <DropdownMenuItem
                      className="text-destructive focus:text-destructive"
                      onClick={(e) => {
                        e.stopPropagation();
                        onDelete(user);
                      }}
                    >
                      <Trash2 className="mr-2 h-4 w-4" />
                      Delete
                    </DropdownMenuItem>
                  </>
                )}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        );
      },
    },
  ];

  return (
    <DataTable
      data={users}
      columns={columns}
      onRowClick={onRowClick}
      filterKey="name"
      deleteDialogTitle="Delete User"
      deleteDialogDescription={(user) =>
        `Are you sure you want to delete ${user.name || user.email
        }? This action cannot be undone.`
      }
      getItemName={(user) => user.name || user.email || "this user"}
    />
  );
}
