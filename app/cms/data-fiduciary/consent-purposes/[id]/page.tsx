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
import { fetchStepData } from "@/lib/queries/consent-purpose-queries";
import { ConsentPurposeView } from "@/app/cms/data-fiduciary/consent-purposes/_components/consent-purpose-view";

interface PageProps {
  params: Promise<{ id: string }>;
}

async function ConsentPurposeViewContent({ params }: PageProps) {
  try {
    await verifyPermission(Resources.CONSENT_PURPOSE, Actions.READ);
  } catch (error) {
    redirect("/cms/forbidden");
  }

  const resolvedParams = await params;
  const consentPurposeId = resolvedParams.id;

  // Fetch all data for step 5 view
  const data = await fetchStepData(5, consentPurposeId);

  // If no consent purpose found, show 404
  if (!data.consentPurpose) {
    notFound();
  }

  return <ConsentPurposeView data={data} consentPurposeId={consentPurposeId} />;
}

export default function ConsentPurposeViewPage({ params }: PageProps) {
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
            <ConsentPurposeViewContent params={params} />
          </div>
        </Suspense>
      </div>
    </div>
  );
}
