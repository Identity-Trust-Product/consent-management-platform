npm install -g pnpm
pnpm exec prisma generate --schema=./prisma/schema
pnpm exec prisma migrate deploy --schema=./prisma/schema
pnpm run prisma:seed
exec node .next/standalone/server.js -H 0.0.0.0
