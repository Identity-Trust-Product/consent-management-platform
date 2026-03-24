-- CreateEnum
CREATE TYPE "ConsentAction" AS ENUM ('GRANTED', 'REVOKED', 'VERSION_UPDATED', 'RENEWED', 'SUPERCEDED', 'EXPIRED');

-- CreateEnum
CREATE TYPE "GrievanceCategory" AS ENUM ('CONSENT_UPDATE', 'WITHDRAW_CONSENT', 'ERASE_DATA', 'PROCESSING_PURPOSE_ENQUIRY', 'REPORT_BREACH', 'REVIEW_REQUEST', 'NOMINATE_MEMBER');

-- CreateEnum
CREATE TYPE "GrievanceStatus" AS ENUM ('SUBMITTED', 'ASSIGNED', 'IN_PROGRESS', 'RESOLVED', 'CLOSED', 'REOPENED');

-- CreateEnum
CREATE TYPE "GrievanceSeverity" AS ENUM ('LOW', 'MEDIUM', 'HIGH', 'CRITICAL');

-- CreateEnum
CREATE TYPE "GrievanceMessageAuthorType" AS ENUM ('PRINCIPAL', 'FIDUCIARY_AGENT', 'SYSTEM');

-- CreateEnum
CREATE TYPE "GrievanceMessageType" AS ENUM ('USER_MESSAGE', 'SYSTEM_EVENT');

-- CreateEnum
CREATE TYPE "WebhookEventType" AS ENUM ('CONSENT_CREATED', 'CONSENT_REVOKED', 'CONSENT_UPDATED', 'CONSENT_EXPIRED', 'CONSENT_ARTIFACTS_CREATED_OR_UPDATED', 'NOTICE_CREATED', 'NOTICE_SUBMITTED', 'DATA_RETENTION_ACTION');

-- CreateEnum
CREATE TYPE "WebhookTargetType" AS ENUM ('DATA_FIDUCIARY', 'DATA_PROCESSOR');

-- CreateEnum
CREATE TYPE "WebhookDeliveryStatus" AS ENUM ('PENDING', 'DELIVERED', 'FAILED', 'TIMEOUT');

-- CreateTable
CREATE TABLE "audit_logs" (
    "id" TEXT NOT NULL,
    "performed_by_user_id" TEXT,
    "action" TEXT NOT NULL,
    "resource" TEXT NOT NULL,
    "resource_id" TEXT,
    "payload" JSONB,
    "result" JSONB,
    "metadata" JSONB,
    "status" TEXT NOT NULL DEFAULT 'SUCCESS',
    "failure_reason" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "audit_logs_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "accounts" (
    "id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "provider" TEXT NOT NULL,
    "provider_account_id" TEXT NOT NULL,
    "refresh_token" TEXT,
    "access_token" TEXT,
    "expires_at" INTEGER,
    "token_type" TEXT,
    "scope" TEXT,
    "id_token" TEXT,
    "session_state" TEXT,

    CONSTRAINT "accounts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "sessions" (
    "id" TEXT NOT NULL,
    "session_token" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "expires" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "sessions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL,
    "name" TEXT,
    "email" TEXT,
    "email_verified" TIMESTAMP(3),
    "image" TEXT,
    "password" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "roles" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "roles_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "user_roles" (
    "id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "role_id" TEXT NOT NULL,
    "assigned_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "assigned_by" TEXT,

    CONSTRAINT "user_roles_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "verification_tokens" (
    "identifier" TEXT NOT NULL,
    "token" TEXT NOT NULL,
    "expires" TIMESTAMP(3) NOT NULL
);

