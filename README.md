# Dockerized Node.js Express, Angular, and MONGO DB.
This repository contains Dockerfiles and Docker Compose files to deploy a Node.js Express application built with TypeScript, an Angular single-page application, and an MS SQL Server database, all in Docker containers.

## Getting Started
To get started with this project, clone the repository to your local machine and run the following command:
docker-compose up --build
This command will build the Docker images for the API, frontend, and SQL Server, and start the containers. The API will be available at '**http://localhost:4200**', and the frontend will be available at '**http://localhost:4100**'.

## Prerequisites
To run this project, you need to have Docker and Docker Compose installed on your machine. If you don't have them installed, you can download them from the official Docker website:
[Docker](https://www.docker.com/get-started/), [Docker Compose](https://docs.docker.com/compose/install/)

## Configuration
- '**SA_PASSWORD**': the password for the SQL Server "sa" user (default: '**P@ssw0rd**')
- '**ACCEPT_EULA**': set this to Y to accept the SQL Server license terms (default: '**Y**')
- '**MONGO DB**': the SQL Server edition to use (default: '**Developer**')

You can override these variables by creating a '.env' file in the root of the repository and setting the values there.

## Built With
[Node.js](https://nodejs.org/en) - The runtime environment for the API
[Express](https://expressjs.com/) - The web framework for the API
[TypeScript](https://www.typescriptlang.org/) - The language used for the API
[Angular](https://angular.io/) - The frontend framework
[MS SQL Server](https://www.microsoft.com/en-us/sql-server/sql-server-downloads) - The database engine

## Contributing
Contributions are welcome! If you find any issues or have suggestions for improvements, please submit an issue or a pull request.

