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

// ============================================
// FILE: app/api/consents/update/route.ts
// ============================================
// API route to fetch consents for the Update Consents tab

import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const dataPrincipalId = searchParams.get('dataPrincipalId');

    if (!dataPrincipalId) {
      return NextResponse.json(
        { error: 'dataPrincipalId is required' },
        { status: 400 }
      );
    }

    // 1. Fetch all accepted consents for this data principal
    const consents = await prisma.consent.findMany({
      where: {
        dataPrincipalId,
        status: 'accepted',
      },
      include: {
        businessProcess: {
          include: {
            businessUnit: true,
          },
        },
        consentPurpose: {
          include: {
            processingPurposes: {
              include: {
                purposeOfProcessing: true,
              },
            },
          },
        },
        processingPurpose: {
          include: {
            purposeOfProcessing: true,
            processingPurposeToDataProcessors: {
              include: {
                dataProcessor: true,
              },
            },
          },
        },
        businessProcessRule: true,
      },
    });

    // 2. Group consents by business process
    const serviceMap: Record<string, any> = {};

    for (const consent of consents) {
      const bpId = consent.businessProcessId;

      if (!serviceMap[bpId]) {
        serviceMap[bpId] = {
          id: bpId,
          name: consent.businessProcess.name,
          purposes: new Map(),
        };
      }

      const purposeId = consent.consentPurposeId;

      if (!serviceMap[bpId].purposes.has(purposeId)) {
        // Calculate consent duration from businessProcessToConsentPurpose
        const bpToPurpose = await prisma.businessProcessToConsentPurpose.findFirst({
          where: {
            businessProcessId: consent.businessProcess.id,
            consentPurposeId: consent.consentPurpose.id,
          },
        });

        serviceMap[bpId].purposes.set(purposeId, {
          id: purposeId,
          title: consent.consentPurpose.name,
          duration: bpToPurpose?.consentDuration
            ? `${bpToPurpose.consentDuration} Days`
            : 'Not specified',
          isNew: false, // Determine based on your business logic
          defaultChecked: true,
          processingList: [],
        });
      }

      // 3. Add processing purpose
      const purpose = serviceMap[bpId].purposes.get(purposeId);

      // Check if processing already exists
      const existingProcessing = purpose.processingList.find(
        (p: any) => p.id === consent.processingPurposeId
      );

      if (!existingProcessing) {
        purpose.processingList.push({
          id: consent.processingPurposeId,
          title: consent.processingPurpose.purposeOfProcessing.name,
          description: consent.processingPurpose.description || '',
          isNew: false, // Determine based on your business logic
          defaultChecked: true,
          updateNotice: null, // Check for updates in your system
          attributes: {
            list: consent.userAttributeNames,
            newlyAddedCount: 0, // Calculate based on previous versions
          },
        });
      }
    }

    // 4. Convert to final structure
    const services: Record<string, any> = {};

    for (const [bpId, data] of Object.entries(serviceMap)) {
      services[bpId] = {
        id: data.id,
        name: data.name,
        purposes: Array.from(data.purposes.values()),
      };
    }

    return NextResponse.json({ services });
  } catch (error) {
    console.error('Error fetching update consents:', error);
    return NextResponse.json(
      { error: 'Failed to fetch consents' },
      { status: 500 }
    );
  }
}

// POST endpoint for updating consents
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { dataPrincipalId, businessProcessId, updates } = body;

    // Your update logic here
    // This would involve creating new consent records with updated data

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error updating consents:', error);
    return NextResponse.json(
      { error: 'Failed to update consents' },
      { status: 500 }
    );
  }
}
