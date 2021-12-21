export interface IFormData {
  text?: string
  image?: any
  video?: any
}

export interface ErrorReportType {
  id?: string
  place: string
  room: string
  area: string
  object: string
  complete: IFormData
}

export type ApiExceptionType = {
  message: string
}
