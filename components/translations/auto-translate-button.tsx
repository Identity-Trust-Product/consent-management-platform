"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Languages, Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { ScrollArea } from "@/components/ui/scroll-area";
import { LanguageCode, SUPPORTED_LANGUAGES } from "@/lib/types/languages";
import { UNSUPPORTED_LANGUAGES, getFallbackLanguage, hasDirectTranslateSupport } from "@/lib/constants/google-translate-mapping";
import { toast } from "sonner";

interface AutoTranslateButtonProps {
  /**
   * Languages to translate to (excluding source language)
   */
  targetLanguages: LanguageCode[];
  
  /**
   * Languages that already have translations (for default selection)
   */
  existingLanguages?: LanguageCode[];
  
  /**
   * Source language (defaults to 'en')
   */
  sourceLanguage?: LanguageCode;
  
  /**
   * Callback function that performs the translation
   * Should return { success: boolean, translations?: any, errors?: string[] }
   */
  onTranslate: (targetLanguages: LanguageCode[], sourceLanguage: LanguageCode) => Promise<{
    success?: boolean;
    translations?: Record<string, any>;
    translatedCount?: number;
    errors?: string[];
    error?: string;
  }>;
  
  /**
   * Callback after successful translation
   */
  onSuccess?: () => void;
  
  /**
   * Button variant
   */
  variant?: "default" | "outline" | "secondary" | "ghost";
  
  /**
   * Button size
   */
  size?: "default" | "sm" | "lg" | "icon";
  
  /**
   * Show text label (defaults to true)
   */
  showLabel?: boolean;
  
  /**
   * Custom button text
   */
  label?: string;
  
  /**
   * Disabled state
   */
  disabled?: boolean;
}

