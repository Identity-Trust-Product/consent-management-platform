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

import { getAdminFeedbackAnalytics } from "@/actions/grievances";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Skeleton } from "@/components/ui/skeleton";
import { Loader2, Star, TrendingUp, MessageSquare, RefreshCw, Calendar, Filter } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface AnalyticsData {
  overview: {
    totalFeedback: number;
    totalResolved: number;
    responseRate: number;
    avgRating: number;
    satisfactionRate: number;
    positiveCount: number;
    neutralCount: number;
    negativeCount: number;
  };
  ratingDistribution: {
    star1: number;
    star2: number;
    star3: number;
    star4: number;
    star5: number;
  };
  topReasons: Array<{ reason: string; count: number }>;
  agentLeaderboard: Array<{
    agentId: string;
    agentName: string;
    totalFeedback: number;
    avgRating: number;
    positiveCount: number;
    neutralCount: number;
    negativeCount: number;
  }>;
  categoryBreakdown: Array<{
    category: string;
    feedbackCount: number;
    avgRating: number;
  }>;
}

export function FeedbackAnalyticsDashboard() {
  const [analytics, setAnalytics] = useState<AnalyticsData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Filters for agent table
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState<"rating" | "count">("rating");
  const [minRating, setMinRating] = useState<string>("all");

  // Interactive rating filter from chart clicks
  const [selectedRating, setSelectedRating] = useState<number | null>(null);

  const loadAnalytics = async () => {
    try {
      setIsLoading(true);
      const result = await getAdminFeedbackAnalytics();

      if (result.success && result.data) {
        setAnalytics(result.data as AnalyticsData);
      } else {
        setError(result.error || "Failed to load analytics");
      }
    } catch (err) {
      setError("An unexpected error occurred");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadAnalytics();
  }, []);

  // Filter and sort agents
  const filteredAgents = analytics?.agentLeaderboard
    .filter((agent) => {
      const matchesSearch = agent.agentName
        .toLowerCase()
        .includes(searchQuery.toLowerCase());
      const matchesRating =
        minRating === "all" || agent.avgRating >= parseFloat(minRating);
      return matchesSearch && matchesRating;
    })
    .sort((a, b) => {
      if (sortBy === "rating") {
        return b.avgRating - a.avgRating;
      }
      return b.totalFeedback - a.totalFeedback;
    }) || [];

  const handleRatingClick = (rating: number) => {
    // Toggle selection
    if (selectedRating === rating) {
      setSelectedRating(null);
      setMinRating("all");
    } else {
      setSelectedRating(rating);
      setMinRating(rating.toString());
    }
  };

  const clearRatingFilter = () => {
    setSelectedRating(null);
    setMinRating("all");
  };

  if (isLoading) {
    return <FeedbackAnalyticsSkeleton />;
  }

  if (error) {
    return (
      <div className="flex items-center justify-center h-96">
        <div className="text-center">
          <p className="text-destructive">{error}</p>
        </div>
      </div>
    );
  }

  if (!analytics) {
    return null;
  }

  const { overview, ratingDistribution, agentLeaderboard } = analytics;

  return (
    <div className="space-y-6">
      {/* Action Bar - Only Refresh */}
      <div className="flex justify-end">
        <Button
          variant="outline"
          size="sm"
          onClick={loadAnalytics}
          disabled={isLoading}
        >
          <RefreshCw className={`h-4 w-4 mr-2 ${isLoading ? 'animate-spin' : ''}`} />
          Refresh
        </Button>
      </div>

      {/* Key Metrics - Compact Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Average Rating */}
        <Card>
          <CardHeader className="pb-3">
            <CardDescription>Average Rating</CardDescription>
            <CardTitle className="text-3xl flex items-center gap-2">
              <Star className="h-6 w-6 fill-yellow-400 text-yellow-400" />
              {overview.avgRating}/5
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-sm text-muted-foreground">
              From {overview.totalFeedback} responses ({overview.responseRate}% response rate)
            </div>
          </CardContent>
        </Card>

        {/* Satisfaction Rate */}
        <Card>
          <CardHeader className="pb-3">
            <CardDescription>Satisfaction Rate</CardDescription>
            <CardTitle className="text-3xl flex items-center gap-2">
              <TrendingUp className="h-6 w-6 text-green-600" />
              {overview.satisfactionRate}%
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-sm space-y-1">
              <div className="flex justify-between">
                <span className="text-green-600">Positive (4-5★)</span>
                <span className="font-medium">{overview.positiveCount}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-red-600">Needs Attention (1-2★)</span>
                <span className="font-medium">{overview.negativeCount}</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Total Feedback */}
        <Card>
          <CardHeader className="pb-3">
            <CardDescription>Total Feedback</CardDescription>
            <CardTitle className="text-3xl flex items-center gap-2">
              <MessageSquare className="h-6 w-6 text-blue-600" />
              {overview.totalFeedback}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-sm text-muted-foreground">
              Out of {overview.totalResolved} resolved tickets
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Rating Distribution - Now Interactive */}
        <Card>
          <CardHeader>
            <CardTitle>Rating Distribution</CardTitle>
            <CardDescription>
              Click on a bar to filter agents by rating
              {selectedRating && (
                <Button
                  variant="link"
                  size="sm"
                  onClick={clearRatingFilter}
                  className="ml-2 h-auto p-0 text-xs"
                >
                  (Clear filter)
                </Button>
              )}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {Object.entries(ratingDistribution)
                .reverse()
                .map(([key, count]) => {
                  const stars = parseInt(key.replace("star", ""));
                  const percentage = overview.totalFeedback > 0
                    ? Math.round((count / overview.totalFeedback) * 100)
                    : 0;
                  const maxCount = Math.max(...Object.values(ratingDistribution));
                  const barWidth = maxCount > 0 ? (count / maxCount) * 100 : 0;
                  const isSelected = selectedRating === stars;

                  return (
                    <div key={key} className="space-y-1.5">
                      <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center gap-3 flex-1">
                          <span className="w-10 font-medium">{stars}★</span>
                          <button
                            onClick={() => handleRatingClick(stars)}
                            className="flex-1 h-8 bg-gray-100 dark:bg-gray-800 rounded-md overflow-hidden relative cursor-pointer hover:ring-2 hover:ring-primary transition-all"
                            title={`Click to filter agents with ${stars}★ and above`}
                          >
                            <div
                              className={`h-full transition-all duration-500 ${stars >= 4
                                  ? "bg-green-500"
                                  : stars === 3
                                    ? "bg-yellow-500"
                                    : "bg-red-500"
                                } ${isSelected ? "opacity-100 ring-2 ring-primary" : "opacity-80 hover:opacity-100"}`}
                              style={{ width: `${barWidth}%` }}
                            />
                            <span className="absolute inset-0 flex items-center px-3 text-xs font-medium">
                              {count} ({percentage}%)
                            </span>
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
            </div>
          </CardContent>
        </Card>

        {/* Top Agents - Now with Filters */}
        <Card>
          <CardHeader>
            <CardTitle>Top Performing Agents</CardTitle>
            <CardDescription>
              {filteredAgents.length > 0
                ? `Showing ${Math.min(5, filteredAgents.length)} of ${filteredAgents.length} agents`
                : "No agents match the filters"}
            </CardDescription>

            {/* Filters inside the card */}
            <div className="flex flex-col gap-3 pt-4">
              <Input
                placeholder="Search agents..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full"
              />
              <div className="flex gap-2">
                <Select value={minRating} onValueChange={setMinRating}>
                  <SelectTrigger className="flex-1">
                    <SelectValue placeholder="Min Rating" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Ratings</SelectItem>
                    <SelectItem value="4">4★ and above</SelectItem>
                    <SelectItem value="3">3★ and above</SelectItem>
                    <SelectItem value="2">2★ and above</SelectItem>
                    <SelectItem value="1">1★ and above</SelectItem>
                  </SelectContent>
                </Select>
                <Select value={sortBy} onValueChange={(v) => setSortBy(v as "rating" | "count")}>
                  <SelectTrigger className="flex-1">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="rating">By Rating</SelectItem>
                    <SelectItem value="count">By Count</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            {filteredAgents.length > 0 ? (
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-12">Rank</TableHead>
                    <TableHead>Agent</TableHead>
                    <TableHead className="text-right">Rating</TableHead>
                    <TableHead className="text-right">Count</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredAgents.slice(0, 5).map((agent, index) => (
                    <TableRow key={agent.agentId}>
                      <TableCell className="font-medium">
                        {index === 0 && "🥇"}
                        {index === 1 && "🥈"}
                        {index === 2 && "🥉"}
                        {index > 2 && `#${index + 1}`}
                      </TableCell>
                      <TableCell className="font-medium">{agent.agentName}</TableCell>
                      <TableCell className="text-right">
                        <div className="flex items-center justify-end gap-1">
                          <Star className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400" />
                          <span className="font-semibold">
                            {agent.avgRating.toFixed(1)}
                          </span>
                        </div>
                      </TableCell>
                      <TableCell className="text-right">
                        <Badge variant="secondary" className="font-mono">
                          {agent.totalFeedback}
                        </Badge>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            ) : (
              <p className="text-sm text-muted-foreground text-center py-8">
                No agents match your filters
              </p>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

// Skeleton Loading Component
function FeedbackAnalyticsSkeleton() {
  return (
    <div className="space-y-6">
      {/* Action Bar Skeleton */}
      <div className="flex justify-end">
        <Skeleton className="h-9 w-24" />
      </div>

      {/* Metric Cards Skeleton */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {[1, 2, 3].map((i) => (
          <Card key={i}>
            <CardHeader className="pb-3">
              <Skeleton className="h-4 w-32" />
              <Skeleton className="h-9 w-24 mt-2" />
            </CardHeader>
            <CardContent>
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-3/4 mt-2" />
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Chart Skeleton */}
        <Card>
          <CardHeader>
            <Skeleton className="h-6 w-48" />
            <Skeleton className="h-4 w-64 mt-2" />
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="flex items-center gap-3">
                  <Skeleton className="h-4 w-10" />
                  <Skeleton className="h-8 flex-1" />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Table Skeleton with Filters */}
        <Card>
          <CardHeader>
            <Skeleton className="h-6 w-56" />
            <Skeleton className="h-4 w-48 mt-2" />
            <div className="flex flex-col gap-3 pt-4">
              <Skeleton className="h-10 w-full" />
              <div className="flex gap-2">
                <Skeleton className="h-10 flex-1" />
                <Skeleton className="h-10 flex-1" />
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="flex items-center gap-4">
                  <Skeleton className="h-4 w-8" />
                  <Skeleton className="h-4 flex-1" />
                  <Skeleton className="h-4 w-16" />
                  <Skeleton className="h-6 w-12" />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
