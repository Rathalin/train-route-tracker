#!/bin/bash

# Stop and remove the Docker containers
docker-compose --env-file .env down

# Start the Docker containers in detached mode
docker-compose --env-file .env up -d
