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
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useConsentPurposeForm } from "@/contexts/consent-purpose-context";
import { LanguageCode, SUPPORTED_LANGUAGES, LANGUAGE_CODES } from "@/lib/types/languages";
import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useMemo, useState, useRef } from "react";
import { toast } from "sonner";
import { AutoTranslateButton } from "@/components/translations/auto-translate-button";
import { autoTranslateConsentPurpose, autoTranslateProcessingPurpose, translateTextToLanguages } from "@/actions/auto-translate";

export interface StepData {
  consentPurpose?: any;
  processingPurposes?: any[];
  dataProcessorMappings?: any[];
  userAttributes?: any[];
  purposesOfProcessing?: any[];
  dataProcessors?: any[];
}

interface Step4FormProps {
  data: StepData;
  isEdit: boolean;
  consentPurposeId?: string;
}

export function Step4Form({ data, isEdit, consentPurposeId }: Step4FormProps) {
  const router = useRouter();
  const { state: providerState, dispatch } = useConsentPurposeForm();
  const [isLoading, setIsLoading] = useState(false);

  // For translations, use data.processingPurposes directly (has fresh DB data with translations)
  // Don't use context here because context is for tracking Step 2 changes, not for translations
  const processingPurposes = useMemo(() => {
    const pps = data.processingPurposes || [];

    return pps;
  }, [data.processingPurposes]);

  // Get first language alphabetically (after excluding English)
  const firstLanguage =
    (Object.entries(SUPPORTED_LANGUAGES)
      .filter(([code]) => code !== "en")
      .sort(([, a], [, b]) =>
        a.name.localeCompare(b.name)
      )[0]?.[0] as LanguageCode) || "hi";
  const [selectedLanguage, setSelectedLanguage] =
    useState<LanguageCode>(firstLanguage);

  // Consent Purpose translations
  const [cpTranslations, setCpTranslations] = useState<
    Record<string, { name: string; description: string }>
  >({});

  // Processing Purpose translations - keyed by processing purpose ref (id, tempId, or code)
  const [ppTranslations, setPpTranslations] = useState<
    Record<string, Record<string, { name: string; description: string }>>
  >({});

  // Track if this is the first render to avoid false positive change detection
  const isFirstRender = useRef(true);
  const prevCpEnglishDataRef = useRef<any>(null);

  // Initialize translations from context or database data
  useEffect(() => {
    // Helper to check if translations object has actual values
    const hasActualTranslations = (
      trans: Record<string, { name: string; description: string }>
    ) => {
      return Object.values(trans).some(
        (t) => t.name.trim() || t.description.trim()
      );
    };

    const hasActualPPTranslations = (
      trans: Record<
        string,
        Record<string, { name: string; description: string }>
      >
    ) => {
      return Object.values(trans).some((ppTrans) =>
        Object.values(ppTrans).some(
          (t) => t.name.trim() || t.description.trim()
        )
      );
    };

    // Check if we have actual data in context (user already filled this step)
    if (
      hasActualTranslations(providerState.step4Data.cpTranslations) ||
      hasActualPPTranslations(providerState.step4Data.ppTranslations)
    ) {
      // Load from context
      setCpTranslations(providerState.step4Data.cpTranslations);
      setPpTranslations(providerState.step4Data.ppTranslations);
    } else if (data.consentPurpose) {
      // Load from database
      // Load consent purpose translations
      const cpTrans: Record<string, { name: string; description: string }> = {};
      Object.entries(SUPPORTED_LANGUAGES).forEach(([langCode]) => {
        if (langCode !== "en") {
          const trans = data.consentPurpose.translations?.[langCode];
          cpTrans[langCode] = {
            name: trans?.name || "",
            description: trans?.description || "",
          };
        }
      });
      setCpTranslations(cpTrans);

      // Load processing purpose translations from the current processingPurposes list
      if (processingPurposes.length > 0) {
        const ppTrans: Record<
          string,
          Record<string, { name: string; description: string }>
        > = {};
        processingPurposes.forEach((pp: any) => {
          // Use ref: id (if exists), tempId, or code
          const ppRef = pp.id
            ? pp.id.toString()
            : pp.tempId || pp.purposeOfProcessingCode || "";
          ppTrans[ppRef] = {};
          Object.entries(SUPPORTED_LANGUAGES).forEach(([langCode]) => {
            if (langCode !== "en") {
              const trans = pp.translations?.[langCode];
              ppTrans[ppRef][langCode] = {
                name: trans?.name || "",
                description: trans?.description || "",
              };
            }
          });
        });
        setPpTranslations(ppTrans);
      }
    }
  }, [data.consentPurpose, providerState.step4Data]);

  // Clear translations when CP English source data changes (skip first render)
  useEffect(() => {
    const currentCpData = providerState.step1Data || data.consentPurpose;

    if (!currentCpData) return;

    // Skip comparison on first render, just store the initial data
    if (isFirstRender.current) {
      prevCpEnglishDataRef.current = {
        name: currentCpData.name,
        description: currentCpData.description,
      };
      isFirstRender.current = false;
      return;
    }

    // Now compare with previous data
    if (prevCpEnglishDataRef.current) {
      const nameChanged = currentCpData.name !== prevCpEnglishDataRef.current.name;
      const descChanged = (currentCpData.description || '') !== (prevCpEnglishDataRef.current.description || '');

      if (nameChanged || descChanged) {
        setCpTranslations({});
        toast.info("Consent purpose changed. Please re-translate.");
      }
    }

    // Update stored data
    prevCpEnglishDataRef.current = {
      name: currentCpData.name,
      description: currentCpData.description,
    };
  }, [providerState.step1Data?.name, providerState.step1Data?.description]);

  const handleCpTranslationChange = (
    lang: string,
    field: "name" | "description",
    value: string
  ) => {
    setCpTranslations((prev) => ({
      ...prev,
      [lang]: {
        ...prev[lang],
        [field]: value,
      },
    }));
  };

  const handlePpTranslationChange = (
    ppRef: string,
    lang: string,
    field: "name" | "description",
    value: string
  ) => {
    setPpTranslations((prev) => ({
      ...prev,
      [ppRef]: {
        ...prev[ppRef],
        [lang]: {
          ...prev[ppRef]?.[lang],
          [field]: value,
        },
      },
    }));
  };

  const handleSaveTranslations = () => {
    // Save translations to context state
    dispatch({
      type: "SET_STEP4_DATA",
      payload: {
        cpTranslations,
        ppTranslations,
      },
    });

    toast.success("Translations saved to draft");
  };

  // Get all languages except English for auto-translate
  const getTargetLanguages = (): LanguageCode[] => {
    return LANGUAGE_CODES.filter(lang => lang !== 'en');
  };

  // Get languages that already have CP translations
  const getExistingCpLanguages = (): LanguageCode[] => {
    return Object.keys(cpTranslations).filter(lang => {
      const trans = cpTranslations[lang];
      return trans.name || trans.description;
    }) as LanguageCode[];
  };

  // Handle auto-translate for both CP and PPs together
  const handleAutoTranslateAll = async (targetLanguages: LanguageCode[], sourceLanguage: LanguageCode) => {
    // First translate CP, then translate all PPs
    const cpResult = await handleAutoTranslateCP(targetLanguages, sourceLanguage);

    if (processingPurposes.length > 0) {
      const ppResult = await handleAutoTranslatePPs(targetLanguages, sourceLanguage);

      // Return combined result
      if (cpResult.success && ppResult.success) {
        return { success: true };
      } else if (cpResult.success || ppResult.success) {
        return { success: true, errors: ['Partial success'] };
      } else {
        return { error: 'Translation failed' };
      }
    }

    return cpResult;
  };

  // Handle auto-translate for Consent Purpose only
  const handleAutoTranslateCP = async (targetLanguages: LanguageCode[], sourceLanguage: LanguageCode) => {
    // Get CP data from context (step1Data) or database
    const cpData = providerState.step1Data || data.consentPurpose;

    if (!cpData || !cpData.name?.trim()) {
      toast.error("Please complete Step 1 with consent purpose name first");
      return { error: "Consent purpose name is required" };
    }

    // CREATE MODE: Use translateTextToLanguages
    if (!isEdit) {
      try {
        // Translate name
        const nameResult = await translateTextToLanguages(cpData.name, targetLanguages, sourceLanguage);

        // Translate description if exists
        let descTranslations: Record<string, string> = {};
        if (cpData.description?.trim()) {
          const descResult = await translateTextToLanguages(cpData.description, targetLanguages, sourceLanguage);
          if (descResult.success && descResult.translations) {
            descTranslations = descResult.translations;
          }
        }

        if (nameResult.success && nameResult.translations) {
          // Update local translations state
          const newTranslations: Record<string, any> = {};
          targetLanguages.forEach(lang => {
            newTranslations[lang] = {
              name: nameResult.translations![lang] || "",
              description: descTranslations[lang] || "",
            };
          });

          setCpTranslations(prev => ({ ...prev, ...newTranslations }));

          const successCount = targetLanguages.length;
          toast.success(`Successfully translated consent purpose to ${successCount} language${successCount > 1 ? 's' : ''}`);
          return { success: true };
        } else {
          toast.error("Translation failed");
          return { error: "Translation failed" };
        }
      } catch (error) {
        toast.error("Failed to translate");
        return { error: "Translation failed" };
      }
    }

    // EDIT MODE: Update database with translations, passing fresh context data
    if (!consentPurposeId) {
      toast.error("Consent purpose ID not found");
      return { error: "Consent purpose ID not found" };
    }

    const id = parseInt(consentPurposeId);
    const result = await autoTranslateConsentPurpose(
      id,
      targetLanguages,
      sourceLanguage,
      {
        name: cpData.name,
        description: cpData.description || null,
      }
    );

    if (result.success && result.translations) {
      // Update local translations state
      const newTranslations: Record<string, any> = {};
      Object.entries(result.translations).forEach(([lang, trans]: [string, any]) => {
        if (lang !== "en") {
          newTranslations[lang] = {
            name: trans?.name || "",
            description: trans?.description || "",
          };
        }
      });
      setCpTranslations(prev => ({ ...prev, ...newTranslations }));
    }

    return result;
  };

  // Handle auto-translate for Processing Purposes
  const handleAutoTranslatePPs = async (targetLanguages: LanguageCode[], sourceLanguage: LanguageCode) => {
    if (processingPurposes.length === 0) {
      toast.error("No processing purposes to translate. Please add them in Step 2.");
      return { error: "No processing purposes found" };
    }

    // CREATE MODE or EDIT MODE: Translate each processing purpose
    let successCount = 0;
    let errorCount = 0;

    for (const pp of processingPurposes) {
      const ppRef = pp.id?.toString() || pp.tempId || pp.purposeOfProcessingCode || "";

      if (!pp.name?.trim()) {
        errorCount++;
        continue;
      }

      // EDIT MODE with ID: Use server-side translation with fresh context data
      if (isEdit && pp.id) {
        try {
          const result = await autoTranslateProcessingPurpose(
            pp.id,
            targetLanguages,
            sourceLanguage,
            {
              name: pp.name,
              description: pp.description || null,
            }
          );

          if (result.success && result.translations) {
            // Update local state
            const newPPTranslations: Record<string, any> = {};
            Object.entries(result.translations).forEach(([lang, trans]: [string, any]) => {
              if (lang !== "en") {
                newPPTranslations[lang] = {
                  name: trans?.name || "",
                  description: trans?.description || "",
                };
              }
            });

            setPpTranslations(prev => ({
              ...prev,
              [ppRef]: { ...prev[ppRef], ...newPPTranslations }
            }));
            successCount++;
          } else {
            errorCount++;
          }
        } catch (error) {
          errorCount++;
        }
      } else {
        // CREATE MODE or no ID: Use translateTextToLanguages
        try {
          // Translate name
          const nameResult = await translateTextToLanguages(pp.name, targetLanguages, sourceLanguage);

          // Translate description if exists
          let descTranslations: Record<string, string> = {};
          if (pp.description?.trim()) {
            const descResult = await translateTextToLanguages(pp.description, targetLanguages, sourceLanguage);
            if (descResult.success && descResult.translations) {
              descTranslations = descResult.translations;
            }
          }

          if (nameResult.success && nameResult.translations) {
            // Update local state
            const newPPTranslations: Record<string, any> = {};
            targetLanguages.forEach(lang => {
              newPPTranslations[lang] = {
                name: nameResult.translations![lang] || "",
                description: descTranslations[lang] || "",
              };
            });

            setPpTranslations(prev => ({
              ...prev,
              [ppRef]: { ...prev[ppRef], ...newPPTranslations }
            }));
            successCount++;
          } else {
            errorCount++;
          }
        } catch (error) {
          errorCount++;
        }
      }
    }

    if (successCount > 0) {
      toast.success(`Successfully translated ${successCount} processing purpose${successCount > 1 ? 's' : ''}`);
      return { success: true, translatedCount: successCount };
    } else {
      toast.error("Failed to translate processing purposes");
      return { error: "Translation failed" };
    }
  };

  const handleNext = async () => {
    // Save translations to context state
    dispatch({
      type: "SET_STEP4_DATA",
      payload: {
        cpTranslations,
        ppTranslations,
      },
    });

    toast.success("Translations saved");

    const params = new URLSearchParams();
    params.set("step", "5");
    if (consentPurposeId) {
      params.set("id", consentPurposeId);
    }

    const basePath =
      isEdit && consentPurposeId
        ? `/cms/data-fiduciary/consent-purposes/${consentPurposeId}/edit`
        : `/cms/data-fiduciary/consent-purposes/new`;

    router.push(`${basePath}?${params.toString()}`);
  };

  const handlePrevious = () => {
    const params = new URLSearchParams();
    params.set("step", "3");
    if (consentPurposeId) {
      params.set("id", consentPurposeId);
    }

    const basePath =
      isEdit && consentPurposeId
        ? `/cms/data-fiduciary/consent-purposes/${consentPurposeId}/edit`
        : `/cms/data-fiduciary/consent-purposes/new`;

    router.push(`${basePath}?${params.toString()}`);
  };

  const selectedLangInfo = SUPPORTED_LANGUAGES[selectedLanguage];
  const translatedCount = Object.values(cpTranslations).filter(
    (t) => (t.name || "").trim() || (t.description || "").trim()
  ).length;

  return (
    <div className="h-full flex flex-col">
      {/* Header - Fixed */}
      <div className="border-b px-6 py-5 shrink-0">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-3">
            <h2 className="text-2xl font-bold tracking-tight">
              Step 4. Translations
            </h2>
            <AutoTranslateButton
              targetLanguages={getTargetLanguages()}
              existingLanguages={getExistingCpLanguages()}
              sourceLanguage="en"
              onTranslate={handleAutoTranslateAll}
              variant="default"
              size="sm"
              showLabel={true}
            />
          </div>
          <span className="text-sm text-muted-foreground">
            Translated {translatedCount} / 22
          </span>
        </div>
        <p className="text-muted-foreground">
          Add translations for consent purpose and processing purposes in 22 Indian languages
        </p>
      </div>

      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto">
        <div className="grid grid-cols-4 h-full">
          {/* Language List - Left Sidebar */}
          <div className="border-r bg-muted/20">
            <div className="p-4">
              <h3 className="font-semibold mb-3 text-sm">Select Language</h3>
              <div className="space-y-1">
                {Object.entries(SUPPORTED_LANGUAGES)
                  .filter(([code]) => code !== "en")
                  .sort(([, a], [, b]) => a.name.localeCompare(b.name)) // Sort alphabetically by English name
                  .map(([langCode, lang], index) => (
                    <button
                      key={langCode}
                      type="button"
                      onClick={() =>
                        setSelectedLanguage(langCode as LanguageCode)
                      }
                      className={`w-full text-left px-3 py-2 rounded-md text-sm transition-colors ${selectedLanguage === langCode
                          ? "bg-primary text-primary-foreground"
                          : "hover:bg-muted"
                        }`}
                    >
                      <div className="flex items-center justify-between">
                        <span>
                          {index + 1}. {lang.name} ({lang.nativeName})
                        </span>
                        {(cpTranslations[langCode]?.name ||
                          cpTranslations[langCode]?.description) && (
                            <div className="h-2 w-2 rounded-full bg-green-500" />
                          )}
                      </div>
                    </button>
                  ))}
              </div>
            </div>
          </div>

          {/* Translation Forms - Right Side */}
          <div className="col-span-3 p-6 space-y-6">
            {/* View in English Toggle */}
            <div className="flex items-center justify-between">
              <h3 className="font-semibold text-lg">
                {selectedLangInfo.name} ({selectedLangInfo.nativeName})
              </h3>
            </div>

            {/* Consent Purpose Translation */}
            <div className="space-y-4 rounded-lg border p-4">
              <h4 className="font-semibold">Purpose Master Name</h4>
              <Input
                placeholder={`Enter name in ${selectedLangInfo.name}`}
                value={cpTranslations[selectedLanguage]?.name || ""}
                onChange={(e) =>
                  handleCpTranslationChange(
                    selectedLanguage,
                    "name",
                    e.target.value
                  )
                }
              />

              <h4 className="font-semibold mt-4">
                Purpose Master Description
              </h4>
              <Textarea
                placeholder={`Enter description in ${selectedLangInfo.name}`}
                value={cpTranslations[selectedLanguage]?.description || ""}
                onChange={(e) =>
                  handleCpTranslationChange(
                    selectedLanguage,
                    "description",
                    e.target.value
                  )
                }
                rows={4}
              />
            </div>

            {/* Processing Purposes Translations */}
            {processingPurposes && processingPurposes.length > 0 && (
              <div className="space-y-4">
                <h4 className="font-semibold">
                  List of Purpose Sub Masters
                </h4>
                {processingPurposes.map((pp: any, index: number) => {
                  // Get processing purpose ref (id, tempId, or code)
                  const ppRef = pp.id
                    ? pp.id.toString()
                    : pp.tempId || pp.purposeOfProcessingCode || "";

                  return (
                    <div
                      key={ppRef}
                      className="rounded-lg border p-4 space-y-4"
                    >
                      <div className="flex items-center gap-2">
                        <div className="flex items-center justify-center w-6 h-6 rounded-full bg-muted text-xs font-medium">
                          {index + 1}
                        </div>
                        <h5 className="font-medium text-sm">{pp.name}</h5>
                      </div>

                      <div>
                        <label className="text-sm font-medium">
                          Purpose Sub Master Name
                        </label>
                        <Input
                          placeholder={`Enter name in ${selectedLangInfo.name}`}
                          value={
                            ppTranslations[ppRef]?.[selectedLanguage]?.name ||
                            ""
                          }
                          onChange={(e) =>
                            handlePpTranslationChange(
                              ppRef,
                              selectedLanguage,
                              "name",
                              e.target.value
                            )
                          }
                          className="mt-1"
                        />
                      </div>

                      <div>
                        <label className="text-sm font-medium">
                          Purpose Sub Master Description
                        </label>
                        <Textarea
                          placeholder={`Enter description in ${selectedLangInfo.name}`}
                          value={
                            ppTranslations[ppRef]?.[selectedLanguage]
                              ?.description || ""
                          }
                          onChange={(e) =>
                            handlePpTranslationChange(
                              ppRef,
                              selectedLanguage,
                              "description",
                              e.target.value
                            )
                          }
                          rows={3}
                          className="mt-1"
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            )}

            {/* Save Button */}
            <div className="pt-4">
              <Button
                type="button"
                variant="outline"
                onClick={handleSaveTranslations}
                disabled={isLoading}
                className="w-full"
              >
                {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                Save Translations
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Sticky Bottom Buttons */}
      <div className="shrink-0 px-6 py-4 border-t bg-background sticky bottom-0">
        <div className="flex gap-3 justify-between">
          <Button type="button" variant="outline" onClick={handlePrevious}>
            Previous
          </Button>
          <Button
            type="button"
            onClick={handleNext}
            className="min-w-[100px]"
            disabled={isLoading}
          >
            {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            Save and Continue
          </Button>
        </div>
      </div>
    </div>
  );
}
