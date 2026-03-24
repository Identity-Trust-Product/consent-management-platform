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
  LanguageCode,
  DEFAULT_LANGUAGE,
  BusinessProcessTranslation,
  BaseTranslation,
  UserAttributeTranslation,
} from "@/lib/types/languages";

/**
 * Get translated business process content with fallback
 */
export function getBusinessProcessTranslation(
  translations: any,
  languageCode: LanguageCode,
  fallbackData: {
    name: string;
    grantDescription: string;
    revokeDescription?: string | null;
    reconsentDescription?: string | null;
  }
): {
  name: string;
  grantDescription: string;
  revokeDescription?: string | null;
  reconsentDescription?: string | null;
} {
  // Try to get translation for requested language
  if (translations && typeof translations === "object") {
    const translation = translations[languageCode] as
      | BusinessProcessTranslation
      | undefined;

    if (translation) {
      return {
        name: translation.name || fallbackData.name,
        grantDescription:
          translation.grantDescription || fallbackData.grantDescription,
        revokeDescription:
          translation.revokeDescription || fallbackData.revokeDescription,
        reconsentDescription:
          translation.reconsentDescription || fallbackData.reconsentDescription,
      };
    }
  }

  // Fallback to English
  return fallbackData;
}

/**
 * Get translated consent purpose or processing purpose content with fallback
 */
export function getBaseEntityTranslation(
  translations: any,
  languageCode: LanguageCode,
  fallbackData: {
    name: string;
    description?: string | null;
  }
): {
  name: string;
  description?: string | null;
} {

  // Try to get translation for requested language
  if (translations && typeof translations === "object") {
    const translation = translations[languageCode] as
      | BaseTranslation
      | undefined;

    if (translation) {
      return {
        name: translation.name || fallbackData.name,
        description: translation.description || fallbackData.description,
      };
    }
  }

  // Fallback to English
  return fallbackData;
}

/**
 * Get translated user attribute name with fallback
 */
export function getUserAttributeTranslation(
  translations: any,
  languageCode: LanguageCode,
  fallbackName: string
): string {

  // Try to get translation for requested language
  if (translations && typeof translations === "object") {
    const translation = translations[languageCode] as
      | UserAttributeTranslation
      | undefined;

    if (translation && translation.name) {
      return translation.name;
    }
  }

  // Fallback to English
  return fallbackName;
}

/**
 * Get available languages from business process
 * Always includes English, plus any supported languages
 */
export function getAvailableNoticeLanguages(
  businessProcess: {
    supportedLanguages?: string[];
  }
): LanguageCode[] {
  const languages: LanguageCode[] = [DEFAULT_LANGUAGE];

  if (
    businessProcess.supportedLanguages &&
    Array.isArray(businessProcess.supportedLanguages)
  ) {
    // Filter out duplicates and English (already added)
    const additionalLanguages = businessProcess.supportedLanguages.filter(
      (lang) => lang !== DEFAULT_LANGUAGE
    ) as LanguageCode[];

    languages.push(...additionalLanguages);
  }

  return languages;
}
