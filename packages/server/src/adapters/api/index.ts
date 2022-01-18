import axios, { AxiosResponse } from 'axios'
import config from '@app/config'
import { tokenRefresher } from './tokenHelper'
import { APIRequest } from './types'

const innerGet = async (request: APIRequest) => {
  const headers = {
    Authorization: request.token || '',
    Accept: 'application/json',
  }
  const apiClient = axios.create({
    headers,
    baseURL: config.api.baseUrl,
    responseType: 'text',
  })

  const { data } = await apiClient.get(request.url)

  return data
}

const innerPost = async ({ url, data, token }: APIRequest) => {
  const headers = {
    Authorization: token || '',
    Accept: 'application/json',
  }
  const apiClient = axios.create({
    headers,
    baseURL: config.api.baseUrl,
    responseType: 'text',
  })
  const { data: response }: AxiosResponse = await apiClient.post(url, data)

  return response
}

export const client = {
  get: tokenRefresher(innerGet),
  post: tokenRefresher(innerPost),
}

export default {
  client,
}
