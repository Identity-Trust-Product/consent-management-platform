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

import {
  getGrievanceWithMessages,
  markGrievanceSeenByAgent,
  reopenGrievance,
  updateGrievanceStatus,
} from "@/actions/grievances";
import MessageComposer from "@/app/cms/data-fiduciary/grievances/_components/message-composer";
import MessageThread from "@/app/cms/data-fiduciary/grievances/_components/message-thread";
import { StatusBadge } from "@/app/cms/data-fiduciary/grievances/_components/status-badge";
import { ChangeSeverityDialog } from "@/components/grievances/change-severity-dialog";
import { SlaStatusCard } from "@/components/grievances/sla-status-card";
import { FeedbackDisplay } from "@/components/dprm/feedback-display";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { Textarea } from "@/components/ui/textarea";
import { useInfiniteMessages } from "@/hooks/use-infinite-messages";
import { GRIEVANCE_CATEGORY_LABELS } from "@/lib/constants/grievances";
import { useQueryClient } from "@tanstack/react-query";
import {
  AlertTriangle,
  CheckCircle2,
  Loader2,
  RotateCcw,
  XCircle,
} from "lucide-react";
import { Session } from "next-auth";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useCallback, useEffect, useMemo, useState } from "react";
import { toast } from "sonner";

type Ticket = Awaited<
  ReturnType<typeof import("@/actions/grievances").getMyAssignedGrievances>
>["data"][number];

type OptimisticMessage = {
  id: string;
  message: string;
  authorType: "PRINCIPAL" | "FIDUCIARY_AGENT";
  createdAt: Date;
  authorUser: {
    id: string;
    name: string | null;
    email: string | null;
  };
  isOptimistic?: boolean;
};

interface TicketDetailViewProps {
  ticket: Ticket;
  session: Session;
}

