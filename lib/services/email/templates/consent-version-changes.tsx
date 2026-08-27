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

interface ConsentVersionChangesProps {
  principalName: string;
  businessProcessName: string;
  newPurposes: Array<{
    name: string;
    description: string;
    userAttributeNames: string[];
  }>;
  modifiedPurposes: Array<{
    name: string;
    changes: Array<{ field: string; before: string; after: string }>;
  }>;
  dprmLink: string;
  baseUrl?: string;
}

export default function ConsentVersionChanges({
  principalName,
  businessProcessName,
  newPurposes,
  modifiedPurposes,
  dprmLink,
  baseUrl = process.env.BASE_PATH || "http://localhost:3000",
}: ConsentVersionChangesProps) {
  return (
    <EmailLayout preview="Important updates to your consent - Action required">
      <EmailIllustration baseUrl={baseUrl} />

      <StatusBanner type="reminder" title="Action Required" baseUrl={baseUrl} />

      <Section className="mb-6">
        <Text className="mb-4 text-[15px] leading-relaxed text-gray-700">
          Dear {principalName},
        </Text>

        <Text className="mb-4 text-[15px] leading-relaxed text-gray-700">
          We&apos;ve made important updates to{" "}
          <strong>{businessProcessName}</strong> that require your attention and
          consent.
        </Text>

        {newPurposes.length > 0 && (
          <>
            <Text className="mb-2 mt-6 text-[16px] font-semibold text-gray-800">
              📋 New Processing Purposes Added
            </Text>
            <Text className="mb-4 text-[15px] leading-relaxed text-gray-700">
              We&apos;ve introduced {newPurposes.length} new{" "}
              {newPurposes.length === 1 ? "purpose" : "purposes"} for data
              processing:
            </Text>

            {newPurposes.map((purpose, index) => (
              <div key={index} className="mb-6 ml-4 rounded-lg bg-blue-50 p-4">
                <Text className="mb-2 text-[15px] font-semibold text-gray-800">
                  {index + 1}. {purpose.name}
                </Text>
                <Text className="mb-3 text-[14px] leading-relaxed text-gray-700">
                  {purpose.description}
                </Text>
                <Text className="mb-1 text-[14px] font-semibold text-gray-700">
                  Data to be used:
                </Text>
                {purpose.userAttributeNames.map((attr, attrIdx) => (
                  <Text
                    key={attrIdx}
                    className="mb-1 ml-4 text-[14px] text-gray-600"
                  >
                    • {attr}
                  </Text>
                ))}
              </div>
            ))}
          </>
        )}

        {modifiedPurposes.length > 0 && (
          <>
            <Text className="mb-2 mt-6 text-[16px] font-semibold text-gray-800">
              ✏️ Existing Purposes Modified
            </Text>
            <Text className="mb-4 text-[15px] leading-relaxed text-gray-700">
              We&apos;ve updated {modifiedPurposes.length} existing{" "}
              {modifiedPurposes.length === 1 ? "purpose" : "purposes"}:
            </Text>

            {modifiedPurposes.map((purpose, index) => (
              <div
                key={index}
                className="mb-6 ml-4 rounded-lg bg-orange-50 p-4"
              >
                <Text className="mb-3 text-[15px] font-semibold text-gray-800">
                  {index + 1}. {purpose.name}
                </Text>
                {purpose.changes.map((change, changeIdx) => (
                  <div key={changeIdx} className="mb-3">
                    <Text className="mb-1 text-[14px] font-semibold text-gray-700">
                      {change.field}:
                    </Text>
                    <Text className="mb-1 ml-2 text-[14px] text-gray-600">
                      <span className="font-medium">Before:</span>{" "}
                      {change.before}
                    </Text>
                    <Text className="mb-0 ml-2 text-[14px] text-gray-600">
                      <span className="font-medium">After:</span> {change.after}
                    </Text>
                  </div>
                ))}
              </div>
            ))}
          </>
        )}

        <Text className="mb-4 mt-6 text-[15px] leading-relaxed text-gray-700">
          In line with the DPDP Act 2023, we can proceed only after you review
          and provide your consent to these changes.
        </Text>

        <Text className="mb-6 text-[15px] leading-relaxed text-gray-700">
          Click below to review the complete details and submit your consent:
        </Text>

        <Button href={dprmLink}>Review & Consent</Button>
      </Section>

      <Hr className="my-6 border-gray-300" />

      <Section>
        <Text className="mb-2 text-[15px] text-gray-700">Regards,</Text>
        <Text className="m-0 text-[15px] text-gray-700">CMS (Privy)</Text>
      </Section>
    </EmailLayout>
  );
}

ConsentVersionChanges.PreviewProps = {
  principalName: "Rajan Sharma",
  businessProcessName: "Customer Service Portal",
  newPurposes: [
    {
      name: "Financial Profiling for Partner Offers",
      description:
        "This will allow us to analyze your purchase history and browsing patterns to offer you personalized financial products.",
      userAttributeNames: [
        "Purchase history",
        "Browsing behavior",
        "Contact details",
      ],
    },
  ],
  modifiedPurposes: [
    {
      name: "Identity Verification",
      changes: [
        {
          field: "Description",
          before: "Basic identity verification using government ID",
          after:
            "Enhanced biometric identity verification using government ID and facial recognition",
        },
        {
          field: "Purpose Attributes",
          before: "Name, ID Number",
          after: "Name, ID Number, Facial Biometrics",
        },
      ],
    },
  ],
  dprmLink: "https://example.com/dprm/abc123",
  baseUrl: "http://localhost:3000",
} as ConsentVersionChangesProps;

// Export render function for email service
export async function renderEmail(
  variables: ConsentVersionChangesProps
): Promise<{ subject: string; html: string; text: string }> {
  const subject = `Action Required: Updates to ${variables.businessProcessName}`;
  const html = await render(<ConsentVersionChanges {...variables} />);

  let textContent = `
Action Required: Updates to ${variables.businessProcessName}

Dear ${variables.principalName},

We've made important updates to ${variables.businessProcessName} that require your attention and consent.
`;

  if (variables.newPurposes.length > 0) {
    textContent += `\n\n📋 NEW PROCESSING PURPOSES ADDED\nWe've introduced ${variables.newPurposes.length} new ${variables.newPurposes.length === 1 ? "purpose" : "purposes"
      }:\n\n`;
    variables.newPurposes.forEach((purpose, idx) => {
      textContent += `${idx + 1}. ${purpose.name}\n${purpose.description}\n\nData to be used:\n`;
      purpose.userAttributeNames.forEach((attr) => {
        textContent += `  • ${attr}\n`;
      });
      textContent += "\n";
    });
  }

  if (variables.modifiedPurposes.length > 0) {
    textContent += `\n✏️ EXISTING PURPOSES MODIFIED\nWe've updated ${variables.modifiedPurposes.length
      } existing ${variables.modifiedPurposes.length === 1 ? "purpose" : "purposes"
      }:\n\n`;
    variables.modifiedPurposes.forEach((purpose, idx) => {
      textContent += `${idx + 1}. ${purpose.name}\n`;
      purpose.changes.forEach((change) => {
        textContent += `  ${change.field}:\n    Before: ${change.before}\n    After: ${change.after}\n`;
      });
      textContent += "\n";
    });
  }

  textContent += `\nIn line with the DPDP Act 2023, we can proceed only after you review and provide your consent to these changes.\n\nReview and provide consent here:\n${variables.dprmLink}\n\nRegards,\nCMS (Privy)`;

  return { subject, html, text: textContent.trim() };
}
