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

interface ConsentExpiringReminderProps {
  consents: Array<{
    consentPurposeName: string;
    expiryDate: string;
  }>;
  businessProcessName: string;
  dprmLink: string;
  principalName?: string;
  daysUntilExpiry?: number;
  organizationName?: string;
}

export function ConsentExpiringReminder({
  consents,
  businessProcessName,
  dprmLink,
  principalName = "User",
  daysUntilExpiry = 30,
  organizationName = "Open Bharart Digital Consent",
}: ConsentExpiringReminderProps) {
  const preview = "Reminder: Your consent is about to expire";
  const baseUrl = process.env.BASE_PATH || "http://localhost:3000";

  return (
    <EmailLayout preview={preview}>
      <EmailIllustration baseUrl={baseUrl} />

      <StatusBanner type="reminder" title="Reminder" baseUrl={baseUrl} />

      <Section>
        <Text className="mb-4 text-lg leading-relaxed text-[#484E56]">
          Dear {principalName},
        </Text>
      </Section>

      <Section>
        <Text className="mb-6 text-lg leading-relaxed text-[#484E56]">
          Your consent granted to {businessProcessName} will expire in {daysUntilExpiry} day{daysUntilExpiry !== 1 ? 's' : ''}. To continue receiving services without interruption, please renew your consent here:
        </Text>
      </Section>

      <Section className="mb-6 text-center">
        <Button href={dprmLink}>Renew consent</Button>
      </Section>

      <Section>
        <Text className="mb-4 text-lg leading-relaxed text-[#484E56]">
          If no action is taken, your consent will be treated as expired, and associated services may be impacted.
        </Text>
      </Section>

      <Section>
        <Text className="text-lg leading-relaxed text-[#484E56]">
          Regards,
        </Text>
        <Text className="text-lg leading-relaxed text-[#484E56]">
          CMS (Privy)
        </Text>
      </Section>
    </EmailLayout>
  );
}

// Export render function for email service
export async function renderEmail(
  variables: ConsentExpiringReminderProps
): Promise<{ subject: string; html: string; text: string }> {
  const subject = "Reminder: Your consent is about to expire";
  const html = await render(<ConsentExpiringReminder {...variables} />);

  const consentsList = variables.consents
    .map((c) => `• ${c.consentPurposeName} - Expires on: ${c.expiryDate}`)
    .join("\n");

  const text = `
Consent Expiring Soon

Your consent for ${variables.businessProcessName} is about to expire.

Expiring Consents:
${consentsList}

To continue using our services without interruption, please renew your consent using the link below:
${variables.dprmLink}

If you have any questions or concerns, please don't hesitate to contact us.

Regards,
${variables.organizationName || "Open Bharart Digital Consent"}
  `.trim();

  return { subject, html, text };
}
