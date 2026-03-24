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

import { getGrievancesForPrincipal } from "@/actions/grievances";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar as CalendarComponent } from "@/components/ui/calendar";
import { Card } from "@/components/ui/card";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { useGrievancePolling } from "@/hooks/use-grievance-polling";
import { useIsMobile } from "@/hooks/use-mobile";
import {
  GRIEVANCE_CATEGORY_LABELS,
  GRIEVANCE_STATUS_LABELS,
} from "@/lib/constants/grievances";
import type { GrievanceCategory, GrievanceStatus } from "@prisma/client";
import { differenceInDays, endOfDay, format, startOfDay } from "date-fns";
import { DprmPageHeader } from "@/components/dprm/dprm-page-header";
import {
  ArrowLeft,
  Calendar as CalendarIcon,
  ChevronDown,
  ChevronUp,
  Clock,
  MessageCircle,
  MessagesSquare,
} from "lucide-react";
import Link from "next/link";
import { useCallback, useState } from "react";
import { createDprmLink } from "@/lib/dprm-utils";
import { useSearchParams } from "next/navigation";

import { useNoticeTranslation } from "@/hooks/use-notice-translation";

interface GrievanceListClientProps {
  token: string;
  grievances: Array<{
    id: number;
    publicId: string;
    subject: string;
    description: string;
    status: GrievanceStatus;
    category: GrievanceCategory;
    createdAt: Date;
    updatedAt: Date;
    metadata: any;
    hasUnread?: boolean;
    businessProcess: {
      name: string;
    };
    messages?: Array<{
      id: number;
      message: string;
      authorType: string;
      createdAt: Date;
    }>;
    slaTracker?: {
      expectedResolutionAt: Date;
    } | null;
  }>;
}

const getStatusBadgeColor = (status: GrievanceStatus) => {
  switch (status) {
    case "SUBMITTED":
      return "bg-gray-100 text-gray-700 border-gray-300";
    case "ASSIGNED":
      return "bg-blue-100 text-blue-700 border-blue-300";
    case "IN_PROGRESS":
      return "bg-yellow-100 text-yellow-700 border-yellow-300";
    case "RESOLVED":
      return "bg-green-100 text-green-700 border-green-300";
    case "CLOSED":
      return "bg-gray-100 text-gray-500 border-gray-300";
    default:
      return "bg-gray-100 text-gray-700 border-gray-300";
  }
};

const calculateExpectedResolution = (
  createdAt: Date,
  status: GrievanceStatus,
  slaTracker?: { expectedResolutionAt: Date } | null
) => {
  // If already resolved or closed, show completion message
  if (status === "RESOLVED" || status === "CLOSED") {
    return "Completed";
  }

  // Use SLA tracker data if available
  if (slaTracker?.expectedResolutionAt) {
    const expectedDate = new Date(slaTracker.expectedResolutionAt);
    const today = new Date();
    const daysRemaining = differenceInDays(expectedDate, today);

    // If overdue
    if (daysRemaining < 0) {
      return `Overdue by ${Math.abs(daysRemaining)} days`;
    }

    // If due today
    if (daysRemaining === 0) {
      return "Due today";
    }

    return `${daysRemaining} ${daysRemaining === 1 ? "day" : "days"} remaining`;
  }

  return "N/A";
};

