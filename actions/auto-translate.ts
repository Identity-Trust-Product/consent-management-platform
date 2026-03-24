"use server";
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

import { auth } from "@/auth";
import prisma from "@/lib/prisma";
import { LanguageCode } from "@/lib/types/languages";
import { translateObject } from "@/lib/services/google-translate-service";
import { logger } from "@/lib/utils/logger";
import { revalidatePath } from "next/cache";
import { z } from "zod";

/**
 * Auto-translate User Attribute to multiple languages
 * 
 * @param userAttributeId - ID of the user attribute to translate
 * @param targetLanguages - Array of language codes to translate to
 * @param sourceLanguage - Source language (defaults to 'en')
 * @returns Success with translations or error
 */
export async function autoTranslateUserAttribute(
  userAttributeId: number,
  targetLanguages: LanguageCode[],
  sourceLanguage: LanguageCode = "en"
) {
  const session = await auth();
  if (!session?.user) {
    return { error: "Unauthorized" };
  }

  try {
    logger.info("Auto-translate User Attribute: Starting", {
      userAttributeId,
      targetLanguages,
      sourceLanguage,
      userId: session.user.id,
    });

    // Validate inputs
    if (!targetLanguages || targetLanguages.length === 0) {
      return { error: "No target languages specified" };
    }

    // Fetch user attribute
    const userAttribute = await prisma.userAttribute.findUnique({
      where: { id: userAttributeId },
      select: {
        id: true,
        name: true,
        translations: true,
        supportedLanguages: true,
      },
    });

    if (!userAttribute) {
      return { error: "User attribute not found" };
    }

    // Get source translation (English by default)
    const currentTranslations = (userAttribute.translations as any) || {};
    const sourceTranslation = currentTranslations[sourceLanguage] || {
      name: userAttribute.name,
      description: null,
      placeholder: null,
    };

    // Validate source has content
    if (!sourceTranslation.name || sourceTranslation.name.trim() === "") {
      return { error: `Source translation (${sourceLanguage}) has no name` };
    }

    logger.info("Auto-translate User Attribute: Translating fields", {
      userAttributeId,
      sourceLanguage,
      targetLanguages,
      fields: Object.keys(sourceTranslation),
    });

    // Translate to each target language
    const translationResults: Record<string, any> = {};
    const errors: string[] = [];

    for (const targetLang of targetLanguages) {
      try {
        // Skip if source and target are the same
        if (targetLang === sourceLanguage) {
          translationResults[targetLang] = sourceTranslation;
          continue;
        }

        // Translate the object
        const translated = await translateObject(
          {
            name: sourceTranslation.name,
            description: sourceTranslation.description || null,
            placeholder: sourceTranslation.placeholder || null,
          },
          targetLang,
          sourceLanguage
        );

        translationResults[targetLang] = translated;

        logger.info("Auto-translate User Attribute: Language completed", {
          userAttributeId,
          language: targetLang,
        });
      } catch (error) {
        const errorMsg = `Failed to translate to ${targetLang}`;
        errors.push(errorMsg);
        logger.error("Auto-translate User Attribute: Language failed", {
          error,
          userAttributeId,
          language: targetLang,
        });
      }
    }

    // If all translations failed, return error
    if (Object.keys(translationResults).length === 0) {
      return { error: "All translations failed", details: errors };
    }

    // Merge with existing translations (don't overwrite manually edited ones unless explicitly requested)
    const updatedTranslations = {
      ...currentTranslations,
      ...translationResults,
    };

    // Update supported languages
    const newLanguages = Object.keys(translationResults) as LanguageCode[];
    const existingLanguages = userAttribute.supportedLanguages || [];
    const supportedLanguages = Array.from(
      new Set([...existingLanguages, ...newLanguages])
    );

    // Save to database
    await prisma.userAttribute.update({
      where: { id: userAttributeId },
      data: {
        translations: updatedTranslations,
        supportedLanguages,
      },
    });

    logger.info("Auto-translate User Attribute: Completed successfully", {
      userAttributeId,
      translatedLanguages: Object.keys(translationResults),
      totalLanguages: supportedLanguages.length,
    });

    // Revalidate cache
    revalidatePath("/cms/data-fiduciary/user-attributes");

    return {
      success: true,
      translations: translationResults,
      translatedCount: Object.keys(translationResults).length,
      errors: errors.length > 0 ? errors : undefined,
    };
  } catch (error) {
    logger.error("Auto-translate User Attribute: Failed", {
      error,
      userAttributeId,
      targetLanguages,
    });

    return {
      error: "Failed to auto-translate",
      details: error instanceof Error ? error.message : "Unknown error",
    };
  }
}

