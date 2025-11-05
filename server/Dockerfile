# server/Dockerfile
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npx prisma generate

FROM node:20-alpine AS runtime
WORKDIR /app
ENV NODE_ENV=production
# copy app including node_modules from builder (safe default)
COPY --from=builder /app /app
EXPOSE 4000
CMD ["node", "src/index.js"]