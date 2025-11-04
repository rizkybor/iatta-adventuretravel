# syntax=docker/dockerfile:1

##############################
# 1️⃣ Build Stage
##############################
FROM node:20-alpine AS builder
WORKDIR /app

# Install dependencies metadata
COPY package*.json ./

# Install build dependencies
RUN apk add --no-cache libc6-compat git python3 make g++ \
  && npm ci --silent

# Copy all source code
COPY . .

# Prisma generate (opsional)
RUN npx prisma generate --silent || true

# Build Nuxt / Nitro
RUN npm run build

# Debug: pastikan .output/server/index.mjs ada
RUN ls -la .output
RUN ls -la .output/server

##############################
# 2️⃣ Production Stage
##############################
FROM node:20-alpine AS runner
WORKDIR /app

# Set environment
ENV NODE_ENV=production

# Copy package.json & node_modules (production only)
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/node_modules ./node_modules

# Copy built output
COPY --from=builder /app/.output /app/.output

# Copy prisma client jika ada
COPY --from=builder /app/prisma ./prisma

# Copy public folder jika ada static files
COPY --from=builder /app/public ./public

# Expose port
EXPOSE 3000

# Start command
CMD ["node", ".output/server/index.mjs"]