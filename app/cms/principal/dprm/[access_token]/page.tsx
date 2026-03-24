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
import { Lightbulb } from "lucide-react";
import { OverviewSection } from "./_components/overview-section-server";
import { QuickActionsSection } from "./_components/quick-actions-section";
import { DpdpInfoBanner } from "./_components/dpdp-info-banner";

async function DprmPage({
  sessionContext,
  params,
  searchParams,
}: ValidatedDprmPageProps) {
  const { access_token } = params;
  const resolvedSearchParams = await searchParams;
  const minorDataPrincipalId = resolvedSearchParams?.minor_data_principal_id as
    | string
    | undefined;

  // Use minor ID if present, otherwise fall back to the logged-in principal ID
  const dataPrincipalId =
    minorDataPrincipalId || sessionContext.dataPrincipalId;

  return (
    <>
      {/* Desktop & Tablet Layout */}
      <div className="hidden md:block py-6 max-w-[1400px] mx-auto">
        <div className="grid md:grid-cols-2 gap-8 mb-8 px-6">
          {/* Left Column - Overview */}
          <div className="space-y-6 flex items-start justify-end">
            <div className="w-full max-w-[500px]">
              <OverviewSection
                dataPrincipalId={dataPrincipalId}
                accessToken={access_token}
              />
            </div>
          </div>

          {/* Right Column - Quick Actions - Match Overview width */}
          <div className="space-y-6 flex items-stretch justify-start">
            <div className="w-full max-w-[500px] h-full">
              <QuickActionsSection accessToken={access_token} />
            </div>
          </div>
        </div>

        {/* Lightbulb Info - Centered and full width */}
        <div className="flex justify-center">
          <DpdpInfoBanner />
        </div>
      </div>

      {/* Mobile Layout - with overlapping shield */}
      <div className="md:hidden relative min-h-[55rem] isolate h-full">
        {/* Shield positioned at top with negative margin to overlap */}
        <div className="absolute top-[-2.5rem] w-full pb-4">
          <OverviewSection
            dataPrincipalId={dataPrincipalId}
            accessToken={access_token}
          />
        </div>

        {/* Quick Actions section at bottom */}
        <QuickActionsSection accessToken={access_token} />
      </div>
    </>
  );
}

export default withDprmSessionHandler(DprmPage);
export const dynamic = "force-dynamic";
