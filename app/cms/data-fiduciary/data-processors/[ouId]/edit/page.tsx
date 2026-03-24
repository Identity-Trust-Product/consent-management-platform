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
import { getDataProcessorById } from "@/actions/data-processors";
import { DataProcessorForm } from "@/app/cms/data-fiduciary/data-processors/_components/data-processor-form";

interface PageProps {
  params: Promise<{ ouId: string }>;
}

async function EditDataProcessorContent({ params }: PageProps) {
  try {
    await verifyPermission(Resources.DATA_PROCESSOR, Actions.UPDATE);
  } catch (error) {
    redirect("/cms/forbidden");
  }

  const resolvedParams = await params;
  const dataProcessorId = resolvedParams.ouId;

  // Fetch data processor data
  const dataProcessor = await getDataProcessorById(dataProcessorId);

  // If no data processor found, show 404
  if (!dataProcessor) {
    notFound();
  }

  return (
    <DataProcessorForm
      mode="edit"
      dataProcessor={dataProcessor}
      dataProcessorId={dataProcessorId}
    />
  );
}

export default function EditDataProcessorPage({ params }: PageProps) {
  return (
    <div className="pt-4 px-6">
      <Suspense fallback={<div>Loading...</div>}>
        <EditDataProcessorContent params={params} />
      </Suspense>
    </div>
  );
}
