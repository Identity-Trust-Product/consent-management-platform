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

interface DataProcessorWithDetails {
  ouId: string;
  legalName: string;
  brandName: string;
  cin: string | null;
  industry: string | null;
  active: boolean;
  createdAt: Date;
  updatedAt: Date;
}

interface DataProcessorViewProps {
  dataProcessor: DataProcessorWithDetails;
  dataProcessorId: string;
}

export function DataProcessorView({
  dataProcessor,
  dataProcessorId,
}: DataProcessorViewProps) {
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
    router.push(`/cms/data-fiduciary/data-processors/${dataProcessorId}/edit`);
  };

  return (
    <div className="h-full flex flex-col border rounded-t-lg">
      {/* Header - Fixed */}
      <div className="border-b px-6 py-5 flex-shrink-0">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-3">
            <h2 className="text-2xl font-bold tracking-tight">
              {dataProcessor?.brandName || "Data Processor"}
            </h2>
            {dataProcessor?.updatedAt && (
              <span className="text-sm text-muted-foreground">
                (Last updated: {formatDate(dataProcessor.updatedAt)})
              </span>
            )}
            <Badge
              variant={dataProcessor?.active ? "default" : "secondary"}
              className={
                dataProcessor?.active
                  ? "border-green-200 bg-green-50 text-green-700 pointer-events-none"
                  : "border-red-200 bg-red-50 text-red-700 pointer-events-none"
              }
            >
              {dataProcessor?.active ? "ACTIVE" : "INACTIVE"}
            </Badge>
          </div>
          <EditButton
            variant="outline"
            onClick={handleEdit}
            className="flex items-center gap-2"
          >
            Edit
          </EditButton>
        </div>
        <p className="text-muted-foreground">View data processor details</p>
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
                    OU ID:
                  </span>
                  <p className="mt-1">
                    {dataProcessor?.ouId || "Not specified"}
                  </p>
                </div>
                <div>
                  <span className="font-medium text-muted-foreground">
                    Legal Name:
                  </span>
                  <p className="mt-1">
                    {dataProcessor?.legalName || "Not specified"}
                  </p>
                </div>
                <div>
                  <span className="font-medium text-muted-foreground">
                    Brand Name:
                  </span>
                  <p className="mt-1">
                    {dataProcessor?.brandName || "Not specified"}
                  </p>
                </div>
                <div>
                  <span className="font-medium text-muted-foreground">
                    Status:
                  </span>
                  <div className="mt-1">
                    <Badge
                      variant={dataProcessor?.active ? "default" : "secondary"}
                      className={
                        dataProcessor?.active
                          ? "border-green-200 bg-green-50 text-green-700"
                          : "border-red-200 bg-red-50 text-red-700"
                      }
                    >
                      {dataProcessor?.active ? "Active" : "Inactive"}
                    </Badge>
                  </div>
                </div>
              </div>

              {/* Right Column */}
              <div className="space-y-4">
                <div>
                  <span className="font-medium text-muted-foreground">
                    CIN:
                  </span>
                  <p className="mt-1">
                    {dataProcessor?.cin || "Not specified"}
                  </p>
                </div>
                <div>
                  <span className="font-medium text-muted-foreground">
                    Industry:
                  </span>
                  <p className="mt-1 capitalize">
                    {dataProcessor?.industry || "Not specified"}
                  </p>
                </div>
                <div>
                  <span className="font-medium text-muted-foreground">
                    Created At:
                  </span>
                  <p className="mt-1">
                    {dataProcessor?.createdAt
                      ? formatDateTime(dataProcessor.createdAt)
                      : "Not available"}
                  </p>
                </div>
                <div>
                  <span className="font-medium text-muted-foreground">
                    Updated At:
                  </span>
                  <p className="mt-1">
                    {dataProcessor?.updatedAt
                      ? formatDateTime(dataProcessor.updatedAt)
                      : "Not available"}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
