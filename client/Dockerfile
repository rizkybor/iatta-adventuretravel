# client/Dockerfile
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM node:20-alpine AS runtime
WORKDIR /app
ENV NODE_ENV=production
ENV NITRO_HOST=0.0.0.0
ENV PORT=3000

# copy everything from builder so .output, server-start.js, package.json, node_modules are present
COPY --from=builder /app /app

EXPOSE 3000
# use npm start so behavior is explicit and easy to override
CMD ["npm", "run", "start"]