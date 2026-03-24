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

import prisma from "@/lib/prisma";
import { auth } from "@/auth";
import { LanguageCode } from "@/lib/types/languages";
import { revalidatePath } from "next/cache";
import {
  baseTranslationSchema,
  businessProcessTranslationSchema,
  userAttributeTranslationSchema,
} from "@/lib/schemas/translation-schemas";
import { z } from "zod";

type EntityType = 'userAttribute' | 'consentPurpose' | 'processingPurpose' | 'businessProcess';

/**
 * Update User Attribute Translation
 */
export async function updateUserAttributeTranslation(
  userAttributeId: number,
  languageCode: LanguageCode,
  translation: z.infer<typeof userAttributeTranslationSchema>
) {
  const session = await auth();
  if (!session?.user) {
    return { error: "Unauthorized" };
  }

  try {
    // Validate input
    const validatedData = userAttributeTranslationSchema.parse(translation);

    // Get current translations
    const userAttribute = await prisma.userAttribute.findUnique({
      where: { id: userAttributeId },
      select: { translations: true, supportedLanguages: true },
    });

    if (!userAttribute) {
      return { error: "User attribute not found" };
    }

    // Update translations
    const currentTranslations = (userAttribute.translations as any) || {};
    currentTranslations[languageCode] = validatedData;

    // Update supportedLanguages if new language
    const supportedLanguages = userAttribute.supportedLanguages || ['en'];
    if (!supportedLanguages.includes(languageCode)) {
      supportedLanguages.push(languageCode);
    }

    await prisma.userAttribute.update({
      where: { id: userAttributeId },
      data: {
        translations: currentTranslations,
        supportedLanguages,
      },
    });

    revalidatePath(`/cms/data-fiduciary/user-attributes`);
    return { success: true };
  } catch (error) {
    console.error("Error updating translation:", error);
    if (error instanceof z.ZodError) {
      return { error: error.issues[0].message };
    }
    return { error: "Failed to update translation" };
  }
}

/**
 * Update Consent Purpose Translation
 */
export async function updateConsentPurposeTranslation(
  consentPurposeId: number,
  languageCode: LanguageCode,
  translation: z.infer<typeof baseTranslationSchema>
) {
  const session = await auth();
  if (!session?.user) {
    return { error: "Unauthorized" };
  }

  try {
    const validatedData = baseTranslationSchema.parse(translation);

    const consentPurpose = await prisma.consentPurpose.findUnique({
      where: { id: consentPurposeId },
      select: { translations: true, supportedLanguages: true },
    });

    if (!consentPurpose) {
      return { error: "Consent purpose not found" };
    }

    const currentTranslations = (consentPurpose.translations as any) || {};
    currentTranslations[languageCode] = validatedData;

    const supportedLanguages = consentPurpose.supportedLanguages || ['en'];
    if (!supportedLanguages.includes(languageCode)) {
      supportedLanguages.push(languageCode);
    }

    await prisma.consentPurpose.update({
      where: { id: consentPurposeId },
      data: {
        translations: currentTranslations,
        supportedLanguages,
      },
    });

    revalidatePath(`/cms/data-fiduciary/consent-purposes`);
    return { success: true };
  } catch (error) {
    console.error("Error updating translation:", error);
    if (error instanceof z.ZodError) {
      return { error: error.issues[0].message };
    }
    return { error: "Failed to update translation" };
  }
}

/**
 * Update Processing Purpose Translation
 */
export async function updateProcessingPurposeTranslation(
  processingPurposeId: number,
  languageCode: LanguageCode,
  translation: z.infer<typeof baseTranslationSchema>
) {
  const session = await auth();
  if (!session?.user) {
    return { error: "Unauthorized" };
  }

  try {
    const validatedData = baseTranslationSchema.parse(translation);

    const processingPurpose = await prisma.processingPurpose.findUnique({
      where: { id: processingPurposeId },
      select: { translations: true },
    });

    if (!processingPurpose) {
      return { error: "Processing purpose not found" };
    }

    const currentTranslations = (processingPurpose.translations as any) || {};
    currentTranslations[languageCode] = validatedData;

    await prisma.processingPurpose.update({
      where: { id: processingPurposeId },
      data: {
        translations: currentTranslations,
      },
    });

    revalidatePath(`/cms/data-fiduciary/consent-purposes`);
    return { success: true };
  } catch (error) {
    console.error("Error updating translation:", error);
    if (error instanceof z.ZodError) {
      return { error: error.issues[0].message };
    }
    return { error: "Failed to update translation" };
  }
}

