import axios from 'axios'
import { APIRequest } from './types'
import { ErrorReportType, ApiExceptionType } from '../../../../types'

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

const innerPost = async (request: ErrorReportType) => {
  const headers = {
    Accept: 'application/json',
  }
  const apiClient = axios.create({
    headers,
    baseURL: 'http://localhost:3001/',
    responseType: 'text',
  })

  const data: ErrorReportType | ApiExceptionType = await apiClient.post('/case', request)
  console.log('data', data)

  // if ('message' in data) {
  //   return data
  // }

  return data
}

export const client = {
  get: innerGet,
  post: innerPost,
}

export default {
  client,
}
