CREATE TABLE "dxp_documents" (
    "id" TEXT NOT NULL,
    "event" TEXT NOT NULL,
    "event_id" TEXT NOT NULL,
    "request_ref" TEXT NOT NULL,
    "consent_id" TEXT,
    "raw_body" BYTEA NOT NULL,
    "received_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "dxp_documents_pkey" PRIMARY KEY ("id")
);

CREATE UNIQUE INDEX "dxp_documents_event_id_key" ON "dxp_documents"("event_id");
CREATE UNIQUE INDEX "dxp_documents_consent_id_key" ON "dxp_documents"("consent_id");
CREATE UNIQUE INDEX "dxp_documents_event_request_ref_key" ON "dxp_documents"("event", "request_ref");
CREATE INDEX "dxp_documents_request_ref_idx" ON "dxp_documents"("request_ref");
