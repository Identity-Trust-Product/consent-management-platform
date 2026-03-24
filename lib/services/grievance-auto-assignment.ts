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
 * Grievance Auto-Assignment Service
 * Handles automatic assignment of grievances to available agents
 */

import prisma from "@/lib/prisma";
import { logger } from "@/lib/utils/logger";
import {
  AUTO_ASSIGNMENT_SETTINGS,
  type AssignmentStrategy,
} from "@/lib/constants/grievances";
import { GrievanceStatus } from "@prisma/client";

/**
 * Get available agents for grievance assignment
 * Returns agents with the grievance_agent or admin role
 */
async function getAvailableAgentsForAssignment() {
  const grievanceRole = await prisma.role.findFirst({
    where: { name: "privy_cgp_grievance_agent" },
  });

  const adminRole = await prisma.role.findFirst({
    where: { name: "privy_cgp_admin" },
  });

  const roleIds = [grievanceRole?.id, adminRole?.id].filter(
    Boolean
  ) as string[];

  if (roleIds.length === 0) {
    return [];
  }

  const agents = await prisma.user.findMany({
    where: {
      userRoles: {
        some: {
          roleId: {
            in: roleIds,
          },
        },
      },
    },
    select: {
      id: true,
      name: true,
      email: true,
    },
  });

  return agents;
}

/**
 * Get agent workload (count of active grievances)
 */
async function getAgentWorkload(agentId: string): Promise<number> {
  const activeCount = await prisma.grievance.count({
    where: {
      assignedToId: agentId,
      status: {
        in: [
          GrievanceStatus.ASSIGNED,
          GrievanceStatus.IN_PROGRESS,
          GrievanceStatus.RESOLVED,
        ],
      },
    },
  });

  return activeCount;
}

/**
 * Find the next agent using round-robin strategy
 * Uses the last assignment to determine the next agent
 */
async function findAgentByRoundRobin(
  agents: Array<{ id: string; name: string | null; email: string | null }>
): Promise<string | null> {
  if (agents.length === 0) return null;

  // Get the most recently assigned grievance
  const lastAssignment = await prisma.grievance.findFirst({
    where: {
      assignedToId: {
        not: null,
      },
    },
    orderBy: {
      createdAt: "desc",
    },
    select: {
      assignedToId: true,
    },
  });

  // If no previous assignments, assign to first agent
  if (!lastAssignment || !lastAssignment.assignedToId) {
    return agents[0].id;
  }

  // Find the current agent's index
  const currentIndex = agents.findIndex(
    (agent) => agent.id === lastAssignment.assignedToId
  );

  // Get next agent in round-robin fashion
  const nextIndex = (currentIndex + 1) % agents.length;
  return agents[nextIndex].id;
}

/**
 * Find the agent with the least workload
 */
async function findAgentByLeastLoaded(
  agents: Array<{ id: string; name: string | null; email: string | null }>
): Promise<string | null> {
  if (agents.length === 0) return null;

  // Get workload for all agents
  const agentWorkloads = await Promise.all(
    agents.map(async (agent) => ({
      agentId: agent.id,
      workload: await getAgentWorkload(agent.id),
    }))
  );

  // Sort by workload (ascending) and return agent with least workload
  agentWorkloads.sort((a, b) => a.workload - b.workload);

  // Check if the least loaded agent is under the max threshold
  if (agentWorkloads[0].workload >= AUTO_ASSIGNMENT_SETTINGS.MAX_ACTIVE_PER_AGENT) {
    logger.warn("All agents are at or above max capacity", {
      maxCapacity: AUTO_ASSIGNMENT_SETTINGS.MAX_ACTIVE_PER_AGENT
    });
    // Still assign to least loaded agent even if over capacity
  }

  return agentWorkloads[0].agentId;
}

/**
 * Auto-assign a grievance to an available agent
 * Returns the assigned agent ID or null if no agents available
 *
 * @param strategy - Assignment strategy: 'ROUND_ROBIN' or 'LEAST_LOADED'
 * @returns Agent ID or null
 */
export async function autoAssignGrievance(
  strategy: AssignmentStrategy = AUTO_ASSIGNMENT_SETTINGS.STRATEGY
): Promise<string | null> {
  try {
    // Check if auto-assignment is enabled
    if (!AUTO_ASSIGNMENT_SETTINGS.ENABLED) {
      logger.info("Auto-assignment is disabled");
      return null;
    }

    // Get available agents
    const agents = await getAvailableAgentsForAssignment();

    if (agents.length === 0) {
      logger.warn("No available agents for auto-assignment");
      return null;
    }

    // Apply assignment strategy
    let assignedAgentId: string | null = null;

    switch (strategy) {
      case "ROUND_ROBIN":
        assignedAgentId = await findAgentByRoundRobin(agents);
        break;
      case "LEAST_LOADED":
        assignedAgentId = await findAgentByLeastLoaded(agents);
        break;
      default:
        logger.error("Unknown assignment strategy", { strategy });
        assignedAgentId = await findAgentByRoundRobin(agents);
    }

    return assignedAgentId;
  } catch (error: any) {
    logger.error("Error in autoAssignGrievance", {
      error: error.message,
      stack: error.stack
    });
    return null;
  }
}

/**
 * Get assignment statistics for monitoring
 */
export async function getAssignmentStats() {
  try {
    const agents = await getAvailableAgentsForAssignment();

    const stats = await Promise.all(
      agents.map(async (agent) => {
        const workload = await getAgentWorkload(agent.id);
        return {
          agentId: agent.id,
          agentName: agent.name || agent.email || "Unknown",
          activeGrievances: workload,
          capacityPercentage: Math.round(
            (workload / AUTO_ASSIGNMENT_SETTINGS.MAX_ACTIVE_PER_AGENT) * 100
          ),
        };
      })
    );

    return {
      success: true,
      data: stats,
    };
  } catch (error: any) {
    logger.error("Error in getAssignmentStats", {
      error: error.message,
      stack: error.stack
    });
    return {
      success: false,
      error: "Failed to fetch assignment statistics",
    };
  }
}
