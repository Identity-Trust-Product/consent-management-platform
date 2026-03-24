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
import { GRIEVANCE_DEFAULTS } from "@/lib/constants/grievances";
import prisma from "@/lib/prisma";
import { Actions, hasConfigPermission, Resources } from "@/lib/rbac-config";
import { createSafeAction } from "@/lib/safe-action";
import {
  Actions as SafeActions,
  Resources as SafeResources,
} from "@/lib/constants/rbac";
import { sanitizeFileName } from "@/lib/schemas/file-upload";
import {
  addGrievanceMessageSchema,
  addPrincipalMessageSchema,
  assignGrievanceSchema,
  createGrievanceSchema,
  getGrievanceSchema,
  grievanceFilterSchema,
  submitGrievanceFeedbackSchema,
  updateStatusSchema,
  type AddGrievanceMessageInput,
  type AddPrincipalMessageInput,
  type AssignGrievanceInput,
  type CreateGrievanceInput,
  type GrievanceFilterInput,
  type SubmitGrievanceFeedbackInput,
  type UpdateStatusInput,
} from "@/lib/schemas/grievances";
import { autoAssignGrievance } from "@/lib/services/grievance-auto-assignment";
import {
  createAssignedEvent,
  createGrievanceCreatedEvent,
  createStatusChangedEvent,
  createUnassignedEvent,
} from "@/lib/services/grievance-events";
import { StorageFactory } from "@/lib/services/storage/storage-factory";
import { verifyDprmToken } from "@/lib/utils";
import { logger } from "@/lib/utils/logger";
import {
  calculateExpectedResolutionTime,
  getSeverityForCategory,
} from "@/lib/utils/sla";
import {
  GrievanceMessageAuthorType,
  GrievanceStatus,
  Prisma,
} from "@prisma/client";
import { revalidatePath } from "next/cache";
import { logAudit } from "@/lib/audit";

/**
 * Create a new grievance (Data Principal)
 * Called from the principal portal with a valid DPRM token
 */
export async function createGrievance(
  token: string,
  input: CreateGrievanceInput & { files?: File[] }
) {
  try {
    // 1. Verify the DPRM token
    const tokenPayload = await verifyDprmToken(token);
    const tokenDataPrincipalId = tokenPayload.data_principal_id as string;
    const dataPrincipalId = input.dataPrincipalId;

    // Ensure the dataPrincipalId from input matches the token OR is a valid minor
    if (dataPrincipalId !== tokenDataPrincipalId) {
      // Check if the token owner is a guardian of the input data principal
      const isGuardian = await prisma.consent.findFirst({
        where: {
          dataPrincipalId: dataPrincipalId,
          majorDataPrincipalId: tokenDataPrincipalId,
        },
      });

      if (!isGuardian) {
        return {
          success: false,
          error: "Unauthorized: Data Principal ID mismatch",
        };
      }
    }

    // Extract files before validation
    const files = input.files;
    const { files: _, ...inputWithoutFiles } = input;

    // 2. Validate input
    const validatedInput = createGrievanceSchema.parse(inputWithoutFiles);

    // 3. Verify business process exists and principal has access to it
    const businessProcess = await prisma.businessProcess.findUnique({
      where: { id: validatedInput.businessProcessId },
      select: { id: true, name: true, publicId: true },
    });

    if (!businessProcess) {
      return {
        success: false,
        error: "Business process not found",
      };
    }

    // Verify the principal has consents for this business process (using publicId)
    const hasConsent = await prisma.consent.findFirst({
      where: {
        dataPrincipalId: dataPrincipalId,
        businessProcessId: businessProcess.publicId,
      },
      select: { id: true },
    });

    if (!hasConsent) {
      return {
        success: false,
        error: "You do not have an active consent for this business process",
      };
    }

    // 4. Auto-assign to an agent if available
    const autoAssignedAgentId = await autoAssignGrievance();

    // 5. Create the grievance, first message, and system event in a transaction
    const result = await prisma.$transaction(async (tx) => {
      // Create the grievance
      // Determine severity from category mapping
      const defaultSeverity = getSeverityForCategory(validatedInput.category);

      const grievance = await tx.grievance.create({
        data: {
          dataPrincipalId: validatedInput.dataPrincipalId,
          metadata: validatedInput.metadata || {},
          businessProcessId: validatedInput.businessProcessId,
          category: validatedInput.category,
          severity: defaultSeverity,
          subject: validatedInput.subject,
          description: validatedInput.description,
          status: autoAssignedAgentId
            ? GrievanceStatus.ASSIGNED
            : GRIEVANCE_DEFAULTS.STATUS,
          assignedToId: autoAssignedAgentId,
        },
        select: {
          id: true,
          publicId: true,
          category: true,
          subject: true,
          createdAt: true,
          assignedToId: true,
        },
      });

      // Create an SLA tracker for this grievance using admin configuration if present
      try {
        const slaConfig = await tx.slaConfiguration.findUnique({
          where: { severity: defaultSeverity },
        });
        const days = slaConfig?.resolutionTimeInDays ?? 3; // fallback to 3 days if not configured
        const expected = calculateExpectedResolutionTime(
          grievance.createdAt,
          days
        );

        await tx.slaTracker.create({
          data: {
            grievanceId: grievance.id,
            severity: defaultSeverity,
            startedAt: grievance.createdAt,
            expectedResolutionAt: expected,
          },
        });
      } catch (slaErr) {
        // Non-fatal: log and continue. SLA tracker creation should not block grievance creation.
        logger.error("Failed to create SLA tracker for grievance", {
          error: slaErr,
        });
      }

      // Create the first message with the description
      const firstMessage = await tx.grievanceMessage.create({
        data: {
          grievanceId: grievance.id,
          authorType: GrievanceMessageAuthorType.PRINCIPAL,
          authorId: null, // PRINCIPAL messages don't reference users table
          message: validatedInput.description,
        },
        select: {
          id: true,
        },
      });

      return { grievance, firstMessageId: firstMessage.id };
    });

    // Upload files and attach to the first message (outside transaction)
    if (files && files.length > 0) {
      try {
        const storage = StorageFactory.getInstance();

        for (const file of files) {
          const sanitizedName = sanitizeFileName(file.name);
          const fileBuffer = Buffer.from(await file.arrayBuffer());

          const uploadResult = await storage.upload({
            file: fileBuffer,
            fileName: sanitizedName,
            mimeType: file.type,
            folder: `grievances/${result.grievance.id}`,
          });

          await prisma.grievanceAttachment.create({
            data: {
              messageId: result.firstMessageId,
              fileKey: uploadResult.fileKey,
              fileName: file.name,
              fileSize: file.size,
              mimeType: file.type,
            },
          });
        }
      } catch (fileError) {
        logger.error("Error uploading files for grievance", {
          error: fileError,
        });
        // Continue - grievance is created, file upload is non-critical
      }
    }

    // Create system event for grievance creation (outside transaction for reliability)
    await createGrievanceCreatedEvent({
      grievanceId: result.grievance.id,
      dataPrincipalId: validatedInput.dataPrincipalId,
      category: validatedInput.category,
      subject: validatedInput.subject,
    });

    // If auto-assigned, create assignment event
    if (result.grievance.assignedToId) {
      const assignedAgent = await prisma.user.findUnique({
        where: { id: result.grievance.assignedToId },
        select: { name: true, email: true },
      });

      await createAssignedEvent({
        grievanceId: result.grievance.id,
        assignedToUserId: result.grievance.assignedToId,
        assignedToName:
          assignedAgent?.name || assignedAgent?.email || "Unknown",
        // Don't pass performedByUserId for system actions - it will be null in the audit log
        performedByUserId: null,
        performedByName: "Auto-Assignment System",
      });
    }

    // 6. Send confirmation email to data principal
    try {
      const { emailService } = await import(
        "@/lib/services/email/email-service"
      );
      const { generateDprmLink } = await import("@/lib/services/dprm-service");

      const metadata = (validatedInput.metadata as Record<string, any>) || {};
      const principalEmail = metadata.email || metadata.Email;
      const principalName = metadata.name || metadata.Name || "User";

      if (principalEmail) {
        const trackingLink =
          (await generateDprmLink(
            dataPrincipalId,
            new Date(Date.now() + 7 * 24 * 60 * 60 * 1000) // 7 days from now
          )) + "/grievances";

        emailService.sendTemplatedEmail({
          templateName: "grievance-status-update",
          to: { email: principalEmail, name: principalName },
          variables: {
            grievanceId: result.grievance.publicId,
            status: "Submitted",
            grievanceTitle: validatedInput.subject,
            principalName,
            comments:
              "We are currently evaluating your request and will notify you once a resolution is reached. Thank you for your patience.",
            trackingLink,
          },
        });
      }
    } catch (emailError) {
      logger.error("Failed to send grievance creation email", {
        error: emailError,
      });
    }

    // Audit Log
    await logAudit({
      action: "CREATE",
      resource: "GRIEVANCE",
      resourceId: result.grievance.id,
      performedByUserId: null, // Data Principal
      metadata: { principalId: dataPrincipalId },
      payload: validatedInput,
      status: "SUCCESS",
    });

    // 7. Revalidate paths
    revalidatePath(`/cms/principal/dprm/${token}/grievances`);
    revalidatePath(`/cms/data-fiduciary/grievances`);

    return {
      success: true,
      data: {
        publicId: result.grievance.publicId,
        id: result.grievance.id,
        message: "Grievance submitted successfully",
      },
    };
  } catch (error: any) {
    logger.error("Error in createGrievance", { error: error });

    if (error.message === "TOKEN_EXPIRED") {
      return { success: false, error: "Your session has expired" };
    }

    if (error.message === "INVALID_TOKEN") {
      return { success: false, error: "Invalid access token" };
    }

    if (error.name === "ZodError") {
      return {
        success: false,
        error: "Validation failed",
        details: error.errors,
      };
    }

    return {
      success: false,
      error: "Failed to create grievance. Please try again.",
    };
  }
}

/**
 * Get all grievances for a data principal (Data Principal)
 * Called from the principal portal with a valid DPRM token
 */
