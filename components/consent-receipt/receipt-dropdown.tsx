"use client";

import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Loader2, ChevronRight, FileText } from "lucide-react";

export interface ReceiptOption {
  referenceId: string;
  dataPrincipalId: string;
  processCode: string;
  version: number;
  lastUpdated: string;
}

interface ReceiptDropdownProps {
  icon?: React.ElementType;
  label: string;
  options: ReceiptOption[];
  onView?: (opt: ReceiptOption) => void;
  onDownload?: (opt: ReceiptOption) => void; // Optional download handler
  showDownload?: boolean; // Control visibility of download action
}

export function ReceiptDropdown({
  icon: Icon = FileText,
  label,
  options,
  onView,
  onDownload,
  showDownload = true,
}: ReceiptDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleView = (opt: ReceiptOption) => {
    if (onView) {
      setIsOpen(false);
      onView(opt);
    }
  };

  const handleDownload = async (opt: ReceiptOption) => {
    if (onDownload) {
      setIsProcessing(true);
      try {
        await onDownload(opt);
      } finally {
        setIsProcessing(false);
        setIsOpen(false);
      }
    }
  };

  return (
    <div className="relative" ref={containerRef}>
      <Button
        variant="outline"
        onClick={() => setIsOpen(!isOpen)}
        disabled={isProcessing}
        className={cn(
          "bg-white text-blue-600 border-blue-200 hover:bg-blue-50 flex items-center gap-2 transition-all",
          isOpen && "ring-2 ring-blue-100"
        )}
      >
        {isProcessing ? (
          <Loader2 className="w-4 h-4 animate-spin" />
        ) : (
          <Icon className="w-4 h-4" />
        )}
        {label}
      </Button>

      {isOpen && (
        <div className="absolute right-0 top-full mt-2 w-[400px] bg-white border border-gray-200 rounded-xl shadow-2xl z-[100] animate-in fade-in zoom-in-95 duration-100 p-2">
          <div className="max-h-[400px] overflow-y-auto space-y-2 scrollbar-thin scrollbar-thumb-gray-200">
            {options.length === 0 ? (
              <div className="p-4 text-center text-gray-400 text-sm">
                No receipts available
              </div>
            ) : (
              options.map((opt, idx) => (
                <div
                  key={idx}
                  onClick={() => {
                    if (onView) handleView(opt);
                    else if (onDownload && showDownload) handleDownload(opt);
                  }}
                  className={cn(
                    "p-4 bg-gray-50/50 hover:bg-blue-50/50 rounded-lg border border-transparent hover:border-blue-200 transition-all group",
                    (onView || (onDownload && showDownload)) ? "cursor-pointer" : ""
                  )}
                >
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-semibold text-gray-900 w-32 shrink-0">
                        Process Code:
                      </span>
                      <span className="text-sm font-medium text-gray-500 font-mono">
                        {opt.processCode}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-semibold text-gray-900 w-32 shrink-0">
                        Version:
                      </span>
                      <span className="text-sm font-medium text-gray-500 font-mono">
                        {opt.version}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-semibold text-gray-900 w-32 shrink-0">
                        Data Principal ID:
                      </span>
                      <span
                        className="text-sm font-medium text-gray-500 font-mono truncate"
                        title={opt.dataPrincipalId}
                      >
                        {opt.dataPrincipalId}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-semibold text-gray-900 w-32 shrink-0">
                        Reference ID:
                      </span>
                      <span
                        className="text-sm font-medium text-gray-500 font-mono truncate"
                        title={opt.referenceId}
                      >
                        {opt.referenceId}
                      </span>
                    </div>
                  </div>

                  <div className="mt-3 pt-3 border-t border-gray-200/60 flex justify-end gap-3 opacity-0 group-hover:opacity-100 transition-opacity">
                   {/* Download Action */}
                   {showDownload && onDownload && (
                      <button 
                        onClick={(e) => {
                          e.stopPropagation();
                          handleDownload(opt);
                        }}
                        className="text-xs font-bold text-gray-600 hover:text-blue-600 flex items-center gap-1 transition-colors"
                      >
                        Download JSON
                      </button>
                    )}

                    {/* View Action */}
                    {onView && (
                      <button 
                        onClick={(e) => {
                          e.stopPropagation();
                          handleView(opt);
                        }}
                        className="text-xs font-bold text-blue-600 hover:text-blue-700 flex items-center gap-1 transition-colors"
                      >
                        View Receipt <ChevronRight className="w-3 h-3" />
                      </button>
                    )}
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      )}
    </div>
  );
}
