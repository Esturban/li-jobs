# Build stage
FROM oven/bun:slim AS build
WORKDIR /build

# Copy package files
COPY package.json bun.lockb ./

# Install all dependencies (including dev dependencies)
RUN bun install

# Copy source code
COPY tsconfig.json ./
COPY src/ ./src/

# Build the TypeScript files
RUN bun run build

# Create a clean production-only node_modules
RUN rm -rf node_modules && bun install --production

# Final stage - using Bun image directly instead of Alpine
FROM oven/bun:slim AS final

# Set the working directory
WORKDIR /app

# Copy only the necessary files from build stage
COPY --from=build /build/dist ./dist
COPY --from=build /build/node_modules ./node_modules
COPY --from=build /build/package.json ./

# Expose the port the app runs on
EXPOSE 3000

# Command to run the application
CMD ["bun", "start"]