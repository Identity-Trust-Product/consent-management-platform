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
  addPrincipalMessage,
  getAttachmentUrl,
  markGrievanceSeenByPrincipal,
  uploadGrievanceAttachment,
} from "@/actions/grievances";
import { AttachmentCard } from "@/components/dprm/attachment-card";
import { FileUploadInput } from "@/components/dprm/file-upload-input";
import { GrievanceFeedbackForm } from "@/components/dprm/grievance-feedback-form";
import {
  TimelineEvent,
  TimelineEventData,
} from "@/components/dprm/timeline-event";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useInfiniteMessages } from "@/hooks/use-infinite-messages";
import {
  MESSAGE_AUTHOR_LABELS,
  MESSAGE_VALIDATION,
} from "@/lib/constants/grievances";
import { useQueryClient } from "@tanstack/react-query";
import { format } from "date-fns";
import {
  ArrowLeft,
  CheckCircle2,
  Loader2,
  RotateCcw,
  XCircle,
} from "lucide-react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect, useMemo, useRef, useState } from "react";
import { toast } from "sonner";
import { ReopenPrincipalDialog } from "./reopen-principal-dialog";
import { DprmPageHeader } from "@/components/dprm/dprm-page-header";
import { createDprmLink } from "@/lib/dprm-utils";
import { useNoticeTranslation } from "@/hooks/use-notice-translation";

interface Message {
  id: number;
  message: string | null;
  messageType?: "USER_MESSAGE" | "SYSTEM_EVENT";
  eventType?: string | null;
  eventDetails?: any;
  authorType: "PRINCIPAL" | "FIDUCIARY_AGENT" | "SYSTEM";
  createdAt: Date;
  authorUser?: {
    id: string;
    name: string | null;
    email: string | null;
  } | null;
  isOptimistic?: boolean;
  attachments?: Array<{
    id: number;
    fileName: string;
    fileSize: number;
    mimeType: string;
  }>;
}

type CombinedItem =
  | { type: "message"; data: Message }
  | { type: "timeline"; data: TimelineEventData };

interface PrincipalChatClientProps {
  grievance: {
    id: number;
    subject: string;
    status: string;
    feedback?: any;
    messages: Message[];
    slaTracker?: {
      expectedResolutionAt: Date;
    } | null;
  };
  accessToken: string;
  dataPrincipalName: string;
}

