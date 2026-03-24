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
import { ArrowUpDown, Copy, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DataTable } from "@/components/ui/data-table";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";
import { generateNoticeLink } from "@/actions/notices";
import { generateDprmLinkForNotice } from "@/actions/dprm";
import { useRouter } from "next/navigation";

export type Notice = {
  id: number;
  publicId: string;
  dataPrincipalId: string;
  referenceId: string | null;
  createdAt: Date;
  linkExpiresAt: Date | null;
  status: string;
  consentStatus: string | null;
  forMinor: boolean;
  metadata: { key: string; value: string }[];
  businessProcess: {
    name: string;
    code: string;
  };
};

interface NoticesTableProps {
  data: Notice[];
  onView: (publicId: string) => void;
}

// Reusable copy cell component
function CopyCell({ value, label }: { value: string | null; label: string }) {
  const handleCopy = async (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!value) return;
    try {
      await navigator.clipboard.writeText(value);
      toast.success(`${label} copied to clipboard!`);
    } catch (error) {
      console.error(`Error copying ${label}:`, error);
      toast.error(`Failed to copy ${label}`);
    }
  };

  if (!value) {
    return <div className="font-mono text-xs max-w-40 text-wrap pb-4">-</div>;
  }

  return (
    <div className="flex items-start gap-1 pb-4">
      <div className="font-mono text-xs max-w-36 text-wrap break-all">
        {value}
      </div>
      <Button
        variant="ghost"
        size="sm"
        onClick={handleCopy}
        className="h-5 w-5 p-0 text-muted-foreground hover:text-foreground shrink-0"
      >
        <Copy className="h-3 w-3" />
      </Button>
    </div>
  );
}

