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

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { WebhookResponse } from "@/lib/schemas/webhook-schemas";
import { Plus, Webhook, History } from "lucide-react";
import { useState } from "react";
import { CreateWebhookDialog } from "./create-webhook-dialog";
import { WebhooksTable } from "./webhooks-table";
import Link from "next/link";

interface WebhooksClientProps {
  data: WebhookResponse[];
  stats: {
    total: number;
    active: number;
    inactive: number;
  };
  canCreate: boolean;
  canUpdate: boolean;
  canDelete: boolean;
}

export function WebhooksClient({
  data,
  stats,
  canCreate,
  canUpdate,
  canDelete,
}: WebhooksClientProps) {
  const [createDialogOpen, setCreateDialogOpen] = useState(false);

  return (
    <div className="space-y-6">
      {/* Stats Cards */}
      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Total Webhooks
            </CardTitle>
            <Webhook className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.total}</div>
            <p className="text-xs text-muted-foreground">
              All webhook endpoints
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Active Webhooks
            </CardTitle>
            <div className="h-2 w-2 rounded-full bg-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.active}</div>
            <p className="text-xs text-muted-foreground">Currently enabled</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Inactive Webhooks
            </CardTitle>
            <div className="h-2 w-2 rounded-full bg-gray-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.inactive}</div>
            <p className="text-xs text-muted-foreground">Currently disabled</p>
          </CardContent>
        </Card>
      </div>

      {/* Webhooks Table */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold">
            Configured Webhooks ({data.length})
          </h2>
          <div className="flex gap-2">
            <Button variant="outline" asChild>
              <Link href="/cms/data-fiduciary/webhooks/logs">
                <History className="h-4 w-4 mr-2" />
                View Logs
              </Link>
            </Button>
            {canCreate && (
              <Button onClick={() => setCreateDialogOpen(true)}>
                <Plus className="h-4 w-4 mr-2" />
                Create Webhook
              </Button>
            )}
          </div>
        </div>
        <WebhooksTable
          data={data}
          canUpdate={canUpdate}
          canDelete={canDelete}
        />
      </div>

      {/* Create Dialog */}
      <CreateWebhookDialog
        open={createDialogOpen}
        onOpenChange={setCreateDialogOpen}
      />
    </div>
  );
}
