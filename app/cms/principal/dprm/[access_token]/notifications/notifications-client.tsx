"use client";
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

import { usePathname, useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Filter, ArrowRight } from "lucide-react";
import Link from "next/link";
import { DprmPageHeader } from "@/components/dprm/dprm-page-header";
import { createDprmLink } from "@/lib/dprm-utils";
import { useNoticeTranslation } from "@/hooks/use-notice-translation";
import { useNoticeLanguage } from "@/contexts/notice-language-context";

interface NotificationMetadata {
  consentPublicId?: string;
  businessProcessId?: string;
  expiresAt?: string;
  grievanceId?: number;
  withdrawalAcceptedCount?: number;
  withdrawalRejectedCount?: number;
}

interface NotificationsData {
  unreadCount: number;
  expiryCount: number;
  consentsExpiringCount: number;
  updateConsentCount: number;
  latestExpiryTimestamp: string | null;
  expiryNotifications: Array<{
    id: number;
    seen: boolean;
    metadata: NotificationMetadata;
  }>;
  grievanceUpdatesCount: number;
  withdrawalAcceptedCount: number;
  withdrawalRejectedCount: number;
  latestGrievanceTimestamp: string | null;
}

interface NotificationsClientProps {
  notificationsData: NotificationsData;
}

export function NotificationsClient({
  notificationsData,
}: NotificationsClientProps) {
  const { t } = useNoticeTranslation("dprm");
  const { currentLanguage: language } = useNoticeLanguage();

  const pathname = usePathname();
  const searchParams = useSearchParams();

  const baseUrl = pathname.split("/").slice(0, 5).join("/");
  const homeUrl = createDprmLink(baseUrl, searchParams);

  const consentActionCenterPath = createDprmLink(
    `${baseUrl}/consent-action-center`,
    searchParams
  );

  const renewConsentPath = createDprmLink(
    `${baseUrl}/consent-action-center?type=update`,
    searchParams
  );

  // Format timestamp
  const formatTimestamp = (isoString: string | null) => {
    if (!isoString) return t("Recently");
    const date = new Date(isoString);
    const options: Intl.DateTimeFormatOptions = {
      day: "2-digit",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    };
    return new Intl.DateTimeFormat(language || "en-GB", options).format(date);
  };

  // Build notification cards dynamically
  const notificationCards: any[] = [];

  // Updates needed notification (yellow)
  if (notificationsData.updateConsentCount > 0) {
    notificationCards.push({
      id: "action_needed",
      type: "update",
      title: t("Action Needed On"),
      dotColor: "bg-yellow-500",
      content: (
        <p>
          {t("consents_require_update", {
            count: notificationsData.updateConsentCount,
          })}
        </p>
      ),
      timestamp: formatTimestamp(new Date().toISOString()),
      buttonText: t("Review and Update Consent"),
      buttonLink: createDprmLink(
        `${baseUrl}/consent-action-center?type=update`,
        searchParams
      ),
    });
  }

  // Expiry reminder notification (blue)
  if (notificationsData.consentsExpiringCount > 0) {
    notificationCards.push({
      id: "reminder",
      type: "reminder",
      title: t("Reminder On"),
      dotColor: "bg-blue-500",
      content: (
        <p>
          {t(
            notificationsData.consentsExpiringCount === 1
              ? "consents_about_to_expire_one"
              : "consents_about_to_expire_other",
            { count: notificationsData.consentsExpiringCount }
          )}
        </p>
      ),
      timestamp: formatTimestamp(notificationsData.latestExpiryTimestamp),
      buttonText: t("Renew Consents"),
      buttonLink: renewConsentPath,
    });
  }

  // Grievance updates notification (green)
  if (notificationsData.grievanceUpdatesCount > 0) {
    const grievancesPath = createDprmLink(
      `${baseUrl}/grievances`,
      searchParams
    );

    // Build content based on what types of updates exist
    const contentParts: React.ReactNode[] = [];

    if (notificationsData.withdrawalRejectedCount > 0) {
      contentParts.push(
        <p key="rejected" className="mb-1">
          {t(
            notificationsData.withdrawalRejectedCount === 1
              ? "withdrawal_rejected_one"
              : "withdrawal_rejected_other",
            { count: notificationsData.withdrawalRejectedCount }
          )}
        </p>
      );
    }

    if (notificationsData.withdrawalAcceptedCount > 0) {
      contentParts.push(
        <p key="accepted" className={contentParts.length > 0 ? "" : "mb-1"}>
          {t(
            notificationsData.withdrawalAcceptedCount === 1
              ? "withdrawal_accepted_one"
              : "withdrawal_accepted_other",
            { count: notificationsData.withdrawalAcceptedCount }
          )}
        </p>
      );
    }

    // If there are other updates (new messages, resolutions, etc.) and no withdrawal-specific messages
    if (contentParts.length === 0) {
      contentParts.push(
        <p key="general">
          {t(
            notificationsData.grievanceUpdatesCount === 1
              ? "grievance_update_one"
              : "grievance_update_other",
            { count: notificationsData.grievanceUpdatesCount }
          )}
        </p>
      );
    }

    notificationCards.push({
      id: "grievance_updates",
      type: "grievance",
      title: t("Request Updates On"),
      dotColor: "bg-green-500",
      content: <div>{contentParts}</div>,
      timestamp: formatTimestamp(notificationsData.latestGrievanceTimestamp),
      buttonText: t("View Request Status"),
      buttonLink: grievancesPath,
    });
  }

  return (
    <div className="min-h-screen bg-[#FAFAFB]">
      <DprmPageHeader
        title={t("Notifications")}
        backHref={homeUrl}
        action={
          notificationsData.unreadCount > 0 ? (
            <Badge className="bg-blue-600 text-white hover:bg-blue-700">
              {t("{{count}} New", { count: notificationsData.unreadCount })}
            </Badge>
          ) : undefined
        }
      />

      {/* Filter Bar & Actions */}
      <div className="p-4">
        <div className="flex items-center justify-between">
          {/* Filter Buttons */}
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="icon"
              className="h-9 w-9 rounded-lg bg-white"
            >
              <Filter className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              className="rounded-full h-9 bg-white text-neutral-700"
            >
              {t("Read")}
            </Button>
            <Button
              variant="outline"
              className="rounded-full h-9 bg-white text-neutral-700"
            >
              {t("Unread")}
            </Button>
          </div>

          {/* Mark as Read Link */}
          <Button
            variant="link"
            className="text-sm text-neutral-600 h-auto p-0"
          >
            {t("Mark all as read")}
          </Button>
        </div>
      </div>

      {/* Notification Card List */}
      <main className="px-4 pb-4 space-y-4">
        {notificationCards.length > 0 ? (
          notificationCards.map((card) => (
            <NotificationCard
              key={card.id}
              dotColor={card.dotColor}
              title={card.title}
              content={card.content}
              timestamp={card.timestamp}
              buttonText={card.buttonText}
              buttonLink={card.buttonLink}
            />
          ))
        ) : (
          <div className="text-center py-12 text-neutral-500">
            {t("No notifications at this time")}
          </div>
        )}
      </main>
    </div>
  );
}

