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
 * Zod Validation Schemas for Grievance System
 */

import { z } from "zod";
import {
  GrievanceCategory,
  GrievanceMessageAuthorType,
  GrievanceStatus,
  GrievanceSeverity,
} from "@prisma/client";
import {
  GRIEVANCE_VALIDATION,
  MESSAGE_VALIDATION,
  VALID_STATUS_TRANSITIONS,
} from "@/lib/constants/grievances";

/**
 * Schema for creating a new grievance (Data Principal side)
 */
export const createGrievanceSchema = z.object({
  dataPrincipalId: z.string().min(1, "User ID is required"),
  metadata: z
    .object({
      name: z.string().optional(),
      email: z.string().email().optional(),
      phone: z.string().optional(),
    })
    .optional()
    .default({}),
  businessProcessId: z
    .number()
    .int()
    .positive("Process must be selected"),
  category: z.nativeEnum(GrievanceCategory, {
    message: "Please select a valid category",
  }),
  subject: z
    .string()
    .min(
      GRIEVANCE_VALIDATION.SUBJECT.MIN_LENGTH,
      `Subject must be at least ${GRIEVANCE_VALIDATION.SUBJECT.MIN_LENGTH} characters`
    )
    .max(
      GRIEVANCE_VALIDATION.SUBJECT.MAX_LENGTH,
      `Subject must not exceed ${GRIEVANCE_VALIDATION.SUBJECT.MAX_LENGTH} characters`
    ),
  description: z
    .string()
    .min(
      GRIEVANCE_VALIDATION.DESCRIPTION.MIN_LENGTH,
      `Description must be at least ${GRIEVANCE_VALIDATION.DESCRIPTION.MIN_LENGTH} characters`
    )
    .max(
      GRIEVANCE_VALIDATION.DESCRIPTION.MAX_LENGTH,
      `Description must not exceed ${GRIEVANCE_VALIDATION.DESCRIPTION.MAX_LENGTH} characters`
    ),
});

export type CreateGrievanceInput = z.infer<typeof createGrievanceSchema>;

/**
 * Schema for assigning a grievance to an agent (Admin side)
 */
export const assignGrievanceSchema = z.object({
  grievanceId: z.number().int().positive("Invalid grievance ID"),
  assignedToId: z
    .string()
    .uuid("Invalid user ID")
    .nullable()
    .optional()
    .transform((val) => val || null),
});

export type AssignGrievanceInput = z.infer<typeof assignGrievanceSchema>;

/**
 * Schema for updating grievance status
 */
export const updateGrievanceStatusSchema = z.object({
  grievanceId: z.number().int().positive("Invalid grievance ID"),
  status: z.nativeEnum(GrievanceStatus, {
    message: "Please select a valid status",
  }),
  notes: z.string().optional(),
});

export type UpdateGrievanceStatusInput = z.infer<
  typeof updateGrievanceStatusSchema
>;

/**
 * Schema for filtering grievances (Admin dashboard)
 */
export const grievanceFilterSchema = z.object({
  status: z.nativeEnum(GrievanceStatus).optional(),
  category: z.nativeEnum(GrievanceCategory).optional(),
  severity: z.nativeEnum(GrievanceSeverity).optional(),
  slaStatus: z.enum(["on-track", "at-risk", "breached", "resolved"]).optional(),
  assignedToId: z.union([z.string().uuid(), z.literal("unassigned")]).optional(),
  businessProcessId: z.number().int().positive().optional(),
  dataPrincipalId: z.string().optional(),
  search: z.string().optional(), // Search in subject, description, or reference number
  page: z.number().int().positive().optional().default(1),
  pageSize: z.number().int().positive().max(100).optional().default(10),
  sortBy: z
    .enum(["createdAt", "updatedAt", "status", "category", "severity"])
    .optional()
    .default("createdAt"),
  sortOrder: z.enum(["asc", "desc"]).optional().default("desc"),
});

export type GrievanceFilterInput = z.infer<typeof grievanceFilterSchema>;

/**
 * Schema for getting a single grievance
 */
export const getGrievanceSchema = z.object({
  grievanceId: z.union([
    z.number().int().positive("Invalid grievance ID"),
    z.string().min(1, "Invalid grievance public ID")
  ]),
});

export type GetGrievanceInput = z.infer<typeof getGrievanceSchema>;

/**
 * Schema for adding a message to a grievance (Agent side)
 * Only requires grievanceId and message - server will set author from session
 */
