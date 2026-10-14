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

import { NOTICE_METADATA_KEYS } from "@/lib/constants/notice-metadata";
import prisma from "@/lib/prisma";

type MetadataPair = { key: string; value: string };

export interface GuardianVerificationSnapshot {
  minorDataPrincipalId: string;
  guardianDataPrincipalId: string;
  relationshipWithMinor: string;
  verificationMethod: string;
  verificationReference: string;
  evidenceArtifactUrl?: string;
  evidenceArtifactHash?: string;
  verifiedAt: Date;
  verifiedBy?: string;
}

function metadataValue(metadata: MetadataPair[], key: string) {
  return metadata.find((item) => item.key === key)?.value?.trim();
}

export function getGuardianVerificationSnapshot(
  metadata: MetadataPair[],
  minorDataPrincipalId: string,
): GuardianVerificationSnapshot | null {
  const guardianDataPrincipalId = metadataValue(
    metadata,
    NOTICE_METADATA_KEYS.MAJOR_DATA_PRINCIPAL_ID,
  );
  const relationshipWithMinor = metadataValue(
    metadata,
    NOTICE_METADATA_KEYS.RELATIONSHIP_WITH_MINOR,
  );
  const verificationMethod = metadataValue(
    metadata,
    NOTICE_METADATA_KEYS.GUARDIAN_VERIFICATION_METHOD,
  );
  const verificationReference = metadataValue(
    metadata,
    NOTICE_METADATA_KEYS.GUARDIAN_VERIFICATION_REFERENCE,
  );
  const verifiedAtValue = metadataValue(
    metadata,
    NOTICE_METADATA_KEYS.GUARDIAN_VERIFIED_AT,
  );

  if (
    !guardianDataPrincipalId ||
    !relationshipWithMinor ||
    !verificationMethod ||
    !verificationReference ||
    !verifiedAtValue
  ) {
    return null;
  }

  const verifiedAt = new Date(verifiedAtValue);
  if (Number.isNaN(verifiedAt.getTime())) {
    return null;
  }

  return {
    minorDataPrincipalId,
    guardianDataPrincipalId,
    relationshipWithMinor,
    verificationMethod,
    verificationReference,
    evidenceArtifactUrl: metadataValue(
      metadata,
      NOTICE_METADATA_KEYS.GUARDIAN_EVIDENCE_ARTIFACT_URL,
    ),
    evidenceArtifactHash: metadataValue(
      metadata,
      NOTICE_METADATA_KEYS.GUARDIAN_EVIDENCE_ARTIFACT_HASH,
    ),
    verifiedAt,
    verifiedBy: metadataValue(
      metadata,
      NOTICE_METADATA_KEYS.GUARDIAN_VERIFIED_BY,
    ),
  };
}

export async function createGuardianVerificationEvidence(params: {
  noticeId: number;
  minorDataPrincipalId: string;
  metadata?: MetadataPair[];
}) {
  const snapshot = getGuardianVerificationSnapshot(
    params.metadata || [],
    params.minorDataPrincipalId,
  );

  if (!snapshot) {
    throw new Error("Guardian verification evidence is incomplete or invalid");
  }

  const db = prisma as any;
  return db.guardianVerificationEvidence.create({
    data: {
      noticeId: params.noticeId,
      minorDataPrincipalId: snapshot.minorDataPrincipalId,
      guardianDataPrincipalId: snapshot.guardianDataPrincipalId,
      relationshipWithMinor: snapshot.relationshipWithMinor,
      verificationMethod: snapshot.verificationMethod,
      verificationReference: snapshot.verificationReference,
      evidenceArtifactUrl: snapshot.evidenceArtifactUrl || null,
      evidenceArtifactHash: snapshot.evidenceArtifactHash || null,
      verifiedAt: snapshot.verifiedAt,
      verifiedBy: snapshot.verifiedBy || null,
      metadata: {
        source: "notice_metadata",
      },
    },
  });
}
