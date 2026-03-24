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
import { LanguageCode, SUPPORTED_LANGUAGES, LANGUAGE_CODES } from "@/lib/types/languages";
import { useRouter } from "next/navigation";
import { useEffect, useState, useRef } from "react";
import { toast } from "sonner";
import { useBusinessProcessContext } from "@/contexts/business-process-context";
import { AutoTranslateButton } from "@/components/translations/auto-translate-button";
import { autoTranslateBusinessProcess, translateTextToLanguages } from "@/actions/auto-translate";

export interface StepData {
  businessProcess?: any;
  businessUnits?: any[];
  consentPurposes?: any[];
  dataProcessors?: any[];
  userAttributes?: any[];
}

interface Step4FormProps {
  data: StepData;
  isEdit: boolean;
  businessProcessId?: string;
}

export function Step4Form({ data, isEdit, businessProcessId }: Step4FormProps) {
  const router = useRouter();
  const { state, dispatch } = useBusinessProcessContext();

  // Get first non-English language (Assamese)
  const firstLanguage =
    (Object.keys(SUPPORTED_LANGUAGES).find(
      (code) => code !== "en"
    ) as LanguageCode) || "as";
  const [selectedLanguage, setSelectedLanguage] =
    useState<LanguageCode>(firstLanguage);

  // Business Process translations
  const [bpTranslations, setBpTranslations] = useState<
    Record<
      string,
      {
        name: string;
        grantDescription: string;
        revokeDescription: string;
        reconsentDescription: string;
      }
    >
  >({});

  // Track if this is the first render to avoid false positive change detection
  const isFirstRender = useRef(true);
  const prevEnglishDataRef = useRef<any>(null);

  // Initialize translations from existing data
  useEffect(() => {
    // First check if we have translations in context (user navigated back from Step 5)
    if (
      state.step4Data?.translations &&
      Object.keys(state.step4Data.translations).length > 0
    ) {
      const contextTranslations = state.step4Data.translations;
      const bpTrans: Record<
        string,
        {
          name: string;
          grantDescription: string;
          revokeDescription: string;
          reconsentDescription: string;
        }
      > = {};

      Object.entries(SUPPORTED_LANGUAGES).forEach(([langCode]) => {
        if (langCode !== "en" && contextTranslations[langCode]) {
          bpTrans[langCode] = {
            name: contextTranslations[langCode].name || "",
            grantDescription:
              contextTranslations[langCode].grantDescription || "",
            revokeDescription:
              contextTranslations[langCode].revokeDescription || "",
            reconsentDescription:
              contextTranslations[langCode].reconsentDescription || "",
          };
        }
      });
      setBpTranslations(bpTrans);
    } else if (data.businessProcess) {
      const bpTrans: Record<
        string,
        {
          name: string;
          grantDescription: string;
          revokeDescription: string;
          reconsentDescription: string;
        }
      > = {};

      Object.entries(SUPPORTED_LANGUAGES).forEach(([langCode]) => {
        if (langCode !== "en") {
          const trans = data.businessProcess.translations?.[langCode];
          bpTrans[langCode] = {
            name: trans?.name || "",
            grantDescription: trans?.grantDescription || "",
            revokeDescription: trans?.revokeDescription || "",
            reconsentDescription: trans?.reconsentDescription || "",
          };
        }
      });
      setBpTranslations(bpTrans);
    }
  }, [data, state.step4Data]);

  // Clear translations when English source data changes (skip first render)
  useEffect(() => {
    const currentEnglishData = state.step1Data || data.businessProcess;

    if (!currentEnglishData) return;

    // Skip comparison on first render, just store the initial data
    if (isFirstRender.current) {
      prevEnglishDataRef.current = {
        name: currentEnglishData.name,
        grantDescription: currentEnglishData.grantDescription,
        revokeDescription: currentEnglishData.revokeDescription,
        reconsentDescription: currentEnglishData.reconsentDescription,
      };
      isFirstRender.current = false;
      return;
    }

    // Now compare with previous data
    if (prevEnglishDataRef.current) {
      const nameChanged = currentEnglishData.name !== prevEnglishDataRef.current.name;
      const grantChanged = currentEnglishData.grantDescription !== prevEnglishDataRef.current.grantDescription;
      const revokeChanged = (currentEnglishData.revokeDescription || '') !== (prevEnglishDataRef.current.revokeDescription || '');
      const reconsentChanged = (currentEnglishData.reconsentDescription || '') !== (prevEnglishDataRef.current.reconsentDescription || '');

      if (nameChanged || grantChanged || revokeChanged || reconsentChanged) {
        // Clear all translations when source changes
        setBpTranslations({});
        toast.info("Source text changed. Please re-translate to update translations.");
      }
    }

    // Update stored data
    prevEnglishDataRef.current = {
      name: currentEnglishData.name,
      grantDescription: currentEnglishData.grantDescription,
      revokeDescription: currentEnglishData.revokeDescription,
      reconsentDescription: currentEnglishData.reconsentDescription,
    };
  }, [state.step1Data?.name, state.step1Data?.grantDescription, state.step1Data?.revokeDescription, state.step1Data?.reconsentDescription]);

  const handleTranslationChange = (
    lang: string,
    field:
      | "name"
      | "grantDescription"
      | "revokeDescription"
      | "reconsentDescription",
    value: string
  ) => {
    setBpTranslations((prev) => ({
      ...prev,
      [lang]: {
        ...prev[lang],
        [field]: value,
      },
    }));
  };

  // Get all languages except English for auto-translate
  const getTargetLanguages = (): LanguageCode[] => {
    return LANGUAGE_CODES.filter(lang => lang !== 'en');
  };

  // Get languages that already have translations
  const getExistingLanguages = (): LanguageCode[] => {
    return Object.keys(bpTranslations).filter(lang => {
      const trans = bpTranslations[lang];
      return trans.name || trans.grantDescription || trans.revokeDescription || trans.reconsentDescription;
    }) as LanguageCode[];
  };

  // Handle auto-translate
  const handleAutoTranslate = async (targetLanguages: LanguageCode[], sourceLanguage: LanguageCode) => {
    // Get English data from context (step1Data) or fallback to businessProcess
    const englishData = state.step1Data || data.businessProcess;

    if (!englishData || !englishData.name || !englishData.grantDescription) {
      toast.error("Please complete Step 1 with business process name and grant description first");
      return { error: "Business process data is required" };
    }

    // CREATE MODE: Use translateTextToLanguages for each field
    if (!isEdit) {
      try {
        // Translate name
        const nameResult = await translateTextToLanguages(englishData.name, targetLanguages, sourceLanguage);

        // Translate grantDescription
        const grantResult = await translateTextToLanguages(englishData.grantDescription, targetLanguages, sourceLanguage);

        // Translate revokeDescription if exists
        let revokeTranslations: Record<string, string> = {};
        if (englishData.revokeDescription?.trim()) {
          const revokeResult = await translateTextToLanguages(englishData.revokeDescription, targetLanguages, sourceLanguage);
          if (revokeResult.success && revokeResult.translations) {
            revokeTranslations = revokeResult.translations;
          }
        }

        // Translate reconsentDescription if exists
        let reconsentTranslations: Record<string, string> = {};
        if (englishData.reconsentDescription?.trim()) {
          const reconsentResult = await translateTextToLanguages(englishData.reconsentDescription, targetLanguages, sourceLanguage);
          if (reconsentResult.success && reconsentResult.translations) {
            reconsentTranslations = reconsentResult.translations;
          }
        }

        if (nameResult.success && grantResult.success && nameResult.translations && grantResult.translations) {
          // Update local translations state
          const newTranslations: Record<string, any> = {};
          targetLanguages.forEach(lang => {
            newTranslations[lang] = {
              name: nameResult.translations![lang] || "",
              grantDescription: grantResult.translations![lang] || "",
              revokeDescription: revokeTranslations[lang] || "",
              reconsentDescription: reconsentTranslations[lang] || "",
            };
          });

          setBpTranslations(prev => ({ ...prev, ...newTranslations }));

          const successCount = targetLanguages.length;
          toast.success(`Successfully translated to ${successCount} language${successCount > 1 ? 's' : ''}`);
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

    // EDIT MODE: Translate using latest context data, then update DB
    if (!businessProcessId) {
      toast.error("Business process ID not found");
      return { error: "Business process ID not found" };
    }

    try {
      // Use same approach as create mode - translate from context data
      // Translate name
      const nameResult = await translateTextToLanguages(englishData.name, targetLanguages, sourceLanguage);

      // Translate grantDescription
      const grantResult = await translateTextToLanguages(englishData.grantDescription, targetLanguages, sourceLanguage);

      // Translate revokeDescription if exists
      let revokeTranslations: Record<string, string> = {};
      if (englishData.revokeDescription?.trim()) {
        const revokeResult = await translateTextToLanguages(englishData.revokeDescription, targetLanguages, sourceLanguage);
        if (revokeResult.success && revokeResult.translations) {
          revokeTranslations = revokeResult.translations;
        }
      }

      // Translate reconsentDescription if exists
      let reconsentTranslations: Record<string, string> = {};
      if (englishData.reconsentDescription?.trim()) {
        const reconsentResult = await translateTextToLanguages(englishData.reconsentDescription, targetLanguages, sourceLanguage);
        if (reconsentResult.success && reconsentResult.translations) {
          reconsentTranslations = reconsentResult.translations;
        }
      }

      if (nameResult.success && grantResult.success && nameResult.translations && grantResult.translations) {
        // Update local translations state
        const newTranslations: Record<string, any> = {};
        targetLanguages.forEach(lang => {
          newTranslations[lang] = {
            name: nameResult.translations![lang] || "",
            grantDescription: grantResult.translations![lang] || "",
            revokeDescription: revokeTranslations[lang] || "",
            reconsentDescription: reconsentTranslations[lang] || "",
          };
        });

        setBpTranslations(prev => ({ ...prev, ...newTranslations }));

        // Update DB with new translations, passing the fresh context data
        const id = parseInt(businessProcessId);
        const updateResult = await autoTranslateBusinessProcess(
          id,
          targetLanguages,
          sourceLanguage,
          {
            name: englishData.name,
            grantDescription: englishData.grantDescription,
            revokeDescription: englishData.revokeDescription || null,
            reconsentDescription: englishData.reconsentDescription || null,
          }
        );

        const successCount = targetLanguages.length;
        toast.success(`Successfully translated to ${successCount} language${successCount > 1 ? 's' : ''}`);
        return { success: true };
      } else {
        toast.error("Translation failed");
        return { error: "Translation failed" };
      }
    } catch (error) {
      toast.error("Failed to translate");
      return { error: "Translation failed" };
    }
  };

  const handleSaveTranslations = () => {
    // Save translations to context only (no DB operations)
    const translationsForContext: Record<string, any> = {};

    // Get English translation from context (step1Data) or fallback to businessProcess
    const englishData = state.step1Data || data.businessProcess;

    if (!englishData) {
      console.error("No English data found in step1Data or businessProcess!");
      toast.error(
        "Missing business process data. Please complete Step 1 first."
      );
      return;
    }

    // Add English translation from step1Data
    translationsForContext.en = {
      name: englishData.name,
      grantDescription: englishData.grantDescription,
      revokeDescription: englishData.revokeDescription || null,
      reconsentDescription: englishData.reconsentDescription || null,
    };

    // Add other language translations
    Object.entries(bpTranslations).forEach(([lang, trans]) => {
      if (
        lang !== "en" &&
        ((trans.name || "").trim() ||
          (trans.grantDescription || "").trim() ||
          (trans.revokeDescription || "").trim() ||
          (trans.reconsentDescription || "").trim())
      ) {
        translationsForContext[lang] = {
          name: (trans.name || "").trim() || null,
          grantDescription: (trans.grantDescription || "").trim() || null,
          revokeDescription: (trans.revokeDescription || "").trim() || null,
          reconsentDescription: (trans.reconsentDescription || "").trim() || null,
        };
      }
    });

    // Save to context
    dispatch({
      type: "SET_STEP4_DATA",
      payload: { translations: translationsForContext },
    });

    toast.success("Translations saved to draft");
  };

  const handleNext = () => {
    // Save translations to context only (no DB operations)
    const translationsForContext: Record<string, any> = {};

    // Get English translation from context (step1Data) or fallback to businessProcess
    const englishData = state.step1Data || data.businessProcess;

    if (!englishData) {
      console.error("No English data found in step1Data or businessProcess!");
      toast.error(
        "Missing business process data. Please complete Step 1 first."
      );
      return;
    }

    // Add English translation from step1Data
    translationsForContext.en = {
      name: englishData.name,
      grantDescription: englishData.grantDescription,
      revokeDescription: englishData.revokeDescription || null,
      reconsentDescription: englishData.reconsentDescription || null,
    };

    // Add other language translations
    Object.entries(bpTranslations).forEach(([lang, trans]) => {
      if (
        lang !== "en" &&
        ((trans.name || "").trim() ||
          (trans.grantDescription || "").trim() ||
          (trans.revokeDescription || "").trim() ||
          (trans.reconsentDescription || "").trim())
      ) {
        translationsForContext[lang] = {
          name: (trans.name || "").trim() || null,
          grantDescription: (trans.grantDescription || "").trim() || null,
          revokeDescription: (trans.revokeDescription || "").trim() || null,
          reconsentDescription: (trans.reconsentDescription || "").trim() || null,
        };
      }
    });

    // Save to context
    dispatch({
      type: "SET_STEP4_DATA",
      payload: { translations: translationsForContext },
    });

    // Navigate to next step (no DB operations)
    const params = new URLSearchParams();
    params.set("step", "5");
    if (businessProcessId) {
      params.set("id", businessProcessId);
    }

    const basePath = isEdit
      ? `/cms/data-fiduciary/business-processes/${businessProcessId}/edit`
      : `/cms/data-fiduciary/business-processes/new`;

    router.push(`${basePath}?${params.toString()}`);
  };

  const handlePrevious = () => {
    const params = new URLSearchParams();
    params.set("step", "3");
    if (businessProcessId) {
      params.set("id", businessProcessId);
    }

    const basePath = isEdit
      ? `/cms/data-fiduciary/business-processes/${businessProcessId}/edit`
      : `/cms/data-fiduciary/business-processes/new`;

    router.push(`${basePath}?${params.toString()}`);
  };

  const selectedLangInfo = SUPPORTED_LANGUAGES[selectedLanguage];
  const translatedCount = Object.values(bpTranslations).filter(
    (t) =>
      (t.name || "").trim() ||
      (t.grantDescription || "").trim() ||
      (t.revokeDescription || "").trim() ||
      (t.reconsentDescription || "").trim()
  ).length;

  return (
    <div className="h-full flex flex-col">
      {/* Header - Fixed */}
      <div className="border-b px-6 py-5 shrink-0">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-3">
            <h2 className="text-2xl font-bold tracking-tight">
              Step 4. Translate
            </h2>
            <AutoTranslateButton
              targetLanguages={getTargetLanguages()}
              existingLanguages={getExistingLanguages()}
              sourceLanguage="en"
              onTranslate={handleAutoTranslate}
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
          Add translations for business process in 22 Indian languages
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
                        {(bpTranslations[langCode]?.name ||
                          bpTranslations[langCode]?.grantDescription ||
                          bpTranslations[langCode]?.revokeDescription ||
                          bpTranslations[langCode]?.reconsentDescription) && (
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
            {/* Business Process Translation */}
            <div className="space-y-4 rounded-lg border p-4">
              <div>
                <h4 className="font-semibold mb-2">Business Process Name</h4>
                <Input
                  placeholder={`Enter name in ${selectedLangInfo.name}`}
                  value={bpTranslations[selectedLanguage]?.name || ""}
                  onChange={(e) =>
                    handleTranslationChange(
                      selectedLanguage,
                      "name",
                      e.target.value
                    )
                  }
                />
              </div>

              <div>
                <h4 className="font-semibold mb-2">Grant Description</h4>
                <Textarea
                  placeholder={`Enter grant description in ${selectedLangInfo.name}`}
                  value={
                    bpTranslations[selectedLanguage]?.grantDescription || ""
                  }
                  onChange={(e) =>
                    handleTranslationChange(
                      selectedLanguage,
                      "grantDescription",
                      e.target.value
                    )
                  }
                  rows={4}
                />
              </div>

              <div>
                <h4 className="font-semibold mb-2">
                  Revoke Description (Optional)
                </h4>
                <Textarea
                  placeholder={`Enter revoke description in ${selectedLangInfo.name}`}
                  value={
                    bpTranslations[selectedLanguage]?.revokeDescription || ""
                  }
                  onChange={(e) =>
                    handleTranslationChange(
                      selectedLanguage,
                      "revokeDescription",
                      e.target.value
                    )
                  }
                  rows={3}
                />
              </div>

              <div>
                <h4 className="font-semibold mb-2">
                  Reconsent Description (Optional)
                </h4>
                <Textarea
                  placeholder={`Enter reconsent description in ${selectedLangInfo.name}`}
                  value={
                    bpTranslations[selectedLanguage]?.reconsentDescription || ""
                  }
                  onChange={(e) =>
                    handleTranslationChange(
                      selectedLanguage,
                      "reconsentDescription",
                      e.target.value
                    )
                  }
                  rows={3}
                />
              </div>
            </div>

            {/* Save Button */}
            <div className="pt-4">
              <Button
                type="button"
                variant="outline"
                onClick={handleSaveTranslations}
                className="w-full"
              >
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
          <Button type="button" onClick={handleNext} className="min-w-[100px]">
            Save and Continue
          </Button>
        </div>
      </div>
    </div>
  );
}
