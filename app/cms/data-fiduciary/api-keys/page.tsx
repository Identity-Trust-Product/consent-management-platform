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

import { getApiKeys, getApiKeyStats } from "@/actions/api-keys";
import { Forbidden } from "@/components/forbidden";
import { Key } from "lucide-react";
import { Suspense } from "react";
import { ApiKeysClient } from "./api-keys-client";

export const dynamic = "force-dynamic";

async function ApiKeysContent() {
  const [keysResult, statsResult] = await Promise.all([
    getApiKeys(),
    getApiKeyStats(),
  ]);

  // Check if user has permission
  if (!keysResult.success && keysResult.error?.includes("Forbidden")) {
    return <Forbidden requiredRole="privy_api_key_manager" />;
  }

  const apiKeys = keysResult.success ? keysResult.data || [] : [];
  const stats = statsResult.success
    ? statsResult.data
    : { total: 0, active: 0, inactive: 0 };

  return (
    <div className="pt-4 px-6">
      <div className="mx-auto pb-4">
        <ApiKeysClient data={apiKeys} stats={stats} />
      </div>
    </div>
  );
}

export default function ApiKeysPage() {
  return (
    <Suspense
      fallback={
        <div className="flex items-center justify-center h-96">
          <div className="text-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto">
              <Key className="h-4 w-4" />
            </div>
            <p className="mt-2 text-sm text-muted-foreground">
              Loading API keys...
            </p>
          </div>
        </div>
      }
    >
      <ApiKeysContent />
    </Suspense>
  );
}
