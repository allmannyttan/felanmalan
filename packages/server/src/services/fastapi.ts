import { client } from '@app/adapters/api'
import { Room, Inventory, ErrorReportType, ApiExceptionType } from './types'
import { setAttachmentInDb } from '../adapters/api/databaseHelper'
import { Attachment } from '@app/adapters/api/types'
import fs from 'fs'
import { Fields, Files } from 'formidable'
import { v4 as uuidv4 } from 'uuid'

export const fetchApiRooms = async (
  rentalId: string,
  isShared: string
): Promise<Array<Room>> => {
  const params = []
  if (rentalId) params.push(`rentalId=${rentalId}`)
  if (isShared) params.push(`isShared=${isShared}`)

  const paramString = params.length === 0 ? '' : `?${params.join('&')}`
  const rooms: Array<Room> = await client.get({
    url: `rooms/${paramString}`,
  })
  return rooms
}

export const fetchApiInventory = async (
  roomId: string
): Promise<Array<Inventory>> => {
  const inventory: Array<Inventory> = await client.get({
    url: `inventory/?roomId=${roomId}`,
  })
  return inventory
}

export const postCase = async (
  data: ErrorReportType
): Promise<ErrorReportType | ApiExceptionType> => {
  try {
    const createdErrorReport = await client.post({
      url: 'cases',
      data,
    })

    if (createdErrorReport.id && (data.complete.image || data.complete.video)) {
      // console.log('img', data.complete.image)
    }

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
    if (data.complete.image) {
      const ext = getExt(data.complete.image.type) // check MIME TYPE
      imagePath = `attachments/${uuidv4()}.${ext}`
      fs.renameSync(data.complete.image.path, imagePath)
    } else {
      imagePath = ''
    }

    if (data.complete.video) {
      const ext = getExt(data.complete.video.type) // check MIME TYPE
      videoPath = `attachments/${uuidv4()}.${ext}`
      fs.renameSync(data.complete.video.path, videoPath)
    } else {
      videoPath = ''
    }

    if (imagePath || videoPath) {
      const attachment: Attachment = {
        error_report_id: createdErrorReport.id,
        photo: imagePath,
        video: videoPath,
      }
      await setAttachmentInDb(attachment)
    }
    return <ErrorReportType>createdErrorReport
  } catch (e: any) {
    return <ApiExceptionType>{ message: e.response.data }
  }
}
