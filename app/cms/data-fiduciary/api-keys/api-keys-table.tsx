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

import { toggleApiKeyStatus } from "@/actions/api-keys";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { DataTable } from "@/components/ui/data-table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ApiKeyResponse } from "@/lib/schemas/api-key-schemas";
import { ColumnDef } from "@tanstack/react-table";
import { formatDistanceToNow } from "date-fns";
import { ArrowUpDown, MoreHorizontal, PowerOff } from "lucide-react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { useState } from "react";
import { DisableApiKeyDialog } from "./disable-api-key-dialog";

interface ApiKeysTableProps {
  data: ApiKeyResponse[];
}

export function ApiKeysTable({ data }: ApiKeysTableProps) {
  const router = useRouter();
  const [dialogOpen, setDialogOpen] = useState(false);
  const [selectedKeyId, setSelectedKeyId] = useState<string | null>(null);

  const handleDisable = async (id: string) => {
    setSelectedKeyId(id);
    setDialogOpen(true);
  };

  const confirmDisable = async () => {
    if (!selectedKeyId) return;
    try {
      const result = await toggleApiKeyStatus({ id: selectedKeyId, isActive: false });
      setDialogOpen(false);
      setSelectedKeyId(null);
      if (result.success) {
        toast.success("API key disabled successfully");
        router.refresh();
      } else {
        toast.error(result.error || "Failed to disable API key");
      }
    } catch (_error) {
      toast.error("Failed to disable API key");
    }
  };

  const columns: ColumnDef<ApiKeyResponse>[] = [
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
      cell: ({ row }) => {
        const name = row.getValue("name") as string;
        const description = row.original.description;
        return (
          <div className="flex flex-col gap-1">
            <span className="font-medium">{name}</span>
            {description && (
              <span className="text-xs text-muted-foreground">{description}</span>
            )}
          </div>
        );
      },
    },
    {
      accessorKey: "prefix",
      header: "API Key",
      cell: ({ row }) => {
        const prefix = row.getValue("prefix") as string;
        const masked = `${prefix}...****`;
        return (
          <div className="flex items-center gap-2">
            <code className="px-2 py-1 bg-muted rounded text-xs font-mono">
              {masked}
            </code>
          </div>
        );
      },
    },
    {
      accessorKey: "isActive",
      header: "Status",
      cell: ({ row }) => {
        const isActive = row.getValue("isActive") as boolean;
        return (
          <Badge variant={isActive ? "default" : "secondary"}>
            {isActive ? "Active" : "Inactive"}
          </Badge>
        );
      },
    },
    {
      accessorKey: "lastUsedAt",
      header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Last Used
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        );
      },
      cell: ({ row }) => {
        const lastUsedAt = row.getValue("lastUsedAt") as Date | null;
        if (!lastUsedAt) {
          return <span className="text-muted-foreground text-sm">Never</span>;
        }
        return (
          <span className="text-sm">
            {formatDistanceToNow(new Date(lastUsedAt), { addSuffix: true })}
          </span>
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
            Created
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        );
      },
      cell: ({ row }) => {
        const createdAt = row.getValue("createdAt") as Date;
        return (
          <span className="text-sm">
            {formatDistanceToNow(new Date(createdAt), { addSuffix: true })}
          </span>
        );
      },
    },
    {
      id: "actions",
      cell: ({ row }) => {
        const apiKey = row.original;

        // Only show actions if the key is active
        if (!apiKey.isActive) {
          return null;
        }

        return (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-8 w-8 p-0">
                <span className="sr-only">Open menu</span>
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Actions</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem
                onClick={() => handleDisable(apiKey.id)}
              >
                <PowerOff className="mr-2 h-4 w-4" />
                Disable
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        );
      },
    },
  ];

  return (
    <>
      <DataTable columns={columns} data={data} />
      <DisableApiKeyDialog
        open={dialogOpen}
        onOpenChange={setDialogOpen}
        onConfirm={confirmDisable}
      />
    </>
  );
}