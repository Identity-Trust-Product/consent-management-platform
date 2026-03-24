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

import { Button } from "@/components/ui/button";
import { FILE_UPLOAD_CONFIG } from "@/lib/schemas/file-upload";
import { Paperclip, Upload, X } from "lucide-react";
import { useRef, useState } from "react";
import { AttachmentCard } from "./attachment-card";

interface FileUploadInputProps {
  onFilesSelected: (files: File[]) => void;
  maxFiles?: number;
  maxSizeMB?: number;
  accept?: string;
  disabled?: boolean;
  showPreview?: boolean;
  enableDragDrop?: boolean;
}

export function FileUploadInput({
  onFilesSelected,
  maxFiles = FILE_UPLOAD_CONFIG.MAX_FILES_PER_MESSAGE,
  maxSizeMB = FILE_UPLOAD_CONFIG.MAX_FILE_SIZE / 1024 / 1024,
  accept,
  disabled = false,
  showPreview = true,
  enableDragDrop = false,
}: FileUploadInputProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState(false);

  const acceptTypes = accept || FILE_UPLOAD_CONFIG.ALLOWED_MIME_TYPES.join(",");

  const validateAndAddFiles = (files: File[]) => {
    setError(null);

    if (files.length === 0) return;

    // Validate number of files
    if (files.length + selectedFiles.length > maxFiles) {
      setError(`Maximum ${maxFiles} files allowed`);
      return;
    }

    // Validate each file
    const validFiles: File[] = [];
    for (const file of files) {
      // Check size
      if (file.size > maxSizeMB * 1024 * 1024) {
        setError(`${file.name} exceeds ${maxSizeMB}MB limit`);
        continue;
      }

      // Check type
      if (!FILE_UPLOAD_CONFIG.ALLOWED_MIME_TYPES.includes(file.type as any)) {
        setError(`${file.name} has an unsupported file type`);
        continue;
      }

      validFiles.push(file);
    }

    if (validFiles.length > 0) {
      const newFiles = [...selectedFiles, ...validFiles];
      setSelectedFiles(newFiles);
      onFilesSelected(newFiles);
    }

    // Reset input
    if (inputRef.current) {
      inputRef.current.value = "";
    }
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files || []);
    validateAndAddFiles(files);
  };

  const handleDragEnter = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (!disabled && selectedFiles.length < maxFiles) {
      setIsDragging(true);
    }
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);

    if (disabled || selectedFiles.length >= maxFiles) return;

    const files = Array.from(e.dataTransfer.files);
    validateAndAddFiles(files);
  };

  const handleRemoveFile = (index: number) => {
    const newFiles = selectedFiles.filter((_, i) => i !== index);
    setSelectedFiles(newFiles);
    onFilesSelected(newFiles);
    setError(null);
  };

  const handleButtonClick = () => {
    inputRef.current?.click();
  };

  return (
    <div className="space-y-3">
      <input
        ref={inputRef}
        type="file"
        multiple
        accept={acceptTypes}
        onChange={handleFileChange}
        disabled={disabled || selectedFiles.length >= maxFiles}
        className="hidden"
      />

      {enableDragDrop ? (
        /* Drag and Drop Area */
        <div
          onDragEnter={handleDragEnter}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          onClick={handleButtonClick}
          className={`
            relative border-2 border-dashed rounded-lg p-6 sm:p-8
            transition-all duration-200 cursor-pointer
            ${isDragging
              ? "border-primary bg-primary/5 scale-[1.02]"
              : "border-border hover:border-primary/50 hover:bg-accent/50"
            }
            ${disabled || selectedFiles.length >= maxFiles
              ? "opacity-50 cursor-not-allowed"
              : ""
            }
          `}
        >
          <div className="flex flex-col items-center justify-center gap-2 text-center">
            <div
              className={`
              p-3 rounded-full transition-colors
              ${isDragging
                  ? "bg-primary/10 text-primary"
                  : "bg-muted text-muted-foreground"
                }
            `}
            >
              <Upload className="h-6 w-6" />
            </div>

            <div className="space-y-1">
              <p className="text-sm font-medium">
                {isDragging ? (
                  <span className="text-primary">Drop files here</span>
                ) : (
                  <>
                    <span className="text-primary">Click to upload</span>
                    <span className="text-muted-foreground">
                      {" "}
                      or drag and drop
                    </span>
                  </>
                )}
              </p>
              <p className="text-xs text-muted-foreground">
                Max {maxSizeMB}MB per file • Up to {maxFiles} files
              </p>
              <p className="text-xs text-muted-foreground">
                Images, PDFs, Word, Excel, text files
              </p>
            </div>

            {selectedFiles.length > 0 && (
              <div className="mt-2">
                <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-primary/10 text-primary">
                  {selectedFiles.length} / {maxFiles} files selected
                </span>
              </div>
            )}
          </div>
        </div>
      ) : (
        /* Simple Button for Chat */
        <Button
          type="button"
          variant="outline"
          size="sm"
          onClick={handleButtonClick}
          disabled={disabled || selectedFiles.length >= maxFiles}
          className="w-full sm:w-auto"
        >
          <Paperclip className="h-4 w-4 mr-2" />
          Attach File
          {selectedFiles.length > 0 && ` (${selectedFiles.length}/${maxFiles})`}
        </Button>
      )}

      {error && (
        <div className="rounded-md bg-destructive/10 border border-destructive/20 p-3">
          <p className="text-sm text-destructive">{error}</p>
        </div>
      )}

      {showPreview && selectedFiles.length > 0 && (
        <div className="space-y-2">
          <p className="text-sm font-medium">Selected Files:</p>
          {selectedFiles.map((file, index) => (
            <div key={index} className="flex items-center gap-2">
              <AttachmentCard
                compact
                attachment={{
                  id: index,
                  fileName: file.name,
                  fileSize: file.size,
                  mimeType: file.type,
                }}
                showActions={false}
              />
              <Button
                type="button"
                size="icon"
                variant="ghost"
                className="h-6 w-6 flex-shrink-0 hover:bg-destructive/10 hover:text-destructive"
                onClick={() => handleRemoveFile(index)}
                disabled={disabled}
                title="Remove file"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
