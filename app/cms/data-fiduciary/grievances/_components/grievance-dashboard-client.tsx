"use client";
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

import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  GRIEVANCE_CATEGORY_LABELS,
  GRIEVANCE_STATUS_LABELS,
  GRIEVANCE_SEVERITY_LABELS,
} from "@/lib/constants/grievances";
import {
  GrievanceCategory,
  GrievanceStatus,
  GrievanceSeverity,
} from "@prisma/client";
import { useState, useEffect, useCallback } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { AssignAgentDialog } from "./assign-agent-dialog";
import {
  GrievanceDataTable,
  type GrievanceTableData,
} from "./grievance-data-table";
import { GrievanceStats } from "./grievance-stats";
import { FeedbackAnalyticsDashboard } from "./feedback-analytics-dashboard";
import { checkSlaStatus } from "@/lib/utils/sla";
import { BarChart3 } from "lucide-react";

type SlaStatus = "on-track" | "at-risk" | "breached" | "resolved";

interface GrievanceDashboardClientProps {
  initialGrievances: GrievanceTableData[];
  initialPagination?: {
    total: number;
    page: number;
    pageSize: number;
    totalPages: number;
  };
  stats: {
    total: number;
    submitted: number;
    assigned: number;
    inProgress: number;
    resolved: number;
    closed: number;
    reopened: number;
  } | null;
  agents: Array<{
    id: string;
    name: string | null;
    email: string | null;
  }>;
  canUpdate: boolean;
}

