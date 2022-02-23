import { ErrorReportInput } from '@app/services/types'

export function getErrorReportString(data: ErrorReportInput) {
  const description = Object.values(data).reduce((prev, curr, index) => {
    if (index === 0) return prev.concat('', curr)
    if (!curr) return prev
    if (data.description && data.description === curr)
      return prev.concat(': ', curr)

    return prev.concat(' -> ', curr)
  }, '')

  return description
}
