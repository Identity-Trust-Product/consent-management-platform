FROM node:22-alpine
WORKDIR /app
RUN npm install -g pnpm

# Copy package files first for dependency installation
COPY package.json pnpm-lock.yaml ./

# Copy prisma schema before installing dependencies
COPY prisma ./prisma

RUN pnpm install --frozen-lockfile --ignore-scripts

# Copy the rest of the application
COPY . .

# Generate Prisma Client with explicit schema location
RUN pnpm exec prisma generate --schema=./prisma/schema

# Build the application
RUN pnpm run build
RUN cp -r /app/public /app/.next/standalone/ && cp -r /app/.next/static /app/.next/standalone/.next
RUN chmod +x /app/run-server.sh
ENTRYPOINT [ "sh", "/app/run-server.sh" ]
EXPOSE 8080
