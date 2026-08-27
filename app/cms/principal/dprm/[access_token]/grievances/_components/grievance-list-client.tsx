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

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  GRIEVANCE_CATEGORY_COLORS,
  GRIEVANCE_CATEGORY_LABELS,
  GRIEVANCE_STATUS_COLORS,
  GRIEVANCE_STATUS_LABELS,
} from "@/lib/constants/grievances";
import type { GrievanceCategory, GrievanceStatus } from "@prisma/client";
import { format } from "date-fns";
import { differenceInCalendarDays } from "date-fns";
import { ArrowLeft, ChevronRight, Filter, Plus, Search } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { DprmPageHeader } from "@/components/dprm/dprm-page-header";

// Helper function to calculate days remaining
function calculateDaysRemaining(expectedResolutionAt: Date): string {
  const now = new Date();
  const expectedDate = new Date(expectedResolutionAt);
  const daysRemaining = differenceInCalendarDays(expectedDate, now);

  if (daysRemaining < 0) {
    return "Overdue";
  } else if (daysRemaining === 0) {
    return "Due today";
  } else if (daysRemaining === 1) {
    return "1 day remaining";
  } else {
    return `${daysRemaining} days remaining`;
  }
}

interface GrievanceListClientProps {
  token: string;
  grievances: Array<{
    id: number;
    publicId: string;
    subject: string;
    status: GrievanceStatus;
    category: GrievanceCategory;
    createdAt: Date;
    updatedAt: Date;
    businessProcess: {
      name: string;
    };
    slaTracker?: {
      expectedResolutionAt: Date;
    } | null;
  }>;
}

