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

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { LinkGeneratedDialog } from "./link-generated-dialog";
import { generateNoticeLink } from "@/actions/notices";
import { toast } from "sonner";
import { Copy } from "lucide-react";

interface Notice {
  id: number;
  publicId: string;
  dataPrincipalId: string;
  referenceId: string | null;
  createdAt: Date;
  linkExpiresAt: Date | null;
  status: string;
  forMinor: boolean;
  businessProcess: {
    name: string;
    code: string;
  };
}

interface ShowNoticeClientProps {
  notice: Notice;
  shouldShowDialog?: boolean;
}

// Reusable copy field component
function CopyField({ value, label }: { value: string | null; label: string }) {
  const handleCopy = async () => {
    if (!value) return;
    try {
      await navigator.clipboard.writeText(value);
      toast.success(`${label} copied to clipboard!`);
    } catch (error) {
      console.error(`Error copying ${label}:`, error);
      toast.error(`Failed to copy ${label}`);
    }
  };

  return (
    <div>
      <label className="text-sm font-semibold">{label}</label>
      <div className="mt-1 flex items-center gap-2">
        <span className="text-sm">{value || "-"}</span>
        {value && (
          <Button
            variant="ghost"
            size="sm"
            onClick={handleCopy}
            className="h-6 w-6 p-0 text-muted-foreground hover:text-foreground"
          >
            <Copy className="h-3.5 w-3.5" />
          </Button>
        )}
      </div>
    </div>
  );
}

export function ShowNoticeClient({
  notice,
  shouldShowDialog = false,
}: ShowNoticeClientProps) {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [noticeLink, setNoticeLink] = useState("");

  useEffect(() => {
    // Generate the notice link when component mounts and shouldShowDialog is true
    const generateLink = async () => {
      try {
        const result = await generateNoticeLink(notice.id);
        if (result.success && result.url) {
          setNoticeLink(result.url);
        } else {
          toast.error(result.error || "Failed to generate notice link");
        }
      } catch (error) {
        console.error("Error generating notice link:", error);
        toast.error("Failed to generate notice link");
      }
    };

    generateLink();
    if (shouldShowDialog) {
      setDialogOpen(true);
    }
  }, [notice.id, shouldShowDialog]);

  const formatDate = (date: Date | null) => {
    if (!date) return null;

    return (
      <div className="text-sm">
        <div>
          {date.toLocaleDateString("en-GB", {
            day: "2-digit",
            month: "2-digit",
            year: "numeric",
          })}{" "}
          <span className="text-muted-foreground">
            {date.toLocaleTimeString("en-GB", {
              hour: "2-digit",
              minute: "2-digit",
              hour12: true,
            })}
          </span>
        </div>
      </div>
    );
  };

  return (
    <div className="pb-4 space-y-6">
      {/* Notice Information */}
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold">Notice {notice.publicId}</h1>
          <p className="text-muted-foreground">
            This is a notice record from your database.
          </p>
        </div>

        {/* Notice Details */}
        <div className="space-y-4">
          <CopyField value={notice.dataPrincipalId} label="Data Principal ID" />

          <CopyField value={notice.referenceId} label="Reference ID" />

          <CopyField value={notice.publicId} label="Notice ID" />

          <div>
            <label className="text-sm font-semibold">Notice Link</label>
            <div className="mt-1 font-mono text-sm break-all text-muted-foreground max-w-2xl">
              {noticeLink || "-"}
            </div>
          </div>

          <div>
            <label className="text-sm font-semibold">Created At</label>
            <div className="mt-1 text-sm">
              {notice.createdAt.toLocaleDateString("en-GB", {
                day: "2-digit",
                month: "2-digit",
                year: "numeric",
              }) +
                " " +
                notice.createdAt.toLocaleTimeString("en-GB", {
                  hour: "2-digit",
                  minute: "2-digit",
                  second: "2-digit",
                  hour12: false,
                }) +
                "Z"}
            </div>
          </div>

          <div>
            <label className="text-sm font-semibold">Expires At</label>
            <div className="mt-1 text-sm">
              {notice.linkExpiresAt ? formatDate(notice.linkExpiresAt) : "-"}
            </div>
          </div>

          <div>
            <label className="text-sm font-semibold">Status</label>
            <div className="mt-1 text-sm">
              {notice.status.charAt(0).toUpperCase() + notice.status.slice(1)}
            </div>
          </div>

          <div>
            <label className="text-sm font-semibold">For Minor</label>
            <div className="mt-1 text-sm">
              {notice.forMinor ? "True" : "False"}
            </div>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <Button variant="secondary" size="lg" asChild>
            <Link href="/cms/data-fiduciary/notices">Back to Notices</Link>
          </Button>
        </div>
      </div>

      {/* Link Generated Dialog */}
      <LinkGeneratedDialog
        isOpen={dialogOpen}
        onClose={() => setDialogOpen(false)}
        link={noticeLink}
      />
    </div>
  );
}
