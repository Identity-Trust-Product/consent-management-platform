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

import React, { useEffect, useState } from "react";
import { BarChart3, Loader2 } from "lucide-react";

export default function DashboardPage() {
  const [iframeUrl, setIframeUrl] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Fetch dashboard URL from server-side API route that has access to runtime env vars
    fetch("/cms/api/dashboard-config")
      .then((res) => res.json())
      .then((data) => {
        setIframeUrl(data.dashboardUrl || null);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch dashboard config:", err);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[600px] p-8">
        <Loader2 className="h-16 w-16 text-gray-400 mb-4 animate-spin" />
        <h2 className="text-xl font-semibold text-gray-700 dark:text-gray-300 mb-2">
          Loading Dashboard...
        </h2>
      </div>
    );
  }

  if (!iframeUrl) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[600px] p-8">
        <BarChart3 className="h-16 w-16 text-gray-400 mb-4" />
        <h2 className="text-xl font-semibold text-gray-700 dark:text-gray-300 mb-2">
          Dashboard Not Configured
        </h2>
        <p className="text-sm text-gray-500 dark:text-gray-400 text-center max-w-md">
          Please configure the Metabase dashboard URL in your environment variables:
        </p>
        <div className="mt-4 p-4 bg-slate-100 dark:bg-slate-800 rounded-lg font-mono text-xs">
          <p>METABASE_DASHBOARD_URL</p>
        </div>
      </div>
    );
  }

  return (
    <div className="h-full flex flex-col">

      {/* Metabase Iframe */}
      <div className="flex-1 p-6">
        <div className="h-full bg-white dark:bg-slate-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden">
          <iframe
            src={iframeUrl}
            className="w-full h-full"
            title="Analytics Dashboard"
          />
        </div>
      </div>
    </div>
  );
}
