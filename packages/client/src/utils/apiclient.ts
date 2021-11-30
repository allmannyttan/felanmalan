import axios from 'axios'
import { APIRequest } from './types'

const innerGet = async <T = any>(request: APIRequest) => {
  const headers = {
    Accept: 'application/json',
  }
  const apiClient = axios.create({
    headers,
    baseURL: 'http://localhost:4000/', // FIXME: make configurable
    responseType: 'text',
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