/**
 * Update Business Process Translation
 */
export async function updateBusinessProcessTranslation(
  businessProcessId: number,
  languageCode: LanguageCode,
  translation: z.infer<typeof businessProcessTranslationSchema>
) {
  const session = await auth();
  if (!session?.user) {
    return { error: "Unauthorized" };
  }

  try {
    const validatedData = businessProcessTranslationSchema.parse(translation);

    const businessProcess = await prisma.businessProcess.findUnique({
      where: { id: businessProcessId },
      select: { translations: true, supportedLanguages: true },
    });

    if (!businessProcess) {
      return { error: "Business process not found" };
    }

    const currentTranslations = (businessProcess.translations as any) || {};
    currentTranslations[languageCode] = validatedData;

    const supportedLanguages = businessProcess.supportedLanguages || ['en'];
    if (!supportedLanguages.includes(languageCode)) {
      supportedLanguages.push(languageCode);
    }

    await prisma.businessProcess.update({
      where: { id: businessProcessId },
      data: {
        translations: currentTranslations,
        supportedLanguages,
      },
    });

    revalidatePath(`/cms/data-fiduciary/business-processes`);
    return { success: true };
  } catch (error) {
    console.error("Error updating translation:", error);
    if (error instanceof z.ZodError) {
      return { error: error.issues[0].message };
    }
    return { error: "Failed to update translation" };
  }
}

/**
 * Delete translation for a specific language (cannot delete English)
 */
export async function deleteTranslation(
  entityType: EntityType,
  entityId: number,
  languageCode: LanguageCode
) {
  const session = await auth();
  if (!session?.user) {
    return { error: "Unauthorized" };
  }

  if (languageCode === 'en') {
    return { error: "Cannot delete English translation" };
  }

  try {
    let entity: any;
    let updateData: any = {};

    // Fetch entity based on type
    switch (entityType) {
      case 'userAttribute':
        entity = await prisma.userAttribute.findUnique({
          where: { id: entityId },
          select: { translations: true, supportedLanguages: true },
        });
        break;
      case 'consentPurpose':
        entity = await prisma.consentPurpose.findUnique({
          where: { id: entityId },
          select: { translations: true, supportedLanguages: true },
        });
        break;
      case 'processingPurpose':
        entity = await prisma.processingPurpose.findUnique({
          where: { id: entityId },
          select: { translations: true },
        });
        break;
      case 'businessProcess':
        entity = await prisma.businessProcess.findUnique({
          where: { id: entityId },
          select: { translations: true, supportedLanguages: true },
        });
        break;
    }

    if (!entity) {
      return { error: "Entity not found" };
    }

    // Remove translation
    const translations = { ...(entity.translations as any) };
    delete translations[languageCode];
    updateData.translations = translations;

    // Update supportedLanguages if applicable
    if (entity.supportedLanguages) {
      updateData.supportedLanguages = entity.supportedLanguages.filter(
        (lang: string) => lang !== languageCode
      );
    }

    // Update entity
    switch (entityType) {
      case 'userAttribute':
        await prisma.userAttribute.update({
          where: { id: entityId },
          data: updateData,
        });
        revalidatePath(`/cms/data-fiduciary/user-attributes`);
        break;
      case 'consentPurpose':
        await prisma.consentPurpose.update({
          where: { id: entityId },
          data: updateData,
        });
        revalidatePath(`/cms/data-fiduciary/consent-purposes`);
        break;
      case 'processingPurpose':
        await prisma.processingPurpose.update({
          where: { id: entityId },
          data: updateData,
        });
        revalidatePath(`/cms/data-fiduciary/consent-purposes`);
        break;
      case 'businessProcess':
        await prisma.businessProcess.update({
          where: { id: entityId },
          data: updateData,
        });
        revalidatePath(`/cms/data-fiduciary/business-processes`);
        break;
    }

    return { success: true };
  } catch (error) {
    console.error("Error deleting translation:", error);
    return { error: "Failed to delete translation" };
  }
}

