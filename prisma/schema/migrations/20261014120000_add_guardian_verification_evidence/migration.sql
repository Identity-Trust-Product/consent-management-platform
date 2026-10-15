-- Store verifiable parent/guardian consent evidence for notices created for minors.
CREATE TABLE "guardian_verification_evidence" (
    "id" SERIAL NOT NULL,
    "public_id" TEXT NOT NULL,
    "notice_id" INTEGER NOT NULL,
    "minor_data_principal_id" TEXT NOT NULL,
    "guardian_data_principal_id" TEXT NOT NULL,
    "relationship_with_minor" TEXT NOT NULL,
    "verification_method" TEXT NOT NULL,
    "verification_reference" TEXT NOT NULL,
    "evidence_artifact_url" TEXT,
    "evidence_artifact_hash" TEXT,
    "verified_at" TIMESTAMP(3) NOT NULL,
    "verified_by" TEXT,
    "metadata" JSONB,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "guardian_verification_evidence_pkey" PRIMARY KEY ("id")
);

CREATE UNIQUE INDEX "guardian_verification_evidence_public_id_key" ON "guardian_verification_evidence"("public_id");
CREATE UNIQUE INDEX "guardian_verification_evidence_notice_id_key" ON "guardian_verification_evidence"("notice_id");
CREATE INDEX "guardian_verification_evidence_minor_data_principal_id_idx" ON "guardian_verification_evidence"("minor_data_principal_id");
CREATE INDEX "guardian_verification_evidence_guardian_data_principal_id_idx" ON "guardian_verification_evidence"("guardian_data_principal_id");
CREATE INDEX "guardian_verification_evidence_verification_reference_idx" ON "guardian_verification_evidence"("verification_reference");

ALTER TABLE "guardian_verification_evidence"
ADD CONSTRAINT "guardian_verification_evidence_notice_id_fkey"
FOREIGN KEY ("notice_id") REFERENCES "notices"("id") ON DELETE CASCADE ON UPDATE CASCADE;