/**
 * Auto-translate specific fields of a User Attribute to a single language
 * Useful for retrying failed translations or translating specific fields
 * 
 * @param userAttributeId - ID of the user attribute
 * @param targetLanguage - Single target language code
 * @param fields - Object with fields to translate
 * @param sourceLanguage - Source language (defaults to 'en')
 */
export async function autoTranslateUserAttributeFields(
  userAttributeId: number,
  targetLanguage: LanguageCode,
  fields: {
    name?: string;
    description?: string | null;
    placeholder?: string | null;
  },
  sourceLanguage: LanguageCode = "en"
) {
  const session = await auth();
  if (!session?.user) {
    return { error: "Unauthorized" };
  }

  try {
    // Validate user attribute exists
    const userAttribute = await prisma.userAttribute.findUnique({
      where: { id: userAttributeId },
      select: {
        id: true,
        translations: true,
        supportedLanguages: true,
      },
    });

    if (!userAttribute) {
      return { error: "User attribute not found" };
    }

    // Translate the provided fields
    const translated = await translateObject(fields, targetLanguage, sourceLanguage);

    // Update translations
    const currentTranslations = (userAttribute.translations as any) || {};
    currentTranslations[targetLanguage] = {
      ...(currentTranslations[targetLanguage] || {}),
      ...translated,
    };

    // Update supported languages
    const supportedLanguages = userAttribute.supportedLanguages || [];
    if (!supportedLanguages.includes(targetLanguage)) {
      supportedLanguages.push(targetLanguage);
    }

    // Save to database
    await prisma.userAttribute.update({
      where: { id: userAttributeId },
      data: {
        translations: currentTranslations,
        supportedLanguages,
      },
    });

    logger.info("Auto-translate User Attribute Fields: Completed", {
      userAttributeId,
      targetLanguage,
      fields: Object.keys(fields),
    });

    revalidatePath("/cms/data-fiduciary/user-attributes");

    return {
      success: true,
      translation: translated,
    };
  } catch (error) {
    logger.error("Auto-translate User Attribute Fields: Failed", {
      error,
      userAttributeId,
      targetLanguage,
    });

    return {
      error: "Failed to auto-translate fields",
      details: error instanceof Error ? error.message : "Unknown error",
    };
  }
}

/**
 * Translate text to multiple languages (for create forms)
 * This action translates text without saving to database
 * 
 * @param text - Text to translate
 * @param targetLanguages - Array of language codes to translate to
 * @param sourceLanguage - Source language (defaults to 'en')
 * @returns Success with translations or error
 */
export async function translateTextToLanguages(
  text: string,
  targetLanguages: LanguageCode[],
  sourceLanguage: LanguageCode = "en"
) {
  const session = await auth();
  if (!session?.user) {
    return { error: "Unauthorized" };
  }

  try {
    logger.info("Translate Text: Starting", {
      targetLanguages,
      sourceLanguage,
      textLength: text.length,
      userId: session.user.id,
    });

    // Validate inputs
    if (!text || text.trim() === "") {
      return { error: "No text provided for translation" };
    }

    if (!targetLanguages || targetLanguages.length === 0) {
      return { error: "No target languages specified" };
    }

    // Import translation service
    const { translateText } = await import("@/lib/services/google-translate-service");

    // Translate to each target language
    const translations: Record<string, string> = {};
    const errors: string[] = [];

    for (const targetLang of targetLanguages) {
      try {
        // Skip if source and target are the same
        if (targetLang === sourceLanguage) {
          translations[targetLang] = text;
          continue;
        }

        // Translate the text
        const translated = await translateText(text, targetLang, sourceLanguage);
        translations[targetLang] = translated;

        logger.info("Translate Text: Language completed", {
          targetLang,
          textLength: translated.length,
        });
      } catch (error) {
        const errorMsg = `Failed to translate to ${targetLang}`;
        logger.error("Translate Text: Language failed", {
          error,
          targetLang,
        });
        errors.push(errorMsg);
      }
    }

    if (Object.keys(translations).length === 0) {
      return {
        error: "Failed to translate to any language",
        details: errors.join(", "),
      };
    }

    logger.info("Translate Text: Completed", {
      successCount: Object.keys(translations).length,
      errorCount: errors.length,
    });

    return {
      success: true,
      translations,
      errors: errors.length > 0 ? errors : undefined,
    };
  } catch (error) {
    logger.error("Translate Text: Failed", {
      error,
      sourceLanguage,
      targetLanguages,
    });

    return {
      error: "Failed to translate text",
      details: error instanceof Error ? error.message : "Unknown error",
    };
  }
}

