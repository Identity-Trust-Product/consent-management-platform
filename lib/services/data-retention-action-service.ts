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

import prisma from "@/lib/prisma";
import { logger } from "@/lib/utils/logger";
import { triggerWebhookEvent } from "./webhook-service";
import { WebhookEventType } from "@prisma/client";

interface DataRetentionActionResult {
  processedCount: number;
  triggeredPolicies: Array<{
    policyId: number;
    policyName: string;
    consentCount: number;
    trigger: string;
  }>;
}

/**
 * Process data retention policies for consents that have crossed retention time
 * Triggers webhooks for revoked and expired consents based on policy configurations
 */
export async function processDataRetentionActions(): Promise<DataRetentionActionResult> {
  const now = new Date();
  const result: DataRetentionActionResult = {
    processedCount: 0,
    triggeredPolicies: [],
  };

  try {
    // Get all active data retention policy configurations
    const policyConfigurations = await prisma.dataRetentionPolicyConfiguration.findMany({
      include: {
        dataRetentionPolicy: true,
        businessProcessRule: {
          select: {
            publicId: true,
            retentionDuration: true,
            businessProcess: {
              select: {
                publicId: true,
                name: true,
                code: true,
                version: true,
              },
            },
            processingPurpose: {
              select: {
                publicId: true,
                name: true,
              },
            },
            consentPurpose: {
              select: {
                publicId: true,
                name: true,
                code: true,
              },
            },
          },
        },
      },
    });

    logger.info("Processing data retention policies", {
      policyCount: policyConfigurations.length,
    });

    // Process each policy configuration
    for (const config of policyConfigurations) {
      const { trigger, businessProcessRule, dataRetentionPolicy } = config;
      const retentionDuration = businessProcessRule.retentionDuration;

      if (!retentionDuration) {
        logger.warn("Skipping policy configuration - no retention duration", {
          policyId: dataRetentionPolicy.id,
          ruleId: businessProcessRule.publicId,
        });
        continue;
      }

      // Calculate the retention cutoff date
      const retentionCutoffDate = new Date(now);
      retentionCutoffDate.setHours(retentionCutoffDate.getHours() - retentionDuration);

      // Build the where clause based on trigger type
      const whereClause: any = {
        businessProcessRuleId: businessProcessRule.publicId,
        updatedAt: {
          lte: retentionCutoffDate,
        },
        dataRetentionActionTriggeredAt: null, // Only process consents that haven't been triggered yet
      };

      // Add trigger-specific conditions
      if (trigger === "revoked") {
        whereClause.status = "revoked";
      } else if (trigger === "expired") {
        whereClause.isExpired = true;
      } else if (trigger === "revoked_or_expired") {
        whereClause.OR = [
          { status: "revoked" },
          { isExpired: true },
        ];
      } else {
        logger.warn("Unknown trigger type", {
          trigger,
          policyId: dataRetentionPolicy.id,
        });
        continue;
      }

      // Find consents that meet the retention criteria
      const consentsToProcess = await prisma.consent.findMany({
        where: whereClause,
        select: {
          publicId: true,
          dataPrincipalId: true,
          referenceId: true,
          status: true,
          isExpired: true,
          updatedAt: true,
          businessProcess: {
            select: {
              name: true,
              code: true,
              version: true,
            },
          },
          consentPurpose: {
            select: {
              name: true,
              code: true,
            },
          },
          processingPurpose: {
            select: {
              name: true,
            },
          },
          businessUnit: {
            select: {
              name: true,
              code: true,
            },
          },
        },
      });

      if (consentsToProcess.length === 0) {
        logger.debug("No consents found for data retention policy", {
          policyId: dataRetentionPolicy.id,
          policyName: dataRetentionPolicy.name,
          trigger,
        });
        continue;
      }

      logger.info("Found consents for data retention action", {
        policyId: dataRetentionPolicy.id,
        policyName: dataRetentionPolicy.name,
        consentCount: consentsToProcess.length,
        trigger,
      });

      // Group consents by data principal and reference ID for webhook
      const consentsByPrincipal = new Map<string, typeof consentsToProcess>();
      consentsToProcess.forEach((consent) => {
        const key = `${consent.dataPrincipalId}_${consent.referenceId}`;
        const existing = consentsByPrincipal.get(key) || [];
        existing.push(consent);
        consentsByPrincipal.set(key, existing);
      });

      // Trigger webhook for each data principal
      for (const [key, consents] of consentsByPrincipal.entries()) {
        const firstConsent = consents[0];
        const consentIds = consents.map((c) => c.publicId);

        try {
          await triggerWebhookEvent(WebhookEventType.DATA_RETENTION_ACTION, {
            policy_id: dataRetentionPolicy.publicId,
            policy_name: dataRetentionPolicy.name,
            policy_url: dataRetentionPolicy.policyUrl,
            trigger_type: trigger,
            retention_duration_hours: retentionDuration,
            data_principal_id: firstConsent.dataPrincipalId,
            reference_id: firstConsent.referenceId,
            business_process_name: firstConsent.businessProcess.name,
            business_process_code: firstConsent.businessProcess.code,
            business_process_version: firstConsent.businessProcess.version,
            business_unit_name: firstConsent.businessUnit.name,
            business_unit_code: firstConsent.businessUnit.code,
            consent_count: consents.length,
            consents: consents.map((c) => ({
              consent_id: c.publicId,
              consent_purpose_name: c.consentPurpose.name,
              consent_purpose_code: c.consentPurpose.code,
              processing_purpose_name: c.processingPurpose.name,
              status: c.status,
              is_expired: c.isExpired,
              updated_at: c.updatedAt.toISOString(),
            })),
            triggered_at: now.toISOString(),
          });

          // Mark these consents as having been processed for data retention
          await prisma.consent.updateMany({
            where: {
              publicId: {
                in: consentIds,
              },
            },
            data: {
              dataRetentionActionTriggeredAt: now,
            },
          });

          result.processedCount += consents.length;
        } catch (webhookError) {
          logger.error("Failed to trigger data retention webhook", {
            policyId: dataRetentionPolicy.id,
            dataPrincipalId: firstConsent.dataPrincipalId,
            error: webhookError instanceof Error ? webhookError.message : "Unknown error",
          });
        }
      }

      result.triggeredPolicies.push({
        policyId: dataRetentionPolicy.id,
        policyName: dataRetentionPolicy.name,
        consentCount: consentsToProcess.length,
        trigger,
      });
    }

    return result;
  } catch (error) {
    logger.error("Error processing data retention actions", {
      error: error instanceof Error ? error.message : "Unknown error",
      stack: error instanceof Error ? error.stack : undefined,
    });
    throw error;
  }
}
