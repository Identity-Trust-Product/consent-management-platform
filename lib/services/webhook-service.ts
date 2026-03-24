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

/**
 * Webhook Service - Fire-and-Forget Event Notification System
 * 
 * Features:
 * - HMAC-SHA256 signature generation for payload verification
 * - Configurable HTTP methods and custom headers
 * - Fire-and-forget delivery (no blocking)
 * - Webhook delivery logging with status tracking
 * - Data processor webhook filtering and payload customization
 */

import { WebhookEventType, WebhookDeliveryStatus } from "@prisma/client";
import prisma from "@/lib/prisma";
import { logger } from "@/lib/utils/logger";
import { createHmac, randomUUID } from "crypto";

/**
 * Standard webhook payload structure
 */
interface WebhookPayload {
  eventId: string;
  eventType: WebhookEventType;
  timestamp: string;
  data: Record<string, unknown>;
}

/**
 * Webhook endpoint configuration
 */
interface WebhookEndpoint {
  id: number;
  publicId: string;
  endpointUrl: string;
  httpMethod: string;
  customHeaders: Record<string, string> | null;
  signingSecret: string;
  targetType: string;
  dataProcessorId: string | null;
}

/**
 * Generate HMAC-SHA256 signature for webhook payload
 * 
 * @param timestamp - ISO timestamp for replay protection
 * @param payload - JSON stringified payload
 * @param secret - Signing secret from webhook configuration
 * @returns Signature in format "v1=<hex>"
 */
function generateSignature(
  timestamp: string,
  payload: string,
  secret: string
): string {
  const signedPayload = `${timestamp}.${payload}`;
  const hmac = createHmac("sha256", secret);
  hmac.update(signedPayload);
  const signature = hmac.digest("hex");
  return `v1=${signature}`;
}

/**
 * Create webhook log entry (fire-and-forget)
 */
async function createWebhookLog(
  webhookId: number,
  eventId: string,
  eventType: WebhookEventType,
  payload: Record<string, unknown>,
  status: WebhookDeliveryStatus,
  httpStatus?: number,
  responseTime?: number,
  errorMessage?: string
): Promise<void> {
  try {
    await prisma.webhookLog.create({
      data: {
        webhookId,
        eventId,
        eventType,
        payload: payload as any, // Prisma Json type
        status,
        httpStatus,
        responseTime,
        errorMessage: errorMessage?.substring(0, 1000), // Limit error message length
      },
    });
  } catch (error) {
    // Don't let logging failures affect webhook delivery
    logger.error("Failed to create webhook log", {
      webhookId,
      eventId,
      error: error instanceof Error ? error.message : "Unknown error",
    });
  }
}

/**
 * Fire-and-forget webhook delivery with logging
 * This function is intentionally async but not awaited by the caller
 * 
 * @param endpoint - Webhook endpoint configuration
 * @param payload - Event data to send
 */
