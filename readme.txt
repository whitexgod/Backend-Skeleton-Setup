# Backend Skeleton Setup Project
Project Name: backend_skeleton
Version: 1.0.0

## Description:
The Backend Skeleton Setup project is a boilerplate designed to streamline the development of Node.js backend applications using TypeScript. This skeleton provides a structured and scalable foundation, integrating essential tools and libraries to accelerate the setup process and ensure best practices are followed from the start. It includes support for environment variables, database interaction, validation, and development utilities, making it an ideal starting point for building robust backend services.

Scripts:

- start: ts-node src/server.ts - Starts the server using ts-node for TypeScript support.
- dev: nodemon src/server.ts - Starts the server in development mode with nodemon for auto-restarting on file changes.
- dev:dist: nodemon dist/server.js - Starts the server in development mode from the compiled JavaScript files.
- browser:debug: nodemon --inspect dist/server.js - Starts the server in debug mode for browser-based inspection.
- build:watch: yarn tsc -w - Compiles the TypeScript code in watch mode.

## Key Features:

- TypeScript Support: Ensures type safety and modern JavaScript features.
- Environment Configuration: Manages environment variables with dotenv.
- Express Framework: Provides a flexible and minimal web framework for building RESTful APIs.
- Database Integration: Utilizes pg for PostgreSQL database connectivity and @prisma/client for ORM functionality.
- Validation: Uses yup for schema validation and data validation.
- Development Tools: Includes nodemon for automatic restarts during development, and eslint for code linting to maintain code quality.

## Author: Tuhin Mukherjee

## Getting Started
Install Dependencies:
```
npm install
```

Start Development Server:
```
npm run dev
```

Build and Watch for Changes:
```
npm run build:watch
```

Start Server in Debug Mode:
```
npm run browser:debug
```

## some common problem you might run into
here is how you can fix those

Kill Port Command Reference: This command is used to find the process ID (PID) of the process that is using a specific port (in this case, port 5432). Once you have the PID, you can use the kill command to terminate the process and free up the port.
```
sudo lsof -i:5432
sudo kill -9 <PID>
```
Replace <PID> with the actual process ID obtained from the lsof command output.

Up Docker Image: This command is used to start Docker containers defined in a Docker Compose file in detached mode (-d flag).
```
docker-compose up -d
```
This command reads the docker-compose.yml file in the current directory and starts the defined services as containers in the background.

Down Docker Image: This command is used to stop and remove Docker containers started with Docker Compose.
```
docker-compose down
```
This command stops and removes containers, networks, volumes, and other resources created by docker-compose up.

Generate Prisma Client: This command generates the Prisma Client based on your Prisma schema file. It's used to create a client library that provides type-safe database access.
```
npx prisma generate
```
This command reads the schema.prisma file in your project directory and generates the Prisma Client.

Migrate Database Schema: This command applies migrations to the database to create or update tables based on changes to the schema defined in your Prisma schema file.
```
npx prisma migrate dev --name init
```
This command runs the migrations defined in the migrations directory and applies them to the database. The --name flag is used to provide a name for the migration.

## Contributing
Contributions are welcome! If you have any ideas, suggestions, or bug reports, please open an issue or a pull request.

## License
This project is licensed under the MIT License. See the LICENSE file for more information.

Happy coding! 🚀
