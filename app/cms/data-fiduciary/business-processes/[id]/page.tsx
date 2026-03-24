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

import {
  getBusinessProcessById,
  getBusinessProcessData,
} from "@/actions/business-processes";
import { getBusinessUnits } from "@/actions/business-units";
import { BusinessProcessView } from "@/app/cms/data-fiduciary/business-processes/_components/business-process-view";
import { notFound, redirect } from "next/navigation";
import { Suspense } from "react";
import { verifyPermission } from "@/lib/safe-action";
import { Resources, Actions } from "@/lib/constants/rbac";

interface PageProps {
  params: Promise<{ id: string }>;
}

async function BusinessProcessViewContent({ params }: PageProps) {
  try {
    await verifyPermission(Resources.BUSINESS_PROCESS, Actions.READ);
  } catch (error) {
    redirect("/cms/forbidden");
  }

  const resolvedParams = await params;
  const businessProcessId = resolvedParams.id;
  const id = parseInt(businessProcessId);

  if (isNaN(id)) {
    notFound();
  }

  // Fetch all necessary data
  const [businessProcess, businessProcessData, businessUnits] =
    await Promise.all([
      getBusinessProcessById(id),
      getBusinessProcessData(),
      getBusinessUnits(),
    ]);

  // If no business process found, show 404
  if (!businessProcess) {
    notFound();
  }

  const data = {
    businessProcess,
    businessUnits,
    consentPurposes: businessProcessData.consentPurposes,
    dataProcessors: businessProcessData.dataProcessors,
    userAttributes: businessProcessData.userAttributes,
  };

  return (
    <BusinessProcessView data={data} businessProcessId={businessProcessId} />
  );
}

export default function BusinessProcessViewPage({ params }: PageProps) {
  return (
    <div className="pt-4 px-6 h-full">
      <div className="container mx-auto h-full flex flex-col">
        <Suspense
          fallback={
            <div className="flex items-center justify-center h-96">
              <div className="text-center">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto"></div>
                <p className="mt-2 text-sm text-muted-foreground">Loading...</p>
              </div>
            </div>
          }
        >
          <div className="border rounded-t-lg h-full">
            <BusinessProcessViewContent params={params} />
          </div>
        </Suspense>
      </div>
    </div>
  );
}
