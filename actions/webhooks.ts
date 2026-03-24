"use server";
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

import { auth } from "@/auth";
import { Actions, Resources } from "@/lib/constants/rbac";
import prisma from "@/lib/prisma";
import { createSafeAction } from "@/lib/safe-action";
import {
  createWebhookSchema,
  deleteWebhookSchema,
  regenerateSecretSchema,
  toggleWebhookStatusSchema,
  updateWebhookSchema,
  type WebhookResponse,
} from "@/lib/schemas/webhook-schemas";
import { generateSigningSecret } from "@/lib/services/webhook-service";
import { revalidatePath } from "next/cache";

/**
 * Mask signing secret for display (show only first and last 4 chars)
 */
function maskSigningSecret(secret: string): string {
  if (secret.length <= 8) return "***";
  return `whsec_${secret.substring(0, 4)}...${secret.slice(-4)}`;
}

/**
 * Transform database webhook to response format
 */
function transformWebhookToResponse(webhook: any): WebhookResponse {
  return {
    id: webhook.id,
    publicId: webhook.publicId,
    eventType: webhook.eventType,
    endpointUrl: webhook.endpointUrl,
    httpMethod: webhook.httpMethod,
    customHeaders: webhook.customHeaders as Record<string, string> | null,
    signingSecret: maskSigningSecret(webhook.signingSecret),
    isActive: webhook.isActive,
    targetType: webhook.targetType,
    dataProcessorId: webhook.dataProcessorId,
    dataProcessor: webhook.dataProcessor ? {
      ouId: webhook.dataProcessor.ouId,
      legalName: webhook.dataProcessor.legalName,
      brandName: webhook.dataProcessor.brandName,
    } : null,
    createdAt: webhook.createdAt,
    updatedAt: webhook.updatedAt,
  };
}

/**
 * Get all webhooks
 */
export async function getWebhooks(): Promise<{
  success: boolean;
  data?: WebhookResponse[];
  error?: string;
}> {
  try {
    const session = await auth();
    if (!session?.user) {
      return { success: false, error: "Unauthorized" };
    }

    const webhooks = await prisma.webhook.findMany({
      include: {
        dataProcessor: {
          select: {
            ouId: true,
            legalName: true,
            brandName: true,
          },
        },
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    return {
      success: true,
      data: webhooks.map(transformWebhookToResponse),
    };
  } catch (error) {
    return {
      success: false,
      error:
        error instanceof Error ? error.message : "Failed to fetch webhooks",
    };
  }
}

/**
 * Get a single webhook by public ID
 */
export async function getWebhookById(publicId: string): Promise<{
  success: boolean;
  data?: WebhookResponse;
  error?: string;
}> {
  try {
    const session = await auth();
    if (!session?.user) {
      return { success: false, error: "Unauthorized" };
    }

    const webhook = await prisma.webhook.findUnique({
      where: { publicId },
      include: {
        dataProcessor: {
          select: {
            ouId: true,
            legalName: true,
            brandName: true,
          },
        },
      },
    });

    if (!webhook) {
      return {
        success: false,
        error: "Webhook not found",
      };
    }

    return {
      success: true,
      data: transformWebhookToResponse(webhook),
    };
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : "Failed to fetch webhook",
    };
  }
}

/**
 * Create a new webhook
 */
export const createWebhook = createSafeAction(
  { resource: Resources.WEBHOOK, action: Actions.CREATE },
  createWebhookSchema,
  async (data, user) => {
    // Generate signing secret
    const signingSecret = generateSigningSecret();

    // Create webhook with defaults
    const webhook = await prisma.webhook.create({
      data: {
        eventType: data.eventType,
        endpointUrl: data.endpointUrl,
        httpMethod: data.httpMethod ?? "POST",
        customHeaders: data.customHeaders || null,
        signingSecret,
        isActive: data.isActive ?? true,
        targetType: data.targetType ?? "DATA_FIDUCIARY",
        dataProcessorId: data.dataProcessorId || null,
      },
      include: {
        dataProcessor: {
          select: {
            ouId: true,
            legalName: true,
            brandName: true,
          },
        },
      },
    });

    revalidatePath("/cms/data-fiduciary/webhooks");

    // Return full secret only on creation
    return {
      ...transformWebhookToResponse(webhook),
      signingSecret, // Full secret for initial setup
    };
  }
);

/**
 * Update an existing webhook
 */
export const updateWebhook = createSafeAction(
  { resource: Resources.WEBHOOK, action: Actions.UPDATE },
  updateWebhookSchema,
  async (data, user) => {
    const { publicId, ...updateData } = data;

    // Check if webhook exists
    const existing = await prisma.webhook.findUnique({
      where: { publicId },
    });

    if (!existing) {
      throw new Error("Webhook not found");
    }

    // Update webhook
    const webhook = await prisma.webhook.update({
      where: { publicId },
      data: {
        ...(updateData.eventType && { eventType: updateData.eventType }),
        ...(updateData.endpointUrl && { endpointUrl: updateData.endpointUrl }),
        ...(updateData.httpMethod && { httpMethod: updateData.httpMethod }),
        ...(updateData.customHeaders !== undefined && {
          customHeaders: updateData.customHeaders || null,
        }),
        ...(updateData.isActive !== undefined && {
          isActive: updateData.isActive,
        }),
        ...(updateData.targetType && { targetType: updateData.targetType }),
        ...(updateData.dataProcessorId !== undefined && {
          dataProcessorId: updateData.dataProcessorId || null,
        }),
      },
      include: {
        dataProcessor: {
          select: {
            ouId: true,
            legalName: true,
            brandName: true,
          },
        },
      },
    });

    revalidatePath("/cms/data-fiduciary/webhooks");

    return transformWebhookToResponse(webhook);
  }
);

/**
 * Toggle webhook active status
 */
export const toggleWebhookStatus = createSafeAction(
  { resource: Resources.WEBHOOK, action: Actions.UPDATE },
  toggleWebhookStatusSchema,
  async (data, user) => {
    const webhook = await prisma.webhook.update({
      where: { publicId: data.publicId },
      data: { isActive: data.isActive },
      include: {
        dataProcessor: {
          select: {
            ouId: true,
            legalName: true,
            brandName: true,
          },
        },
      },
    });

    revalidatePath("/cms/data-fiduciary/webhooks");

    return transformWebhookToResponse(webhook);
  }
);

/**
 * Delete a webhook
 */
export const deleteWebhook = createSafeAction(
  { resource: Resources.WEBHOOK, action: Actions.DELETE },
  deleteWebhookSchema,
  async (data, user) => {
    await prisma.webhook.delete({
      where: { publicId: data.publicId },
    });

    revalidatePath("/cms/data-fiduciary/webhooks");

    return true;
  }
);

/**
 * Regenerate signing secret for a webhook
 */
export const regenerateWebhookSecret = createSafeAction(
  { resource: Resources.WEBHOOK, action: Actions.UPDATE },
  regenerateSecretSchema,
  async (data, user) => {
    // Generate new secret
    const newSecret = generateSigningSecret();

    await prisma.webhook.update({
      where: { publicId: data.publicId },
      data: { signingSecret: newSecret },
    });

    revalidatePath("/cms/data-fiduciary/webhooks");

    return { signingSecret: newSecret };
  }
);
