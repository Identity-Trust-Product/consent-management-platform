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

import React, { useEffect, useState, useRef } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import {
  ArrowLeft,
  Calendar as CalendarIcon,
  History,
  LayoutList,
  FileText,
  Download,
  Users,
  Hash,
  X,
  Check,
  Minus,
  ChevronRight,
  ChevronDown,
  ChevronUp,
  Info,
  ShieldCheck,
  AlertCircle,
  Mail,
  Briefcase,
  Loader2,
  Printer,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { toast } from "sonner";

import {
  getConsentHistoryDetail,
  generateArtifactDownloadUrl,
  getReceiptDataForModal,
  getArtifactData,
} from "./actions";
import {
  ConsentHistoryRow,
  TimelineEvent,
  FilterOption,
  TimelineSection,
  ReceiptOption,
} from "./types";
import { ConsentReceipt } from "@/components/consent-receipt/consent-receipt";

// --- FILTER COMPONENTS (Unchanged) ---

const FilterDropdown = ({
  icon: Icon,
  label,
  options,
  selectedValues,
  onChange,
  onClear,
  align = "start",
}: {
  icon?: React.ElementType;
  label: string;
  options: FilterOption[];
  selectedValues: string[];
  onChange: (values: string[]) => void;
  onClear?: () => void;
  align?: "start" | "end";
}) => {
  const [isOpen, setIsOpen] = useState(false);
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

  const isActive = selectedValues.length > 0;

  const handleCheckboxChange = (value: string, e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedValues.includes(value)) {
      onChange(selectedValues.filter((v) => v !== value));
    } else {
      onChange([...selectedValues, value]);
    }
  };

  return (
    <div className="relative inline-block text-left" ref={containerRef}>
      <Button
        variant="outline"
        size="sm"
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "rounded-full h-9 transition-colors flex items-center border",
          isActive || isOpen
            ? "bg-blue-50 border-blue-500 text-blue-700"
            : "bg-white text-gray-600 border-gray-300"
        )}
      >
        {Icon && (
          <Icon
            className={cn(
              "w-3.5 h-3.5 mr-2",
              isActive || isOpen ? "text-blue-500" : "text-gray-500"
            )}
          />
        )}
        {label}
        {isActive && !isOpen && (
          <span className="ml-1.5 bg-blue-100 text-blue-700 text-[10px] font-bold px-1.5 py-0.5 rounded-full">
            {selectedValues.length}
          </span>
        )}
        <ChevronDown
          className={cn(
            "ml-2 w-3 h-3 transition-transform",
            isOpen ? "rotate-180" : ""
          )}
        />
      </Button>

      {isOpen && (
        <div
          className={cn(
            "absolute top-full mt-2 bg-white border border-gray-100 rounded-xl shadow-xl p-2 w-72 z-[100] animate-in fade-in zoom-in-95 duration-100",
            align === "end"
              ? "right-0 origin-top-right"
              : "left-0 origin-top-left"
          )}
        >
          <div className="max-h-60 overflow-y-auto space-y-1 scrollbar-thin scrollbar-thumb-gray-200">
            {options.length === 0 ? (
              <div className="p-3 text-sm text-gray-400 text-center">
                No options available
              </div>
            ) : (
              options.map((opt) => (
                <div
                  key={opt.value}
                  onClick={(e) => handleCheckboxChange(opt.value, e)}
                  className="flex items-start gap-3 p-2.5 hover:bg-gray-50 rounded-lg cursor-pointer transition-colors group"
                >
                  <div className="pt-0.5">
                    <input
                      type="checkbox"
                      className="rounded border-gray-300 text-blue-600 focus:ring-blue-500 cursor-pointer h-4 w-4"
                      checked={selectedValues.includes(opt.value)}
                      readOnly
                    />
                  </div>
                  <div className="flex flex-col min-w-0">
                    <span
                      className={cn(
                        "text-sm font-semibold truncate",
                        selectedValues.includes(opt.value)
                          ? "text-blue-700"
                          : "text-gray-700"
                      )}
                    >
                      {opt.label}
                    </span>
                    {opt.description && (
                      <span className="text-xs text-gray-400 font-mono mt-0.5 group-hover:text-gray-500 truncate block">
                        {opt.description}
                      </span>
                    )}
                  </div>
                </div>
              ))
            )}
          </div>
          {isActive && (
            <div className="mt-2 pt-2 border-t border-gray-100 flex justify-end px-1">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onChange([]);
                  setIsOpen(false);
                }}
                className="text-xs text-red-500 hover:text-red-700 font-medium px-2 py-1 hover:bg-red-50 rounded transition-colors"
              >
                Clear Selection
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

const DateRangeFilter = ({
  startDate,
  endDate,
  onApply,
  onClear,
}: {
  startDate: string | null;
  endDate: string | null;
  onApply: (start: string, end: string) => void;
  onClear: () => void;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [localStart, setLocalStart] = useState(startDate || "");
  const [localEnd, setLocalEnd] = useState(endDate || "");
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

  useEffect(() => {
    setLocalStart(startDate || "");
    setLocalEnd(endDate || "");
  }, [startDate, endDate, isOpen]);

  const isActive = !!startDate || !!endDate;
  const label = isActive
    ? `${format(new Date(startDate!), "MMM dd")} - ${endDate ? format(new Date(endDate), "MMM dd") : "..."}`
    : "Date Range";

  return (
    <div className="relative inline-block text-left" ref={containerRef}>
      <Button
        variant="outline"
        size="sm"
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "rounded-full h-9 transition-colors",
          isActive
            ? "bg-blue-50 border-blue-200 text-blue-700"
            : "bg-white text-gray-600 border-gray-300"
        )}
      >
        <CalendarIcon className="w-3.5 h-3.5 mr-2" />
        {label}
        {isActive && (
          <span
            onClick={(e) => {
              e.stopPropagation();
              onClear();
            }}
            className="ml-2 hover:text-red-500 cursor-pointer"
          >
            <X className="w-3 h-3" />
          </span>
        )}
      </Button>

      {isOpen && (
        <div className="absolute top-full left-0 mt-2 bg-white border border-gray-200 rounded-xl shadow-lg p-4 w-72 z-[100] animate-in fade-in zoom-in-95 duration-100">
          <div className="space-y-3">
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-semibold text-gray-500">
                Start Date
              </label>
              <input
                type="date"
                className="w-full border rounded-md px-2 py-1.5 text-sm"
                value={localStart}
                onChange={(e) => setLocalStart(e.target.value)}
                max={localEnd}
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-semibold text-gray-500">
                End Date
              </label>
              <input
                type="date"
                className="w-full border rounded-md px-2 py-1.5 text-sm"
                value={localEnd}
                onChange={(e) => setLocalEnd(e.target.value)}
                min={localStart}
              />
            </div>
            <div className="pt-2 flex justify-end gap-2">
              <Button
                variant="ghost"
                size="sm"
                className="h-8 text-xs"
                onClick={() => setIsOpen(false)}
              >
                Cancel
              </Button>
              <Button
                size="sm"
                className="h-8 text-xs bg-blue-900 hover:bg-blue-800"
                onClick={() => {
                  if (localStart && localEnd) {
                    onApply(localStart, localEnd);
                    setIsOpen(false);
                  }
                }}
                disabled={!localStart || !localEnd}
              >
                Apply
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// --- REPLACED: ReceiptDropdown imported from components ---
import { ReceiptDropdown } from "@/components/consent-receipt/receipt-dropdown";

// --- TIMELINE DETAILS COMPONENTS (Unchanged) ---

function TimelineDetailPanel({ event }: { event: TimelineEvent }) {
  const getStyles = (type: string) => {
    switch (type) {
      case "GRANTED":
        return {
          bg: "bg-[#ECFDF5]",
          border: "border-green-100",
          text: "text-green-900",
          icon: <Check className="w-5 h-5 text-green-600" />,
          label: "Consent Granted on",
        };
      case "REVOKED":
        return {
          bg: "bg-[#FEF2F2]",
          border: "border-red-100",
          text: "text-red-900",
          icon: <Minus className="w-5 h-5 text-red-600" />,
          label: "Consents Withdrawn on",
        };
      case "UPDATED":
        return {
          bg: "bg-[#FFFBF0]",
          border: "border-[#FDE6C8]",
          text: "text-[#433422]",
          icon: <History className="w-5 h-5 text-[#D97706]" />,
          label: "Consent Updated on",
        };
      default:
        return {
          bg: "bg-gray-50",
          border: "border-gray-200",
          text: "text-gray-800",
          icon: <AlertCircle className="w-5 h-5 text-gray-600" />,
          label: "Event on",
        };
    }
  };

  const styles = getStyles(event.type);
  const essential = event.details.sections.filter((s) => s.isEssential);
  const optional = event.details.sections.filter((s) => !s.isEssential);
  const displaySections =
    essential.length > 0 ? essential : event.details.sections;

  return (
    <div className="flex flex-col h-full bg-[#F9FAFB] font-sans overflow-hidden rounded-t-3xl md:rounded-none border-l border-gray-200">
      <div className={cn("p-6 border-b shrink-0", styles.bg, styles.border)}>
        <div className="flex items-start gap-3">
          <div className="mt-1">{styles.icon}</div>
          <div>
            <h2 className={cn("font-bold text-lg", styles.text)}>
              {styles.label}
            </h2>
            <p className="text-sm text-gray-600 font-medium mt-1">
              {format(new Date(event.date), "dd MMM, yy | h:mm a")}
            </p>
            <p className="text-base font-bold text-gray-900 mt-3">
              For {event.serviceName}
            </p>
          </div>
        </div>
      </div>
      <div className="flex-1 overflow-y-auto p-5 space-y-6">
        <PurposeGroup
          title="Essential Purposes"
          sections={displaySections}
          eventType={event.type}
        />
        {optional.length > 0 && (
          <PurposeGroup
            title="Optional Purposes"
            sections={optional}
            eventType={event.type}
          />
        )}
      </div>
      <div className="p-3 bg-[#F0FDF4] border-t border-green-100 flex justify-center items-center gap-2 shrink-0">
        <ShieldCheck className="w-4 h-4 text-green-700" />
        <span className="text-xs font-semibold text-green-800">
          Your information is safe with us
        </span>
      </div>
    </div>
  );
}

function PurposeGroup({
  title,
  sections,
  eventType,
}: {
  title: string;
  sections: TimelineSection[];
  eventType: string;
}) {
  return (
    <Accordion
      type="single"
      collapsible
      defaultValue="item-1"
      className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden"
    >
      <AccordionItem value="item-1" className="border-0">
        <AccordionTrigger className="px-5 py-4 hover:bg-gray-50 border-b border-gray-100">
          <div className="flex items-center gap-2">
            <span className="font-bold text-sm text-gray-900">{title}</span>
            <span className="text-xs text-gray-400 font-normal">
              will be used for
            </span>
            <Info className="w-3.5 h-3.5 text-gray-300 ml-2" />
          </div>
        </AccordionTrigger>
        <AccordionContent className="px-5 pb-5 pt-5 bg-gray-50/30 space-y-4">
          {sections.map((section, idx) => (
            <div
              key={idx}
              className="border border-gray-200 rounded-xl p-5 bg-white shadow-[0_2px_4px_-2px_rgba(0,0,0,0.05)]"
            >
              <h3 className="font-bold text-sm text-gray-900 mb-3">
                {section.title}
              </h3>
              {eventType === "UPDATED" && section.changes?.summaryText && (
                <div className="bg-[#FFF7ED] border-l-4 border-[#F97316] p-3 mb-4 rounded-r-md">
                  {section.changes.summaryText.map((txt, i) => (
                    <div key={i} className="text-xs font-medium text-[#9A3412]">
                      {txt}
                    </div>
                  ))}
                </div>
              )}
              <p className="text-xs text-gray-500 leading-relaxed mb-5">
                {section.description ||
                  "Processing data to detect, prevent, and investigate fraudulent activities."}
              </p>
              <PurposeAttributes
                attributes={section.attributes}
                eventType={eventType}
              />
            </div>
          ))}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}

function PurposeAttributes({
  attributes,
  eventType,
}: {
  attributes: { name: string; status: string }[];
  eventType: string;
}) {
  const [isOpen, setIsOpen] = useState(true);
  const added = attributes.filter((a) => a.status === "added").length;
  const removed = attributes.filter((a) => a.status === "removed").length;
  const showAdded = eventType === "GRANTED" || eventType === "UPDATED";
  const showRemoved = eventType === "REVOKED" || eventType === "UPDATED";

  return (
    <div className="border-t border-gray-100 pt-3">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between group"
      >
        <div className="flex items-center gap-2">
          <span className="text-xs font-bold text-gray-800">
            Personal Data Used
          </span>
          {added > 0 && showAdded && (
            <span className="px-1.5 py-0.5 rounded text-[10px] font-semibold bg-[#FFF7ED] text-[#C2410C]">
              {String(added).padStart(2, "0")} Added
            </span>
          )}
          {removed > 0 && showRemoved && (
            <span className="px-1.5 py-0.5 rounded text-[10px] font-semibold bg-[#FEF2F2] text-[#B91C1C]">
              {String(removed).padStart(2, "0")} Removed
            </span>
          )}
        </div>
        {isOpen ? (
          <ChevronUp className="w-4 h-4 text-gray-400" />
        ) : (
          <ChevronDown className="w-4 h-4 text-gray-400" />
        )}
      </button>
      {isOpen && (
        <div className="mt-3 flex flex-wrap gap-2">
          {attributes.map((attr, idx) => {
            let pillClass = "bg-[#F3F4F6] text-[#374151] border-[#E5E7EB]";
            if (attr.status === "added")
              pillClass = "bg-[#DCFCE7] text-[#166534] border-[#BBF7D0]";
            if (attr.status === "removed" || eventType === "REVOKED")
              pillClass = "bg-[#FFF7ED] text-[#9A3412] border-[#FED7AA]";
            return (
              <span
                key={idx}
                className={cn(
                  "px-3 py-1.5 rounded-full text-[11px] font-medium border",
                  pillClass
                )}
              >
                {attr.name}
              </span>
            );
          })}
        </div>
      )}
    </div>
  );
}

const TableView = ({ data }: { data: ConsentHistoryRow[] }) => (
  <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
    <table className="w-full text-sm text-left">
      <thead className="bg-gray-50 border-b border-gray-200 text-gray-500 font-medium">
        <tr>
          <th className="p-4">Data Principal</th>
          <th className="p-4">Process</th>
          <th className="p-4">Status</th>
          <th className="p-4">Date</th>
        </tr>
      </thead>
      <tbody className="divide-y divide-gray-100">
        {data.map((row) => (
          <tr
            key={row.consentId}
            className="hover:bg-gray-50/50 transition-colors"
          >
            <td className="p-4 font-medium text-gray-900">
              {row.dataPrincipalId}
            </td>
            <td className="p-4 text-gray-600">{row.purposeOfProcessing}</td>
            <td className="p-4">
              <span
                className={cn(
                  "px-2.5 py-1 rounded-full text-xs font-bold uppercase tracking-wide border",
                  row.status.toLowerCase() === "accepted"
                    ? "bg-green-50 text-green-700 border-green-200"
                    : row.status.toLowerCase() === "revoked"
                      ? "bg-red-50 text-red-700 border-red-200"
                      : "bg-gray-50 text-gray-700 border-gray-200"
                )}
              >
                {row.status}
              </span>
            </td>
            <td className="p-4 text-gray-500">
              {format(new Date(row.consentedAt), "MMM dd, yyyy")}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
    {data.length === 0 && (
      <div className="p-8 text-center text-gray-400 bg-gray-50/30">
        No records found
      </div>
    )}
  </div>
);

// --- MAIN PAGE COMPONENT ---

export default function ConsentDetailPage({ params }) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [view, setView] = useState<"timeline" | "table">("timeline");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedEventId, setSelectedEventId] = useState<string | null>(null);

  // --- Modal State ---
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [receiptLoading, setReceiptLoading] = useState(false);
  const [receiptData, setReceiptData] = useState<any>(null);
  // -------------------

  const [referenceId, setReferenceId] = useState("");
  const [events, setEvents] = useState<TimelineEvent[]>([]);
  const [tableData, setTableData] = useState<ConsentHistoryRow[]>([]);
  const [dropdownOptions, setDropdownOptions] = useState<FilterOption[]>([]);
  const [bpOptions, setBpOptions] = useState<FilterOption[]>([]);
  const [receiptOptions, setReceiptOptions] = useState<ReceiptOption[]>([]);

  useEffect(() => {
    const loadData = async () => {
      const type = searchParams.get("type");
      if (!type) {
        setError("Missing mandatory parameter: type");
        setLoading(false);
        return;
      }

      setLoading(true);
      setError(null);
      try {
        const payload: any = {
          type,
          start_date: searchParams.get("start_date"),
          end_date: searchParams.get("end_date"),
        };
        const dpIds = searchParams.getAll("data_principal_ids[]");
        if (dpIds.length) payload["data_principal_ids[]"] = dpIds;
        const refIds = searchParams.getAll("reference_ids[]");
        if (refIds.length) payload["reference_ids[]"] = refIds;
        const bpIds = searchParams.getAll("business_process_ids[]");
        if (bpIds.length) payload["business_process_ids[]"] = bpIds;

        const res = await getConsentHistoryDetail(params.id, payload);

        setReferenceId(res.referenceId);
        setEvents(res.events);
        setTableData(res.tableData);
        setDropdownOptions(res.dropdownOptions);
        setBpOptions(res.bpOptions);
        setReceiptOptions(res.receiptOptions);

        if (!selectedEventId && res.events.length > 0) {
          const first =
            res.events.find((e) => e.type !== "NOTICE") || res.events[0];
          if (first) setSelectedEventId(first.id);
        }
      } catch (e: any) {
        console.error(e);
        setError(e.message || "Failed to load timeline");
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, [searchParams]);

  const handleMultiSelect = (key: string, values: string[]) => {
    const current = new URLSearchParams(Array.from(searchParams.entries()));
    current.delete(key);
    values.forEach((v) => current.append(key, v));
    router.push(`${window.location.pathname}?${current.toString()}`);
  };

  // --- NEW HANDLER FOR RECEIPT VIEW ---
  const handleViewReceipt = async (opt: ReceiptOption) => {
    setReceiptLoading(true);
    setIsModalOpen(true); // Open modal immediately to show loading state

    try {
      const result = await getReceiptDataForModal(opt);
      if (result.success && result.data) {
        setReceiptData(result.data);
      } else {
        toast.error(result.error || "Could not fetch receipt details");
        setIsModalOpen(false);
      }
    } catch (err) {
      toast.error("Failed to load receipt");
      setIsModalOpen(false);
    } finally {
      setReceiptLoading(false);
    }
  };

  const handleDownloadReceipt = async (opt: ReceiptOption) => {
    const toastId = toast.loading("Preparing artifact for download...");
    try {
      // Fetch specifically the Artifact Data (signed JSON), not the Receipt View Data
      const result = await getArtifactData(opt);

      if (result.success && result.data) {
        // Create a blob from the JSON data
        const jsonString = JSON.stringify(result.data, null, 2);
        const blob = new Blob([jsonString], { type: "application/json" });
        const url = URL.createObjectURL(blob);

        // Trigger download
        const a = document.createElement("a");
        a.href = url;
        a.download = `consent-artifact-${opt.processCode}-${opt.referenceId}.json`;
        document.body.appendChild(a);
        a.click();

        // Cleanup
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
        toast.dismiss(toastId);
        toast.success("Artifact downloaded successfully");
      } else {
        toast.dismiss(toastId);
        toast.error(result.error || "Failed to generate artifact data");
      }
    } catch (e) {
      console.error(e);
      toast.dismiss(toastId);
      toast.error("An unexpected error occurred during download.");
    }
  };

  const selectedEvent = events.find((e) => e.id === selectedEventId);
  const currentType = searchParams.get("type");

  const selectedDpRefValues =
    currentType === "reference_id"
      ? searchParams.getAll("data_principal_ids[]")
      : searchParams.getAll("reference_ids[]");

  const selectedBpValues = searchParams.getAll("business_process_ids[]");

  if (error)
    return (
      <div className="p-10 text-center text-red-600 bg-red-50 rounded-lg m-4">
        {error}
      </div>
    );

  return (
    <div className="min-h-screen bg-[#F8F9FC] p-6 font-sans text-slate-800 print:bg-white print:p-0">
      {/* Main Content - Hidden when printing if modal is open */}
      <div className={cn("flex flex-col", isModalOpen ? "print:hidden" : "")}>
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 relative z-[10]">
          <div className="flex items-center gap-3">
            <button
              onClick={() => router.back()}
              className="p-2 hover:bg-white rounded-full transition-colors border border-transparent hover:border-gray-200 shadow-sm"
            >
              <ArrowLeft className="w-5 h-5 text-gray-600" />
            </button>
            <div>
              <div className="text-xs text-gray-500 font-bold uppercase tracking-wide">
                Consent Timeline
              </div>
              <div className="flex items-center gap-2">
                <span className="text-lg font-bold text-slate-900">
                  {currentType === "reference_id"
                    ? "Reference ID:"
                    : "User ID:"}
                </span>
                <span className="text-lg font-mono text-gray-600">
                  {referenceId}
                </span>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <DateRangeFilter
              startDate={searchParams.get("start_date")}
              endDate={searchParams.get("end_date")}
              onApply={(s, e) => {
                const c = new URLSearchParams(
                  Array.from(searchParams.entries())
                );
                c.set("start_date", s);
                c.set("end_date", e);
                router.push(`${window.location.pathname}?${c.toString()}`);
              }}
              onClear={() => {
                const c = new URLSearchParams(
                  Array.from(searchParams.entries())
                );
                c.delete("start_date");
                c.delete("end_date");
                router.push(`${window.location.pathname}?${c.toString()}`);
              }}
            />

            <FilterDropdown
              icon={currentType === "reference_id" ? Users : Hash}
              label={
                currentType === "reference_id"
                  ? "User IDs"
                  : "Reference IDs"
              }
              options={dropdownOptions}
              selectedValues={selectedDpRefValues}
              onChange={(vals) =>
                handleMultiSelect(
                  currentType === "reference_id"
                    ? "data_principal_ids[]"
                    : "reference_ids[]",
                  vals
                )
              }
              align="start"
            />

            <FilterDropdown
              icon={Briefcase}
              label="Process"
              options={bpOptions}
              selectedValues={selectedBpValues}
              onChange={(vals) =>
                handleMultiSelect("business_process_ids[]", vals)
              }
              align="end"
            />

            {searchParams.toString().replace(`type=${currentType}`, "").length >
              1 && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() =>
                    router.push(`${window.location.pathname}?type=${currentType}`)
                  }
                  className="text-xs text-red-500 hover:bg-red-50"
                >
                  Clear All
                </Button>
              )}
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-6 relative z-[10]">
          <div className="flex bg-white p-1 rounded-lg border border-gray-200 shadow-sm">
            <button
              onClick={() => setView("timeline")}
              className={cn(
                "flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-all",
                view === "timeline"
                  ? "bg-blue-50 text-blue-700 shadow-sm"
                  : "text-gray-600 hover:bg-gray-50"
              )}
            >
              <History className="w-4 h-4" /> Timeline View
            </button>
            <button
              onClick={() => setView("table")}
              className={cn(
                "flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-all",
                view === "table"
                  ? "bg-blue-50 text-blue-700 shadow-sm"
                  : "text-gray-600 hover:bg-gray-50"
              )}
            >
              <LayoutList className="w-4 h-4" /> Table View
            </button>
          </div>
          <div className="flex items-center gap-3">
            {/* View Receipt Dropdown */}
            <ReceiptDropdown
              icon={FileText}
              label="View Consent Receipt"
              options={receiptOptions}
              onView={handleViewReceipt}
              showDownload={false}
            />
            {/* Download Dropdown */}
            <ReceiptDropdown
              icon={Download}
              label="Download JSON"
              options={receiptOptions}
              onDownload={handleDownloadReceipt}
              showDownload={true}
            />
          </div>
        </div>

        {loading ? (
          <div className="h-96 flex items-center justify-center text-gray-400">
            Loading...
          </div>
        ) : view === "table" ? (
          <TableView data={tableData} />
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 h-[calc(100vh-220px)] min-h-[500px] relative z-[0]">
            <div className="lg:col-span-5 xl:col-span-4 overflow-y-auto pr-2 py-2 scrollbar-thin scrollbar-thumb-gray-200">
              {events.length === 0 && (
                <div className="text-center text-gray-400 py-10">
                  No events found
                </div>
              )}
              {events.map((event, idx) => {
                const isSelected = selectedEventId === event.id;
                let Icon = History;
                let styles = {
                  bg: "bg-orange-100",
                  text: "text-orange-600",
                  border: "border-orange-200",
                  badgeBg: "bg-orange-50",
                  badgeText: "text-orange-700",
                };
                let title = "Consent Updated";

                if (event.type === "GRANTED") {
                  Icon = Check;
                  styles = {
                    bg: "bg-green-100",
                    text: "text-green-600",
                    border: "border-green-200",
                    badgeBg: "bg-green-50",
                    badgeText: "text-green-700",
                  };
                  title = "Consent Granted";
                } else if (event.type === "REVOKED") {
                  Icon = Minus;
                  styles = {
                    bg: "bg-red-100",
                    text: "text-red-600",
                    border: "border-red-200",
                    badgeBg: "bg-red-50",
                    badgeText: "text-red-700",
                  };
                  title = "Consents Withdrawn";
                }

                return (
                  <div key={event.id} className="group relative">
                    <div className="text-xs text-gray-500 mb-3 ml-[68px] font-medium">
                      {format(new Date(event.date), "dd MMM, yyyy")} |{" "}
                      {format(new Date(event.date), "h:mm a")}
                    </div>
                    <div className="flex relative">
                      {idx !== events.length - 1 && (
                        <div className="absolute left-[29px] top-[40px] h-[calc(100%+30px)] w-px bg-gray-200 z-0"></div>
                      )}
                      <div className="w-[60px] flex-shrink-0 flex justify-center relative z-10">
                        <div
                          className={cn(
                            "w-10 h-10 rounded-full border-2 bg-white flex items-center justify-center shadow-sm",
                            styles.border
                          )}
                        >
                          <Icon className={cn("w-5 h-5", styles.text)} />
                        </div>
                      </div>
                      <div
                        className="flex-1 pl-2 pb-8"
                        onClick={() => setSelectedEventId(event.id)}
                      >
                        <div
                          className={cn(
                            "bg-white p-5 rounded-2xl border cursor-pointer transition-all flex justify-between items-center group-hover:shadow-md",
                            isSelected
                              ? "border-blue-400 shadow-md ring-1 ring-blue-100"
                              : "border-gray-200 hover:border-gray-300"
                          )}
                        >
                          <div>
                            <div className="text-sm text-gray-600 font-medium">
                              {title} for
                            </div>
                            <div className="text-base font-bold text-gray-900 mt-1">
                              {event.serviceName}
                            </div>
                          </div>
                          <div className="flex items-center gap-4">
                            <span
                              className={cn(
                                "px-2.5 py-1 text-xs font-extrabold rounded-md",
                                styles.badgeBg,
                                styles.badgeText
                              )}
                            >
                              {String(event.count || 1).padStart(2, "0")}
                            </span>
                            <ChevronRight className="w-5 h-5 text-gray-300" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="lg:col-span-7 xl:col-span-8 h-full bg-white rounded-3xl border border-gray-200 shadow-sm overflow-hidden">
              {selectedEvent ? (
                <TimelineDetailPanel event={selectedEvent} />
              ) : (
                <div className="h-full flex flex-col items-center justify-center text-gray-400 gap-4">
                  <FileText className="w-12 h-12 opacity-20" />
                  <p>Select an event from the timeline to view details</p>
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      {/* --- CONSENT RECEIPT MODAL --- */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="min-w-3xl  h-[90vh] p-0 overflow-hidden flex flex-col bg-gray-50 print:h-auto print:w-full print:max-w-none print:overflow-visible print:shadow-none print:border-none">
          <DialogHeader className="px-6 py-4 bg-white border-b border-gray-200 flex-shrink-0 print:hidden">
            <DialogTitle>Consent Receipt</DialogTitle>
          </DialogHeader>

          <div className="flex-1 overflow-y-auto p-6 print:p-0 print:overflow-visible">
            {receiptLoading ? (
              <div className="h-full flex flex-col items-center justify-center space-y-4">
                <Loader2 className="w-10 h-10 text-blue-600 animate-spin" />
                <p className="text-gray-500 font-medium">
                  Generating Receipt...
                </p>
              </div>
            ) : receiptData ? (
              <div className="bg-white shadow-sm rounded-lg print:shadow-none">
                <ConsentReceipt data={receiptData} />
              </div>
            ) : (
              <div className="text-center text-gray-500 mt-20">
                Unable to load receipt data.
              </div>
            )}
          </div>

          <div className="p-4 bg-white border-t border-gray-200 flex justify-end gap-2 flex-shrink-0 print:hidden">
            <Button variant="outline" onClick={() => setIsModalOpen(false)}>
              Close
            </Button>
            <Button
              onClick={() => window.print()}
              className="flex items-center gap-2"
            >
              <Printer className="w-4 h-4" /> Print Receipt
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