export function GrievanceDashboardClient({
  initialGrievances,
  initialPagination,
  stats,
  agents,
  canUpdate,
}: GrievanceDashboardClientProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const pathname = usePathname();

  // Get tab from URL or default to 'grievances'
  const [activeTab, setActiveTab] = useState<string>(
    searchParams.get("tab") || "grievances"
  );

  const [searchQuery, setSearchQuery] = useState(searchParams.get("search") || "");
  const statusFilter = searchParams.get("status") || "all";
  const categoryFilter = searchParams.get("category") || "all";
  const severityFilter = searchParams.get("severity") || "all";
  const slaStatusFilter = searchParams.get("slaStatus") || "all";
  const assignedToFilter = searchParams.get("assignedToId") || "all";

  // Debounce search update to URL
  useEffect(() => {
    const timer = setTimeout(() => {
      const params = new URLSearchParams(searchParams.toString());
      if (searchQuery) {
        params.set("search", searchQuery);
      } else {
        params.delete("search");
      }

      const currentSearch = searchParams.get("search");
      if (currentSearch !== searchQuery && !(searchQuery === "" && currentSearch === null)) {
        params.set("page", "1");
        router.push(`${pathname}?${params.toString()}`, { scroll: false });
      }
    }, 500);
    return () => clearTimeout(timer);
  }, [searchQuery, pathname, router, searchParams]);

  const updateFilter = useCallback((key: string, value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (value === "all" || !value) {
      params.delete(key);
    } else {
      params.set(key, value);
    }
    params.set("page", "1");
    router.push(`${pathname}?${params.toString()}`, { scroll: false });
  }, [pathname, router, searchParams]);

  const [assignDialogOpen, setAssignDialogOpen] = useState(false);
  const [selectedGrievanceId, setSelectedGrievanceId] = useState<number | null>(
    null
  );
  const [selectedGrievanceAssignedTo, setSelectedGrievanceAssignedTo] =
    useState<string | null>(null);

  // State to trigger detail sheet opening
  const [openDetailSheetForId, setOpenDetailSheetForId] = useState<
    number | string | null
  >(null);

  // Check for id query parameter on mount and open detail sheet
  useEffect(() => {
    const idParam = searchParams.get("id");
    if (idParam) {
      setOpenDetailSheetForId(idParam);
    }
  }, [searchParams]);

  // Handler to remove id from URL when detail sheet closes
  const handleDetailSheetClose = () => {
    const params = new URLSearchParams(searchParams.toString());
    params.delete("id");
    const newUrl = params.toString() ? `?${params.toString()}` : "";
    router.replace(`${pathname}${newUrl}`, {
      scroll: false,
    });
    setOpenDetailSheetForId(null);
  };

  // Update URL when tab changes
  useEffect(() => {
    const params = new URLSearchParams(searchParams.toString());
    if (activeTab === "grievances") {
      params.delete("tab");
    } else {
      params.set("tab", activeTab);
    }
    const newUrl = params.toString() ? `?${params.toString()}` : "";
    router.replace(`${pathname}${newUrl}`, {
      scroll: false,
    });
  }, [activeTab, searchParams, router, pathname]);

  const handleTabChange = (value: string) => {
    setActiveTab(value);
  };



  const handleAssign = (grievanceId: number) => {
    const grievance = initialGrievances.find((g) => g.id === grievanceId);
    setSelectedGrievanceId(grievanceId);
    setSelectedGrievanceAssignedTo(grievance?.assignedTo?.id || null);
    setAssignDialogOpen(true);
  };

  return (
    <>
      <Tabs
        value={activeTab}
        onValueChange={handleTabChange}
        className="space-y-6"
      >
        <TabsList className="grid w-full max-w-md grid-cols-2">
          <TabsTrigger value="grievances">All Grievances</TabsTrigger>
          <TabsTrigger value="analytics">
            <BarChart3 className="h-4 w-4 mr-2" />
            Feedback Analytics
          </TabsTrigger>
        </TabsList>

        <TabsContent value="grievances" className="space-y-6">
          {/* Stats Section */}
          <GrievanceStats stats={stats} />

          {/* Filters Section */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <h5 className="text-lg font-semibold tracking-tight">
                Grievances ({initialPagination?.total || initialGrievances.length})
              </h5>
            </div>

            {/* Filters Row */}
            <div className="flex flex-col sm:flex-row flex-wrap w-full gap-3 items-center">
              {/* Search bar */}
              <div className="w-full sm:flex-1 min-w-[200px]">
                <Input
                  placeholder="Search references, subjects, or principals..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full"
                />
              </div>

              {/* Status Filter */}
              <Select value={statusFilter} onValueChange={(val) => updateFilter("status", val)}>
                <SelectTrigger className="w-[140px]">
                  <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Statuses</SelectItem>
                  {Object.values(GrievanceStatus).map((status) => (
                    <SelectItem key={status} value={status}>
                      {GRIEVANCE_STATUS_LABELS[status]}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              {/* Category Filter */}
              <Select value={categoryFilter} onValueChange={(val) => updateFilter("category", val)}>
                <SelectTrigger className="w-[140px]">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  {Object.values(GrievanceCategory).map((category) => (
                    <SelectItem key={category} value={category}>
                      {GRIEVANCE_CATEGORY_LABELS[category]}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              {/* Severity Filter */}
              <Select value={severityFilter} onValueChange={(val) => updateFilter("severity", val)}>
                <SelectTrigger className="w-[130px]">
                  <SelectValue placeholder="Severity" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Severities</SelectItem>
                  {Object.values(GrievanceSeverity).map((severity) => (
                    <SelectItem key={severity} value={severity}>
                      {GRIEVANCE_SEVERITY_LABELS[severity]}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              {/* SLA Status Filter */}
              <Select
                value={slaStatusFilter}
                onValueChange={(val) => updateFilter("slaStatus", val)}
              >
                <SelectTrigger className="w-[130px]">
                  <SelectValue placeholder="SLA Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All SLA Status</SelectItem>
                  <SelectItem value="on-track">On Track</SelectItem>
                  <SelectItem value="at-risk">At Risk</SelectItem>
                  <SelectItem value="breached">Breached</SelectItem>
                  <SelectItem value="resolved">Resolved</SelectItem>
                </SelectContent>
              </Select>

              {/* Assigned To Filter */}
              <Select
                value={assignedToFilter}
                onValueChange={(val) => updateFilter("assignedToId", val)}
              >
                <SelectTrigger className="w-[140px]">
                  <SelectValue placeholder="Assigned To" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Agents</SelectItem>
                  <SelectItem value="unassigned">Unassigned</SelectItem>
                  {agents.map((agent) => (
                    <SelectItem key={agent.id} value={agent.id}>
                      {agent.name || agent.email || "Unknown"}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Table Section */}
          <GrievanceDataTable
            data={initialGrievances}
            pagination={initialPagination}
            onAssign={canUpdate ? handleAssign : undefined}
            openDetailSheetForId={openDetailSheetForId}
            onDetailSheetClose={handleDetailSheetClose}
          />
        </TabsContent>

        <TabsContent value="analytics">
          <FeedbackAnalyticsDashboard />
        </TabsContent>
      </Tabs>

      {/* Assign Dialog */}
      <AssignAgentDialog
        open={assignDialogOpen}
        onOpenChange={setAssignDialogOpen}
        grievanceId={selectedGrievanceId}
        currentAssignedTo={selectedGrievanceAssignedTo}
        agents={agents}
      />
    </>
  );
}
