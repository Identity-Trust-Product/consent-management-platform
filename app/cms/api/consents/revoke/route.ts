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
// FILE: app/api/consents/revoke/route.ts
// ============================================
// API route to fetch consents for the Revoke Consents tab

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

    // Fetch all accepted consents for revocation
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
          },
        },
        businessProcessRule: true,
      },
    });

    // Group by business process
    const serviceMap: Record<string, any> = {};

    for (const consent of consents) {
      const bpId = consent.businessProcessId;

      if (!serviceMap[bpId]) {
        serviceMap[bpId] = {
          name: consent.businessProcess.name,
          purposes: new Map(),
        };
      }

      const purposeId = consent.consentPurposeId;

      if (!serviceMap[bpId].purposes.has(purposeId)) {
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
          processingList: [],
        });
      }

      const purpose = serviceMap[bpId].purposes.get(purposeId);

      const existingProcessing = purpose.processingList.find(
        (p: any) => p.id === consent.processingPurposeId
      );

      if (!existingProcessing) {
        purpose.processingList.push({
          id: consent.processingPurposeId,
          title: consent.processingPurpose.purposeOfProcessing.name,
          description: consent.processingPurpose.description || '',
          attributes: consent.userAttributeNames,
        });
      }
    }

    // Convert to final structure
    const services: Record<string, any> = {};

    for (const [bpId, data] of Object.entries(serviceMap)) {
      services[bpId] = {
        name: data.name,
        purposes: Array.from(data.purposes.values()),
      };
    }

    return NextResponse.json({ services });
  } catch (error) {
    console.error('Error fetching revoke consents:', error);
    return NextResponse.json(
      { error: 'Failed to fetch consents' },
      { status: 500 }
    );
  }
}

// POST endpoint for revoking consents
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { dataPrincipalId, businessProcessId, revokeItems } = body;

    // Update consent status to 'revoked'
    await prisma.consent.updateMany({
      where: {
        dataPrincipalId,
        businessProcessId,
        processingPurposeId: {
          in: revokeItems,
        },
        status: 'accepted',
      },
      data: {
        status: 'revoked',
        updatedAt: new Date(),
      },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error revoking consents:', error);
    return NextResponse.json(
      { error: 'Failed to revoke consents' },
      { status: 500 }
    );
  }
}