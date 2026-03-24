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

import { getBusinessProcessesWithRules, getDataRetentionPolicyById } from "@/actions/data-retention-policies";
import { PolicyForm } from "../../_components/policy-form";
import { notFound } from "next/navigation";

export default async function EditDataRetentionPolicyPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id: idString } = await params;
  const id = parseInt(idString);
  if (isNaN(id)) {
    notFound();
  }

  const [policyResult, bpResult] = await Promise.all([
    getDataRetentionPolicyById(id),
    getBusinessProcessesWithRules(),
  ]);

  if (!policyResult.success || !policyResult.data) {
    notFound();
  }

  const businessProcesses = bpResult.success ? bpResult.data : [];

  return (
    <div className="h-full bg-muted/10">
      <PolicyForm
        businessProcesses={businessProcesses}
        initialData={policyResult.data}
      />
    </div>
  );
}
