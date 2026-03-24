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
import { BusinessUnitsClient } from "@/app/cms/data-fiduciary/business-units/business-units-client";
import { getBusinessUnits } from "@/actions/business-units";
import { Plus } from "lucide-react";
import Link from "next/link";
import { Actions, Resources, checkPermission } from "@/lib/rbac";
import { Forbidden } from "@/components/forbidden";

async function BusinessUnitsContent() {
  const canRead = await checkPermission(Resources.BUSINESS_UNIT, Actions.READ);

  if (!canRead) {
    return <Forbidden requiredRole="privy_cgp_user" />;
  }

  const businessUnits = await getBusinessUnits();
  const canCreate = await checkPermission(Resources.BUSINESS_UNIT, Actions.CREATE);
  const canUpdate = await checkPermission(Resources.BUSINESS_UNIT, Actions.UPDATE);
  const canDelete = await checkPermission(Resources.BUSINESS_UNIT, Actions.DELETE);

  const newButton = canCreate ? (
    <Button asChild>
      <Link href="/cms/data-fiduciary/business-units/new" className="group">
        <Plus className="h-4 w-4 group-hover:scale-125 transition-transform" />
        <p className="text-base">New Business Unit</p>
      </Link>
    </Button>
  ) : null;

  return (
    <div className="pt-4 px-6">
      <div className="mx-auto">
        <BusinessUnitsClient
          data={businessUnits}
          newButton={newButton}
          canUpdate={canUpdate}
          canDelete={canDelete}
        />
      </div>
    </div>
  );
}

export default function BusinessUnitPage() {
  return (
    <Suspense
      fallback={
        <div className="flex items-center justify-center h-96">
          <div className="text-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto"></div>
            <p className="mt-2 text-sm text-muted-foreground">
              Loading business units...
            </p>
          </div>
        </div>
      }
    >
      <BusinessUnitsContent />
    </Suspense>
  );
}
