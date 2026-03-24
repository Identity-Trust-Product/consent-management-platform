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

import { YourRecentConsentsClient } from "./your-recent-consents-client";
import { getLatestActiveConsentsForDprm } from "@/lib/services/dprm-service";

interface YourRecentConsentsSectionProps {
  dataPrincipalId: string;
}

// Server component
export async function YourRecentConsentsSection({
  dataPrincipalId,
}: YourRecentConsentsSectionProps) {
  try {
    const consents = await getLatestActiveConsentsForDprm(dataPrincipalId);
    return <YourRecentConsentsClient consents={consents} />;
  } catch (error) {
    console.error("Error fetching consents:", error);
    return <YourRecentConsentsClient consents={[]} />;
  }
}
