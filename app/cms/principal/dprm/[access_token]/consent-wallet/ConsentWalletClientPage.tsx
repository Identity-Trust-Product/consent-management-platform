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

import { useState, useMemo } from "react";
import {
  ArrowLeft,
  ChevronRight,
  Filter,
  FileText,
  Download,
  SlidersHorizontal,
} from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ConsentList } from "./ConsentList";
import { TimelineClientPage } from "./TimelineClientPage";
import { ConsentWithRelations, TimelineEvent, UserAttributeDictionary } from "./types";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { createDprmLink } from "@/lib/dprm-utils";
import { useNoticeTranslation } from "@/hooks/use-notice-translation";
import { useNoticeLanguage } from "@/contexts/notice-language-context";
import { getLocalizedContent } from "./utils";

interface ServiceData {
  serviceName: string;
  serviceTranslations?: Record<string, any>;
  servicePublicId: string;
  consents: ConsentWithRelations[];
}

interface ClientPageProps {
  services: ServiceData[];
  timelineEvents: TimelineEvent[];
  userAttributes: UserAttributeDictionary;
}

export function ConsentWalletClientPage({
  services,
  timelineEvents,
  userAttributes,
}: ClientPageProps) {
  const { t } = useNoticeTranslation("dprm");
  const { currentLanguage } = useNoticeLanguage();
  const [view, setView] = useState<"list" | "timeline">("list");
  const [selectedServiceId, setSelectedServiceId] = useState<string>(
    services[0]?.servicePublicId || ""
  );
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const homeUrl = createDprmLink(
    pathname.split("/").slice(0, 5).join("/"),
    searchParams
  );

  const [statusTab, setStatusTab] = useState("active");
  const [filterType, setFilterType] = useState("all");
  const [filterUser, setFilterUser] = useState("all");

  const currentServiceData = services.find(
    (s) => s.servicePublicId === selectedServiceId
  );
  const currentConsents = currentServiceData?.consents || [];

  const { activeConsents, expiredConsents, withdrawnConsents } = useMemo(() => {
    const now = new Date();
    const active: ConsentWithRelations[] = [];
    const expired: ConsentWithRelations[] = [];
    const withdrawn: ConsentWithRelations[] = [];

    for (const consent of currentConsents) {
      if (consent.status === "accepted") {
        active.push(consent);
      } else if (consent.status === "expired") {
        expired.push(consent);
      } else if (consent.status === "revoked") {
        if (!consent.successors || consent.successors.length === 0) {
          withdrawn.push(consent);
        }
      }
    }
    return {
      activeConsents: active,
      expiredConsents: expired,
      withdrawnConsents: withdrawn,
    };
  }, [currentConsents]);


  const tabTriggerClass =
    "relative h-10 rounded-none  px-4 pb-3 pt-2 font-semibold text-muted-foreground shadow-none transition-none data-[state=active]:border-b-blue-600 data-[state=active]:text-blue-600 data-[state=active]:shadow-none text-sm";

  return (
    <div className="min-h-screen bg-[#F8F9FA] font-sans text-gray-900 flex flex-col overflow-hidden">
      {/* ======================= */}
      {/* GLOBAL HEADER (Desktop) */}
      {/* ======================= */}
      <header className="hidden md:flex h-18 bg-white border-b border-gray-200 items-center px-4 shrink-0 z-30">
        {/* Back Button */}
        <Button
          variant="ghost"
          size="icon"
          className="mr-2 text-gray-700 hover:bg-gray-100"
        >
          <Link href={homeUrl} className="flex items-center">
            <ArrowLeft className="h-5 w-5" />
          </Link>
        </Button>

        {/* Vertical Separator */}
        <div className="w-[1.5px] bg-gray-200" />

        {/* Title & Breadcrumb */}
        <div className="flex flex-col justify-center ml-2">
          <h1 className="font-bold text-[#181F32] leading-tight">
            {t("My Consent Wallet")}
          </h1>
          <div className="flex items-center gap-1 text-sm text-gray-500 mt-0.5">
            <span className="text-[0.75rem]">{t("Home")}</span>
            <ChevronRight className="w-4 text-gray-400" />
            <span className="text-[0.75rem] text-gray-800 font-medium">
              {view === "list" ? t("List View") : t("Timeline History")}
            </span>
          </div>
        </div>
      </header>

      {/* ======================= */}
      {/* MOBILE HEADER           */}
      {/* ======================= */}
      <header className="md:hidden bg-white border-b border-gray-200 sticky top-0 z-30 flex-none">
        <div className="px-4 h-16 flex items-center gap-3">
          <Button variant="ghost" size="icon" className="-ml-2 text-gray-500">
            <Link href={homeUrl} className="flex items-center">
              <ArrowLeft className="h-5 w-5" />
            </Link>
          </Button>
          <h1 className="text-lg font-bold text-gray-900">{t("My Consent Wallet")}</h1>
        </div>
      </header>

      {/* ======================= */}
      {/* MAIN LAYOUT WRAPPER     */}
      {/* ======================= */}
      <div className="flex flex-1 overflow-hidden relative">
        {/* ======================= */}
        {/* DESKTOP SIDEBAR         */}
        {/* ======================= */}
        <aside className="hidden md:flex w-80 bg-white border-r border-gray-200 flex-col flex-shrink-0 z-20">
          {/* View Toggles */}
          <div className="p-5">
            <div className="flex bg-gray-100 p-1 rounded-lg">
              <button
                onClick={() => setView("list")}
                className={cn(
                  "flex-1 py-2 text-sm font-medium rounded-md transition-all",
                  view === "list"
                    ? "bg-white shadow-sm text-blue-600"
                    : "text-gray-500 hover:text-gray-900"
                )}
              >
                {t("List View")}
              </button>
              <button
                onClick={() => setView("timeline")}
                className={cn(
                  "flex-1 py-2 text-sm font-medium rounded-md transition-all",
                  view === "timeline"
                    ? "bg-white shadow-sm text-blue-600"
                    : "text-gray-500 hover:text-gray-900"
                )}
              >
                {t("Timeline View")}
              </button>
            </div>
          </div>

          {/* Service List - ONLY SHOW IN LIST VIEW */}
          {view === "list" && (
            <div className="flex-1 overflow-y-auto py-2 animate-in fade-in duration-200">
              <div className="px-6 pb-3 text-xs font-bold text-gray-400 uppercase tracking-wider">
                {t("Opted Services")} ({services.length})
              </div>
              <div className="px-4 space-y-2">
                {services.map((s) => (
                  <button
                    key={s.servicePublicId}
                    onClick={() => setSelectedServiceId(s.servicePublicId)}
                    className={cn(
                      "w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-all border-2 relative",
                      selectedServiceId === s.servicePublicId
                        ? "bg-blue-50 border-blue-500 text-blue-700 shadow-sm"
                        : "bg-white border-transparent hover:bg-gray-50 text-gray-600 hover:text-gray-900"
                    )}
                  >
                    {getLocalizedContent({ translations: s.serviceTranslations }, s.serviceName, currentLanguage)}
                  </button>
                ))}
              </div>
            </div>
          )}
          {view === "timeline" && <div className="flex-1 bg-gray-50/30" />}
        </aside>

        {/* ======================= */}
        {/* MAIN CONTENT AREA       */}
        {/* ======================= */}
        <main className="flex-1 flex flex-col min-w-0 bg-[#F8F9FA] relative">
          {/* Content Controls (Desktop Only - Filters) */}
          {/* <div className="hidden md:flex h-14 items-center justify-end px-8 flex-shrink-0">
            <div className="flex items-center gap-3">
              {view === "list" ? (
                <Button
                  variant="outline"
                  size="sm"
                  className="h-9 gap-2 text-gray-600 border-gray-300"
                >
                  <SlidersHorizontal className="w-4 h-4" /> Filters
                </Button>
              ) : (
                <>
                  <FilterSelect
                    value={filterType}
                    onChange={setFilterType}
                    label="All Types"
                  />
                  <FilterSelect
                    value={filterUser}
                    onChange={setFilterUser}
                    label="All Users"
                  />
                </>
              )}
            </div>
          </div> */}

          {/* Scrollable Content */}
          <div className="flex-1 overflow-hidden p-4 md:p-6 md:pt-4">
            {/* --- MOBILE VIEW TOGGLE --- */}
            <div className="md:hidden bg-white p-1 rounded-lg border border-gray-200 flex shadow-sm mb-6 flex-shrink-0">
              <button
                onClick={() => setView("list")}
                className={cn(
                  "flex-1 py-2 rounded-md text-sm font-medium transition-all",
                  view === "list"
                    ? "bg-blue-50 text-blue-700 shadow-sm"
                    : "text-gray-500"
                )}
              >
                {t("List View")}
              </button>
              <button
                onClick={() => setView("timeline")}
                className={cn(
                  "flex-1 py-2 rounded-md text-sm font-medium transition-all",
                  view === "timeline"
                    ? "bg-blue-50 text-blue-700 shadow-sm"
                    : "text-gray-500"
                )}
              >
                {t("Timeline View")}
              </button>
            </div>

            {/* CONTENT RENDER */}
            {view === "list" ? (
              <div className="h-full flex flex-col bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
                {/* Mobile Service Selector */}
                <div className="md:hidden p-4 pb-0">
                  <div className="mb-2 font-semibold text-sm">
                    {t("Opted Service")}
                  </div>
                  <Select
                    value={selectedServiceId}
                    onValueChange={setSelectedServiceId}
                  >
                    <SelectTrigger className="w-full h-auto py-6 mb-4 bg-white">
                      <div className="flex flex-col items-start">
                        <span className="font-medium">
                          {getLocalizedContent({ translations: currentServiceData?.serviceTranslations }, currentServiceData?.serviceName || "", currentLanguage)}
                        </span>
                        <span className="text-xs text-gray-500">
                          {t("Consent Provided On")}: 03/01/2025
                        </span>
                      </div>
                    </SelectTrigger>
                    <SelectContent>
                      {services.map((s) => (
                        <SelectItem
                          key={s.servicePublicId}
                          value={s.servicePublicId}
                        >
                          {getLocalizedContent({ translations: s.serviceTranslations }, s.serviceName, currentLanguage)}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <Tabs
                  value={statusTab}
                  onValueChange={setStatusTab}
                  className="w-full h-full flex flex-col"
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between px-4 md:px-6 pt-2 border-b border-gray-100 shrink-0 bg-white">
                    <TabsList className="bg-transparent p-0 gap-8 h-auto w-full md:w-auto grid grid-cols-3 md:flex">
                      <TabsTrigger
                        value="active"
                        className={cn(tabTriggerClass, "px-0")}
                      >
                        {t("Active")} ({activeConsents.length})
                      </TabsTrigger>
                      <TabsTrigger
                        value="expired"
                        className={cn(tabTriggerClass, "px-0")}
                      >
                        {t("Expired")} ({expiredConsents.length})
                      </TabsTrigger>
                      <TabsTrigger
                        value="withdrawn"
                        className={cn(tabTriggerClass, "px-0")}
                      >
                        {t("Revoked")} ({withdrawnConsents.length})
                      </TabsTrigger>
                    </TabsList>
                  </div>

                  <div className="flex-1 overflow-y-auto p-4 md:p-6 bg-white">
                    <TabsContent value="active" className="mt-0 h-full">
                      <ConsentList consents={activeConsents} status="active" userAttributes={userAttributes} />
                    </TabsContent>
                    <TabsContent value="expired" className="mt-0 h-full">
                      <ConsentList
                        consents={expiredConsents}
                        status="expired"
                        userAttributes={userAttributes}
                      />
                    </TabsContent>
                    <TabsContent value="withdrawn" className="mt-0 h-full">
                      <ConsentList
                        consents={withdrawnConsents}
                        status="withdrawn"
                        userAttributes={userAttributes}
                      />
                    </TabsContent>
                  </div>
                </Tabs>
              </div>
            ) : (
              <div className="h-full md:overflow-hidden">
                {/* Global Timeline */}
                <TimelineClientPage events={timelineEvents} userAttributes={userAttributes} services={services} />
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}

function FilterSelect({ value, onChange, label }: any) {
  return (
    <Select value={value} onValueChange={onChange}>
      <SelectTrigger className="h-9 min-w-[130px] bg-white border-gray-300 text-xs font-medium rounded-md text-gray-600">
        <div className="flex items-center gap-2">
          <Filter className="w-3 h-3 text-gray-400 shrink-0" />
          <span className="truncate">{label}</span>
        </div>
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="all" className="text-xs">
          {label}
        </SelectItem>
      </SelectContent>
    </Select>
  );
}
