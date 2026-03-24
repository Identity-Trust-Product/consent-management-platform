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

import { redirect } from "next/navigation";
import { verifyPermission } from "@/lib/safe-action";
import { Resources, Actions } from "@/lib/constants/rbac";
import { ConsentPurposeForm } from "../../_components/consent-purpose-form";

interface PageProps {
  searchParams: Promise<{ step?: string }>;
  params: Promise<{ id: string }>;
}

export default async function EditConsentPurposePage({
  searchParams,
  params,
}: PageProps) {
  try {
    await verifyPermission(Resources.CONSENT_PURPOSE, Actions.UPDATE);
  } catch (error) {
    redirect("/cms/forbidden");
  }

  const resolvedParams = await params;
  const resolvedSearchParams = await searchParams;

  // Merge the id from params with searchParams
  const searchParamsWithId = Promise.resolve({
    ...resolvedSearchParams,
    id: resolvedParams.id,
  });

  return (
    <div className="h-full flex flex-col pt-4 px-6">
      <ConsentPurposeForm searchParams={searchParamsWithId} mode="edit" />
    </div>
  );
}
