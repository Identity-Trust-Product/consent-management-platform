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
import { BusinessProcessForm } from "../_components/business-process-form";

interface PageProps {
  searchParams: Promise<{ step?: string; id?: string }>;
}

export default async function NewBusinessProcessPage({ searchParams }: PageProps) {
  try {
    await verifyPermission(Resources.BUSINESS_PROCESS, Actions.CREATE);
  } catch (error) {
    redirect("/cms/forbidden");
  }

  return (
    <div className="h-full flex flex-col pt-4 px-6">
      <BusinessProcessForm searchParams={searchParams} mode="new" />
    </div>
  );
}