export default function GrievanceListClient({
  token,
  grievances: initialGrievances,
}: GrievanceListClientProps) {
  const { t } = useNoticeTranslation("dprm");
  const searchParams = useSearchParams();
  const minorDataPrincipalId =
    searchParams.get("minor_data_principal_id") || undefined;
  const [grievances, setGrievances] = useState(initialGrievances);
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const [isDateFilterOpen, setIsDateFilterOpen] = useState(false);

  // Temporary date range for selection (not applied yet)
  const [tempDateRange, setTempDateRange] = useState<{
    from: Date | undefined;
    to: Date | undefined;
  }>({
    from: undefined,
    to: undefined,
  });

  // Applied date range for filtering
  const [appliedDateRange, setAppliedDateRange] = useState<{
    from: Date | undefined;
    to: Date | undefined;
  }>({
    from: undefined,
    to: undefined,
  });

  const isMobile = useIsMobile();

  // Fetch grievances with polling
  const fetchGrievances = useCallback(async () => {
    const result = await getGrievancesForPrincipal(token, minorDataPrincipalId);
    if (result.success && result.data) {
      setGrievances(result.data);
    }
  }, [token, minorDataPrincipalId]);

  // Poll every 10 seconds
  useGrievancePolling(fetchGrievances, {
    enabled: true,
    interval: 10000,
  });

  // Filter grievances based on applied date range
  const getFilteredGrievances = () => {
    if (!appliedDateRange.from && !appliedDateRange.to) {
      return grievances;
    }

    return grievances.filter((grievance) => {
      const createdDate = startOfDay(new Date(grievance.createdAt));

      if (appliedDateRange.from && appliedDateRange.to) {
        const fromDate = startOfDay(appliedDateRange.from);
        const toDate = endOfDay(appliedDateRange.to);
        return createdDate >= fromDate && createdDate <= toDate;
      }

      if (appliedDateRange.from) {
        const fromDate = startOfDay(appliedDateRange.from);
        return createdDate >= fromDate;
      }

      if (appliedDateRange.to) {
        const toDate = endOfDay(appliedDateRange.to);
        return createdDate <= toDate;
      }

      return true;
    });
  };

  const filteredGrievances = getFilteredGrievances();

  const handleApplyDateFilter = () => {
    setAppliedDateRange(tempDateRange);
    setIsDateFilterOpen(false);
  };

  const handleClearDateFilter = () => {
    setTempDateRange({ from: undefined, to: undefined });
    setAppliedDateRange({ from: undefined, to: undefined });
  };

  return (
    <div className="min-h-screen bg-[#F5F5F5]">
      <DprmPageHeader
        title={t("Track Requests")}
        token={token}
        action={
          <Link
            href={createDprmLink(
              `/cms/principal/dprm/${token}/grievances/new`,
              searchParams
            )}
          >
            <Button size="sm" className="gap-2">
              <svg
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 4v16m8-8H4"
                />
              </svg>
              {t("Raise Ticket")}
            </Button>
          </Link>
        }
      />

      {/* Security Notice */}
      <div className="bg-green-50 border-l-4 border-green-400 p-4 mx-4 mt-4">
        <div className="flex gap-2">
          <div className="shrink-0 pt-0.5">
            <svg
              className="h-5 w-5 text-green-600"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <p className="text-sm text-green-700">
            {t("Your data is protected with industry-standard encryption and security measures.")}
          </p>
        </div>
      </div>

      {/* Filters */}
      <div className="p-4 space-y-3">
        <div className="flex gap-2">
          {isMobile ? (
            <Button
              variant="outline"
              size="sm"
              className="gap-2"
              onClick={() => {
                setTempDateRange(appliedDateRange);
                setIsDateFilterOpen(true);
              }}
            >
              <CalendarIcon className="h-4 w-4" />
              {appliedDateRange.from && appliedDateRange.to
                ? `${format(appliedDateRange.from, "dd/MM/yyyy")} - ${format(
                  appliedDateRange.to,
                  "dd/MM/yyyy"
                )}`
                : t("All Dates")}
            </Button>
          ) : (
            <Popover
              open={isDateFilterOpen}
              onOpenChange={(open) => {
                setIsDateFilterOpen(open);
                if (open) {
                  setTempDateRange(appliedDateRange);
                }
              }}
            >
              <PopoverTrigger asChild>
                <Button variant="outline" size="sm" className="gap-2">
                  <CalendarIcon className="h-4 w-4" />
                  {appliedDateRange.from && appliedDateRange.to
                    ? `${format(
                      appliedDateRange.from,
                      "dd/MM/yyyy"
                    )} - ${format(appliedDateRange.to, "dd/MM/yyyy")}`
                    : t("All Dates")}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <div className="p-4 space-y-4">
                  <div>
                    <h3 className="font-medium text-sm mb-1">
                      {t("Select Date Range")}
                    </h3>
                    <p className="text-xs text-muted-foreground">
                      {t("Choose a date range to filter your requests")}
                    </p>
                  </div>
                  <CalendarComponent
                    mode="range"
                    selected={{
                      from: tempDateRange.from,
                      to: tempDateRange.to,
                    }}
                    onSelect={(range) => {
                      if (range) {
                        setTempDateRange({
                          from: range.from,
                          to: range.to,
                        });
                      }
                    }}
                    numberOfMonths={1}
                    disabled={(date) => date > new Date()}
                    initialFocus
                  />
                  <div className="flex gap-2 pt-2 border-t">
                    <Button
                      variant="outline"
                      className="flex-1"
                      onClick={handleClearDateFilter}
                      size="sm"
                    >
                      {t("Clear")}
                    </Button>
                    <Button
                      className="flex-1"
                      onClick={handleApplyDateFilter}
                      disabled={!tempDateRange.from && !tempDateRange.to}
                      size="sm"
                    >
                      {t("Apply")}
                    </Button>
                  </div>
                </div>
              </PopoverContent>
            </Popover>
          )}
        </div>

        {/* Count */}
        <div>
          <h2 className="text-lg font-semibold">
            {t("All Request List ({{count}})", { count: filteredGrievances.length })}
          </h2>
        </div>

        {/* Date Range Filter Drawer (Mobile Only) */}
        {isMobile && (
          <Sheet open={isDateFilterOpen} onOpenChange={setIsDateFilterOpen}>
            <SheetContent
              side="bottom"
              className="h-auto max-h-[85vh] rounded-t-3xl"
            >
              <SheetHeader className="pb-4">
                <div className="flex items-center justify-between">
                  <div>
                    <SheetTitle className="text-xl">{t("Select Date")}</SheetTitle>
                    <SheetDescription className="text-sm mt-1">
                      {t("Choose a date range to filter your requests")}
                    </SheetDescription>
                  </div>
                </div>
              </SheetHeader>

              <div className="space-y-4 pb-4">
                {/* Calendar */}
                <CalendarComponent
                  mode="range"
                  selected={{
                    from: tempDateRange.from,
                    to: tempDateRange.to,
                  }}
                  onSelect={(range) => {
                    if (range) {
                      setTempDateRange({
                        from: range.from,
                        to: range.to,
                      });
                    }
                  }}
                  numberOfMonths={1}
                  disabled={(date) => date > new Date()}
                  initialFocus
                  className="w-[80%] mx-auto"
                />

                {/* Action Buttons */}
                <div className="flex gap-3 px-2">
                  <Button
                    variant="outline"
                    className="flex-1 h-12 rounded-xl"
                    onClick={handleClearDateFilter}
                  >
                    {t("Clear")}
                  </Button>
                  <Button
                    className="flex-1 h-12 rounded-xl"
                    onClick={handleApplyDateFilter}
                    disabled={!tempDateRange.from && !tempDateRange.to}
                  >
                    {t("Apply")}
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        )}

        {/* Request Cards */}
        <div className="space-y-3">
          {filteredGrievances.length === 0 ? (
            <div className="text-center py-8 text-muted-foreground">
              <p>{t("No requests found for the selected date range.")}</p>
            </div>
          ) : (
            filteredGrievances.map((grievance) => {
              const isExpanded = expandedId === grievance.id;
              const metadata = grievance.metadata || {};
              const hasUnread = grievance.hasUnread;

              return (
                <Card key={grievance.id} className="border-2">
                  <div className="p-4 space-y-3">
                    {/* Header with Subject and Status */}
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <h3 className="font-medium">{grievance.subject}</h3>
                          {hasUnread && (
                            <div className="h-2 w-2 rounded-full bg-blue-500 shrink-0" />
                          )}
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge
                          variant="secondary"
                          className={getStatusBadgeColor(grievance.status)}
                        >
                          {t(GRIEVANCE_STATUS_LABELS[grievance.status])}
                        </Badge>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8"
                          onClick={() =>
                            setExpandedId(isExpanded ? null : grievance.id)
                          }
                        >
                          {isExpanded ? (
                            <ChevronUp className="h-4 w-4" />
                          ) : (
                            <ChevronDown className="h-4 w-4" />
                          )}
                        </Button>
                      </div>
                    </div>

                    {/* Basic Info (Always Visible) */}
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <CalendarIcon className="h-4 w-4" />
                        <span>
                          {t("Expected Resolution")}:{" "}
                          {calculateExpectedResolution(
                            grievance.createdAt,
                            grievance.status,
                            grievance.slaTracker
                          )}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Clock className="h-4 w-4" />
                        <span>
                          {t("Raised on")}:{" "}
                          {format(new Date(grievance.createdAt), "dd/MM/yyyy")}
                        </span>
                      </div>
                    </div>

                    {/* Expandable Content */}
                    {isExpanded && (
                      <div className="pt-3 border-t space-y-3 text-sm">
                        <div>
                          <p className="font-medium mb-1">{t("Request Date")}:</p>
                          <p className="text-muted-foreground">
                            {format(
                              new Date(grievance.createdAt),
                              "dd/MM/yyyy"
                            )}
                          </p>
                        </div>

                        <div>
                          <p className="font-medium mb-1">{t("Type of Request")}:</p>
                          <p className="text-muted-foreground">
                            {t(GRIEVANCE_CATEGORY_LABELS[grievance.category])}
                          </p>
                        </div>

                        <div>
                          <p className="font-medium mb-1">{t("Opted Service")}:</p>
                          <p className="text-muted-foreground">
                            {grievance.businessProcess.name}
                          </p>
                        </div>

                        {metadata.email && (
                          <div>
                            <p className="font-medium mb-1">{t("Email Address")}:</p>
                            <p className="text-muted-foreground">
                              {metadata.email}
                            </p>
                          </div>
                        )}

                        <div>
                          <p className="font-medium mb-1">{t("Subject")}:</p>
                          <p className="text-muted-foreground">
                            {grievance.description}
                          </p>
                        </div>
                      </div>
                    )}

                    {/* Chat Button */}
                    {grievance.status === "RESOLVED" ||
                      grievance.status === "CLOSED" ? (
                      <div className="pt-3 border-t">
                        <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <MessageCircle className="h-4 w-4" />
                            <span>
                              {grievance.status === "CLOSED"
                                ? t("Chat is closed")
                                : t("Chat is resolved")}
                            </span>
                          </div>
                          <Link
                            href={createDprmLink(
                              `/cms/principal/dprm/${token}/grievances/${grievance.id}/chat`,
                              searchParams
                            )}
                          >
                            <Button variant="outline" size="sm">
                              {t("View Messages")}
                            </Button>
                          </Link>
                        </div>
                      </div>
                    ) : (
                      <Link
                        href={createDprmLink(
                          `/cms/principal/dprm/${token}/grievances/${grievance.id}/chat`,
                          searchParams
                        )}
                      >
                        <Button
                          variant="link"
                          className="w-full text-blue-600 hover:text-blue-700"
                        >
                          <MessagesSquare className="h-4 w-4 mr-2" />
                          {t("Chat With Support")}
                        </Button>
                      </Link>
                    )}
                  </div>
                </Card>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
}
