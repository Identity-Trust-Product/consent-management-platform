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

// FILE: app/notifications/page.tsx

import { NotificationsClient } from "./notifications-client";
import { getConsentsWithVersionDiffs } from "@/lib/services/consent-version-diff-service";
import {
  getTotalUpdateCount,
  getUpdateNotificationCount,
} from "@/lib/services/consent-update-transform-service";
import {
  ValidatedDprmPageProps,
  withDprmSessionHandler,
} from "@/components/hoc/with-dprm-session-handler";
import prisma from "@/lib/prisma";

// Utility safely parses/unwraps JSON metadata and returns object
function getMetaObject(meta: unknown): Record<string, unknown> {
  if (typeof meta === "string") {
    try {
      return JSON.parse(meta);
    } catch {
      return {};
    }
  }
  return typeof meta === "object" && meta !== null
    ? (meta as Record<string, unknown>)
    : {};
}

async function getNotificationsData(dpId: string) {
  // Get count of unread notifications
  const unreadCount = await prisma.notification.count({
    where: {
      dataPrincipalId: dpId,
      seen: false,
    },
  });

  // Get expiry notifications with metadata
  const expiryNotifications = await prisma.notification.findMany({
    where: {
      dataPrincipalId: dpId,
      type: "expiry",
    },
    orderBy: {
      id: "desc",
    },
    take: 50,
  });

  // Get ALL consent public IDs referenced in expiry notifications (to check status)
  const allNotificationConsentIds = Array.from(
    new Set(
      expiryNotifications
        .map(
          (n) => getMetaObject(n.metadata).consentPublicId as string | undefined
        )
        .filter((x): x is string => typeof x === "string")
    )
  );

  // Query accepted consents only
  const acceptedConsents = await prisma.consent.findMany({
    where: {
      publicId: { in: allNotificationConsentIds },
      status: "accepted",
    },
    select: { publicId: true },
  });
  const acceptedConsentIds = new Set(acceptedConsents.map((c) => c.publicId));

  // Group and count expiry notifications referencing accepted consents
  const uniqueExpiringConsents = new Map<
    string,
    {
      consentPublicId: string;
      businessProcessId?: unknown;
      expiresAt?: unknown;
    }
  >();
  expiryNotifications
    .filter((n) => !n.seen)
    .forEach((notification) => {
      const meta = getMetaObject(notification.metadata);
      const consentPublicId = meta.consentPublicId as string | undefined;
      if (consentPublicId && acceptedConsentIds.has(consentPublicId)) {
        uniqueExpiringConsents.set(consentPublicId, {
          consentPublicId,
          businessProcessId: meta.businessProcessId,
          expiresAt: meta.expiresAt,
        });
      }
    });

  const consentsExpiringCount = uniqueExpiringConsents.size;

  // Get the latest expiry notification timestamp for accepted consents
  const latestExpiryNotification = expiryNotifications.find((n) => {
    const meta = getMetaObject(n.metadata);
    return (
      !n.seen &&
      meta.consentPublicId &&
      acceptedConsentIds.has(meta.consentPublicId as string)
    );
  });

  // Get update notifications count (using the diff!)
  const consentsWithDiffs = await getConsentsWithVersionDiffs(dpId.toString());
  const updateConsentCount = getUpdateNotificationCount(consentsWithDiffs);
  const totalUpdatesAvailable = getTotalUpdateCount(consentsWithDiffs);

  // Get grievance notifications
  const grievanceNotifications = await prisma.notification.findMany({
    where: {
      dataPrincipalId: dpId,
      type: "grievance_update",
      seen: false,
    },
    orderBy: {
      id: "desc",
    },
  });

  // Count withdrawal requests by status and general grievance updates
  let withdrawalAcceptedCount = 0;
  let withdrawalRejectedCount = 0;
  let generalGrievanceUpdatesCount = 0; // For new_message, resolved, etc.
  let latestGrievanceTimestamp: string | null = null;

  grievanceNotifications.forEach((notification) => {
    const meta = getMetaObject(notification.metadata);
    const updateType = meta.updateType as string | undefined;

    if (updateType === "withdrawal_accepted") {
      withdrawalAcceptedCount++;
    } else if (updateType === "withdrawal_rejected") {
      withdrawalRejectedCount++;
    } else {
      // Count other types: new_message, resolved, status_changed
      generalGrievanceUpdatesCount++;
    }
  });

  if (grievanceNotifications.length > 0) {
    latestGrievanceTimestamp = new Date().toISOString();
  }

  // Total count includes all notification types
  const grievanceUpdatesCount = grievanceNotifications.length;

  return {
    unreadCount,
    expiryCount: Array.from(uniqueExpiringConsents.values()).length,
    consentsExpiringCount,
    latestExpiryTimestamp: latestExpiryNotification?.id
      ? new Date().toISOString()
      : null,
    expiryNotifications: expiryNotifications
      .filter((n) => {
        const meta = getMetaObject(n.metadata);
        return (
          meta.consentPublicId &&
          acceptedConsentIds.has(meta.consentPublicId as string)
        );
      })
      .map((n) => ({
        id: n.id,
        seen: n.seen,
        metadata: getMetaObject(n.metadata) as {
          consentPublicId?: string;
          businessProcessId?: string;
          expiresAt?: string;
        },
      })),
    updateConsentCount,
    totalUpdatesAvailable,
    grievanceUpdatesCount,
    withdrawalAcceptedCount,
    withdrawalRejectedCount,
    latestGrievanceTimestamp,
  };
}

async function NotificationsPage({
  sessionContext,
  searchParams,
}: ValidatedDprmPageProps) {
  const resolvedSearchParams = await searchParams;
  const minorDataPrincipalId = resolvedSearchParams.minor_data_principal_id as
    | string
    | undefined;

  let dataPrincipalId = sessionContext.dataPrincipalId;

  // If acting on behalf of a minor, verify relationship and use minor's ID
  if (minorDataPrincipalId) {
    const isGuardian = await prisma.consent.findFirst({
      where: {
        dataPrincipalId: minorDataPrincipalId,
        majorDataPrincipalId: sessionContext.dataPrincipalId,
      },
    });

    if (isGuardian) {
      dataPrincipalId = minorDataPrincipalId;
    }
  }

  const notificationsData = await getNotificationsData(dataPrincipalId);

  return <NotificationsClient notificationsData={notificationsData} />;
}

export default withDprmSessionHandler(NotificationsPage);
export const dynamic = "force-dynamic";
