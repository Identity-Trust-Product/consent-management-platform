"use server";
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

import { auth } from "@/auth";
import { Actions, Resources } from "@/lib/constants/rbac";
import prisma from "@/lib/prisma";
import { WebhookDeliveryStatus, WebhookEventType } from "@prisma/client";

/**
 * Webhook log with relations
 */
export interface WebhookLogWithRelations {
  id: number;
  publicId: string;
  eventId: string;
  eventType: WebhookEventType;
  payload: any;
  status: WebhookDeliveryStatus;
  httpStatus: number | null;
  attemptedAt: Date;
  responseTime: number | null;
  errorMessage: string | null;
  webhook: {
    publicId: string;
    endpointUrl: string;
    eventType: WebhookEventType;
    targetType: string;
    dataProcessorId: string | null;
    dataProcessor: {
      ouId: string;
      legalName: string;
      brandName: string;
    } | null;
  };
}

/**
 * Analytics stats for webhook logs
 */
export interface WebhookLogsAnalytics {
  totalAttempts: number;
  successRate: number;
  averageResponseTime: number;
  statusBreakdown: {
    delivered: number;
    failed: number;
    timeout: number;
    pending: number;
  };
  eventTypeDistribution: Array<{
    eventType: WebhookEventType;
    count: number;
  }>;
  recentDeliveries: Array<{
    date: string;
    delivered: number;
    failed: number;
  }>;
}

/**
 * Filters for webhook logs
 */
export interface WebhookLogsFilters {
  status?: WebhookDeliveryStatus;
  eventType?: WebhookEventType;
  targetType?: "DATA_FIDUCIARY" | "DATA_PROCESSOR";
  dateFrom?: Date;
  dateTo?: Date;
  webhookId?: string;
  page?: number;
  pageSize?: number;
  sortBy?: "attemptedAt" | "responseTime" | "status";
  sortOrder?: "asc" | "desc";
}

/**
 * Get webhook logs with filtering, pagination, and sorting
 */
export async function getWebhookLogs(filters: WebhookLogsFilters = {}): Promise<{
  success: boolean;
  data?: {
    logs: WebhookLogWithRelations[];
    pagination: {
      total: number;
      page: number;
      pageSize: number;
      totalPages: number;
    };
  };
  error?: string;
}> {
  try {
    const session = await auth();
    if (!session?.user) {
      return { success: false, error: "Unauthorized" };
    }

    // Build where clause
    const where: any = {};

    if (filters.status) {
      where.status = filters.status;
    }

    if (filters.eventType) {
      where.eventType = filters.eventType;
    }

    if (filters.webhookId) {
      where.webhook = {
        publicId: filters.webhookId,
      };
    }

    if (filters.targetType) {
      where.webhook = {
        ...where.webhook,
        targetType: filters.targetType,
      };
    }

    if (filters.dateFrom || filters.dateTo) {
      where.attemptedAt = {};
      if (filters.dateFrom) {
        where.attemptedAt.gte = filters.dateFrom;
      }
      if (filters.dateTo) {
        where.attemptedAt.lte = filters.dateTo;
      }
    }

    // Pagination
    const page = filters.page ?? 1;
    const pageSize = filters.pageSize ?? 50;
    const skip = (page - 1) * pageSize;

    // Sorting
    const sortBy = filters.sortBy ?? "attemptedAt";
    const sortOrder = filters.sortOrder ?? "desc";

    // Get total count
    const total = await prisma.webhookLog.count({ where });

    // Get logs
    const logs = await prisma.webhookLog.findMany({
      where,
      include: {
        webhook: {
          select: {
            publicId: true,
            endpointUrl: true,
            eventType: true,
            targetType: true,
            dataProcessorId: true,
            dataProcessor: {
              select: {
                ouId: true,
                legalName: true,
                brandName: true,
              },
            },
          },
        },
      },
      orderBy: {
        [sortBy]: sortOrder,
      },
      skip,
      take: pageSize,
    });

    return {
      success: true,
      data: {
        logs: logs as WebhookLogWithRelations[],
        pagination: {
          total,
          page,
          pageSize,
          totalPages: Math.ceil(total / pageSize),
        },
      },
    };
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : "Failed to fetch webhook logs",
    };
  }
}

