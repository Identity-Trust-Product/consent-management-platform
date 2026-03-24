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

import prisma from "../prisma";

interface NotifyExpiringConsentsResult {
  notifiedCount: number;
  skippedCount: number;
}

/**
 * Creates notifications for consents expiring in 1 day
 */
export async function notifyExpiringConsents(): Promise<NotifyExpiringConsentsResult> {
  // Calculate the date range for consents expiring in exactly 1 day
  const now = new Date();
  const targetDay = new Date(now);
  targetDay.setDate(
    targetDay.getDate() + Number(process.env.NOTIFY_EXPIRY_DAYS_AHEAD ?? 1)
  );

  // Start of tomorrow (midnight)
  const startOfTomorrow = new Date(targetDay);
  startOfTomorrow.setHours(0, 0, 0, 0);

  // End of tomorrow (23:59:59)
  const endOfTomorrow = new Date(targetDay);
  endOfTomorrow.setHours(23, 59, 59, 999);

  // Find consents expiring tomorrow that haven't expired yet
  const expiringConsents = await prisma.consent.findMany({
    where: {
      expiresAt: {
        gte: startOfTomorrow,
        lte: endOfTomorrow,
      },
      isExpired: false,
      status: "accepted",
    },
    select: {
      publicId: true,
      businessProcessId: true,
      expiresAt: true,
      dataPrincipalId: true,
    },
  });

  if (expiringConsents.length === 0) {
    return { notifiedCount: 0, skippedCount: 0 };
  }

  // Get existing notifications to avoid duplicates
  const consentPublicIds = expiringConsents.map((c) => c.publicId);

  // Query for existing expiry notifications for these consents
  const existingNotifications = await prisma.$queryRaw<
    Array<{ metadata: any }>
  >`
    SELECT metadata 
    FROM notifications 
    WHERE type = 'expiry' 
    AND metadata->>'consentPublicId' = ANY(${consentPublicIds})
  `;

  // Create a set of consent IDs that already have notifications
  const notifiedConsentIds = new Set(
    existingNotifications
      .map((n) => n.metadata?.consentPublicId)
      .filter(Boolean)
  );

  // Create notifications for consents that don't have one yet

  const notificationsToCreate = expiringConsents
    .filter((consent) => !notifiedConsentIds.has(consent.publicId))
    .map((consent) => {
      return {
        dataPrincipalId: consent.dataPrincipalId,
        type: "expiry",
        seen: false,
        metadata: {
          consentPublicId: consent.publicId,
          businessProcessId: consent.businessProcessId,
          expiresAt: consent.expiresAt?.toISOString(),
        },
      };
    });

  const skippedCount = expiringConsents.length - notificationsToCreate.length;

  if (notificationsToCreate.length > 0) {
    await prisma.notification.createMany({
      data: notificationsToCreate,
      skipDuplicates: true,
    });

    // Send email notifications
    try {
      const { emailService } = await import("./email/email-service");
      const { generateDprmLink } = await import("./dprm-service");

      // Group consents by data principal to send one email per principal
      const consentsByPrincipal = new Map<string, typeof expiringConsents>();
      expiringConsents
        .filter((consent) => !notifiedConsentIds.has(consent.publicId))
        .forEach((consent) => {
          const existing =
            consentsByPrincipal.get(consent.dataPrincipalId) || [];
          existing.push(consent);
          consentsByPrincipal.set(consent.dataPrincipalId, existing);
        });

      for (const [principalId, consents] of consentsByPrincipal.entries()) {
        try {
          // Get business process details and principal info
          const firstConsent = consents[0];
          const businessProcess = await prisma.businessProcess.findFirst({
            where: { publicId: firstConsent.businessProcessId },
            select: { name: true },
          });

          // Try to get email from the most recent notice for this principal
          const recentNotice = await prisma.notice.findFirst({
            where: { dataPrincipalId: principalId },
            include: { metadata: true },
            orderBy: { createdAt: "desc" },
          });

          let principalEmail: string | undefined;
          let principalName = "User";

          if (recentNotice?.metadata) {
            const metadata = recentNotice.metadata.reduce(
              (acc, item) => {
                acc[item.key] = item.value;
                return acc;
              },
              {} as Record<string, string>
            );
            principalEmail = metadata.email || metadata.Email;
            principalName = metadata.name || metadata.Name || "User";
          }

          if (principalEmail && businessProcess) {
            const dprmLink =
              (await generateDprmLink(
                principalId,
                new Date(Date.now() + 7 * 24 * 60 * 60 * 1000) // 7 days from now
              )) + "/consent-action-center?type=update";

            // Calculate days until expiry for the first consent
            const firstExpiryDate = consents[0].expiresAt;
            const daysUntilExpiry = firstExpiryDate
              ? Math.ceil(
                (firstExpiryDate.getTime() - now.getTime()) /
                (1000 * 60 * 60 * 24)
              )
              : 1;

            // Format consents for template
            const formattedConsents = consents.map((consent) => ({
              consentPurposeName: consent.publicId, // You may want to fetch the actual purpose name
              expiryDate:
                consent.expiresAt?.toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                }) || "Unknown",
            }));

            emailService.sendTemplatedEmail({
              templateName: "consent-expiring-reminder",
              to: { email: principalEmail, name: principalName },
              variables: {
                consents: formattedConsents,
                businessProcessName: businessProcess.name,
                dprmLink,
                principalName,
                daysUntilExpiry,
              },
            });
          }
        } catch (emailError) {
          console.error(
            `Failed to send expiry email to ${principalId}:`,
            emailError
          );
        }
      }
    } catch (emailError) {
      console.error("Failed to send expiry notification emails:", emailError);
    }
  }

  return {
    notifiedCount: notificationsToCreate.length,
    skippedCount,
  };
}
