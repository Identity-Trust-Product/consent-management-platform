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

import {
  BaseTranslation,
  DEFAULT_LANGUAGE,
  LanguageCode,
  TranslationsMap,
} from '@/lib/types/languages';

/**
 * Get translated content with fallback strategy
 * 1. Try requested language
 * 2. Fall back to default language (English)
 * 3. Fall back to first available language
 * 4. Return base entity fields
 */
export function getTranslation<T extends BaseTranslation>(
  translations: TranslationsMap<T> | null | undefined,
  languageCode: LanguageCode,
  fallbackData?: Partial<T>
): T | Partial<T> {
  // Handle null/undefined translations
  if (!translations || typeof translations !== 'object') {
    return fallbackData || ({} as Partial<T>);
  }

  // Try requested language
  if (translations[languageCode]) {
    return translations[languageCode]!;
  }

  // Fallback to default language
  if (languageCode !== DEFAULT_LANGUAGE && translations[DEFAULT_LANGUAGE]) {
    return translations[DEFAULT_LANGUAGE]!;
  }

  // Fallback to first available language
  const firstAvailableLang = Object.keys(translations)[0] as LanguageCode;
  if (firstAvailableLang && translations[firstAvailableLang]) {
    return translations[firstAvailableLang]!;
  }

  // Final fallback
  return fallbackData || ({} as Partial<T>);
}

/**
 * Check if a specific language translation exists
 */
export function hasTranslation(
  translations: TranslationsMap | null | undefined,
  languageCode: LanguageCode
): boolean {
  if (!translations) return false;
  return languageCode in translations && !!translations[languageCode];
}

/**
 * Get all available language codes from translations
 */
export function getAvailableLanguages(
  translations: TranslationsMap | null | undefined
): LanguageCode[] {
  if (!translations) return [DEFAULT_LANGUAGE];
  return Object.keys(translations) as LanguageCode[];
}

/**
 * Check translation completeness for required fields
 */
export function isTranslationComplete<T extends BaseTranslation>(
  translation: T | Partial<T> | undefined,
  requiredFields: (keyof T)[]
): boolean {
  if (!translation) return false;
  return requiredFields.every((field) => {
    const value = translation[field];
    return value !== undefined && value !== null && value !== '';
  });
}

/**
 * Validate translations for multiple languages
 */
export function validateTranslations<T extends BaseTranslation>(
  translations: TranslationsMap<T> | null | undefined,
  requiredLanguages: LanguageCode[],
  requiredFields: (keyof T)[]
): {
  isValid: boolean;
  missing: LanguageCode[];
  incomplete: LanguageCode[];
} {
  const missing: LanguageCode[] = [];
  const incomplete: LanguageCode[] = [];

  for (const lang of requiredLanguages) {
    if (!hasTranslation(translations, lang)) {
      missing.push(lang);
    } else if (translations && translations[lang]) {
      if (!isTranslationComplete(translations[lang], requiredFields)) {
        incomplete.push(lang);
      }
    }
  }

  return {
    isValid: missing.length === 0 && incomplete.length === 0,
    missing,
    incomplete,
  };
}

/**
 * Get translation completion percentage
 */
export function getTranslationProgress(
  translations: TranslationsMap | null | undefined,
  supportedLanguages: string[],
  requiredFields: string[]
): {
  total: number;
  completed: number;
  percentage: number;
} {
  if (!translations || supportedLanguages.length === 0) {
    return { total: 0, completed: 0, percentage: 0 };
  }

  const total = supportedLanguages.length;
  let completed = 0;

  for (const lang of supportedLanguages) {
    const translation = translations[lang as LanguageCode];
    if (translation && isTranslationComplete(translation, requiredFields as any[])) {
      completed++;
    }
  }

  return {
    total,
    completed,
    percentage: total > 0 ? Math.round((completed / total) * 100) : 0,
  };
}

/**
 * Merge translations from multiple sources (useful for inheritance)
 */
export function mergeTranslations<T extends BaseTranslation>(
  base: TranslationsMap<T> | null | undefined,
  override: TranslationsMap<T> | null | undefined
): TranslationsMap<T> {
  if (!base && !override) return {};
  if (!base) return override || {};
  if (!override) return base || {};

  const merged: TranslationsMap<T> = { ...base };

  for (const lang in override) {
    const langCode = lang as LanguageCode;
    merged[langCode] = {
      ...base[langCode],
      ...override[langCode],
    } as T;
  }

  return merged;
}

/**
 * Filter out empty translations
 */
export function cleanEmptyTranslations<T extends BaseTranslation>(
  translations: TranslationsMap<T> | null | undefined
): TranslationsMap<T> {
  if (!translations) return {};

  const cleaned: TranslationsMap<T> = {};

  for (const lang in translations) {
    const langCode = lang as LanguageCode;
    const translation = translations[langCode];

    if (translation && Object.values(translation).some((val) => val !== null && val !== '')) {
      cleaned[langCode] = translation;
    }
  }

  return cleaned;
}
