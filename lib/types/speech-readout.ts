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
 * Content structure for speech readout
 * Pre-collated and sanitized content ready for text-to-speech
 */
export interface NoticeReadoutContent {
  title: string;              // Notice type (e.g., "CONSENT NOTICE")
  subtitle: string;           // Notice subtitle (e.g., "Company is seeking consent for...")
  description: string;        // Notice description/body text
  sections: ReadoutSection[]; // Consent/processing purposes sections
  rights: string;             // Rights information text
  cta: string;                // Call-to-action question
}

export interface ReadoutSection {
  title: string;    // Section title (e.g., "KYC")
  content: string;  // Section content
}
