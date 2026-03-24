#!/usr/bin/env bash
set -euo pipefail

echo "[deploy] Installing dependencies..."
npm ci

echo "[deploy] Preparing Prisma client..."
npx prisma generate --schema=./prisma/schema

echo "[deploy] Applying database migrations..."
npx prisma migrate deploy --schema=./prisma/schema

if [[ "${RUN_SEED:-0}" == "1" ]]; then
  echo "[deploy] Running seed..."
  npm run prisma:seed
fi

echo "[deploy] Starting application..."
npm run start