async function fireWebhook(
  endpoint: WebhookEndpoint,
  payload: Record<string, unknown>
): Promise<void> {
  const eventId = randomUUID();
  const timestamp = new Date().toISOString();
  const startTime = Date.now();

  // Construct standardized payload
  const webhookPayload: WebhookPayload = {
    eventId,
    eventType: payload.eventType as WebhookEventType,
    timestamp,
    data: payload,
  };

  const payloadJson = JSON.stringify(webhookPayload);

  // Generate HMAC signature
  const signature = generateSignature(timestamp, payloadJson, endpoint.signingSecret);

  // Prepare headers
  const headers: Record<string, string> = {
    "Content-Type": "application/json",
    "X-Privy-Timestamp": timestamp,
    "X-Privy-Signature": signature,
    "X-Privy-Event-Id": eventId,
    "User-Agent": "Privy-Webhook/1.0",
  };

  // Merge custom headers if provided
  if (endpoint.customHeaders) {
    Object.assign(headers, endpoint.customHeaders);
  }

  logger.debug("Firing webhook", {
    endpointId: endpoint.publicId,
    eventId,
    url: endpoint.endpointUrl,
    targetType: endpoint.targetType,
  });

  // Create pending log entry (fire-and-forget)
  createWebhookLog(
    endpoint.id,
    eventId,
    payload.eventType as WebhookEventType,
    payload,
    "PENDING"
  ).catch(() => {
    // Silently ignore logging errors
  });

  try {
    // Create abort controller for timeout (15 seconds)
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 15000);

    const response = await fetch(endpoint.endpointUrl, {
      method: endpoint.httpMethod,
      headers,
      body: payloadJson,
      signal: controller.signal,
    });

    clearTimeout(timeoutId);
    const responseTime = Date.now() - startTime;

    if (response.ok) {
      logger.info("Webhook delivered successfully", {
        endpointId: endpoint.publicId,
        eventId,
        status: response.status,
        responseTime,
      });

      // Update log with success (fire-and-forget)
      prisma.webhookLog
        .updateMany({
          where: { eventId },
          data: {
            status: "DELIVERED",
            httpStatus: response.status,
            responseTime,
          },
        })
        .catch(() => {
          // Silently ignore logging errors
        });
    } else {
      const errorMsg = `HTTP ${response.status}: ${response.statusText}`;
      logger.warn("Webhook delivery failed with non-2xx response", {
        endpointId: endpoint.publicId,
        eventId,
        status: response.status,
        statusText: response.statusText,
        responseTime,
      });

      // Update log with failure (fire-and-forget)
      prisma.webhookLog
        .updateMany({
          where: { eventId },
          data: {
            status: "FAILED",
            httpStatus: response.status,
            responseTime,
            errorMessage: errorMsg,
          },
        })
        .catch(() => {
          // Silently ignore logging errors
        });
    }
  } catch (error) {
    const responseTime = Date.now() - startTime;
    let status: WebhookDeliveryStatus = "FAILED";
    let errorMsg = "Unknown error";

    if (error instanceof Error) {
      if (error.name === "AbortError") {
        status = "TIMEOUT";
        errorMsg = "Request timeout after 15 seconds";
        logger.error("Webhook delivery timeout", {
          endpointId: endpoint.publicId,
          eventId,
          url: endpoint.endpointUrl,
          responseTime,
        });
      } else {
        errorMsg = error.message;
        logger.error("Webhook delivery error", {
          endpointId: endpoint.publicId,
          eventId,
          error: error.message,
          responseTime,
        });
      }
    } else {
      logger.error("Webhook delivery unknown error", {
        endpointId: endpoint.publicId,
        eventId,
        responseTime,
      });
    }

    // Update log with error (fire-and-forget)
    prisma.webhookLog
      .updateMany({
        where: { eventId },
        data: {
          status,
          responseTime,
          errorMessage: errorMsg,
        },
      })
      .catch(() => {
        // Silently ignore logging errors
      });
  }
}

/**
 * Filter payload for data processor webhooks to only include relevant data
 */
function filterPayloadForDataProcessor(
  payload: Record<string, unknown>,
  dataProcessorId: string
): Record<string, unknown> {
  // Clone the payload
  const filtered = { ...payload };

  // If payload has data_processors array, filter to only include this processor
  if (Array.isArray(filtered.data_processors)) {
    filtered.data_processors = filtered.data_processors.filter(
      (dp: any) => dp.ou_id === dataProcessorId
    );
  }

  // If payload has processing purposes, filter to only those linked to this processor
  if (Array.isArray(filtered.processing_purposes)) {
    filtered.processing_purposes = filtered.processing_purposes.filter(
      (pp: any) =>
        pp.data_processors?.some((dp: any) => dp.ou_id === dataProcessorId)
    );
  }

  return filtered;
}