/**
 * Auto-translate Business Process to multiple languages
 * 
 * @param businessProcessId - ID of the business process to translate
 * @param targetLanguages - Array of language codes to translate to
 * @param sourceLanguage - Source language (defaults to 'en')
 * @param englishData - Optional English data from context (for newly added/edited fields)
 * @returns Success with translations or error
 */
export async function autoTranslateBusinessProcess(
  businessProcessId: number,
  targetLanguages: LanguageCode[],
  sourceLanguage: LanguageCode = "en",
  englishData?: {
    name: string;
    grantDescription: string;
    revokeDescription?: string | null;
    reconsentDescription?: string | null;
  }
) {
  const session = await auth();
  if (!session?.user) {
    return { error: "Unauthorized" };
  }

  try {
    logger.info("Auto-translate Business Process: Starting", {
      businessProcessId,
      targetLanguages,
      sourceLanguage,
      userId: session.user.id,
      hasEnglishData: !!englishData,
    });

    if (!targetLanguages || targetLanguages.length === 0) {
      return { error: "No target languages specified" };
    }

    const businessProcess = await prisma.businessProcess.findUnique({
      where: { id: businessProcessId },
      select: {
        id: true,
        name: true,
        grantDescription: true,
        revokeDescription: true,
        reconsentDescription: true,
        translations: true,
        supportedLanguages: true,
      },
    });

    if (!businessProcess) {
      return { error: "Business process not found" };
    }

    const currentTranslations = (businessProcess.translations as any) || {};

    // Use provided englishData if available (for newly added/edited fields), otherwise fall back to DB
    const sourceTranslation = englishData || currentTranslations[sourceLanguage] || {
      name: businessProcess.name,
      grantDescription: businessProcess.grantDescription,
      revokeDescription: businessProcess.revokeDescription || null,
      reconsentDescription: businessProcess.reconsentDescription || null,
    };

    if (!sourceTranslation.name || sourceTranslation.name.trim() === "") {
      return { error: `Source translation (${sourceLanguage}) has no name` };
    }

    const translationResults: Record<string, any> = {};
    const errors: string[] = [];

    for (const targetLang of targetLanguages) {
      try {
        if (targetLang === sourceLanguage) {
          translationResults[targetLang] = sourceTranslation;
          continue;
        }

        const translated = await translateObject(
          {
            name: sourceTranslation.name,
            grantDescription: sourceTranslation.grantDescription || null,
            revokeDescription: sourceTranslation.revokeDescription || null,
            reconsentDescription: sourceTranslation.reconsentDescription || null,
          },
          targetLang,
          sourceLanguage
        );

        translationResults[targetLang] = translated;
      } catch (error) {
        const errorMsg = `Failed to translate to ${targetLang}`;
        logger.error("Auto-translate Business Process: Language failed", {
          error,
          targetLang,
        });
        errors.push(errorMsg);
      }
    }

    if (Object.keys(translationResults).length === 0) {
      return {
        error: "Failed to translate to any language",
        details: errors.join(", "),
      };
    }

    // Merge with existing translations
    const updatedTranslations = { ...currentTranslations, ...translationResults };

    // Update supported languages
    const supportedLanguages = businessProcess.supportedLanguages || ["en"];
    targetLanguages.forEach((lang) => {
      if (!supportedLanguages.includes(lang)) {
        supportedLanguages.push(lang);
      }
    });

    await prisma.businessProcess.update({
      where: { id: businessProcessId },
      data: {
        translations: updatedTranslations,
        supportedLanguages,
      },
    });

    logger.info("Auto-translate Business Process: Completed", {
      businessProcessId,
      successCount: Object.keys(translationResults).length,
      errorCount: errors.length,
    });

    revalidatePath("/cms/data-fiduciary/business-processes");

    return {
      success: true,
      translations: updatedTranslations,
      translatedCount: Object.keys(translationResults).length,
      errors: errors.length > 0 ? errors : undefined,
    };
  } catch (error) {
    logger.error("Auto-translate Business Process: Failed", {
      error,
      businessProcessId,
      targetLanguages,
    });

    return {
      error: "Failed to auto-translate business process",
      details: error instanceof Error ? error.message : "Unknown error",
    };
  }
}

