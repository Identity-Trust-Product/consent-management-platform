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

import { z } from "zod";
import { NOTICE_METADATA_KEYS } from "@/lib/constants/notice-metadata";

// Validation regex for alphanumeric with allowed special characters
const alphanumericWithSpecialChars = /^[a-zA-Z0-9()._\-\/\s]+$/;

export const createNoticeSchema = z
  .object({
    referenceId: z
      .string()
      .min(3, "Reference ID must be at least 3 characters long")
      .max(255, "Reference ID must not exceed 255 characters")
      .regex(
        alphanumericWithSpecialChars,
        "Reference ID can only contain alphanumeric characters and these special characters: ( ) . _ - /"
      ),
    dataPrincipalId: z
      .string()
      .min(3, "User ID must be at least 3 characters long")
      .max(255, "User ID must not exceed 255 characters")
      .regex(
        alphanumericWithSpecialChars,
        "User ID can only contain alphanumeric characters and these special characters: ( ) . _ - /"
      ),
    businessProcessId: z
      .number()
      .int()
      .positive("Please select a process"),
    noticeDuration: z
      .number()
      .int()
      .min(1, "Notice duration must be at least 1"),
    noticeDurationType: z.enum(["hours", "days", "weeks", "months"]),
    noticeViewMode: z.enum(["purpose_of_processing", "purpose_of_consent"]),
    attributesDefaultSelection: z.enum(["mandatory", "all"]),
    redirectionEndpoint: z
      .url("Please enter a valid URL")
      .optional()
      .or(z.literal("")),
    consentDuration: z.number().int().min(1).optional(),
    consentDurationType: z
      .enum(["hours", "days", "weeks", "months"])
      .optional(),
    forMinor: z.boolean().optional().default(false),
    metadata: z
      .array(
        z.object({
          key: z.string().min(1, "Key is required"),
          value: z.string().min(1, "Value is required"),
        })
      )
      .max(20, "Maximum 20 metadata entries allowed")
      .optional(),
  })
  .refine(
    (data) => {
      // If consent duration is provided, consent duration type must also be provided
      if (data.consentDuration && !data.consentDurationType) {
        return false;
      }
      // If consent duration is not provided, ignore duration type (always valid)
      return true;
    },
    {
      message: "Duration type is required when consent duration is provided",
      path: ["consentDurationType"],
    }
  )
  .refine(
    (data) => {
      // Validate maximum 6 months for notice duration across all duration types
      const { noticeDuration, noticeDurationType } = data;

      // Convert to hours for comparison
      let durationInHours = 0;
      switch (noticeDurationType) {
        case "hours":
          durationInHours = noticeDuration;
          break;
        case "days":
          durationInHours = noticeDuration * 24;
          break;
        case "weeks":
          durationInHours = noticeDuration * 24 * 7;
          break;
        case "months":
          durationInHours = noticeDuration * 24 * 30;
          break;
      }

      // 6 months = approximately 4320 hours (6 * 30 * 24)
      const maxHours = 6 * 30 * 24;
      return durationInHours <= maxHours;
    },
    {
      message: "Notice duration cannot exceed 6 months",
      path: ["noticeDuration"],
    }
  );

export type CreateNoticeData = z.infer<typeof createNoticeSchema>;

// API-specific schema with snake_case fields
export const createNoticeApiSchema = z
  .object({
    reference_id: z
      .string()
      .min(3, "Reference ID must be at least 3 characters long")
      .max(255, "Reference ID must not exceed 255 characters")
      .regex(
        alphanumericWithSpecialChars,
        "Reference ID can only contain alphanumeric characters and these special characters: ( ) . _ - /"
      ),
    data_principal_id: z
      .string()
      .min(3, "User ID must be at least 3 characters long")
      .max(255, "User ID must not exceed 255 characters")
      .regex(
        alphanumericWithSpecialChars,
        "User ID can only contain alphanumeric characters and these special characters: ( ) . _ - /"
      ),
    business_process_id: z
      .number()
      .int()
      .positive("Please select a process"),
    notice_duration: z
      .number()
      .int()
      .min(1, "Notice duration must be at least 1"),
    notice_duration_type: z.enum(["hours", "days", "weeks", "months"]),
    notice_view_mode: z.enum(["purpose_of_processing", "purpose_of_consent"]),
    attributes_default_selection: z.enum(["mandatory", "all"]),
    redirection_endpoint: z
      .url("Please enter a valid URL")
      .optional()
      .or(z.literal("")),
    consent_duration: z.number().int().min(1).optional(),
    consent_duration_type: z
      .enum(["hours", "days", "weeks", "months"])
      .optional(),
  })
  .refine(
    (data) => {
      // If consent duration is provided, consent duration type must also be provided
      if (data.consent_duration && !data.consent_duration_type) {
        return false;
      }
      // If consent duration is not provided, ignore duration type (always valid)
      return true;
    },
    {
      message: "Duration type is required when consent duration is provided",
      path: ["consent_duration_type"],
    }
  )
  .refine(
    (data) => {
      // Validate maximum 6 months for notice duration across all duration types
      const { notice_duration, notice_duration_type } = data;

      // Convert to hours for comparison
      let durationInHours = 0;
      switch (notice_duration_type) {
        case "hours":
          durationInHours = notice_duration;
          break;
        case "days":
          durationInHours = notice_duration * 24;
          break;
        case "weeks":
          durationInHours = notice_duration * 24 * 7;
          break;
        case "months":
          durationInHours = notice_duration * 24 * 30;
          break;
      }

      // 6 months = approximately 4320 hours (6 * 30 * 24)
      const maxHours = 6 * 30 * 24;
      return durationInHours <= maxHours;
    },
    {
      message: "Notice duration cannot exceed 6 months",
      path: ["notice_duration"],
    }
  );

