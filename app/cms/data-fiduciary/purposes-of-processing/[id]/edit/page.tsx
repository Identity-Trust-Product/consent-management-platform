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
import { getPurposeOfProcessingById } from "@/actions/purposes-of-processing";
import { PurposeOfProcessingForm } from "@/app/cms/data-fiduciary/purposes-of-processing/_components/purpose-of-processing-form";

interface PageProps {
  params: Promise<{ id: string }>;
}

async function EditPurposeOfProcessingContent({ params }: PageProps) {
  try {
    await verifyPermission(Resources.PURPOSE_OF_PROCESSING, Actions.UPDATE);
  } catch (error) {
    redirect("/cms/forbidden");
  }

  const resolvedParams = await params;
  const purposeOfProcessingId = resolvedParams.id;
  const id = parseInt(purposeOfProcessingId);

  if (isNaN(id)) {
    notFound();
  }

  // Fetch purpose of processing data
  const purposeOfProcessing = await getPurposeOfProcessingById(id);

  // If no purpose of processing found, show 404
  if (!purposeOfProcessing) {
    notFound();
  }

  return (
    <PurposeOfProcessingForm
      mode="edit"
      purposeOfProcessing={purposeOfProcessing}
      purposeOfProcessingId={purposeOfProcessingId}
    />
  );
}

export default function EditPurposeOfProcessingPage({ params }: PageProps) {
  return (
    <div className="pt-4 px-6">
      <Suspense fallback={<div>Loading...</div>}>
        <EditPurposeOfProcessingContent params={params} />
      </Suspense>
    </div>
  );
}
