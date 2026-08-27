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

import { EditButton } from "@/components/ui/action-buttons";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { SUPPORTED_LANGUAGES } from "@/lib/types/languages";
import { useRouter } from "next/navigation";

export interface StepData {
  consentPurpose?: any;
  processingPurposes?: any[];
  dataProcessorMappings?: any[];
  userAttributes?: any[];
  purposesOfProcessing?: any[];
  dataProcessors?: any[];
}

interface ConsentPurposeViewProps {
  data: StepData;
  consentPurposeId: string;
}

export function ConsentPurposeView({
  data,
  consentPurposeId,
}: ConsentPurposeViewProps) {
  const router = useRouter();

  const {
    consentPurpose,
    processingPurposes = [],
    dataProcessorMappings = [],
    userAttributes = [],
    purposesOfProcessing = [],
    dataProcessors = [],
  } = data;

  const formatLastUpdated = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
  };

  const getDataProcessorName = (dataProcessorId: string) => {
    const processor = dataProcessors.find(
      (dp: any) => dp.ouId === dataProcessorId
    );
    return processor?.brandName || processor?.legalName || "Unknown";
  };

  const getPurposeOfProcessingName = (purposeOfProcessingId: number) => {
    const purpose = purposesOfProcessing.find(
      (pop: any) => pop.id === purposeOfProcessingId
    );
    return purpose?.name || "Unknown";
  };

  const getUserAttributeName = (userAttributeId: number) => {
    const attr = userAttributes.find((ua: any) => ua.id === userAttributeId);
    return attr?.name || "Unknown";
  };
  const handleEdit = () => {
    router.push(`/cms/data-fiduciary/consent-purposes/${consentPurposeId}/edit`);
  };

  return (
    <div className="h-full flex flex-col">
      {/* Header - Fixed */}
      <div className="border-b px-6 py-5 flex-shrink-0">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-3">
            <h2 className="text-2xl font-bold tracking-tight">
              {consentPurpose?.name || "Consent Purpose"}
            </h2>
            {consentPurpose?.updatedAt && (
              <span className="text-sm text-muted-foreground">
                (Last updated: {formatLastUpdated(consentPurpose.updatedAt)})
              </span>
            )}
            <Badge
              variant={
                consentPurpose?.status === "published" ? "default" : "secondary"
              }
              className={
                consentPurpose?.status === "published"
                  ? "border-green-200 bg-green-50 text-green-700 pointer-events-none"
                  : ""
              }
            >
              {consentPurpose?.status?.toUpperCase() || "DRAFT"}
            </Badge>
          </div>
          <EditButton
            variant="outline"
            onClick={handleEdit}
            className="flex items-center gap-2"
          >
            Edit
          </EditButton>
        </div>
        <p className="text-muted-foreground">View consent purpose details</p>
      </div>

      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto px-6 py-6 pb-10 space-y-6">
        {/* General Information */}
        <div className="space-y-4">
          <div className="rounded-lg border p-4">
            <h3 className="font-semibold mb-3">General Information</h3>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <span className="font-medium text-muted-foreground">Code:</span>
                <p className="mt-1">
                  {consentPurpose?.code || "Not specified"}
                </p>
              </div>
              <div className="col-span-2">
                <span className="font-medium text-muted-foreground">
                  Description:
                </span>
                <p className="mt-1">
                  {consentPurpose?.description || "No description provided"}
                </p>
              </div>
            </div>
          </div>

          {/* Purposes of Processing List */}
          <div className="space-y-4">
            <h3 className="font-semibold">Purpose Sub Master List</h3>

            {processingPurposes.length > 0 ? (
              <div className="border rounded-lg overflow-hidden">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="bg-muted/30 border-r w-[200px]">
                        Purpose Sub Master
                      </TableHead>
                      <TableHead className="bg-muted/30 border-r w-[150px]">
                        Description
                      </TableHead>
                      <TableHead className="bg-muted/30">
                        Attributes Included
                      </TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {processingPurposes.map((purpose: any) => (
                      <TableRow key={purpose.id} className="hover:bg-muted/20">
                        <TableCell className="border-r w-[200px]">
                          <div className="font-medium">
                            {getPurposeOfProcessingName(
                              purpose.purposeOfProcessingId
                            )}
                          </div>
                        </TableCell>
                        <TableCell className="border-r min-w-2xl">
                          <div className="text-xs text-muted-foreground text-wrap">
                            {purpose.description || "No description"}
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex flex-wrap gap-1">
                            {purpose.userAttributeNames?.map(
                              (attrName: string) => (
                                <Badge
                                  key={attrName}
                                  variant="outline"
                                  className="text-xs"
                                >
                                  {attrName}
                                </Badge>
                              )
                            )}
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            ) : (
              <div className="rounded-lg border border-dashed p-8 text-center">
                <p className="text-sm text-muted-foreground">
                  No processing purposes defined
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Data Processors */}
        <div className="space-y-4">
          <h3 className="font-semibold">Processors List</h3>

          {dataProcessorMappings && dataProcessorMappings.length > 0 ? (
            <div className="border rounded-lg overflow-hidden">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="bg-muted/30 border-r w-[200px]">
                      Processors Name
                    </TableHead>
                    <TableHead className="bg-muted/30 border-r w-[250px]">
                      Purpose Sub Master
                    </TableHead>
                    <TableHead className="bg-muted/30">Attributes</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {(() => {
                    // Group data processor mappings by processor (same logic as step5)
                    const groupedMappings = dataProcessorMappings.reduce(
                      (acc: any, mapping: any) => {
                        if (!acc[mapping.dataProcessorId]) {
                          acc[mapping.dataProcessorId] = [];
                        }
                        acc[mapping.dataProcessorId].push(mapping);
                        return acc;
                      },
                      {}
                    );

                    return Object.entries(groupedMappings).map(
                      ([dataProcessorId, mappings]: [string, any]) => {
                        const processingPurposeIds = [
                          ...new Set(
                            mappings.map((m: any) => m.processingPurposeId)
                          ),
                        ];
                        const uniquePurposes = processingPurposeIds.map(
                          (id) => {
                            const pp = processingPurposes.find(
                              (p: any) => p.id === id
                            );
                            return getPurposeOfProcessingName(
                              pp?.purposeOfProcessingId
                            );
                          }
                        );
                        const allUserAttributes = [
                          ...new Set(
                            mappings.flatMap((m: any) => m.userAttributeNames)
                          ),
                        ] as string[];

                        return (
                          <TableRow
                            key={dataProcessorId}
                            className="hover:bg-muted/20"
                          >
                            <TableCell className="border-r w-[200px]">
                              <div className="font-medium">
                                {getDataProcessorName(dataProcessorId)}
                              </div>
                            </TableCell>
                            <TableCell className="border-r w-[250px]">
                              <div className="flex flex-wrap gap-1">
                                {uniquePurposes.map((purpose, index) => (
                                  <Badge
                                    key={index}
                                    variant="secondary"
                                    className="text-xs"
                                  >
                                    {purpose}
                                  </Badge>
                                ))}
                              </div>
                            </TableCell>
                            <TableCell>
                              <div className="flex flex-wrap gap-1">
                                {allUserAttributes.map((attrName) => (
                                  <Badge
                                    key={attrName}
                                    variant="outline"
                                    className="text-xs"
                                  >
                                    {attrName}
                                  </Badge>
                                ))}
                              </div>
                            </TableCell>
                          </TableRow>
                        );
                      }
                    );
                  })()}
                </TableBody>
              </Table>
            </div>
          ) : (
            <div className="rounded-lg border border-dashed p-8 text-center">
              <p className="text-sm text-muted-foreground">
                No processors defined
              </p>
            </div>
          )}
        </div>

        {/* Translations Section */}
        <div className="space-y-4">
          <h3 className="font-semibold">Translations (22 Indian Languages)</h3>

          {consentPurpose?.supportedLanguages && consentPurpose.supportedLanguages.filter((code: string) => code !== "en").length > 0 ? (
            <div className="space-y-6">
              {/* Consent Purpose Translations */}
              <div className="rounded-lg border p-4">
                <h4 className="font-medium mb-3">Purpose Master</h4>
                <div className="space-y-2">
                  {Object.entries(SUPPORTED_LANGUAGES)
                    .filter(([code]) => code !== "en" && consentPurpose.supportedLanguages.includes(code))
                    .map(([langCode, lang]) => {
                      const translation = consentPurpose.translations?.[langCode];

                      return (
                        <div key={langCode} className="border-b last:border-b-0 pb-3 last:pb-0">
                          <div className="font-medium text-sm mb-1">
                            {lang.name} ({lang.nativeName})
                          </div>
                          <div className="pl-4 space-y-1 text-sm">
                            <div>
                              <span className="text-muted-foreground">Name:</span>{" "}
                              <span>{translation?.name || "-"}</span>
                            </div>
                            <div>
                              <span className="text-muted-foreground">Description:</span>{" "}
                              <span>{translation?.description || "-"}</span>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                </div>
              </div>

              {/* Processing Purposes Translations */}
              {processingPurposes.length > 0 && (
                <div className="rounded-lg border p-4">
                  <h4 className="font-medium mb-3">Purpose Sub Masters</h4>
                  {processingPurposes.map((pp: any, ppIndex: number) => (
                    <div key={pp.id} className="mb-6 last:mb-0">
                      <div className="flex items-center gap-2 mb-3 pb-2 border-b">
                        <div className="flex items-center justify-center w-5 h-5 rounded-full bg-muted text-xs font-medium">
                          {ppIndex + 1}
                        </div>
                        <h5 className="font-medium text-sm">{pp.name}</h5>
                      </div>
                      <div className="space-y-2 pl-7">
                        {Object.entries(SUPPORTED_LANGUAGES)
                          .filter(([code]) => code !== "en" && pp.supportedLanguages?.includes(code))
                          .map(([langCode, lang]) => {
                            const translation = pp.translations?.[langCode];

                            return (
                              <div key={langCode} className="border-b last:border-b-0 pb-2 last:pb-0">
                                <div className="font-medium text-xs mb-1 text-muted-foreground">
                                  {lang.name} ({lang.nativeName})
                                </div>
                                <div className="pl-3 space-y-1 text-xs">
                                  <div>
                                    <span className="text-muted-foreground">Name:</span>{" "}
                                    <span>{translation?.name || "-"}</span>
                                  </div>
                                  <div>
                                    <span className="text-muted-foreground">Description:</span>{" "}
                                    <span>{translation?.description || "-"}</span>
                                  </div>
                                </div>
                              </div>
                            );
                          })}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ) : (
            <div className="rounded-lg border border-dashed p-8 text-center">
              <p className="text-sm text-muted-foreground">
                No translations available. Add translations from the edit page.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
