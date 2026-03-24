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
import { notFound, redirect } from "next/navigation";
import { verifyPermission } from "@/lib/safe-action";
import { Resources, Actions } from "@/lib/constants/rbac";
import { getBusinessUnitById } from "@/actions/business-units";
import { BusinessUnitView } from "@/app/cms/data-fiduciary/business-units/_components/business-unit-view";

interface PageProps {
  params: Promise<{ id: string }>;
}

async function ViewBusinessUnitContent({ params }: PageProps) {
  try {
    await verifyPermission(Resources.BUSINESS_UNIT, Actions.READ);
  } catch (error) {
    redirect("/cms/forbidden");
  }

  const resolvedParams = await params;
  const businessUnitId = resolvedParams.id;
  const id = parseInt(businessUnitId);

  if (isNaN(id)) {
    notFound();
  }

  // Fetch business unit data
  const businessUnit = await getBusinessUnitById(id);

  // If no business unit found, show 404
  if (!businessUnit) {
    notFound();
  }

  return (
    <BusinessUnitView
      businessUnit={businessUnit}
      businessUnitId={businessUnitId}
    />
  );
}

export default function BusinessUnitViewPage({ params }: PageProps) {
  return (
    <div className="pt-4 px-6 h-full">
      <Suspense fallback={<div>Loading...</div>}>
        <ViewBusinessUnitContent params={params} />
      </Suspense>
    </div>
  );
}
