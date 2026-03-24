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

import { LANGUAGE_CODES, LanguageCode } from '@/lib/types/languages';
import { z } from 'zod';

// Base translation schema - used for most entities (ConsentPurpose, ProcessingPurpose, etc.)
export const baseTranslationSchema = z.object({
  name: z.string().min(1, 'Name is required').max(255, 'Name must be less than 255 characters'),
  description: z.string().nullable().optional(),
});

// Business process translation schema - includes additional description fields
export const businessProcessTranslationSchema = z.object({
  name: z.string().min(1, 'Name is required').max(255, 'Name must be less than 255 characters'),
  grantDescription: z
    .string()
    .min(1, 'Grant description is required')
    .max(1000, 'Grant description must be less than 1000 characters'),
  revokeDescription: z
    .string()
    .max(1000, 'Revoke description must be less than 1000 characters')
    .nullable()
    .optional(),
  reconsentDescription: z
    .string()
    .max(1000, 'Reconsent description must be less than 1000 characters')
    .nullable()
    .optional(),
});

// User attribute translation schema - only name field needed
export const userAttributeTranslationSchema = z.object({
  name: z.string().min(1, 'Name is required').max(255, 'Name must be less than 255 characters'),
});

// Translations map schema (flexible for any language)
export const translationsMapSchema = z.record(
  z.enum(LANGUAGE_CODES as [LanguageCode, ...LanguageCode[]]),
  baseTranslationSchema
);

export const businessProcessTranslationsMapSchema = z.record(
  z.enum(LANGUAGE_CODES as [LanguageCode, ...LanguageCode[]]),
  businessProcessTranslationSchema
);

export const userAttributeTranslationsMapSchema = z.record(
  z.enum(LANGUAGE_CODES as [LanguageCode, ...LanguageCode[]]),
  userAttributeTranslationSchema
);

// Schema for updating a single translation
export const updateTranslationRequestSchema = z.object({
  entityType: z.enum(['userAttribute', 'consentPurpose', 'processingPurpose', 'businessProcess']),
  entityId: z.number().int().positive(),
  languageCode: z.enum(LANGUAGE_CODES as [LanguageCode, ...LanguageCode[]]),
  translation: z.union([
    baseTranslationSchema,
    businessProcessTranslationSchema,
    userAttributeTranslationSchema,
  ]),
});

// Schema for deleting a translation
export const deleteTranslationRequestSchema = z.object({
  entityType: z.enum(['userAttribute', 'consentPurpose', 'processingPurpose', 'businessProcess']),
  entityId: z.number().int().positive(),
  languageCode: z.enum(LANGUAGE_CODES as [LanguageCode, ...LanguageCode[]]).refine(
    (code) => code !== 'en',
    {
      message: 'Cannot delete English translation',
    }
  ),
});

// Schema for bulk translation update
export const bulkUpdateTranslationsSchema = z.object({
  entityType: z.enum(['userAttribute', 'consentPurpose', 'processingPurpose', 'businessProcess']),
  entityId: z.number().int().positive(),
  translations: z.record(
    z.enum(LANGUAGE_CODES as [LanguageCode, ...LanguageCode[]]),
    z.union([
      baseTranslationSchema,
      businessProcessTranslationSchema,
      userAttributeTranslationSchema,
    ])
  ),
});

// Type exports for use in server actions
export type BaseTranslation = z.infer<typeof baseTranslationSchema>;
export type BusinessProcessTranslation = z.infer<typeof businessProcessTranslationSchema>;
export type UserAttributeTranslation = z.infer<typeof userAttributeTranslationSchema>;
export type TranslationsMap = z.infer<typeof translationsMapSchema>;
export type UpdateTranslationRequest = z.infer<typeof updateTranslationRequestSchema>;
export type DeleteTranslationRequest = z.infer<typeof deleteTranslationRequestSchema>;
export type BulkUpdateTranslations = z.infer<typeof bulkUpdateTranslationsSchema>;
