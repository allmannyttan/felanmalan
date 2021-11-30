import configPackage from '@iteam/config'

interface Postgres {
  host: string
  user: string
  password: string
  database: string
  port: number
}

interface API {
  baseUrl: string
  username: string
  password: string
}

export interface Config {
  port: number
  postgres: Postgres
  auth: {
    secret: string
    expiresIn: string
    maxFailedLoginAttempts: number
  }
  api: API
  onlyInvalid: boolean
}

const config = configPackage({
  file: `${__dirname}/../config.json`,
  defaults: {
    port: 3001,
    postgres: {
      host: '127.0.0.1',
      user: 'iteamadmin',
      password: 'adminadmin1337',
      database: 'felanmalan',
      port: 5442,
    },
    auth: {
      secret:
        'Kungen, Drottningen, Kronprinsessan och Prins Daniel höll i dag ett videomöte med Kungl. Vetenskapsakademien.',
      expiresIn: '3h',
      maxFailedLoginAttempts: 3,
    },
    api: {
      baseUrl: 'http://localhost:4000/',
      username: 'test',
      password: 'kalas',
    },
  },
})

export default {
  auth: config.get('auth'),
  port: config.get('port'),
  postgres: config.get('postgres'),
  api: config.get('api'),
  onlyInvalid: config.get('onlyInvalid'),
} as Config