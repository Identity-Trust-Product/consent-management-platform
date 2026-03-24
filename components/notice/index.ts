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

// Common components
export { NoticeHeader } from "./notice-header";
export { NoticeFooter } from "./notice-footer";
export { NoticeButton } from "./notice-button";
export { NoticeBadge } from "./notice-badge";
export { AccordionSelect } from "./accordion-select";
export { NoticeSelectButton } from "./notice-select-button";
export { RejectConfirmationDialog } from "./reject-confirmation-dialog";
export { NoticeConsentDuration } from "./notice-consent-duration";

// Parent components
export { NoticeUserAttribute } from "./notice-user-attribute";
export { NoticeProcessingPurpose } from "./notice-processing-purpose";
export { NoticeConsentPurpose } from "./notice-consent-purpose";

// Templates
export { DefaultNoticeTemplate } from "./templates/default-notice-template";

// Types
export type {
  NoticeData,
  ConsentPurposeData,
  ProcessingPurposeData,
  UserAttributeData,
  SelectionState,
  ConsentSelection,
  BusinessProcessRuleSelection,
} from "./types";
