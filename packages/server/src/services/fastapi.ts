import { client } from '@app/adapters/api'
import { Room, Inventory, ErrorReportType, ApiExceptionType } from './types'
import { getErrorReportString } from '@app/helpers/utils'

export const fetchApiRooms = async (rentalId: string): Promise<Array<Room>> => {
  const rooms: Array<Room> = await client.get({
    url: `rooms/?rentalId=${rentalId}`,
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
    // To do: post data into slussen and get id and use
    const description = getErrorReportString(data)
    const createdErrorReport = await client.post({
      url: 'cases',
      data: description,
    })

    return <ErrorReportType>createdErrorReport
  } catch (e: any) {
    console.log('error', e.response)
    return <ApiExceptionType>{ message: e.response }
  }
}
