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

export interface ConsentFilters {
  searchType?: "reference_id" | "data_principal_id";
  searchQuery?: string;
  startDate?: string;
  endDate?: string;
  businessProcessIds: string[];
  status?: string[];
  noticeStatus?: string[];
  page?: number;
  pageSize?: number;
}

export interface ConsentTableRow {
  publicId: string;
  referenceId: string;
  dataPrincipalId: string;
  status: string;
  noticeStatus: string | null;
  updatedAt: string | Date;
  businessProcess?: {
    name: string;
    code: string;
  } | null;
  businessUnit?: {
    name: string;
  } | null;
}

export interface ConsentResponse {
  data: ConsentTableRow[];
  total: number;
  totalPages: number;
}