/**
 * Get webhook logs analytics
 */
export async function getWebhookLogsAnalytics(filters: {
  dateFrom?: Date;
  dateTo?: Date;
} = {}): Promise<{
  success: boolean;
  data?: WebhookLogsAnalytics;
  error?: string;
}> {
  try {
    const session = await auth();
    if (!session?.user) {
      return { success: false, error: "Unauthorized" };
    }

    // Build date filter
    const dateFilter: any = {};
    if (filters.dateFrom || filters.dateTo) {
      dateFilter.attemptedAt = {};
      if (filters.dateFrom) {
        dateFilter.attemptedAt.gte = filters.dateFrom;
      }
      if (filters.dateTo) {
        dateFilter.attemptedAt.lte = filters.dateTo;
      }
    }

    // Get total attempts
    const totalAttempts = await prisma.webhookLog.count({
      where: dateFilter,
    });

    // Get status breakdown
    const statusBreakdown = await prisma.webhookLog.groupBy({
      by: ["status"],
      where: dateFilter,
      _count: {
        status: true,
      },
    });

    const statusCounts = {
      delivered: 0,
      failed: 0,
      timeout: 0,
      pending: 0,
    };

    statusBreakdown.forEach((item) => {
      const status = item.status.toLowerCase() as keyof typeof statusCounts;
      if (status in statusCounts) {
        statusCounts[status] = item._count.status;
      }
    });

    // Calculate success rate
    const successfulDeliveries = statusCounts.delivered;
    const successRate = totalAttempts > 0 ? (successfulDeliveries / totalAttempts) * 100 : 0;

    // Get average response time (only for delivered/failed)
    const avgResponseTimeResult = await prisma.webhookLog.aggregate({
      where: {
        ...dateFilter,
        responseTime: { not: null },
        status: { in: ["DELIVERED", "FAILED"] },
      },
      _avg: {
        responseTime: true,
      },
    });

    const averageResponseTime = avgResponseTimeResult._avg.responseTime ?? 0;

    // Get event type distribution
    const eventTypeDistribution = await prisma.webhookLog.groupBy({
      by: ["eventType"],
      where: dateFilter,
      _count: {
        eventType: true,
      },
      orderBy: {
        _count: {
          eventType: "desc",
        },
      },
    });

    // Get recent deliveries (last 7 days by default)
    const sevenDaysAgo = new Date();
    sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);

    const recentLogs = await prisma.webhookLog.findMany({
      where: {
        attemptedAt: {
          gte: filters.dateFrom ?? sevenDaysAgo,
          ...(filters.dateTo && { lte: filters.dateTo }),
        },
      },
      select: {
        attemptedAt: true,
        status: true,
      },
    });

    // Group by date
    const dailyStats = new Map<string, { delivered: number; failed: number }>();

    recentLogs.forEach((log) => {
      const dateKey = log.attemptedAt.toISOString().split("T")[0];
      if (!dailyStats.has(dateKey)) {
        dailyStats.set(dateKey, { delivered: 0, failed: 0 });
      }
      const stats = dailyStats.get(dateKey)!;
      if (log.status === "DELIVERED") {
        stats.delivered++;
      } else if (log.status === "FAILED" || log.status === "TIMEOUT") {
        stats.failed++;
      }
    });

    const recentDeliveries = Array.from(dailyStats.entries())
      .map(([date, stats]) => ({
        date,
        delivered: stats.delivered,
        failed: stats.failed,
      }))
      .sort((a, b) => a.date.localeCompare(b.date));

    return {
      success: true,
      data: {
        totalAttempts,
        successRate: Math.round(successRate * 100) / 100,
        averageResponseTime: Math.round(averageResponseTime),
        statusBreakdown: statusCounts,
        eventTypeDistribution: eventTypeDistribution.map((item) => ({
          eventType: item.eventType,
          count: item._count.eventType,
        })),
        recentDeliveries,
      },
    };
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : "Failed to fetch analytics",
    };
  }
}
