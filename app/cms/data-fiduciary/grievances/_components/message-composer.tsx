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

import { addGrievanceMessage, uploadGrievanceAttachment, getAttachmentUrl, deleteAttachment } from "@/actions/grievances";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { FileUploadInput } from "@/components/dprm/file-upload-input";
import { MESSAGE_VALIDATION } from "@/lib/constants/grievances";
import { Loader2, Send } from "lucide-react";
import { useState, useTransition, useRef } from "react";
import { toast } from "sonner";

interface MessageComposerProps {
  grievanceId: number;
  isDisabled?: boolean;
  onOptimisticMessage?: (message: string) => void;
  currentUserName: string;
  onMessageSent?: () => void;
}

export default function MessageComposer({
  grievanceId,
  isDisabled = false,
  onOptimisticMessage,
  currentUserName,
  onMessageSent,
}: MessageComposerProps) {
  const [message, setMessage] = useState("");
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [isUploadingFiles, setIsUploadingFiles] = useState(false);
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState<string | null>(null);
  const [fileInputKey, setFileInputKey] = useState(0); // Key to reset FileUploadInput
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleFilesSelected = (files: File[]) => {
    setSelectedFiles(files);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    // Allow sending files without message
    if (!message.trim() && selectedFiles.length === 0) {
      setError("Please enter a message or attach a file");
      return;
    }

    if (message.length > MESSAGE_VALIDATION.MAX_LENGTH) {
      setError(
        `Message must be less than ${MESSAGE_VALIDATION.MAX_LENGTH} characters`
      );
      return;
    }

    const messageToSend = message.trim() || "(File attachment)";
    const filesToUpload = [...selectedFiles];

    // Optimistic update - add message immediately
    if (onOptimisticMessage) {
      onOptimisticMessage(messageToSend);
    }

    startTransition(async () => {
      // Clear and refocus before async operation
      setMessage("");
      setSelectedFiles([]);
      setFileInputKey(prev => prev + 1);

      // Force immediate focus
      if (textareaRef.current) {
        textareaRef.current.focus();
      }

      const result = await addGrievanceMessage({
        grievanceId,
        message: messageToSend,
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
                messageId
              );

              if (!uploadResult.success) {
                toast.error(`Failed to upload ${file.name}: ${uploadResult.error}`);
              }
            }
          } catch (uploadError) {
            console.error("File upload error:", uploadError);
            toast.error("Some files failed to upload");
          } finally {
            setIsUploadingFiles(false);
          }
        }

        // Notify parent to refresh
        if (onMessageSent) {
          onMessageSent();
        }
      } else {
        setError(result.error || "Failed to send message");
        // Restore message and files on error
        setMessage(messageToSend);
        setSelectedFiles(filesToUpload);
      }
    });
  };

  const characterCount = message.length;
  const isOverLimit = characterCount > MESSAGE_VALIDATION.MAX_LENGTH;
  const isSending = isPending || isUploadingFiles;

  return (
    <form onSubmit={handleSubmit} className="space-y-2">
      {error && (
        <div className="text-sm text-destructive bg-destructive/10 p-2 rounded">
          {error}
        </div>
      )}

      {/* File Upload Input */}
      <FileUploadInput
        key={fileInputKey}
        onFilesSelected={handleFilesSelected}
        disabled={isDisabled || isSending}
      />

      <div className="relative">
        <Textarea
          ref={textareaRef}
          value={message}
          onChange={(e) => {
            setMessage(e.target.value);
            setError(null);
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter" && !e.shiftKey) {
              e.preventDefault();
              if (!isDisabled && !isSending && (message.trim() || selectedFiles.length > 0) && !isOverLimit) {
                handleSubmit(e);
              }
            }
          }}
          placeholder="Type your message here..."
          className="min-h-[100px] resize-none pr-20"
          maxLength={MESSAGE_VALIDATION.MAX_LENGTH + 100}
          autoFocus
        />
        <div
          className={`absolute bottom-2 right-2 text-xs ${isOverLimit ? "text-destructive" : "text-muted-foreground"
            }`}
        >
          {characterCount} / {MESSAGE_VALIDATION.MAX_LENGTH}
        </div>
      </div>
      <div className="flex justify-end">
        <Button
          type="submit"
          disabled={isDisabled || isSending || (!message.trim() && selectedFiles.length === 0) || isOverLimit}
          size="sm"
        >
          {isSending ? (
            <>
              <Loader2 className="h-4 w-4 mr-2 animate-spin" />
              {isUploadingFiles ? "Uploading..." : "Sending..."}
            </>
          ) : (
            <>
              <Send className="h-4 w-4 mr-2" />
              Send Message
            </>
          )}
        </Button>
      </div>
    </form>
  );
}