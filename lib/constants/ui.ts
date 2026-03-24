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
 * UI Constants
 * All UI-related constants including breakpoints, dimensions, and UI configuration
 */

/**
 * Responsive breakpoints
 */
export const BREAKPOINTS = {
  MOBILE: 768, // px - matches Tailwind's md breakpoint
} as const;

export const MOBILE_BREAKPOINT = BREAKPOINTS.MOBILE;

/**
 * Sidebar configuration
 */
export const SIDEBAR = {
  COOKIE_NAME: "sidebar_state",
  COOKIE_MAX_AGE: 60 * 60 * 24 * 7, // 7 days in seconds
  WIDTH: "16rem",
  WIDTH_MOBILE: "18rem",
  WIDTH_ICON: "3rem",
  KEYBOARD_SHORTCUT: "b",
} as const;

export const SIDEBAR_COOKIE_NAME = SIDEBAR.COOKIE_NAME;
export const SIDEBAR_COOKIE_MAX_AGE = SIDEBAR.COOKIE_MAX_AGE;
export const SIDEBAR_WIDTH = SIDEBAR.WIDTH;
export const SIDEBAR_WIDTH_MOBILE = SIDEBAR.WIDTH_MOBILE;
export const SIDEBAR_WIDTH_ICON = SIDEBAR.WIDTH_ICON;
export const SIDEBAR_KEYBOARD_SHORTCUT = SIDEBAR.KEYBOARD_SHORTCUT;
