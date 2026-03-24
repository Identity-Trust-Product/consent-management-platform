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

import { getGrievancesForPrincipal } from "@/actions/grievances";
import {
  ValidatedDprmPageProps,
  withDprmSessionHandler,
} from "@/components/hoc/with-dprm-session-handler";
import TrackRequestsClient from "./_components/track-requests-client";

async function GrievancesPage({
  sessionContext,
  params,
  searchParams,
}: ValidatedDprmPageProps) {
  const { access_token } = params;
  const resolvedSearchParams = await searchParams;
  const minorDataPrincipalId = resolvedSearchParams?.minor_data_principal_id as
    | string
    | undefined;

  // Fetch grievances for this principal
  const result = await getGrievancesForPrincipal(
    access_token,
    minorDataPrincipalId
  );

  if (!result.success) {
    console.error("Failed to fetch grievances:", result.error);
  }

  return (
    <TrackRequestsClient token={access_token} grievances={result.data || []} />
  );
}

export default withDprmSessionHandler(GrievancesPage);
