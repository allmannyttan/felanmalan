import configPackage from '@iteam/config'

interface API {
  baseUrl: string
  username: string
  password: string
}

export interface Config {
  port: number
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
    auth: {
      secret:
        'Kungen, Drottningen, Kronprinsessan och Prins Daniel höll i dag ett videomöte med Kungl. Vetenskapsakademien.',
      expiresIn: '3h',
      maxFailedLoginAttempts: 3,
    },
    api: {
      baseUrl: 'http://slussen:4000',
      username: 'test',
      password: 'kalas',
    },
  },
})

export default {
  auth: config.get('auth'),
  port: config.get('port'),
  api: config.get('api'),
  onlyInvalid: config.get('onlyInvalid'),
} as Config
