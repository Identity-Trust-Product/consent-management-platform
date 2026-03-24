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

/**
 * Notice Translation Hook
 * 
 * Provides translation functionality for notice views using the converted
 * gettext translations in JSON format.
 * 
 * Usage:
 *   const { t } = useNoticeTranslation();
 *   <button>{t("Submit")}</button>
 *   <p>{t("%{brand_name} is seeking your consent for %{title}", { brand_name: "Acme", title: "Data Processing" })}</p>
 */

import { useNoticeLanguage } from "@/contexts/notice-language-context";
import { LanguageCode } from "@/lib/types/languages";
import { useMemo } from "react";

// Translation cache to avoid re-importing on every render
const translationCache = new Map<string, Record<string, any>>();

/**
 * Load translations for a specific language
 */
/**
 * Load translations for a specific language and namespace
 */
function loadTranslations(languageCode: LanguageCode, namespace: string): Record<string, string> {
  const cacheKey = `${languageCode}:${namespace}`;

  // Check cache first
  if (translationCache.has(cacheKey)) {
    return translationCache.get(cacheKey)!;
  }

  try {
    // Dynamically require the translation file
    // Note: In Next.js/Webpack, dynamic requires must be statically analyzable to some extent
    // We assume standard structure: @/translations/{lang}/{namespace}.json
    let translations;
    try {
      translations = require(`@/translations/${languageCode}/${namespace}.json`);
    } catch (e) {
      if (namespace !== "common") {
        console.warn(`Translation file not found: ${languageCode}/${namespace}.json, falling back to common`);
        translations = require(`@/translations/${languageCode}/common.json`);
      } else {
        throw e;
      }
    }

    const flatTranslations = translations[namespace] || translations;

    translationCache.set(cacheKey, flatTranslations);
    return flatTranslations;
  } catch (error) {
    console.warn(`Failed to load translations for ${languageCode}:${namespace}:`, error);

    // Fallback to English
    if (languageCode !== "en") {
      return loadTranslations("en", namespace);
    }

    return {};
  }
}

/**
 * Interpolate variables in a translation string
 * Converts {{variable}} placeholders to actual values
 * 
 * @param template - Translation string with {{variable}} placeholders
 * @param variables - Object containing variable values
 * @returns Interpolated string
 */
function interpolate(
  template: string,
  variables?: Record<string, string | number>
): string {
  if (!variables) return template;

  return template.replace(/\{\{(\w+)\}\}/g, (match, key) => {
    return variables[key]?.toString() || match;
  });
}

/**
 * Hook to access notice translations
 */
/**
 * Hook to access notice translations
 */
export function useNoticeTranslation(namespace: string = "common") {
  const { currentLanguage } = useNoticeLanguage();

  const translations = useMemo(() => {
    return loadTranslations(currentLanguage, namespace);
  }, [currentLanguage, namespace]);

  /**
   * Translate a key with optional variable interpolation
   * 
   * @param key - Translation key (msgid from PO files)
   * @param variables - Optional variables for interpolation
   * @returns Translated string
   */
  const t = (
    key: string,
    variables?: Record<string, string | number>
  ): string => {
    const translation = translations[key] || key;
    return interpolate(translation, variables);
  };

  /**
   * Check if a translation exists for a key
   */
  const hasTranslation = (key: string): boolean => {
    return key in translations;
  };

  return {
    t,
    hasTranslation,
    currentLanguage,
  };
}
