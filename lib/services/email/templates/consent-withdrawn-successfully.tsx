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

import { render, Section, Text } from "@react-email/components";
import { Button } from "../components/Button";
import { EmailIllustration } from "../components/EmailIllustration";
import { EmailLayout } from "../components/EmailLayout";
import { StatusBanner } from "../components/StatusBanner";

interface ConsentWithdrawnSuccessfullyProps {
  principalName: string;
  withdrawnPurposes: Array<{
    cpName: string;
    ppName: string;
  }>;
  dprmLink: string;
  organizationName?: string;
  organizationEmail?: string;
  withdrawalDate?: string;
}

export function ConsentWithdrawnSuccessfully({
  principalName,
  withdrawnPurposes,
  dprmLink,
  organizationName,
  organizationEmail,
  withdrawalDate,
}: ConsentWithdrawnSuccessfullyProps) {
  const preview = "Consent Withdrawn Successfully";
  const baseUrl = process.env.BASE_PATH || "http://localhost:3000";
  const dateStr =
    withdrawalDate ||
    new Date().toLocaleDateString("en-US", {
      month: "2-digit",
      day: "2-digit",
      year: "numeric",
    });

  return (
    <EmailLayout preview={preview}>
      <EmailIllustration baseUrl={baseUrl} />

      <StatusBanner
        type="success"
        title="Consent Withdrawn Successfully!"
        baseUrl={baseUrl}
      />

      <Section>
        <Text className="mb-4 text-lg leading-relaxed text-[#484E56]">
          Dear {principalName},
        </Text>

        <Text className="mb-6 text-lg leading-relaxed text-[#484E56]">
          We confirm that your consent withdrawal request submitted on {dateStr}{" "}
          has been successfully processed.
        </Text>

        <Text className="mb-4 text-lg leading-relaxed text-[#484E56]">
          All associated data processing activities under this consent have been
          stopped.
        </Text>

        {withdrawnPurposes.length > 0 && (
          <>
            <Text className="mb-3 text-lg font-semibold text-[#484E56]">
              Withdrawn Purposes:
            </Text>
            {withdrawnPurposes.map((purpose, index) => (
              <div
                key={index}
                style={{
                  backgroundColor: "#FFF4ED",
                  border: "1px solid #FDBA74",
                  borderRadius: "8px",
                  padding: "16px",
                  marginBottom: "12px",
                }}
              >
                <Text className="m-0 text-base font-semibold text-[#EA580C]">
                  {purpose.ppName}
                </Text>
                <Text className="m-0 mt-1 text-sm text-[#9A3412]">
                  {purpose.cpName}
                </Text>
              </div>
            ))}
          </>
        )}

        <Text className="mt-6 mb-6 text-lg leading-relaxed text-[#484E56]">
          Thank you for your request. If you have further questions, please
          contact our DPO team at {organizationEmail}.
        </Text>
      </Section>

      <Section className="text-center">
        <Button href={dprmLink}>Manage your Consent</Button>
      </Section>

      <Section>
        <Text className="text-lg leading-relaxed text-[#484E56]">Regards,</Text>
        <Text className="text-lg leading-relaxed text-[#484E56]">
          {organizationName} DPO
        </Text>
      </Section>
    </EmailLayout>
  );
}

// Export render function for email service
export async function renderEmail(
  variables: ConsentWithdrawnSuccessfullyProps
): Promise<{ subject: string; html: string; text: string }> {
  const subject = "Consent Withdrawn Successfully";
  const html = await render(<ConsentWithdrawnSuccessfully {...variables} />);

  const purposesText = variables.withdrawnPurposes
    .map((p) => `- ${p.ppName} (${p.cpName})`)
    .join("\n");

  const dateStr =
    variables.withdrawalDate ||
    new Date().toLocaleDateString("en-US", {
      month: "2-digit",
      day: "2-digit",
      year: "numeric",
    });

  const text = `
Consent Withdrawn Successfully

Dear ${variables.principalName},

We confirm that your consent withdrawal request submitted on ${dateStr} has been successfully processed.

All associated data processing activities under this consent have been stopped.

Withdrawn Purposes:
${purposesText}

You can view or manage your remaining consents anytime using the link below:
${variables.dprmLink}

Thank you for your request. If you have further questions, please contact our DPO team at ${variables.organizationEmail}.

Regards,
${variables.organizationName} DPO
  `.trim();

  return { subject, html, text };
}
