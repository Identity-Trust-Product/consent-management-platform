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
 * Google Cloud Translation Service
 * 
 * Provides translation capabilities using Google Cloud Translation API v3
 * Includes development mode that simulates translations without API calls
 * 
 * Environment Variables:
 * - NODE_ENV: 'development' | 'production' (uses mock translations in dev)
 * - GCS_PROJECT_ID: Google Cloud Project ID
 * - GCS_KEYFILE_PATH: Path to service account key file
 * 
 * Dev Mode:
 * When NODE_ENV !== 'production' and GCS credentials are missing,
 * the service will use mock translations (prefixed with language code)
 */

import { LanguageCode } from "@/lib/types/languages";
import { getGoogleTranslateCode, hasDirectTranslateSupport } from "@/lib/constants/google-translate-mapping";
import { logger } from "@/lib/utils/logger";

// Only import Google Translate in production or when credentials exist
let TranslationServiceClient: any = null;
const isDevelopment = process.env.NODE_ENV !== 'production';
const hasCredentials = Boolean(process.env.GCS_PROJECT_ID && process.env.GCS_KEYFILE_PATH);

// Initialize the client only if we have credentials
if (hasCredentials) {
  try {
    const { v3 } = require('@google-cloud/translate');
    TranslationServiceClient = v3.TranslationServiceClient;
  } catch (error) {
    logger.warn('Google Translate client initialization failed', { error });
  }
}

/**
 * Translation service configuration
 */
const config = {
  projectId: process.env.GCS_PROJECT_ID || '',
  keyFilename: process.env.GCS_KEYFILE_PATH || '',
  location: 'global', // Default location for Translation API
};

/**
 * Check if we're in mock mode
 */
function isMockMode(): boolean {
  return isDevelopment && !hasCredentials;
}

/**
 * Mock translation for development (simulates translation by prefixing with language code)
 * Adds realistic delay to simulate API latency
 */
async function mockTranslate(text: string, targetLanguage: string): Promise<string> {
  if (!text || text.trim().length === 0) {
    return text;
  }

  // Simulate realistic API latency (100-300ms per translation)
  const delay = 100 + Math.random() * 200;
  await new Promise(resolve => setTimeout(resolve, delay));

  // Simple simulation: prefix with [LANG] to show it's "translated"
  return `[${targetLanguage.toUpperCase()}] ${text}`;
}

/**
 * Create translation client instance
 */
function createClient() {
  if (isMockMode()) {
    logger.info('Translation Service: Running in MOCK MODE (development without credentials)');
    return null;
  }

  if (!TranslationServiceClient) {
    throw new Error('Google Translate client not initialized. Check your credentials.');
  }

  return new TranslationServiceClient({
    projectId: config.projectId,
    keyFilename: config.keyFilename,
  });
}

/**
 * Translate a single text string
 * 
 * @param text - Text to translate
 * @param targetLanguage - Target language code (our internal code)
 * @param sourceLanguage - Source language code (defaults to 'en')
 * @returns Translated text
 */
export async function translateText(
  text: string,
  targetLanguage: LanguageCode,
  sourceLanguage: LanguageCode = 'en'
): Promise<string> {
  // Return empty strings as-is
  if (!text || text.trim().length === 0) {
    return text;
  }

  // If source and target are the same, no translation needed
  if (sourceLanguage === targetLanguage) {
    return text;
  }

  const targetGoogleCode = getGoogleTranslateCode(targetLanguage);
  const sourceGoogleCode = getGoogleTranslateCode(sourceLanguage);

  // Mock mode for development
  if (isMockMode()) {
    logger.debug('Mock translating text', {
      sourceLanguage,
      targetLanguage,
      textLength: text.length
    });
    return await mockTranslate(text, targetGoogleCode);
  }

  try {
    const client = createClient();

    if (!client) {
      throw new Error('Translation client not available');
    }

    const request = {
      parent: `projects/${config.projectId}/locations/${config.location}`,
      contents: [text],
      mimeType: 'text/plain' as const,
      sourceLanguageCode: sourceGoogleCode,
      targetLanguageCode: targetGoogleCode,
    };

    logger.info('Translating text via Google Translate API', {
      sourceLanguage: sourceGoogleCode,
      targetLanguage: targetGoogleCode,
      textLength: text.length,
    });

    const [response] = await client.translateText(request);
    const translatedText = response.translations?.[0]?.translatedText || text;

    logger.info('Translation successful', {
      sourceLanguage: sourceGoogleCode,
      targetLanguage: targetGoogleCode,
      originalLength: text.length,
      translatedLength: translatedText.length,
    });

    return translatedText;
  } catch (error) {
    logger.error('Translation failed', {
      error,
      sourceLanguage,
      targetLanguage,
      textLength: text.length,
    });

    // Fallback: return original text on error
    return text;
  }
}

/**
 * Translate multiple text strings in a batch
 * More efficient than calling translateText multiple times
 * 
 * @param texts - Array of texts to translate
 * @param targetLanguage - Target language code
 * @param sourceLanguage - Source language code (defaults to 'en')
 * @returns Array of translated texts in same order as input
 */