/**
 * Auto-translate Consent Purpose to multiple languages
 * 
 * @param consentPurposeId - ID of the consent purpose to translate
 * @param targetLanguages - Array of language codes to translate to
 * @param sourceLanguage - Source language (defaults to 'en')
 * @param englishData - Optional English data from context (for newly added/edited fields)
 * @returns Success with translations or error
 */
export async function autoTranslateConsentPurpose(
  consentPurposeId: number,
  targetLanguages: LanguageCode[],
  sourceLanguage: LanguageCode = "en",
  englishData?: {
    name: string;
    description?: string | null;
  }
) {
  const session = await auth();
  if (!session?.user) {
    return { error: "Unauthorized" };
  }

  try {
    logger.info("Auto-translate Consent Purpose: Starting", {
      consentPurposeId,
      targetLanguages,
      sourceLanguage,
      userId: session.user.id,
      hasEnglishData: !!englishData,
    });

    if (!targetLanguages || targetLanguages.length === 0) {
      return { error: "No target languages specified" };
    }

    const consentPurpose = await prisma.consentPurpose.findUnique({
      where: { id: consentPurposeId },
      select: {
        id: true,
        name: true,
        description: true,
        translations: true,
        supportedLanguages: true,
      },
    });

    if (!consentPurpose) {
      return { error: "Consent purpose not found" };
    }

    const currentTranslations = (consentPurpose.translations as any) || {};

    // Use provided englishData if available (for newly added/edited fields), otherwise fall back to DB
    const sourceTranslation = englishData || currentTranslations[sourceLanguage] || {
      name: consentPurpose.name,
      description: consentPurpose.description || null,
    };

    if (!sourceTranslation.name || sourceTranslation.name.trim() === "") {
      return { error: `Source translation (${sourceLanguage}) has no name` };
    }

    const translationResults: Record<string, any> = {};
    const errors: string[] = [];

    for (const targetLang of targetLanguages) {
      try {
        if (targetLang === sourceLanguage) {
          translationResults[targetLang] = sourceTranslation;
          continue;
        }

        const translated = await translateObject(
          {
            name: sourceTranslation.name,
            description: sourceTranslation.description || null,
          },
          targetLang,
          sourceLanguage
        );

        translationResults[targetLang] = translated;
      } catch (error) {
        const errorMsg = `Failed to translate to ${targetLang}`;
        logger.error("Auto-translate Consent Purpose: Language failed", {
          error,
          targetLang,
        });
        errors.push(errorMsg);
      }
    }

    if (Object.keys(translationResults).length === 0) {
      return {
        error: "Failed to translate to any language",
        details: errors.join(", "),
      };
    }

    // Merge with existing translations
    const updatedTranslations = { ...currentTranslations, ...translationResults };

    // Update supported languages
    const supportedLanguages = consentPurpose.supportedLanguages || ["en"];
    targetLanguages.forEach((lang) => {
      if (!supportedLanguages.includes(lang)) {
        supportedLanguages.push(lang);
      }
    });

    await prisma.consentPurpose.update({
      where: { id: consentPurposeId },
      data: {
        translations: updatedTranslations,
        supportedLanguages,
      },
    });

    logger.info("Auto-translate Consent Purpose: Completed", {
      consentPurposeId,
      successCount: Object.keys(translationResults).length,
      errorCount: errors.length,
    });

    revalidatePath("/cms/data-fiduciary/consent-purposes");

    return {
      success: true,
      translations: updatedTranslations,
      translatedCount: Object.keys(translationResults).length,
      errors: errors.length > 0 ? errors : undefined,
    };
  } catch (error) {
    logger.error("Auto-translate Consent Purpose: Failed", {
      error,
      consentPurposeId,
      targetLanguages,
    });

    return {
      error: "Failed to auto-translate consent purpose",
      details: error instanceof Error ? error.message : "Unknown error",
    };
  }
}