export function NoticesTable({ data, onView }: NoticesTableProps) {
  const router = useRouter();

  const handleCopyDPRM = async (notice: Notice) => {
    try {
      const result = await generateDprmLinkForNotice(notice);

      if (result.success && result.url) {
        // Copy the URL to clipboard
        await navigator.clipboard.writeText(result.url);
        toast.success("DPRM link copied to clipboard!");
      } else {
        toast.error(result.error || "Failed to generate DPRM link");
      }
    } catch (error) {
      console.error("Error copying DPRM link:", error);
      toast.error("Failed to copy DPRM link");
    }
  };

  const handleCopyNotice = async (notice: Notice) => {
    try {
      const result = await generateNoticeLink(notice.id);

      if (result.success && result.url) {
        // Copy the URL to clipboard
        await navigator.clipboard.writeText(result.url);
        toast.success("Notice link copied to clipboard!");
      } else {
        toast.error(result.error || "Failed to generate notice link");
      }
    } catch (error) {
      console.error("Error copying notice link:", error);
      toast.error("Failed to copy notice link");
    }
  };

  const columns: ColumnDef<Notice>[] = [
    {
      accessorKey: "dataPrincipalId",
      header: "Data Principal ID",
      cell: ({ row }) => (
        <CopyCell value={row.getValue("dataPrincipalId")} label="Principal ID" />
      ),
    },
    {
      accessorKey: "referenceId",
      header: "Reference ID",
      cell: ({ row }) => (
        <CopyCell value={row.getValue("referenceId")} label="Reference ID" />
      ),
    },
    {
      accessorKey: "publicId",
      header: "Notice ID",
      cell: ({ row }) => (
        <CopyCell value={row.getValue("publicId")} label="Notice ID" />
      ),
    },
    {
      accessorKey: "forMinor",
      header: "Minor",
      cell: ({ row }) => {
        const forMinor = row.getValue("forMinor") as boolean;
        return (
          <div className="flex justify-center pb-4">
            {forMinor ? (
              <Badge variant="outline" className="text-xs bg-success-50 border-success-50">
                Yes
              </Badge>
            ) : (
              <Badge variant="secondary" className="text-xs">
                No
              </Badge>
            )}
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
          <div className="text-xs pb-4">
            <div>
              {date.toLocaleDateString("en-GB", {
                day: "2-digit",
                month: "2-digit",
                year: "numeric",
              })}
            </div>
            <div className="text-muted-foreground">
              {date.toLocaleTimeString("en-GB", {
                hour: "2-digit",
                minute: "2-digit",
                hour12: true,
              })}
            </div>
          </div>
        );
      },
    },
    {
      accessorKey: "linkExpiresAt",
      header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Expires At
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        );
      },
      cell: ({ row }) => {
        const date = row.getValue("linkExpiresAt") as Date | null;
        if (!date)
          return <div className="text-xs text-muted-foreground pb-4">-</div>;

        return (
          <div className="text-xs pb-4">
            <div>
              {date.toLocaleDateString("en-GB", {
                day: "2-digit",
                month: "2-digit",
                year: "numeric",
              })}
            </div>
            <div className="text-muted-foreground">
              {date.toLocaleTimeString("en-GB", {
                hour: "2-digit",
                minute: "2-digit",
                hour12: true,
              })}
            </div>
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
          <div className="flex justify-center">
            <Badge
              variant={
                status === "completed"
                  ? "default"
                  : status === "pending"
                    ? "secondary"
                    : status === "cancelled"
                      ? "destructive"
                      : "outline"
              }
              className={
                status === "pending"
                  ? "bg-orange-100 text-warning-500 hover:bg-warning-100 mb-4 font-medium"
                  : status === "completed"
                    ? "bg-green-100 text-green-700 hover:bg-green-100 mb-4 font-medium"
                    : status === "cancelled"
                      ? "bg-red-100 text-destructive-500 hover:bg-red-100 mb-4 font-medium"
                      : ""
              }
            >
              {status.charAt(0).toUpperCase() + status.slice(1)}
            </Badge>
          </div>
        );
      },
    },
    {
      accessorKey: "consentStatus",
      header: "Consent Status",
      cell: ({ row }) => {
        const consentStatus = row.getValue("consentStatus") as string | null;
        if (!consentStatus) return;

        return (
          <div className="flex justify-center">
            <Badge
              variant="outline"
              className={
                consentStatus === "accepted"
                  ? "border-primary-500 text-primary-500 mb-4"
                  : consentStatus === "rejected"
                    ? "border-destructive-500 text-destructive-500 mb-4"
                    : ""
              }
            >
              {consentStatus.charAt(0).toUpperCase() + consentStatus.slice(1)}
            </Badge>
          </div>
        );
      },
    },
    {
      id: "actions",
      header: "Actions",
      enableHiding: false,
      cell: ({ row }) => {
        const notice = row.original;
        const isDisabled = notice.status !== "completed";

        return (
          <div className="flex items-center justify-center pb-4">
            <Button
              variant="ghost"
              size="sm"
              {...(!isDisabled && {
                onClick: (e) => {
                  e.stopPropagation();
                  onView(notice.publicId);
                },
              })}
              disabled={isDisabled}
              className={`h-8 px-2 text-xs ${isDisabled
                  ? "text-gray-400 cursor-not-allowed"
                  : "text-blue-600 hover:text-blue-700 hover:bg-blue-50"
                }`}
            >
              <Eye className="h-3 w-3" />
              <span>View</span>
            </Button>
            <Button
              variant="ghost"
              size="sm"
              {...(!isDisabled && {
                onClick: (e) => {
                  e.stopPropagation();
                  handleCopyDPRM(notice);
                },
              })}
              disabled={isDisabled}
              className={`h-8 px-2 text-xs ${isDisabled
                  ? "text-gray-400 cursor-not-allowed"
                  : "text-blue-600 hover:text-blue-700 hover:bg-blue-50"
                }`}
            >
              <Copy className="h-3 w-3" />
              DPRM
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={(e) => {
                e.stopPropagation();
                handleCopyNotice(notice);
              }}
              className="h-8 px-2 text-xs text-blue-600 hover:text-blue-700 hover:bg-blue-50"
            >
              <Copy className="h-3 w-3" />
              Notice
            </Button>
          </div>
        );
      },
    },
  ];

  return (
    <DataTable
      data={data}
      columns={columns}
      onRowClick={(notice: Notice) => onView(notice.publicId)}
      filterValue=""
      filterKey="dataPrincipalId"
      getItemName={(notice: Notice) => notice.publicId}
    />
  );
}
