-- Store the configured duration for each individually selected consent.
-- Values are normalized to hours.
ALTER TABLE "consents"
ADD COLUMN "consent_duration" INTEGER;
