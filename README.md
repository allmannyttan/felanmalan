# Felanmälan

felanmalan-backend is an API that uses Slussen to provide data necessary for a tenant to report an error/fault in their apartment.

## Overview

    ┌────────────┐        Λ          ┌────────────┐         Λ         ┌────────────┐
    │            │       ╱ ╲         │            │        ╱ ╲        │            │
    │            │      ╱   ╲        │            │       ╱   ╲       │            │
    │            │     ╱     ╲       │            │      ╱     ╲      │  Slussen   │
    │  Frontend  │◀───▶  json ◀─────▶│  Backend   │◀────▶ json  ◀─────▶(auth: jwt, │
    │            │     ╲     ╱       │            │      ╲     ╱      │ 3h expire) │
    │            │      ╲   ╱        │            │       ╲   ╱       │            │
    │            │       ╲ ╱         │            │        ╲ ╱        │            │
    └────────────┘        V          └────────────┘         V         └──────▲─────┘
                                            ▲                                │
                                            │                                │
                                            ├────────┐                       │
                              ┌─────────┐   │        │                       ▼
                              │Postgres │◀──┘        ▼                       Λ
                              └─────────┘      ┌──────────┐                 ╱ ╲
                                               │  assets  │                ╱   ╲
                                               │  volume  │               ╱     ╲
                                               └──────────┘              ▕  xml  ▏
                                                                          ╲     ╱
                                                                           ╲   ╱
                                                                            ╲ ╱
                                                                            ▲
                                                                            │
                                                                            │
                                                                            │
                                                                            │
                                                                        ┌───▼───┐
                                                                        │fastapi│
                                                                        └───────┘

## Dependencies

- Node.js installed preferably using [nvm](https://github.com/nvm-sh/nvm#installing-and-updating)
- [Docker installed](https://docs.docker.com/get-docker/)
- [Docker Compose installed](https://docs.docker.com/compose/install/)
- [access to GitHub Packages](https://docs.github.com/en/packages/learn-github-packages/about-github-packages#authenticating-to-github-packages)

## Developing

- Felanmälan uses PostgresQL that we run in Docker.
- Felanmälan uses Slussen that we run in Docker.
- You need some configuration files as described in the [Config section](#-Config)
- Create a personal token for GitHub Packages as described above and run `docker login https://docker.pkg.github.com`

## Getting started

```
docker-compose up -d
```

### packages/client

```
npm ci
npm run dev
```

Visit http://localhost:3000/plats

### packages/server

```
nvm use
npm i
npm run migrate:up
npm run dev
```

Go to http://localhost:3001/

To create a user in Slussen, see [Slussen README](/allmannyttan/slussen).

### Config

Default values are stored in `src/config.ts`, and are overriden
by `config.json`.

For example, use different Slussen user:

```
{
  "api": {
    "username": "otest",
    "password": "party"
  }
}
```

### Migrations and seeds

- Create new migration: `npx knex migrate:make <migration_name>`
- Create new seed for dev: `npx knex seed:make $(date +%s)_<name> --env dev`
- Reset (recreate and seed) dev db: `npm run reset:dev`
