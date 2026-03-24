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

interface ConsentUpdatedSuccessfullyProps {
  principalName: string;
  businessProcessName: string;
  updateDate: string;
  updatedPurposes: Array<{ cpName: string; ppName: string }>;
  dprmLink: string;
  baseUrl?: string;
}

export default function ConsentUpdatedSuccessfully({
  principalName,
  updateDate,
  updatedPurposes,
  dprmLink,
  baseUrl = process.env.BASE_PATH || "http://localhost:3000",
}: ConsentUpdatedSuccessfullyProps) {
  return (
    <EmailLayout preview="Your consent has been successfully updated">
      <EmailIllustration baseUrl={baseUrl} />

      <StatusBanner
        type="success"
        title="Consent Updated Successfully!"
        baseUrl={baseUrl}
      />

      <Section className="mb-6">
        <Text className="mb-4 text-[15px] leading-relaxed text-gray-700">
          Dear {principalName},
        </Text>

        <Text className="mb-4 text-[15px] leading-relaxed text-gray-700">
          We confirm that your consent has been successfully updated on{" "}
          {updateDate}
        </Text>

        <Text className="mb-2 text-[15px] leading-relaxed text-gray-700">
          👉 This update applies to:
        </Text>
        {updatedPurposes.map((purpose, index) => (
          <Text
            key={index}
            className="mb-2 ml-4 text-[15px] leading-relaxed text-gray-700"
          >
            • <strong>{purpose.ppName}</strong> ({purpose.cpName})
          </Text>
        ))}

        <Text className="mb-6 text-[15px] leading-relaxed text-gray-700">
          👉 Your updated consent ensures continued lawful processing of your
          data.
        </Text>

        <Text className="mb-6 text-[15px] leading-relaxed text-gray-700">
          For details or to manage your preferences, please click on below
          button.
        </Text>

        <Button href={dprmLink}>Manage preferences</Button>
      </Section>

      <Hr className="my-6 border-gray-300" />

      <Section>
        <Text className="mb-2 text-[15px] text-gray-700">Regards,</Text>
        <Text className="m-0 text-[15px] text-gray-700">CMS (Privy)</Text>
      </Section>
    </EmailLayout>
  );
}

ConsentUpdatedSuccessfully.PreviewProps = {
  principalName: "Anita",
  businessProcessName: "Customer Service Portal",
  updateDate: "12-06-2025",
  updatedPurposes: [
    { cpName: "KYC", ppName: "Identity Verification" },
    { cpName: "Credit Assessment", ppName: "Credit Score Check" },
  ],
  dprmLink: "https://example.com/dprm/abc123",
  baseUrl: "http://localhost:3000",
} as ConsentUpdatedSuccessfullyProps;

// Export render function for email service
export async function renderEmail(
  variables: ConsentUpdatedSuccessfullyProps
): Promise<{ subject: string; html: string; text: string }> {
  const subject = "Consent Updated Successfully";
  const html = await render(<ConsentUpdatedSuccessfully {...variables} />);

  const purposesList = variables.updatedPurposes
    .map((p) => `  • ${p.ppName} (${p.cpName})`)
    .join("\n");

  const text = `
Consent Updated Successfully!

Dear ${variables.principalName || "User"},

We confirm that your consent has been successfully updated on ${variables.updateDate || "[date]"}.

This update applies to:
${purposesList}

Your updated consent ensures continued lawful processing of your data.

For details or to manage your preferences, please visit:
${variables.dprmLink || "#"}

Regards,
CMS (Privy)
  `.trim();

  return { subject, html, text };
}
