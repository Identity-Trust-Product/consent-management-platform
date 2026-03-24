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

import { Card } from "@/components/ui/card";
import { Info, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { generateDprmLinkForNotice } from "@/actions/dprm";
import { toast } from "sonner";

interface AlreadySubmittedPageProps {
  noticeId: string;
  dataPrincipalId: string;
  submittedAt?: Date;
  onClose?: () => void;
  accessToken?: string;
  forMinor?: boolean;
  metadata?: { key: string; value: string }[];
}

export function AlreadySubmittedPage({
  noticeId,
  dataPrincipalId,
  submittedAt,
  onClose,
  accessToken,
  forMinor = false,
  metadata = [],
}: AlreadySubmittedPageProps) {
  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    }).format(date);
  };

  const handleManageConsents = async () => {
    try {
      const result = await generateDprmLinkForNotice({
        dataPrincipalId,
        forMinor,
        metadata,
      });

      if (result.success && result.url) {
        // Redirect to the DPRM link
        window.location.href = result.url;
      } else {
        toast.error(result.error || "Failed to generate DPRM link");
      }
    } catch (error) {
      console.error("Error generating DPRM link:", error);
      toast.error("Failed to generate DPRM link");
    }
  };

  const handleViewReceipt = () => {
    if (!accessToken) {
      toast.error("Access token not available");
      return;
    }
    // Open receipt in new window with access token for validation
    const printUrl = `/cms/principal/receipt/${noticeId}/${accessToken}`;
    window.open(printUrl, "_blank", "width=1024,height=768");
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="max-w-md mx-auto p-6">
        <Card className="shadow-lg rounded-lg border p-8 text-center bg-white">
          <div className="mb-6">
            <Info className="w-16 h-16 text-blue-500 mx-auto mb-4" />
            <h1 className="text-2xl font-bold text-gray-900 mb-2">
              Already Submitted
            </h1>
            <p className="text-gray-600">
              This notice has already been submitted and processed.
            </p>
          </div>

          <div className="space-y-4">
            <div className="text-sm text-gray-500 space-y-1">
              <p>Notice ID: {noticeId}</p>
              <p>Status: Completed</p>
              {submittedAt && (
                <div className="flex items-center justify-center gap-2 mt-2">
                  <Clock className="w-4 h-4" />
                  <span>Submitted on: {formatDate(submittedAt)}</span>
                </div>
              )}
            </div>

            <div className="space-y-3">
              <Button onClick={handleManageConsents} className="w-full">
                Manage your Consents
              </Button>

              <Button
                onClick={handleViewReceipt}
                variant="outline"
                className="w-full"
              >
                View Consent Receipt
              </Button>

              {onClose && (
                <Button
                  onClick={onClose}
                  className="w-full"
                  variant="outline"
                  style={{
                    backgroundColor: "#1e40af",
                    color: "white",
                  }}
                >
                  Close
                </Button>
              )}
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