-- CreateTable
CREATE TABLE "api_keys" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "key" TEXT NOT NULL,
    "prefix" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "is_active" BOOLEAN NOT NULL DEFAULT true,
    "last_used_at" TIMESTAMP(3),
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "api_keys_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "consents" (
    "id" SERIAL NOT NULL,
    "public_id" TEXT NOT NULL,
    "request_id" TEXT NOT NULL,
    "request_type" TEXT NOT NULL,
    "reference_id" TEXT NOT NULL,
    "data_principal_id" TEXT NOT NULL,
    "business_process_id" TEXT NOT NULL,
    "consent_purpose_id" TEXT NOT NULL,
    "processing_purpose_id" TEXT NOT NULL,
    "business_process_rule_id" TEXT NOT NULL,
    "business_unit_id" TEXT NOT NULL,
    "user_attribute_names" TEXT[],
    "major_data_principal_id" TEXT,
    "parent_consent_id" TEXT,
    "language" TEXT NOT NULL,
    "inserted_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'accepted',
    "expires_at" TIMESTAMP(3),
    "is_expired" BOOLEAN NOT NULL DEFAULT false,
    "data_retention_action_triggered_at" TIMESTAMP(3),

    CONSTRAINT "consents_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "consent_audit_trail" (
    "id" SERIAL NOT NULL,
    "public_id" TEXT NOT NULL,
    "consent_id" TEXT NOT NULL,
    "data_principal_id" TEXT NOT NULL,
    "action" "ConsentAction" NOT NULL,
    "actor" TEXT NOT NULL,
    "timestamp" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "details" JSONB,

    CONSTRAINT "consent_audit_trail_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "grievances" (
    "id" SERIAL NOT NULL,
    "public_id" TEXT NOT NULL,
    "data_principal_id" TEXT NOT NULL,
    "metadata" JSONB NOT NULL DEFAULT '{}',
    "status" "GrievanceStatus" NOT NULL DEFAULT 'SUBMITTED',
    "category" "GrievanceCategory" NOT NULL,
    "severity" "GrievanceSeverity" NOT NULL DEFAULT 'MEDIUM',
    "subject" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "business_process_id" INTEGER NOT NULL,
    "assigned_to_id" TEXT,
    "resolved_at" TIMESTAMP(3),
    "closed_at" TIMESTAMP(3),
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "agent_last_seen_at" TIMESTAMP(3),
    "principal_last_seen_at" TIMESTAMP(3),
    "feedback" JSONB,

    CONSTRAINT "grievances_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "grievance_audit_logs" (
    "id" SERIAL NOT NULL,
    "grievance_id" INTEGER NOT NULL,
    "action" TEXT NOT NULL,
    "details" JSONB,
    "performed_by_user_id" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "grievance_audit_logs_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "grievance_messages" (
    "id" SERIAL NOT NULL,
    "grievance_id" INTEGER NOT NULL,
    "message_type" "GrievanceMessageType" NOT NULL DEFAULT 'USER_MESSAGE',
    "event_type" TEXT,
    "event_details" JSONB,
    "author_type" "GrievanceMessageAuthorType" NOT NULL,
    "author_id" TEXT,
    "message" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "grievance_messages_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "grievance_attachments" (
    "id" SERIAL NOT NULL,
    "message_id" INTEGER NOT NULL,
    "file_key" TEXT NOT NULL,
    "file_name" TEXT NOT NULL,
    "file_size" INTEGER NOT NULL,
    "mime_type" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "grievance_attachments_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "sla_configurations" (
    "id" SERIAL NOT NULL,
    "severity" "GrievanceSeverity" NOT NULL,
    "resolutionTimeInDays" INTEGER NOT NULL,
    "escalationUserIds" TEXT[],
    "active" BOOLEAN NOT NULL DEFAULT true,
    "businessHoursEnabled" BOOLEAN NOT NULL DEFAULT false,
    "businessHoursStart" TEXT,
    "businessHoursEnd" TEXT,
    "businessDays" INTEGER[],
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "sla_configurations_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "sla_trackers" (
    "id" SERIAL NOT NULL,
    "grievanceId" INTEGER NOT NULL,
    "severity" "GrievanceSeverity" NOT NULL,
    "startedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "expectedResolutionAt" TIMESTAMP(3) NOT NULL,
    "resolvedAt" TIMESTAMP(3),
    "isBreached" BOOLEAN NOT NULL DEFAULT false,
    "breachedAt" TIMESTAMP(3),
    "escalatedAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "sla_trackers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "notices" (
    "id" SERIAL NOT NULL,
    "public_id" TEXT NOT NULL,
    "redirection_url" TEXT,
    "link_expires_at" TIMESTAMP(3),
    "status" TEXT NOT NULL DEFAULT 'pending',
    "consent_status" TEXT,
    "data_principal_id" TEXT NOT NULL,
    "default_language" TEXT NOT NULL,
    "creation_method" TEXT NOT NULL,
    "created_by_user_id" TEXT NOT NULL,
    "data_principal_submitted_data" JSONB,
    "reference_id" TEXT,
    "business_process_id" INTEGER NOT NULL,
    "mark_completed_timestamp" TIMESTAMP(3),
    "status_reason" TEXT,
    "for_minor" BOOLEAN NOT NULL DEFAULT false,
    "notice_config" JSONB,
    "inserted_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "consent_duration" INTEGER,

    CONSTRAINT "notices_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "notice_metadata" (
    "id" SERIAL NOT NULL,
    "notice_id" INTEGER NOT NULL,
    "key" TEXT NOT NULL,
    "value" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "notice_metadata_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "notifications" (
    "id" SERIAL NOT NULL,
    "data_principal_id" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "seen" BOOLEAN NOT NULL DEFAULT false,
    "metadata" JSONB,

    CONSTRAINT "notifications_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "principal_activity_logs" (
    "id" SERIAL NOT NULL,
    "data_principal_id" TEXT NOT NULL,
    "session_id" TEXT NOT NULL,
    "event_type" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "principal_activity_logs_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "business_units" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "active" BOOLEAN NOT NULL DEFAULT true,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "public_id" TEXT NOT NULL,

    CONSTRAINT "business_units_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "business_processes" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "version" INTEGER NOT NULL DEFAULT 1,
    "status" TEXT NOT NULL,
    "grant_description" TEXT NOT NULL,
    "revoke_description" TEXT,
    "reconsent_description" TEXT,
    "default_language" TEXT NOT NULL DEFAULT 'en',
    "supported_languages" TEXT[] DEFAULT ARRAY['en']::TEXT[],
    "translations" JSONB NOT NULL DEFAULT '{}',
    "legal_documents" JSONB NOT NULL DEFAULT '{}',
    "creation_type" TEXT,
    "created_by" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "published_at" TIMESTAMP(3),
    "business_unit_id" INTEGER NOT NULL,
    "template" TEXT NOT NULL DEFAULT 'default',
    "public_id" TEXT NOT NULL,

    CONSTRAINT "business_processes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "consent_purposes" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "version" INTEGER NOT NULL DEFAULT 1,
    "status" TEXT NOT NULL,
    "description" TEXT,
    "supported_languages" TEXT[] DEFAULT ARRAY['en']::TEXT[],
    "translations" JSONB NOT NULL DEFAULT '{}',
    "created_by" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "published_at" TIMESTAMP(3),
    "public_id" TEXT NOT NULL,

    CONSTRAINT "consent_purposes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "processing_purposes" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "created_by" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "consent_purpose_id" INTEGER NOT NULL,
    "purpose_of_processing_id" INTEGER NOT NULL,
    "description" TEXT,
    "user_attribute_names" TEXT[],
    "supported_languages" TEXT[] DEFAULT ARRAY['en']::TEXT[],
    "translations" JSONB NOT NULL DEFAULT '{}',
    "public_id" TEXT NOT NULL,

    CONSTRAINT "processing_purposes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "purposes_of_processing" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "description" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "purposes_of_processing_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "user_attributes" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "pii" BOOLEAN NOT NULL DEFAULT false,
    "supported_languages" TEXT[] DEFAULT ARRAY['en']::TEXT[],
    "translations" JSONB NOT NULL DEFAULT '{}',
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "user_attributes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "data_processors" (
    "ou_id" TEXT NOT NULL,
    "legal_name" TEXT NOT NULL,
    "brand_name" TEXT NOT NULL,
    "cin" TEXT,
    "industry" TEXT,
    "active" BOOLEAN NOT NULL DEFAULT true,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "data_processors_pkey" PRIMARY KEY ("ou_id")
);

