# Stage 1: Builder
FROM node:20-alpine AS builder

ARG DATABASE_URL
ENV DATABASE_URL=${DATABASE_URL}

WORKDIR /app
COPY package*.json ./
COPY prisma ./prisma/ 
RUN npm install
COPY . .

# Build Nuxt dan generate Prisma Client
RUN npx prisma generate
RUN npm run build 

# Stage 2: Runner
FROM node:20-alpine AS runner

WORKDIR /app

# Copy package files dan install hanya dependensi produksi
COPY --from=builder /app/package*.json ./
RUN npm install --only=production

# Copy aplikasi yang sudah di-build dan file penting lainnya
COPY --from=builder /app/.output ./.output
COPY --from=builder /app/node_modules/.prisma ./node_modules/.prisma
COPY --from=builder /app/prisma/schema.prisma ./prisma/schema.prisma

EXPOSE 3000
ENV NUXT_HOST=0.0.0.0
ENV NUXT_PORT=3000
CMD ["node", ".output/server/index.mjs"]