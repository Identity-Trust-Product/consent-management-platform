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
import { ConsentPurposesClient } from "@/app/cms/data-fiduciary/consent-purposes/consent-purposes-client";
import { getConsentPurposes } from "@/actions/consent-purposes";
import { Plus } from "lucide-react";
import Link from "next/link";
import { checkPermission } from "@/lib/rbac";
import { Resources, Actions } from "@/lib/constants/rbac";
import { Forbidden } from "@/components/forbidden";

async function ConsentPurposesContent() {
  const canRead = await checkPermission(Resources.CONSENT_PURPOSE, Actions.READ);

  if (!canRead) {
    return <Forbidden requiredRole="privy_cgp_user" />;
  }

  const consentPurposes = await getConsentPurposes();

  // Check permissions
  const canCreate = await checkPermission(Resources.CONSENT_PURPOSE, Actions.CREATE);
  const canUpdate = await checkPermission(Resources.CONSENT_PURPOSE, Actions.UPDATE);
  const canDelete = await checkPermission(Resources.CONSENT_PURPOSE, Actions.DELETE);

  const newButton = canCreate ? (
    <Button asChild>
      <Link href="/cms/data-fiduciary/consent-purposes/new" className="group">
        <Plus className="h-4 w-4 group-hover:scale-125 transition-transform" />
        <p className="text-base">New Consent Purpose</p>
      </Link>
    </Button>
  ) : null;

  return (
    <div className="pt-4 px-6">
      <div className="mx-auto">
        <ConsentPurposesClient
          data={consentPurposes}
          newButton={newButton}
          canUpdate={canUpdate}
          canDelete={canDelete}
        />
      </div>
    </div>
  );
}

export default function ConsentPurposesPage() {
  return (
    <Suspense
      fallback={
        <div className="flex items-center justify-center h-96">
          <div className="text-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto"></div>
            <p className="mt-2 text-sm text-muted-foreground">
              Loading consent purposes...
            </p>
          </div>
        </div>
      }
    >
      <ConsentPurposesContent />
    </Suspense>
  );
}
