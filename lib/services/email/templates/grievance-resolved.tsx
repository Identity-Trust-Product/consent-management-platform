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

import React from "react";
import { render, Section, Text } from "@react-email/components";
import { Button } from "../components/Button";
import { EmailIllustration } from "../components/EmailIllustration";
import { EmailLayout } from "../components/EmailLayout";
import { StatusBanner } from "../components/StatusBanner";

interface GrievanceResolvedProps {
  grievanceId: string;
  resolutionComments: string;
  trackingLink: string;
  grievanceTitle?: string;
  principalName?: string;
  actualStatus?: "Resolved" | "Closed";
  organizationName?: string;
}

export function GrievanceResolved({
  grievanceId,
  resolutionComments,
  trackingLink,
  grievanceTitle,
  principalName = "User",
  actualStatus = "Closed",
  organizationName = "Open Bharart Digital Consent",
}: GrievanceResolvedProps) {
  const preview = "Grievance Resolution Update";
  const baseUrl = process.env.BASE_PATH || "http://localhost:3000";

  return (
    <EmailLayout preview={preview}>
      <EmailIllustration baseUrl={baseUrl} />

      <StatusBanner type="success" title="Grievance addressed" baseUrl={baseUrl} />

      <Section>
        <Text className="mb-4 text-lg leading-relaxed text-[#484E56]">
          Dear {principalName},
        </Text>
      </Section>

      <Section>
        <Text className="mb-2 text-lg leading-relaxed text-[#484E56]">
          <strong>Grievance ID:</strong> {grievanceId}
        </Text>
        <Text className="mb-2 text-lg leading-relaxed text-[#484E56]">
          <strong>Status:</strong> {actualStatus}
        </Text>
        <Text className="mb-2 text-lg leading-relaxed text-[#484E56]">
          <strong>Resolution Date:</strong> {new Date().toLocaleDateString('en-US', { month: '2-digit', day: '2-digit', year: 'numeric' })}
        </Text>
        <Text className="mb-6 text-lg leading-relaxed text-[#484E56]">
          <strong>Remarks:</strong> {resolutionComments}
        </Text>
      </Section>

      <Section className="mb-6 text-center">
        <Button href={trackingLink}>View details</Button>
      </Section>

      <Section>
        <Text className="text-lg leading-relaxed text-[#484E56]">
          Regards,
        </Text>
        <Text className="text-lg leading-relaxed text-[#484E56]">
          Privy CMP
        </Text>
      </Section>
    </EmailLayout>
  );
}

// Export render function for email service
export async function renderEmail(
  variables: GrievanceResolvedProps
): Promise<{ subject: string; html: string; text: string }> {
  const subject = variables.grievanceTitle
    ? `Grievance Resolution Update – ${variables.grievanceTitle}`
    : "Grievance Resolution Update";
  const html = await render(<GrievanceResolved {...variables} />);

  const text = `
Grievance Resolved

Great news! Your grievance #${variables.grievanceId} has been successfully resolved.

Resolution Details:
${variables.resolutionComments}

We appreciate your patience. You can view the full details using the link below:
${variables.trackingLink}

If you have any feedback or further concerns, please don't hesitate to reach out to us.

Regards,
${variables.organizationName || "Open Bharart Digital Consent"}
  `.trim();

  return { subject, html, text };
}
