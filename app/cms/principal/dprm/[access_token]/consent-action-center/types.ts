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

export interface ProcessingData {
  id: string;
  title: string;
  description: string;
  oldDescription?: string;
  isNew: boolean;
  isDeleted?: boolean;
  isExpiring?: boolean;
  expiresAt?: Date | string;
  daysUntilExpiry?: number;
  defaultChecked: boolean;
  mandatory: boolean;
  updateNotice: string | null;
  descriptionChangeNotice?: string;
  ruleChangeNotices?: string[];
  attributes: {
    list: {
      name: string;
      status: string;
    }[];
    newlyAddedCount: number;
    deletedCount?: number;
    deletedList?: string[];
  };
  translations: Record<string, any>;
}

export interface PurposeData {
  id: string;
  title: string;
  duration: string;
  isNew: boolean;
  isDeleted?: boolean;
  defaultChecked: boolean;
  processingList: ProcessingData[];
  translations: any;
}

export interface ConsentData {
  services: Record<
    string,
    {
      name: string;
      purposes: PurposeData[];
    }
  >;
}

export interface RevokeProcessing {
  id: string;
  title: string;
  mandatory: boolean;
  translations: any;
  description: string;
  attributes: string[];
}

export interface RevokePurpose {
  id: string;
  title: string;
  processingList: RevokeProcessing[];
  translations: any;
  duration: string;
}

export interface RevokeData {
  services: Record<
    string,
    {
      name: string;
      purposes: RevokePurpose[];
    }
  >;
}
