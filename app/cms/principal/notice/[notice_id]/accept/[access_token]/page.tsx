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
import { SuccessPage } from "@/app/cms/principal/notice/[notice_id]/_components/success-page";

async function NoticeAcceptPage({
  tokenPayload,
  params,
  accessToken,
  searchParams,
}: ValidatedNoticePageProps & { searchParams: Promise<{ [key: string]: string | string[] | undefined }> }) {
  // Extract notice_id from URL params
  const noticeId = params.notice_id;
  const { lang } = await searchParams;

  // Verify that the notice_id in the URL matches the one in the token
  if (tokenPayload.public_id !== noticeId) {
    notFound();
  }

  const notice = await getNoticeWithFullDataByPublicId(noticeId);

  if (!notice) {
    notFound();
  }

  return (
    <SuccessPage
      dataPrincipalId={notice.dataPrincipalId}
      noticePublicId={notice.publicId}
      accessToken={accessToken}
      forMinor={notice.forMinor}
      metadata={notice.metadata}
      lang={typeof lang === 'string' ? lang : undefined}
    />
  );
}

export default withNoticeTokenValidation(NoticeAcceptPage);
export const dynamic = "force-dynamic";