export default function PrincipalChatClient({
  grievance,
  accessToken,
  dataPrincipalName,
}: PrincipalChatClientProps) {
  const { t } = useNoticeTranslation("dprm");
  const queryClient = useQueryClient();
  const searchParams = useSearchParams();
  const [message, setMessage] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [shouldAutoScroll, setShouldAutoScroll] = useState(true);
  const messagesContainerRef = useRef<HTMLDivElement>(null);
  const [reopenDialogOpen, setReopenDialogOpen] = useState(false);
  const loadMoreTriggerRef = useRef<HTMLDivElement>(null);
  const [feedbackFormOpen, setFeedbackFormOpen] = useState(false);

  // Track if user has dismissed feedback (use state to trigger re-render of banner)
  const [feedbackDismissed, setFeedbackDismissed] = useState(false);

  // Also use ref to persist across component re-renders from polling
  const feedbackDismissedRef = useRef(false);

  // File upload state
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [isUploadingFiles, setIsUploadingFiles] = useState(false);

  // Use infinite query for messages
  const {
    data: messagesData,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading: isLoadingMessages,
  } = useInfiniteMessages({
    grievanceId: grievance.id,
    token: accessToken,
    isPrincipal: true,
    enabled: true,
  });

  // Flatten all message pages - messages come directly from query cache (includes optimistic)
  const messages = useMemo(() => {
    if (!messagesData?.pages) return [];
    return messagesData.pages.flatMap((page) => page.messages);
  }, [messagesData]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  // Check if user is near bottom of scroll
  const handleScroll = () => {
    if (messagesContainerRef.current) {
      const { scrollTop, scrollHeight, clientHeight } =
        messagesContainerRef.current;
      const isNearBottom = scrollHeight - scrollTop - clientHeight < 100;
      setShouldAutoScroll(isNearBottom);
    }
  };

  // Mark as seen by principal when chat opens
  useEffect(() => {
    scrollToBottom();
    markGrievanceSeenByPrincipal(accessToken, grievance.id);
  }, [accessToken, grievance.id]);

  // Auto-show feedback form when grievance becomes RESOLVED or CLOSED (and no feedback yet)
  useEffect(() => {
    const shouldShowFeedback =
      (grievance.status === "RESOLVED" || grievance.status === "CLOSED") &&
      !grievance.feedback &&
      !feedbackDismissedRef.current; // Don't auto-show if user dismissed it

    if (shouldShowFeedback && !feedbackFormOpen) {
      // Delay to let the status banner render first
      const timer = setTimeout(() => {
        setFeedbackFormOpen(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [grievance.status, grievance.feedback, feedbackFormOpen]);

  // Auto-scroll when new messages arrive (only if user is near bottom)
  useEffect(() => {
    if (shouldAutoScroll) {
      scrollToBottom();
    }
  }, [messages, shouldAutoScroll]);

  // Infinite scroll: Load more messages when scrolling to top
  useEffect(() => {
    const trigger = loadMoreTriggerRef.current;
    const container = messagesContainerRef.current;

    if (!trigger || !container) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;

        // Only trigger if we have more pages and not already fetching
        if (entry.isIntersecting && hasNextPage && !isFetchingNextPage) {
          const currentScrollHeight = container.scrollHeight;
          const currentScrollTop = container.scrollTop;

          fetchNextPage().then(() => {
            // Maintain scroll position after loading
            requestAnimationFrame(() => {
              if (container) {
                const newScrollHeight = container.scrollHeight;
                container.scrollTop =
                  newScrollHeight - currentScrollHeight + currentScrollTop;
              }
            });
          });
        }
      },
      {
        root: container,
        rootMargin: "100px", // Start loading 100px before reaching the top
        threshold: 0,
      }
    );

    observer.observe(trigger);

    return () => {
      observer.disconnect();
    };
  }, [hasNextPage, isFetchingNextPage, fetchNextPage]);

  // Removed polling - React Query handles auto-refetch
  // No need for separate fetchMessages function

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    // Allow sending files without message
    if (!message.trim() && selectedFiles.length === 0) {
      setError(t("Please enter a message or attach a file"));
      return;
    }

    if (message.length > MESSAGE_VALIDATION.MAX_LENGTH) {
      setError(
        t("Message must be less than {{count}} characters", {
          count: MESSAGE_VALIDATION.MAX_LENGTH,
        })
      );
      return;
    }

    const messageText = message.trim() || t("(File attachment)");
    const filesToUpload = [...selectedFiles];

    setMessage("");
    setSelectedFiles([]);
    setIsSending(true);

    // Create optimistic message with temp ID
    const tempId = `temp-${Date.now()}`;
    const optimisticMessage: Message = {
      id: tempId as any,
      message: messageText,
      authorType: "PRINCIPAL",
      createdAt: new Date(),
      isOptimistic: false, // Don't show as optimistic (no loading spinner)
    };

    // Immediately add to query cache for instant UI update
    queryClient.setQueryData(
      ["principal-messages", grievance.id, accessToken],
      (old: any) => {
        if (!old?.pages) return old;

        const newPages = [...old.pages];
        // Add to the last page (most recent messages)
        if (newPages.length > 0) {
          const lastPage = { ...newPages[newPages.length - 1] };
          lastPage.messages = [...lastPage.messages, optimisticMessage];
          newPages[newPages.length - 1] = lastPage;
        }

        return {
          ...old,
          pages: newPages,
        };
      }
    );

    try {
      const result = await addPrincipalMessage(accessToken, {
        grievanceId: grievance.id,
        message: messageText,
      });

      if (result.success && result.data) {
        const messageId = result.data.id;

        // Upload files if any
        if (filesToUpload.length > 0) {
          setIsUploadingFiles(true);
          try {
            for (const file of filesToUpload) {
              // Pass file directly - FormData doesn't serialize well in Next.js server actions
              const uploadResult = await uploadGrievanceAttachment(
                file,
                messageId,
                accessToken
              );

              if (!uploadResult.success) {
                toast.error(
                  t("Failed to upload {{fileName}}: {{error}}", {
                    fileName: file.name,
                    error: uploadResult.error,
                  })
                );
              }
            }
          } catch (uploadError) {
            console.error("File upload error:", uploadError);
            toast.error(t("Some files failed to upload"));
          } finally {
            setIsUploadingFiles(false);
          }
        }

        // Success - refetch to get real message from server with attachments
        setTimeout(() => {
          queryClient.invalidateQueries({
            queryKey: ["principal-messages", grievance.id, accessToken],
          });
        }, 500);
      } else {
        // Error - remove optimistic message and show error
        queryClient.setQueryData(
          ["principal-messages", grievance.id, accessToken],
          (old: any) => {
            if (!old?.pages) return old;

            const newPages = old.pages.map((page: any) => ({
              ...page,
              messages: page.messages.filter((m: any) => m.id !== tempId),
            }));

            return {
              ...old,
              pages: newPages,
            };
          }
        );
        setError(result.error || t("Failed to send message"));
        setMessage(messageText);
      }
    } catch (err) {
      // Error - remove optimistic message
      queryClient.setQueryData(
        ["principal-messages", grievance.id, accessToken],
        (old: any) => {
          if (!old?.pages) return old;

          const newPages = old.pages.map((page: any) => ({
            ...page,
            messages: page.messages.filter((m: any) => m.id !== tempId),
          }));

          return {
            ...old,
            pages: newPages,
          };
        }
      );
      setError(t("Failed to send message"));
      setMessage(messageText);
    } finally {
      setIsSending(false);
    }
  };

  // Handle attachment download
  const handleDownloadAttachment = async (
    attachmentId: number,
    fileName: string
  ) => {
    try {
      const result = await getAttachmentUrl(attachmentId, accessToken);

      if (result.success && result.data) {
        // Open in new tab for download
        window.open(result.data.url, "_blank");
      } else {
        toast.error(result.error || t("Failed to get download URL"));
      }
    } catch (error) {
      console.error("Download error:", error);
      toast.error(t("Failed to download file"));
    }
  };

  const isResolved = grievance.status === "RESOLVED";
  const isClosed = grievance.status === "CLOSED";
  const canSendMessages = !isResolved && !isClosed;
  const canReopen = isResolved || isClosed;

  return (
    <div className="flex flex-col h-screen bg-white">
      <DprmPageHeader
        title={t("Support")}
        backHref={createDprmLink(
          `/cms/principal/dprm/${accessToken}/grievances`,
          searchParams
        )}
        action={
          canReopen ? (
            <Button
              variant="outline"
              size="sm"
              onClick={() => setReopenDialogOpen(true)}
            >
              <RotateCcw className="h-4 w-4 mr-2" />
              {t("Reopen")}
            </Button>
          ) : undefined
        }
      />

      {/* Messages */}
      <div
        ref={messagesContainerRef}
        onScroll={handleScroll}
        className="flex-1 overflow-y-auto p-4 space-y-4"
      >
        {/* Invisible trigger for infinite scroll */}
        {hasNextPage && <div ref={loadMoreTriggerRef} className="h-1" />}

        {/* Loading indicator */}
        {isFetchingNextPage && (
          <div className="flex justify-center py-2">
            <Loader2 className="h-4 w-4 animate-spin text-muted-foreground" />
          </div>
        )}

        {/* Fallback load more button */}
        {hasNextPage && !isFetchingNextPage && (
          <div className="flex justify-center py-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => {
                const currentScrollHeight =
                  messagesContainerRef.current?.scrollHeight || 0;
                const currentScrollTop =
                  messagesContainerRef.current?.scrollTop || 0;

                fetchNextPage();

                // Maintain scroll position after loading
                requestAnimationFrame(() => {
                  if (messagesContainerRef.current) {
                    const newScrollHeight =
                      messagesContainerRef.current.scrollHeight;
                    messagesContainerRef.current.scrollTop =
                      newScrollHeight - currentScrollHeight + currentScrollTop;
                  }
                });
              }}
            >
              {t("Load older messages")}
            </Button>
          </div>
        )}

        {!hasNextPage && messages.length > 20 && (
          <div className="flex justify-center py-4">
            <div className="text-sm text-muted-foreground">
              {t("No more messages")}
            </div>
          </div>
        )}

        {/* Chat started timestamp */}
        <div className="text-center py-4">
          <p className="text-sm text-muted-foreground">{t("Chat started")}</p>
          <p className="text-sm text-muted-foreground">
            {format(
              new Date(messages[0]?.createdAt || new Date()),
              "dd/MM/yyyy, h:mm:ss a"
            )}
          </p>
        </div>

        {/* Combined messages and timeline events */}
        {(() => {
          // Combine messages and timeline events
          const combinedItems: CombinedItem[] = [
            // Add user messages (filter out system messages)
            ...messages
              .filter((msg) => msg.messageType !== "SYSTEM_EVENT")
              .map((msg) => ({ type: "message" as const, data: msg })),
            // Convert system messages to timeline events
            ...messages
              .filter((msg) => msg.messageType === "SYSTEM_EVENT")
              .map((msg) => {
                // Extract performer info from message's authorUser or eventDetails
                const performedBy = msg.authorUser
                  ? {
                    id: msg.authorUser.id,
                    name:
                      msg.authorUser.name || msg.authorUser.email || "System",
                  }
                  : null;

                return {
                  type: "timeline" as const,
                  data: {
                    id: String(msg.id),
                    type: "audit",
                    action: msg.eventType || "UNKNOWN",
                    details: msg.eventDetails || {},
                    createdAt: msg.createdAt,
                    performedBy,
                  } as TimelineEventData,
                };
              }),
          ];

          // Sort by timestamp
          combinedItems.sort((a, b) => {
            const timeA =
              a.type === "message" ? a.data.createdAt : a.data.createdAt;
            const timeB =
              b.type === "message" ? b.data.createdAt : b.data.createdAt;
            return new Date(timeA).getTime() - new Date(timeB).getTime();
          });

          return combinedItems.map((item, index) => {
            if (item.type === "timeline") {
              return (
                <TimelineEvent
                  key={`timeline-${item.data.id}`}
                  event={item.data}
                  viewerType="principal"
                />
              );
            }

            const msg = item.data;

            // Skip if no message content (system message that wasn't filtered)
            if (!msg.message) {
              return null;
            }

            const isFromPrincipal = msg.authorType === "PRINCIPAL";
            const senderName = isFromPrincipal
              ? t("You")
              : msg.authorUser?.name ||
              msg.authorUser?.email ||
              MESSAGE_AUTHOR_LABELS.FIDUCIARY_AGENT;

            return (
              <div
                key={`message-${msg.id}`}
                className={`flex ${isFromPrincipal ? "justify-end" : "justify-start"
                  } px-2 sm:px-0`}
              >
                <div
                  className={`max-w-[90%] sm:max-w-[85%] md:max-w-[80%] rounded-2xl px-3 sm:px-4 py-2.5 sm:py-3 ${isFromPrincipal
                      ? "bg-blue-500/90 backdrop-blur-sm text-white shadow-sm"
                      : "bg-gray-100/90 dark:bg-gray-800/90 backdrop-blur-sm text-gray-900 dark:text-gray-100 shadow-sm"
                    } ${msg.isOptimistic ? "opacity-60" : ""}`}
                >
                  <div className="flex items-center gap-2 mb-1">
                    <span
                      className={`text-[11px] sm:text-xs font-semibold ${isFromPrincipal
                          ? "text-blue-100"
                          : "text-gray-700 dark:text-gray-300"
                        }`}
                    >
                      {senderName}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm whitespace-pre-wrap wrap-break-word">
                    {msg.message}
                  </p>

                  {/* Render attachments */}
                  {msg.attachments && msg.attachments.length > 0 && (
                    <div className="mt-2 sm:mt-3 space-y-1.5 sm:space-y-2">
                      {msg.attachments.map((attachment) => (
                        <AttachmentCard
                          key={attachment.id}
                          attachment={attachment}
                          compact
                          variant={isFromPrincipal ? "principal" : "default"}
                          onDownload={() =>
                            handleDownloadAttachment(
                              attachment.id,
                              attachment.fileName
                            )
                          }
                        />
                      ))}
                    </div>
                  )}

                  <div className="flex items-center justify-end gap-2 mt-1.5 sm:mt-2">
                    {msg.isOptimistic && (
                      <Loader2 className="h-3 w-3 animate-spin" />
                    )}
                    <p
                      className={`text-[10px] sm:text-xs ${isFromPrincipal
                          ? "text-blue-100"
                          : "text-gray-500 dark:text-gray-400"
                        }`}
                    >
                      {format(new Date(msg.createdAt), "h:mm a")}
                    </p>
                  </div>
                </div>
              </div>
            );
          });
        })()}
        <div ref={messagesEndRef} />
      </div>

      {/* Status Banner (if resolved or closed) */}
      {(isResolved || isClosed) && (
        <div
          className={`mx-4 mb-4 p-4 rounded-lg border ${isClosed
              ? "bg-gray-100 border-gray-300"
              : "bg-green-50 border-green-200"
            }`}
        >
          <div className="flex items-center gap-3">
            <div
              className={`h-10 w-10 rounded-full flex items-center justify-center ${isClosed ? "bg-gray-200" : "bg-green-100"
                }`}
            >
              {isClosed ? (
                <XCircle className="h-5 w-5 text-gray-600" />
              ) : (
                <CheckCircle2 className="h-5 w-5 text-green-600" />
              )}
            </div>
            <div className="flex-1">
              <p
                className={`font-semibold ${isClosed ? "text-gray-900" : "text-green-900"
                  }`}
              >
                {isClosed ? t("Request Closed") : t("Request Resolved")}
              </p>
              <p
                className={`text-sm ${isClosed ? "text-gray-600" : "text-green-700"
                  }`}
              >
                {isClosed
                  ? t("This request has been closed. No further messages can be sent.")
                  : t("Your request has been resolved. The support team will close it soon.")}
              </p>
              {/* Show feedback button if feedback not submitted and not dismissed */}
              {!grievance.feedback &&
                !feedbackDismissed &&
                !feedbackDismissedRef.current && (
                  <button
                    onClick={() => setFeedbackFormOpen(true)}
                    className="mt-2 text-sm font-medium text-blue-600 hover:text-blue-700 underline"
                  >
                    {t("Share your feedback")}
                  </button>
                )}
              {grievance.feedback && (
                <p className="mt-1 text-xs text-gray-500">
                  {t("✓ Thank you for your feedback!")}
                </p>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Input Area */}
      <div className="border-t bg-white p-4">
        {error && (
          <div className="mb-2 text-sm text-red-600 bg-red-50 p-2 rounded">
            {error}
          </div>
        )}
        {canSendMessages ? (
          <form onSubmit={handleSendMessage} className="space-y-3">
            <Textarea
              value={message}
              onChange={(e) => {
                setMessage(e.target.value);
                setError(null);
              }}
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault();
                  if (
                    message.trim() &&
                    message.length <= MESSAGE_VALIDATION.MAX_LENGTH
                  ) {
                    handleSendMessage(e);
                  }
                }
              }}
              placeholder={t("Enter your message here")}
              className="min-h-20 resize-none"
              maxLength={MESSAGE_VALIDATION.MAX_LENGTH + 100}
              disabled={isSending || isUploadingFiles}
            />

            {/* File Upload */}
            <FileUploadInput
              onFilesSelected={setSelectedFiles}
              disabled={isSending || isUploadingFiles}
            />

            <div className="flex items-center justify-end gap-2">
              <Button
                type="submit"
                className="flex-1 bg-blue-600 hover:bg-blue-700"
                disabled={
                  (!message.trim() && selectedFiles.length === 0) ||
                  isSending ||
                  isUploadingFiles
                }
              >
                {isSending || isUploadingFiles ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    {isUploadingFiles ? t("Uploading...") : t("Sending...")}
                  </>
                ) : (
                  t("Send Reply")
                )}
              </Button>
            </div>
          </form>
        ) : (
          <div className="text-center py-4 text-muted-foreground">
            <p className="text-sm">
              {isClosed
                ? t("This request is closed. You cannot send messages.")
                : t("This request is resolved. You cannot send messages.")}
            </p>
          </div>
        )}
      </div>

      {/* Reopen Dialog */}
      <ReopenPrincipalDialog
        open={reopenDialogOpen}
        onOpenChange={setReopenDialogOpen}
        grievanceId={grievance.id}
        grievanceSubject={grievance.subject}
        accessToken={accessToken}
      />

      {/* Feedback Form */}
      <GrievanceFeedbackForm
        open={feedbackFormOpen}
        onOpenChange={(open) => {
          setFeedbackFormOpen(open);
          // If user closes without submitting, mark as dismissed
          if (!open && !grievance.feedback) {
            feedbackDismissedRef.current = true;
            setFeedbackDismissed(true);
          }
          // Refetch grievance data after feedback submission to update the banner
          if (!open) {
            queryClient.invalidateQueries({
              queryKey: ["principal-grievance", grievance.id, accessToken],
            });
          }
        }}
        grievanceId={grievance.id}
        token={accessToken}
        context="conversation"
      />
    </div>
  );
}
