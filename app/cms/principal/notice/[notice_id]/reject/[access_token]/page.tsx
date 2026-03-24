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

import { getNoticeWithFullDataByPublicId } from "@/lib/services/notices-service";
import { notFound } from "next/navigation";
import {
  withNoticeTokenValidation,
  ValidatedNoticePageProps,
} from "@/components/hoc/with-notice-token-validation";
import { RejectPage } from "@/app/cms/principal/notice/[notice_id]/_components/reject-page";

async function NoticeRejectPage({
  tokenPayload,
  params,
}: ValidatedNoticePageProps) {
  // Extract notice_id from URL params
  const noticeId = params.notice_id;

  // Verify that the notice_id in the URL matches the one in the token
  if (tokenPayload.public_id !== noticeId) {
    notFound();
  }

  const notice = await getNoticeWithFullDataByPublicId(noticeId);

  if (!notice) {
    notFound();
  }

  return <RejectPage />;
}

export default withNoticeTokenValidation(NoticeRejectPage);
export const dynamic = "force-dynamic";
