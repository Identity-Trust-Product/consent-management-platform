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

interface ConsentVersionNewPurposeProps {
  principalName: string;
  businessProcessName: string;
  newPurposeName: string;
  newPurposeDescription: string;
  dataUsed: string[];
  dprmLink: string;
  baseUrl?: string;
}

export default function ConsentVersionNewPurpose({
  principalName,
  businessProcessName,
  newPurposeName,
  newPurposeDescription,
  dataUsed,
  dprmLink,
  baseUrl = process.env.BASE_PATH || "http://localhost:3000",
}: ConsentVersionNewPurposeProps) {
  return (
    <EmailLayout preview="New purpose added - Your consent is required">
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
          We&apos;ve introduced a new purpose:{" "}
          <strong>{newPurposeName}.</strong>
        </Text>

        <Text className="mb-4 text-[15px] leading-relaxed text-gray-700">
          {newPurposeDescription}
        </Text>

        <Text className="mb-2 text-[15px] font-semibold leading-relaxed text-gray-700">
          What data will be used?
        </Text>

        {dataUsed.map((item, index) => (
          <Text
            key={index}
            className="mb-1 ml-4 text-[15px] leading-relaxed text-gray-700"
          >
            • {item}
          </Text>
        ))}

        <Text className="mb-6 mt-4 text-[15px] leading-relaxed text-gray-700">
          In line with DPDP Act 2023, we can proceed only after you review and
          provide your consent.
        </Text>

        <Text className="mb-6 text-[15px] leading-relaxed text-gray-700">
          Click below to review the details and submit your consent:
        </Text>

        <Button href={dprmLink}>Grant Consent</Button>
      </Section>

      <Hr className="my-6 border-gray-300" />

      <Section>
        <Text className="mb-2 text-[15px] text-gray-700">Regards,</Text>
        <Text className="m-0 text-[15px] text-gray-700">CMS (Privy)</Text>
      </Section>
    </EmailLayout>
  );
}

ConsentVersionNewPurpose.PreviewProps = {
  principalName: "Rajan Sharma",
  businessProcessName: "Customer Service Portal",
  newPurposeName: "Financial Profiling for Partner Offers",
  newPurposeDescription:
    "This will allow us to analyze your purchase history and browsing patterns to offer you personalized financial products, discounts, and services in collaboration with trusted third-party providers.",
  dataUsed: [
    "Purchase history",
    "Browsing behavior",
    "Contact details (email, phone)",
    "Demographic information (age group, location)",
  ],
  dprmLink: "https://example.com/dprm/abc123",
  baseUrl: "http://localhost:3000",
} as ConsentVersionNewPurposeProps;

// Export render function for email service
export async function renderEmail(
  variables: ConsentVersionNewPurposeProps
): Promise<{ subject: string; html: string; text: string }> {
  const subject = "New Purpose Added - Your Consent Required";
  const html = await render(<ConsentVersionNewPurpose {...variables} />);
  const dataList = (variables.dataUsed || [])
    .map((item) => `• ${item}`)
    .join("\n");
  const text = `
Need your attention

Dear ${variables.principalName || "User"},

We've introduced a new purpose: ${variables.newPurposeName || "New Purpose"}.

${variables.newPurposeDescription || ""}

What data will be used?
${dataList}

In line with DPDP Act 2023, we can proceed only after you review and provide your consent.

Click below to review the details and submit your consent:
${variables.dprmLink || "#"}

Regards,
CMS (Privy)
  `.trim();

  return { subject, html, text };
}
