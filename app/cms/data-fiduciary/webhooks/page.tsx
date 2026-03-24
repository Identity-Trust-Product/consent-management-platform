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

import { getWebhooks } from "@/actions/webhooks";
import { Loader2 } from "lucide-react";
import { Suspense } from "react";
import { WebhooksClient } from "./webhooks-client";
import { checkPermission } from "@/lib/rbac";
import { Resources, Actions } from "@/lib/constants/rbac";
import { Forbidden } from "@/components/forbidden";

export const dynamic = "force-dynamic";

async function WebhooksContent() {
  // Check permissions using standard pattern
  const canRead = await checkPermission(Resources.WEBHOOK, Actions.READ);

  if (!canRead) {
    return <Forbidden requiredRole="privy_api_key_manager" />;
  }

  const canCreate = await checkPermission(Resources.WEBHOOK, Actions.CREATE);
  const canUpdate = await checkPermission(Resources.WEBHOOK, Actions.UPDATE);
  const canDelete = await checkPermission(Resources.WEBHOOK, Actions.DELETE);

  const webhooksResult = await getWebhooks();
  const webhooks = webhooksResult.success ? webhooksResult.data || [] : [];

  // Calculate stats
  const stats = {
    total: webhooks.length,
    active: webhooks.filter((w) => w.isActive).length,
    inactive: webhooks.filter((w) => !w.isActive).length,
  };

  return (
    <div className="pt-4 px-6">
      <div className="mx-auto pb-4">
        <WebhooksClient
          data={webhooks}
          stats={stats}
          canCreate={canCreate}
          canUpdate={canUpdate}
          canDelete={canDelete}
        />
      </div>
    </div>
  );
}

export default function WebhooksPage() {
  return (
    <Suspense
      fallback={
        <div className="flex items-center justify-center h-96">
          <div className="text-center">
            <Loader2 className="h-8 w-8 animate-spin text-primary mx-auto" />
            <p className="mt-2 text-sm text-muted-foreground">
              Loading webhooks...
            </p>
          </div>
        </div>
      }
    >
      <WebhooksContent />
    </Suspense>
  );
}
