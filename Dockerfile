# syntax=docker/dockerfile:1

FROM node:20-alpine AS builder
WORKDIR /app

# dependencies metadata
COPY package*.json ./
# install all dependencies (dev + prod) for build
RUN apk add --no-cache libc6-compat git python3 make g++ \
  && npm ci --silent

# copy source and generate build
COPY . .
# jika pakai prisma: generate client
RUN npx prisma generate --silent || true

# build nuxt
RUN npm run build

# prepare production image
FROM node:20-alpine AS runner
WORKDIR /app

# set env
ENV NODE_ENV=production
# copy package metadata and built output
COPY --from=builder /app/package*.json ./
# copy only node_modules needed for production from builder
# (builder punya node_modules lengkap, kita salin agar runtime punya semua)
COPY --from=builder /app/node_modules ./node_modules
# copy built output (.output) and prisma client lib (jika ada)
COPY --from=builder /app/.output ./
COPY --from=builder /app/prisma ./prisma
# copy any other runtime files if diperlukan (static, public, etc.)
COPY --from=builder /app/public ./public

EXPOSE 3000

# default command — adjust bila kamu menjalankan dev/preview lain
CMD ["node", ".output/server/index.mjs"]