export type CreateNoticeApiData = z.infer<typeof createNoticeApiSchema>;

// New API schema matching OpenAPI spec
export const createGrantNoticeApiSchema = z
  .object({
    reference_id: z
      .string()
      .min(3, "Reference ID must be at least 3 characters long")
      .max(255, "Reference ID must not exceed 255 characters")
      .regex(
        alphanumericWithSpecialChars,
        "Reference ID can only contain alphanumeric characters and these special characters: ( ) . _ - /"
      ),
    data_principal_id: z
      .string()
      .min(3, "User ID must be at least 3 characters long")
      .max(255, "User ID must not exceed 255 characters")
      .regex(
        alphanumericWithSpecialChars,
        "User ID can only contain alphanumeric characters and these special characters: ( ) . _ - /"
      ),
    notice_settings: z.object({
      expires_in_hours: z
        .number()
        .min(0.5, "Notice expiration must be at least 0.5 hours"),
      redirection_type: z.enum(["redirect"]).optional(),
      redirection_url: z.string().url("Please enter a valid URL").optional(),
      default_language: z.string().default("en"),
      view_mode: z.enum([
        "purpose_of_processing",
        "purpose_of_consent",
        "user_attributes",
      ]),
    }),
    consent_settings: z.object({
      expires_in_hours: z
        .number()
        .int()
        .min(1, "Consent expiration must be at least 1 hour")
        .optional(),
    }),
    business_process: z.object({
      code: z.string().min(1, "Process code is required"),
      version: z
        .number()
        .int()
        .positive("Process version must be positive"),
    }),
    metadata: z
      .array(
        z.object({
          key: z.string().min(1, "Metadata key is required"),
          value: z.string().min(1, "Metadata value is required"),
        })
      )
      .optional(),
    for_minor: z.boolean().optional().default(false),
  })
  .refine(
    (data) => {
      // If for_minor is true, validate that required metadata fields exist
      if (data.for_minor) {
        if (!data.metadata || data.metadata.length === 0) {
          return false;
        }

        const hasMajorId = data.metadata.some(
          (m) => m.key === NOTICE_METADATA_KEYS.MAJOR_DATA_PRINCIPAL_ID
        );
        const hasRelationship = data.metadata.some(
          (m) => m.key === NOTICE_METADATA_KEYS.RELATIONSHIP_WITH_MINOR
        );

        return hasMajorId && hasRelationship;
      }
      return true;
    },
    {
      message:
        "When for_minor is true, metadata must include major_dataprincipal_id and relationship_with_minor fields",
      path: ["metadata"],
    }
  )
  .refine(
    (data) => {
      // If for_minor is true, validate major_dataprincipal_id format
      if (data.for_minor && data.metadata) {
        const majorMetadata = data.metadata.find(
          (m) => m.key === NOTICE_METADATA_KEYS.MAJOR_DATA_PRINCIPAL_ID
        );
        if (majorMetadata) {
          const majorIdValue = majorMetadata.value.trim();
          // Must be at least 3 characters and valid UUID format
          if (majorIdValue.length < 3) {
            return false;
          }
          const uuidRegex = /^[0-9a-z-]{3,}$/i;
          return uuidRegex.test(majorIdValue);
        }
      }
      return true;
    },
    {
      message:
        "Major User ID must be at least 3 characters and in valid UUID format",
      path: ["metadata"],
    }
  )
  .refine(
    (data) => {
      // If for_minor is true, validate relationship_with_minor is not empty
      if (data.for_minor && data.metadata) {
        const relationshipMetadata = data.metadata.find(
          (m) => m.key === NOTICE_METADATA_KEYS.RELATIONSHIP_WITH_MINOR
        );
        if (relationshipMetadata) {
          return relationshipMetadata.value.trim().length > 0;
        }
      }
      return true;
    },
    {
      message:
        "Relationship with minor must not be empty when for_minor is true",
      path: ["metadata"],
    }
  );

export type CreateGrantNoticeApiData = z.infer<
  typeof createGrantNoticeApiSchema
>;