export default function TicketDetailView({
  ticket,
  session,
}: TicketDetailViewProps) {
  const router = useRouter();
  const queryClient = useQueryClient();
  const [detailedTicket, setDetailedTicket] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isResolving, setIsResolving] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [showCloseConfirm, setShowCloseConfirm] = useState(false);
  const [statusError, setStatusError] = useState<string | null>(null);
  const [showReopenDialog, setShowReopenDialog] = useState(false);
  const [reopenReason, setReopenReason] = useState("");
  const [isReopening, setIsReopening] = useState(false);
  const [severityDialogOpen, setSeverityDialogOpen] = useState(false);

  // Use infinite query for messages
  const {
    data: messagesData,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading: isLoadingMessages,
  } = useInfiniteMessages({
    grievanceId: ticket.id,
    enabled: true,
  });

  // Flatten all message pages
  const allFetchedMessages = useMemo(() => {
    if (!messagesData?.pages) return [];
    return messagesData.pages.flatMap((page) => page.messages);
  }, [messagesData]);

  // Fetch ticket details (without messages)
  const fetchDetails = useCallback(async () => {
    const result = await getGrievanceWithMessages(ticket.id);
    if (result.success && result.data) {
      setDetailedTicket(result.data);
    }
  }, [ticket.id]);

  // Initial load
  useEffect(() => {
    async function loadInitial() {
      setIsLoading(true);
      await fetchDetails();
      // Mark as seen by agent
      await markGrievanceSeenByAgent(ticket.id);
      setIsLoading(false);
    }
    loadInitial();
  }, [ticket.id, fetchDetails]);

  const handleOptimisticMessage = (message: string) => {
    const tempId = `temp-${Date.now()}`;
    const optimisticMsg: OptimisticMessage = {
      id: tempId,
      message,
      authorType: "FIDUCIARY_AGENT",
      createdAt: new Date(),
      authorUser: {
        id: session.user.id,
        name: session.user.name,
        email: session.user.email,
      },
      isOptimistic: false, // No loading spinner - appears as real message
    };

    // Immediately add to query cache (no loading spinner, instant appearance)
    queryClient.setQueryData(["agent-messages", ticket.id], (old: any) => {
      if (!old?.pages) return old;

      const newPages = [...old.pages];
      // Add to the last page (most recent messages)
      if (newPages.length > 0) {
        const lastPage = { ...newPages[newPages.length - 1] };
        lastPage.messages = [...lastPage.messages, optimisticMsg];
        newPages[newPages.length - 1] = lastPage;
      }

      return {
        ...old,
        pages: newPages,
      };
    });

    // After a short delay, refetch to get the real message from server
    setTimeout(() => {
      queryClient.invalidateQueries({
        queryKey: ["agent-messages", ticket.id],
      });
    }, 500);
  };

  if (isLoading || !detailedTicket) {
    return (
      <div className="flex-1 flex items-center justify-center">
        <div className="text-center">
          <p className="text-muted-foreground">Loading ticket details...</p>
        </div>
      </div>
    );
  }

  const metadata =
    typeof detailedTicket.metadata === "object" &&
      detailedTicket.metadata !== null
      ? (detailedTicket.metadata as Record<string, any>)
      : {};

  // Messages are now directly from the query (includes optimistic updates)
  const allMessages = allFetchedMessages;

  // Handler for marking ticket as resolved
  const handleMarkResolved = async () => {
    setIsResolving(true);
    setStatusError(null);

    const result = await updateGrievanceStatus({
      grievanceId: detailedTicket.id,
      currentStatus: detailedTicket.status,
      newStatus: "RESOLVED" as any,
      reason: "Issue resolved by agent",
    });

    setIsResolving(false);

    if (result.success) {
      // Refetch ticket details to get updated state
      const updatedTicket = await getGrievanceWithMessages(ticket.id);
      if (updatedTicket.success && updatedTicket.data) {
        setDetailedTicket(updatedTicket.data);
      }
      router.refresh();
    } else {
      setStatusError(result.error || "Failed to update status");
    }
  };

  // Handler for closing ticket
  const handleClose = async () => {
    setIsClosing(true);
    setStatusError(null);
    setShowCloseConfirm(false);

    const result = await updateGrievanceStatus({
      grievanceId: detailedTicket.id,
      currentStatus: detailedTicket.status,
      newStatus: "CLOSED" as any,
      reason: "Ticket closed by agent",
    });

    setIsClosing(false);

    if (result.success) {
      // Refetch ticket details to get updated state
      const updatedTicket = await getGrievanceWithMessages(ticket.id);
      if (updatedTicket.success && updatedTicket.data) {
        setDetailedTicket(updatedTicket.data);
      }
      router.refresh();
    } else {
      setStatusError(result.error || "Failed to update status");
    }
  };

  const canMarkResolved =
    detailedTicket.status === "IN_PROGRESS" ||
    detailedTicket.status === "REOPENED";
  const canClose =
    detailedTicket.status === "RESOLVED" ||
    detailedTicket.status === "REOPENED";
  const isClosed = detailedTicket.status === "CLOSED";
  const canReopen =
    detailedTicket.status === "RESOLVED" || detailedTicket.status === "CLOSED";
  const canSendMessages = !isClosed;

  // Handler for reopening ticket
  const handleReopen = async () => {
    if (reopenReason.trim().length < 10) {
      toast.error("Reason must be at least 10 characters");
      return;
    }

    setIsReopening(true);
    setStatusError(null);

    const result = await reopenGrievance({
      grievanceId: detailedTicket.id,
      reason: reopenReason.trim(),
    });

    setIsReopening(false);

    if (result.success) {
      toast.success("Ticket reopened successfully");
      setShowReopenDialog(false);
      setReopenReason("");

      // Refetch ticket details
      const updatedTicket = await getGrievanceWithMessages(ticket.id);
      if (updatedTicket.success && updatedTicket.data) {
        setDetailedTicket(updatedTicket.data);
      }
      router.refresh();
    } else {
      toast.error(result.error || "Failed to reopen ticket");
      setStatusError(result.error || "Failed to reopen ticket");
    }
  };

  return (
    <>
      {/* Top Header with Status */}
      <div className="border-b p-4 bg-background flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div>
            <h1 className="text-xl font-semibold">{detailedTicket.subject}</h1>
            <p className="text-sm text-muted-foreground">
              TKT-{detailedTicket.publicId.slice(0, 8).toUpperCase()} •{" "}
              {metadata.name || "Data Principal"}
            </p>
          </div>
        </div>
        <div className="flex flex-col items-end gap-2">
          <div className="flex items-center gap-2">
            <StatusBadge status={detailedTicket.status} />
            {canMarkResolved && (
              <Button
                size="sm"
                onClick={handleMarkResolved}
                disabled={isResolving}
                className="bg-green-600 hover:bg-green-700"
              >
                {isResolving ? (
                  <>
                    <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                    Resolving...
                  </>
                ) : (
                  <>
                    <CheckCircle2 className="h-4 w-4 mr-2" />
                    Mark as Resolved
                  </>
                )}
              </Button>
            )}
            {canClose && (
              <Button
                size="sm"
                variant="outline"
                onClick={() => setShowCloseConfirm(true)}
                disabled={isClosing}
              >
                {isClosing ? (
                  <>
                    <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                    Closing...
                  </>
                ) : (
                  <>
                    <XCircle className="h-4 w-4 mr-2" />
                    Close Ticket
                  </>
                )}
              </Button>
            )}
          </div>
          {statusError && (
            <p className="text-xs text-destructive">{statusError}</p>
          )}
        </div>
      </div>

      {/* Main Content Area - Resizable Panels */}
      <ResizablePanelGroup direction="horizontal" className="flex-1">
        {/* Center - Message Thread */}
        <ResizablePanel defaultSize={70} minSize={50}>
          <div className="flex h-full flex-col bg-muted/20 p-3">
            <div className="flex-1 overflow-y-auto mb-4">
              <MessageThread
                messages={allMessages}
                currentUserId={session.user.id}
                dataPrincipalName={metadata.name || "Data Principal"}
                onLoadMore={fetchNextPage}
                hasMore={hasNextPage}
                isLoadingMore={isFetchingNextPage}
                onAttachmentDeleted={() => {
                  queryClient.invalidateQueries({
                    queryKey: ["agent-messages", ticket.id],
                  });
                }}
              />
            </div>

            {/* Status Banner at Bottom */}
            {(detailedTicket.status === "RESOLVED" ||
              detailedTicket.status === "CLOSED") && (
                <div
                  className={`mb-4 p-4 rounded-lg border ${detailedTicket.status === "RESOLVED"
                      ? "bg-green-50 dark:bg-green-950 border-green-200 dark:border-green-800"
                      : "bg-gray-100 dark:bg-gray-900 border-gray-200 dark:border-gray-700"
                    }`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`h-10 w-10 rounded-full flex items-center justify-center ${detailedTicket.status === "RESOLVED"
                          ? "bg-green-100 dark:bg-green-900"
                          : "bg-gray-200 dark:bg-gray-800"
                        }`}
                    >
                      {detailedTicket.status === "RESOLVED" ? (
                        <CheckCircle2 className="h-5 w-5 text-green-600 dark:text-green-400" />
                      ) : (
                        <XCircle className="h-5 w-5 text-gray-600 dark:text-gray-400" />
                      )}
                    </div>
                    <div className="flex-1">
                      <p
                        className={`font-semibold ${detailedTicket.status === "RESOLVED"
                            ? "text-green-900 dark:text-green-100"
                            : "text-gray-900 dark:text-gray-100"
                          }`}
                      >
                        {detailedTicket.status === "RESOLVED"
                          ? "Ticket Resolved"
                          : "Ticket Closed"}
                      </p>
                      <p
                        className={`text-sm ${detailedTicket.status === "RESOLVED"
                            ? "text-green-700 dark:text-green-300"
                            : "text-gray-600 dark:text-gray-400"
                          }`}
                      >
                        {detailedTicket.status === "RESOLVED"
                          ? "This ticket has been marked as resolved. You can close it if the issue is fully addressed."
                          : "This ticket has been closed. No further messages can be sent."}
                      </p>
                    </div>
                    {canReopen && (
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setShowReopenDialog(true)}
                        className="shrink-0"
                      >
                        <RotateCcw className="h-4 w-4 mr-2" />
                        Reopen
                      </Button>
                    )}
                  </div>
                </div>
              )}

            {canSendMessages && (
              <div className="border-t pt-4 bg-background p-4 rounded-lg">
                <MessageComposer
                  grievanceId={detailedTicket.id}
                  isDisabled={!canSendMessages}
                  onOptimisticMessage={handleOptimisticMessage}
                  currentUserName={
                    session.user.name || session.user.email || "You"
                  }
                  onMessageSent={() => {
                    queryClient.invalidateQueries({
                      queryKey: ["agent-messages", ticket.id],
                    });
                  }}
                />
              </div>
            )}
          </div>
        </ResizablePanel>

        <ResizableHandle withHandle />

        {/* Right Sidebar - Ticket Information */}
        <ResizablePanel defaultSize={30} minSize={25} maxSize={40}>
          <div className="h-full border-l bg-background overflow-y-auto">
            <div className="p-6">
              <Accordion type="multiple" defaultValue={[]}>
                {/* Ticket Information */}
                <AccordionItem value="ticket-info" className="border-b-0">
                  <AccordionTrigger className="hover:no-underline py-3.5 text-left">
                    <span className="font-semibold">Ticket Information</span>
                  </AccordionTrigger>
                  <AccordionContent className="pb-6">
                    <div className="space-y-3 text-sm">
                      <div>
                        <p className="text-muted-foreground mb-1">Ticket ID</p>
                        <p className="font-medium">
                          TKT-
                          {detailedTicket.publicId.slice(0, 8).toUpperCase()}
                        </p>
                      </div>
                      <div>
                        <p className="text-muted-foreground mb-1">Created</p>
                        <p className="font-medium">
                          {new Date(
                            detailedTicket.createdAt
                          ).toLocaleDateString("en-US", {
                            month: "short",
                            day: "numeric",
                            year: "numeric",
                          })}{" "}
                          -{" "}
                          {new Date(
                            detailedTicket.createdAt
                          ).toLocaleTimeString("en-US", {
                            hour: "numeric",
                            minute: "2-digit",
                            hour12: true,
                          })}
                        </p>
                      </div>
                      <div>
                        <p className="text-muted-foreground mb-1">Category</p>
                        <p className="font-medium">
                          {GRIEVANCE_CATEGORY_LABELS[detailedTicket.category]}
                        </p>
                      </div>
                      <div>
                        <p className="text-muted-foreground mb-1">
                          Description
                        </p>
                        <p className="text-xs leading-relaxed">
                          {detailedTicket.description}
                        </p>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                {/* Data Principal Details */}
                <AccordionItem value="principal-details" className="border-b-0">
                  <AccordionTrigger className="hover:no-underline py-3.5 text-left">
                    <span className="font-semibold">
                      Data Principal Details
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="pb-6">
                    <div className="space-y-3 text-sm">
                      {metadata.name && (
                        <div>
                          <p className="text-muted-foreground mb-1">Name</p>
                          <p className="font-medium">{metadata.name}</p>
                        </div>
                      )}
                      {metadata.email && (
                        <div>
                          <p className="text-muted-foreground mb-1">Email</p>
                          <p className="font-medium text-xs break-all">
                            {metadata.email}
                          </p>
                        </div>
                      )}
                      {metadata.phone && (
                        <div>
                          <p className="text-muted-foreground mb-1">Phone</p>
                          <p className="font-medium">{metadata.phone}</p>
                        </div>
                      )}
                      <div>
                        <p className="text-muted-foreground mb-1">
                          Business Process
                        </p>
                        <p className="font-medium">
                          {detailedTicket.businessProcess.name}
                        </p>
                      </div>
                      <div>
                        <p className="text-muted-foreground mb-1">
                          Data Principal ID
                        </p>
                        <p className="font-mono text-xs break-all">
                          {detailedTicket.dataPrincipalId}
                        </p>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                {/* Consent & Taxonomy Section */}
                {detailedTicket.consentTaxonomy && (
                  <AccordionItem value="consent-taxonomy" className="border-b-0">
                    <AccordionTrigger className="hover:no-underline py-3.5 text-left">
                      <span className="font-semibold">
                        Consent Details
                      </span>
                    </AccordionTrigger>
                    <AccordionContent className="pb-6">
                      <div className="space-y-4 text-sm">
                        {/* Business Process - Clickable Link */}
                        <div className="p-3 bg-gradient-to-br from-primary/5 to-primary/10 rounded-lg border border-primary/20">
                          <div className="flex items-start justify-between gap-2 mb-2">
                            <div className="flex-1 min-w-0">
                              <Link
                                href={`/cms/data-fiduciary/business-processes/${detailedTicket.consentTaxonomy.businessProcess.id}`}
                                className="font-semibold text-primary hover:underline block"
                                target="_blank"
                              >
                                {detailedTicket.consentTaxonomy.businessProcess.name} (v{detailedTicket.consentTaxonomy.businessProcess.version})
                              </Link>
                              <p className="text-xs text-muted-foreground mt-0.5">
                                Business Process
                              </p>
                            </div>
                          </div>
                          <div className="flex gap-2 mt-2">
                            <span className="text-xs px-2 py-1 bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 rounded font-medium">
                              {detailedTicket.consentTaxonomy.activeConsents} Active
                            </span>
                            <span className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded font-medium">
                              {detailedTicket.consentTaxonomy.totalConsents} Total
                            </span>
                          </div>
                        </div>

                        {/* Consent Purposes Tree */}
                        {detailedTicket.consentTaxonomy.consentPurposes.length > 0 ? (
                          <div className="space-y-3">
                            {detailedTicket.consentTaxonomy.consentPurposes.map(
                              (cp: any, cpIndex: number) => (
                                <div key={cp.id} className="relative">
                                  {/* Tree connector line */}
                                  <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-primary/30 to-transparent" />

                                  <div className="pl-4 space-y-2">
                                    {/* Consent Purpose */}
                                    <div className="relative">
                                      <div className="absolute -left-4 top-2 w-3 h-px bg-primary/30" />
                                      <div className="p-2.5 bg-blue-50/50 dark:bg-blue-950/20 rounded border border-blue-200/50 dark:border-blue-800/50">
                                        <Link
                                          href={`/cms/data-fiduciary/consent-purposes/${cp.id}`}
                                          className="font-medium text-sm text-blue-700 dark:text-blue-400 hover:underline block"
                                          target="_blank"
                                        >
                                          {cp.name} (v{cp.version})
                                        </Link>
                                      </div>
                                    </div>

                                    {/* Processing Purposes */}
                                    {cp.processingPurposes.length > 0 && (
                                      <div className="relative pl-4 space-y-2">
                                        <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-purple-300/40 to-transparent" />

                                        {cp.processingPurposes.map((pp: any, ppIndex: number) => (
                                          <div key={pp.id} className="relative">
                                            <div className="absolute -left-4 top-2 w-3 h-px bg-purple-300/40" />
                                            <div className="p-2 bg-purple-50/50 dark:bg-purple-950/20 rounded border border-purple-200/50 dark:border-purple-800/50">
                                              <Link
                                                href={`/cms/data-fiduciary/processing-purposes/${pp.id}`}
                                                className="text-xs font-medium text-purple-700 dark:text-purple-400 hover:underline block"
                                                target="_blank"
                                              >
                                                {pp.name}
                                              </Link>

                                              {/* Consent Status Badges */}
                                              {pp.userConsents && pp.userConsents.length > 0 && (
                                                <div className="flex gap-1 mt-1.5 flex-wrap">
                                                  {pp.userConsents.slice(0, 3).map((consent: any) => (
                                                    <span
                                                      key={consent.id}
                                                      className={`text-xs px-1.5 py-0.5 rounded font-medium ${consent.status === "accepted" && !consent.isExpired
                                                          ? "bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300"
                                                          : "bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400"
                                                        }`}
                                                    >
                                                      {consent.status}
                                                    </span>
                                                  ))}
                                                  {pp.userConsents.length > 3 && (
                                                    <span className="text-xs text-muted-foreground font-medium">
                                                      +{pp.userConsents.length - 3}
                                                    </span>
                                                  )}
                                                </div>
                                              )}

                                              {/* Data Processors */}
                                              {pp.dataProcessors.length > 0 && (
                                                <div className="mt-1.5 flex flex-wrap gap-1">
                                                  {pp.dataProcessors.map((dp: any) => (
                                                    <Link
                                                      key={dp.ouId}
                                                      href={`/cms/data-fiduciary/data-processors/${dp.ouId}`}
                                                      target="_blank"
                                                      className="text-xs px-1.5 py-0.5 bg-orange-50 dark:bg-orange-950 text-orange-700 dark:text-orange-300 rounded border border-orange-200 dark:border-orange-800 hover:bg-orange-100 dark:hover:bg-orange-900 transition-colors"
                                                      title={dp.legalName}
                                                    >
                                                      {dp.brandName}
                                                    </Link>
                                                  ))}
                                                </div>
                                              )}
                                            </div>
                                          </div>
                                        ))}
                                      </div>
                                    )}
                                  </div>
                                </div>
                              )
                            )}
                          </div>
                        ) : (
                          <p className="text-xs text-muted-foreground italic">
                            No consent purposes configured for this business process.
                          </p>
                        )}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                )}

                {/* SLA Status Section */}
                <AccordionItem value="sla-status" className="border-b-0">
                  <AccordionTrigger className="hover:no-underline py-3.5 text-left">
                    <span className="font-semibold">SLA Status</span>
                  </AccordionTrigger>
                  <AccordionContent className="pb-6">
                    <SlaStatusCard
                      slaTracker={detailedTicket.slaTracker || null}
                    />
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setSeverityDialogOpen(true)}
                      disabled={detailedTicket.status === "RESOLVED" || detailedTicket.status === "CLOSED"}
                      className="w-full mt-3"
                    >
                      <AlertTriangle className="h-4 w-4 mr-2" />
                      Change Severity
                    </Button>
                  </AccordionContent>
                </AccordionItem>

                {/* Principal Feedback Section */}
                {detailedTicket.feedback && (
                  <AccordionItem value="feedback" className="border-b-0">
                    <AccordionTrigger className="hover:no-underline py-3.5 text-left">
                      <span className="font-semibold">Principal Feedback</span>
                    </AccordionTrigger>
                    <AccordionContent className="pb-6">
                      <FeedbackDisplay feedback={detailedTicket.feedback} />
                    </AccordionContent>
                  </AccordionItem>
                )}
              </Accordion>
            </div>
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>

      {/* Close Confirmation Dialog */}
      <AlertDialog open={showCloseConfirm} onOpenChange={setShowCloseConfirm}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Close Ticket?</AlertDialogTitle>
            <AlertDialogDescription>
              Are you sure you want to close this ticket? This action will mark
              the ticket as closed and no further messages can be sent.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={handleClose}>
              Close Ticket
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      {/* Reopen Dialog */}
      <AlertDialog open={showReopenDialog} onOpenChange={setShowReopenDialog}>
        <AlertDialogContent className="sm:max-w-[500px]">
          <AlertDialogHeader>
            <AlertDialogTitle>Reopen Ticket</AlertDialogTitle>
            <AlertDialogDescription>
              You are about to reopen: <strong>{detailedTicket.subject}</strong>
            </AlertDialogDescription>
          </AlertDialogHeader>
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="reopen-reason">
                Reason for Reopening <span className="text-destructive">*</span>
              </Label>
              <Textarea
                id="reopen-reason"
                placeholder="Please provide a detailed reason for reopening this ticket..."
                value={reopenReason}
                onChange={(e) => setReopenReason(e.target.value)}
                rows={5}
                className="resize-none"
                disabled={isReopening}
              />
              <p className="text-xs text-muted-foreground">
                {reopenReason.length}/500 characters (minimum 10)
              </p>
            </div>
          </div>
          <AlertDialogFooter>
            <AlertDialogCancel
              onClick={() => {
                setReopenReason("");
                setShowReopenDialog(false);
              }}
              disabled={isReopening}
            >
              Cancel
            </AlertDialogCancel>
            <AlertDialogAction
              onClick={handleReopen}
              disabled={isReopening || reopenReason.trim().length < 10}
            >
              {isReopening && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              Reopen Ticket
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      {/* Change Severity Dialog */}
      <ChangeSeverityDialog
        open={severityDialogOpen}
        onOpenChange={setSeverityDialogOpen}
        grievanceId={ticket.id}
        currentSeverity={ticket.severity}
        onSuccess={() => {
          // Refresh the ticket details after severity change
          fetchDetails();
        }}
      />
    </>
  );
}