export default function GrievanceListClient({
  token,
  grievances,
}: GrievanceListClientProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [categoryFilter, setCategoryFilter] = useState<string>("all");
  const [showFilters, setShowFilters] = useState(false);

  // Filter grievances
  const filteredGrievances = grievances.filter((grievance) => {
    const matchesSearch =
      searchQuery === "" ||
      grievance.subject.toLowerCase().includes(searchQuery.toLowerCase()) ||
      grievance.publicId.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesStatus =
      statusFilter === "all" || grievance.status === statusFilter;

    const matchesCategory =
      categoryFilter === "all" || grievance.category === categoryFilter;

    return matchesSearch && matchesStatus && matchesCategory;
  });

  const activeFiltersCount = [
    statusFilter !== "all",
    categoryFilter !== "all",
  ].filter(Boolean).length;

  return (
    <div className="min-h-screen bg-[#FAFAFB]">
      {/* Sticky Header */}
      <header className="sticky top-0 z-10 flex items-center justify-between gap-2 border border-[#E7E8E9] bg-white p-3">
        <div className="flex items-center gap-2">
          <Link href={`/cms/principal/dprm/${token}`}>
            <Button variant="ghost" size="icon" className="h-9 w-9">
              <ArrowLeft className="h-5 w-5" />
            </Button>
          </Link>
          <h1 className="text-lg font-bold">My Requests</h1>
        </div>
        <Link href={`/cms/principal/dprm/${token}/grievances/new`}>
          <Button size="sm" className="gap-2 h-9">
            <Plus className="h-4 w-4" />
            <span className="hidden sm:inline">Raise Request</span>
            <span className="sm:hidden">New</span>
          </Button>
        </Link>
      </header>

      {/* Content */}
      <div className="p-4 space-y-4">
        {/* Search and Filter Toggle */}
        <div className="flex gap-2">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search by subject or ticket ID..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-9"
            />
          </div>
          <Button
            variant="outline"
            size="icon"
            onClick={() => setShowFilters(!showFilters)}
            className="relative"
          >
            <Filter className="h-4 w-4" />
            {activeFiltersCount > 0 && (
              <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-xs text-primary-foreground">
                {activeFiltersCount}
              </span>
            )}
          </Button>
        </div>

        {/* Filter Panel */}
        {showFilters && (
          <Card>
            <CardContent className="pt-6 space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Status</label>
                <Select value={statusFilter} onValueChange={setStatusFilter}>
                  <SelectTrigger>
                    <SelectValue placeholder="All statuses" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Statuses</SelectItem>
                    <SelectItem value="SUBMITTED">
                      {GRIEVANCE_STATUS_LABELS.SUBMITTED}
                    </SelectItem>
                    <SelectItem value="ASSIGNED">
                      {GRIEVANCE_STATUS_LABELS.ASSIGNED}
                    </SelectItem>
                    <SelectItem value="IN_PROGRESS">
                      {GRIEVANCE_STATUS_LABELS.IN_PROGRESS}
                    </SelectItem>
                    <SelectItem value="RESOLVED">
                      {GRIEVANCE_STATUS_LABELS.RESOLVED}
                    </SelectItem>
                    <SelectItem value="REOPENED">
                      {GRIEVANCE_STATUS_LABELS.REOPENED}
                    </SelectItem>
                    <SelectItem value="CLOSED">
                      {GRIEVANCE_STATUS_LABELS.CLOSED}
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Category</label>
                <Select
                  value={categoryFilter}
                  onValueChange={setCategoryFilter}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="All categories" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Categories</SelectItem>
                    <SelectItem value="CONSENT_UPDATE">
                      {GRIEVANCE_CATEGORY_LABELS.CONSENT_UPDATE}
                    </SelectItem>
                    <SelectItem value="WITHDRAW_CONSENT">
                      {GRIEVANCE_CATEGORY_LABELS.WITHDRAW_CONSENT}
                    </SelectItem>
                    <SelectItem value="ERASE_DATA">
                      {GRIEVANCE_CATEGORY_LABELS.ERASE_DATA}
                    </SelectItem>
                    <SelectItem value="PROCESSING_PURPOSE_ENQUIRY">
                      {GRIEVANCE_CATEGORY_LABELS.PROCESSING_PURPOSE_ENQUIRY}
                    </SelectItem>
                    <SelectItem value="REPORT_BREACH">
                      {GRIEVANCE_CATEGORY_LABELS.REPORT_BREACH}
                    </SelectItem>
                    <SelectItem value="REVIEW_REQUEST">
                      {GRIEVANCE_CATEGORY_LABELS.REVIEW_REQUEST}
                    </SelectItem>
                    <SelectItem value="NOMINATE_MEMBER">
                      {GRIEVANCE_CATEGORY_LABELS.NOMINATE_MEMBER}
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button
                variant="outline"
                onClick={() => {
                  setStatusFilter("all");
                  setCategoryFilter("all");
                }}
                className="w-full"
              >
                Clear Filters
              </Button>
            </CardContent>
          </Card>
        )}

        {/* Results Count */}
        <div className="text-sm text-muted-foreground">
          Showing {filteredGrievances.length} of {grievances.length} requests
        </div>

        {/* Grievance List */}
        {filteredGrievances.length === 0 ? (
          <Card className="border-2 border-dashed">
            <CardContent className="flex flex-col items-center justify-center py-16">
              <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mb-4">
                <Search className="h-8 w-8 text-muted-foreground" />
              </div>
              <p className="text-center text-lg font-medium mb-2">
                {searchQuery ||
                  statusFilter !== "all" ||
                  categoryFilter !== "all"
                  ? "No requests found"
                  : "No requests yet"}
              </p>
              <p className="text-center text-sm text-muted-foreground max-w-sm">
                {searchQuery ||
                  statusFilter !== "all" ||
                  categoryFilter !== "all"
                  ? "Try adjusting your filters or search terms"
                  : "Click 'Raise Request' to submit your first grievance"}
              </p>
            </CardContent>
          </Card>
        ) : (
          <div className="space-y-3">
            {filteredGrievances.map((grievance) => (
              <Card
                key={grievance.id}
                className="hover:shadow-md transition-all duration-200 cursor-pointer border-2 hover:border-primary/20"
              >
                <CardContent className="p-4">
                  <div className="space-y-3">
                    {/* Header Row */}
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex-1 min-w-0">
                        <h3 className="font-medium truncate">
                          {grievance.subject}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {grievance.publicId}
                        </p>
                      </div>
                      <ChevronRight className="h-5 w-5 text-muted-foreground flex-shrink-0" />
                    </div>

                    {/* Status and Category Badges */}
                    <div className="flex flex-wrap gap-2">
                      <Badge
                        variant="secondary"
                        className={`${GRIEVANCE_STATUS_COLORS[grievance.status].bg
                          } ${GRIEVANCE_STATUS_COLORS[grievance.status].text} ${GRIEVANCE_STATUS_COLORS[grievance.status].border
                          }`}
                      >
                        {GRIEVANCE_STATUS_LABELS[grievance.status]}
                      </Badge>
                      <Badge
                        variant="outline"
                        className={
                          GRIEVANCE_CATEGORY_COLORS[grievance.category]
                        }
                      >
                        {GRIEVANCE_CATEGORY_LABELS[grievance.category]}
                      </Badge>
                    </div>

                    {/* Meta Information */}
                    <div className="flex flex-col gap-1 text-xs text-muted-foreground">
                      <div className="flex items-center justify-between">
                        <span>Process:</span>
                        <span className="font-medium text-foreground">
                          {grievance.businessProcess.name}
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>Created:</span>
                        <span className="font-medium text-foreground">
                          {format(
                            new Date(grievance.createdAt),
                            "MMM dd, yyyy"
                          )}
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>Last Updated:</span>
                        <span className="font-medium text-foreground">
                          {format(
                            new Date(grievance.updatedAt),
                            "MMM dd, yyyy 'at' HH:mm"
                          )}
                        </span>
                      </div>
                      {grievance.slaTracker?.expectedResolutionAt && (
                        <div className="flex items-center justify-between">
                          <span>Expected Resolution:</span>
                          <span className="font-medium text-foreground">
                            {calculateDaysRemaining(
                              grievance.slaTracker.expectedResolutionAt
                            )}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
