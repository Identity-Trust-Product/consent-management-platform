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

import { getGrievanceForPrincipal } from "@/actions/grievances";
import { notFound } from "next/navigation";
import { withDprmSessionHandler } from "@/components/hoc/with-dprm-session-handler";
import PrincipalChatClient from "./_components/principal-chat-client";
import type { ValidatedDprmPageProps } from "@/components/hoc/with-dprm-session-handler";

async function PrincipalChatPage({
  params,
  sessionContext,
}: ValidatedDprmPageProps & {
  params: { access_token: string; grievanceId: string };
}) {
  const { access_token, grievanceId } = params;
  const id = parseInt(grievanceId);

  if (isNaN(id)) {
    notFound();
  }

  const result = await getGrievanceForPrincipal(access_token, id);

  if (!result.success || !result.data) {
    notFound();
  }

  return (
    <PrincipalChatClient
      grievance={result.data}
      accessToken={access_token}
      dataPrincipalName={
        (result.data.metadata as any)?.name || "Data Principal"
      }
    />
  );
}

export default withDprmSessionHandler(PrincipalChatPage);