export async function translateBatch(
  texts: string[],
  targetLanguage: LanguageCode,
  sourceLanguage: LanguageCode = 'en'
): Promise<string[]> {
  // Empty array check
  if (!texts || texts.length === 0) {
    return [];
  }

  // If source and target are the same, no translation needed
  if (sourceLanguage === targetLanguage) {
    return texts;
  }

  const targetGoogleCode = getGoogleTranslateCode(targetLanguage);
  const sourceGoogleCode = getGoogleTranslateCode(sourceLanguage);

  // Mock mode for development
  if (isMockMode()) {
    logger.debug('Mock translating batch', {
      sourceLanguage,
      targetLanguage,
      count: texts.length,
    });
    // Process sequentially to simulate realistic timing
    const results: string[] = [];
    for (const text of texts) {
      if (text) {
        results.push(await mockTranslate(text, targetGoogleCode));
      } else {
        results.push(text);
      }
    }
    return results;
  }

  try {
    const client = createClient();

    if (!client) {
      throw new Error('Translation client not available');
    }

    const request = {
      parent: `projects/${config.projectId}/locations/${config.location}`,
      contents: texts,
      mimeType: 'text/plain' as const,
      sourceLanguageCode: sourceGoogleCode,
      targetLanguageCode: targetGoogleCode,
    };

    logger.info('Batch translating via Google Translate API', {
      sourceLanguage: sourceGoogleCode,
      targetLanguage: targetGoogleCode,
      count: texts.length,
    });

    const [response] = await client.translateText(request);
    const translatedTexts = response.translations?.map((t: any) => t.translatedText) || texts;

    logger.info('Batch translation successful', {
      sourceLanguage: sourceGoogleCode,
      targetLanguage: targetGoogleCode,
      count: translatedTexts.length,
    });

    return translatedTexts;
  } catch (error) {
    logger.error('Batch translation failed', {
      error,
      sourceLanguage,
      targetLanguage,
      count: texts.length,
    });

    // Fallback: return original texts on error
    return texts;
  }
}

/**
 * Translate text to multiple target languages
 * Useful for translating entity fields to all supported languages at once
 * 
 * @param text - Text to translate
 * @param targetLanguages - Array of target language codes
 * @param sourceLanguage - Source language code (defaults to 'en')
 * @returns Object mapping language codes to translated texts
 */
export async function translateToMultipleLanguages(
  text: string,
  targetLanguages: LanguageCode[],
  sourceLanguage: LanguageCode = 'en'
): Promise<Record<LanguageCode, string>> {
  // Empty text check
  if (!text || text.trim().length === 0) {
    const result: Record<string, string> = {};
    targetLanguages.forEach(lang => {
      result[lang] = text;
    });
    return result;
  }

  logger.info('Translating to multiple languages', {
    sourceLanguage,
    targetLanguages,
    textLength: text.length,
  });

  // Translate to each language
  const translations = await Promise.all(
    targetLanguages.map(async (targetLang) => {
      const translated = await translateText(text, targetLang, sourceLanguage);
      return { lang: targetLang, text: translated };
    })
  );

  // Build result object
  const result: Record<string, string> = {};
  translations.forEach(({ lang, text: translatedText }) => {
    result[lang] = translatedText;
  });

  return result;
}

/**
 * Translate an object with multiple fields to a target language
 * Useful for translating entity objects (e.g., { name: "...", description: "..." })
 * 
 * @param obj - Object with string values to translate
 * @param targetLanguage - Target language code
 * @param sourceLanguage - Source language code (defaults to 'en')
 * @returns Object with same keys but translated values
 */
export async function translateObject<T extends Record<string, string | null | undefined>>(
  obj: T,
  targetLanguage: LanguageCode,
  sourceLanguage: LanguageCode = 'en'
): Promise<T> {
  const keys = Object.keys(obj) as (keyof T)[];
  const values = keys.map(key => obj[key] || '');

  // Filter out empty values and keep track of which indices have content
  const nonEmptyIndices: number[] = [];
  const nonEmptyValues: string[] = [];

  values.forEach((value, index) => {
    if (value && value.trim().length > 0) {
      nonEmptyIndices.push(index);
      nonEmptyValues.push(value);
    }
  });

  // Translate only non-empty values
  const translatedNonEmpty = await translateBatch(nonEmptyValues, targetLanguage, sourceLanguage);

  // Rebuild the result object
  const result: any = {};
  keys.forEach((key, index) => {
    const nonEmptyIndex = nonEmptyIndices.indexOf(index);
    if (nonEmptyIndex !== -1) {
      result[key] = translatedNonEmpty[nonEmptyIndex];
    } else {
      result[key] = obj[key]; // Keep original empty/null values
    }
  });

  return result as T;
}

/**
 * Get translation service status
 * Useful for health checks and debugging
 */
export function getTranslationServiceStatus() {
  return {
    mode: isMockMode() ? 'mock' : 'production',
    hasCredentials,
    projectId: config.projectId ? '✓' : '✗',
    keyFile: config.keyFilename ? '✓' : '✗',
  };
}
