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

import { Hr, render, Section, Text } from "@react-email/components";
import { Button } from "../components/Button";
import { EmailIllustration } from "../components/EmailIllustration";
import { EmailLayout } from "../components/EmailLayout";
import { StatusBanner } from "../components/StatusBanner";

interface ConsentVersionModifiedPurposeProps {
  principalName: string;
  businessProcessName: string;
  purposeName: string;
  changes: { field: string; before: string; after: string }[];
  dprmLink: string;
  baseUrl?: string;
}

export default function ConsentVersionModifiedPurpose({
  principalName,
  businessProcessName,
  purposeName,
  changes,
  dprmLink,
  baseUrl = process.env.BASE_PATH || "http://localhost:3000",
}: ConsentVersionModifiedPurposeProps) {
  return (
    <EmailLayout preview="Purpose modified - Please review the changes">
      <EmailIllustration baseUrl={baseUrl} />

      <StatusBanner
        type="reminder"
        title="Need your attention"
        baseUrl={baseUrl}
      />

      <Section className="mb-6">
        <Text className="mb-4 text-[15px] leading-relaxed text-gray-700">
          Dear {principalName},
        </Text>

        <Text className="mb-4 text-[15px] leading-relaxed text-gray-700">
          We&apos;ve made changes to an existing purpose:{" "}
          <strong>{purposeName}</strong>
        </Text>

        <Text className="mb-2 text-[15px] font-semibold leading-relaxed text-gray-700">
          What&apos;s changed?
        </Text>

        {changes.map((change, index) => (
          <div key={index} className="mb-4 ml-4">
            <Text className="mb-1 text-[14px] font-semibold text-gray-800">
              {change.field}:
            </Text>
            <Text className="mb-1 ml-2 text-[14px] leading-relaxed text-gray-600">
              Before: {change.before}
            </Text>
            <Text className="mb-0 ml-2 text-[14px] leading-relaxed text-gray-600">
              After: {change.after}
            </Text>
          </div>
        ))}

        <Text className="mb-6 mt-4 text-[15px] leading-relaxed text-gray-700">
          In line with DPDP Act 2023, we can proceed only after you review and
          provide your consent.
        </Text>

        <Text className="mb-6 text-[15px] leading-relaxed text-gray-700">
          Click below to review the details and update your consent:
        </Text>

        <Button href={dprmLink}>Review Changes</Button>
      </Section>

      <Hr className="my-6 border-gray-300" />

      <Section>
        <Text className="mb-2 text-[15px] text-gray-700">Regards,</Text>
        <Text className="m-0 text-[15px] text-gray-700">CMS (Privy)</Text>
      </Section>
    </EmailLayout>
  );
}

ConsentVersionModifiedPurpose.PreviewProps = {
  principalName: "Rajan Sharma",
  businessProcessName: "Customer Service Portal",
  purposeName: "Marketing and Promotions",
  changes: [
    {
      field: "Description",
      before: "Send promotional emails monthly",
      after: "Send promotional emails and SMS weekly",
    },
    {
      field: "Data Retention",
      before: "12 months",
      after: "24 months",
    },
  ],
  dprmLink: "https://example.com/dprm/abc123",
  baseUrl: "http://localhost:3000",
} as ConsentVersionModifiedPurposeProps;

// Export render function for email service
export async function renderEmail(
  variables: ConsentVersionModifiedPurposeProps
): Promise<{ subject: string; html: string; text: string }> {
  const subject = "Purpose Modified - Please Review Changes";
  const html = await render(<ConsentVersionModifiedPurpose {...variables} />);
  const changesList = (variables.changes || [])
    .map(
      (change) =>
        `${change.field}:\n  Before: ${change.before}\n  After: ${change.after}`
    )
    .join("\n\n");
  const text = `
Need your attention

Dear ${variables.principalName || "User"},

We've made changes to an existing purpose: ${variables.purposeName || "Data Processing Purpose"}

What's changed?
${changesList}

In line with DPDP Act 2023, we can proceed only after you review and provide your consent.

Click below to review the details and update your consent:
${variables.dprmLink || "#"}

Regards,
CMS (Privy)
  `.trim();

  return { subject, html, text };
}