/**
 * Trigger webhook events for all active endpoints subscribed to the given event type
 * This is the main public interface for the webhook service
 * 
 * @param eventType - Type of event that occurred
 * @param payload - Event data to send to webhook endpoints
 * @param dataProcessorIds - Optional array of data processor IDs involved in this event (for filtering)
 * 
 * @example
 * ```typescript
 * // For data fiduciary webhooks only
 * await triggerWebhookEvent(WebhookEventType.CONSENT_CREATED, {
 *   consentId: "123",
 *   principalId: "user@example.com",
 * });
 * 
 * // For both data fiduciary and data processor webhooks
 * await triggerWebhookEvent(
 *   WebhookEventType.CONSENT_REVOKED,
 *   { consentId: "123", ... },
 *   ["processor-1", "processor-2"]
 * );
 * ```
 */
export async function triggerWebhookEvent(
  eventType: WebhookEventType,
  payload: Record<string, unknown>,
  dataProcessorIds?: string[]
): Promise<void> {
  try {
    // Build where clause for webhook query
    const whereClause: any = {
      eventType,
      isActive: true,
      OR: [
        // Always include data fiduciary webhooks
        { targetType: "DATA_FIDUCIARY" },
      ],
    };

    // Add data processor webhooks if processor IDs provided
    if (dataProcessorIds && dataProcessorIds.length > 0) {
      whereClause.OR.push({
        targetType: "DATA_PROCESSOR",
        dataProcessorId: { in: dataProcessorIds },
      });
    }

    // Find all active webhooks for this event type
    const webhooks = await prisma.webhook.findMany({
      where: whereClause,
      select: {
        id: true,
        publicId: true,
        endpointUrl: true,
        httpMethod: true,
        customHeaders: true,
        signingSecret: true,
        targetType: true,
        dataProcessorId: true,
      },
    });

    if (webhooks.length === 0) {
      logger.debug("No active webhooks found for event type", { eventType });
      return;
    }

    logger.info("Triggering webhooks", {
      eventType,
      count: webhooks.length,
      dataFiduciaryCount: webhooks.filter((w) => w.targetType === "DATA_FIDUCIARY").length,
      dataProcessorCount: webhooks.filter((w) => w.targetType === "DATA_PROCESSOR").length,
    });

    // Fire webhooks without awaiting (fire-and-forget)
    for (const webhook of webhooks) {
      const endpoint: WebhookEndpoint = {
        id: webhook.id,
        publicId: webhook.publicId,
        endpointUrl: webhook.endpointUrl,
        httpMethod: webhook.httpMethod,
        customHeaders: webhook.customHeaders as Record<string, string> | null,
        signingSecret: webhook.signingSecret,
        targetType: webhook.targetType,
        dataProcessorId: webhook.dataProcessorId,
      };

      // Filter payload for data processor webhooks
      let webhookPayload: Record<string, unknown> = { ...payload, eventType };
      if (webhook.targetType === "DATA_PROCESSOR" && webhook.dataProcessorId) {
        const filteredData = filterPayloadForDataProcessor(payload, webhook.dataProcessorId);
        webhookPayload = { ...filteredData, eventType };
      }

      // Fire without awaiting - this is intentional for fire-and-forget behavior
      fireWebhook(endpoint, webhookPayload).catch((error) => {
        logger.error("Unexpected error in fireWebhook", {
          endpointId: endpoint.publicId,
          error: error instanceof Error ? error.message : "Unknown error",
        });
      });
    }
  } catch (error) {
    logger.error("Error triggering webhook events", {
      eventType,
      error: error instanceof Error ? error.message : "Unknown error",
    });
  }
}

/**
 * Utility function to generate a secure signing secret for new webhooks
 * 
 * @returns Cryptographically secure random string (32 bytes, hex encoded)
 */
export function generateSigningSecret(): string {
  return randomUUID().replace(/-/g, "") + randomUUID().replace(/-/g, "");
}
