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

import {
  ValidatedDprmPageProps,
  withDprmSessionHandler,
} from "@/components/hoc/with-dprm-session-handler";
import { getConsentWalletData } from "./actions";
import { getTimelineData } from "./timeline-actions";
import { ConsentWalletClientPage } from "./ConsentWalletClientPage";

async function ConsentWalletPage({
  sessionContext,
  searchParams,
}: ValidatedDprmPageProps) {
  const resolvedSearchParams = await searchParams;
  const minorDataPrincipalId = resolvedSearchParams?.minor_data_principal_id as
    | string
    | undefined;

  const dataPrincipalId =
    minorDataPrincipalId || sessionContext.dataPrincipalId;
  const majorDataPrincipalId = minorDataPrincipalId
    ? sessionContext.dataPrincipalId
    : undefined;

  // Fetch both datasets in parallel for performance
  const [walletResult, timelineResult] = await Promise.all([
    getConsentWalletData(dataPrincipalId, majorDataPrincipalId),
    getTimelineData(dataPrincipalId, majorDataPrincipalId),
  ]);

  if (!walletResult.success) {
    return (
      <div className="p-4 text-center text-red-500">
        Error loading consent wallet. Please refresh.
      </div>
    );
  }

  // Use timeline events if successful, otherwise empty array
  const timelineEvents = timelineResult.success ? timelineResult.events : [];

  return (
    // CHANGED: Increased max-width from 'max-w-md' to 'max-w-6xl'
    // to accommodate the Desktop Split View (Timeline + Details)
    <div className="w-full mx-auto bg-white shadow-sm min-h-screen md:shadow-lg md:rounded-lg  md:min-h-[800px] overflow-hidden">
      <ConsentWalletClientPage
        services={walletResult.services}
        timelineEvents={timelineEvents}
        userAttributes={walletResult.userAttributes!}
      />
    </div>
  );
}

export default withDprmSessionHandler(ConsentWalletPage);
export const dynamic = "force-dynamic";
