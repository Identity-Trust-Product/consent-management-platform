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

import { getActiveConsentsOverview } from "@/lib/services/consents-service";
import { OverviewSectionClient } from "./overview-section-client";

interface OverviewSectionProps {
  dataPrincipalId: string;
  accessToken: string;
}

export async function OverviewSection({
  dataPrincipalId,
  accessToken,
}: OverviewSectionProps) {
  const { activeConsentsCount, servicesCount } =
    await getActiveConsentsOverview(dataPrincipalId);

  return (
    <OverviewSectionClient
      activeConsentsCount={activeConsentsCount}
      servicesCount={servicesCount}
      accessToken={accessToken}
    />
  );
}
