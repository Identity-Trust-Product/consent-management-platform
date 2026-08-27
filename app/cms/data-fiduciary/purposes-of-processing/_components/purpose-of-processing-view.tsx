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

import { useRouter } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { EditButton } from "@/components/ui/action-buttons";

interface PurposeOfProcessingWithDetails {
  id: number;
  name: string;
  code: string;
  description: string | null;
  createdAt: Date;
  updatedAt: Date;
}

interface PurposeOfProcessingViewProps {
  purposeOfProcessing: PurposeOfProcessingWithDetails;
  purposeOfProcessingId: string;
}

export function PurposeOfProcessingView({
  purposeOfProcessing,
  purposeOfProcessingId,
}: PurposeOfProcessingViewProps) {
  const router = useRouter();

  const formatDate = (dateStr: Date | string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
  };

  const formatDateTime = (dateStr: Date | string) => {
    const date = new Date(dateStr);
    return date.toLocaleString("en-GB", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const handleEdit = () => {
    router.push(
      `/cms/data-fiduciary/purposes-of-processing/${purposeOfProcessingId}/edit`
    );
  };

  return (
    <div className="h-full flex flex-col border rounded-t-lg">
      {/* Header - Fixed */}
      <div className="border-b px-6 py-5 flex-shrink-0">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-3">
            <h2 className="text-2xl font-bold tracking-tight">
              {purposeOfProcessing?.name || "Purpose Sub Master"}
            </h2>
            {purposeOfProcessing?.updatedAt && (
              <span className="text-sm text-muted-foreground">
                (Last updated: {formatDate(purposeOfProcessing.updatedAt)})
              </span>
            )}
          </div>
          <EditButton
            variant="outline"
            onClick={handleEdit}
            className="flex items-center gap-2"
          >
            Edit
          </EditButton>
        </div>
        <p className="text-muted-foreground">
          View purpose sub master details
        </p>
      </div>

      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto px-6 py-6 pb-10 space-y-6">
        {/* General Information */}
        <div className="space-y-4">
          <div className="rounded-lg border p-4">
            <h3 className="font-semibold mb-3">General Information</h3>
            <div className="grid grid-cols-2 gap-6 text-sm">
              {/* Left Column */}
              <div className="space-y-4">
                <div>
                  <span className="font-medium text-muted-foreground">
                    Purpose Sub Master Name:
                  </span>
                  <p className="mt-1">
                    {purposeOfProcessing?.name || "Not specified"}
                  </p>
                </div>
                <div>
                  <span className="font-medium text-muted-foreground">
                    Code:
                  </span>
                  <p className="mt-1">
                    {purposeOfProcessing?.code || "Not specified"}
                  </p>
                </div>
              </div>

              {/* Right Column */}
              <div className="space-y-4">
                <div>
                  <span className="font-medium text-muted-foreground">
                    Created At:
                  </span>
                  <p className="mt-1">
                    {purposeOfProcessing?.createdAt
                      ? formatDateTime(purposeOfProcessing.createdAt)
                      : "Not available"}
                  </p>
                </div>
                <div>
                  <span className="font-medium text-muted-foreground">
                    Updated At:
                  </span>
                  <p className="mt-1">
                    {purposeOfProcessing?.updatedAt
                      ? formatDateTime(purposeOfProcessing.updatedAt)
                      : "Not available"}
                  </p>
                </div>
              </div>
            </div>

            {/* Description - Full width */}
            <div className="mt-6">
              <span className="font-medium text-muted-foreground">
                Description:
              </span>
              <p className="mt-1">
                {purposeOfProcessing?.description || "No description provided"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