// Notification Card Component
interface NotificationCardProps {
  dotColor: string;
  title: string;
  content: React.ReactNode;
  timestamp: string;
  buttonText: string;
  buttonLink: string;
}

function NotificationCard({
  dotColor,
  title,
  content,
  timestamp,
  buttonText,
  buttonLink,
}: NotificationCardProps) {
  return (
    <div className="w-full bg-white rounded-lg border border-[#E7E8E9] p-4">
      <div className="flex flex-col gap-3">
        {/* Card Header */}
        <div className="flex items-center gap-2">
          <span
            className={`h-2.5 w-2.5 rounded-full ${dotColor}`}
            aria-hidden="true"
          />
          <h2 className="font-semibold text-gray-800">{title}</h2>
        </div>

        {/* Card Body */}
        <div className="pl-5 space-y-3">
          <div className="text-neutral-700 text-sm">{content}</div>
          <p className="text-sm text-neutral-500">{timestamp}</p>
          <Button
            variant="outline"
            className="
              text-primary-600
              border-primary-600
              hover:bg-primary-100
              hover:text-primary-600
              rounded-sm
              h-auto
              px-4 py-2
              font-medium
            "
          >
            <Link href={buttonLink} className="flex items-center">
              {buttonText}
              <ArrowRight className="h-4 w-4 ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
