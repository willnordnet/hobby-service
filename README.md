# Hobby Service

This is a Node.js backend service built with Fastify and TypeScript, designed to run in a Docker container.

## Prerequisites

- Docker and Docker Compose
- Node.js and npm (for running scripts locally if needed)

## Getting Started

Follow these steps to get the development environment up and running.

### 1. Set Up Environment Variables

Copy the example environment file to create your own local configuration. This file is pre-configured for the development setup.

```bash
cp .env.example .env
```

### 2. Build and Run the Service

Use Docker Compose to build the Docker image and run the container. This command will start the service in development mode with hot-reloading enabled.

```bash
docker-compose up --build
```

The server will be accessible on `http://localhost:3000`.

### 3. Verify the Service is Running

To confirm that the application is working correctly, you can send a request to its health check endpoint:

```bash
curl http://localhost:3000
```

You should receive the following response:

```json
{"status":"ok"}
```

## Development

The service is configured to run with **hot-reloading**. Any changes you make to files inside the `src/` directory will automatically trigger a server restart, so you don't need to manually stop and start the container during development.

## Available Scripts

The following scripts are available in `package.json` and can be run with `npm run <script-name>`.

- `start`: Runs the compiled, production-ready application from the `dist/` directory.
- `build`: Compiles the TypeScript source code into JavaScript in the `dist/` directory.
- `dev`: Starts the development server with hot-reloading.
- `lint`: Lints the code in the `src/` directory using ESLint.
- `format`: Formats the code in the `src/` directory using Prettier.