export const addGrievanceMessageSchema = z.object({
  grievanceId: z.number().int().positive("Invalid grievance ID"),
  message: z
    .string()
    .min(MESSAGE_VALIDATION.MIN_LENGTH, "Message cannot be empty")
    .max(
      MESSAGE_VALIDATION.MAX_LENGTH,
      `Message must not exceed ${MESSAGE_VALIDATION.MAX_LENGTH} characters`
    )
    .trim(),
});

export type AddGrievanceMessageInput = z.infer<
  typeof addGrievanceMessageSchema
>;

/**
 * Schema for adding a message from principal (DPRM portal side)
 */
export const addPrincipalMessageSchema = z.object({
  grievanceId: z.number().int().positive("Invalid grievance ID"),
  message: z
    .string()
    .min(
      MESSAGE_VALIDATION.MIN_LENGTH,
      "Message cannot be empty"
    )
    .max(
      MESSAGE_VALIDATION.MAX_LENGTH,
      `Message must not exceed ${MESSAGE_VALIDATION.MAX_LENGTH} characters`
    )
    .trim(),
});

export type AddPrincipalMessageInput = z.infer<
  typeof addPrincipalMessageSchema
>;

/**
 * Schema for updating grievance status with validation
 */
export const updateStatusSchema = z
  .object({
    grievanceId: z.number().int().positive("Invalid grievance ID"),
    currentStatus: z.nativeEnum(GrievanceStatus),
    newStatus: z.nativeEnum(GrievanceStatus, {
      message: "Please select a valid status",
    }),
    reason: z.string().max(500).optional(),
  })
  .refine(
    (data) => {
      const validTransitions = VALID_STATUS_TRANSITIONS[data.currentStatus];
      return validTransitions.includes(data.newStatus);
    },
    {
      message: "Invalid status transition",
      path: ["newStatus"],
    }
  );

export type UpdateStatusInput = z.infer<typeof updateStatusSchema>;

/**
 * Schema for reopening a grievance (by agent)
 */
export const reopenGrievanceSchema = z.object({
  grievanceId: z.number().int().positive("Invalid grievance ID"),
  reason: z
    .string()
    .min(10, "Reason must be at least 10 characters")
    .max(500, "Reason must not exceed 500 characters")
    .trim(),
});

export type ReopenGrievanceInput = z.infer<typeof reopenGrievanceSchema>;

/**
 * Schema for reopening a grievance by principal
 */
export const reopenGrievanceByPrincipalSchema = z.object({
  grievanceId: z.number().int().positive("Invalid grievance ID"),
  token: z.string().min(1, "Token is required"),
  reason: z
    .string()
    .min(10, "Reason must be at least 10 characters")
    .max(500, "Reason must not exceed 500 characters")
    .trim(),
});

export type ReopenGrievanceByPrincipalInput = z.infer<
  typeof reopenGrievanceByPrincipalSchema
>;

/**
 * Schema for submitting feedback on a grievance resolution
 * Based on Figma designs with 1-5 rating scale and contextual reasons
 */
export const submitGrievanceFeedbackSchema = z.object({
  grievanceId: z.number().int().positive("Invalid grievance ID"),
  token: z.string().min(1, "Token is required"),
  rating: z
    .number()
    .int()
    .min(1, "Rating must be at least 1")
    .max(5, "Rating must not exceed 5"),
  reasons: z
    .array(z.string())
    .max(5, "You can select up to 5 reasons")
    .default([]),
  comment: z
    .string()
    .max(1000, "Comment must not exceed 1000 characters")
    .optional(),
});

export type SubmitGrievanceFeedbackInput = z.infer<
  typeof submitGrievanceFeedbackSchema
>;

/**
 * Feedback reasons based on rating
 * Low ratings (1-2): Negative feedback reasons
 * Neutral rating (3): Neutral feedback reasons
 * High ratings (4-5): Positive feedback reasons
 */
export const NEGATIVE_FEEDBACK_REASONS = [
  "Poor Communication",
  "Unclear Resolution",
  "Confusing Updates",
  "Agent Not Helpful",
  "Other",
] as const;

export const NEUTRAL_FEEDBACK_REASONS = [
  "Average Experience",
  "Met Expectations",
  "Room for Improvement",
  "Satisfactory Service",
  "Other",
] as const;

export const POSITIVE_FEEDBACK_REASONS = [
  "Quick Resolution Time",
  "Responsive Agent",
  "Timely Updates",
  "Seamless Interaction",
  "Other",
] as const;

export type NegativeFeedbackReason = (typeof NEGATIVE_FEEDBACK_REASONS)[number];
export type NeutralFeedbackReason = (typeof NEUTRAL_FEEDBACK_REASONS)[number];
export type PositiveFeedbackReason = (typeof POSITIVE_FEEDBACK_REASONS)[number];
