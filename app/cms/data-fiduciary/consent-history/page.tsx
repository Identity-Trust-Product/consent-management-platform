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

import React, { useState, useEffect } from "react";
import {
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Eye,
  Filter,
  Calendar,
  Copy,
} from "lucide-react";
import { ConsentFilters, ConsentTableRow } from "./types";
import {
  getBusinessProcessOptions,
  getConsents,
  getNoticeStatusOptions,
} from "./consent-actions";
import { generateDprmLink } from "@/actions/dprm";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";

// Reusable copy cell component
function CopyCell({ value, label }: { value: string | null | undefined; label: string }) {
  const handleCopy = async (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!value) return;
    try {
      await navigator.clipboard.writeText(value);
      toast.success(`${label} copied to clipboard!`);
    } catch (error) {
      console.error(`Error copying ${label}:`, error);
      toast.error(`Failed to copy ${label}`);
    }
  };

  if (!value) {
    return <span className="text-gray-400">-</span>;
  }

  return (
    <div className="flex items-center gap-1">
      <span className="truncate">{value}</span>
      <button
        onClick={handleCopy}
        className="p-1 text-muted-foreground hover:text-foreground shrink-0 opacity-60 hover:opacity-100 transition-opacity"
        title={`Copy ${label}`}
      >
        <Copy className="h-3 w-3" />
      </button>
    </div>
  );
}

// Notice status style helper
const getNoticeStatusStyle = (status: string | null | undefined) => {
  const s = status?.toLowerCase();
  switch (s) {
    case "completed":
      return "bg-green-100 text-green-700 border-green-200";
    case "pending":
      return "bg-yellow-100 text-yellow-700 border-yellow-200";
    case "sent":
      return "bg-blue-100 text-blue-700 border-blue-200";
    case "failed":
      return "bg-red-100 text-red-700 border-red-200";
    case "expired":
      return "bg-orange-100 text-orange-700 border-orange-200";
    case "acknowledged":
      return "bg-purple-100 text-purple-700 border-purple-200";
    case "delivered":
      return "bg-teal-100 text-teal-700 border-teal-200";
    default:
      return "bg-gray-100 text-gray-700 border-gray-200";
  }
};

// Consent status style helper
const getConsentStatusStyle = (status: string | null | undefined) => {
  const s = status?.toLowerCase();
  switch (s) {
    case "accepted":
      return "bg-blue-100 text-blue-700 border-blue-200";
    case "revoked":
      return "bg-red-100 text-red-700 border-red-200";
    case "expired":
      return "bg-orange-100 text-orange-700 border-orange-200";
    case "reconsented":
      return "bg-green-100 text-green-700 border-green-200";
    default:
      return "bg-gray-100 text-gray-700 border-gray-200";
  }
};