/**
 * Auto-translate Processing Purpose to multiple languages
 * 
 * @param processingPurposeId - ID of the processing purpose to translate
 * @param targetLanguages - Array of language codes to translate to
 * @param sourceLanguage - Source language (defaults to 'en')
 * @param englishData - Optional English data from context (for newly added/edited fields)
 * @returns Success with translations or error
 */
export async function autoTranslateProcessingPurpose(
  processingPurposeId: number,
  targetLanguages: LanguageCode[],
  sourceLanguage: LanguageCode = "en",
  englishData?: {
    name: string;
    description?: string | null;
  }
) {
  const session = await auth();
  if (!session?.user) {
    return { error: "Unauthorized" };
  }

  try {
    logger.info("Auto-translate Processing Purpose: Starting", {
      processingPurposeId,
      targetLanguages,
      sourceLanguage,
      userId: session.user.id,
      hasEnglishData: !!englishData,
    });

    if (!targetLanguages || targetLanguages.length === 0) {
      return { error: "No target languages specified" };
    }

    const processingPurpose = await prisma.processingPurpose.findUnique({
      where: { id: processingPurposeId },
      select: {
        id: true,
        name: true,
        description: true,
        translations: true,
        supportedLanguages: true,
      },
    });

    if (!processingPurpose) {
      return { error: "Processing purpose not found" };
    }

    const currentTranslations = (processingPurpose.translations as any) || {};

    // Use provided englishData if available (for newly added/edited fields), otherwise fall back to DB
    const sourceTranslation = englishData || currentTranslations[sourceLanguage] || {
      name: processingPurpose.name,
      description: processingPurpose.description || null,
    };

    if (!sourceTranslation.name || sourceTranslation.name.trim() === "") {
      return { error: `Source translation (${sourceLanguage}) has no name` };
    }

    const translationResults: Record<string, any> = {};
    const errors: string[] = [];

    for (const targetLang of targetLanguages) {
      try {
        if (targetLang === sourceLanguage) {
          translationResults[targetLang] = sourceTranslation;
          continue;
        }

        const translated = await translateObject(
          {
            name: sourceTranslation.name,
            description: sourceTranslation.description || null,
          },
          targetLang,
          sourceLanguage
        );

        translationResults[targetLang] = translated;
      } catch (error) {
        const errorMsg = `Failed to translate to ${targetLang}`;
        logger.error("Auto-translate Processing Purpose: Language failed", {
          error,
          targetLang,
        });
        errors.push(errorMsg);
      }
    }

    if (Object.keys(translationResults).length === 0) {
      return {
        error: "Failed to translate to any language",
        details: errors.join(", "),
      };
    }

    // Merge with existing translations
    const updatedTranslations = { ...currentTranslations, ...translationResults };

    // Update supported languages
    const supportedLanguages = processingPurpose.supportedLanguages || ["en"];
    targetLanguages.forEach((lang) => {
      if (!supportedLanguages.includes(lang)) {
        supportedLanguages.push(lang);
      }
    });

    await prisma.processingPurpose.update({
      where: { id: processingPurposeId },
      data: {
        translations: updatedTranslations,
        supportedLanguages,
      },
    });

    logger.info("Auto-translate Processing Purpose: Completed", {
      processingPurposeId,
      successCount: Object.keys(translationResults).length,
      errorCount: errors.length,
    });

    revalidatePath("/cms/data-fiduciary/consent-purposes");

    return {
      success: true,
      translations: updatedTranslations,
      translatedCount: Object.keys(translationResults).length,
      errors: errors.length > 0 ? errors : undefined,
    };
  } catch (error) {
    logger.error("Auto-translate Processing Purpose: Failed", {
      error,
      processingPurposeId,
      targetLanguages,
    });

    return {
      error: "Failed to auto-translate processing purpose",
      details: error instanceof Error ? error.message : "Unknown error",
    };
  }
}
