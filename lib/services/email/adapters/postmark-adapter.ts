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

import { ServerClient } from "postmark";
import type {
  EmailProvider,
  SendEmailOptions,
  SendEmailResult,
  EmailAddress,
} from "../email-provider.interface";

/**
 * Postmark email provider adapter
 * Requires POSTMARK_API_KEY environment variable
 */
export class PostmarkAdapter implements EmailProvider {
  private client: ServerClient;

  constructor(apiKey: string) {
    if (!apiKey) {
      throw new Error("Postmark API key is required");
    }
    this.client = new ServerClient(apiKey);
  }

  async send(options: SendEmailOptions): Promise<SendEmailResult> {
    try {
      // Postmark only supports single recipient per call for transactional emails
      const recipients = Array.isArray(options.to) ? options.to : [options.to];

      if (recipients.length === 0) {
        return { success: false, error: "No recipients specified" };
      }

      // If multiple recipients, send individually
      if (recipients.length > 1) {
        const results = await this.sendBulk(
          recipients.map((to) => ({ ...options, to }))
        );
        const failed = results.filter((r) => !r.success);
        if (failed.length > 0) {
          return {
            success: false,
            error: `Failed to send to ${failed.length} recipients`,
          };
        }
        return { success: true, messageId: results[0].messageId };
      }

      const recipient = recipients[0];
      const from = options.from || {
        email: process.env.EMAIL_FROM_ADDRESS || "noreply@localhost",
        name: process.env.EMAIL_FROM_NAME,
      };

      const message = {
        From: from.name ? `${from.name} <${from.email}>` : from.email,
        To: recipient.name
          ? `${recipient.name} <${recipient.email}>`
          : recipient.email,
        Subject: options.subject,
        HtmlBody: options.html,
        TextBody: options.text,
        ReplyTo: options.replyTo?.email,
        Cc: options.cc
          ?.map((addr: EmailAddress) =>
            addr.name ? `${addr.name} <${addr.email}>` : addr.email
          )
          .join(","),
        Bcc: options.bcc
          ?.map((addr: EmailAddress) =>
            addr.name ? `${addr.name} <${addr.email}>` : addr.email
          )
          .join(","),
        Attachments: options.attachments?.map((att) => ({
          Name: att.filename,
          Content:
            typeof att.content === "string"
              ? att.content
              : att.content.toString("base64"),
          ContentType: att.contentType || "application/octet-stream",
          ContentID: null,
        })),
        Tag: options.tags ? Object.keys(options.tags)[0] : undefined, // Postmark supports single tag
        Metadata: options.tags,
      };

      const response = await this.client.sendEmail(message);

      return {
        success: true,
        messageId: response.MessageID,
      };
    } catch (error: any) {
      console.error("[PostmarkAdapter] Send error:", error);
      return {
        success: false,
        error: error.message || "Failed to send email via Postmark",
      };
    }
  }

  async sendBulk(emails: SendEmailOptions[]): Promise<SendEmailResult[]> {
    // Postmark has a batch API but for simplicity we'll send individually
    // In production, consider using client.sendEmailBatch() for better performance
    return Promise.all(emails.map((email) => this.send(email)));
  }
}
