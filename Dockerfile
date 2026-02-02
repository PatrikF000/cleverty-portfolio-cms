# Use Debian-based Node image with better platform support
FROM node:20-bullseye AS base

WORKDIR /app

# ----------------------
# Dependencies install
# ----------------------
FROM base AS deps

RUN apt-get update && apt-get install -y \
    curl \
    python3 \
    make \
    g++ \
    && apt-get clean

COPY package.json yarn.lock* package-lock.json* pnpm-lock.yaml* ./

RUN \
  if [ -f yarn.lock ]; then \
    echo "Using yarn..." && yarn install --frozen-lockfile; \
  elif [ -f package-lock.json ]; then \
    echo "Using npm..." && npm install --legacy-peer-deps --prefer-offline --no-audit --no-fund; \
  elif [ -f pnpm-lock.yaml ]; then \
    echo "Using pnpm..." && corepack enable pnpm && pnpm install --frozen-lockfile; \
  else \
    echo "No lockfile found, using npm install..." && npm install --legacy-peer-deps; \
  fi

# ----------------------
# Builder
# ----------------------
FROM base AS builder
WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules
COPY . .

# ✅ důležité: vezme config i env soubory
COPY next.config.mjs next.config.js* ./
COPY .env* ./

# 🚨 DŮLEŽITÉ: deklaruj build-args a proměň je na ENV pro Next.js build
# Render převede hodnoty z Environment na build-args automaticky.
ARG NEXT_PUBLIC_PAYLOAD_URL
ENV NEXT_PUBLIC_PAYLOAD_URL=${NEXT_PUBLIC_PAYLOAD_URL}


# Disable telemetry
ENV NEXT_TELEMETRY_DISABLED=1

# Set production environment for build
ENV NODE_ENV=production

# Generate Payload admin UI assets
RUN npx payload generate:importmap
RUN npx payload generate:types

# Build app
RUN \
  if [ -f yarn.lock ]; then yarn build; \
  elif [ -f package-lock.json ]; then npm run build; \
  elif [ -f pnpm-lock.yaml ]; then corepack enable pnpm && pnpm run build; \
  else npm run build; \
  fi

# ----------------------
# Runner
# ----------------------
FROM base AS runner
WORKDIR /app

ENV NODE_ENV=production
# PORT will be set by Render (10000) - this is just a fallback
ENV PORT=${PORT:-10000}

RUN apt-get update && apt-get install -y curl && apt-get clean

RUN addgroup --system --gid 1001 nodejs && \
    adduser --system --uid 1001 nextjs

# Copy build output
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

# Payload generated files
COPY --from=builder /app/src/app/\(payload\)/admin/importMap.js ./src/app/\(payload\)/admin/importMap.js
COPY --from=builder /app/src/payload-types.ts ./src/payload-types.ts

RUN mkdir -p .next && chown -R nextjs:nodejs .next

USER nextjs

EXPOSE 10000

# ✅ pokud používáš standalone build, Next.js vygeneruje server.js
CMD ["node", "server.js"]