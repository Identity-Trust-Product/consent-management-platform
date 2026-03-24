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

import { notFound, redirect } from "next/navigation";
import { verifyPermission } from "@/lib/safe-action";
import { Resources, Actions } from "@/lib/constants/rbac";
import { getNoticeByPublicId } from "@/actions/notices";
import { ShowNoticeClient } from "./show-notice-client";

interface ShowNoticePageProps {
  params: Promise<{
    public_id: string;
  }>;
  searchParams: Promise<{
    copy_notice_link?: string;
  }>;
}

export default async function ShowNoticePage({
  params,
  searchParams,
}: ShowNoticePageProps) {
  try {
    await verifyPermission(Resources.NOTICE, Actions.READ);
  } catch (error) {
    redirect("/cms/forbidden");
  }

  const { public_id } = await params;
  const { copy_notice_link } = await searchParams;

  const notice = await getNoticeByPublicId(public_id);

  if (!notice) {
    notFound();
  }

  const shouldShowDialog = copy_notice_link === "true";

  return (
    <div className="pt-4 px-6">
      <ShowNoticeClient notice={notice} shouldShowDialog={shouldShowDialog} />
    </div>
  );
}
