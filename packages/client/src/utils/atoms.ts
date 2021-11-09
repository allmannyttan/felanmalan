import { atom } from 'jotai'
import { ItemEnum, ObjectEnum, RoomEnum } from './types'

export const reportAtom = atom({ room: RoomEnum, object: ObjectEnum, item: ItemEnum })
