# Translator API

## Quick Start

### Local Development

1. Copy `.env.dist` to `.env` and fill in all required variables.
2. Use the correct Node.js version: `nvm use` or install Node.js `24.0.0`.
3. Start the server: `node src/index.js`.
4. The API will be available at [http://localhost:3000](http://localhost:3000).

### Docker

1. Copy `.env.dist` to `.env` and fill in all required variables.
2. Build and start the Docker containers: `docker compose up -d`.
3. The API will be available at [http://localhost:3000](http://localhost:3000).

> **Tip:** To prevent your `.env` file from being included in Docker builds, add it to your `.dockerignore`.
