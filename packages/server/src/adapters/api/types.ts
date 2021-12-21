export interface APIRequest {
  url: string
  token?: string
  data?: object
}

export interface APIToken {
  id: number
  token_value: string
  created: Date
}

export type Attachment = {
  error_report_id: string
  photo?: string
  video?: string
}