export default function ConsentHistoryPage() {
  // --- State Management ---
  const [view, setView] = useState<"search" | "table">("search");
  const [loading, setLoading] = useState(false);

  // UI State
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  // Filter State
  const [searchType, setSearchType] = useState<
    "reference_id" | "data_principal_id"
  >("reference_id");
  const [searchQuery, setSearchQuery] = useState("");
  const [dateRange, setDateRange] = useState<{ start: string; end: string }>({
    start: "",
    end: "",
  });
  const [selectedBP, setSelectedBP] = useState<string[]>([]);
  const [selectedStatus, setSelectedStatus] = useState<string[]>([]);
  const [selectedNoticeStatus, setSelectedNoticeStatus] = useState<string[]>(
    []
  );

  // Data State
  const [bpOptions, setBpOptions] = useState<{ name: string; code: string }[]>(
    []
  );
  const [noticeStatusOptions, setNoticeStatusOptions] = useState<string[]>([]);
  const [consents, setConsents] = useState<ConsentTableRow[]>([]);
  const [pagination, setPagination] = useState({
    page: 1,
    pageSize: 10,
    total: 0,
    totalPages: 0,
  });

  // Load filter options on mount
  useEffect(() => {
    const loadOptions = async () => {
      try {
        const [bpData, noticeData] = await Promise.all([
          getBusinessProcessOptions(),
          getNoticeStatusOptions(),
        ]);
        setBpOptions(bpData);
        setNoticeStatusOptions(noticeData);
      } catch (error) {
        console.error("Failed to load filter options:", error);
      }
    };
    loadOptions();
  }, []);

  // --- Handlers ---
  const handleCopyDPRM = async (dataPrincipalId: string) => {
    try {
      const result = await generateDprmLink(dataPrincipalId);
      if (result.success && result.url) {
        await navigator.clipboard.writeText(result.url);
        toast.success("DPRM link copied to clipboard!");
      } else {
        toast.error(result.error || "Failed to generate DPRM link");
      }
    } catch (error) {
      console.error("Error copying DPRM link:", error);
      toast.error("Failed to copy DPRM link");
    }
  };

  const handleSearch = async (page = 1) => {
    setLoading(true);
    setActiveDropdown(null);

    const filters: ConsentFilters = {
      searchType,
      searchQuery,
      startDate: dateRange.start,
      endDate: dateRange.end,
      businessProcessIds: selectedBP,
      page,
      pageSize: pagination.pageSize,
      status: selectedStatus,
      noticeStatus: selectedNoticeStatus,
    };

    try {
      const res = await getConsents(filters);
      setConsents(res.data);
      setPagination((prev) => ({
        ...prev,
        page,
        total: res.total,
        totalPages: res.totalPages,
      }));
      setView("table");
    } catch (error) {
      console.error("Search failed", error);
      toast.error("Search failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const clearFilters = () => {
    setSearchQuery("");
    setDateRange({ start: "", end: "" });
    setSelectedBP([]);
    setSelectedStatus([]);
    setSelectedNoticeStatus([]);
    setActiveDropdown(null);
  };

  const toggleDropdown = (name: string) => {
    setActiveDropdown((prev) => (prev === name ? null : name));
  };

  // Count active filters
  const activeFilterCount =
    (dateRange.start ? 1 : 0) +
    (selectedBP.length > 0 ? 1 : 0) +
    (selectedStatus.length > 0 ? 1 : 0) +
    (selectedNoticeStatus.length > 0 ? 1 : 0);

  // --- Sub-Components ---
  const FilterButton = ({
    label,
    name,
    active,
    count,
    onClick,
  }: {
    label: string;
    name: string;
    active?: boolean;
    count?: number;
    onClick: () => void;
  }) => (
    <button
      onClick={(e) => {
        e.stopPropagation();
        onClick();
      }}
      className={`flex items-center gap-2 px-4 py-2 border rounded-full text-sm font-medium transition-colors select-none whitespace-nowrap
        ${active || activeDropdown === name
          ? "bg-blue-50 border-blue-500 text-blue-700"
          : "bg-white border-gray-300 text-gray-700 hover:bg-gray-50"
        }`}
    >
      {label}
      {count !== undefined && count > 0 && (
        <span className="bg-blue-600 text-white text-xs px-1.5 py-0.5 rounded-full min-w-[20px] text-center">
          {count}
        </span>
      )}
      <ChevronDown
        size={16}
        className={`transition-transform ${activeDropdown === name ? "rotate-180" : ""}`}
      />
    </button>
  );

  return (
    <div
      className=" font-sans text-slate-800"
      onClick={() => setActiveDropdown(null)}
    >
      <div className="h-full">
        {view === "search" ? (
          // --- SEARCH VIEW (Centered Card) ---
          <div className="max-w-4xl mx-auto mt-10">
            <div
              className="bg-white rounded-2xl shadow-sm border border-gray-200 p-10"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="text-center mb-10">
                <h2 className="text-3xl font-bold text-slate-800 mb-3">
                  Welcome to Consent History
                </h2>
                <p className="text-gray-500">
                  Search and filter your consent records below
                </p>
              </div>

              {/* Primary Search Bar */}
              <div className="flex gap-0 mb-3 shadow-sm">
                <div className="relative">
                  <select
                    value={searchType}
                    onChange={(e) => setSearchType(e.target.value as any)}
                    className="h-12 pl-4 pr-10 border border-r-0 border-gray-300 rounded-l-lg bg-gray-50 text-blue-900 font-medium focus:outline-none focus:ring-1 focus:ring-blue-500 appearance-none cursor-pointer"
                  >
                    <option value="reference_id">Reference ID</option>
                    <option value="data_principal_id">User ID</option>
                  </select>
                  <ChevronDown
                    className="absolute right-3 top-4 text-blue-900 pointer-events-none"
                    size={16}
                  />
                </div>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Enter IDs separated by commas..."
                  className="flex-1 h-12 px-4 border border-gray-300 rounded-r-lg focus:outline-none focus:ring-1 focus:ring-blue-500 text-gray-700 placeholder-gray-400"
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      handleSearch(1);
                    }
                  }}
                />
              </div>
              <p className="text-xs text-gray-400 mb-8 ml-1">
                Tip: You can search for multiple records by separating IDs with
                a comma.
              </p>

              {/* Advanced Filters */}
              <div className="mb-8">
                <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-4">
                  Filters
                </div>
                <div className="flex flex-wrap gap-3 relative">
                  {/* Date Filter */}
                  <div className="relative">
                    <FilterButton
                      label="Date Range"
                      name="date"
                      active={!!dateRange.start || !!dateRange.end}
                      onClick={() => toggleDropdown("date")}
                    />
                    {activeDropdown === "date" && (
                      <div className="absolute top-full left-0 mt-2 bg-white shadow-xl rounded-xl p-4 border border-gray-100 z-50 w-72 animate-in fade-in zoom-in-95 duration-100">
                        <div className="text-sm font-semibold mb-3 text-slate-800">
                          Select Date Range
                        </div>
                        <div className="space-y-3">
                          <div>
                            <label className="text-xs font-medium text-gray-500 mb-1 block">
                              Start Date
                            </label>
                            <input
                              type="date"
                              className="w-full border border-gray-200 bg-gray-50 p-2 rounded-md text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
                              value={dateRange.start}
                              onChange={(e) =>
                                setDateRange((prev) => ({
                                  ...prev,
                                  start: e.target.value,
                                }))
                              }
                            />
                          </div>
                          <div>
                            <label className="text-xs font-medium text-gray-500 mb-1 block">
                              End Date
                            </label>
                            <input
                              type="date"
                              className="w-full border border-gray-200 bg-gray-50 p-2 rounded-md text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
                              value={dateRange.end}
                              onChange={(e) =>
                                setDateRange((prev) => ({
                                  ...prev,
                                  end: e.target.value,
                                }))
                              }
                            />
                          </div>
                        </div>
                        <div className="mt-3 pt-3 border-t border-gray-100 flex justify-end">
                          <button
                            onClick={() => setDateRange({ start: "", end: "" })}
                            className="text-xs text-gray-500 hover:text-gray-700"
                          >
                            Clear
                          </button>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* BP Filter */}
                  <div className="relative">
                    <FilterButton
                      label="Process"
                      name="bp"
                      active={selectedBP.length > 0}
                      count={selectedBP.length}
                      onClick={() => toggleDropdown("bp")}
                    />
                    {activeDropdown === "bp" && (
                      <div className="absolute top-full left-0 mt-2 bg-white shadow-xl rounded-xl p-2 border border-gray-100 z-50 w-80 max-h-80 overflow-y-auto animate-in fade-in zoom-in-95 duration-100">
                        {bpOptions.length > 0 ? (
                          <>
                            {bpOptions.map((bp) => (
                              <label
                                key={bp.code}
                                className="flex items-start gap-3 p-2.5 hover:bg-blue-50 rounded-lg cursor-pointer transition-colors"
                              >
                                <input
                                  type="checkbox"
                                  checked={selectedBP.includes(bp.code)}
                                  onChange={(e) => {
                                    if (e.target.checked)
                                      setSelectedBP([...selectedBP, bp.code]);
                                    else
                                      setSelectedBP(
                                        selectedBP.filter(
                                          (code) => code !== bp.code
                                        )
                                      );
                                  }}
                                  className="mt-0.5 rounded text-blue-600 border-gray-300 focus:ring-blue-500"
                                />
                                <div className="flex flex-col">
                                  <span className="text-sm font-medium text-gray-700">
                                    {bp.name}
                                  </span>
                                  <span className="text-xs text-gray-400">
                                    {bp.code}
                                  </span>
                                </div>
                              </label>
                            ))}
                            {selectedBP.length > 0 && (
                              <div className="mt-2 pt-2 border-t border-gray-100 flex justify-end px-2">
                                <button
                                  onClick={() => setSelectedBP([])}
                                  className="text-xs text-gray-500 hover:text-gray-700"
                                >
                                  Clear all
                                </button>
                              </div>
                            )}
                          </>
                        ) : (
                          <div className="p-4 text-sm text-gray-500 text-center">
                            No processes found
                          </div>
                        )}
                      </div>
                    )}
                  </div>

                  {/* Notice Status Filter */}
                  <div className="relative">
                    <FilterButton
                      label="Notice Status"
                      name="noticeStatus"
                      active={selectedNoticeStatus.length > 0}
                      count={selectedNoticeStatus.length}
                      onClick={() => toggleDropdown("noticeStatus")}
                    />
                    {activeDropdown === "noticeStatus" && (
                      <div className="absolute top-full left-0 mt-2 bg-white shadow-xl rounded-xl p-2 border border-gray-100 z-50 w-56 max-h-80 overflow-y-auto animate-in fade-in zoom-in-95 duration-100">
                        {noticeStatusOptions.length > 0 ? (
                          <>
                            {noticeStatusOptions.map((status) => (
                              <label
                                key={status}
                                className="flex items-center gap-3 p-2.5 hover:bg-blue-50 rounded-lg cursor-pointer"
                              >
                                <input
                                  type="checkbox"
                                  checked={selectedNoticeStatus.includes(
                                    status
                                  )}
                                  onChange={(e) => {
                                    if (e.target.checked)
                                      setSelectedNoticeStatus([
                                        ...selectedNoticeStatus,
                                        status,
                                      ]);
                                    else
                                      setSelectedNoticeStatus(
                                        selectedNoticeStatus.filter(
                                          (s) => s !== status
                                        )
                                      );
                                  }}
                                  className="rounded text-blue-600"
                                />
                                <div className="flex items-center gap-2">
                                  <span
                                    className={`inline-flex px-2 py-0.5 rounded-full text-[10px] font-bold uppercase border ${getNoticeStatusStyle(status)}`}
                                  >
                                    {status}
                                  </span>
                                </div>
                              </label>
                            ))}
                            {selectedNoticeStatus.length > 0 && (
                              <div className="mt-2 pt-2 border-t border-gray-100 flex justify-end px-2">
                                <button
                                  onClick={() => setSelectedNoticeStatus([])}
                                  className="text-xs text-gray-500 hover:text-gray-700"
                                >
                                  Clear all
                                </button>
                              </div>
                            )}
                          </>
                        ) : (
                          <div className="p-4 text-sm text-gray-500 text-center">
                            No statuses found
                          </div>
                        )}
                      </div>
                    )}
                  </div>

                  {/* Consent Status Filter */}
                  <div className="relative">
                    <FilterButton
                      label="Consent Status"
                      name="status"
                      active={selectedStatus.length > 0}
                      count={selectedStatus.length}
                      onClick={() => toggleDropdown("status")}
                    />
                    {activeDropdown === "status" && (
                      <div className="absolute top-full left-0 mt-2 bg-white shadow-xl rounded-xl p-2 border border-gray-100 z-50 w-56 animate-in fade-in zoom-in-95 duration-100">
                        {["accepted", "revoked", "expired", "reconsented"].map(
                          (status) => (
                            <label
                              key={status}
                              className="flex items-center gap-3 p-2.5 hover:bg-blue-50 rounded-lg cursor-pointer"
                            >
                              <input
                                type="checkbox"
                                checked={selectedStatus.includes(status)}
                                onChange={(e) => {
                                  if (e.target.checked)
                                    setSelectedStatus([
                                      ...selectedStatus,
                                      status,
                                    ]);
                                  else
                                    setSelectedStatus(
                                      selectedStatus.filter((s) => s !== status)
                                    );
                                }}
                                className="rounded text-blue-600"
                              />
                              <div className="flex items-center gap-2">
                                <span
                                  className={`inline-flex px-2 py-0.5 rounded-full text-[10px] font-bold uppercase border ${getConsentStatusStyle(status)}`}
                                >
                                  {status}
                                </span>
                              </div>
                            </label>
                          )
                        )}
                        {selectedStatus.length > 0 && (
                          <div className="mt-2 pt-2 border-t border-gray-100 flex justify-end px-2">
                            <button
                              onClick={() => setSelectedStatus([])}
                              className="text-xs text-gray-500 hover:text-gray-700"
                            >
                              Clear all
                            </button>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Footer Actions */}
              <div className="flex justify-between items-center pt-6 border-t border-gray-100">
                <button
                  onClick={clearFilters}
                  disabled={activeFilterCount === 0 && !searchQuery}
                  className="text-sm font-medium text-gray-500 hover:text-gray-800 transition-colors px-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Clear all filters
                  {activeFilterCount > 0 && (
                    <span className="ml-1 text-blue-600">
                      ({activeFilterCount})
                    </span>
                  )}
                </button>

                <div className="flex gap-3">
                  <button
                    onClick={() => handleSearch(1)}
                    disabled={loading}
                    className="px-8 py-3 bg-blue-900 text-white rounded-xl font-semibold flex items-center gap-2 hover:bg-blue-800 transition-all shadow-lg shadow-blue-900/20 active:scale-95 disabled:opacity-70 disabled:scale-100"
                  >
                    {loading ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white rounded-full border-t-transparent animate-spin" />
                        Searching...
                      </>
                    ) : (
                      "Search Records"
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        ) : (
          // --- TABLE VIEW (Full Width) ---
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-300">
            {/* Filters Summary Bar */}
            <div className="bg-slate-900 text-white p-4 flex flex-wrap justify-between items-center gap-4 shadow-md">
              <div className="flex items-center gap-4 flex-wrap">
                <h3 className="font-semibold text-lg mr-2">Consent Table</h3>
                <div className="h-6 w-px bg-gray-700 hidden sm:block"></div>

                {/* Active Filters Badges */}
                <div className="flex flex-wrap gap-2">
                  {searchQuery && (
                    <span className="inline-flex items-center gap-1 bg-white/10 border border-white/20 px-3 py-1 rounded-full text-xs">
                      <Filter size={12} />
                      {searchType === "reference_id"
                        ? "Ref"
                        : "Principal"}:{" "}
                      {searchQuery.length > 20
                        ? searchQuery.substring(0, 20) + "..."
                        : searchQuery}
                    </span>
                  )}
                  {dateRange.start && (
                    <span className="inline-flex items-center gap-1 bg-white/10 border border-white/20 px-3 py-1 rounded-full text-xs">
                      <Calendar size={12} />
                      {dateRange.start} - {dateRange.end || "Now"}
                    </span>
                  )}
                  {selectedBP.length > 0 && (
                    <span className="inline-flex items-center gap-1 bg-white/10 border border-white/20 px-3 py-1 rounded-full text-xs">
                      <Filter size={12} />
                      {selectedBP.length} Process
                      {selectedBP.length > 1 ? "es" : ""}
                    </span>
                  )}
                  {selectedNoticeStatus.length > 0 && (
                    <span className="inline-flex items-center gap-1 bg-white/10 border border-white/20 px-3 py-1 rounded-full text-xs">
                      <Filter size={12} />
                      {selectedNoticeStatus.length} Notice Status
                      {selectedNoticeStatus.length > 1 ? "es" : ""}
                    </span>
                  )}
                  {selectedStatus.length > 0 && (
                    <span className="inline-flex items-center gap-1 bg-white/10 border border-white/20 px-3 py-1 rounded-full text-xs">
                      <Filter size={12} />
                      {selectedStatus.length} Consent Status
                      {selectedStatus.length > 1 ? "es" : ""}
                    </span>
                  )}
                  {!searchQuery &&
                    !dateRange.start &&
                    selectedBP.length === 0 &&
                    selectedNoticeStatus.length === 0 &&
                    selectedStatus.length === 0 && (
                      <span className="text-gray-400 text-sm italic">
                        No filters applied
                      </span>
                    )}
                </div>
              </div>

              <button
                onClick={() => setView("search")}
                className="text-xs font-medium bg-white text-slate-900 px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors"
              >
                Edit Filters
              </button>
            </div>

            {/* Table Card */}
            <div className="bg-white border border-gray-200 border-t-0 rounded-b-xl shadow-sm overflow-hidden">
              <div className="overflow-x-auto">
                <table className="text-left border-collapse w-full">
                  <thead>
                    <tr className="bg-gray-50/50 border-b border-gray-200">
                      <th className="p-3.5 text-xs font-bold text-gray-500 uppercase tracking-wider whitespace-nowrap ">
                        S.No.
                      </th>
                      <th className="p-3.5 text-xs font-bold text-gray-500 uppercase tracking-wider whitespace-nowrap">
                        Reference ID
                      </th>
                      <th className="p-3.5 text-xs font-bold text-gray-500 uppercase tracking-wider whitespace-nowrap">
                        Data Principal
                      </th>
                      <th className="p-3.5 text-xs font-bold text-gray-500 uppercase tracking-wider whitespace-nowrap">
                        Context
                      </th>
                      <th className="p-3.5 text-xs font-bold text-gray-500 uppercase tracking-wider whitespace-nowrap text-center">
                        Notice Status
                      </th>
                      <th className="p-3.5 text-xs font-bold text-gray-500 uppercase tracking-wider whitespace-nowrap text-center">
                        Consent
                      </th>
                      <th className="p-3.5 text-xs font-bold text-gray-500 uppercase tracking-wider whitespace-nowrap">
                        Updated
                      </th>
                      <th className="p-3.5 text-xs font-bold text-gray-500 uppercase tracking-wider whitespace-nowrap text-right">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {consents.length > 0 ? (
                      consents.map((row, idx) => (
                        <tr
                          key={row.publicId}
                          className="hover:bg-blue-50/30 transition-colors group"
                        >
                          <td className="p-3.5 text-sm text-gray-500 font-medium">
                            {(pagination.page - 1) * pagination.pageSize +
                              idx +
                              1}
                          </td>
                          <td className="p-3.5">
                            <div className="text-sm font-semibold text-blue-600 bg-blue-50 px-2 py-1 rounded border border-blue-100 whitespace-nowrap max-w-[180px]">
                              <CopyCell value={row.referenceId} label="Reference ID" />
                            </div>
                          </td>
                          <td className="p-3.5 max-w-[200px]">
                            <div
                              className="text-sm text-slate-700 font-medium"
                              title={row.dataPrincipalId}
                            >
                              <CopyCell value={row.dataPrincipalId} label="User ID" />
                            </div>
                          </td>
                          <td className="p-3.5 max-w-[300px]">
                            <div className="flex flex-col">
                              <span className="text-xs font-bold text-gray-400 uppercase mb-0.5">
                                {row.businessUnit?.name || "General"}
                              </span>
                              <span
                                className="text-sm text-slate-800 font-medium truncate"
                                title={row.businessProcess?.name}
                              >
                                {row.businessProcess?.name}
                              </span>
                            </div>
                          </td>
                          <td className="p-3.5 text-center">
                            <span
                              className={`inline-flex px-2.5 py-1 rounded-full text-[11px] font-bold uppercase tracking-wide border ${getNoticeStatusStyle(row.noticeStatus)}`}
                            >
                              {row.noticeStatus || "N/A"}
                            </span>
                          </td>
                          <td className="p-3.5 text-center">
                            <span
                              className={`inline-flex px-2.5 py-1 rounded-full text-[11px] font-bold uppercase tracking-wide border ${getConsentStatusStyle(row.status)}`}
                            >
                              {row.status || "N/A"}
                            </span>
                          </td>
                          <td className="p-3.5 whitespace-nowrap">
                            <div className="flex flex-col">
                              <span className="text-sm text-slate-700 font-medium">
                                {new Date(row.updatedAt).toLocaleDateString(
                                  undefined,
                                  {
                                    month: "short",
                                    day: "numeric",
                                    year: "numeric",
                                  }
                                )}
                              </span>
                              <span className="text-xs text-gray-400">
                                {new Date(row.updatedAt).toLocaleTimeString(
                                  undefined,
                                  { hour: "2-digit", minute: "2-digit" }
                                )}
                              </span>
                            </div>
                          </td>
                          <td className="p-3.5 text-right">
                            <div className="flex items-center justify-end gap-2 opacity-60 group-hover:opacity-100 transition-opacity">
                              <Button
                                variant="ghost"
                                size="sm"
                                onClick={() =>
                                  window.open(
                                    `/cms/data-fiduciary/consent-timeline/${row.dataPrincipalId}?type=data_principal_id`,
                                    "_blank"
                                  )
                                }
                                disabled={row.noticeStatus !== "completed"}
                                className={`h-8 px-2 text-xs ${row.noticeStatus !== "completed"
                                    ? "text-gray-400 cursor-not-allowed"
                                    : "text-blue-600 hover:text-blue-700 hover:bg-blue-50"
                                  }`}
                              >
                                <Eye className="h-3 w-3" />
                                View
                              </Button>

                              <Button
                                variant="ghost"
                                size="sm"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  handleCopyDPRM(row.dataPrincipalId);
                                }}
                                disabled={row.noticeStatus !== "completed"}
                                className={`h-8 px-2 text-xs ${row.noticeStatus !== "completed"
                                    ? "text-gray-400 cursor-not-allowed"
                                    : "text-blue-600 hover:text-blue-700 hover:bg-blue-50"
                                  }`}
                              >
                                <Copy className="h-3 w-3" />
                                DPRM
                              </Button>
                            </div>
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan={8} className="p-12 text-center">
                          <div className="flex flex-col items-center justify-center text-gray-400">
                            <div className="bg-gray-50 p-4 rounded-full mb-3">
                              <Filter size={32} className="opacity-20" />
                            </div>
                            <p className="text-lg font-medium text-gray-600">
                              No records found
                            </p>
                            <p className="text-sm">
                              Try adjusting your filters or search query
                            </p>
                          </div>
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>

              {/* Pagination Footer */}
              <div className="p-4 border-t border-gray-200 flex items-center justify-between bg-white">
                <div className="text-sm text-gray-500">
                  Showing{" "}
                  <span className="font-medium text-gray-900">
                    {consents.length > 0
                      ? (pagination.page - 1) * pagination.pageSize + 1
                      : 0}
                  </span>
                  {" - "}
                  <span className="font-medium text-gray-900">
                    {consents.length > 0
                      ? (pagination.page - 1) * pagination.pageSize +
                      consents.length
                      : 0}
                  </span>{" "}
                  of{" "}
                  <span className="font-medium text-gray-900">
                    {pagination.total}
                  </span>{" "}
                  entries
                </div>

                <div className="flex items-center gap-1">
                  <button
                    disabled={pagination.page === 1}
                    onClick={() => handleSearch(pagination.page - 1)}
                    className="flex items-center gap-1 px-3 py-1.5 text-sm text-gray-600 hover:text-blue-600 disabled:opacity-50 disabled:hover:text-gray-600 transition-colors"
                  >
                    <ChevronLeft size={16} /> Previous
                  </button>

                  <div className="flex items-center gap-1 mx-2">
                    {Array.from(
                      { length: pagination.totalPages },
                      (_, i) => i + 1
                    ).map((p) => {
                      if (
                        pagination.totalPages > 7 &&
                        p !== 1 &&
                        p !== pagination.totalPages &&
                        Math.abs(p - pagination.page) > 1
                      ) {
                        if (p === 2 || p === pagination.totalPages - 1)
                          return (
                            <span key={p} className="text-gray-400 px-1">
                              ...
                            </span>
                          );
                        return null;
                      }

                      return (
                        <button
                          key={p}
                          onClick={() => handleSearch(p)}
                          className={`w-8 h-8 flex items-center justify-center rounded-md text-sm transition-colors
                            ${pagination.page === p
                              ? "bg-white border border-gray-300 text-gray-900 font-medium shadow-sm"
                              : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                            }`}
                        >
                          {p}
                        </button>
                      );
                    })}
                  </div>

                  <button
                    disabled={pagination.page >= pagination.totalPages}
                    onClick={() => handleSearch(pagination.page + 1)}
                    className="flex items-center gap-1 px-3 py-1.5 text-sm text-gray-600 hover:text-blue-600 disabled:opacity-50 disabled:hover:text-gray-600 transition-colors"
                  >
                    Next <ChevronRight size={16} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
