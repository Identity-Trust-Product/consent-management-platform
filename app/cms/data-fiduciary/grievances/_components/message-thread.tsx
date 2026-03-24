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

import { deleteAttachment, getAttachmentUrl } from "@/actions/grievances";
import { AttachmentCard } from "@/components/dprm/attachment-card";
import { AttachmentPreviewDialog } from "@/components/dprm/attachment-preview-dialog";
import {
  TimelineEvent,
  TimelineEventData,
} from "@/components/dprm/timeline-event";
import { Button } from "@/components/ui/button";
import { format } from "date-fns";
import { Loader2 } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { toast } from "sonner";

type Message = {
  id: string | number;
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
  attachments?: Array<{
    id: number;
    fileName: string;
    fileSize: number;
    mimeType: string;
  }>;
  isOptimistic?: boolean;
};

interface MessageThreadProps {
  messages: Message[];
  currentUserId: string;
  dataPrincipalName?: string;
  onLoadMore?: () => void;
  hasMore?: boolean;
  isLoadingMore?: boolean;
  onAttachmentDeleted?: () => void;
}

export default function MessageThread({
  messages,
  currentUserId,
  dataPrincipalName = "Data Principal",
  onLoadMore,
  hasMore = false,
  isLoadingMore = false,
  onAttachmentDeleted,
}: MessageThreadProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [shouldAutoScroll, setShouldAutoScroll] = useState(true);
  const [isUserScrolling, setIsUserScrolling] = useState(false);
  const [hasInitiallyScrolled, setHasInitiallyScrolled] = useState(false);
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const lastMessageCountRef = useRef(messages.length);

  // Preview dialog state
  const [previewAttachment, setPreviewAttachment] = useState<{
    id: number;
    fileName: string;
    fileSize: number;
    mimeType: string;
    url?: string;
  } | null>(null);
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  // Handle attachment preview
  const handlePreviewAttachment = async (
    attachmentId: number,
    fileName: string,
    fileSize: number,
    mimeType: string
  ) => {
    try {
      const result = await getAttachmentUrl(attachmentId);

      if (result.success && result.data) {
        setPreviewAttachment({
          id: attachmentId,
          fileName,
          fileSize,
          mimeType,
          url: result.data.url,
        });
        setIsPreviewOpen(true);
      } else {
        toast.error(result.error || "Failed to get preview URL");
      }
    } catch (error) {
      console.error("Preview error:", error);
      toast.error("Failed to preview file");
    }
  };

  // Handle attachment download
  const handleDownloadAttachment = async (
    attachmentId: number,
    fileName: string
  ) => {
    try {
      const result = await getAttachmentUrl(attachmentId);

      if (result.success && result.data) {
        window.open(result.data.url, "_blank");
      } else {
        toast.error(result.error || "Failed to get download URL");
      }
    } catch (error) {
      console.error("Download error:", error);
      toast.error("Failed to download file");
    }
  };

  // Initial scroll to bottom on mount
  useEffect(() => {
    if (!hasInitiallyScrolled && messages.length > 0 && scrollRef.current) {
      // Use setTimeout to ensure DOM is fully rendered
      setTimeout(() => {
        if (scrollRef.current) {
          scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
          setHasInitiallyScrolled(true);
        }
      }, 0);
    }
  }, [messages.length, hasInitiallyScrolled]);

  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = scrollRef.current;
      const isNearBottom = scrollHeight - scrollTop - clientHeight < 150;
      setShouldAutoScroll(isNearBottom);

      // Detect user scrolling
      setIsUserScrolling(true);
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
      scrollTimeoutRef.current = setTimeout(() => {
        setIsUserScrolling(false);
      }, 150);

      // Load more when scrolling near the top
      if (scrollTop < 300 && hasMore && !isLoadingMore && onLoadMore) {
        const currentScrollHeight = scrollRef.current.scrollHeight;
        onLoadMore();

        // After loading, maintain scroll position
        requestAnimationFrame(() => {
          if (scrollRef.current) {
            const newScrollHeight = scrollRef.current.scrollHeight;
            scrollRef.current.scrollTop =
              newScrollHeight - currentScrollHeight + scrollTop;
          }
        });
      }
    }
  };

  // Auto-scroll for new messages (only if user is near bottom)
  useEffect(() => {
    // Skip if we haven't done initial scroll yet
    if (!hasInitiallyScrolled) return;

    if (shouldAutoScroll && !isUserScrolling && scrollRef.current) {
      // Only scroll if messages were added (not when loading more from top)
      if (messages.length > lastMessageCountRef.current) {
        scrollRef.current.scrollTo({
          top: scrollRef.current.scrollHeight,
          behavior: "smooth",
        });
      }
    }
    lastMessageCountRef.current = messages.length;
  }, [messages, shouldAutoScroll, isUserScrolling, hasInitiallyScrolled]);

  // Convert system messages to timeline events and combine with user messages
  type CombinedItem =
    | { type: "message"; data: Message }
    | { type: "timeline"; data: TimelineEventData };

  const combinedItems: CombinedItem[] = [
    // Add user messages
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
            name: msg.authorUser.name || msg.authorUser.email || "System",
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
  ].sort((a, b) => {
    const dateA = new Date(a.data.createdAt);
    const dateB = new Date(b.data.createdAt);
    return dateA.getTime() - dateB.getTime();
  });

  if (combinedItems.length === 0) {
    return (
      <div className="flex items-center justify-center h-full text-muted-foreground">
        <p>No messages yet. Start the conversation.</p>
      </div>
    );
  }

  return (
    <div
      ref={scrollRef}
      onScroll={handleScroll}
      className="space-y-4 overflow-y-auto h-full"
    >
      {/* Load More Button at Top */}
      {hasMore && (
        <div className="flex justify-center py-2">
          <Button
            variant="ghost"
            size="sm"
            onClick={onLoadMore}
            disabled={isLoadingMore}
          >
            {isLoadingMore ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Loading...
              </>
            ) : (
              "Load older messages"
            )}
          </Button>
        </div>
      )}

      {combinedItems.map((item, index) => {
        if (item.type === "timeline") {
          return (
            <TimelineEvent
              key={item.data.id}
              event={item.data}
              viewerType="agent"
            />
          );
        }

        const message = item.data;

        // Skip if this is a system message (already converted to timeline)
        if (message.messageType === "SYSTEM_EVENT" || !message.message) {
          return null;
        }

        const isAgent = message.authorType === "FIDUCIARY_AGENT";
        const isCurrentUser =
          isAgent && message.authorUser?.id === currentUserId;

        // Get display name
        let displayName: string;
        if (isAgent) {
          if (isCurrentUser) {
            displayName = "You";
          } else {
            displayName =
              message.authorUser?.name || message.authorUser?.email || "Agent";
          }
        } else {
          displayName = dataPrincipalName;
        }

        return (
          <div
            key={message.id}
            className={`flex ${isAgent ? "justify-end" : "justify-start"
              } px-2 sm:px-0`}
          >
            <div
              className={`max-w-[90%] sm:max-w-[85%] md:max-w-[75%] lg:max-w-[70%] rounded-lg p-3 sm:p-4 ${isAgent
                  ? "bg-blue-100/70 dark:bg-blue-950/70 backdrop-blur-sm text-blue-900 dark:text-blue-100 border border-blue-200/50 dark:border-blue-800/50"
                  : "bg-muted/80 backdrop-blur-sm text-foreground border border-border/50"
                } ${message.isOptimistic ? "opacity-70" : ""}`}
            >
              <div className="flex items-center gap-2 mb-1.5 sm:mb-2">
                <span className="text-[11px] sm:text-xs font-medium">
                  {displayName}
                </span>
                {message.isOptimistic ? (
                  <Loader2 className="h-3 w-3 animate-spin text-muted-foreground" />
                ) : (
                  <span className="text-[10px] sm:text-xs text-muted-foreground">
                    {format(new Date(message.createdAt), "HH:mm")}
                  </span>
                )}
              </div>
              <p className="text-xs sm:text-sm whitespace-pre-wrap leading-relaxed break-words">
                {message.message}
              </p>

              {/* Render attachments */}
              {message.attachments && message.attachments.length > 0 && (
                <div className="mt-2 sm:mt-3 space-y-1.5 sm:space-y-2">
                  {message.attachments.map((attachment) => (
                    <AttachmentCard
                      key={attachment.id}
                      attachment={attachment}
                      compact
                      variant={isAgent ? "agent" : "default"}
                      onPreview={() =>
                        handlePreviewAttachment(
                          attachment.id,
                          attachment.fileName,
                          attachment.fileSize,
                          attachment.mimeType
                        )
                      }
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
            </div>
          </div>
        );
      })}

      {/* Preview Dialog */}
      <AttachmentPreviewDialog
        open={isPreviewOpen}
        onOpenChange={setIsPreviewOpen}
        attachment={previewAttachment}
        onDownload={
          previewAttachment
            ? () =>
              handleDownloadAttachment(
                previewAttachment.id,
                previewAttachment.fileName
              )
            : undefined
        }
      />
    </div>
  );
}
