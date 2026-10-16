FROM node:22-alpine
WORKDIR /app

# Prisma needs openssl on Alpine
RUN apk add --no-cache openssl libc6-compat

# Dependencies (npm, matches package-lock.json)
COPY package.json package-lock.json ./
COPY prisma ./prisma
RUN npm ci --ignore-scripts

# Application source
COPY . .

# Prisma client (schema lives in the ./prisma/schema folder)
RUN npx prisma generate --schema=./prisma/schema

# Build-time placeholders only (real values are provided at runtime via Kubernetes)
ARG BASE_PATH=/cms
ARG AUTH_SECRET=build-placeholder-secret
ARG DATABASE_URL=postgresql://user:pass@localhost:5432/db
ENV BASE_PATH=$BASE_PATH \
    AUTH_SECRET=$AUTH_SECRET \
    DATABASE_URL=$DATABASE_URL \
    NEXT_TELEMETRY_DISABLED=1

# Build
RUN npm run build

# Standalone output needs public + static assets copied in
RUN cp -r /app/public /app/.next/standalone/ \

    && mkdir -p /app/.next/standalone/.next \
    && cp -r /app/.next/static /app/.next/standalone/.next/

RUN chmod +x /app/run-server.sh

EXPOSE 8080
ENTRYPOINT [ "sh", "/app/run-server.sh" ]