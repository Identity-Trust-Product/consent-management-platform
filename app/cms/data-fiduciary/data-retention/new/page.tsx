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

import { getBusinessProcessesWithRules } from "@/actions/data-retention-policies";
import { PolicyForm } from "../_components/policy-form";

export const dynamic = 'force-dynamic';

export default async function NewDataRetentionPolicyPage() {
  const bpResult = await getBusinessProcessesWithRules();
  const businessProcesses = bpResult.success ? bpResult.data : [];

  return (
    <div className="h-full flex flex-col">
      <PolicyForm businessProcesses={businessProcesses} />
    </div>
  );
}
