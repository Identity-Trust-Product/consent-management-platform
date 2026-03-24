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

import { useState, useEffect, useMemo } from "react";
import { TimelineList } from "./TimelineList";
import { TimelineDetailPanel } from "./TimelineDetailPanel";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import { History, FileText, X, Printer, Loader2 } from "lucide-react";
import { TimelineEvent, UserAttributeDictionary, ConsentWithRelations } from "./types";
import { useNoticeTranslation } from "@/hooks/use-notice-translation";
import { ReceiptDropdown, ReceiptOption } from "@/components/consent-receipt/receipt-dropdown";
import { getReceiptData } from "./actions";
import { Dialog, DialogContent, DialogTitle, DialogClose, DialogHeader } from "@/components/ui/dialog";
import { ConsentReceipt } from "@/components/consent-receipt/consent-receipt";
import { ConsentReceiptData } from "@/lib/types/consent-receipt";
import { toast } from "sonner";
import { useNoticeLanguage } from "@/contexts/notice-language-context";
import { Button } from "@/components/ui/button";

interface ServiceData {
  serviceName: string;
  serviceTranslations?: Record<string, any>;
  servicePublicId: string;
  consents: ConsentWithRelations[];
}

interface TimelineClientPageProps {
  events: TimelineEvent[];
  userAttributes: UserAttributeDictionary;
  services: ServiceData[];
}

export function TimelineClientPage({ events, userAttributes, services }: TimelineClientPageProps) {
  const { t } = useNoticeTranslation("dprm");
  const { currentLanguage } = useNoticeLanguage();
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  // Receipt Modal State
  const [isReceiptModalOpen, setIsReceiptModalOpen] = useState(false);
  const [receiptLoading, setReceiptLoading] = useState(false);
  const [receiptData, setReceiptData] = useState<ConsentReceiptData | null>(null);

  // Responsive Check
  useEffect(() => {
    const check = () => setIsDesktop(window.innerWidth >= 1024);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  // Auto-select first event on Desktop only
  useEffect(() => {
    if (isDesktop && events.length > 0 && !selectedId) {
      setSelectedId(events[0].id);
    }
  }, [isDesktop, events]);

  const handleSelect = (id: string) => {
    setSelectedId(id);
    if (!isDesktop) {
      setIsMobileOpen(true);
    }
  };

  // --- RECEIPT LOGIC ---
  const receiptOptions = useMemo(() => {
    const map = new Map<string, ReceiptOption>();

    // Flatten consents from all services
    const allConsents = services.flatMap(s => s.consents);

    allConsents.forEach((c) => {
      const bp = c.businessProcess;
      if (!bp) return;

      const key = `${c.referenceId}|${c.dataPrincipalId}|${bp.code}|${bp.version}`;
      if (!map.has(key)) {
        map.set(key, {
          referenceId: c.referenceId || "",
          dataPrincipalId: c.dataPrincipalId,
          processCode: bp.code,
          version: bp.version,
          lastUpdated: c.updatedAt.toString()
        });
      }
    });
    return Array.from(map.values());
  }, [services]);

  const handleViewReceipt = async (opt: ReceiptOption) => {
    setReceiptLoading(true);
    setIsReceiptModalOpen(true);
    setReceiptData(null); // Clear previous data

    try {
      const result = await getReceiptData(
        opt.referenceId,
        opt.dataPrincipalId,
        opt.processCode,
        opt.version
      );

      if (result.success && result.data) {
        setReceiptData(result.data);
      } else {
        toast.error(result.error || t("Failed to load receipt"));
        setIsReceiptModalOpen(false);
      }
    } catch (error) {
      console.error("Error loading receipt:", error);
      toast.error(t("An unexpected error occurred"));
      setIsReceiptModalOpen(false);
    } finally {
      setReceiptLoading(false);
    }
  };

  const activeEvent = events.find((e) => e.id === selectedId);

  if (events.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-64 bg-white border rounded-xl">
        <History className="w-10 h-10 text-gray-300 mb-2" />
        <p className="text-gray-500">{t("No timeline activity found")}.</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full">

      {/* Timeline Header with Receipt Dropdown */}
      <div className="flex justify-between items-center mb-4 px-1">
        <h2 className="text-lg font-semibold text-gray-800 hidden lg:block">
          {t("Activity History")}
        </h2>
        <div className="ml-auto">
          <ReceiptDropdown
            label={t("Consent Receipt")}
            options={receiptOptions}
            onView={handleViewReceipt}
            showDownload={false}
          />
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-6 items-start relative flex-1 min-h-0">
        {/* LEFT COLUMN: List */}
        <div className="w-full lg:flex-1 min-w-0 h-full overflow-y-auto">
          <TimelineList
            events={events}
            selectedId={selectedId}
            onSelect={handleSelect}
          />
        </div>

        {/* RIGHT COLUMN: Desktop Sticky Panel */}
        <div className="hidden lg:block w-[450px] shrink-0 sticky top-0 h-[calc(100vh-180px)]">
          {activeEvent ? (
            <div className="h-full border border-gray-200 bg-white rounded-xl shadow-sm overflow-hidden">
              <TimelineDetailPanel event={activeEvent} userAttributes={userAttributes} />
            </div>
          ) : (
            <div className="h-full border border-dashed border-gray-300 rounded-xl flex items-center justify-center text-gray-400 bg-gray-50">
              {t("Select an event to view details")}
            </div>
          )}
        </div>

        {/* MOBILE DRAWER */}
        <Sheet open={isMobileOpen} onOpenChange={setIsMobileOpen}>
          <SheetContent
            side="bottom"
            className="h-[85vh] p-0 rounded-t-2xl flex flex-col z-50 focus:outline-none"
          >
            {activeEvent && (
              <TimelineDetailPanel event={activeEvent} userAttributes={userAttributes} isMobileView />
            )}
          </SheetContent>
        </Sheet>
      </div>

      {/* RECEIPT MODAL */}
      <Dialog open={isReceiptModalOpen} onOpenChange={setIsReceiptModalOpen}>
        <DialogContent className="max-w-[1000px] min-w-3xl h-[90vh] p-0 overflow-hidden flex flex-col bg-gray-50 print:h-auto print:w-full print:max-w-none print:overflow-visible print:shadow-none print:border-none">
          <DialogHeader className="px-6 py-4 bg-white border-b border-gray-200 flex-shrink-0 print:hidden">
            <DialogTitle>{t("Consent Receipt")}</DialogTitle>
          </DialogHeader>

          <div className="flex-1 overflow-y-auto p-6 print:p-0 print:overflow-visible">
            {receiptLoading ? (
              <div className="h-full flex flex-col items-center justify-center space-y-4">
                <Loader2 className="w-10 h-10 text-blue-600 animate-spin" />
                <p className="text-gray-500 font-medium">
                  {t("Generating Receipt...")}
                </p>
              </div>
            ) : receiptData ? (
              <div className="bg-white shadow-sm rounded-lg print:shadow-none">
                <ConsentReceipt data={{ ...receiptData, language: currentLanguage }} className="border-none shadow-none" />
              </div>
            ) : (
              <div className="text-center text-gray-500 mt-20">
                {t("Unable to load receipt data.")}
              </div>
            )}
          </div>

          <div className="p-4 bg-white border-t border-gray-200 flex justify-end gap-2 flex-shrink-0 print:hidden">
            <Button variant="outline" onClick={() => setIsReceiptModalOpen(false)}>
              {t("Close")}
            </Button>
            <Button
              onClick={() => window.print()}
              className="flex items-center gap-2"
            >
              <Printer className="w-4 h-4" /> {t("Print Receipt")}
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
