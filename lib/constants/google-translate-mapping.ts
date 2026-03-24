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
 * Google Translate Language Code Mapping
 * Maps our internal language codes to Google Cloud Translation API language codes
 * 
 * Note: Some Indian languages may not have direct Google Translate support
 * In such cases, we map to the closest available language
 */

import { LanguageCode } from "@/lib/types/languages";

/**
 * Mapping from our language codes to Google Translate API codes
 * 
 * Based on official Google Cloud Translation API documentation (2025-11-20)
 * Source: https://cloud.google.com/translate/docs/languages
 * 
 * Special cases:
 * - brx (Bodo): NOT supported by Google Translate → fallback to Hindi (hi)
 * - sat (Santali): NOT supported by Google Translate → fallback to Hindi (hi)
 * - ks (Kashmiri): NOT supported by Google Translate → fallback to Urdu (ur) for script similarity
 * 
 * NOTE: The following languages ARE NOW SUPPORTED (as of 2025):
 * - doi (Dogri): Supported directly as 'doi'
 * - gom (Konkani): Supported directly as 'gom'
 * - mai (Maithili): Supported directly as 'mai'
 * - mni (Manipuri): Supported as 'mni-Mtei' (Meitei script)
 */
export const GOOGLE_TRANSLATE_LANG_MAP: Record<LanguageCode, string> = {
  en: 'en',       // English
  as: 'as',       // Assamese ✓
  bn: 'bn',       // Bengali ✓
  brx: 'hi',      // Bodo → Hindi (NOT supported)
  doi: 'doi',     // Dogri ✓ (NOW SUPPORTED)
  gu: 'gu',       // Gujarati ✓
  hi: 'hi',       // Hindi ✓
  kn: 'kn',       // Kannada ✓
  ks: 'ur',       // Kashmiri → Urdu (NOT supported, Urdu script similarity)
  kok: 'gom',     // Konkani ✓ (NOW SUPPORTED as 'gom')
  mai: 'mai',     // Maithili ✓ (NOW SUPPORTED)
  ml: 'ml',       // Malayalam ✓
  mni: 'mni-Mtei',// Manipuri (Meitei script) ✓
  mr: 'mr',       // Marathi ✓
  ne: 'ne',       // Nepali ✓
  or: 'or',       // Odia ✓
  pa: 'pa',       // Punjabi (Gurmukhi script) ✓
  sa: 'sa',       // Sanskrit ✓
  sat: 'hi',      // Santali → Hindi (NOT supported)
  sd: 'sd',       // Sindhi ✓
  ta: 'ta',       // Tamil ✓
  te: 'te',       // Telugu ✓
  ur: 'ur',       // Urdu ✓
};

/**
 * Languages that don't have direct Google Translate support
 * These will use fallback/approximation languages
 * 
 * Updated based on Google Cloud Translation API documentation (2025-11-20)
 */
export const UNSUPPORTED_LANGUAGES: LanguageCode[] = [
  'brx',  // Bodo → uses Hindi
  'ks',   // Kashmiri → uses Urdu (script similarity)
  'sat',  // Santali → uses Hindi
];

/**
 * Get Google Translate language code from our language code
 */
export function getGoogleTranslateCode(languageCode: LanguageCode): string {
  return GOOGLE_TRANSLATE_LANG_MAP[languageCode];
}

/**
 * Check if a language has direct Google Translate support
 */
export function hasDirectTranslateSupport(languageCode: LanguageCode): boolean {
  return !UNSUPPORTED_LANGUAGES.includes(languageCode);
}

/**
 * Get the fallback language for unsupported languages
 * Returns the actual supported language that will be used for translation
 */
export function getFallbackLanguage(languageCode: LanguageCode): LanguageCode | null {
  if (hasDirectTranslateSupport(languageCode)) {
    return null;
  }

  const googleCode = GOOGLE_TRANSLATE_LANG_MAP[languageCode];

  // Find a SUPPORTED language that uses this Google code
  for (const [code, gCode] of Object.entries(GOOGLE_TRANSLATE_LANG_MAP)) {
    if (gCode === googleCode && code !== languageCode && hasDirectTranslateSupport(code as LanguageCode)) {
      return code as LanguageCode;
    }
  }

  return 'en'; // Ultimate fallback
}
