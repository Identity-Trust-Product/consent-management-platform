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

import { toggleWebhookStatus, deleteWebhook } from "@/actions/webhooks";
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
import { WebhookResponse } from "@/lib/schemas/webhook-schemas";
import { ColumnDef } from "@tanstack/react-table";
import { formatDistanceToNow } from "date-fns";
import {
  ArrowUpDown,
  MoreHorizontal,
  Power,
  PowerOff,
  Edit,
  Trash2,
  Key,
} from "lucide-react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { useState } from "react";
import { EditWebhookDialog } from "./edit-webhook-dialog";
import { DeleteWebhookDialog } from "./delete-webhook-dialog";
import { RegenerateSecretDialog } from "./regenerate-secret-dialog";

interface WebhooksTableProps {
  data: WebhookResponse[];
  canUpdate: boolean;
  canDelete: boolean;
}

export function WebhooksTable({ data, canUpdate, canDelete }: WebhooksTableProps) {
  const router = useRouter();
  const [editDialogOpen, setEditDialogOpen] = useState(false);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [regenerateDialogOpen, setRegenerateDialogOpen] = useState(false);
  const [selectedWebhook, setSelectedWebhook] = useState<WebhookResponse | null>(null);

  const handleToggleStatus = async (publicId: string, currentStatus: boolean) => {
    try {
      const result = await toggleWebhookStatus({
        publicId,
        isActive: !currentStatus,
      });

      if (result.success) {
        toast.success(
          `Webhook ${!currentStatus ? "enabled" : "disabled"} successfully`
        );
        router.refresh();
      } else {
        toast.error(result.error || "Failed to toggle webhook status");
      }
    } catch {
      toast.error("Failed to toggle webhook status");
    }
  };

  const handleEdit = (webhook: WebhookResponse) => {
    setSelectedWebhook(webhook);
    setEditDialogOpen(true);
  };

  const handleDelete = (webhook: WebhookResponse) => {
    setSelectedWebhook(webhook);
    setDeleteDialogOpen(true);
  };

  const handleRegenerateSecret = (webhook: WebhookResponse) => {
    setSelectedWebhook(webhook);
    setRegenerateDialogOpen(true);
  };

  const confirmDelete = async () => {
    if (!selectedWebhook) return;

    try {
      const result = await deleteWebhook({ publicId: selectedWebhook.publicId });

      if (result.success) {
        toast.success("Webhook deleted successfully");
        setDeleteDialogOpen(false);
        setSelectedWebhook(null);
        router.refresh();
      } else {
        toast.error(result.error || "Failed to delete webhook");
      }
    } catch {
      toast.error("Failed to delete webhook");
    }
  };

  const columns: ColumnDef<WebhookResponse>[] = [
    {
      accessorKey: "eventType",
      header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Event Type
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        );
      },
      cell: ({ row }) => {
        const eventType = row.getValue("eventType") as string;
        return (
          <Badge variant="outline" className="font-mono text-xs">
            {eventType}
          </Badge>
        );
      },
    },
    {
      accessorKey: "targetType",
      header: "Target",
      cell: ({ row }) => {
        const targetType = row.original.targetType;
        const dataProcessor = row.original.dataProcessor;
        return (
          <div className="flex flex-col gap-1">
            <Badge
              variant={targetType === "DATA_PROCESSOR" ? "secondary" : "outline"}
              className="w-fit text-xs"
            >
              {targetType === "DATA_PROCESSOR" ? "Processor" : "Fiduciary"}
            </Badge>
            {dataProcessor && (
              <span className="text-xs text-muted-foreground">
                {dataProcessor.brandName}
              </span>
            )}
          </div>
        );
      },
    },
    {
      accessorKey: "endpointUrl",
      header: "Endpoint URL",
      cell: ({ row }) => {
        const url = row.getValue("endpointUrl") as string;
        return (
          <div className="flex flex-col gap-1">
            <code className="text-xs font-mono truncate max-w-md">{url}</code>
            <span className="text-xs text-muted-foreground">
              {row.original.httpMethod}
            </span>
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
        const webhook = row.original;

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
              {canUpdate && (
                <>
                  <DropdownMenuItem onClick={() => handleEdit(webhook)}>
                    <Edit className="mr-2 h-4 w-4" />
                    Edit
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    onClick={() => handleToggleStatus(webhook.publicId, webhook.isActive)}
                  >
                    {webhook.isActive ? (
                      <>
                        <PowerOff className="mr-2 h-4 w-4" />
                        Disable
                      </>
                    ) : (
                      <>
                        <Power className="mr-2 h-4 w-4" />
                        Enable
                      </>
                    )}
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => handleRegenerateSecret(webhook)}>
                    <Key className="mr-2 h-4 w-4" />
                    Regenerate Secret
                  </DropdownMenuItem>
                </>
              )}
              {canUpdate && canDelete && <DropdownMenuSeparator />}
              {canDelete && (
                <DropdownMenuItem
                  onClick={() => handleDelete(webhook)}
                  className="text-destructive"
                >
                  <Trash2 className="mr-2 h-4 w-4" />
                  Delete
                </DropdownMenuItem>
              )}
            </DropdownMenuContent>
          </DropdownMenu>
        );
      },
    },
  ];

  return (
    <>
      <DataTable columns={columns} data={data} filterKey="eventType" />
      {selectedWebhook && (
        <>
          <EditWebhookDialog
            open={editDialogOpen}
            onOpenChange={setEditDialogOpen}
            webhook={selectedWebhook}
          />
          <DeleteWebhookDialog
            open={deleteDialogOpen}
            onOpenChange={setDeleteDialogOpen}
            onConfirm={confirmDelete}
            webhookUrl={selectedWebhook.endpointUrl}
          />
          <RegenerateSecretDialog
            open={regenerateDialogOpen}
            onOpenChange={setRegenerateDialogOpen}
            webhook={selectedWebhook}
          />
        </>
      )}
    </>
  );
}
