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

import { GrievanceCategory, GrievanceSeverity } from "@prisma/client";

/**
 * Map a grievance category to a default severity.
 * This mapping is opinionated and can be overridden by admin SlaConfiguration.
 */
export function getSeverityForCategory(
  category: GrievanceCategory
): GrievanceSeverity {
  switch (category) {
    case GrievanceCategory.REPORT_BREACH:
      return GrievanceSeverity.CRITICAL;
    case GrievanceCategory.ERASE_DATA:
    case GrievanceCategory.WITHDRAW_CONSENT:
      return GrievanceSeverity.HIGH;
    case GrievanceCategory.PROCESSING_PURPOSE_ENQUIRY:
    case GrievanceCategory.CONSENT_UPDATE:
      return GrievanceSeverity.MEDIUM;
    case GrievanceCategory.REVIEW_REQUEST:
    case GrievanceCategory.NOMINATE_MEMBER:
      return GrievanceSeverity.LOW;
    default:
      return GrievanceSeverity.MEDIUM;
  }
}

interface BusinessHoursConfig {
  enabled: boolean;
  startHour: number; // 0-23
  endHour: number; // 0-23
  businessDays: number[]; // 1=Mon, 7=Sun
}

/**
 * Calculate expected resolution Date by adding `days` to `start`.
 * Supports both calendar days (24/7) and business hours mode.
 */
export function calculateExpectedResolutionTime(
  start: Date,
  days: number,
  businessHours?: BusinessHoursConfig
): Date {
  if (!businessHours?.enabled) {
    // Simple calendar days mode
    const result = new Date(start);
    result.setUTCDate(result.getUTCDate() + days);
    return result;
  }

  // Business hours mode: count only work hours
  const { startHour, endHour, businessDays } = businessHours;
  const hoursPerDay = endHour - startHour;
  const totalHoursNeeded = days * hoursPerDay;

  const current = new Date(start);
  let hoursAccumulated = 0;

  while (hoursAccumulated < totalHoursNeeded) {
    const dayOfWeek = current.getUTCDay() || 7; // Convert Sunday (0) to 7
    const currentHour = current.getUTCHours();

    if (
      businessDays.includes(dayOfWeek) &&
      currentHour >= startHour &&
      currentHour < endHour
    ) {
      hoursAccumulated++;
    }

    current.setUTCHours(current.getUTCHours() + 1);
  }

  return current;
}

export type SlaStatus = "on-track" | "at-risk" | "breached" | "resolved";

export interface SlaStatusInfo {
  status: SlaStatus;
  timeRemaining: number; // milliseconds
  percentComplete: number; // 0-100
  isBreached: boolean;
}

/**
 * Check the current SLA status for a grievance.
 * Returns status, time remaining, and breach state.
 */
export function checkSlaStatus(
  startedAt: Date,
  expectedResolutionAt: Date,
  resolvedAt: Date | null,
  isBreached: boolean
): SlaStatusInfo {
  const now = new Date();
  const start = new Date(startedAt).getTime();
  const expected = new Date(expectedResolutionAt).getTime();
  const resolved = resolvedAt ? new Date(resolvedAt).getTime() : null;

  // If resolved, return resolved status
  if (resolved) {
    return {
      status: "resolved",
      timeRemaining: 0,
      percentComplete: 100,
      isBreached: isBreached || resolved > expected,
    };
  }

  const currentTime = now.getTime();
  const timeRemaining = expected - currentTime;
  const totalDuration = expected - start;
  const elapsed = currentTime - start;
  const percentComplete = Math.min(
    100,
    Math.max(0, (elapsed / totalDuration) * 100)
  );

  // If breached (past expected resolution time)
  if (isBreached || timeRemaining <= 0) {
    return {
      status: "breached",
      timeRemaining: timeRemaining,
      percentComplete: 100,
      isBreached: true,
    };
  }

  // At risk: less than 25% time remaining
  const percentRemaining = (timeRemaining / totalDuration) * 100;
  if (percentRemaining < 25) {
    return {
      status: "at-risk",
      timeRemaining,
      percentComplete,
      isBreached: false,
    };
  }

  // On track
  return {
    status: "on-track",
    timeRemaining,
    percentComplete,
    isBreached: false,
  };
}

/**
 * Format time remaining in human-readable format.
 * Examples: "2 days", "3 hours", "45 minutes", "Overdue by 2 days"
 */
export function formatTimeRemaining(milliseconds: number): string {
  const isOverdue = milliseconds < 0;
  const absMs = Math.abs(milliseconds);

  const minutes = Math.floor(absMs / (1000 * 60));
  const hours = Math.floor(absMs / (1000 * 60 * 60));
  const days = Math.floor(absMs / (1000 * 60 * 60 * 24));

  let formatted: string;
  if (days > 0) {
    formatted = `${days} day${days !== 1 ? "s" : ""}`;
  } else if (hours > 0) {
    formatted = `${hours} hour${hours !== 1 ? "s" : ""}`;
  } else if (minutes > 0) {
    formatted = `${minutes} minute${minutes !== 1 ? "s" : ""}`;
  } else {
    formatted = "less than a minute";
  }

  return isOverdue ? `Overdue by ${formatted}` : formatted;
}

/**
 * Get color variant for SLA status badge/indicator.
 */
export function getSlaStatusColor(status: SlaStatus): string {
  switch (status) {
    case "on-track":
      return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200";
    case "at-risk":
      return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200";
    case "breached":
      return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200";
    case "resolved":
      return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200";
    default:
      return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200";
  }
}

/**
 * Get display label for SLA status.
 */
export function getSlaStatusLabel(status: SlaStatus): string {
  switch (status) {
    case "on-track":
      return "On Track";
    case "at-risk":
      return "At Risk";
    case "breached":
      return "Breached";
    case "resolved":
      return "Resolved";
    default:
      return "Unknown";
  }
}
