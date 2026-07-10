# Build stage
FROM node:20-alpine AS builder
WORKDIR /app

COPY package*.json ./
COPY index.html ./
COPY tsconfig*.json ./
COPY vite.config.ts ./
COPY .oxlintrc.json ./
COPY public ./public
COPY src ./src
COPY .env.production ./

RUN npm ci
RUN npm run build

# Production stage
FROM nginx:stable-alpine
COPY --from=builder /app/dist /usr/share/nginx/html
COPY --from=builder /app/public /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
