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

import { Suspense } from "react";
import { GrievanceDashboardClient } from "../_components/grievance-dashboard-client";
import {
  getAllGrievances,
  getGrievanceStats,
  getAvailableAgents,
} from "@/actions/grievances";
import { checkPermission } from "@/lib/rbac";
import { Resources, Actions } from "@/lib/constants/rbac";
import { Forbidden } from "@/components/forbidden";

interface GrievancesPageProps {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

async function GrievanceDashboardContent({ searchParams }: { searchParams: { [key: string]: string | string[] | undefined } }) {
  // Check if user has admin access to grievances dashboard (admin or DPO only)
  const canAccessAdmin = await checkPermission(Resources.GRIEVANCE_ADMIN, Actions.READ);

  if (!canAccessAdmin) {
    return (
      <Forbidden requiredRole="privy_cgp_admin or privy_data_protection_officer" />
    );
  }

  // Check UPDATE permission for assignment actions
  const canUpdate = await checkPermission(Resources.GRIEVANCE, Actions.UPDATE);

  // Parse search params for server-side filtering
  const page = searchParams?.page ? parseInt(searchParams.page as string) : 1;
  const pageSize = searchParams?.pageSize ? parseInt(searchParams.pageSize as string) : 10;

  // Extract filters only if they exist and are not "all"
  const getFilterValue = (key: string) => {
    const value = searchParams?.[key];
    return value && value !== "all" ? (value as any) : undefined;
  };

  const status = getFilterValue("status");
  const category = getFilterValue("category");
  const severity = getFilterValue("severity");
  const slaStatus = getFilterValue("slaStatus");
  const assignedToId = getFilterValue("assignedToId");
  const search = searchParams?.search ? (searchParams.search as string) : undefined;

  // Fetch all data in parallel
  const [grievancesResult, statsResult, agentsResult] = await Promise.all([
    getAllGrievances({
      page,
      pageSize,
      status,
      category,
      severity,
      slaStatus,
      assignedToId,
      search,
      sortBy: "createdAt",
      sortOrder: "desc"
    }),
    getGrievanceStats(),
    getAvailableAgents(),
  ]);

  if (!grievancesResult.success) {
    return (
      <div className="flex items-center justify-center h-96">
        <div className="text-center">
          <p className="text-destructive">{grievancesResult.error}</p>
        </div>
      </div>
    );
  }

  const stats = statsResult.success ? statsResult.data : null;
  const agents = agentsResult.success ? agentsResult.data : [];

  return (
    <div className="pt-4 px-6">
      <div className="mx-auto space-y-6">
        <GrievanceDashboardClient
          initialGrievances={grievancesResult.data?.grievances || []}
          initialPagination={grievancesResult.data?.pagination}
          stats={stats}
          agents={agents}
          canUpdate={canUpdate}
        />
      </div>
    </div>
  );
}

export default async function GrievancesPage(props: GrievancesPageProps) {
  const searchParams = await props.searchParams;
  return (
    <Suspense
      fallback={
        <div className="flex items-center justify-center h-96">
          <div className="text-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto"></div>
            <p className="mt-2 text-sm text-muted-foreground">
              Loading grievances...
            </p>
          </div>
        </div>
      }
    >
      <GrievanceDashboardContent searchParams={searchParams} />
    </Suspense>
  );
}
