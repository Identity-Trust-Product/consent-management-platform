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

import prisma from "@/lib/prisma";

export interface StepData {
  consentPurpose?: any;
  processingPurposes?: any[];
  dataProcessorMappings?: any[];
  userAttributes?: any[];
  purposesOfProcessing?: any[];
  dataProcessors?: any[];
}

export async function fetchConsentPurposeData(
  consentPurposeId?: string
): Promise<StepData> {
  if (!consentPurposeId) {
    return {};
  }

  try {
    const consentPurpose = await prisma.consentPurpose.findUnique({
      where: { id: parseInt(consentPurposeId) },
    });

    return { consentPurpose };
  } catch (error) {
    console.error("Error fetching consent purpose data:", error);
    return {};
  }
}

export async function fetchProcessingPurposesData(
  consentPurposeId?: string
): Promise<StepData> {
  try {
    const data: StepData = {};

    // Fetch existing processing purposes if editing
    if (consentPurposeId) {
      data.processingPurposes = await prisma.processingPurpose.findMany({
        where: { consentPurposeId: parseInt(consentPurposeId) },
        include: {
          purposeOfProcessing: true,
        },
      });

      data.consentPurpose = await prisma.consentPurpose.findUnique({
        where: { id: parseInt(consentPurposeId) },
      });
    }

    // Fetch user attributes for the form
    data.userAttributes = await prisma.userAttribute.findMany({
      orderBy: { name: "asc" },
    });

    // Fetch purposes of processing for dropdowns
    data.purposesOfProcessing = await prisma.purposeOfProcessing.findMany({
      orderBy: { name: "asc" },
    });

    return data;
  } catch (error) {
    console.error("Error fetching processing purposes data:", error);
    return {};
  }
}

export async function fetchDataProcessorsData(
  consentPurposeId?: string
): Promise<StepData> {
  try {
    const data: StepData = {};

    if (consentPurposeId) {
      // Fetch existing processing purposes
      data.processingPurposes = await prisma.processingPurpose.findMany({
        where: { consentPurposeId: parseInt(consentPurposeId) },
        include: {
          purposeOfProcessing: true,
        },
      });

      // Fetch existing data processor mappings
      data.dataProcessorMappings =
        await prisma.processingPurposeToDataProcessor.findMany({
          where: {
            processingPurpose: {
              consentPurposeId: parseInt(consentPurposeId),
            },
          },
          include: {
            dataProcessor: true,
            processingPurpose: {
              include: {
                purposeOfProcessing: true,
              },
            },
          },
        });

      data.consentPurpose = await prisma.consentPurpose.findUnique({
        where: { id: parseInt(consentPurposeId) },
      });
    }

    // Fetch user attributes
    data.userAttributes = await prisma.userAttribute.findMany({
      orderBy: { name: "asc" },
    });

    // Fetch data processors
    data.dataProcessors = await prisma.dataProcessor.findMany({
      where: { active: true },
      orderBy: { legalName: "asc" },
    });

    return data;
  } catch (error) {
    console.error("Error fetching data processors data:", error);
    return {};
  }
}

export async function fetchGeneralSettingsData(
  consentPurposeId?: string
): Promise<StepData> {
  if (!consentPurposeId) {
    return {};
  }

  try {
    const consentPurpose = await prisma.consentPurpose.findUnique({
      where: { id: parseInt(consentPurposeId) },
    });

    const processingPurposes = await prisma.processingPurpose.findMany({
      where: { consentPurposeId: parseInt(consentPurposeId) },
      include: {
        purposeOfProcessing: true,
      },
    });

    return { consentPurpose, processingPurposes };
  } catch (error) {
    console.error("Error fetching general settings data:", error);
    return {};
  }
}

export async function fetchReviewData(
  consentPurposeId?: string
): Promise<StepData> {
  if (!consentPurposeId) {
    return {};
  }

  try {
    const consentPurpose = await prisma.consentPurpose.findUnique({
      where: { id: parseInt(consentPurposeId) },
    });

    const processingPurposes = await prisma.processingPurpose.findMany({
      where: { consentPurposeId: parseInt(consentPurposeId) },
      include: {
        purposeOfProcessing: true,
      },
    });

    const dataProcessorMappings =
      await prisma.processingPurposeToDataProcessor.findMany({
        where: {
          processingPurpose: {
            consentPurposeId: parseInt(consentPurposeId),
          },
        },
        include: {
          processingPurpose: true,
          dataProcessor: true,
        },
      });

    const userAttributes = await prisma.userAttribute.findMany({
      orderBy: { name: "asc" },
    });

    const purposesOfProcessing = await prisma.purposeOfProcessing.findMany({
      orderBy: { name: "asc" },
    });

    const dataProcessors = await prisma.dataProcessor.findMany({
      where: { active: true },
      orderBy: { brandName: "asc" },
    });

    return {
      consentPurpose,
      processingPurposes,
      dataProcessorMappings,
      userAttributes,
      purposesOfProcessing,
      dataProcessors,
    };
  } catch (error) {
    console.error("Error fetching review data:", error);
    return {};
  }
}

export async function fetchStepData(
  step: number,
  consentPurposeId?: string
): Promise<StepData> {
  switch (step) {
    case 1:
      return fetchConsentPurposeData(consentPurposeId);
    case 2:
      return fetchProcessingPurposesData(consentPurposeId);
    case 3:
      return fetchDataProcessorsData(consentPurposeId);
    case 4:
      return fetchGeneralSettingsData(consentPurposeId);
    case 5:
      return fetchReviewData(consentPurposeId);
    default:
      return fetchConsentPurposeData(consentPurposeId);
  }
}

// Fetch ALL data at once for the entire form
export async function fetchAllConsentPurposeFormData(
  consentPurposeId?: string
): Promise<StepData> {
  try {
    const data: StepData = {};

    // Fetch consent purpose if editing
    if (consentPurposeId) {
      data.consentPurpose = await prisma.consentPurpose.findUnique({
        where: { id: parseInt(consentPurposeId) },
      });

      // Fetch processing purposes
      data.processingPurposes = await prisma.processingPurpose.findMany({
        where: { consentPurposeId: parseInt(consentPurposeId) },
        include: {
          purposeOfProcessing: true,
        },
      });

      // Fetch data processor mappings
      data.dataProcessorMappings =
        await prisma.processingPurposeToDataProcessor.findMany({
          where: {
            processingPurpose: {
              consentPurposeId: parseInt(consentPurposeId),
            },
          },
          include: {
            dataProcessor: true,
            processingPurpose: {
              include: {
                purposeOfProcessing: true,
              },
            },
          },
        });
    }

    // Fetch reference data (always needed)
    data.userAttributes = await prisma.userAttribute.findMany({
      orderBy: { name: "asc" },
    });

    data.purposesOfProcessing = await prisma.purposeOfProcessing.findMany({
      orderBy: { name: "asc" },
    });

    data.dataProcessors = await prisma.dataProcessor.findMany({
      where: { active: true },
      orderBy: { legalName: "asc" },
    });

    return data;
  } catch (error) {
    console.error("Error fetching all consent purpose form data:", error);
    return {};
  }
}