-- CreateTable
CREATE TABLE "processing_purpose_to_data_processors" (
    "id" SERIAL NOT NULL,
    "data_processor_id" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "created_by" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "processing_purpose_id" INTEGER NOT NULL,
    "user_attribute_names" TEXT[],

    CONSTRAINT "processing_purpose_to_data_processors_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "business_process_rules" (
    "id" SERIAL NOT NULL,
    "mandatory" BOOLEAN NOT NULL DEFAULT false,
    "reconsentable_by_principal" BOOLEAN NOT NULL DEFAULT false,
    "revocable_by_principal" BOOLEAN NOT NULL DEFAULT false,
    "created_by" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "business_process_id" INTEGER NOT NULL,
    "consent_purpose_id" INTEGER NOT NULL,
    "processing_purpose_id" INTEGER NOT NULL,
    "public_id" TEXT NOT NULL,
    "retention_duration" INTEGER,

    CONSTRAINT "business_process_rules_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "business_processes_to_consent_purposes" (
    "id" SERIAL NOT NULL,
    "consent_duration" INTEGER,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "business_process_id" INTEGER NOT NULL,
    "consent_purpose_id" INTEGER NOT NULL,

    CONSTRAINT "business_processes_to_consent_purposes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "data_retention_policies" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "policy_url" TEXT,
    "created_by" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "public_id" TEXT NOT NULL,

    CONSTRAINT "data_retention_policies_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "data_retention_policy_configurations" (
    "id" SERIAL NOT NULL,
    "data_retention_policy_id" INTEGER NOT NULL,
    "business_process_rule_id" INTEGER NOT NULL,
    "trigger" TEXT NOT NULL,
    "notify_user_ids" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "data_retention_policy_configurations_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "webhooks" (
    "id" SERIAL NOT NULL,
    "public_id" TEXT NOT NULL,
    "event_type" "WebhookEventType" NOT NULL,
    "endpoint_url" TEXT NOT NULL,
    "http_method" TEXT NOT NULL DEFAULT 'POST',
    "custom_headers" JSONB,
    "signing_secret" TEXT NOT NULL,
    "is_active" BOOLEAN NOT NULL DEFAULT true,
    "target_type" "WebhookTargetType" NOT NULL DEFAULT 'DATA_FIDUCIARY',
    "data_processor_id" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "webhooks_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "webhook_logs" (
    "id" SERIAL NOT NULL,
    "public_id" TEXT NOT NULL,
    "webhook_id" INTEGER NOT NULL,
    "event_id" TEXT NOT NULL,
    "event_type" "WebhookEventType" NOT NULL,
    "payload" JSONB NOT NULL,
    "status" "WebhookDeliveryStatus" NOT NULL,
    "http_status" INTEGER,
    "attempted_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "response_time" INTEGER,
    "error_message" TEXT,

    CONSTRAINT "webhook_logs_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "audit_logs_resource_resource_id_idx" ON "audit_logs"("resource", "resource_id");

-- CreateIndex
CREATE INDEX "audit_logs_performed_by_user_id_idx" ON "audit_logs"("performed_by_user_id");

-- CreateIndex
CREATE INDEX "audit_logs_action_idx" ON "audit_logs"("action");

-- CreateIndex
CREATE INDEX "audit_logs_created_at_idx" ON "audit_logs"("created_at");

-- CreateIndex
CREATE UNIQUE INDEX "accounts_provider_provider_account_id_key" ON "accounts"("provider", "provider_account_id");

-- CreateIndex
CREATE UNIQUE INDEX "sessions_session_token_key" ON "sessions"("session_token");

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "roles_name_key" ON "roles"("name");

-- CreateIndex
CREATE UNIQUE INDEX "user_roles_user_id_role_id_key" ON "user_roles"("user_id", "role_id");

-- CreateIndex
CREATE UNIQUE INDEX "verification_tokens_identifier_token_key" ON "verification_tokens"("identifier", "token");

-- CreateIndex
CREATE UNIQUE INDEX "api_keys_key_key" ON "api_keys"("key");

-- CreateIndex
CREATE INDEX "api_keys_key_idx" ON "api_keys"("key");

-- CreateIndex
CREATE INDEX "api_keys_user_id_idx" ON "api_keys"("user_id");

-- CreateIndex
CREATE INDEX "api_keys_is_active_idx" ON "api_keys"("is_active");

-- CreateIndex
CREATE INDEX "api_keys_prefix_idx" ON "api_keys"("prefix");

-- CreateIndex
CREATE UNIQUE INDEX "consents_public_id_key" ON "consents"("public_id");

-- CreateIndex
CREATE INDEX "consents_data_principal_id_idx" ON "consents"("data_principal_id");

-- CreateIndex
CREATE INDEX "consents_business_process_id_idx" ON "consents"("business_process_id");

-- CreateIndex
CREATE INDEX "consents_processing_purpose_id_idx" ON "consents"("processing_purpose_id");

-- CreateIndex
CREATE INDEX "consents_business_unit_id_idx" ON "consents"("business_unit_id");

-- CreateIndex
CREATE INDEX "consents_expires_at_is_expired_idx" ON "consents"("expires_at", "is_expired");

-- CreateIndex
CREATE INDEX "consents_data_retention_action_triggered_at_idx" ON "consents"("data_retention_action_triggered_at");

-- CreateIndex
CREATE UNIQUE INDEX "consents_user_attribute_names_processing_purpose_id_referen_key" ON "consents"("user_attribute_names", "processing_purpose_id", "reference_id", "parent_consent_id", "consent_purpose_id", "business_process_id", "data_principal_id");

-- CreateIndex
CREATE UNIQUE INDEX "consent_audit_trail_public_id_key" ON "consent_audit_trail"("public_id");

-- CreateIndex
CREATE INDEX "consent_audit_trail_consent_id_idx" ON "consent_audit_trail"("consent_id");

-- CreateIndex
CREATE INDEX "consent_audit_trail_data_principal_id_idx" ON "consent_audit_trail"("data_principal_id");

-- CreateIndex
CREATE UNIQUE INDEX "grievances_public_id_key" ON "grievances"("public_id");

-- CreateIndex
CREATE INDEX "grievances_data_principal_id_idx" ON "grievances"("data_principal_id");

-- CreateIndex
CREATE INDEX "grievances_assigned_to_id_idx" ON "grievances"("assigned_to_id");

-- CreateIndex
CREATE INDEX "grievances_severity_idx" ON "grievances"("severity");

-- CreateIndex
CREATE INDEX "grievances_status_idx" ON "grievances"("status");

-- CreateIndex
CREATE INDEX "grievances_business_process_id_idx" ON "grievances"("business_process_id");

-- CreateIndex
CREATE INDEX "grievances_status_created_at_idx" ON "grievances"("status", "created_at");

-- CreateIndex
CREATE INDEX "grievances_business_process_id_status_idx" ON "grievances"("business_process_id", "status");

-- CreateIndex
CREATE INDEX "grievance_audit_logs_grievance_id_idx" ON "grievance_audit_logs"("grievance_id");

-- CreateIndex
CREATE INDEX "grievance_audit_logs_performed_by_user_id_idx" ON "grievance_audit_logs"("performed_by_user_id");

-- CreateIndex
CREATE INDEX "grievance_messages_grievance_id_created_at_idx" ON "grievance_messages"("grievance_id", "created_at");

-- CreateIndex
CREATE INDEX "grievance_messages_message_type_idx" ON "grievance_messages"("message_type");

-- CreateIndex
CREATE INDEX "grievance_messages_author_id_idx" ON "grievance_messages"("author_id");

-- CreateIndex
CREATE INDEX "grievance_attachments_message_id_idx" ON "grievance_attachments"("message_id");

-- CreateIndex
CREATE INDEX "grievance_attachments_file_key_idx" ON "grievance_attachments"("file_key");

-- CreateIndex
CREATE UNIQUE INDEX "sla_configurations_severity_key" ON "sla_configurations"("severity");

-- CreateIndex
CREATE UNIQUE INDEX "sla_trackers_grievanceId_key" ON "sla_trackers"("grievanceId");

-- CreateIndex
CREATE INDEX "sla_trackers_expectedResolutionAt_idx" ON "sla_trackers"("expectedResolutionAt");

-- CreateIndex
CREATE INDEX "sla_trackers_isBreached_idx" ON "sla_trackers"("isBreached");

-- CreateIndex
CREATE UNIQUE INDEX "notices_public_id_key" ON "notices"("public_id");

-- CreateIndex
CREATE INDEX "notices_business_process_id_idx" ON "notices"("business_process_id");

-- CreateIndex
CREATE INDEX "notices_data_principal_id_idx" ON "notices"("data_principal_id");

-- CreateIndex
CREATE INDEX "notices_reference_id_idx" ON "notices"("reference_id");

-- CreateIndex
CREATE INDEX "notices_status_idx" ON "notices"("status");

-- CreateIndex
CREATE INDEX "notices_updated_at_idx" ON "notices"("updated_at");

-- CreateIndex
CREATE UNIQUE INDEX "notices_reference_id_data_principal_id_business_process_id_key" ON "notices"("reference_id", "data_principal_id", "business_process_id");

-- CreateIndex
CREATE INDEX "notice_metadata_notice_id_idx" ON "notice_metadata"("notice_id");

-- CreateIndex
CREATE INDEX "notice_metadata_key_idx" ON "notice_metadata"("key");

-- CreateIndex
CREATE INDEX "notifications_data_principal_id_idx" ON "notifications"("data_principal_id");

-- CreateIndex
CREATE INDEX "principal_activity_logs_data_principal_id_updated_at_idx" ON "principal_activity_logs"("data_principal_id", "updated_at");

-- CreateIndex
CREATE UNIQUE INDEX "principal_activity_logs_session_id_event_type_key" ON "principal_activity_logs"("session_id", "event_type");

-- CreateIndex
CREATE UNIQUE INDEX "business_units_code_key" ON "business_units"("code");

-- CreateIndex
CREATE UNIQUE INDEX "business_units_public_id_key" ON "business_units"("public_id");

-- CreateIndex
CREATE UNIQUE INDEX "business_processes_public_id_key" ON "business_processes"("public_id");

-- CreateIndex
CREATE INDEX "business_processes_code_idx" ON "business_processes"("code");

-- CreateIndex
CREATE INDEX "business_processes_status_idx" ON "business_processes"("status");

-- CreateIndex
CREATE UNIQUE INDEX "business_processes_code_version_key" ON "business_processes"("code", "version");

-- CreateIndex
CREATE UNIQUE INDEX "consent_purposes_public_id_key" ON "consent_purposes"("public_id");

-- CreateIndex
CREATE INDEX "consent_purposes_code_idx" ON "consent_purposes"("code");

-- CreateIndex
CREATE INDEX "consent_purposes_status_idx" ON "consent_purposes"("status");

-- CreateIndex
CREATE UNIQUE INDEX "consent_purposes_code_version_key" ON "consent_purposes"("code", "version");

-- CreateIndex
CREATE UNIQUE INDEX "processing_purposes_public_id_key" ON "processing_purposes"("public_id");

-- CreateIndex
CREATE UNIQUE INDEX "processing_purposes_consent_purpose_id_purpose_of_processin_key" ON "processing_purposes"("consent_purpose_id", "purpose_of_processing_id");

-- CreateIndex
CREATE UNIQUE INDEX "purposes_of_processing_code_key" ON "purposes_of_processing"("code");

-- CreateIndex
CREATE UNIQUE INDEX "user_attributes_name_key" ON "user_attributes"("name");

-- CreateIndex
CREATE UNIQUE INDEX "data_processors_ou_id_key" ON "data_processors"("ou_id");

-- CreateIndex
CREATE UNIQUE INDEX "business_process_rules_public_id_key" ON "business_process_rules"("public_id");

-- CreateIndex
CREATE UNIQUE INDEX "data_retention_policies_public_id_key" ON "data_retention_policies"("public_id");

-- CreateIndex
CREATE UNIQUE INDEX "data_retention_policy_configurations_data_retention_policy__key" ON "data_retention_policy_configurations"("data_retention_policy_id", "business_process_rule_id");

-- CreateIndex
CREATE UNIQUE INDEX "webhooks_public_id_key" ON "webhooks"("public_id");

-- CreateIndex
CREATE INDEX "webhooks_event_type_idx" ON "webhooks"("event_type");

-- CreateIndex
CREATE INDEX "webhooks_is_active_idx" ON "webhooks"("is_active");

-- CreateIndex
CREATE INDEX "webhooks_target_type_idx" ON "webhooks"("target_type");

-- CreateIndex
CREATE INDEX "webhooks_data_processor_id_idx" ON "webhooks"("data_processor_id");

-- CreateIndex
CREATE UNIQUE INDEX "webhook_logs_public_id_key" ON "webhook_logs"("public_id");

-- CreateIndex
CREATE UNIQUE INDEX "webhook_logs_event_id_key" ON "webhook_logs"("event_id");

-- CreateIndex
CREATE INDEX "webhook_logs_webhook_id_idx" ON "webhook_logs"("webhook_id");

-- CreateIndex
CREATE INDEX "webhook_logs_status_idx" ON "webhook_logs"("status");

-- CreateIndex
CREATE INDEX "webhook_logs_event_type_idx" ON "webhook_logs"("event_type");

-- CreateIndex
CREATE INDEX "webhook_logs_attempted_at_idx" ON "webhook_logs"("attempted_at");

-- AddForeignKey
ALTER TABLE "audit_logs" ADD CONSTRAINT "audit_logs_performed_by_user_id_fkey" FOREIGN KEY ("performed_by_user_id") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "accounts" ADD CONSTRAINT "accounts_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "sessions" ADD CONSTRAINT "sessions_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_roles" ADD CONSTRAINT "user_roles_role_id_fkey" FOREIGN KEY ("role_id") REFERENCES "roles"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_roles" ADD CONSTRAINT "user_roles_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "api_keys" ADD CONSTRAINT "api_keys_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "consents" ADD CONSTRAINT "consents_business_process_id_fkey" FOREIGN KEY ("business_process_id") REFERENCES "business_processes"("public_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "consents" ADD CONSTRAINT "consents_business_process_rule_id_fkey" FOREIGN KEY ("business_process_rule_id") REFERENCES "business_process_rules"("public_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "consents" ADD CONSTRAINT "consents_business_unit_id_fkey" FOREIGN KEY ("business_unit_id") REFERENCES "business_units"("public_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "consents" ADD CONSTRAINT "consents_consent_purpose_id_fkey" FOREIGN KEY ("consent_purpose_id") REFERENCES "consent_purposes"("public_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "consents" ADD CONSTRAINT "consents_parent_consent_id_fkey" FOREIGN KEY ("parent_consent_id") REFERENCES "consents"("public_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "consents" ADD CONSTRAINT "consents_processing_purpose_id_fkey" FOREIGN KEY ("processing_purpose_id") REFERENCES "processing_purposes"("public_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "consent_audit_trail" ADD CONSTRAINT "consent_audit_trail_consent_id_fkey" FOREIGN KEY ("consent_id") REFERENCES "consents"("public_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "grievances" ADD CONSTRAINT "grievances_business_process_id_fkey" FOREIGN KEY ("business_process_id") REFERENCES "business_processes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "grievances" ADD CONSTRAINT "grievances_assigned_to_id_fkey" FOREIGN KEY ("assigned_to_id") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "grievance_audit_logs" ADD CONSTRAINT "grievance_audit_logs_grievance_id_fkey" FOREIGN KEY ("grievance_id") REFERENCES "grievances"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "grievance_audit_logs" ADD CONSTRAINT "grievance_audit_logs_performed_by_user_id_fkey" FOREIGN KEY ("performed_by_user_id") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "grievance_messages" ADD CONSTRAINT "grievance_messages_grievance_id_fkey" FOREIGN KEY ("grievance_id") REFERENCES "grievances"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "grievance_messages" ADD CONSTRAINT "grievance_messages_author_user_fkey" FOREIGN KEY ("author_id") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "grievance_attachments" ADD CONSTRAINT "grievance_attachments_message_id_fkey" FOREIGN KEY ("message_id") REFERENCES "grievance_messages"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "sla_trackers" ADD CONSTRAINT "sla_trackers_grievanceId_fkey" FOREIGN KEY ("grievanceId") REFERENCES "grievances"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "notices" ADD CONSTRAINT "notices_business_process_id_fkey" FOREIGN KEY ("business_process_id") REFERENCES "business_processes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "notice_metadata" ADD CONSTRAINT "notice_metadata_notice_id_fkey" FOREIGN KEY ("notice_id") REFERENCES "notices"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "business_processes" ADD CONSTRAINT "business_processes_business_unit_id_fkey" FOREIGN KEY ("business_unit_id") REFERENCES "business_units"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "processing_purposes" ADD CONSTRAINT "processing_purposes_consent_purpose_id_fkey" FOREIGN KEY ("consent_purpose_id") REFERENCES "consent_purposes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "processing_purposes" ADD CONSTRAINT "processing_purposes_purpose_of_processing_id_fkey" FOREIGN KEY ("purpose_of_processing_id") REFERENCES "purposes_of_processing"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "processing_purpose_to_data_processors" ADD CONSTRAINT "processing_purpose_to_data_processors_data_processor_id_fkey" FOREIGN KEY ("data_processor_id") REFERENCES "data_processors"("ou_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "processing_purpose_to_data_processors" ADD CONSTRAINT "processing_purpose_to_data_processors_processing_purpose_i_fkey" FOREIGN KEY ("processing_purpose_id") REFERENCES "processing_purposes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "business_process_rules" ADD CONSTRAINT "business_process_rules_business_process_id_fkey" FOREIGN KEY ("business_process_id") REFERENCES "business_processes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "business_process_rules" ADD CONSTRAINT "business_process_rules_consent_purpose_id_fkey" FOREIGN KEY ("consent_purpose_id") REFERENCES "consent_purposes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "business_process_rules" ADD CONSTRAINT "business_process_rules_processing_purpose_id_fkey" FOREIGN KEY ("processing_purpose_id") REFERENCES "processing_purposes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "business_processes_to_consent_purposes" ADD CONSTRAINT "business_processes_to_consent_purposes_business_process_id_fkey" FOREIGN KEY ("business_process_id") REFERENCES "business_processes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "business_processes_to_consent_purposes" ADD CONSTRAINT "business_processes_to_consent_purposes_consent_purpose_id_fkey" FOREIGN KEY ("consent_purpose_id") REFERENCES "consent_purposes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "data_retention_policy_configurations" ADD CONSTRAINT "data_retention_policy_configurations_data_retention_policy_fkey" FOREIGN KEY ("data_retention_policy_id") REFERENCES "data_retention_policies"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "data_retention_policy_configurations" ADD CONSTRAINT "data_retention_policy_configurations_business_process_rule_fkey" FOREIGN KEY ("business_process_rule_id") REFERENCES "business_process_rules"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "webhooks" ADD CONSTRAINT "webhooks_data_processor_id_fkey" FOREIGN KEY ("data_processor_id") REFERENCES "data_processors"("ou_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "webhook_logs" ADD CONSTRAINT "webhook_logs_webhook_id_fkey" FOREIGN KEY ("webhook_id") REFERENCES "webhooks"("id") ON DELETE CASCADE ON UPDATE CASCADE;
