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

import type {
  EmailAddress,
  EmailProvider,
  SendEmailOptions,
  SendEmailResult,
} from "./email-provider.interface";

/**
 * Simple in-memory/logging provider used as a default during development.
 * This allows the rest of the app to use the email facade before real
 * adapters (Resend/SES/SendGrid) are implemented.
 */
class LogEmailProvider implements EmailProvider {
  async send(options: SendEmailOptions): Promise<SendEmailResult> {
    // Minimal serialization of recipients
    const recipients = Array.isArray(options.to)
      ? options.to.map((r: EmailAddress) => r.email).join(", ")
      : (options.to as EmailAddress).email;

    // Print a compact log so developers can see email content in logs
    // Do NOT log sensitive PII in production.
    // eslint-disable-next-line no-console
    console.info("[Email][LOG] ->", {
      to: recipients,
      subject: options.subject,
      text: options.text?.slice(0, 500),
      html: options.html ? "<html omitted>" : undefined,
      tags: options.tags,
    });

    return { success: true, messageId: `log-${Date.now()}` };
  }

  async sendBulk(emails: SendEmailOptions[]): Promise<SendEmailResult[]> {
    return Promise.all(emails.map((e) => this.send(e)));
  }
}

/**
 * Factory that returns an EmailProvider based on `process.env.EMAIL_PROVIDER`.
 * Supported values:
 * - `log` (default): logs emails to console
 * - `postmark`: sends emails via Postmark (requires POSTMARK_API_KEY)
 * - `resend`: (placeholder) will require implementing a Resend adapter
 */
export function getEmailProvider(): EmailProvider {
  const provider = (process.env.EMAIL_PROVIDER || "postmark").toLowerCase();

  if (provider === "log") {
    return new LogEmailProvider();
  }

  if (provider === "postmark") {
    const apiKey = process.env.POSTMARK_API_KEY;
    if (!apiKey) {
      throw new Error(
        "EMAIL_PROVIDER=postmark configured but POSTMARK_API_KEY is not set. Please add POSTMARK_API_KEY to your environment variables."
      );
    }

    // Dynamic import to avoid loading Postmark when not needed
    const { PostmarkAdapter } = require("./adapters/postmark-adapter");
    return new PostmarkAdapter(apiKey);
  }

  if (provider === "resend") {
    // Placeholder: a Resend adapter should be implemented in
    // `lib/services/email/adapters/resend-adapter.ts` and registered here.
    throw new Error(
      "EMAIL_PROVIDER=resend configured but Resend adapter is not implemented. Please add the adapter or change EMAIL_PROVIDER to 'log' for development."
    );
  }

  throw new Error(
    `Unsupported EMAIL_PROVIDER '${provider}'. Implement an adapter or set EMAIL_PROVIDER=log`
  );
}
