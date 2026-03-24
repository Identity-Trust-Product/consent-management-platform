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

interface GrievanceStatusUpdateProps {
  grievanceId: string;
  status: string;
  comments?: string;
  trackingLink: string;
  grievanceTitle?: string;
  principalName?: string;
  organizationName?: string;
}

export function GrievanceStatusUpdate({
  grievanceId,
  status,
  comments,
  trackingLink,
  grievanceTitle,
  principalName = "User",
  organizationName = "Open Bharart Digital Consent",
}: GrievanceStatusUpdateProps) {
  const preview = "Update: Your grievance request status has changed";
  const baseUrl = process.env.BASE_PATH || "http://localhost:3000";

  return (
    <EmailLayout preview={preview}>
      <EmailIllustration baseUrl={baseUrl} />

      <StatusBanner type="info" title="An Update" baseUrl={baseUrl} />

      <Section>
        <Text className="mb-4 text-lg leading-relaxed text-[#484E56]">
          Dear {principalName},
        </Text>
      </Section>

      <Section>
        <Text className="mb-6 text-lg leading-relaxed text-[#484E56]">
          Your grievance request{grievanceTitle ? ` regarding "${grievanceTitle}"` : ''} is now marked as &quot;{status}&quot; as of {new Date().toLocaleDateString('en-US', { month: '2-digit', day: '2-digit', year: 'numeric' })}
        </Text>
      </Section>

      {comments && (
        <Section>
          <Text className="mb-6 text-lg leading-relaxed text-[#484E56]">
            {comments}
          </Text>
        </Section>
      )}

      <Section className="mb-6 text-center">
        <Button href={trackingLink}>Track your request</Button>
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
  variables: GrievanceStatusUpdateProps
): Promise<{ subject: string; html: string; text: string }> {
  const subject = variables.grievanceTitle
    ? `Update: Your grievance request regarding "${variables.grievanceTitle}"`
    : "Update: Your grievance request status has changed";
  const html = await render(<GrievanceStatusUpdate {...variables} />);

  const commentsText = variables.comments
    ? `\nUpdate Details:\n${variables.comments}\n`
    : "";

  const text = `
Grievance Status Update

Your grievance #${variables.grievanceId} has been updated.

Current Status: ${variables.status}
${commentsText}
You can track the progress of your grievance using the link below:
${variables.trackingLink}

If you have any questions or concerns, please don't hesitate to contact us.

Regards,
${variables.organizationName || "Open Bharart Digital Consent"}
  `.trim();

  return { subject, html, text };
}
