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

// Language types and helper functions
// Re-export constants from centralized location
import {
  SUPPORTED_LANGUAGES,
  DEFAULT_LANGUAGE,
  LANGUAGE_CODES,
  type LanguageCode,
} from "@/lib/constants/languages";

export { SUPPORTED_LANGUAGES, DEFAULT_LANGUAGE, LANGUAGE_CODES };
export type { LanguageCode };

// Translation object types
export interface BaseTranslation {
  name: string;
  description?: string | null;
}

export interface BusinessProcessTranslation extends BaseTranslation {
  grantDescription: string;
  revokeDescription?: string | null;
  reconsentDescription?: string | null;
}

export interface UserAttributeTranslation {
  name: string;
}

export type TranslationsMap<T = BaseTranslation> = Partial<Record<LanguageCode, T>>;

// Helper functions
export function getLanguageName(code: LanguageCode, preferNative = false): string {
  const lang = SUPPORTED_LANGUAGES[code];
  return preferNative ? lang.nativeName : lang.name;
}

export function isRTL(code: LanguageCode): boolean {
  return SUPPORTED_LANGUAGES[code].rtl;
}

export function getLanguageInfo(code: LanguageCode) {
  return SUPPORTED_LANGUAGES[code];
}

export function getAllLanguages() {
  return Object.values(SUPPORTED_LANGUAGES);
}

export function isValidLanguageCode(code: string): code is LanguageCode {
  return code in SUPPORTED_LANGUAGES;
}
