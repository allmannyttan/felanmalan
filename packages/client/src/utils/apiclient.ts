import axios from 'axios'
import { APIRequest } from './types'

const innerGet = async (request: APIRequest) => {
  const headers = {
    Accept: 'application/json',
  }
  const apiClient = axios.create({
    headers,
    baseURL: 'http://localhost:3001/', // FIXME: make configurable
    responseType: 'text',
    timeout: 30000,
  })

  const { data } = await apiClient.get(request.url)

  return data
}

export const client = {
  get: innerGet,
}

export default {
  client,
}