/**
 * Bulk update translations for an entity (all languages at once)
 */
export async function bulkUpdateTranslations(
  entityType: EntityType,
  entityId: number,
  translations: Record<string, any>
) {
  const session = await auth();
  if (!session?.user) {
    return { error: "Unauthorized" };
  }

  try {
    // Validate each translation based on entity type
    const schema = entityType === 'businessProcess'
      ? businessProcessTranslationSchema
      : entityType === 'userAttribute'
        ? userAttributeTranslationSchema
        : baseTranslationSchema;

    for (const [lang, translation] of Object.entries(translations)) {
      schema.parse(translation);
    }

    // Get current entity
    let entity: any;
    switch (entityType) {
      case 'userAttribute':
        entity = await prisma.userAttribute.findUnique({
          where: { id: entityId },
          select: { supportedLanguages: true },
        });
        break;
      case 'consentPurpose':
        entity = await prisma.consentPurpose.findUnique({
          where: { id: entityId },
          select: { supportedLanguages: true },
        });
        break;
      case 'processingPurpose':
        entity = await prisma.processingPurpose.findUnique({
          where: { id: entityId },
        });
        break;
      case 'businessProcess':
        entity = await prisma.businessProcess.findUnique({
          where: { id: entityId },
          select: { supportedLanguages: true },
        });
        break;
    }

    if (!entity) {
      return { error: "Entity not found" };
    }

    // Update supportedLanguages
    const supportedLanguages = Array.from(
      new Set([...(entity.supportedLanguages || ['en']), ...Object.keys(translations)])
    );

    const updateData: any = { translations };
    if (entity.supportedLanguages !== undefined) {
      updateData.supportedLanguages = supportedLanguages;
    }

    // Update entity
    switch (entityType) {
      case 'userAttribute':
        await prisma.userAttribute.update({
          where: { id: entityId },
          data: updateData,
        });
        revalidatePath(`/cms/data-fiduciary/user-attributes`);
        break;
      case 'consentPurpose':
        await prisma.consentPurpose.update({
          where: { id: entityId },
          data: updateData,
        });
        revalidatePath(`/cms/data-fiduciary/consent-purposes`);
        break;
      case 'processingPurpose':
        await prisma.processingPurpose.update({
          where: { id: entityId },
          data: updateData,
        });
        revalidatePath(`/cms/data-fiduciary/consent-purposes`);
        break;
      case 'businessProcess':
        await prisma.businessProcess.update({
          where: { id: entityId },
          data: updateData,
        });
        revalidatePath(`/cms/data-fiduciary/business-processes`);
        break;
    }

    return { success: true };
  } catch (error) {
    console.error("Error bulk updating translations:", error);
    if (error instanceof z.ZodError) {
      return { error: error.issues[0].message };
    }
    return { error: "Failed to update translations" };
  }
}

/**
 * Get translations for an entity
 */
export async function getEntityTranslations(
  entityType: EntityType,
  entityId: number
) {
  const session = await auth();
  if (!session?.user) {
    return { error: "Unauthorized" };
  }

  try {
    let entity: any;

    switch (entityType) {
      case 'userAttribute':
        entity = await prisma.userAttribute.findUnique({
          where: { id: entityId },
          select: { translations: true, supportedLanguages: true },
        });
        break;
      case 'consentPurpose':
        entity = await prisma.consentPurpose.findUnique({
          where: { id: entityId },
          select: { translations: true, supportedLanguages: true },
        });
        break;
      case 'processingPurpose':
        entity = await prisma.processingPurpose.findUnique({
          where: { id: entityId },
          select: { translations: true },
        });
        break;
      case 'businessProcess':
        entity = await prisma.businessProcess.findUnique({
          where: { id: entityId },
          select: { translations: true, supportedLanguages: true },
        });
        break;
    }

    if (!entity) {
      return { error: "Entity not found" };
    }

    return {
      success: true,
      data: {
        translations: entity.translations || {},
        supportedLanguages: entity.supportedLanguages || ['en'],
      },
    };
  } catch (error) {
    console.error("Error fetching translations:", error);
    return { error: "Failed to fetch translations" };
  }
}
