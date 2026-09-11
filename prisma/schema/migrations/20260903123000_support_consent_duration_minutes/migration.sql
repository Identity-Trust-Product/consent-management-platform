-- Store canonical hours as floating-point values so durations shorter than one hour are supported.
-- Existing integer values keep the same meaning and value.
ALTER TABLE "business_processes_to_consent_purposes"
ALTER COLUMN "consent_duration" TYPE DOUBLE PRECISION
USING "consent_duration"::DOUBLE PRECISION;

ALTER TABLE "consents"
ALTER COLUMN "consent_duration" TYPE DOUBLE PRECISION
USING "consent_duration"::DOUBLE PRECISION;

ALTER TABLE "notices"
ALTER COLUMN "consent_duration" TYPE DOUBLE PRECISION
USING "consent_duration"::DOUBLE PRECISION;
