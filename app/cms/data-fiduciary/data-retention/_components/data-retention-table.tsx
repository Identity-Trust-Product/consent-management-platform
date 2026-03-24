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

import * as React from "react";
import { ActionButtonsGroup } from "@/components/ui/action-buttons";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { DataTable } from "@/components/ui/data-table";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react";
import Link from "next/link";

export type DataRetentionPolicy = {
  id: number;
  name: string;
  description: string | null;
  policyUrl: string | null;
  createdBy: string;
  createdByUser: {
    name: string | null;
    email: string | null;
  };
  businessProcesses: string[];
  createdAt: string;
  updatedAt: string;
  _count: {
    configurations: number;
  };
};

interface DataRetentionTableProps {
  data: DataRetentionPolicy[];
  onDelete: (id: number) => void;
  onEdit: (id: number) => void;
}

// Helper functions for Avatar (copied/adapted from users-table.tsx)
function getUserInitials(name: string | null | undefined, email: string | null) {
  if (name) {
    const parts = name.split(" ");
    if (parts.length >= 2) {
      return (parts[0][0] + parts[1][0]).toUpperCase();
    }
    return name.substring(0, 2).toUpperCase();
  }
  if (email) {
    return email.substring(0, 2).toUpperCase();
  }
  return "??";
}

function getInitialsColor(name: string | null | undefined) {
  const colors = [
    "bg-red-100 text-red-700",
    "bg-green-100 text-green-700",
    "bg-blue-100 text-blue-700",
    "bg-yellow-100 text-yellow-700",
    "bg-purple-100 text-purple-700",
    "bg-pink-100 text-pink-700",
    "bg-indigo-100 text-indigo-700",
  ];

  if (!name) return "bg-gray-100 text-gray-700";

  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash);
  }

  const index = Math.abs(hash) % colors.length;
  return colors[index];
}

export function DataRetentionTable({
  data,
  onDelete,
  onEdit,
}: DataRetentionTableProps) {
  const [deleteDialogOpen, setDeleteDialogOpen] = React.useState(false);
  const [policyToDelete, setPolicyToDelete] = React.useState<DataRetentionPolicy | null>(null);
  const [confirmName, setConfirmName] = React.useState("");

  const handleDeleteClick = (policy: DataRetentionPolicy) => {
    setPolicyToDelete(policy);
    setConfirmName("");
    setDeleteDialogOpen(true);
  };

  const handleConfirmDelete = () => {
    if (policyToDelete && confirmName === policyToDelete.name) {
      onDelete(policyToDelete.id);
      setDeleteDialogOpen(false);
      setPolicyToDelete(null);
    }
  };

  const columns: ColumnDef<DataRetentionPolicy>[] = [
    {
      accessorKey: "name",
      header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Policy Name
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        );
      },
      cell: ({ row }) => (
        <div className="font-medium">{row.getValue("name")}</div>
      ),
    },
    {
      accessorKey: "createdByUser",
      header: "Created By",
      cell: ({ row }) => {
        const user = row.original.createdByUser;
        return (
          <div className="flex items-center gap-3">
            <div
              className={`flex items-center justify-center w-8 h-8 rounded-full text-xs font-semibold ${getInitialsColor(
                user.name
              )}`}
            >
              {getUserInitials(user.name, user.email)}
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-medium">{user.name || "Unknown"}</span>
              <span className="text-xs text-muted-foreground">{user.email}</span>
            </div>
          </div>
        );
      },
    },
    {
      accessorKey: "businessProcesses",
      header: "Business Processes",
      cell: ({ row }) => {
        const processes = row.original.businessProcesses;
        if (processes.length === 0) return <span className="text-muted-foreground text-sm">-</span>;

        return (
          <div className="flex flex-wrap gap-1 max-w-[300px]">
            {processes.slice(0, 2).map((bp, index) => (
              <Badge key={index} variant="secondary" className="font-normal">
                {bp}
              </Badge>
            ))}
            {processes.length > 2 && (
              <Badge variant="outline" className="font-normal text-muted-foreground">
                +{processes.length - 2} more
              </Badge>
            )}
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
            Last Updated On
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        );
      },
      cell: ({ row }) => {
        const date = new Date(row.getValue("updatedAt"));
        return (
          <div className="text-sm">
            {date.toLocaleDateString("en-GB", {
              day: "2-digit",
              month: "2-digit",
              year: "numeric",
            })}
          </div>
        );
      },
    },
    {
      accessorKey: "createdAt",
      header: "Created On",
      cell: ({ row }) => {
        const date = new Date(row.getValue("createdAt"));
        return (
          <div className="text-sm">
            {date.toLocaleDateString("en-GB", {
              day: "2-digit",
              month: "2-digit",
              year: "numeric",
            })}
          </div>
        );
      },
    },
    {
      id: "actions",
      header: "Actions",
      cell: ({ row }) => {
        const policy = row.original;
        return (
          <div className="flex items-center gap-2">
            <ActionButtonsGroup
              onEdit={() => onEdit(policy.id)}
              onDelete={() => handleDeleteClick(policy)}
            />
          </div>
        );
      },
    },
  ];

  return (
    <>
      <DataTable
        data={data}
        columns={columns}
        filterKey="name"
        getItemName={(item) => item.name}
      />

      <Dialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Delete Policy</DialogTitle>
            <DialogDescription>
              This action cannot be undone. This will permanently delete the
              policy <span className="font-semibold text-foreground">&quot;{policyToDelete?.name}&quot;</span>.
            </DialogDescription>
          </DialogHeader>
          <div className="py-4">
            <label htmlFor="confirm-name" className="text-sm font-medium mb-2 block">
              Type the policy name to confirm
            </label>
            <Input
              id="confirm-name"
              value={confirmName}
              onChange={(e) => setConfirmName(e.target.value)}
              placeholder={policyToDelete?.name}
              className="w-full"
            />
          </div>
          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => setDeleteDialogOpen(false)}
            >
              Cancel
            </Button>
            <Button
              variant="destructive"
              onClick={handleConfirmDelete}
              disabled={confirmName !== policyToDelete?.name}
            >
              Delete
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
