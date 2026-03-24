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

import { z } from "zod";
import { WebhookEventType, WebhookTargetType } from "@prisma/client";

/**
 * Schema for creating a new webhook
 */
export const createWebhookSchema = z
  .object({
    eventType: z.nativeEnum(WebhookEventType, {
      message: "Invalid event type",
    }),
    endpointUrl: z
      .string()
      .url("Must be a valid URL")
      .regex(/^https?:\/\//, "URL must start with http:// or https://"),
    httpMethod: z
      .string()
      .toUpperCase()
      .refine(
        (method) => ["GET", "POST", "PUT", "PATCH"].includes(method),
        "HTTP method must be GET, POST, PUT, or PATCH"
      )
      .optional(),
    customHeaders: z
      .record(z.string(), z.string())
      .optional()
      .nullable()
      .refine(
        (headers) => {
          if (!headers) return true;
          // Prevent overriding critical headers
          const restrictedHeaders = [
            "content-type",
            "x-privy-timestamp",
            "x-privy-signature",
            "x-privy-event-id",
          ];
          return !Object.keys(headers).some((key) =>
            restrictedHeaders.includes(key.toLowerCase())
          );
        },
        {
          message:
            "Cannot override Content-Type, X-Privy-Timestamp, X-Privy-Signature, or X-Privy-Event-Id headers",
        }
      ),
    isActive: z.boolean().optional(),
    targetType: z.nativeEnum(WebhookTargetType),
    dataProcessorId: z.string().optional().nullable(),
  })
  .refine(
    (data) => {
      // If targetType is DATA_PROCESSOR, dataProcessorId is required
      if (data.targetType === "DATA_PROCESSOR") {
        return !!data.dataProcessorId;
      }
      return true;
    },
    {
      message: "Data Processor ID is required when target type is DATA_PROCESSOR",
      path: ["dataProcessorId"],
    }
  )
  .refine(
    (data) => {
      // If targetType is DATA_PROCESSOR, only allow CONSENT_REVOKED and CONSENT_EXPIRED
      if (data.targetType === "DATA_PROCESSOR") {
        return ["CONSENT_REVOKED", "CONSENT_EXPIRED"].includes(data.eventType);
      }
      return true;
    },
    {
      message:
        "Data Processor webhooks only support CONSENT_REVOKED and CONSENT_EXPIRED events",
      path: ["eventType"],
    }
  );

export type CreateWebhookData = z.infer<typeof createWebhookSchema>;

/**
 * Schema for updating an existing webhook
 */
export const updateWebhookSchema = z
  .object({
    publicId: z.string().uuid("Invalid webhook ID"),
    eventType: z.nativeEnum(WebhookEventType).optional(),
    endpointUrl: z
      .url("Must be a valid URL")
      .regex(/^https?:\/\//, "URL must start with http:// or https://")
      .optional(),
    httpMethod: z
      .string()
      .toUpperCase()
      .refine(
        (method) => ["GET", "POST", "PUT", "PATCH"].includes(method),
        "HTTP method must be GET, POST, PUT, or PATCH"
      )
      .optional(),
    customHeaders: z
      .record(z.string(), z.string())
      .optional()
      .nullable()
      .refine(
        (headers) => {
          if (!headers) return true;
          const restrictedHeaders = [
            "content-type",
            "x-privy-timestamp",
            "x-privy-signature",
            "x-privy-event-id",
          ];
          return !Object.keys(headers).some((key) =>
            restrictedHeaders.includes(key.toLowerCase())
          );
        },
        {
          message:
            "Cannot override Content-Type, X-Privy-Timestamp, X-Privy-Signature, or X-Privy-Event-Id headers",
        }
      ),
    isActive: z.boolean().optional(),
    targetType: z.nativeEnum(WebhookTargetType).optional(),
    dataProcessorId: z.string().optional().nullable(),
  })
  .refine(
    (data) => {
      // If targetType is DATA_PROCESSOR, dataProcessorId is required
      if (data.targetType === "DATA_PROCESSOR") {
        return !!data.dataProcessorId;
      }
      return true;
    },
    {
      message: "Data Processor ID is required when target type is DATA_PROCESSOR",
      path: ["dataProcessorId"],
    }
  )
  .refine(
    (data) => {
      // If targetType is DATA_PROCESSOR, only allow CONSENT_REVOKED and CONSENT_EXPIRED
      if (data.targetType === "DATA_PROCESSOR" && data.eventType) {
        return ["CONSENT_REVOKED", "CONSENT_EXPIRED"].includes(data.eventType);
      }
      return true;
    },
    {
      message:
        "Data Processor webhooks only support CONSENT_REVOKED and CONSENT_EXPIRED events",
      path: ["eventType"],
    }
  );

export type UpdateWebhookData = z.infer<typeof updateWebhookSchema>;

/**
 * Schema for toggling webhook active status
 */
export const toggleWebhookStatusSchema = z.object({
  publicId: z.uuid("Invalid webhook ID"),
  isActive: z.boolean(),
});

export type ToggleWebhookStatusData = z.infer<typeof toggleWebhookStatusSchema>;

/**
 * Schema for deleting a webhook
 */
export const deleteWebhookSchema = z.object({
  publicId: z.string().uuid("Invalid webhook ID"),
});

export type DeleteWebhookData = z.infer<typeof deleteWebhookSchema>;

/**
 * Schema for regenerating webhook signing secret
 */
export const regenerateSecretSchema = z.object({
  publicId: z.uuid("Invalid webhook ID"),
});

export type RegenerateSecretData = z.infer<typeof regenerateSecretSchema>;

/**
 * Response type for webhook (with masked signing secret)
 */
export interface WebhookResponse {
  id: number;
  publicId: string;
  eventType: WebhookEventType;
  endpointUrl: string;
  httpMethod: string;
  customHeaders: Record<string, string> | null;
  signingSecret: string; // Masked as "whsec_***...***"
  isActive: boolean;
  targetType: WebhookTargetType;
  dataProcessorId: string | null;
  dataProcessor?: {
    ouId: string;
    legalName: string;
    brandName: string;
  } | null;
  createdAt: Date;
  updatedAt: Date;
}

/**
 * Response type for newly created webhook (includes full signing secret once)
 */
export interface WebhookCreatedResponse extends WebhookResponse {
  signingSecret: string; // Full secret shown only on creation
}
