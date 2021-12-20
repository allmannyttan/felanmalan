import axios, { AxiosResponse } from 'axios'
import config from '@app/config'
import { tokenRefresher } from './tokenHelper'
import { APIRequest } from './types'

const innerGet = async (request: APIRequest) => {
  const headers = {
    Authorization:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjIsInVzZXJuYW1lIjoidGVzdCIsImlhdCI6MTY0MDAwNDc3OSwiZXhwIjoxNjQwMDE1NTc5fQ.W7WH2ktxG_3DDwTAnyl_zGogvt2Io04btywWawxUrYI',
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
    Authorization:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjIsInVzZXJuYW1lIjoidGVzdCIsImlhdCI6MTY0MDAwNDc3OSwiZXhwIjoxNjQwMDE1NTc5fQ.W7WH2ktxG_3DDwTAnyl_zGogvt2Io04btywWawxUrYI',
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
