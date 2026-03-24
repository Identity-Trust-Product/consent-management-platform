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
import { GrievanceStatus } from "@prisma/client";
import { logger } from "@/lib/utils/logger";

/**
 * Cron job to detect and handle SLA breaches.
 * Run this periodically (e.g., every 30 minutes).
 */
export async function detectAndEscalateSlaBreaches() {
  const now = new Date();
  logger.info("Starting SLA breach detection", {
    timestamp: now.toISOString(),
  });

  try {
    // Find all SLA trackers that are:
    // 1. Not resolved (resolvedAt is null)
    // 2. Not already breached
    // 3. Past expected resolution time
    const breachedTrackers = await prisma.slaTracker.findMany({
      where: {
        resolvedAt: null,
        isBreached: false,
        expectedResolutionAt: {
          lt: now,
        },
      },
      include: {
        grievance: {
          include: {
            businessProcess: {
              select: { name: true },
            },
            assignedTo: {
              select: { id: true, name: true, email: true },
            },
          },
        },
      },
    });

    logger.info("SLA breach detection scan complete", {
      breachedCount: breachedTrackers.length,
    });

    if (breachedTrackers.length === 0) {
      return {
        success: true,
        processed: 0,
        message: "No SLA breaches detected",
      };
    }

    const results = {
      processed: 0,
      escalated: 0,
      errors: 0,
    };

    // Process each breached SLA
    for (const tracker of breachedTrackers) {
      try {
        await prisma.$transaction(async (tx) => {
          // Mark SLA as breached
          await tx.slaTracker.update({
            where: { id: tracker.id },
            data: {
              isBreached: true,
              breachedAt: now,
            },
          });

          // Create audit log for SLA breach
          await tx.grievanceAuditLog.create({
            data: {
              grievanceId: tracker.grievanceId,
              action: "SLA_BREACHED",
              details: {
                severity: tracker.severity,
                expectedResolutionAt:
                  tracker.expectedResolutionAt.toISOString(),
                breachedAt: now.toISOString(),
                assignedTo: tracker.grievance.assignedTo?.id || null,
                assignedToName: tracker.grievance.assignedTo?.name || null,
              },
              performedByUserId: null, // System action
            },
          });

          results.processed++;

          // Get escalation configuration
          const slaConfig = await tx.slaConfiguration.findUnique({
            where: { severity: tracker.severity },
          });

          // If escalation recipients are configured, create escalation
          if (slaConfig && slaConfig.escalationUserIds.length > 0) {
            // Mark as escalated
            await tx.slaTracker.update({
              where: { id: tracker.id },
              data: { escalatedAt: now },
            });

            // Create escalation audit log
            await tx.grievanceAuditLog.create({
              data: {
                grievanceId: tracker.grievanceId,
                action: "SLA_ESCALATED",
                details: {
                  severity: tracker.severity,
                  escalatedTo: slaConfig.escalationUserIds,
                  breachedAt: now.toISOString(),
                  businessProcess: tracker.grievance.businessProcess.name,
                },
                performedByUserId: null, // System action
              },
            });

            results.escalated++;

            // Send escalation emails to configured users
            try {
              const { emailService } = await import(
                "@/lib/services/email/email-service"
              );

              // Calculate time overdue
              const breachDuration =
                now.getTime() - tracker.expectedResolutionAt.getTime();
              const hoursOverdue = Math.floor(
                breachDuration / (1000 * 60 * 60)
              );
              const minutesOverdue = Math.floor(
                (breachDuration % (1000 * 60 * 60)) / (1000 * 60)
              );
              const timeOverdue =
                hoursOverdue > 0
                  ? `${hoursOverdue}h ${minutesOverdue}m`
                  : `${minutesOverdue} minutes`;

              // Fetch escalation recipient details
              const escalationUsers = await tx.user.findMany({
                where: {
                  id: { in: slaConfig.escalationUserIds },
                },
                select: {
                  id: true,
                  name: true,
                  email: true,
                },
              });
              console.error(escalationUsers);

              // Link to admin page with grievance ID query parameter
              const baseUrl =
                process.env.BASE_PATH;
              const grievanceUrl = `${baseUrl}/data-fiduciary/grievances/admin?id=${tracker.grievanceId}`;

              // Send email to each escalation recipient
              for (const user of escalationUsers) {
                if (user.email) {
                  emailService
                    .sendTemplatedEmail({
                      templateName: "sla-breach-escalation",
                      to: {
                        email: user.email,
                        name: user.name || "Team Member",
                      },
                      variables: {
                        grievanceId: tracker.grievance.publicId,
                        grievanceSubject:
                          tracker.grievance.subject || "Untitled Grievance",
                        severity: tracker.severity,
                        expectedResolutionDate:
                          tracker.expectedResolutionAt.toLocaleString("en-US", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                            hour: "2-digit",
                            minute: "2-digit",
                          }),
                        breachedAt: now.toLocaleString("en-US", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                          hour: "2-digit",
                          minute: "2-digit",
                        }),
                        timeOverdue,
                        assignedToName:
                          tracker.grievance.assignedTo?.name || undefined,
                        businessProcessName:
                          tracker.grievance.businessProcess.name,
                        grievanceUrl,
                        recipientName: user.name || "Team Member",
                      },
                    })
                    .catch((err) => {
                      console.error(
                        `[SLA Cron] Failed to send escalation email to ${user.email}:`,
                        err
                      );
                    });
                }
              }

              logger.info("SLA breach escalation emails sent", {
                grievanceId: tracker.grievance.publicId,
                recipientCount: escalationUsers.length,
                severity: tracker.severity,
              });
            } catch (emailError) {
              logger.error("Failed to send SLA escalation emails", {
                grievanceId: tracker.grievance.publicId,
                error:
                  emailError instanceof Error
                    ? emailError.message
                    : String(emailError),
              });
            }
          }
        });

        logger.info("SLA breach processed successfully", {
          grievanceId: tracker.grievance.publicId,
          severity: tracker.severity,
        });
      } catch (error) {
        logger.error("Error processing SLA breach", {
          grievanceId: tracker.grievance.publicId,
          error: error instanceof Error ? error.message : String(error),
        });
        results.errors++;
      }
    }

    logger.info("SLA breach detection completed", {
      processed: results.processed,
      escalated: results.escalated,
      errors: results.errors,
    });

    return {
      success: true,
      ...results,
    };
  } catch (error) {
    logger.error("Fatal error in SLA breach detection", {
      error: error instanceof Error ? error.message : String(error),
      stack: error instanceof Error ? error.stack : undefined,
    });
    return {
      success: false,
      error: "Fatal error in SLA breach detection",
    };
  }
}
