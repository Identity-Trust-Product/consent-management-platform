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
 * Language Constants
 * Supported languages for India's 22 scheduled languages + English
 * Sorted alphabetically by English name (English first, then A-Z)
 */

/**
 * Supported language codes (ISO 639-1/639-3)
 */
export const SUPPORTED_LANGUAGES = {
  en: { code: 'en', name: 'English', nativeName: 'English', rtl: false },
  as: { code: 'as', name: 'Assamese', nativeName: 'অসমীয়া', rtl: false },
  bn: { code: 'bn', name: 'Bengali', nativeName: 'বাংলা', rtl: false },
  brx: { code: 'brx', name: 'Bodo', nativeName: 'बड़ो', rtl: false },
  doi: { code: 'doi', name: 'Dogri', nativeName: 'डोगरी', rtl: false },
  gu: { code: 'gu', name: 'Gujarati', nativeName: 'ગુજરાતી', rtl: false },
  hi: { code: 'hi', name: 'Hindi', nativeName: 'हिन्दी', rtl: false },
  kn: { code: 'kn', name: 'Kannada', nativeName: 'ಕನ್ನಡ', rtl: false },
  ks: { code: 'ks', name: 'Kashmiri', nativeName: 'کٲشُر', rtl: true },
  kok: { code: 'kok', name: 'Konkani', nativeName: 'कोंकणी', rtl: false },
  mai: { code: 'mai', name: 'Maithili', nativeName: 'मैथिली', rtl: false },
  ml: { code: 'ml', name: 'Malayalam', nativeName: 'മലയാളം', rtl: false },
  mni: { code: 'mni', name: 'Manipuri', nativeName: 'ꯃꯩꯇꯩꯂꯣꯟ', rtl: false },
  mr: { code: 'mr', name: 'Marathi', nativeName: 'मराठी', rtl: false },
  ne: { code: 'ne', name: 'Nepali', nativeName: 'नेपाली', rtl: false },
  or: { code: 'or', name: 'Odia', nativeName: 'ଓଡ଼ିଆ', rtl: false },
  pa: { code: 'pa', name: 'Punjabi', nativeName: 'ਪੰਜਾਬੀ', rtl: false },
  sa: { code: 'sa', name: 'Sanskrit', nativeName: 'संस्कृतम्', rtl: false },
  sat: { code: 'sat', name: 'Santali', nativeName: 'ᱥᱟᱱᱛᱟᱲᱤ', rtl: false },
  sd: { code: 'sd', name: 'Sindhi', nativeName: 'سنڌي', rtl: true },
  ta: { code: 'ta', name: 'Tamil', nativeName: 'தமிழ்', rtl: false },
  te: { code: 'te', name: 'Telugu', nativeName: 'తెలుగు', rtl: false },
  ur: { code: 'ur', name: 'Urdu', nativeName: 'اردو', rtl: true },
} as const;

export type LanguageCode = keyof typeof SUPPORTED_LANGUAGES;

/**
 * Default language for the application
 */
export const DEFAULT_LANGUAGE: LanguageCode = 'en';

/**
 * Array of all supported language codes
 */
export const LANGUAGE_CODES = Object.keys(SUPPORTED_LANGUAGES) as LanguageCode[];
