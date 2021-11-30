import { client } from '@app/adapters/api'
import { Room, Inventory } from './types'

export const fetchApiRooms = async (rentalId: string) => {
  const rentals: Array<Room> = await client.get({
    url: `rooms/?rentalId=${rentalId}`,
  })
  return rentals
}

export const fetchApiInventory = async (roomId: string) => {
  const rentals: Array<Inventory> = await client.get({
    url: `inventory/?roomId=${roomId}`,
  })
  return rentals
}
