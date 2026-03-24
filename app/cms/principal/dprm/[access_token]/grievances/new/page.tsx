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

import { getBusinessProcessesForPrincipal } from "@/actions/dprm";
import {
  ValidatedDprmPageProps,
  withDprmSessionHandler,
} from "@/components/hoc/with-dprm-session-handler";
import NewGrievanceClient from "./_components/new-grievance-client";

async function NewGrievancePage({
  sessionContext,
  params,
  searchParams,
}: ValidatedDprmPageProps) {
  const { access_token } = params;
  const resolvedSearchParams = await searchParams;
  const minorDataPrincipalId = resolvedSearchParams?.minor_data_principal_id as
    | string
    | undefined;

  const dataPrincipalId =
    minorDataPrincipalId || sessionContext.dataPrincipalId;

  // Fetch business processes the principal has consent for
  const result = await getBusinessProcessesForPrincipal(
    access_token,
    minorDataPrincipalId
  );

  if (!result.success) {
    console.error("Failed to fetch business processes:", result.error);
  }

  return (
    <NewGrievanceClient
      key={dataPrincipalId}
      token={access_token}
      dataPrincipalId={dataPrincipalId}
      businessProcesses={result.data || []}
    />
  );
}

export default withDprmSessionHandler(NewGrievancePage);
