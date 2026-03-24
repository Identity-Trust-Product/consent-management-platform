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

import { logger } from "@/lib/utils/logger";
import { getEmailProvider } from "./email-provider-factory";
import {
  EmailAddress,
  EmailProvider,
  SendEmailOptions,
  SendEmailResult,
  SendTemplateOptions,
} from "./email-provider.interface";

// Static imports for all email templates (required for Next.js production builds)
// When adding a new template:
// 1. Create the template in ./templates/
// 2. Add import and registry entry in template-registry.ts
// 3. No changes needed in this file!
import { TEMPLATE_REGISTRY } from "./template-registry";

class EmailService {
  private provider: EmailProvider;
  private defaultFrom: EmailAddress;

  constructor() {
    this.provider = getEmailProvider();
    this.defaultFrom = {
      email: process.env.EMAIL_FROM_ADDRESS,
      name: process.env.EMAIL_FROM_NAME,
    };
  }

  async sendEmail(options: SendEmailOptions): Promise<SendEmailResult> {
    const payload: SendEmailOptions = {
      ...options,
      from: options.from || this.defaultFrom,
    };

    const recipient = Array.isArray(options.to)
      ? options.to.map((addr) => addr.email).join(", ")
      : options.to.email;

    logger.info("Attempting to send email", {
      to: recipient,
      subject: options.subject,
      from: payload.from.email,
      hasCc: !!options.cc,
      hasBcc: !!options.bcc,
      hasAttachments: !!options.attachments?.length,
    });

    try {
      const result = await this.provider.send(payload);

      if (result.success) {
        logger.info("Email sent successfully", {
          to: recipient,
          subject: options.subject,
          messageId: result.messageId,
        });
      } else {
        logger.error("Email sending failed", {
          to: recipient,
          subject: options.subject,
          error: result.error,
        });
      }

      return result;
    } catch (error: any) {
      logger.error("Email sending threw exception", {
        to: recipient,
        subject: options.subject,
        error: error.message,
        stack: error.stack,
      });
      return { success: false, error: String(error?.message || error) };
    }
  }

  async sendTemplatedEmail(
    options: SendTemplateOptions
  ): Promise<SendEmailResult> {
    const { templateName, variables = {} } = options;
    const recipient = Array.isArray(options.to)
      ? options.to.map((addr) => addr.email).join(", ")
      : options.to.email;

    logger.info("Rendering email template", {
      templateName,
      to: recipient,
      variableKeys: Object.keys(variables),
    });

    try {
      // Use static template registry instead of dynamic imports
      const templateModule = TEMPLATE_REGISTRY[templateName];

      if (!templateModule || typeof templateModule.renderEmail !== "function") {
        const error = `Template '${templateName}' not found in registry or does not export a renderEmail function`;
        logger.error("Template not found or invalid", {
          templateName,
          to: recipient,
          availableTemplates: Object.keys(TEMPLATE_REGISTRY),
        });
        throw new Error(error);
      }

      const { subject, html, text } =
        await templateModule.renderEmail(variables);

      logger.info("Email template rendered successfully", {
        templateName,
        to: recipient,
        subject,
      });

      const sendOptions: SendEmailOptions = {
        to: options.to,
        from: options.from || this.defaultFrom,
        subject,
        html,
        text,
        replyTo: options.replyTo,
        cc: options.cc,
        bcc: options.bcc,
        attachments: options.attachments,
        tags: options.tags,
      };

      return this.sendEmail(sendOptions);
    } catch (error: any) {
      logger.error("Failed to render or send templated email", {
        templateName,
        to: recipient,
        error: error.message,
        stack: error.stack,
      });
      return {
        success: false,
        error: `Failed to render email template: ${error.message}`,
      };
    }
  }
}

export const emailService = new EmailService();

export default emailService;