export function AutoTranslateButton({
  targetLanguages,
  existingLanguages = [],
  sourceLanguage = "en",
  onTranslate,
  onSuccess,
  variant = "outline",
  size = "default",
  showLabel = true,
  label = "Auto-Translate",
  disabled = false,
}: AutoTranslateButtonProps) {
  const [isTranslating, setIsTranslating] = useState(false);
  const [showConfirmDialog, setShowConfirmDialog] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentLanguage, setCurrentLanguage] = useState<string>("");
  const [selectedLanguages, setSelectedLanguages] = useState<Set<LanguageCode>>(new Set(existingLanguages));

  const handleTranslate = async () => {
    const languagesToTranslate = Array.from(selectedLanguages);
    
    if (languagesToTranslate.length === 0) {
      toast.error("Please select at least one language to translate");
      return;
    }

    setShowConfirmDialog(false);
    setIsTranslating(true);
    setProgress(0);
    setCurrentLanguage("");

    try {
      // Calculate progress based on actual translation count
      const totalLanguages = languagesToTranslate.length;
      let completed = 0;
      
      const progressInterval = setInterval(() => {
        completed += 1;
        const newProgress = Math.min((completed / totalLanguages) * 90, 90);
        setProgress(newProgress);
      }, 200);

      const result = await onTranslate(languagesToTranslate, sourceLanguage);

      clearInterval(progressInterval);
      setProgress(100);

      if (result.success) {
        const count = result.translatedCount || targetLanguages.length;
        toast.success(`Successfully translated to ${count} language${count > 1 ? 's' : ''}`);
        
        if (result.errors && result.errors.length > 0) {
          toast.warning(`Some translations failed: ${result.errors.join(", ")}`);
        }
        
        onSuccess?.();
      } else {
        toast.error(result.error || "Translation failed");
      }
    } catch (error) {
      toast.error("An error occurred during translation");
      console.error("Auto-translate error:", error);
    } finally {
      setIsTranslating(false);
      setProgress(0);
      setCurrentLanguage("");
    }
  };

  const openConfirmDialog = () => {
    if (targetLanguages.length === 0) {
      toast.error("No target languages specified");
      return;
    }
    // Reset selection to existing languages (or none if no existing translations)
    setSelectedLanguages(new Set(existingLanguages));
    setShowConfirmDialog(true);
  };

  const toggleLanguage = (langCode: LanguageCode) => {
    setSelectedLanguages(prev => {
      const newSet = new Set(prev);
      if (newSet.has(langCode)) {
        newSet.delete(langCode);
      } else {
        newSet.add(langCode);
      }
      return newSet;
    });
  };

  const toggleAll = () => {
    if (selectedLanguages.size === targetLanguages.length) {
      setSelectedLanguages(new Set());
    } else {
      setSelectedLanguages(new Set(targetLanguages));
    }
  };

  // Get languages with approximations
  const getApproximations = () => {
    const approximations: Array<{ lang: LanguageCode, fallback: string }> = [];
    targetLanguages.forEach(lang => {
      if (!hasDirectTranslateSupport(lang)) {
        const fallback = getFallbackLanguage(lang);
        if (fallback && fallback !== 'en') {
          const fallbackName = SUPPORTED_LANGUAGES[fallback]?.name || fallback;
          approximations.push({ lang, fallback: fallbackName });
        }
      }
    });
    return approximations;
  };

  return (
    <>
      <Button
        type="button"
        variant={variant}
        size={size}
        onClick={openConfirmDialog}
        disabled={disabled || isTranslating || targetLanguages.length === 0}
      >
        {isTranslating ? (
          <Loader2 className="h-4 w-4 animate-spin" />
        ) : (
          <Languages className="h-4 w-4" />
        )}
        {showLabel && (
          <span className="ml-2">
            {isTranslating ? "Translating..." : label}
          </span>
        )}
      </Button>

      {/* Confirmation Dialog */}
      <Dialog open={showConfirmDialog} onOpenChange={setShowConfirmDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <Languages className="h-5 w-5" />
              Auto-Translate Confirmation
            </DialogTitle>
            <DialogDescription>
              Select languages to automatically translate from{" "}
              <strong>{SUPPORTED_LANGUAGES[sourceLanguage].name}</strong> using Google Translate:
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-4">
            {/* Select All Checkbox */}
            <div className="flex items-center gap-2 pb-2 border-b">
              <Checkbox 
                id="select-all"
                checked={selectedLanguages.size === targetLanguages.length}
                onCheckedChange={toggleAll}
              />
              <Label htmlFor="select-all" className="font-medium cursor-pointer">
                Select All ({selectedLanguages.size}/{targetLanguages.length})
              </Label>
            </div>

            {/* Language Selection */}
            <ScrollArea className="h-[250px] pr-4">
              <div className="space-y-2">
                {targetLanguages.map((lang) => {
                  const isUnsupported = !hasDirectTranslateSupport(lang);
                  const fallbackLang = isUnsupported ? getFallbackLanguage(lang) : null;
                  
                  return (
                    <div key={lang} className="flex items-start gap-2">
                      <Checkbox 
                        id={`lang-${lang}`}
                        checked={selectedLanguages.has(lang)}
                        onCheckedChange={() => toggleLanguage(lang)}
                        className="mt-0.5"
                      />
                      <Label htmlFor={`lang-${lang}`} className="cursor-pointer flex-1">
                        <div className="flex items-center gap-2">
                          <span>{SUPPORTED_LANGUAGES[lang].nativeName}</span>
                          <span className="text-xs text-muted-foreground">
                            ({SUPPORTED_LANGUAGES[lang].name})
                          </span>
                          {isUnsupported && fallbackLang && fallbackLang !== 'en' && (
                            <Badge variant="outline" className="text-xs">
                              → {SUPPORTED_LANGUAGES[fallbackLang]?.name}
                            </Badge>
                          )}
                        </div>
                      </Label>
                    </div>
                  );
                })}
              </div>
            </ScrollArea>

            {/* Warning */}
            <div className="flex items-start gap-2 p-3 bg-yellow-50 dark:bg-yellow-950/20 border border-yellow-200 dark:border-yellow-900 rounded-md">
              <AlertCircle className="h-4 w-4 text-yellow-600 dark:text-yellow-500 mt-0.5 shrink-0" />
              <div className="text-sm text-yellow-800 dark:text-yellow-200">
                <p className="font-medium">Important Notes:</p>
                <ul className="list-disc list-inside mt-1 space-y-1">
                  <li>Auto-translations may not be perfect</li>
                  <li>Please review and edit translations as needed</li>
                  <li>Existing translations will be overwritten</li>
                  {getApproximations().length > 0 && (
                    <li>
                      <span className="font-medium">Language Approximations:</span>
                      {getApproximations().map(({ lang, fallback }, idx) => (
                        <span key={lang}>
                          {idx === 0 ? ' ' : ', '}
                          {SUPPORTED_LANGUAGES[lang].name} uses {fallback}
                        </span>
                      ))}
                    </li>
                  )}
                </ul>
              </div>
            </div>
          </div>

          <DialogFooter>
            <Button
              type="button"
              variant="outline"
              onClick={() => setShowConfirmDialog(false)}
            >
              Cancel
            </Button>
            <Button 
              type="button" 
              onClick={handleTranslate}
              disabled={selectedLanguages.size === 0}
            >
              <Languages className="h-4 w-4 mr-2" />
              Translate {selectedLanguages.size > 0 ? `(${selectedLanguages.size})` : 'Now'}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Progress Dialog */}
      <Dialog open={isTranslating} onOpenChange={() => {}}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <Loader2 className="h-5 w-5 animate-spin" />
              Translating...
            </DialogTitle>
            <DialogDescription>
              Please wait while we translate your content.
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-4">
            <Progress value={progress} className="w-full" />
            
            <div className="text-sm text-muted-foreground text-center">
              {progress === 100 ? (
                <div className="flex items-center justify-center gap-2 text-green-600">
                  <CheckCircle2 className="h-4 w-4" />
                  Translation complete!
                </div>
              ) : (
                `Translating to ${selectedLanguages.size} language${selectedLanguages.size > 1 ? 's' : ''}...`
              )}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
