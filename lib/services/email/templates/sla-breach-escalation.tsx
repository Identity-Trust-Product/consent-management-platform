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

interface SlaBreachEscalationProps {
  grievanceId: string;
  grievanceSubject: string;
  severity: string;
  expectedResolutionDate: string;
  breachedAt: string;
  timeOverdue: string;
  assignedToName?: string;
  businessProcessName: string;
  grievanceUrl: string;
  recipientName: string;
}

export function SlaBreachEscalation({
  grievanceId,
  grievanceSubject,
  severity,
  expectedResolutionDate,
  breachedAt,
  timeOverdue,
  assignedToName,
  businessProcessName,
  grievanceUrl,
  recipientName,
}: SlaBreachEscalationProps) {
  const preview = `SLA Breach Alert: Grievance #${grievanceId} requires immediate attention`;
  const baseUrl = process.env.BASE_PATH || "http://localhost:3000";

  const severityColors: Record<string, { bg: string; border: string; text: string }> = {
    HIGH: { bg: "#FEE2E2", border: "#EF4444", text: "#991B1B" },
    MEDIUM: { bg: "#FED7AA", border: "#F97316", text: "#9A3412" },
    LOW: { bg: "#FEF3C7", border: "#F59E0B", text: "#92400E" },
  };

  const colors = severityColors[severity] || severityColors.MEDIUM;

  return (
    <EmailLayout preview={preview}>
      <EmailIllustration baseUrl={baseUrl} />

      <StatusBanner type="error" title="SLA Breach Alert!" baseUrl={baseUrl} />

      <Section>
        <Text className="mb-4 text-lg leading-relaxed text-[#484E56]">
          Dear {recipientName},
        </Text>

        <Text className="mb-6 text-lg leading-relaxed text-[#484E56]">
          This is an urgent escalation notification. A grievance has breached its SLA and requires immediate attention.
        </Text>
      </Section>

      {/* Severity Badge */}
      <Section className="mb-6">
        <div
          style={{
            backgroundColor: colors.bg,
            border: `2px solid ${colors.border}`,
            borderRadius: "8px",
            padding: "16px",
            textAlign: "center",
          }}
        >
          <Text
            className="m-0 text-2xl font-bold"
            style={{ color: colors.text }}
          >
            {severity} SEVERITY
          </Text>
          <Text className="m-0 mt-2 text-sm" style={{ color: colors.text }}>
            Time Overdue: {timeOverdue}
          </Text>
        </div>
      </Section>

      {/* Grievance Details */}
      <Section
        style={{
          backgroundColor: "#F9FAFB",
          border: "1px solid #E5E7EB",
          borderRadius: "8px",
          padding: "20px",
          marginBottom: "24px",
        }}
      >
        <Text className="m-0 mb-3 text-base font-semibold text-[#374151]">
          Grievance Details
        </Text>

        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <tbody>
            <tr>
              <td style={{ padding: "8px 0", color: "#6B7280", fontSize: "14px" }}>
                Grievance ID:
              </td>
              <td style={{ padding: "8px 0", color: "#111827", fontSize: "14px", fontWeight: "600" }}>
                #{grievanceId}
              </td>
            </tr>
            <tr>
              <td style={{ padding: "8px 0", color: "#6B7280", fontSize: "14px" }}>
                Subject:
              </td>
              <td style={{ padding: "8px 0", color: "#111827", fontSize: "14px", fontWeight: "600" }}>
                {grievanceSubject}
              </td>
            </tr>
            <tr>
              <td style={{ padding: "8px 0", color: "#6B7280", fontSize: "14px" }}>
                Business Process:
              </td>
              <td style={{ padding: "8px 0", color: "#111827", fontSize: "14px" }}>
                {businessProcessName}
              </td>
            </tr>
            {assignedToName && (
              <tr>
                <td style={{ padding: "8px 0", color: "#6B7280", fontSize: "14px" }}>
                  Assigned To:
                </td>
                <td style={{ padding: "8px 0", color: "#111827", fontSize: "14px" }}>
                  {assignedToName}
                </td>
              </tr>
            )}
            <tr>
              <td style={{ padding: "8px 0", color: "#6B7280", fontSize: "14px" }}>
                Expected Resolution:
              </td>
              <td style={{ padding: "8px 0", color: "#DC2626", fontSize: "14px", fontWeight: "600" }}>
                {expectedResolutionDate}
              </td>
            </tr>
            <tr>
              <td style={{ padding: "8px 0", color: "#6B7280", fontSize: "14px" }}>
                Breached At:
              </td>
              <td style={{ padding: "8px 0", color: "#DC2626", fontSize: "14px", fontWeight: "600" }}>
                {breachedAt}
              </td>
            </tr>
          </tbody>
        </table>
      </Section>

      <Section>
        <Text className="mb-6 text-lg leading-relaxed text-[#484E56]">
          Please review this grievance immediately and take necessary action to resolve the issue.
        </Text>
      </Section>

      <Section className="text-center">
        <Button href={grievanceUrl}>View Grievance Details</Button>
      </Section>

      <Section>
        <Text className="text-lg leading-relaxed text-[#484E56]">
          Regards,
        </Text>
        <Text className="text-lg leading-relaxed text-[#484E56]">
          Privy CMP SLA Monitoring System
        </Text>
      </Section>
    </EmailLayout>
  );
}

// Export render function for email service
export async function renderEmail(
  variables: SlaBreachEscalationProps
): Promise<{ subject: string; html: string; text: string }> {
  const subject = `🚨 SLA BREACH: Grievance #${variables.grievanceId} (${variables.severity} Severity)`;
  const html = await render(<SlaBreachEscalation {...variables} />);

  const text = `
SLA BREACH ALERT - IMMEDIATE ACTION REQUIRED

Grievance ID: #${variables.grievanceId}
Severity: ${variables.severity}
Time Overdue: ${variables.timeOverdue}

GRIEVANCE DETAILS:
Subject: ${variables.grievanceSubject}
Business Process: ${variables.businessProcessName}
${variables.assignedToName ? `Assigned To: ${variables.assignedToName}` : "Status: Unassigned"}
Expected Resolution: ${variables.expectedResolutionDate}
Breached At: ${variables.breachedAt}

This grievance has exceeded its SLA commitment and requires immediate attention.

Please review and take action:
${variables.grievanceUrl}

Regards,
Privy CMP SLA Monitoring System
  `.trim();

  return { subject, html, text };
}