export async function getGrievancesForPrincipal(
  token: string,
  minorDataPrincipalId?: string
) {
  try {
    // 1. Verify the DPRM token
    const tokenPayload = await verifyDprmToken(token);
    const dataPrincipalId = tokenPayload.data_principal_id as string;

    const targetPrincipalId = minorDataPrincipalId || dataPrincipalId;

    // If fetching for minor, verify relationship via Consent table
    if (minorDataPrincipalId) {
      const hasRelationship = await prisma.consent.findFirst({
        where: {
          dataPrincipalId: minorDataPrincipalId,
          majorDataPrincipalId: dataPrincipalId,
        },
      });

      if (!hasRelationship) {
        return { success: true, data: [] };
      }
    }

    // 2. Fetch grievances
    const grievances = await prisma.grievance.findMany({
      where: {
        dataPrincipalId: targetPrincipalId,
      },
      select: {
        id: true,
        publicId: true,
        category: true,
        subject: true,
        description: true,
        status: true,
        metadata: true,
        createdAt: true,
        updatedAt: true,
        principalLastSeenAt: true,
        businessProcess: {
          select: {
            id: true,
            name: true,
          },
        },
        messages: {
          select: {
            id: true,
            message: true,
            authorType: true,
            createdAt: true,
          },
          orderBy: {
            createdAt: "desc",
          },
          take: 1,
        },
        slaTracker: {
          select: {
            expectedResolutionAt: true,
          },
        },
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    // Add hasUnread flag to each grievance
    const grievancesWithUnread = grievances.map((grievance) => {
      const lastMessage = grievance.messages[0];
      const hasUnread =
        lastMessage &&
        (!grievance.principalLastSeenAt ||
          new Date(lastMessage.createdAt) >
          new Date(grievance.principalLastSeenAt));

      return {
        ...grievance,
        hasUnread,
      };
    });

    return {
      success: true,
      data: grievancesWithUnread,
    };
  } catch (error: any) {
    logger.error("Error in getGrievancesForPrincipal", { error });

    if (error.message === "TOKEN_EXPIRED") {
      return { success: false, error: "Your session has expired" };
    }

    if (error.message === "INVALID_TOKEN") {
      return { success: false, error: "Invalid access token" };
    }

    return {
      success: false,
      error: "Failed to fetch grievances",
    };
  }
}

/**
 * Get all grievances with filters (Admin/Agent)
 * Called from the data fiduciary portal
 */
export async function getAllGrievances(filters?: GrievanceFilterInput) {
  try {
    // 1. Check authentication and authorization
    const session = await auth();
    if (!session?.user?.id) {
      return {
        success: false,
        error: "Unauthorized: Please log in",
      };
    }

    // Get user roles
    const userRoles = await prisma.userRole.findMany({
      where: { userId: session.user.id },
      include: { role: true },
    });

    const roleNames = userRoles.map((ur) => ur.role.name);

    // Check if user has GRIEVANCE:READ permission
    const hasPermission = hasConfigPermission(
      roleNames,
      Resources.GRIEVANCE,
      Actions.READ
    );

    if (!hasPermission) {
      return {
        success: false,
        error: "Unauthorized: You don't have permission to view grievances",
      };
    }

    // Check if user is a grievance agent (not admin)
    const isAdmin = roleNames.includes("privy_cgp_admin");
    const isGrievanceAgent = roleNames.includes("privy_cgp_grievance_agent");

    // 2. Validate and parse filters
    const validatedFilters = filters
      ? grievanceFilterSchema.parse(filters)
      : grievanceFilterSchema.parse({});

    // 3. Build where clause
    const where: any = {};

    // If user is a grievance agent (and not admin), only show grievances assigned to them
    if (isGrievanceAgent && !isAdmin) {
      where.assignedToId = session.user.id;
    }

    if (validatedFilters.status) {
      where.status = validatedFilters.status;
    }

    if (validatedFilters.category) {
      where.category = validatedFilters.category;
    }

    if (validatedFilters.severity) {
      where.severity = validatedFilters.severity;
    }

    if (validatedFilters.assignedToId) {
      if (validatedFilters.assignedToId === "unassigned") {
        where.assignedToId = null;
      } else {
        where.assignedToId = validatedFilters.assignedToId;
      }
    }

    if (validatedFilters.businessProcessId) {
      where.businessProcessId = validatedFilters.businessProcessId;
    }

    if (validatedFilters.dataPrincipalId) {
      where.dataPrincipalId = validatedFilters.dataPrincipalId;
    }

    if (validatedFilters.search) {
      where.OR = [
        {
          subject: {
            contains: validatedFilters.search,
            mode: "insensitive",
          },
        },
        {
          description: {
            contains: validatedFilters.search,
            mode: "insensitive",
          },
        },
        {
          publicId: {
            contains: validatedFilters.search,
            mode: "insensitive",
          },
        },
      ];
    }

    // 4. Get total count
    const totalCount = await prisma.grievance.count({ where });

    // 5. Fetch grievances with pagination
    const grievances = await prisma.grievance.findMany({
      where,
      select: {
        id: true,
        publicId: true,
        dataPrincipalId: true,
        metadata: true,
        category: true,
        severity: true,
        subject: true,
        status: true,
        createdAt: true,
        updatedAt: true,
        assignedTo: {
          select: {
            id: true,
            name: true,
            email: true,
          },
        },
        businessProcess: {
          select: {
            id: true,
            name: true,
          },
        },
        slaTracker: {
          select: {
            severity: true,
            startedAt: true,
            expectedResolutionAt: true,
            resolvedAt: true,
            isBreached: true,
            breachedAt: true,
            escalatedAt: true,
          },
        },
      },
      orderBy: {
        [validatedFilters.sortBy]: validatedFilters.sortOrder,
      },
      skip: (validatedFilters.page - 1) * validatedFilters.pageSize,
      take: validatedFilters.pageSize,
    });

    // Filter by SLA status if specified (computed field, so filter after fetch)
    let filteredGrievances = grievances;
    if (validatedFilters.slaStatus) {
      const { checkSlaStatus } = await import("@/lib/utils/sla");
      filteredGrievances = grievances.filter((g) => {
        if (!g.slaTracker) return false;
        const slaStatusInfo = checkSlaStatus(
          g.slaTracker.startedAt,
          g.slaTracker.expectedResolutionAt,
          g.slaTracker.resolvedAt,
          g.slaTracker.isBreached
        );
        return slaStatusInfo.status === validatedFilters.slaStatus;
      });
    }

    const totalPages = Math.ceil(totalCount / validatedFilters.pageSize);

    return {
      success: true,
      data: {
        grievances: filteredGrievances,
        pagination: {
          total: totalCount,
          page: validatedFilters.page,
          pageSize: validatedFilters.pageSize,
          totalPages,
        },
      },
    };
  } catch (error: any) {
    logger.error("Error in getAllGrievances", { error: error });

    if (error.name === "ZodError") {
      return {
        success: false,
        error: "Invalid filters",
        details: error.errors,
      };
    }

    return {
      success: false,
      error: "Failed to fetch grievances",
    };
  }
}

/**
 * Get a single grievance by ID (Admin/Agent)
 * Supports both numeric database ID and string public ID
 */
export async function getGrievanceById(grievanceId: number | string) {
  try {
    // 1. Check authentication and authorization
    const session = await auth();
    if (!session?.user?.id) {
      return {
        success: false,
        error: "Unauthorized: Please log in",
      };
    }

    // Get user roles
    const userRoles = await prisma.userRole.findMany({
      where: { userId: session.user.id },
      include: { role: true },
    });

    const roleNames = userRoles.map((ur) => ur.role.name);

    // Check if user has GRIEVANCE:READ permission
    const hasPermission = hasConfigPermission(
      roleNames,
      Resources.GRIEVANCE,
      Actions.READ
    );

    if (!hasPermission) {
      return {
        success: false,
        error: "Unauthorized: You don't have permission to view grievances",
      };
    }

    // 2. Validate input
    const validatedInput = getGrievanceSchema.parse({ grievanceId });

    // 3. Determine query condition based on ID type
    const whereCondition =
      typeof validatedInput.grievanceId === "number"
        ? { id: validatedInput.grievanceId }
        : { publicId: validatedInput.grievanceId };

    // 4. Fetch grievance with full details
    const grievance = await prisma.grievance.findUnique({
      where: whereCondition,
      include: {
        businessProcess: {
          select: {
            id: true,
            name: true,
            code: true,
          },
        },
        assignedTo: {
          select: {
            id: true,
            name: true,
            email: true,
          },
        },
        slaTracker: true, // Include SLA tracker data
        auditLogs: {
          include: {
            performedByUser: {
              select: {
                id: true,
                name: true,
                email: true,
              },
            },
          },
          orderBy: {
            createdAt: "desc",
          },
          take: 20, // Last 20 audit logs
        },
      },
    });

    if (!grievance) {
      return {
        success: false,
        error: "Grievance not found",
      };
    }

    return {
      success: true,
      data: grievance,
    };
  } catch (error: any) {
    logger.error("Error in getGrievanceById", { error: error });

    if (error.name === "ZodError") {
      return {
        success: false,
        error: "Invalid grievance ID",
        details: error.errors,
      };
    }

    return {
      success: false,
      error: "Failed to fetch grievance",
    };
  }
}

/**
 * Assign a grievance to an agent (Admin only)
 */
export async function assignGrievance(input: AssignGrievanceInput) {
  try {
    // 1. Check authentication and authorization
    const session = await auth();
    if (!session?.user?.id) {
      return {
        success: false,
        error: "Unauthorized: Please log in",
      };
    }

    // Get user roles
    const userRoles = await prisma.userRole.findMany({
      where: { userId: session.user.id },
      include: { role: true },
    });

    const roleNames = userRoles.map((ur) => ur.role.name);

    // Check if user has GRIEVANCE:UPDATE permission
    const hasPermission = hasConfigPermission(
      roleNames,
      Resources.GRIEVANCE,
      Actions.UPDATE
    );

    if (!hasPermission) {
      return {
        success: false,
        error: "Unauthorized: You don't have permission to assign grievances",
      };
    }

    // 2. Validate input
    const validatedInput = assignGrievanceSchema.parse(input);

    // 3. Verify grievance exists
    const grievance = await prisma.grievance.findUnique({
      where: { id: validatedInput.grievanceId },
      select: { id: true, assignedToId: true },
    });

    if (!grievance) {
      return {
        success: false,
        error: "Grievance not found",
      };
    }

    // 4. If assigning to a user, verify the user exists
    let assignedUserName: string | null = null;
    if (validatedInput.assignedToId) {
      const user = await prisma.user.findUnique({
        where: { id: validatedInput.assignedToId },
        select: { id: true, name: true, email: true },
      });

      if (!user) {
        return {
          success: false,
          error: "Assigned user not found",
        };
      }

      assignedUserName = user.name || user.email || "Unknown";
    }

    // 5. Update assignment
    await prisma.grievance.update({
      where: { id: validatedInput.grievanceId },
      data: {
        assignedToId: validatedInput.assignedToId,
        updatedAt: new Date(),
      },
    });

    // 6. Create system event for assignment/unassignment
    if (validatedInput.assignedToId) {
      // Assignment event
      await createAssignedEvent({
        grievanceId: validatedInput.grievanceId,
        assignedToUserId: validatedInput.assignedToId,
        assignedToName: assignedUserName,
        performedByUserId: session.user.id,
        performedByName: session.user.name || session.user.email || "Unknown",
      });
    } else if (grievance.assignedToId) {
      // Unassignment event (only if there was a previous assignment)
      const previousAssignee = await prisma.user.findUnique({
        where: { id: grievance.assignedToId },
        select: { name: true, email: true },
      });

      await createUnassignedEvent({
        grievanceId: validatedInput.grievanceId,
        previousAssigneeId: grievance.assignedToId,
        previousAssigneeName:
          previousAssignee?.name || previousAssignee?.email || "Unknown",
        performedByUserId: session.user.id,
        performedByName: session.user.name || session.user.email || "Unknown",
      });
    }

    // 7. Revalidate paths
    revalidatePath("/cms/data-fiduciary/grievances");
    revalidatePath(
      `/cms/data-fiduciary/grievances/${validatedInput.grievanceId}`
    );

    return {
      success: true,
      message: validatedInput.assignedToId
        ? "Grievance assigned successfully"
        : "Grievance unassigned successfully",
    };
  } catch (error: any) {
    logger.error("Error in assignGrievance", { error: error });

    if (error.name === "ZodError") {
      return {
        success: false,
        error: "Validation failed",
        details: error.errors,
      };
    }

    return {
      success: false,
      error: "Failed to assign grievance",
    };
  }
}

/**
 * Get grievance statistics for dashboard (Admin/Agent)
 */
export async function getGrievanceStats() {
  try {
    // 1. Check authentication and authorization
    const session = await auth();
    if (!session?.user?.id) {
      return {
        success: false,
        error: "Unauthorized: Please log in",
      };
    }

    // Get user roles
    const userRoles = await prisma.userRole.findMany({
      where: { userId: session.user.id },
      include: { role: true },
    });

    const roleNames = userRoles.map((ur) => ur.role.name);

    // Check if user has GRIEVANCE:READ permission
    const hasPermission = hasConfigPermission(
      roleNames,
      Resources.GRIEVANCE,
      Actions.READ
    );

    if (!hasPermission) {
      return {
        success: false,
        error:
          "Unauthorized: You don't have permission to view grievance stats",
      };
    }

    // Check if user is a grievance agent (not admin)
    const isAdmin = roleNames.includes("privy_cgp_admin");
    const isGrievanceAgent = roleNames.includes("privy_cgp_grievance_agent");

    // Build where clause
    const where: any = {};

    // If user is a grievance agent (and not admin), only show grievances assigned to them
    if (isGrievanceAgent && !isAdmin) {
      where.assignedToId = session.user.id;
    }

    // 2. Get counts by status
    const [total, submitted, assigned, inProgress, resolved, closed, reopened] = await Promise.all([
      prisma.grievance.count({ where }),
      prisma.grievance.count({ where: { ...where, status: GrievanceStatus.SUBMITTED } }),
      prisma.grievance.count({ where: { ...where, status: GrievanceStatus.ASSIGNED } }),
      prisma.grievance.count({
        where: { ...where, status: GrievanceStatus.IN_PROGRESS },
      }),
      prisma.grievance.count({ where: { ...where, status: GrievanceStatus.RESOLVED } }),
      prisma.grievance.count({ where: { ...where, status: GrievanceStatus.CLOSED } }),
      prisma.grievance.count({ where: { ...where, status: GrievanceStatus.REOPENED } }),
    ]);

    return {
      success: true,
      data: {
        total,
        submitted,
        assigned,
        inProgress,
        resolved,
        closed,
        reopened,
      },
    };
  } catch (error: any) {
    logger.error("Error in getGrievanceStats", { error: error });

    return {
      success: false,
      error: "Failed to fetch grievance statistics",
    };
  }
}

/**
 * Get list of agents who can be assigned grievances (Admin)
 */
export async function getAvailableAgents() {
  try {
    // 1. Check authentication and authorization
    const session = await auth();
    if (!session?.user?.id) {
      return {
        success: false,
        error: "Unauthorized: Please log in",
      };
    }

    // Get user roles
    const userRoles = await prisma.userRole.findMany({
      where: { userId: session.user.id },
      include: { role: true },
    });

    const roleNames = userRoles.map((ur) => ur.role.name);

    // Check if user has GRIEVANCE:UPDATE permission
    const hasPermission = hasConfigPermission(
      roleNames,
      Resources.GRIEVANCE,
      Actions.UPDATE
    );

    if (!hasPermission) {
      return {
        success: false,
        error: "Unauthorized: You don't have permission to view agents",
      };
    }

    // 2. Get users with grievance agent role or admin role
    const grievanceRole = await prisma.role.findFirst({
      where: {
        name: "privy_cgp_grievance_agent",
      },
    });

    const adminRole = await prisma.role.findFirst({
      where: {
        name: "privy_cgp_admin",
      },
    });

    const roleIds = [grievanceRole?.id, adminRole?.id].filter(
      Boolean
    ) as string[];

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
      orderBy: {
        name: "asc",
      },
    });

    return {
      success: true,
      data: agents,
    };
  } catch (error: any) {
    logger.error("Error in getAvailableAgents", { error });

    return {
      success: false,
      error: "Failed to fetch available agents",
    };
  }
}

// ============================================================================
// Phase 2: Messaging Functions
// ============================================================================

/**
 * Get grievance with messages (Agent)
 * Fetches full grievance details including message thread
 */
export async function getGrievanceWithMessages(grievanceId: number) {
  try {
    // 1. Authenticate and authorize
    const session = await auth();
    if (!session?.user?.id) {
      return { success: false, error: "Unauthorized" };
    }

    // Get user roles
    const userRoles = await prisma.userRole.findMany({
      where: { userId: session.user.id },
      include: { role: true },
    });

    const roleNames = userRoles.map((ur) => ur.role.name);

    const hasPermission = hasConfigPermission(
      roleNames,
      Resources.GRIEVANCE,
      Actions.READ
    );

    if (!hasPermission) {
      return { success: false, error: "Permission denied" };
    }

    // 2. Fetch grievance with messages
    const grievance = await prisma.grievance.findUnique({
      where: { id: grievanceId },
      include: {
        assignedTo: {
          select: {
            id: true,
            name: true,
            email: true,
          },
        },
        businessProcess: {
          select: {
            id: true,
            name: true,
            publicId: true,
          },
        },
        slaTracker: {
          select: {
            severity: true,
            startedAt: true,
            expectedResolutionAt: true,
            resolvedAt: true,
            isBreached: true,
            breachedAt: true,
            escalatedAt: true,
          },
        },
        messages: {
          orderBy: {
            createdAt: "asc",
          },
        },
      },
    });

    if (!grievance) {
      return { success: false, error: "Grievance not found" };
    }

    // 3. Fetch User data for agent messages
    const agentMessageAuthorIds = grievance.messages
      .filter(
        (msg) => msg.authorType === GrievanceMessageAuthorType.FIDUCIARY_AGENT
      )
      .map((msg) => msg.authorId);

    const uniqueAgentIds = [...new Set(agentMessageAuthorIds)];

    const agentUsers = await prisma.user.findMany({
      where: { id: { in: uniqueAgentIds } },
      select: { id: true, name: true, email: true },
    });

    const agentUserMap = new Map(agentUsers.map((user) => [user.id, user]));

    // Attach user data to messages
    const messagesWithAuthors = grievance.messages.map((msg) => ({
      ...msg,
      authorUser:
        msg.authorType === GrievanceMessageAuthorType.FIDUCIARY_AGENT
          ? agentUserMap.get(msg.authorId) || null
          : null,
    }));

    // 4. Check if user has access (assigned agent or admin)
    const isAssigned = grievance.assignedToId === session.user.id;
    const isAdmin = hasConfigPermission(
      roleNames,
      Resources.GRIEVANCE,
      Actions.UPDATE
    );

    if (!isAssigned && !isAdmin) {
      return {
        success: false,
        error: "You do not have access to this grievance",
      };
    }

    // 5. Fetch consent taxonomy for the data principal and business process
    let consentTaxonomy = null;
    try {
      const businessProcess = await prisma.businessProcess.findUnique({
        where: { id: grievance.businessProcessId },
        select: {
          id: true,
          name: true,
          publicId: true,
          version: true,
          businessUnit: {
            select: {
              id: true,
              name: true,
              code: true,
            },
          },
          businessProcessToConsentPurposes: {
            select: {
              consentPurpose: {
                select: {
                  id: true,
                  publicId: true,
                  name: true,
                  description: true,
                  version: true,
                  processingPurposes: {
                    select: {
                      id: true,
                      publicId: true,
                      name: true,
                      description: true,
                      processingPurposeToDataProcessors: {
                        select: {
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
                  },
                },
              },
            },
          },
        },
      });

      if (businessProcess) {
        // Get principal's consents for this business process
        const consents = await prisma.consent.findMany({
          where: {
            dataPrincipalId: grievance.dataPrincipalId,
            businessProcessId: businessProcess.publicId,
          },
          select: {
            id: true,
            publicId: true,
            status: true,
            isExpired: true,
            insertedAt: true,
            expiresAt: true,
            consentPurposeId: true,
            processingPurposeId: true,
          },
          orderBy: {
            insertedAt: "desc",
          },
        });

        // Structure the taxonomy data
        const consentPurposes =
          businessProcess.businessProcessToConsentPurposes.map((bpcp) => {
            const purpose = bpcp.consentPurpose;

            return {
              id: purpose.id,
              publicId: purpose.publicId,
              name: purpose.name,
              description: purpose.description,
              version: purpose.version,
              processingPurposes: purpose.processingPurposes.map((pp) => {
                const ppConsents = consents.filter(
                  (c) => c.processingPurposeId === pp.publicId
                );

                return {
                  id: pp.id,
                  publicId: pp.publicId,
                  name: pp.name,
                  description: pp.description,
                  userConsents: ppConsents,
                  dataProcessors: pp.processingPurposeToDataProcessors.map(
                    (ppdp) => ppdp.dataProcessor
                  ),
                };
              }),
            };
          });

        consentTaxonomy = {
          businessProcess: {
            id: businessProcess.id,
            name: businessProcess.name,
            publicId: businessProcess.publicId,
            businessUnit: businessProcess.businessUnit,
            version: businessProcess.version,
          },
          consentPurposes,
          totalConsents: consents.length,
          activeConsents: consents.filter(
            (c) => c.status === "accepted" && !c.isExpired
          ).length,
        };
      }
    } catch (taxonomyError) {
      logger.error("Error fetching consent taxonomy", { error: taxonomyError });
      // Continue without taxonomy data - non-blocking
    }

    return {
      success: true,
      data: {
        ...grievance,
        messages: messagesWithAuthors,
        consentTaxonomy,
      },
    };
  } catch (error: any) {
    logger.error("Error in getGrievanceWithMessages", { error: error });
    return {
      success: false,
      error: "Failed to fetch grievance details",
    };
  }
}

/**
 * Add a message to grievance (Agent)
 */
export async function addGrievanceMessage(input: AddGrievanceMessageInput) {
  try {
    // 1. Authenticate and authorize
    const session = await auth();
    if (!session?.user?.id) {
      return { success: false, error: "Unauthorized" };
    }

    // 2. Validate input
    const validatedInput = addGrievanceMessageSchema.parse(input);

    // 3. Fetch grievance
    const grievance = await prisma.grievance.findUnique({
      where: { id: validatedInput.grievanceId },
      select: {
        id: true,
        status: true,
        assignedToId: true,
        dataPrincipalId: true,
      },
    });

    if (!grievance) {
      return { success: false, error: "Grievance not found" };
    }

    // 4. Check permissions (assigned agent or admin)
    const isAssigned = grievance.assignedToId === session.user.id;

    // Get user roles for permission check
    const userRoles = await prisma.userRole.findMany({
      where: { userId: session.user.id },
      include: { role: true },
    });

    const roleNames = userRoles.map((ur) => ur.role.name);

    const hasAdminPermission = hasConfigPermission(
      roleNames,
      Resources.GRIEVANCE,
      Actions.UPDATE
    );

    if (!isAssigned && !hasAdminPermission) {
      return {
        success: false,
        error: "You do not have permission to message this grievance",
      };
    }

    // 5. Create message and update status in transaction
    const result = await prisma.$transaction(async (tx) => {
      // Create the message
      const message = await tx.grievanceMessage.create({
        data: {
          grievanceId: validatedInput.grievanceId,
          authorType: GrievanceMessageAuthorType.FIDUCIARY_AGENT,
          authorId: session.user.id,
          message: validatedInput.message,
          messageType: "USER_MESSAGE", // Explicit user message
        },
      });

      // Auto-update status if needed (SUBMITTED/ASSIGNED -> IN_PROGRESS)
      if (
        grievance.status === GrievanceStatus.SUBMITTED ||
        grievance.status === GrievanceStatus.ASSIGNED
      ) {
        await tx.grievance.update({
          where: { id: validatedInput.grievanceId },
          data: {
            status: GrievanceStatus.IN_PROGRESS,
            updatedAt: new Date(),
          },
        });
      }

      // Update grievance updatedAt
      await tx.grievance.update({
        where: { id: validatedInput.grievanceId },
        data: { updatedAt: new Date() },
      });

      return message;
    });

    // Create status change event outside transaction (if status changed)
    if (
      grievance.status === GrievanceStatus.SUBMITTED ||
      grievance.status === GrievanceStatus.ASSIGNED
    ) {
      await createStatusChangedEvent({
        grievanceId: validatedInput.grievanceId,
        fromStatus: grievance.status,
        toStatus: GrievanceStatus.IN_PROGRESS,
        performedByUserId: session.user.id,
        performedByName: session.user.name || session.user.email || "Unknown",
      });
    }

    // 6. Create notification for the principal about new agent message
    const { createNewMessageNotification } = await import(
      "@/lib/services/grievance-notification-service"
    );

    const fullGrievance = await prisma.grievance.findUnique({
      where: { id: validatedInput.grievanceId },
      select: { publicId: true, category: true },
    });

    if (fullGrievance) {
      await createNewMessageNotification(
        grievance.dataPrincipalId,
        validatedInput.grievanceId,
        fullGrievance.publicId,
        fullGrievance.category
      );
    }

    // 7. Fetch the user data for the returned message
    const authorUser = await prisma.user.findUnique({
      where: { id: session.user.id },
      select: { id: true, name: true, email: true },
    });

    // 8. Revalidate paths
    revalidatePath(
      `/cms/data-fiduciary/grievances/${validatedInput.grievanceId}`
    );
    revalidatePath("/cms/data-fiduciary/grievances");

    return {
      success: true,
      data: {
        ...result,
        authorUser,
      },
    };
  } catch (error: any) {
    logger.error("Error in addGrievanceMessage", { error });

    if (error.name === "ZodError") {
      return {
        success: false,
        error: "Validation failed",
        details: error.errors,
      };
    }

    return {
      success: false,
      error: "Failed to send message",
    };
  }
}

/**
 * Update grievance status (Agent)
 */
export const updateGrievanceStatus = createSafeAction(
  { resource: SafeResources.GRIEVANCE, action: SafeActions.UPDATE },
  updateStatusSchema,
  async (validatedInput, user) => {
    // 3. Fetch grievance
    const grievance = await prisma.grievance.findUnique({
      where: { id: validatedInput.grievanceId },
      select: {
        id: true,
        status: true,
        assignedToId: true,
        resolvedAt: true,
      },
    });

    if (!grievance) {
      throw new Error("Grievance not found");
    }

    // 4. Check permissions
    const isAssigned = grievance.assignedToId === user.id;

    // Get user roles for permission check
    const userRoles = await prisma.userRole.findMany({
      where: { userId: user.id },
      include: { role: true },
    });

    const roleNames = userRoles.map((ur) => ur.role.name);

    const hasAdminPermission = hasConfigPermission(
      roleNames,
      Resources.GRIEVANCE,
      Actions.UPDATE
    );

    if (!isAssigned && !hasAdminPermission) {
      throw new Error("You do not have permission to update this grievance");
    }

    // 5. Update status
    const result = await prisma.$transaction(async (tx) => {
      // Determine timestamps based on new status
      const updateData: any = {
        status: validatedInput.newStatus,
        updatedAt: new Date(),
      };

      if (validatedInput.newStatus === GrievanceStatus.RESOLVED) {
        updateData.resolvedAt = new Date();
      }

      if (validatedInput.newStatus === GrievanceStatus.CLOSED) {
        updateData.closedAt = new Date();
        if (!grievance.resolvedAt) {
          updateData.resolvedAt = new Date();
        }
      }

      // Update grievance
      const updatedGrievance = await tx.grievance.update({
        where: { id: validatedInput.grievanceId },
        data: updateData,
      });

      // Update SLA tracker if status is RESOLVED or CLOSED
      if (
        validatedInput.newStatus === GrievanceStatus.RESOLVED ||
        validatedInput.newStatus === GrievanceStatus.CLOSED
      ) {
        await tx.slaTracker.updateMany({
          where: { grievanceId: validatedInput.grievanceId },
          data: { resolvedAt: new Date() },
        });
      }

      return updatedGrievance;
    });

    // Create status change event outside transaction
    await createStatusChangedEvent({
      grievanceId: validatedInput.grievanceId,
      fromStatus: validatedInput.currentStatus,
      toStatus: validatedInput.newStatus,
      reason: validatedInput.reason, // Only pass if user provided one
      performedByUserId: user.id,
      performedByName: user.name || user.email || "Unknown",
    });

    // Create notification for the principal about status change
    const { createStatusChangeNotification } = await import(
      "@/lib/services/grievance-notification-service"
    );

    const fullGrievance = await prisma.grievance.findUnique({
      where: { id: validatedInput.grievanceId },
      select: {
        publicId: true,
        category: true,
        dataPrincipalId: true,
      },
    });

    if (fullGrievance) {
      await createStatusChangeNotification(
        fullGrievance.dataPrincipalId,
        validatedInput.grievanceId,
        fullGrievance.publicId,
        fullGrievance.category,
        validatedInput.currentStatus,
        validatedInput.newStatus
      );
    }

    // Send email notification for status change
    try {
      const { emailService } = await import(
        "@/lib/services/email/email-service"
      );
      const { generateDprmLink } = await import("@/lib/services/dprm-service");

      const grievanceWithMetadata = await prisma.grievance.findUnique({
        where: { id: validatedInput.grievanceId },
        select: {
          publicId: true,
          metadata: true,
          dataPrincipalId: true,
          status: true,
          subject: true,
        },
      });

      if (grievanceWithMetadata) {
        const metadata =
          (grievanceWithMetadata.metadata as Record<string, any>) || {};
        const principalEmail = metadata.email || metadata.Email;
        const principalName = metadata.name || metadata.Name || "User";

        if (principalEmail) {
          const trackingLink =
            (await generateDprmLink(
              grievanceWithMetadata.dataPrincipalId,
              new Date(Date.now() + 7 * 24 * 60 * 60 * 1000) // 7 days from now
            )) + "/grievances";

          // Use different templates for resolved/closed vs other status changes
          if (
            validatedInput.newStatus === GrievanceStatus.RESOLVED ||
            validatedInput.newStatus === GrievanceStatus.CLOSED
          ) {
            emailService.sendTemplatedEmail({
              templateName: "grievance-resolved",
              to: { email: principalEmail, name: principalName },
              variables: {
                grievanceId: grievanceWithMetadata.publicId,
                resolutionComments:
                  validatedInput.reason ||
                  "Your grievance has been addressed. Thank you for your patience.",
                grievanceTitle: grievanceWithMetadata.subject,
                principalName,
                actualStatus:
                  validatedInput.newStatus === GrievanceStatus.RESOLVED
                    ? "Resolved"
                    : "Closed",
                trackingLink,
              },
            });
          } else {
            emailService.sendTemplatedEmail({
              templateName: "grievance-status-update",
              to: { email: principalEmail, name: principalName },
              variables: {
                grievanceId: grievanceWithMetadata.publicId,
                status: validatedInput.newStatus,
                grievanceTitle: grievanceWithMetadata.subject,
                principalName,
                comments: validatedInput.reason,
                trackingLink,
              },
            });
          }
        }
      }
    } catch (emailError) {
      logger.error("Failed to send status update email", { error: emailError });
    }

    // 6. Revalidate paths
    revalidatePath(
      `/cms/data-fiduciary/grievances/${validatedInput.grievanceId}`
    );
    revalidatePath("/cms/data-fiduciary/grievances");

    return result;
  }
);

/**
 * Get grievance with messages (Principal - DPRM)
 * Fetches grievance details for data principal with token
 */
export async function getGrievanceForPrincipal(
  token: string,
  grievanceId: number
) {
  try {
    // 1. Verify the DPRM token
    const tokenPayload = await verifyDprmToken(token);
    const dataPrincipalId = tokenPayload.data_principal_id as string;

    // 2. Fetch grievance with messages
    const grievance = await prisma.grievance.findUnique({
      where: {
        id: grievanceId,
      },
      include: {
        assignedTo: {
          select: {
            name: true,
          },
        },
        businessProcess: {
          select: {
            name: true,
          },
        },
        slaTracker: {
          select: {
            expectedResolutionAt: true, // Only expose expected resolution time to principals
          },
        },
        messages: {
          orderBy: {
            createdAt: "asc",
          },
        },
      },
    });

    if (!grievance) {
      return {
        success: false,
        error: "Grievance not found",
      };
    }

    // Check access: either own grievance or guardian of the owner
    if (grievance.dataPrincipalId !== dataPrincipalId) {
      const isGuardian = await prisma.consent.findFirst({
        where: {
          dataPrincipalId: grievance.dataPrincipalId,
          majorDataPrincipalId: dataPrincipalId,
        },
      });

      if (!isGuardian) {
        return {
          success: false,
          error: "You do not have access to this grievance",
        };
      }
    }

    // 3. Fetch User data for agent messages
    const agentMessageAuthorIds = grievance.messages
      .filter(
        (msg) => msg.authorType === GrievanceMessageAuthorType.FIDUCIARY_AGENT
      )
      .map((msg) => msg.authorId);

    const uniqueAgentIds = [...new Set(agentMessageAuthorIds)];

    const agentUsers = await prisma.user.findMany({
      where: { id: { in: uniqueAgentIds } },
      select: { id: true, name: true, email: true },
    });

    const agentUserMap = new Map(agentUsers.map((user) => [user.id, user]));

    // Attach user data to messages
    const messagesWithAuthors = grievance.messages.map((msg) => ({
      ...msg,
      authorUser:
        msg.authorType === GrievanceMessageAuthorType.FIDUCIARY_AGENT
          ? agentUserMap.get(msg.authorId) || null
          : null,
    }));

    // 4. Mark notifications for this grievance as seen
    const { markGrievanceNotificationAsSeenById } = await import(
      "@/lib/services/grievance-notification-service"
    );

    await markGrievanceNotificationAsSeenById(dataPrincipalId, grievanceId);

    // 5. Update principal last seen timestamp
    await prisma.grievance.update({
      where: { id: grievanceId },
      data: { principalLastSeenAt: new Date() },
    });

    return {
      success: true,
      data: {
        ...grievance,
        messages: messagesWithAuthors,
      },
    };
  } catch (error: any) {
    logger.error("Error in getGrievanceForPrincipal", { error: error });

    if (error.message === "TOKEN_EXPIRED") {
      return { success: false, error: "Your session has expired" };
    }

    if (error.message === "INVALID_TOKEN") {
      return { success: false, error: "Invalid access token" };
    }

    return {
      success: false,
      error: "Failed to fetch grievance details",
    };
  }
}

/**
 * Add a message from principal (DPRM portal)
 */
export async function addPrincipalMessage(
  token: string,
  input: AddPrincipalMessageInput
) {
  try {
    // 1. Verify the DPRM token
    const tokenPayload = await verifyDprmToken(token);
    const dataPrincipalId = tokenPayload.data_principal_id as string;

    // 2. Validate input
    const validatedInput = addPrincipalMessageSchema.parse(input);

    // 3. Fetch grievance and verify ownership
    const grievance = await prisma.grievance.findUnique({
      where: {
        id: validatedInput.grievanceId,
      },
      select: {
        id: true,
        status: true,
        dataPrincipalId: true,
      },
    });

    if (!grievance) {
      return {
        success: false,
        error: "Grievance not found",
      };
    }

    // Check access: either own grievance or guardian of the owner
    if (grievance.dataPrincipalId !== dataPrincipalId) {
      const isGuardian = await prisma.consent.findFirst({
        where: {
          dataPrincipalId: grievance.dataPrincipalId,
          majorDataPrincipalId: dataPrincipalId,
        },
      });

      if (!isGuardian) {
        return {
          success: false,
          error: "You do not have access to this grievance",
        };
      }
    }

    // 4. Check if grievance is closed
    if (grievance.status === GrievanceStatus.CLOSED) {
      return {
        success: false,
        error: "Cannot send messages to a closed grievance",
      };
    }

    // 5. Create message in transaction
    const result = await prisma.$transaction(async (tx) => {
      // Create the message
      const message = await tx.grievanceMessage.create({
        data: {
          grievanceId: validatedInput.grievanceId,
          authorType: GrievanceMessageAuthorType.PRINCIPAL,
          authorId: null, // Principals don't have user accounts
          message: validatedInput.message,
          messageType: "USER_MESSAGE", // Explicit user message
        },
      });

      // Update grievance updatedAt
      await tx.grievance.update({
        where: { id: validatedInput.grievanceId },
        data: { updatedAt: new Date() },
      });

      return message;
    });

    // 6. Revalidate paths
    revalidatePath(
      `/cms/principal/dprm/${token}/grievances/${validatedInput.grievanceId}`
    );
    revalidatePath(`/cms/principal/dprm/${token}/grievances`);

    return {
      success: true,
      data: result,
    };
  } catch (error: any) {
    logger.error("Error in addPrincipalMessage", { error });

    if (error.message === "TOKEN_EXPIRED") {
      return { success: false, error: "Your session has expired" };
    }

    if (error.message === "INVALID_TOKEN") {
      return { success: false, error: "Invalid access token" };
    }

    if (error.name === "ZodError") {
      return {
        success: false,
        error: "Validation failed",
        details: error.errors,
      };
    }

    return {
      success: false,
      error: "Failed to send message",
    };
  }
}

/**
 * Get grievances assigned to the current agent
 * For agent's "My Tickets" view
 */
export async function getMyAssignedGrievances() {
  try {
    // 1. Authenticate
    const session = await auth();
    if (!session?.user?.id) {
      return { success: false, error: "Unauthorized" };
    }

    // 2. Fetch grievances assigned to this user
    const grievances = await prisma.grievance.findMany({
      where: {
        assignedToId: session.user.id,
      },
      select: {
        id: true,
        publicId: true,
        dataPrincipalId: true,
        metadata: true,
        status: true,
        category: true,
        severity: true,
        subject: true,
        description: true,
        businessProcessId: true,
        assignedToId: true,
        resolvedAt: true,
        closedAt: true,
        createdAt: true,
        updatedAt: true,
        agentLastSeenAt: true,
        principalLastSeenAt: true,
        feedback: true,
        businessProcess: {
          select: {
            id: true,
            name: true,
            publicId: true,
          },
        },
        slaTracker: {
          select: {
            severity: true,
            startedAt: true,
            expectedResolutionAt: true,
            resolvedAt: true,
            isBreached: true,
            breachedAt: true,
            escalatedAt: true,
          },
        },
        messages: {
          select: {
            id: true,
            message: true,
            createdAt: true,
          },
          orderBy: {
            createdAt: "desc",
          },
          take: 1, // Only get the last message
        },
        _count: {
          select: {
            messages: true,
          },
        },
      },
      orderBy: {
        updatedAt: "desc", // Most recently updated first (latest activity)
      },
    });

    // Add hasUnread flag to each grievance
    const grievancesWithUnread = grievances.map((grievance) => {
      const lastMessage = grievance.messages[0];
      const hasUnread =
        lastMessage &&
        (!grievance.agentLastSeenAt ||
          new Date(lastMessage.createdAt) >
          new Date(grievance.agentLastSeenAt));

      return {
        ...grievance,
        hasUnread,
      };
    });

    return {
      success: true,
      data: grievancesWithUnread,
    };
  } catch (error: any) {
    logger.error("Error in getMyAssignedGrievances", { error: error });
    return {
      success: false,
      error: "Failed to fetch your assigned grievances",
    };
  }
}

/**
 * Mark a grievance as seen by the agent
 */
export async function markGrievanceSeenByAgent(grievanceId: number) {
  try {
    const session = await auth();
    if (!session?.user?.id) {
      return { success: false, error: "Unauthorized" };
    }

    await prisma.grievance.update({
      where: { id: grievanceId },
      data: { agentLastSeenAt: new Date() },
    });

    return { success: true };
  } catch (error: any) {
    logger.error("Error marking grievance as seen by agent", { error: error });
    return { success: false, error: "Failed to update seen status" };
  }
}

/**
 * Mark a grievance as seen by the principal
 */
export async function markGrievanceSeenByPrincipal(
  accessToken: string,
  grievanceId: number
) {
  try {
    // Validate token
    const tokenPayload = await verifyDprmToken(accessToken);
    if (!tokenPayload) {
      return { success: false, error: "Invalid or expired token" };
    }

    await prisma.grievance.update({
      where: { id: grievanceId },
      data: { principalLastSeenAt: new Date() },
    });

    return { success: true };
  } catch (error: any) {
    logger.error("Error marking grievance as seen by principal", {
      error: error,
    });
    return { success: false, error: "Failed to update seen status" };
  }
}

/**
 * Get timeline events (combined audit logs and messages) for a grievance
 * Returns a chronologically sorted array of timeline items
 */
export async function getGrievanceTimeline(
  grievanceId: number,
  isAgentView: boolean = false,
  accessToken?: string
) {
  try {
    // Authorization check
    if (isAgentView) {
      const session = await auth();
      if (!session?.user?.id) {
        return { success: false, error: "Unauthorized" };
      }

      // Get user roles
      const userRoles = await prisma.userRole.findMany({
        where: { userId: session.user.id },
        include: { role: true },
      });

      const roleNames = userRoles.map((ur) => ur.role.name);

      // Check if user has GRIEVANCE:READ permission
      const hasPermission = hasConfigPermission(
        roleNames,
        Resources.GRIEVANCE,
        Actions.READ
      );

      if (!hasPermission) {
        return {
          success: false,
          error: "You don't have permission to view this grievance",
        };
      }
    } else {
      // Principal view - validate token
      if (!accessToken) {
        return { success: false, error: "Access token required" };
      }

      const tokenPayload = await verifyDprmToken(accessToken);
      if (!tokenPayload) {
        return { success: false, error: "Invalid or expired token" };
      }
    }

    // Fetch audit logs
    const auditLogs = await prisma.grievanceAuditLog.findMany({
      where: { grievanceId },
      include: {
        performedByUser: {
          select: {
            id: true,
            name: true,
            email: true,
          },
        },
      },
      orderBy: {
        createdAt: "asc",
      },
    });

    // Transform audit logs into timeline events
    const timelineEvents = auditLogs.map((log) => ({
      id: `audit-${log.id}`,
      type: "audit" as const,
      action: log.action,
      details: log.details as Record<string, any>,
      performedBy: log.performedByUser
        ? {
          id: log.performedByUser.id,
          name: log.performedByUser.name || log.performedByUser.email,
        }
        : null,
      createdAt: log.createdAt,
    }));

    return {
      success: true,
      data: timelineEvents,
    };
  } catch (error: any) {
    logger.error("Error fetching grievance timeline", { error: error });
    return {
      success: false,
      error: "Failed to fetch timeline events",
    };
  }
}

/**
 * Get paginated messages for a grievance (Agent)
 */
export async function getGrievanceMessages(
  grievanceId: number,
  cursor?: number,
  limit: number = 20
) {
  try {
    // 1. Authenticate and authorize
    const session = await auth();
    if (!session?.user?.id) {
      return { success: false, error: "Unauthorized" };
    }

    // Get user roles
    const userRoles = await prisma.userRole.findMany({
      where: { userId: session.user.id },
      include: { role: true },
    });

    const roleNames = userRoles.map((ur) => ur.role.name);

    const hasPermission = hasConfigPermission(
      roleNames,
      Resources.GRIEVANCE,
      Actions.READ
    );

    if (!hasPermission) {
      return { success: false, error: "Permission denied" };
    }

    // 2. Check access to grievance
    const grievance = await prisma.grievance.findUnique({
      where: { id: grievanceId },
      select: { id: true, assignedToId: true },
    });

    if (!grievance) {
      return { success: false, error: "Grievance not found" };
    }

    const isAssigned = grievance.assignedToId === session.user.id;
    const isAdmin = hasConfigPermission(
      roleNames,
      Resources.GRIEVANCE,
      Actions.UPDATE
    );

    if (!isAssigned && !isAdmin) {
      return {
        success: false,
        error: "You do not have access to this grievance",
      };
    }

    // 3. Fetch messages with cursor-based pagination
    const messages = await prisma.grievanceMessage.findMany({
      where: {
        grievanceId,
        ...(cursor ? { id: { lt: cursor } } : {}),
      },
      include: {
        attachments: {
          select: {
            id: true,
            fileName: true,
            fileSize: true,
            mimeType: true,
            createdAt: true,
          },
          orderBy: {
            createdAt: "asc",
          },
        },
      },
      orderBy: {
        createdAt: "desc",
      },
      take: limit + 1, // Fetch one extra to determine if there are more
    });

    const hasMore = messages.length > limit;
    const messagesToReturn = hasMore ? messages.slice(0, limit) : messages;

    // 4. Fetch user data for both agent messages and system messages
    const agentMessageAuthorIds = messagesToReturn
      .filter(
        (msg) => msg.authorType === GrievanceMessageAuthorType.FIDUCIARY_AGENT
      )
      .map((msg) => msg.authorId);

    const systemMessageAuthorIds = messagesToReturn
      .filter(
        (msg) =>
          msg.authorType === GrievanceMessageAuthorType.SYSTEM && msg.authorId
      )
      .map((msg) => msg.authorId);

    const uniqueUserIds = [
      ...new Set([...agentMessageAuthorIds, ...systemMessageAuthorIds]),
    ];

    const users = await prisma.user.findMany({
      where: { id: { in: uniqueUserIds } },
      select: { id: true, name: true, email: true },
    });

    const userMap = new Map(users.map((user) => [user.id, user]));

    // 5. Attach user data to messages
    const messagesWithAuthors = messagesToReturn.map((msg) => ({
      ...msg,
      authorUser:
        msg.authorType === GrievanceMessageAuthorType.FIDUCIARY_AGENT ||
          msg.authorType === GrievanceMessageAuthorType.SYSTEM
          ? userMap.get(msg.authorId) || null
          : null,
    }));

    return {
      success: true,
      data: {
        messages: messagesWithAuthors.reverse(), // Reverse to show oldest first
        nextCursor: hasMore
          ? messagesToReturn[messagesToReturn.length - 1].id
          : null,
        hasMore,
      },
    };
  } catch (error: any) {
    logger.error("Error fetching grievance messages", { error: error });
    return {
      success: false,
      error: "Failed to fetch messages",
    };
  }
}

/**
 * Get paginated messages for a grievance (Principal)
 */
export async function getPrincipalGrievanceMessages(
  token: string,
  grievanceId: number,
  cursor?: number,
  limit: number = 20
) {
  try {
    // 1. Verify the DPRM token
    const tokenPayload = await verifyDprmToken(token);
    const dataPrincipalId = tokenPayload.data_principal_id as string;

    // 2. Check access to grievance
    const grievance = await prisma.grievance.findUnique({
      where: {
        id: grievanceId,
      },
      select: { id: true, dataPrincipalId: true },
    });

    if (!grievance) {
      return {
        success: false,
        error: "Grievance not found",
      };
    }

    // Check access: either own grievance or guardian of the owner
    if (grievance.dataPrincipalId !== dataPrincipalId) {
      const isGuardian = await prisma.consent.findFirst({
        where: {
          dataPrincipalId: grievance.dataPrincipalId,
          majorDataPrincipalId: dataPrincipalId,
        },
      });

      if (!isGuardian) {
        return {
          success: false,
          error: "You do not have access to this grievance request",
        };
      }
    }

    // 3. Fetch messages with cursor-based pagination
    const messages = await prisma.grievanceMessage.findMany({
      where: {
        grievanceId,
        ...(cursor ? { id: { lt: cursor } } : {}),
      },
      include: {
        attachments: {
          select: {
            id: true,
            fileName: true,
            fileSize: true,
            mimeType: true,
            createdAt: true,
          },
          orderBy: {
            createdAt: "asc",
          },
        },
      },
      orderBy: {
        createdAt: "desc",
      },
      take: limit + 1, // Fetch one extra to determine if there are more
    });

    const hasMore = messages.length > limit;
    const messagesToReturn = hasMore ? messages.slice(0, limit) : messages;

    // 4. Fetch user data for both agent messages and system messages
    const agentMessageAuthorIds = messagesToReturn
      .filter(
        (msg) => msg.authorType === GrievanceMessageAuthorType.FIDUCIARY_AGENT
      )
      .map((msg) => msg.authorId);

    const systemMessageAuthorIds = messagesToReturn
      .filter(
        (msg) =>
          msg.authorType === GrievanceMessageAuthorType.SYSTEM && msg.authorId
      )
      .map((msg) => msg.authorId);

    const uniqueUserIds = [
      ...new Set([...agentMessageAuthorIds, ...systemMessageAuthorIds]),
    ];

    const users = await prisma.user.findMany({
      where: { id: { in: uniqueUserIds } },
      select: { id: true, name: true, email: true },
    });

    const userMap = new Map(users.map((user) => [user.id, user]));

    // 5. Attach user data to messages
    const messagesWithAuthors = messagesToReturn.map((msg) => ({
      ...msg,
      authorUser:
        msg.authorType === GrievanceMessageAuthorType.FIDUCIARY_AGENT ||
          msg.authorType === GrievanceMessageAuthorType.SYSTEM
          ? userMap.get(msg.authorId) || null
          : null,
    }));

    return {
      success: true,
      data: {
        messages: messagesWithAuthors.reverse(), // Reverse to show oldest first
        nextCursor: hasMore
          ? messagesToReturn[messagesToReturn.length - 1].id
          : null,
        hasMore,
      },
    };
  } catch (error: any) {
    logger.error("Error fetching principal grievance messages", {
      error: error,
    });

    if (error.message === "TOKEN_EXPIRED") {
      return { success: false, error: "Your session has expired" };
    }

    if (error.message === "INVALID_TOKEN") {
      return { success: false, error: "Invalid access token" };
    }

    return {
      success: false,
      error: "Failed to fetch messages",
    };
  }
}

/**
 * Reopen a closed/resolved grievance (Agent)
 * Called from the agent portal
 */
export async function reopenGrievance(
  input: import("@/lib/schemas/grievances").ReopenGrievanceInput
) {
  try {
    // 1. Check authentication and authorization
    const session = await auth();
    if (!session?.user?.id) {
      return {
        success: false,
        error: "Unauthorized: Please log in",
      };
    }

    // Get user roles
    const userRoles = await prisma.userRole.findMany({
      where: { userId: session.user.id },
      include: { role: true },
    });

    const roleNames = userRoles.map((ur) => ur.role.name);

    // Check if user has GRIEVANCE:UPDATE permission
    const hasPermission = hasConfigPermission(
      roleNames,
      Resources.GRIEVANCE,
      Actions.UPDATE
    );

    if (!hasPermission) {
      return {
        success: false,
        error: "Unauthorized: You don't have permission to reopen grievances",
      };
    }

    // 2. Validate input
    const { reopenGrievanceSchema } = await import("@/lib/schemas/grievances");
    const validatedInput = reopenGrievanceSchema.parse(input);

    // 3. Get grievance and verify status
    const grievance = await prisma.grievance.findUnique({
      where: { id: validatedInput.grievanceId },
      select: {
        id: true,
        status: true,
        assignedToId: true,
      },
    });

    if (!grievance) {
      return {
        success: false,
        error: "Grievance not found",
      };
    }

    // Check if user is assigned to this grievance (unless they're an admin)
    const isAdmin = roleNames.includes("privy_cgp_admin");
    if (!isAdmin && grievance.assignedToId !== session.user.id) {
      return {
        success: false,
        error: "You can only reopen grievances assigned to you",
      };
    }

    // Only allow reopening from RESOLVED or CLOSED status
    if (
      grievance.status !== GrievanceStatus.RESOLVED &&
      grievance.status !== GrievanceStatus.CLOSED
    ) {
      return {
        success: false,
        error: "Only resolved or closed grievances can be reopened",
      };
    }

    // 4. Update grievance status to REOPENED
    await prisma.grievance.update({
      where: { id: validatedInput.grievanceId },
      data: {
        status: GrievanceStatus.REOPENED,
        updatedAt: new Date(),
      },
    });

    // 5. Create reopened event
    const { createReopenedEvent } = await import(
      "@/lib/services/grievance-events"
    );
    await createReopenedEvent({
      grievanceId: validatedInput.grievanceId,
      reason: validatedInput.reason,
      performedByUserId: session.user.id,
      performedByName: session.user.name || session.user.email || "Unknown",
      previousStatus: grievance.status,
    });

    // 6. Revalidate paths
    revalidatePath("/cms/data-fiduciary/grievances");
    revalidatePath(
      `/cms/data-fiduciary/grievances/${validatedInput.grievanceId}`
    );

    return {
      success: true,
      message: "Grievance reopened successfully",
    };
  } catch (error: any) {
    logger.error("Error in reopenGrievance", { error: error });

    if (error.name === "ZodError") {
      return {
        success: false,
        error: "Validation failed",
        details: error.errors,
      };
    }

    return {
      success: false,
      error: "Failed to reopen grievance. Please try again.",
    };
  }
}

/**
 * Reopen a closed/resolved grievance (Data Principal)
 * Called from the principal portal with a valid DPRM token
 */
export async function reopenGrievanceByPrincipal(
  token: string,
  input: Omit<
    import("@/lib/schemas/grievances").ReopenGrievanceByPrincipalInput,
    "token"
  >
) {
  try {
    // 1. Verify the DPRM token
    const tokenPayload = await verifyDprmToken(token);
    const dataPrincipalId = tokenPayload.data_principal_id as string;

    // 2. Validate input
    const { reopenGrievanceByPrincipalSchema } = await import(
      "@/lib/schemas/grievances"
    );
    const validatedInput = reopenGrievanceByPrincipalSchema.parse({
      ...input,
      token,
    });

    // 3. Get grievance and verify ownership
    const grievance = await prisma.grievance.findUnique({
      where: { id: validatedInput.grievanceId },
      select: {
        id: true,
        status: true,
        dataPrincipalId: true,
        metadata: true,
      },
    });

    if (!grievance) {
      return {
        success: false,
        error: "Grievance not found",
      };
    }

    // Verify the principal owns this grievance
    if (grievance.dataPrincipalId !== dataPrincipalId) {
      return {
        success: false,
        error: "Unauthorized: This grievance doesn't belong to you",
      };
    }

    // Only allow reopening from RESOLVED or CLOSED status
    if (
      grievance.status !== GrievanceStatus.RESOLVED &&
      grievance.status !== GrievanceStatus.CLOSED
    ) {
      return {
        success: false,
        error: "Only resolved or closed grievances can be reopened",
      };
    }

    // 4. Update grievance status to REOPENED
    await prisma.grievance.update({
      where: { id: validatedInput.grievanceId },
      data: {
        status: GrievanceStatus.REOPENED,
        updatedAt: new Date(),
      },
    });

    // 5. Create reopened event
    const { createReopenedByPrincipalEvent } = await import(
      "@/lib/services/grievance-events"
    );
    await createReopenedByPrincipalEvent({
      grievanceId: validatedInput.grievanceId,
      reason: validatedInput.reason,
      dataPrincipalId: dataPrincipalId,
      dataPrincipalName: (grievance.metadata as any)?.name || "Data Principal",
      previousStatus: grievance.status,
    });

    // 6. Revalidate paths
    revalidatePath(`/cms/principal/dprm/${token}/grievances`);
    revalidatePath(
      `/cms/principal/dprm/${token}/grievances/${validatedInput.grievanceId}`
    );

    return {
      success: true,
      message: "Grievance reopened successfully",
    };
  } catch (error: any) {
    logger.error("Error in reopenGrievanceByPrincipal", { error: error });

    if (error.message === "TOKEN_EXPIRED") {
      return { success: false, error: "Your session has expired" };
    }

    if (error.message === "INVALID_TOKEN") {
      return { success: false, error: "Invalid access token" };
    }

    if (error.name === "ZodError") {
      return {
        success: false,
        error: "Validation failed",
        details: error.errors,
      };
    }

    return {
      success: false,
      error: "Failed to reopen grievance. Please try again.",
    };
  }
}

// ===================================================================
// FILE ATTACHMENT ACTIONS
// ===================================================================

/**
 * Upload a file attachment to a grievance message
 * Can be called by agents (with session) or principals (with token)
 *
 * Note: This function accepts a File object directly (converted from FormData on client)
 * because FormData doesn't serialize well across Next.js server action boundary
 */
export async function uploadGrievanceAttachment(
  file: File,
  messageId: number,
  token?: string
) {
  try {
    logger.info("GCS Upload: Starting upload", { messageId });

    // Import dependencies (lazy import to avoid circular deps)
    const { StorageFactory } = await import(
      "@/lib/services/storage/storage-factory"
    );
    const { fileUploadSchema, sanitizeFileName } = await import(
      "@/lib/schemas/file-upload"
    );

    // 1. Authenticate user
    const session = await auth();
    const isAgent = !!session?.user;
    const isPrincipal = !isAgent && !!token;

    logger.debug("GCS Upload: Auth check", { isAgent, isPrincipal });

    if (!isAgent && !isPrincipal) {
      logger.error("GCS Upload: Unauthorized - no valid auth");
      return { error: "Unauthorized" };
    }

    // 2. Validate token if principal
    let dataPrincipalId: string | undefined;
    if (isPrincipal && token) {
      try {
        const tokenPayload = await verifyDprmToken(token);
        dataPrincipalId = tokenPayload.data_principal_id as string;
      } catch (error: any) {
        if (error.message === "TOKEN_EXPIRED") {
          return { error: "Your session has expired" };
        }
        return { error: "Invalid access token" };
      }
    }

    // 3. Get message and validate access
    const message = await prisma.grievanceMessage.findUnique({
      where: { id: messageId },
      include: {
        grievance: true,
      },
    });

    if (!message) {
      return { error: "Message not found" };
    }

    // 4. Check permissions
    if (isPrincipal) {
      // Principal can only upload to their own grievances
      if (message.grievance.dataPrincipalId !== dataPrincipalId) {
        const isGuardian = await prisma.consent.findFirst({
          where: {
            dataPrincipalId: message.grievance.dataPrincipalId,
            majorDataPrincipalId: dataPrincipalId,
          },
        });

        if (!isGuardian) {
          return { error: "Unauthorized" };
        }
      }
    } else if (isAgent) {
      // Agent must be assigned to the grievance
      if (message.grievance.assignedToId !== session.user.id) {
        return { error: "You are not assigned to this grievance" };
      }
    }

    // 5. Validate file
    if (!file) {
      logger.error("GCS Upload: No file provided");
      return { error: "No file provided" };
    }

    logger.debug("GCS Upload: File received", {
      fileName: file.name,
      fileSize: file.size,
      fileType: file.type,
    });

    // Check if file is actually a File object and has content
    if (!(file instanceof File)) {
      logger.error("GCS Upload: File is not a File instance", {
        fileType: typeof file,
        fileString: Object.prototype.toString.call(file),
      });
      return { error: "Invalid file object" };
    }

    if (!file.name || file.name.trim() === "") {
      logger.error("GCS Upload: File has no name");
      return { error: "File has no name" };
    }

    if (file.size === 0) {
      logger.error("GCS Upload: File size is 0");
      return { error: "File is empty" };
    }

    // Validate file properties
    const validation = fileUploadSchema.safeParse({
      fileName: file.name,
      mimeType: file.type,
      fileSize: file.size,
    });

    if (!validation.success) {
      const firstError = validation.error.issues[0];
      return { error: firstError?.message || "Invalid file" };
    }

    // 6. Check attachment count limit
    const existingAttachments = await prisma.grievanceAttachment.count({
      where: { messageId },
    });

    const { FILE_UPLOAD_CONFIG } = await import("@/lib/schemas/file-upload");
    if (existingAttachments >= FILE_UPLOAD_CONFIG.MAX_FILES_PER_MESSAGE) {
      return {
        error: `Maximum ${FILE_UPLOAD_CONFIG.MAX_FILES_PER_MESSAGE} files per message`,
      };
    }

    // 7. Convert file to buffer
    let arrayBuffer: ArrayBuffer;
    let buffer: Buffer;

    try {
      arrayBuffer = await file.arrayBuffer();
      buffer = Buffer.from(arrayBuffer);

      if (buffer.length === 0) {
        return { error: "File buffer is empty" };
      }

      logger.debug("GCS Upload: File converted to buffer", {
        fileName: file.name,
        fileSize: file.size,
        bufferLength: buffer.length,
      });
    } catch (error) {
      logger.error("GCS Upload: Error converting file to buffer", { error });
      return { error: "Failed to read file content" };
    }

    // 8. Upload to storage
    const storage = StorageFactory.getInstance();
    const sanitizedName = sanitizeFileName(file.name);

    logger.info("GCS Upload: Starting storage upload", {
      folder: `grievances/${message.grievanceId}`,
      sanitizedName,
    });

    const uploadResult = await storage.upload({
      file: buffer,
      fileName: sanitizedName,
      mimeType: file.type,
      folder: `grievances/${message.grievanceId}`,
    });

    // 9. Save to database
    const attachment = await prisma.grievanceAttachment.create({
      data: {
        messageId,
        fileKey: uploadResult.fileKey,
        fileName: file.name, // Keep original name for display
        fileSize: uploadResult.size,
        mimeType: uploadResult.mimeType,
      },
    });

    // 10. Revalidate paths
    if (isPrincipal && token) {
      revalidatePath(
        `/cms/principal/dprm/${token}/grievances/${message.grievanceId}/chat`
      );
    } else {
      revalidatePath(`/cms/data-fiduciary/grievances/my-tickets`);
    }

    return {
      success: true,
      data: {
        id: attachment.id,
        fileName: attachment.fileName,
        fileSize: attachment.fileSize,
        mimeType: attachment.mimeType,
        url: uploadResult.url,
      },
    };
  } catch (error: any) {
    logger.error("GCS Upload: Caught error", {
      message: error?.message,
      stack: error?.stack,
      name: error?.name,
      error: error,
    });
    return {
      error: error?.message || "Failed to upload file. Please try again.",
    };
  }
}

/**
 * Get a URL for accessing an attachment
 * Generates signed URLs for cloud storage, public URLs for local storage
 */
export async function getAttachmentUrl(attachmentId: number, token?: string) {
  try {
    const { StorageFactory } = await import(
      "@/lib/services/storage/storage-factory"
    );

    // 1. Authenticate user
    const session = await auth();
    const isAgent = !!session?.user;
    const isPrincipal = !isAgent && !!token;

    if (!isAgent && !isPrincipal) {
      return { error: "Unauthorized" };
    }

    // 2. Validate token if principal
    let dataPrincipalId: string | undefined;
    if (isPrincipal && token) {
      try {
        const tokenPayload = await verifyDprmToken(token);
        dataPrincipalId = tokenPayload.data_principal_id as string;
      } catch (error: any) {
        if (error.message === "TOKEN_EXPIRED") {
          return { error: "Your session has expired" };
        }
        return { error: "Invalid access token" };
      }
    }

    // 3. Get attachment with message and grievance
    const attachment = await prisma.grievanceAttachment.findUnique({
      where: { id: attachmentId },
      include: {
        message: {
          include: {
            grievance: true,
          },
        },
      },
    });

    if (!attachment) {
      return { error: "Attachment not found" };
    }

    // 4. Check permissions
    if (isPrincipal) {
      if (attachment.message.grievance.dataPrincipalId !== dataPrincipalId) {
        const isGuardian = await prisma.consent.findFirst({
          where: {
            dataPrincipalId: attachment.message.grievance.dataPrincipalId,
            majorDataPrincipalId: dataPrincipalId,
          },
        });

        if (!isGuardian) {
          return { error: "Unauthorized" };
        }
      }
    } else if (isAgent) {
      if (attachment.message.grievance.assignedToId !== session.user.id) {
        return { error: "You are not assigned to this grievance" };
      }
    }

    // 5. Generate URL
    const storage = StorageFactory.getInstance();
    const url = await storage.getUrl(attachment.fileKey, 3600); // 1 hour expiry

    return {
      success: true,
      data: { url },
    };
  } catch (error) {
    logger.error("Get attachment URL error", { error: error });
    return { error: "Failed to get file URL" };
  }
}

/**
 * Delete an attachment
 * Only the uploader (principal or agent who added it) or assigned agent can delete
 */
export async function deleteAttachment(attachmentId: number, token?: string) {
  try {
    const { StorageFactory } = await import(
      "@/lib/services/storage/storage-factory"
    );

    // 1. Authenticate user
    const session = await auth();
    const isAgent = !!session?.user;
    const isPrincipal = !isAgent && !!token;

    if (!isAgent && !isPrincipal) {
      return { error: "Unauthorized" };
    }

    // 2. Validate token if principal
    let dataPrincipalId: string | undefined;
    if (isPrincipal && token) {
      try {
        const tokenPayload = await verifyDprmToken(token);
        dataPrincipalId = tokenPayload.data_principal_id as string;
      } catch (error: any) {
        if (error.message === "TOKEN_EXPIRED") {
          return { error: "Your session has expired" };
        }
        return { error: "Invalid access token" };
      }
    }

    // 3. Get attachment with message and grievance
    const attachment = await prisma.grievanceAttachment.findUnique({
      where: { id: attachmentId },
      include: {
        message: {
          include: {
            grievance: true,
          },
        },
      },
    });

    if (!attachment) {
      return { error: "Attachment not found" };
    }

    // 4. Check permissions
    if (isPrincipal) {
      if (attachment.message.grievance.dataPrincipalId !== dataPrincipalId) {
        return { error: "Unauthorized" };
      }
    } else if (isAgent) {
      if (attachment.message.grievance.assignedToId !== session.user.id) {
        return { error: "You are not assigned to this grievance" };
      }
    }

    // 5. Delete from storage (best effort - don't fail if storage delete fails)
    try {
      const storage = StorageFactory.getInstance();
      await storage.delete(attachment.fileKey);
    } catch (error) {
      logger.error("Failed to delete from storage", { error: error });
      // Continue with database deletion even if storage deletion fails
    }

    // 6. Delete from database
    await prisma.grievanceAttachment.delete({
      where: { id: attachmentId },
    });

    // 7. Revalidate paths
    if (isPrincipal && token) {
      revalidatePath(
        `/cms/principal/dprm/${token}/grievances/${attachment.message.grievanceId}/chat`
      );
    } else {
      revalidatePath(`/cms/data-fiduciary/grievances/my-tickets`);
    }

    return {
      success: true,
      message: "Attachment deleted successfully",
    };
  } catch (error) {
    logger.error("Delete attachment error", { error: error });
    return { error: "Failed to delete attachment" };
  }
}

/**
 * Get all attachments for a grievance
 * Useful for displaying attachment gallery or list
 */
export async function getGrievanceAttachments(
  grievanceId: number,
  token?: string
) {
  try {
    // 1. Authenticate user
    const session = await auth();
    const isAgent = !!session?.user;
    const isPrincipal = !isAgent && !!token;

    if (!isAgent && !isPrincipal) {
      return { error: "Unauthorized" };
    }

    // 2. Validate token if principal
    let dataPrincipalId: string | undefined;
    if (isPrincipal && token) {
      try {
        const tokenPayload = await verifyDprmToken(token);
        dataPrincipalId = tokenPayload.data_principal_id as string;
      } catch (error: any) {
        if (error.message === "TOKEN_EXPIRED") {
          return { error: "Your session has expired" };
        }
        return { error: "Invalid access token" };
      }
    }

    // 3. Get grievance and check permissions
    const grievance = await prisma.grievance.findUnique({
      where: { id: grievanceId },
    });

    if (!grievance) {
      return { error: "Grievance not found" };
    }

    if (isPrincipal) {
      if (grievance.dataPrincipalId !== dataPrincipalId) {
        return { error: "Unauthorized" };
      }
    } else if (isAgent) {
      if (grievance.assignedToId !== session.user.id) {
        return { error: "You are not assigned to this grievance" };
      }
    }

    // 4. Get all attachments for this grievance
    const attachments = await prisma.grievanceAttachment.findMany({
      where: {
        message: {
          grievanceId,
        },
      },
      include: {
        message: {
          select: {
            id: true,
            createdAt: true,
            authorType: true,
          },
        },
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    return {
      success: true,
      data: attachments,
    };
  } catch (error) {
    logger.error("Get grievance attachments error", { error: error });
    return { error: "Failed to get attachments" };
  }
}

/**
 * Submit feedback for a grievance resolution (Data Principal)
 * Called when principal provides feedback after grievance is resolved/closed
 */
export async function submitGrievanceFeedback(
  input: SubmitGrievanceFeedbackInput
) {
  try {
    // 1. Validate input
    const validatedInput = submitGrievanceFeedbackSchema.parse(input);
    const { grievanceId, token, rating, reasons, comment } = validatedInput;

    // 2. Verify the DPRM token
    const tokenPayload = await verifyDprmToken(token);
    const dataPrincipalId = tokenPayload.data_principal_id as string;

    // 3. Get the grievance and verify ownership
    const grievance = await prisma.grievance.findUnique({
      where: { id: grievanceId },
      select: {
        id: true,
        dataPrincipalId: true,
        status: true,
        feedback: true,
      },
    });

    if (!grievance) {
      return { error: "Grievance not found" };
    }

    if (grievance.dataPrincipalId !== dataPrincipalId) {
      const isGuardian = await prisma.consent.findFirst({
        where: {
          dataPrincipalId: grievance.dataPrincipalId,
          majorDataPrincipalId: dataPrincipalId,
        },
      });

      if (!isGuardian) {
        return {
          error:
            "You are not authorized to provide feedback for this grievance",
        };
      }
    }

    // 4. Check if grievance is in a state that can receive feedback
    // Feedback can be submitted when grievance is RESOLVED or CLOSED
    if (
      grievance.status !== GrievanceStatus.RESOLVED &&
      grievance.status !== GrievanceStatus.CLOSED
    ) {
      return {
        error:
          "Feedback can only be submitted for resolved or closed grievances",
      };
    }

    // 5. Check if feedback already exists
    if (grievance.feedback) {
      return {
        error: "Feedback has already been submitted for this grievance",
      };
    }

    // 6. Prepare feedback data
    const feedbackData = {
      rating,
      reasons: reasons || [],
      comment: comment || null,
      submittedAt: new Date().toISOString(),
    };

    // 7. Update the grievance with feedback
    await prisma.grievance.update({
      where: { id: grievanceId },
      data: {
        feedback: feedbackData,
      },
    });

    // 8. Revalidate paths
    revalidatePath("/cms/data-fiduciary/grievances/admin");
    revalidatePath(`/cms/principal/dprm/${token}/grievances`);

    return {
      success: true,
      message: "Thank you for your feedback!",
    };
  } catch (error) {
    logger.error("Submit grievance feedback error", { error: error });
    return { error: "Failed to submit feedback" };
  }
}

/**
 * Get feedback analytics for admin dashboard
 * Provides statistics about principal feedback across all grievances
 */
export async function getAdminFeedbackAnalytics() {
  try {
    // 1. Check authentication and authorization
    const session = await auth();
    if (!session?.user?.id) {
      return {
        success: false,
        error: "Unauthorized: Please log in",
      };
    }

    // Get user roles
    const userRoles = await prisma.userRole.findMany({
      where: { userId: session.user.id },
      include: { role: true },
    });

    const roleNames = userRoles.map((ur) => ur.role.name);

    // Check if user has GRIEVANCE:READ permission
    const hasPermission = hasConfigPermission(
      roleNames,
      Resources.GRIEVANCE,
      Actions.READ
    );

    if (!hasPermission) {
      return {
        success: false,
        error: "Unauthorized: You don't have permission to view analytics",
      };
    }

    // 2. Fetch all grievances with feedback
    const grievancesWithFeedback = await prisma.grievance.findMany({
      where: {
        feedback: {
          not: Prisma.JsonNull,
        },
        status: {
          in: [GrievanceStatus.RESOLVED, GrievanceStatus.CLOSED],
        },
      },
      select: {
        id: true,
        feedback: true,
        category: true,
        status: true,
        createdAt: true,
        resolvedAt: true,
        assignedTo: {
          select: {
            id: true,
            name: true,
            email: true,
          },
        },
      },
    });

    // 3. Get total resolved/closed grievances for response rate
    const totalResolvedClosed = await prisma.grievance.count({
      where: {
        status: {
          in: [GrievanceStatus.RESOLVED, GrievanceStatus.CLOSED],
        },
      },
    });

    // 4. Calculate statistics
    const feedbackCount = grievancesWithFeedback.length;
    const responseRate =
      totalResolvedClosed > 0
        ? Math.round((feedbackCount / totalResolvedClosed) * 100)
        : 0;

    // Parse feedback data
    const feedbackData = grievancesWithFeedback.map((g) => ({
      ...g,
      feedback: g.feedback as {
        rating: number;
        reasons?: string[];
        comment?: string;
        submittedAt: string;
      },
    }));

    // Calculate rating statistics
    const ratings = feedbackData.map((g) => g.feedback.rating);
    const avgRating =
      ratings.length > 0
        ? ratings.reduce((sum, r) => sum + r, 0) / ratings.length
        : 0;

    // Rating distribution
    const ratingDistribution = {
      star1: ratings.filter((r) => r === 1).length,
      star2: ratings.filter((r) => r === 2).length,
      star3: ratings.filter((r) => r === 3).length,
      star4: ratings.filter((r) => r === 4).length,
      star5: ratings.filter((r) => r === 5).length,
    };

    // Satisfaction metrics
    const positiveCount = ratings.filter((r) => r >= 4).length;
    const neutralCount = ratings.filter((r) => r === 3).length;
    const negativeCount = ratings.filter((r) => r <= 2).length;

    const satisfactionRate =
      ratings.length > 0
        ? Math.round((positiveCount / ratings.length) * 100)
        : 0;

    // Collect all reasons
    const allReasons: string[] = [];
    feedbackData.forEach((g) => {
      if (g.feedback.reasons) {
        allReasons.push(...g.feedback.reasons);
      }
    });

    // Count reason frequency
    const reasonCounts: Record<string, number> = {};
    allReasons.forEach((reason) => {
      reasonCounts[reason] = (reasonCounts[reason] || 0) + 1;
    });

    // Sort reasons by frequency
    const topReasons = Object.entries(reasonCounts)
      .sort(([, a], [, b]) => b - a)
      .slice(0, 10)
      .map(([reason, count]) => ({ reason, count }));

    // Agent performance (group by assignedTo)
    const agentStats: Record<
      string,
      {
        agentId: string;
        agentName: string;
        totalFeedback: number;
        avgRating: number;
        ratings: number[];
      }
    > = {};

    feedbackData.forEach((g) => {
      if (g.assignedTo) {
        const agentId = g.assignedTo.id;
        if (!agentStats[agentId]) {
          agentStats[agentId] = {
            agentId,
            agentName: g.assignedTo.name || g.assignedTo.email,
            totalFeedback: 0,
            avgRating: 0,
            ratings: [],
          };
        }
        agentStats[agentId].ratings.push(g.feedback.rating);
        agentStats[agentId].totalFeedback++;
      }
    });

    // Calculate averages and sort by rating
    const agentLeaderboard = Object.values(agentStats)
      .map((agent) => ({
        agentId: agent.agentId,
        agentName: agent.agentName,
        totalFeedback: agent.totalFeedback,
        avgRating:
          agent.ratings.reduce((sum, r) => sum + r, 0) / agent.ratings.length,
        positiveCount: agent.ratings.filter((r) => r >= 4).length,
        neutralCount: agent.ratings.filter((r) => r === 3).length,
        negativeCount: agent.ratings.filter((r) => r <= 2).length,
      }))
      .sort((a, b) => b.avgRating - a.avgRating);

    // Category-wise feedback
    const categoryStats: Record<
      string,
      {
        category: string;
        feedbackCount: number;
        avgRating: number;
      }
    > = {};

    feedbackData.forEach((g) => {
      const category = g.category;
      if (!categoryStats[category]) {
        categoryStats[category] = {
          category,
          feedbackCount: 0,
          avgRating: 0,
        };
      }
      categoryStats[category].feedbackCount++;
    });

    const categoryBreakdown = Object.values(categoryStats);

    // Calculate avg rating per category
    feedbackData.forEach((g) => {
      const category = g.category;
      if (categoryStats[category]) {
        const categoryFeedback = feedbackData.filter(
          (f) => f.category === category
        );
        const categoryRatings = categoryFeedback.map((f) => f.feedback.rating);
        categoryStats[category].avgRating =
          categoryRatings.reduce((sum, r) => sum + r, 0) /
          categoryRatings.length;
      }
    });

    // 5. Return analytics data
    return {
      success: true,
      data: {
        overview: {
          totalFeedback: feedbackCount,
          totalResolved: totalResolvedClosed,
          responseRate,
          avgRating: Number(avgRating.toFixed(2)),
          satisfactionRate,
          positiveCount,
          neutralCount,
          negativeCount,
        },
        ratingDistribution,
        topReasons,
        agentLeaderboard,
        categoryBreakdown,
      },
    };
  } catch (error: any) {
    logger.error("Error in getAdminFeedbackAnalytics", { error: error });
    return {
      success: false,
      error: "Failed to fetch feedback analytics",
    };
  }
}
