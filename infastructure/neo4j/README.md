# Run Neo4j

1. Create a `.env` file and copy the content from `.env.example` file. Then, update the environment variables in the `.env` file.
1. Run `docker-compose --env-file .env up -d`

## Known Issues

If you've already startet the container, execute the following commands to start the container again:

1. `docker-compose --env-file .env down`
1. `docker-compose --env-file .env up -d`

I don't know why this happens, but it's a known issue. I might fix it later.
