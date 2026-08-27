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
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useRouter } from "next/navigation";
import { ExternalLink } from "lucide-react";
import { EditButton } from "@/components/ui/action-buttons";
import { SUPPORTED_LANGUAGES } from "@/lib/types/languages";

export interface StepData {
  businessProcess?: any;
  businessUnits?: any[];
  consentPurposes?: any[];
  dataProcessors?: any[];
  userAttributes?: any[];
}

interface BusinessProcessViewProps {
  data: StepData;
  businessProcessId: string;
}

export function BusinessProcessView({
  data,
  businessProcessId,
}: BusinessProcessViewProps) {
  const router = useRouter();

  const {
    businessProcess,
    businessUnits = [],
    consentPurposes = [],
    dataProcessors = [],
    userAttributes = [],
  } = data;

  const formatLastUpdated = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
  };

  // Helper function to convert duration to display format (from hours to days)
  const convertDurationToDays = (config: any) => {
    if (
      config.durationType === "until_purpose_met" ||
      config.durationType === undefined
    ) {
      return "Until purpose met";
    }

    const durationInHours = config.consentDuration || 0;
    const durationInDays = Math.round(durationInHours / 24);

    return `${durationInDays} days`;
  };

  const handleEdit = () => {
    router.push(
      `/cms/data-fiduciary/business-processes/${businessProcessId}/edit`,
    );
  };

  // Get consent purpose configurations from business process
  const consentPurposeConfigs =
    businessProcess?.businessProcessToConsentPurposes || [];

  // Get legal documents
  const legalDocuments = businessProcess?.legalDocuments || {};
  const legalDocumentEntries = Object.entries(legalDocuments);

  return (
    <div className="h-full flex flex-col">
      {/* Header - Fixed */}
      <div className="border-b px-6 py-5 flex-shrink-0">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-3">
            <h2 className="text-2xl font-bold tracking-tight">
              {businessProcess?.name || "Process"}
            </h2>
            {businessProcess?.updatedAt && (
              <span className="text-sm text-muted-foreground">
                (Last updated: {formatLastUpdated(businessProcess.updatedAt)})
              </span>
            )}
            <Badge
              variant={
                businessProcess?.status === "published"
                  ? "default"
                  : "secondary"
              }
              className={
                businessProcess?.status === "published"
                  ? "border-green-200 bg-green-50 text-green-700 pointer-events-none"
                  : ""
              }
            >
              {businessProcess?.status?.toUpperCase() || "DRAFT"}
            </Badge>
          </div>
          <div className="flex items-center gap-2">
            <EditButton
              variant="outline"
              onClick={handleEdit}
              className="flex items-center gap-2"
            >
              Edit
            </EditButton>
          </div>
        </div>
        <p className="text-muted-foreground">View process details</p>
      </div>

      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto px-6 py-6 pb-10 space-y-6">
        {/* General Information */}
        <div className="space-y-4">
          <div className="rounded-lg border p-4">
            <h3 className="font-semibold mb-3">General Information</h3>
            <div className="grid grid-cols-2 gap-6 text-sm">
              {/* Left Column */}
              <div className="space-y-4">
                <div>
                  <span className="font-medium text-muted-foreground">
                    Process Name:
                  </span>
                  <p className="mt-1">
                    {businessProcess?.name || "Not specified"}
                  </p>
                </div>
                <div>
                  <span className="font-medium text-muted-foreground">
                    Department:
                  </span>
                  <p className="mt-1">
                    {businessProcess?.businessUnit?.name || "Not specified"}
                  </p>
                </div>
                <div>
                  <span className="font-medium text-muted-foreground">
                    Code:
                  </span>
                  <p className="mt-1">
                    {businessProcess?.code || "Not specified"}
                  </p>
                </div>
              </div>

              {/* Right Column */}
              <div className="space-y-4">
                <div>
                  <span className="font-medium text-muted-foreground">
                    Grant Description:
                  </span>
                  <p className="mt-1">
                    {businessProcess?.grantDescription ||
                      "No description provided"}
                  </p>
                </div>
                <div>
                  <span className="font-medium text-muted-foreground">
                    Revoke Description:
                  </span>
                  <p className="mt-1">
                    {businessProcess?.revokeDescription ||
                      "No description provided"}
                  </p>
                </div>
                <div>
                  <span className="font-medium text-muted-foreground">
                    Reconsent Description:
                  </span>
                  <p className="mt-1">
                    {businessProcess?.reconsentDescription ||
                      "No description provided"}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold">List of Purpose Masters</h3>

            {consentPurposeConfigs.length > 0 ? (
              <div className="border rounded-lg overflow-hidden">
                <Table>
                  <TableHeader className="bg-muted">
                    <TableRow className="p-2">
                      <TableHead className="whitespace-normal">
                        Name of Purpose Master
                      </TableHead>
                      <TableHead className="whitespace-normal">
                        Consent Duration
                      </TableHead>
                      <TableHead className="whitespace-normal">
                        Name of Purpose Sub Master
                      </TableHead>
                      <TableHead className="whitespace-normal">
                        Attributes
                      </TableHead>
                      <TableHead className="whitespace-normal">
                        Mandatory
                      </TableHead>
                      <TableHead className="whitespace-normal">
                        Re-consentable by Principal
                      </TableHead>
                      <TableHead className="whitespace-normal border-r py-2">
                        Revocable by Principal
                      </TableHead>
                      <TableHead className="whitespace-normal">
                        Retention Duration
                      </TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {consentPurposeConfigs.map((config: any) => {
                      // Get processing rules from the consent purpose relation
                      // The service layer now attaches the augmented rules (with value/unit) to the consent purpose
                      const rules =
                        config.consentPurpose?.businessProcessRules || [];

                      // If no processing rules, show one row with a message
                      if (rules.length === 0) {
                        return (
                          <TableRow key={`${config.id}-empty`}>
                            <TableCell className="font-medium border-r">
                              {config.consentPurpose?.name || "Unnamed Purpose"}
                            </TableCell>
                            <TableCell className="border-r">
                              {convertDurationToDays(config)}
                            </TableCell>
                            <TableCell
                              className="font-medium text-muted-foreground border-r"
                              colSpan={6}
                            >
                              No processing rules configured
                            </TableCell>
                          </TableRow>
                        );
                      }

                      // Normal rendering with processing rules
                      return rules.map((rule: any, ruleIndex: number) => (
                        <TableRow key={`${config.id}-${ruleIndex}`}>
                          {ruleIndex === 0 && (
                            <TableCell
                              rowSpan={rules.length}
                              className="font-medium border-r"
                            >
                              {config.consentPurpose?.name || "Unnamed Purpose"}{" "}
                              (v{config.consentPurpose?.version})
                            </TableCell>
                          )}
                          {ruleIndex === 0 && (
                            <TableCell
                              rowSpan={rules.length}
                              className="border-r"
                            >
                              {convertDurationToDays(config)}
                            </TableCell>
                          )}
                          <TableCell className="font-medium border-r">
                            {rule.processingPurpose?.name ||
                              "Unknown Processing Purpose"}
                          </TableCell>
                          <TableCell className="border-r">
                            <div className="flex flex-wrap gap-1">
                              {(
                                rule.processingPurpose?.userAttributeNames || []
                              ).map((attrName: string) => {
                                return (
                                  <Badge
                                    key={attrName}
                                    variant="outline"
                                    className="text-xs"
                                  >
                                    {attrName}
                                  </Badge>
                                );
                              })}
                              {(!rule.processingPurpose?.userAttributeNames ||
                                rule.processingPurpose.userAttributeNames
                                  .length === 0) && (
                                  <span className="text-xs text-muted-foreground">
                                    No attributes
                                  </span>
                                )}
                            </div>
                          </TableCell>
                          <TableCell className="text-center">
                            <Checkbox checked={rule.mandatory} disabled />
                          </TableCell>
                          <TableCell className="text-center">
                            <Checkbox
                              checked={rule.reconsentableByPrincipal}
                              disabled
                            />
                          </TableCell>
                          <TableCell className="text-center border-r">
                            <Checkbox
                              checked={rule.revocableByPrincipal}
                              disabled
                            />
                          </TableCell>
                          <TableCell>
                            {rule.retentionDurationValue &&
                              rule.retentionDurationUnit
                              ? `${rule.retentionDurationValue} ${rule.retentionDurationUnit}`
                              : "-"}
                          </TableCell>
                        </TableRow>
                      ));
                    })}
                  </TableBody>
                </Table>
              </div>
            ) : (
              <div className="rounded-lg border border-dashed p-8 text-center">
                <p className="text-sm text-muted-foreground">
                  No consent purposes selected
                </p>
              </div>
            )}
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold">List of Redirectional URLs</h3>

            {legalDocumentEntries.length > 0 ? (
              <div className="border rounded-lg overflow-hidden">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="bg-muted/30 border-r">
                        Redirectional URL Name
                      </TableHead>
                      <TableHead className="bg-muted/30">Link</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {legalDocumentEntries.map(([title, link], index) => (
                      <TableRow key={index} className="hover:bg-muted/20">
                        <TableCell className="border-r font-medium">
                          {title}
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <span
                              className="truncate max-w-[400px] text-sm"
                              title={link as string}
                            >
                              {link as string}
                            </span>
                            <Button
                              variant="ghost"
                              size="sm"
                              className="h-6 w-6 p-0"
                              onClick={() =>
                                window.open(link as string, "_blank")
                              }
                            >
                              <ExternalLink className="h-3 w-3" />
                            </Button>
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
                  No Redirectional URLs added
                </p>
              </div>
            )}
          </div>

          {/* Translations Section */}
          <div className="space-y-4">
            <h3 className="font-semibold">
              Translations (22 Indian Languages)
            </h3>

            {businessProcess?.supportedLanguages &&
              businessProcess.supportedLanguages.filter(
                (code: string) => code !== "en",
              ).length > 0 ? (
              <div className="rounded-lg border p-4">
                <div className="space-y-2">
                  {Object.entries(SUPPORTED_LANGUAGES)
                    .filter(
                      ([code]) =>
                        code !== "en" &&
                        businessProcess.supportedLanguages.includes(code),
                    )
                    .map(([langCode, lang]) => {
                      const translation =
                        businessProcess.translations?.[langCode];

                      return (
                        <div
                          key={langCode}
                          className="border-b last:border-b-0 pb-3 last:pb-0"
                        >
                          <div className="font-medium text-sm mb-2">
                            {lang.name} ({lang.nativeName})
                          </div>
                          <div className="pl-4 space-y-2 text-sm">
                            <div>
                              <span className="text-muted-foreground font-medium">
                                Name:
                              </span>{" "}
                              <span>{translation?.name || "-"}</span>
                            </div>
                            <div>
                              <span className="text-muted-foreground font-medium">
                                Grant Description:
                              </span>{" "}
                              <span className="text-xs">
                                {translation?.grantDescription || "-"}
                              </span>
                            </div>
                            {translation?.revokeDescription && (
                              <div>
                                <span className="text-muted-foreground font-medium">
                                  Revoke Description:
                                </span>{" "}
                                <span className="text-xs">
                                  {translation.revokeDescription}
                                </span>
                              </div>
                            )}
                            {translation?.reconsentDescription && (
                              <div>
                                <span className="text-muted-foreground font-medium">
                                  Reconsent Description:
                                </span>{" "}
                                <span className="text-xs">
                                  {translation.reconsentDescription}
                                </span>
                              </div>
                            )}
                          </div>
                        </div>
                      );
                    })}
                </div>
              </div>
            ) : (
              <div className="rounded-lg border border-dashed p-8 text-center">
                <p className="text-sm text-muted-foreground">
                  No translations available. Add translations from the edit
                  page.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
