import fs from 'fs'
import { v4 as uuidv4 } from 'uuid'
import { Attachment } from '@app/adapters/api/types'
import { setAttachmentInDb } from '@app/adapters/api/databaseHelper'
import { ErrorReportType, IErrorReportFiles } from '@app/services/types'

export function getErrorReportString(data: ErrorReportType) {
  const description = Object.values(data).reduce((prev, curr, index) => {
    if (index === 0) return prev.concat('', curr)
    if (!curr) return prev
    if (data.description && data.description === curr)
      return prev.concat(': ', curr)

    return prev.concat(' -> ', curr)
  }, '')

  return description
}

export async function addFilesToDb(data: IErrorReportFiles, reportId: string) {
  const getExt = (type: string) => {
    //To do: add more types? Video osv.
    switch (type) {
      case 'image/jpeg':
        return 'jpg'
      case 'image/png':
        return 'png'
      default:
        return 'Unvalid type'
    }
  }
  let imagePath, videoPath
  if (data.image) {
    const ext = getExt(data.image.type) // check MIME TYPE
    imagePath = `attachments/${uuidv4()}.${ext}`
    fs.renameSync(data.image.path, imagePath)
  } else {
    imagePath = ''
  }

  if (data.video) {
    const ext = getExt(data.video.type) // check MIME TYPE
    videoPath = `attachments/${uuidv4()}.${ext}`
    fs.renameSync(data.video.path, videoPath)
  } else {
    videoPath = ''
  }

  if (imagePath || videoPath) {
    const attachment: Attachment = {
      error_report_id: reportId || '',
      photo: imagePath,
      video: videoPath,
    }
    await setAttachmentInDb(attachment)
  }
}
