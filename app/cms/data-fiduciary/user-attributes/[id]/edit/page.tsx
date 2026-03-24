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
import { getUserAttributeById } from "@/actions/user-attributes";
import { UserAttributeForm } from "@/app/cms/data-fiduciary/user-attributes/_components/user-attribute-form";

interface PageProps {
  params: Promise<{ id: string }>;
}

async function EditUserAttributeContent({ params }: PageProps) {
  try {
    await verifyPermission(Resources.USER_ATTRIBUTE, Actions.UPDATE);
  } catch (error) {
    redirect("/cms/forbidden");
  }

  const resolvedParams = await params;
  const userAttributeId = resolvedParams.id;
  const id = parseInt(userAttributeId);

  if (isNaN(id)) {
    notFound();
  }

  // Fetch user attribute data
  const userAttribute = await getUserAttributeById(id);

  // If no user attribute found, show 404
  if (!userAttribute) {
    notFound();
  }

  return (
    <UserAttributeForm
      mode="edit"
      userAttribute={userAttribute}
      userAttributeId={userAttributeId}
    />
  );
}

export default function EditUserAttributePage({ params }: PageProps) {
  return (
    <div className="pt-4 px-6">
      <Suspense fallback={<div>Loading...</div>}>
        <EditUserAttributeContent params={params} />
      </Suspense>
    </div>
  );
}
