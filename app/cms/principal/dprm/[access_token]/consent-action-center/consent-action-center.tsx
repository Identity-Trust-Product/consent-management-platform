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

import { useEffect, useState, useTransition } from "react";
import {
  ArrowLeft,
  Check,
  FileText,
  Info,
  AlertTriangle,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { createDprmLink } from "@/lib/dprm-utils";
import { updateConsent, revokeConsent } from "./actions";
import type {
  ConsentData,
  RevokeData,
  PurposeData,
  RevokePurpose,
} from "./types";
import { Blank1Svg } from "../_components/blank1";
import { Blank2Svg } from "../_components/blank2";
import { DprmPageHeader } from "@/components/dprm/dprm-page-header";
import { useNoticeTranslation } from "@/hooks/use-notice-translation";
import { useNoticeLanguage } from "@/contexts/notice-language-context";
import { getLocalizedContent } from "../consent-wallet/utils";

// Type for the new prop based on getOptedServices
type OptedService = {
  publicId: string;
  name: string;
  translations?: any; // Allow any to match Prisma JsonValue
};

type Props = {
  dataPrincipalId: string;
  initialUpdateData: ConsentData;
  initialRevokeData: RevokeData;
  optedServices: OptedService[];
  majorDataPrincipalId?: string;
};

const getUpdateCount = (purpose: PurposeData): number => {
  return purpose.processingList.reduce((count, processing) => {
    let updateCount = 0;

    if (processing.isNew) updateCount++;
    if (processing.isDeleted) updateCount++;
    if (processing.isExpiring) updateCount++;
    if (processing.descriptionChangeNotice) updateCount++;
    if (processing.ruleChangeNotices)
      updateCount += processing.ruleChangeNotices.length;
    if (processing.attributes.newlyAddedCount > 0) updateCount++;
    if (processing.attributes.deletedCount > 0) updateCount++;

    return count + updateCount;
  }, 0);
};

interface ConsentActionCenterProps {
  initialUpdateData: any;
  optedServices: OptedService[]; // Use the defined interface
  initialRevokeData: RevokeData;
  attributeTranslations: Record<string, any>;
  dataPrincipalId: string; // Restore type
  majorDataPrincipalId?: string; // Restore type
}
export default function ConsentActionCenter({
  initialUpdateData,
  optedServices,
  initialRevokeData,
  attributeTranslations,
  dataPrincipalId, // Restore prop
  majorDataPrincipalId, // Restore prop
}: ConsentActionCenterProps) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const homeUrl = createDprmLink(
    pathname.split("/").slice(0, 5).join("/"),
    searchParams
  );
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const { t } = useNoticeTranslation("dprm"); // Use specific namespace
  const { currentLanguage: language } = useNoticeLanguage(); // Fix: use currentLanguage

  // State for Update Modals
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);

  // State for Revoke Tab
  const [isRevokeModalOpen, setRevokeModalOpen] = useState(false);
  const [isRevokeSuccessModalOpen, setRevokeSuccessModalOpen] = useState(false);
  const [selectedRevokeItems, setSelectedRevokeItems] = useState<
    Record<string, boolean>
  >({});

  // Get data from initial data
  const allServices = initialUpdateData.services;
  const allRevokeServices = initialRevokeData.services;

  const [isValidationErrorModalOpen, setIsValidationErrorModalOpen] =
    useState(false);
  const [validationError, setValidationError] = useState("");
  // Selected service state (now defaults from the prop)
  const [selectedService, setSelectedService] = useState(
    optedServices[0]?.publicId || ""
  );
  const [selectedRevokeService, setSelectedRevokeService] = useState(
    optedServices[0]?.publicId || ""
  );

  const [checkboxStates, setCheckboxStates] = useState<Record<string, boolean>>(
    {}
  );

  // Get current data for the selected service
  const currentServiceData = allServices[selectedService];

  const currentRevokeServiceData = allRevokeServices[selectedRevokeService];

  useEffect(() => {
    if (currentServiceData) {
      const initialStates: Record<string, boolean> = {};
      currentServiceData.purposes.forEach((purpose) => {
        // 1. Initialize all children first
        purpose.processingList.forEach((processing) => {
          initialStates[processing.id] = processing.defaultChecked;
        });

        // 2. Derive parent state from children
        const allChildrenChecked = purpose.processingList.every(
          (p) => initialStates[p.id]
        ); // Check their initial state

        // A purpose is checked only if it's not deleted and all its children are checked
        initialStates[purpose.id] = allChildrenChecked;
      });
      setCheckboxStates(initialStates);
    }
  }, [selectedService, currentServiceData]);

  // Clear revoke selections when service changes
  useEffect(() => {
    setSelectedRevokeItems({});
  }, [selectedRevokeService]);

  const handleCheckboxChange = (
    itemId: string,
    checked: boolean,
    purpose?: PurposeData // This is the key to know if it's a parent or child
  ) => {
    setCheckboxStates((prev) => {
      const newStates = { ...prev };
      newStates[itemId] = checked;

      if (purpose) {
        // --- Parent Checkbox Clicked (Cascade Down) ---
        // Update all non-deleted children to match the parent
        purpose.processingList.forEach((processing) => {
          if (!processing.isDeleted) {
            newStates[processing.id] = checked;
          }
        });
      } else {
        // --- Child Checkbox Clicked (Bubble Up) ---
        // Find the parent purpose
        const parentPurpose = currentServiceData?.purposes.find((p) =>
          p.processingList.some((pp) => pp.id === itemId)
        );

        if (parentPurpose) {
          // Check if all non-deleted children are now checked
          const allChildrenChecked = parentPurpose.processingList
            .filter((pp) => !pp.isDeleted) // Ignore deleted processing purposes
            .every((pp) => {
              const state = newStates[pp.id];
              if (pp.id === itemId) return checked; // Use the new value for the item that changed
              if (state !== undefined) return state; // Use the value from state if it exists
              return pp.defaultChecked; // Otherwise, fall back to its default
            });

          newStates[parentPurpose.id] = allChildrenChecked;
        }
      }
      return newStates;
    });
  };

  // Dynamically determine which accordions should be open
  const defaultOpenPurposes =
    currentServiceData?.purposes
      .filter((p) => getUpdateCount(p) > 0)
      .map((p) => p.id) || [];

  // Active tab state
  const [activeTab, setActiveTab] = useState(
    searchParams.get("type") || "update"
  );

  // Revoke checkbox logic
  const handleRevokeCheckChange = (
    itemId: string,
    checked: boolean | "indeterminate",
    purpose?: RevokePurpose
  ) => {
    const newSelectedItems = { ...selectedRevokeItems };

    if (checked === "indeterminate") checked = true;

    newSelectedItems[itemId] = checked;

    if (purpose && purpose.processingList.length > 0) {
      purpose.processingList.forEach((processing) => {
        newSelectedItems[processing.id] = checked;
      });
    } else if (!purpose) {
      const parentPurpose = currentRevokeServiceData?.purposes.find((p) =>
        p.processingList.some((pp) => pp.id === itemId)
      );
      if (parentPurpose) {
        const allChildrenChecked = parentPurpose.processingList.every(
          (pp) => newSelectedItems[pp.id]
        );
        newSelectedItems[parentPurpose.id] = allChildrenChecked;
      }
    }

    setSelectedRevokeItems(newSelectedItems);
  };

  const handleUpdateConsent = async () => {
    startTransition(async () => {
      try {
        // --- START NEW VALIDATION ---
        let unselectedMandatoryItem: string | null = null;
        let validationMsgTemplate = "";

        // Find the first mandatory item that is unchecked
        currentServiceData.purposes.some((purpose) =>
          purpose.processingList.some((processing) => {
            if (
              !processing.isDeleted &&
              processing.isNew &&
              processing.mandatory &&
              checkboxStates[processing.id] === false
            ) {
              unselectedMandatoryItem = getLocalizedContent(processing, processing.title, language, 'name');
              validationMsgTemplate = 'You must give consent to "{{item}}". It is a mandatory processing purpose.';
              return true;
            } else if (
              processing.isExpiring &&
              processing.mandatory &&
              checkboxStates[processing.id] === false
            ) {
              unselectedMandatoryItem = getLocalizedContent(processing, processing.title, language, 'name');
              validationMsgTemplate = 'You must give consent to "{{item}}". It is a mandatory processing purpose.';
              return true;
            } else {
              // FIX: Added safe access (processing.ruleChangeNotices || [])
              const notices = processing.ruleChangeNotices || [];
              if (
                !processing.isDeleted &&
                !processing.isNew &&
                notices.includes("Consent is now Mandatory") && // <--- SAFE CHECK HERE
                checkboxStates[processing.id] === false
              ) {
                unselectedMandatoryItem = getLocalizedContent(processing, processing.title, language, 'name');
                validationMsgTemplate = 'You must give consent to "{{item}}". It is a mandatory processing purpose.';
                return true;
              }
            }
            return false;
          })
        );

        // If we found one, show an error and stop the submission
        if (unselectedMandatoryItem) {
          setValidationError(
            validationMsgTemplate.replace("{{item}}", unselectedMandatoryItem)
          );
          setIsValidationErrorModalOpen(true);
          return;
        }
        // --- END NEW VALIDATION ---

        const selectedPPs: string[] = [];

        currentServiceData.purposes.forEach((purpose) => {
          purpose.processingList.forEach((processing) => {
            // Default to 'true' if not explicitly unchecked (unless it was deleted)
            const isChecked = checkboxStates[processing.id] !== false;
            if (isChecked && !processing.isDeleted) {
              selectedPPs.push(processing.id);
            }
          });
        });

        const hasExpiringConsents = currentServiceData.purposes.some(
          (purpose) => purpose.processingList.some((pp) => pp.isExpiring)
        );

        const result = await updateConsent(
          dataPrincipalId,
          selectedService,
          {
            selectedProcessingPurposes: selectedPPs,
            renewConsents: hasExpiringConsents,
          },
          majorDataPrincipalId
        );

        if (result.success) {
          setIsSuccessModalOpen(true);
          router.refresh();
        }
      } catch (error) {
        console.error("Error updating consent:", error);
        alert("Failed to update consent");
      }
    });
  };

  const handleRevokeConsent = async () => {
    startTransition(async () => {
      try {
        // FIX: Create a flat list of ONLY Processing Purpose IDs
        const finalSelectedIds: string[] = [];

        currentRevokeServiceData?.purposes.forEach((purpose) => {
          // Iterate through every processing purpose (child)
          purpose.processingList.forEach((processing) => {
            // Check if this SPECIFIC child is selected
            // Note: In your handleRevokeCheckChange, checking a parent automatically
            // sets the children keys to true in 'selectedRevokeItems', so this check works perfectly.
            if (selectedRevokeItems[processing.id]) {
              finalSelectedIds.push(processing.id);
            }
          });
        });

        if (finalSelectedIds.length === 0) {
          alert("No items selected for revocation");
          return;
        }

        await revokeConsent(
          dataPrincipalId,
          selectedRevokeService,
          finalSelectedIds, // Now contains ONLY Processing Purpose IDs
          majorDataPrincipalId
        );

        setRevokeModalOpen(false);
        setRevokeSuccessModalOpen(true);
        router.refresh();
      } catch (error) {
        console.error("Error revoking consent:", error);
        alert("Failed to revoke consent");
      }
    });
  };

  const isAnyRevokeSelected = Object.values(selectedRevokeItems).some((v) => v);

  return (
    <>
      <div className="min-h-screen bg-[#FAFAFB] pb-24 md:pb-0">
        <DprmPageHeader title={t("Consent Action Center")} backHref={homeUrl} />

        {/* Main Content with Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          {/* Desktop: Side-by-side layout */}
          <div className="md:flex md:min-h-[calc(100vh-73px)]">
            {/* Left Sidebar - Desktop only */}
            <div className="hidden md:block md:w-80 md:border-r md:border-[#E7E8E9] md:bg-white">
              <div className="p-6 space-y-6">
                {/* Tabs in sidebar for desktop */}
                <TabsList className="flex w-full h-auto items-stretch p-1 bg-[#FAFAFB] rounded-lg">
                  <TabsTrigger
                    value="update"
                    className="flex-1 rounded-md px-3 py-2 text-sm font-medium data-[state=active]:bg-blue-50 data-[state=active]:text-blue-700 data-[state=active]:font-semibold text-neutral-700"
                  >
                    {t("Update Consents")}
                  </TabsTrigger>
                  <TabsTrigger
                    value="withdraw"
                    className="flex-1 rounded-md px-3 py-2 text-sm font-medium data-[state=active]:bg-blue-50 data-[state=active]:text-blue-700 data-[state=active]:font-semibold text-neutral-700"
                  >
                    {t("Revoke Consents")}
                  </TabsTrigger>
                </TabsList>

                {/* Service List - Update Tab */}
                {activeTab === "update" && (
                  <div>
                    <h2 className="text-base font-semibold mb-3">
                      {t("Opted Service")} ({optedServices.length}) {/* <-- UPDATED */}
                    </h2>
                    <div className="space-y-2">
                      {optedServices.map((service) => (
                        /* <-- UPDATED LOOP */
                        <button
                          key={service.publicId} /* <-- UPDATED KEY */
                          onClick={
                            () =>
                              setSelectedService(
                                service.publicId
                              ) /* <-- UPDATED */
                          }
                          className={`w-full text-left px-4 py-3 rounded-lg border transition-colors ${selectedService ===
                              service.publicId /* <-- UPDATED */
                              ? "border-blue-500 bg-blue-50 text-blue-700"
                              : "border-[#E7E8E9] bg-white text-neutral-700 hover:bg-neutral-50"
                            }`}
                        >
                          {getLocalizedContent(service, service.name, language, 'name')} {/* <-- UPDATED */}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Service List - Revoke Tab */}
                {activeTab === "withdraw" && (
                  <div>
                    <h2 className="text-base font-semibold mb-3">
                      {t("Opted Service")} ({optedServices.length}) {/* <-- UPDATED */}
                    </h2>
                    <div className="space-y-2">
                      {optedServices.map((service) => (
                        /* <-- UPDATED LOOP */
                        <button
                          key={service.publicId} /* <-- UPDATED KEY */
                          onClick={
                            () =>
                              setSelectedRevokeService(
                                service.publicId
                              ) /* <-- UPDATED */
                          }
                          className={`w-full text-left px-4 py-3 rounded-lg border transition-colors ${selectedRevokeService ===
                              service.publicId /* <-- UPDATED */
                              ? "border-blue-500 bg-blue-50 text-blue-700"
                              : "border-[#E7E8E9] bg-white text-neutral-700 hover:bg-neutral-50"
                            }`}
                        >
                          {getLocalizedContent(service, service.name, language, 'name')} {/* <-- UPDATED */}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Action Button - Desktop - Fixed at bottom */}
              <div className="fixed bottom-0 left-0 md:block md:w-80 ml-3 z-10 border-t border-[#E7E8E9] p-6">
                {activeTab === "update" && (
                  <Button
                    className="w-full rounded-lg"
                    onClick={handleUpdateConsent}
                    disabled={
                      isPending ||
                      !currentServiceData ||
                      currentServiceData.purposes.length === 0
                    }
                  >
                    {isPending ? t("Updating...") : t("Acknowledge & Update Consent")}
                  </Button>
                )}

                {activeTab === "withdraw" && (
                  <Button
                    className="w-full rounded-lg"
                    onClick={() => setRevokeModalOpen(true)}
                    disabled={!isAnyRevokeSelected || isPending}
                  >
                    {t("Confirm Changes")}
                  </Button>
                )}
              </div>
            </div>

            {/* Main Content Area */}
            <div className="flex-1 md:overflow-y-auto">
              {/* Mobile Tabs */}
              <div className="pt-4 flex justify-center md:hidden">
                <TabsList className="inline-flex h-auto items-center justify-center rounded-lg bg-white p-1 border border-[#E7E8E9]">
                  <TabsTrigger
                    value="update"
                    className="inline-flex items-center justify-center whitespace-nowrap rounded-md px-9 py-2.5 text-sm font-medium ring-offset-white transition-all focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-blue-100 data-[state=active]:text-blue-700 data-[state=active]:font-semibold text-neutral-600"
                  >
                    {t("Update Consents")}
                  </TabsTrigger>
                  <TabsTrigger
                    value="withdraw"
                    className="inline-flex items-center justify-center whitespace-nowrap rounded-md px-9 py-2.5 text-sm font-medium ring-offset-white transition-all focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-blue-100 data-[state=active]:text-blue-700 data-[state=active]:font-semibold text-neutral-600"
                  >
                    {t("Revoke Consents")}
                  </TabsTrigger>
                </TabsList>
              </div>

              {/* UPDATE CONSENTS TAB */}
              <TabsContent value="update" className="p-4 pt-4 space-y-4 md:p-8">
                {/* Mobile Service Selector */}
                <div className="md:hidden">
                  <h2 className="text-sm font-medium">
                    {t("Opted Service")} ({optedServices.length})
                  </h2>
                  <Select
                    value={selectedService}
                    onValueChange={setSelectedService}
                  >
                    <SelectTrigger className="w-full bg-white mt-1 border-[#E7E8E9]">
                      <SelectValue placeholder={t("Select a service")} />
                    </SelectTrigger>
                    <SelectContent>
                      {optedServices.map((service) => (
                        /* <-- UPDATED LOOP */
                        <SelectItem
                          key={service.publicId}
                          value={service.publicId}
                        >
                          {getLocalizedContent(service, service.name, language, 'name')}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <p className="mt-2 text-sm text-neutral-600">
                    Select consents to update or renew for the opted service
                  </p>
                </div>
                {!currentServiceData && selectedService && (
                  <div className="flex items-center justify-center flex-col gap-2 py-8 pb-16">
                    <Blank1Svg />
                    <div className="text-[18px] font-semibold mb-1 text-[#181F32] tracking-tight">
                      {t("No Updates Available")}
                    </div>
                    <Button
                      variant="outline"
                      className="
                              text-primary-600
                              border-primary-600
                              hover:bg-primary-100
                              hover:text-primary-600
                              rounded-sm
                              h-auto
                              px-4 py-2
                              font-medium
                              mt-2
                            "
                    >
                      <Link href={homeUrl} className="flex items-center">
                        {t("Back to Home")}
                      </Link>
                    </Button>
                  </div>
                )}
                {/* Consent Accordions Section */}
                {currentServiceData && (
                  <div className="bg-[#F3F3F4] p-3 rounded-lg md:p-6">
                    {/* Case 1: No service selected yet (or service not in update list) */}

                    {/* Case 2: No service selected at all */}
                    {!selectedService && (
                      <p>Select a service to see consent purposes.</p>
                    )}

                    {/* Case 3: Service selected, but NO consents found (Your new UI) */}
                    {currentServiceData &&
                      currentServiceData.purposes.length === 0 && (
                        <div className="flex items-center justify-center flex-col gap-2 py-8">
                          <div className="text-[18px] font-semibold mb-1 text-[#181F32] tracking-tight">
                            {t("No Consents Available")}
                          </div>
                          <Button
                            variant="outline"
                            className="
                                text-primary-600
                                border-primary-600
                                hover:bg-primary-100
                                hover:text-primary-600
                                rounded-sm
                                h-auto
                                px-4 py-2
                                font-medium
                                "
                          >
                            <Link href={homeUrl} className="flex items-center">
                              {t("Back to Home")}
                            </Link>
                          </Button>
                        </div>
                      )}

                    {/* Case 4: Service selected AND consents ARE found */}
                    {currentServiceData &&
                      currentServiceData.purposes.length > 0 && (
                        <>
                          {/* Title is now INSIDE this conditional block */}
                          <h3 className="text-lg font-semibold mb-2 md:mb-4">
                            {t("Purpose Master")}
                          </h3>

                          <Accordion
                            type="multiple"
                            defaultValue={defaultOpenPurposes}
                            className="w-full space-y-4"
                          >
                            {currentServiceData.purposes.map((purpose) => {
                              const updateCount = getUpdateCount(purpose);
                              const defaultOpenProcessing =
                                purpose.processingList
                                  .filter(
                                    (p) =>
                                      p.isNew ||
                                      p.isDeleted ||
                                      p.updateNotice ||
                                      p.attributes.newlyAddedCount > 0 ||
                                      p.attributes.deletedCount > 0
                                  )
                                  .map((p) => p.id);

                              return (
                                <AccordionItem
                                  key={purpose.id}
                                  value={purpose.id}
                                  className="rounded-lg bg-[#FEF0E6] shadow-sm group"
                                >
                                  {purpose.isDeleted && (
                                    <div className="rounded-t-md bg-[#FEF0E6] p-3 text-sm">
                                      <p className="font-semibold text-[#A20C0F]">
                                        1 {t("New Update")}:
                                      </p>
                                      <p className="text-[#A20C0F] mt-1">
                                        {t("This consent purpose has been deleted")}
                                      </p>
                                    </div>
                                  )}
                                  <div
                                    className={`flex w-full bg-white items-start justify-between p-4 rounded-t-md group-data-[state=closed]:rounded-b-md ${purpose.isDeleted ? "text-[#7D8187]" : ""
                                      }`}
                                  >
                                    <AccordionTrigger className="p-0 flex-1 text-left hover:no-underline group">
                                      <div className="flex flex-col items-start text-left ">
                                        <div className="flex items-center gap-2">
                                          <span className="font-semibold text-base">
                                            {getLocalizedContent(purpose, purpose.title, language, 'name')}
                                          </span>
                                          {purpose.isNew && (
                                            <Badge className="text-white bg-[#1A7A1E] hover:bg-green-800">
                                              {t("New")}
                                            </Badge>
                                          )}
                                        </div>
                                        {!purpose.isDeleted && (
                                          <span className="text-sm text-neutral-500 font-normal mt-1">
                                            {t("Consent Duration")}: {purpose.duration}
                                            <Info className="inline h-4 w-4 ml-1" />
                                          </span>
                                        )}

                                        {!purpose.isDeleted &&
                                          updateCount > 0 && (
                                            <span className="text-blue-600 h-auto p-0 mt-1.5 font-normal">
                                              <span className="hidden group-data-[state=closed]:inline">
                                                {t("Show {{count}} update").replace("{{count}}", updateCount.toString())}
                                                {/* {updateCount > 1 ? "s" : ""} */}
                                              </span>
                                              <span className="hidden group-data-[state=open]:inline">
                                                {t("Hide {{count}} update").replace("{{count}}", updateCount.toString())}
                                                {/* {updateCount > 1 ? "s" : ""} */}
                                              </span>
                                            </span>
                                          )}
                                      </div>
                                    </AccordionTrigger>
                                    <Checkbox
                                      checked={
                                        checkboxStates[purpose.id] || false
                                      }
                                      onCheckedChange={(checked) =>
                                        handleCheckboxChange(
                                          purpose.id,
                                          checked as boolean,
                                          purpose // Pass the purpose object
                                        )
                                      }
                                      className={`mt-1 ml-4 shrink-0 border-none ${purpose.isDeleted ? "bg-grey" : ""
                                        }`}
                                      disabled={purpose.isDeleted}
                                    />
                                  </div>
                                  <AccordionContent className="p-4 bg-[#E7E8E9] ">
                                    <Accordion
                                      type="multiple"
                                      defaultValue={defaultOpenProcessing}
                                      className="w-full space-y-3"
                                    >
                                      {purpose.processingList.map(
                                        (processing) => (
                                          <AccordionItem
                                            key={processing.id}
                                            value={processing.id}
                                            className={`rounded-lg border  group ${processing.isDeleted
                                                ? "bg-[#FEF0E6]"
                                                : "bg-[#E6F9DD]"
                                              }`}
                                          >
                                            {!purpose.isDeleted &&
                                              processing.isDeleted && (
                                                <div className="rounded-t-md group-data-[state=closed]:rounded-b-md bg-[#FEF0E6] p-3 text-sm">
                                                  <p className="font-semibold text-[#A20C0F]">
                                                    1 {t("New Update")}:
                                                  </p>
                                                  <p className="text-[#A20C0F] mt-1">
                                                    {t("This processing purpose has been deleted")}
                                                  </p>
                                                </div>
                                              )}
                                            {processing.ruleChangeNotices &&
                                              processing.ruleChangeNotices
                                                .length > 0 &&
                                              !processing.isDeleted && (
                                                <div className="rounded-tl-md rounded-tr-md  p-3 text-sm">
                                                  <p className="font-semibold text-[#0D571D]">
                                                    {
                                                      processing
                                                        .ruleChangeNotices
                                                        .length
                                                    }{" "}
                                                    {t("{{count}} New Update").replace("{{count}}", "")}
                                                    {processing
                                                      .ruleChangeNotices
                                                      .length > 1
                                                      ? "s"
                                                      : ""}
                                                    :
                                                  </p>
                                                  <ol className="list-decimal pl-5 mt-2 space-y-1 text-[#0D571D]">
                                                    {processing.ruleChangeNotices.map(
                                                      (notice, index) => (
                                                        <li key={index}>
                                                          {notice}
                                                        </li>
                                                      )
                                                    )}
                                                  </ol>
                                                </div>
                                              )}

                                            <div className="flex w-full items-start justify-between p-3 bg-white rounded-t-md group-data-[state=closed]:rounded-b-md">
                                              <AccordionTrigger
                                                className={`p-0 flex-1 hover:no-underline ${processing.isDeleted
                                                    ? "text-[#7D8187]"
                                                    : ""
                                                  }`}
                                              >
                                                <div className="flex items-center gap-2">
                                                  <span className="font-semibold text-left">
                                                    {getLocalizedContent(processing, processing.title, language, 'name')}
                                                    {processing.isExpiring &&
                                                      !purpose.isDeleted && (
                                                        <div className="font-normal">
                                                          {t("Consent Expires")}:{" "}
                                                          <Badge className="rounded-sm text-white bg-[#3F51B5] hover:bg-blue-800 text-center">
                                                            {t("In {{count}} days").replace("{{count}}", processing.daysUntilExpiry?.toString() || "")}
                                                          </Badge>
                                                        </div>
                                                      )}
                                                  </span>
                                                  {!purpose.isNew &&
                                                    processing.isNew && (
                                                      <Badge className="text-white bg-[#1A7A1E] hover:bg-green-800">
                                                        {t("New")}
                                                      </Badge>
                                                    )}
                                                </div>
                                              </AccordionTrigger>
                                              <Checkbox
                                                checked={
                                                  checkboxStates[
                                                  processing.id
                                                  ] ?? processing.defaultChecked
                                                }
                                                onCheckedChange={(checked) =>
                                                  handleCheckboxChange(
                                                    processing.id,
                                                    checked as boolean,
                                                    undefined // Pass undefined to trigger "bubble up" logic
                                                  )
                                                }
                                                className={`ml-4 shrink-0 border-none ${processing.isDeleted
                                                    ? "bg-grey"
                                                    : ""
                                                  }`}
                                                disabled={processing.isDeleted}
                                              />
                                            </div>
                                            <AccordionContent className="p-3 pt-0 space-y-3 bg-white rounded-b-md">
                                              {processing.descriptionChangeNotice &&
                                                !processing.isDeleted && (
                                                  <div className="rounded-md bg-[#E6F9DD] p-3 text-sm">
                                                    <p className="font-semibold text-[#0D571D]">
                                                      There has been an update
                                                      on how your consent will
                                                      be used:
                                                    </p>
                                                    <p className="text-[#0D571D] mt-2">
                                                      {getLocalizedContent(processing, processing.descriptionChangeNotice || "", language, 'description')}
                                                    </p>
                                                  </div>
                                                )}
                                              {processing.oldDescription && (
                                                <p className="text-sm text-neutral-500 line-through">
                                                  Purpose:{" "}
                                                  {processing.oldDescription}
                                                </p>
                                              )}
                                              {/* <p className="text-sm text-neutral-700">
                                                Purpose:{" "}
                                                {processing.description}
                                              </p> */}
                                              <div className="flex flex-col gap-2">
                                                <h4
                                                  className={`font-medium ${processing.isDeleted
                                                      ? "text-[#7D8187]"
                                                      : ""
                                                    }`}
                                                >
                                                  {t("Personal Data")}{" "}
                                                  {!processing.isDeleted &&
                                                    processing.attributes
                                                      .deletedCount > 0 && (
                                                      <Badge className="text-[#A20C0F] bg-[#FEF0E6] hover:bg-[#A20C0F]">
                                                        {
                                                          processing.attributes
                                                            .deletedCount
                                                        }{" "}
                                                        {t("Removed")}
                                                      </Badge>
                                                    )}
                                                </h4>
                                                {!processing.isNew &&
                                                  processing.attributes
                                                    .newlyAddedCount > 0 && (
                                                    <Badge className="text-white bg-[#1A7A1E] hover:bg-green-800 w-fit">
                                                      {
                                                        processing.attributes
                                                          .newlyAddedCount
                                                      }{" "}
                                                      {t("Added")}
                                                    </Badge>
                                                  )}
                                              </div>
                                              {/* Render Deleted Attributes in GREY */}
                                              {processing.attributes
                                                .deletedList &&
                                                processing.attributes
                                                  .deletedList.length > 0 && (
                                                  <div className="flex flex-wrap gap-2 mt-2">
                                                    {" "}
                                                    {/* Added mt-2 for spacing */}
                                                    {processing.attributes.deletedList.map(
                                                      (attribute, i) => (
                                                        <Badge
                                                          key={i}
                                                          variant="outline"
                                                          className="bg-[#E7E8E9] text-[#7D8187] " // New GREY styling
                                                        >
                                                          {getLocalizedContent({ translations: attributeTranslations[attribute] }, attribute, language, 'name')}
                                                        </Badge>
                                                      )
                                                    )}
                                                  </div>
                                                )}
                                              {/* Render ONLY Newly Added Attributes */}
                                              {processing.attributes.list
                                                .length > 0 && (
                                                  <div className="flex flex-wrap gap-2">
                                                    {processing.attributes.list
                                                      .filter(
                                                        (attribute) =>
                                                          attribute.status ===
                                                          "added"
                                                      ) // Filter to show ONLY added
                                                      .map((attribute, i) => (
                                                        <Badge
                                                          key={i}
                                                          variant="outline"
                                                          className="bg-[#F3F3F4] text-neutral-700"
                                                        >
                                                          {getLocalizedContent({ translations: attributeTranslations[attribute.name] }, attribute.name, language, 'name')}
                                                          {!processing.isNew &&
                                                            ` (${t("New")})`}{" "}
                                                          {/* Add (New) suffix */}
                                                        </Badge>
                                                      ))}
                                                    {processing.attributes.list
                                                      .filter(
                                                        (attribute) =>
                                                          attribute.status ===
                                                          "unchanged"
                                                      ) // Filter to show ONLY added
                                                      .map((attribute, i) => (
                                                        <Badge
                                                          key={i}
                                                          variant="outline"
                                                          className="bg-[#F3F3F4] text-neutral-700"
                                                        >
                                                          {getLocalizedContent({ translations: attributeTranslations[attribute.name] }, attribute.name, language, 'name')}
                                                          {/* Add (New) suffix */}
                                                        </Badge>
                                                      ))}
                                                  </div>
                                                )}
                                            </AccordionContent>
                                          </AccordionItem>
                                        )
                                      )}
                                    </Accordion>
                                  </AccordionContent>
                                </AccordionItem>
                              );
                            })}
                          </Accordion>
                        </>
                      )}
                  </div>
                )}
              </TabsContent>

              {/* REVOKE CONSENTS TAB */}
              <TabsContent
                value="withdraw"
                className="p-4 pt-4 space-y-4 md:p-8"
              >
                {/* Mobile Service Selector */}
                <div className="md:hidden">
                  <h2 className="text-sm font-medium">
                    {t("Opted Service")} ({optedServices.length}) {/* <-- UPDATED */}
                  </h2>
                  <Select
                    value={selectedRevokeService}
                    onValueChange={setSelectedRevokeService}
                  >
                    <SelectTrigger className="w-full bg-white mt-1 border border-[#E7E8E9]">
                      <SelectValue placeholder={t("Select a service")} />
                    </SelectTrigger>
                    <SelectContent>
                      {optedServices.map((service) => (
                        <SelectItem
                          key={service.publicId}
                          value={service.publicId}
                        >
                          {getLocalizedContent(service, service.name, language, 'name')}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <p className="mt-2 text-sm text-neutral-600">
                    Select your opted services to raise a request of revocation
                    of your personal data
                  </p>
                </div>
                {!currentRevokeServiceData && selectedRevokeService && (
                  <div className="flex items-center justify-center flex-col gap-2 py-8 pb-16">
                    <Blank2Svg />
                    <div className="text-[18px] font-semibold mb-1 text-[#181F32] tracking-tight">
                      {t("No Revocable Consents")}
                    </div>
                    <Button
                      variant="outline"
                      className="
                              text-primary-600
                              border-primary-600
                              hover:bg-primary-100
                              hover:text-primary-600
                              rounded-sm
                              h-auto
                              px-4 py-2
                              font-medium
                              mt-2
                            "
                    >
                      <Link href={homeUrl} className="flex items-center">
                        {t("Back to Home")}
                      </Link>
                    </Button>
                  </div>
                )}
                {currentRevokeServiceData && (
                  <div className="bg-[#F3F3F4] p-3 rounded-lg md:p-6">
                    {/* --- UPDATED LOGIC FOR NO DATA --- */}

                    {!selectedRevokeService && (
                      <p>Select a service to see consent purposes.</p>
                    )}

                    {currentRevokeServiceData &&
                      currentRevokeServiceData.purposes.length === 0 && (
                        <div className="flex items-center justify-center flex-col gap-2 py-8 pb-16">
                          <Blank2Svg />
                          <div className="text-[18px] font-semibold mb-1 text-[#181F32] tracking-tight">
                            {t("No Revocable Consents")}
                          </div>
                          <Button
                            variant="outline"
                            className="
                              text-primary-600
                              border-primary-600
                              hover:bg-primary-100
                              hover:text-primary-600
                              rounded-sm
                              h-auto
                              px-4 py-2
                              font-medium
                              mt-2
                            "
                          >
                            <Link href={homeUrl} className="flex items-center">
                              {t("Back to Home")}
                            </Link>
                          </Button>
                        </div>
                      )}

                    {currentRevokeServiceData &&
                      currentRevokeServiceData.purposes.length > 0 && (
                        <>
                          <h3 className="text-lg font-semibold mb-2 md:mb-4">
                            {t("Purpose Master")}
                          </h3>
                          <Accordion
                            type="multiple"
                            className="w-full space-y-3"
                          >
                            {currentRevokeServiceData.purposes.map(
                              (purpose) => (
                                <AccordionItem
                                  key={purpose.id}
                                  value={purpose.id}
                                  className="rounded-lg border border-[#E7E8E9] bg-white shadow-sm"
                                >
                                  <div className="flex w-full items-start justify-between p-4">
                                    <AccordionTrigger className="p-0 flex-1 text-left hover:no-underline">
                                      <div className="flex flex-col items-start text-left">
                                        <span className="font-semibold text-base">
                                          {getLocalizedContent(purpose, purpose.title, language, 'name')}
                                        </span>
                                        <span className="text-sm text-neutral-500 font-normal mt-1">
                                          {t("Consent Duration")}: {purpose.duration}
                                          <Info className="inline h-4 w-4 ml-1" />
                                        </span>
                                      </div>
                                    </AccordionTrigger>
                                    <Checkbox
                                      checked={
                                        selectedRevokeItems[purpose.id] || false
                                      }
                                      onCheckedChange={(checked) =>
                                        handleRevokeCheckChange(
                                          purpose.id,
                                          checked,
                                          purpose
                                        )
                                      }
                                      className="ml-4 shrink-0"
                                    />
                                  </div>
                                  {purpose.processingList.length > 0 && (
                                    <AccordionContent className="p-4 pt-0">
                                      <Accordion
                                        type="multiple"
                                        className="w-full space-y-3"
                                      >
                                        {purpose.processingList.map(
                                          (processing) => (
                                            <AccordionItem
                                              key={processing.id}
                                              value={processing.id}
                                              className="rounded-lg border border-[#E7E8E9] bg-white"
                                            >
                                              <div className="flex w-full items-center justify-between p-3">
                                                <AccordionTrigger className="p-0 flex-1 hover:no-underline">
                                                  <span className="font-semibold text-left text-sm">
                                                    {getLocalizedContent(processing, processing.title, language, 'name')}
                                                  </span>
                                                </AccordionTrigger>
                                                <Checkbox
                                                  checked={
                                                    selectedRevokeItems[
                                                    processing.id
                                                    ] || false
                                                  }
                                                  onCheckedChange={(checked) =>
                                                    handleRevokeCheckChange(
                                                      processing.id,
                                                      checked
                                                    )
                                                  }
                                                  className="ml-4 shrink-0"
                                                />
                                              </div>
                                              <AccordionContent className="p-3 pt-0 space-y-3">
                                                <p className="text-sm text-neutral-700">
                                                  {getLocalizedContent(processing, processing.description || "", language, 'description')}
                                                </p>
                                                <h4 className="font-medium text-sm">
                                                  {t("Personal Data")}
                                                </h4>
                                                <div className="flex flex-wrap gap-2">
                                                  {processing.attributes.map(
                                                    (attribute, i) => (
                                                      <Badge
                                                        key={i}
                                                        variant="outline"
                                                        className="bg-[#F3F3F4] text-neutral-700"
                                                      >
                                                        {getLocalizedContent({ translations: attributeTranslations[attribute] }, attribute, language, 'name')}
                                                      </Badge>
                                                    )
                                                  )}
                                                </div>
                                              </AccordionContent>
                                            </AccordionItem>
                                          )
                                        )}
                                      </Accordion>
                                    </AccordionContent>
                                  )}
                                </AccordionItem>
                              )
                            )}
                          </Accordion>
                        </>
                      )}
                    {/* --- END UPDATED LOGIC --- */}
                  </div>
                )}
              </TabsContent>
            </div>
          </div>
        </Tabs>
      </div>

      {/* Sticky Footer - Mobile only */}
      <footer className="fixed bottom-0 z-10 w-full gap-3 border-t bg-white p-4 md:hidden">
        {activeTab === "update" && (
          <Button
            className="rounded-lg mx-1 w-full"
            onClick={handleUpdateConsent}
            disabled={
              isPending ||
              !currentServiceData ||
              currentServiceData.purposes.length === 0
            }
          >
            {isPending ? t("Updating...") : t("Acknowledge & Update Consent")}
          </Button>
        )}

        {activeTab === "withdraw" && (
          <Button
            className="rounded-lg w-full"
            onClick={() => setRevokeModalOpen(true)}
            disabled={!isAnyRevokeSelected || isPending}
          >
            {t("Confirm Changes")}
          </Button>
        )}
      </footer>

      {/* Modals */}
      <Dialog
        open={isValidationErrorModalOpen}
        onOpenChange={setIsValidationErrorModalOpen}
      >
        <DialogContent className="sm:max-w-[425px] p-0 pt-6">
          <div className="flex flex-col items-center space-y-4 p-6 text-center">
            <div className="rounded-full bg-red-100 p-3">
              <AlertTriangle className="h-8 w-8 text-red-600" />
            </div>
            <DialogHeader>
              <DialogTitle className="text-xl">
                Mandatory Consent Required
              </DialogTitle>
              <DialogDescription className="pt-2">
                {validationError}
              </DialogDescription>
            </DialogHeader>
          </div>
          <DialogFooter className="w-full bg-gray-50 p-4">
            <Button
              className="w-full"
              onClick={() => setIsValidationErrorModalOpen(false)}
            >
              Close
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      <Dialog open={isSuccessModalOpen} onOpenChange={setIsSuccessModalOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <div className="flex flex-col items-center space-y-6 p-6 text-center">
            <div className="rounded-full bg-green-500 p-4">
              <Check className="h-12 w-12 text-white" />
            </div>
            <DialogHeader>
              <DialogTitle className="text-xl">
                {t("Consent Updated Successfully")}
              </DialogTitle>
            </DialogHeader>
            <p className="rounded border border-blue-300 bg-blue-50 p-2 text-sm text-blue-700">
              You can continue using the services as usual
            </p>
            <Button
              className="w-full"
              onClick={() => setIsSuccessModalOpen(false)}
            >
              <FileText className="mr-2 h-4 w-4" />
              {t("Consent Receipt")}
            </Button>
            <Button
              asChild
              variant="link"
              className="text-blue-600"
              onClick={() => setIsSuccessModalOpen(false)}
            >
              <Link href={homeUrl}>{t("Back to Home")}</Link>
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      <Dialog open={isRevokeModalOpen} onOpenChange={setRevokeModalOpen}>
        <DialogContent className="sm:max-w-[425px] p-0 pt-6">
          <div className="flex flex-col items-center space-y-4 p-6 text-center">
            <div className="rounded-full bg-blue-50 p-3">
              <AlertTriangle className="h-8 w-8 text-blue-600" />
            </div>
            <DialogHeader>
              <DialogTitle className="text-xl">
                {t("Do you agree to revoke your consent?")}
              </DialogTitle>
              <DialogDescription className="pt-2">
                Revoking your consent will delete your data from service
                provider and data processor record, potentially affecting the
                service they provide you.
              </DialogDescription>
            </DialogHeader>
          </div>
          <DialogFooter className="w-full grid-cols-2 gap-0 border-t">
            <Button
              variant="ghost"
              className="rounded-none border-r rounded-bl-lg"
              onClick={() => setRevokeModalOpen(false)}
            >
              {t("Cancel")}
            </Button>
            <Button
              className="rounded-none rounded-br-lg"
              onClick={handleRevokeConsent}
              disabled={isPending}
            >
              {isPending ? t("Submitting...") : t("Submit")}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <Dialog
        open={isRevokeSuccessModalOpen}
        onOpenChange={setRevokeSuccessModalOpen}
      >
        <DialogContent className="sm:max-w-[425px]">
          <div className="flex flex-col items-center space-y-6 p-6 text-center">
            <div className="rounded-full bg-green-500 p-4">
              <Check className="h-12 w-12 text-white" />
            </div>
            <DialogHeader className="space-y-4">
              <DialogTitle className="text-xl">
                {t("Consent Revoked Successfully")}
              </DialogTitle>
              <DialogDescription>
                Access to related services may be limited as a result
              </DialogDescription>
            </DialogHeader>
            <Button
              className="w-full"
              onClick={() => setRevokeSuccessModalOpen(false)}
            >
              <FileText className="mr-2 h-4 w-4" />
              {t("Consent Receipt")}
            </Button>
            <Button
              asChild
              variant="link"
              className="text-blue-600"
              onClick={() => setRevokeSuccessModalOpen(false)}
            >
              <Link href={homeUrl}>{t("Back to Home")}</Link>
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
