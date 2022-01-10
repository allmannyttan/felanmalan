import knex from 'knex'

export const db = knex({
  client: 'pg',
  connection: {
    uri: process.env.DATABASE_URL,
    timezone: 'UTC',
    dateStrings: true,
  },
})
