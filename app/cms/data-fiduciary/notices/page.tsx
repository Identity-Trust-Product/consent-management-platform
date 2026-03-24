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

import { Suspense } from "react";
import { Button } from "@/components/ui/button";
import { NoticesClient } from "@/app/cms/data-fiduciary/notices/notices-client";
import { getNotices } from "@/actions/notices";
import { Plus } from "lucide-react";
import Link from "next/link";
import { checkPermission } from "@/lib/rbac";
import { Resources, Actions } from "@/lib/constants/rbac";
import { Forbidden } from "@/components/forbidden";

async function NoticesContent() {
  const canRead = await checkPermission(Resources.NOTICE, Actions.READ);

  if (!canRead) {
    return <Forbidden requiredRole="privy_cgp_user" />;
  }

  const notices = await getNotices();

  // Check permissions
  const canCreate = await checkPermission(Resources.NOTICE, Actions.CREATE);

  const newButton = canCreate ? (
    <Button asChild>
      <Link href="/cms/data-fiduciary/notices/new" className="group">
        <Plus className="h-4 w-4 group-hover:scale-125 transition-transform" />
        <p className="text-base">New Prospective Consent</p>
      </Link>
    </Button>
  ) : null;

  return (
    <div className="pt-4 px-6">
      <div className="mx-auto pb-4">
        <NoticesClient data={notices} newButton={newButton} />
      </div>
    </div>
  );
}

export default function NoticesPage() {
  return (
    <Suspense
      fallback={
        <div className="flex items-center justify-center h-96">
          <div className="text-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto"></div>
            <p className="mt-2 text-sm text-muted-foreground">
              Loading notices...
            </p>
          </div>
        </div>
      }
    >
      <NoticesContent />
    </Suspense>
  );
}
