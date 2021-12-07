import { IFormData } from '../pages/Complete'

export interface APIRequest {
  url: string
}

export enum RoomEnum {
  'KITCHEN' = 'Kök',
  'BATHROOM' = 'Badrum',
}

export enum ObjectEnum {
  'FREEZER' = 'Frys',
  'OVEN' = 'Ugn',
}

export enum ItemEnum {
  'LAMP' = 'Lampa',
  'DOOR' = 'Dörr',
}

export type ErrorReportType = {
  place: string
  room: string
  area: string
  object: string
  complete: IFormData
}

export enum ProgressStatus {
  COMPLETED = 'completed',
  DOING = 'doing',
  NEXT = 'next',
}

export enum Pages {
  PLACE = 'place',
  ROOM = 'room',
  AREA = 'area',
  ITEM = 'item',
  COMPLETE = 'complete',
  SUMMARY = 'summary',
}

export type ProgressType = {
  page: Pages
  status: ProgressStatus
}

type RoomType = {
  id: string
  name: string
  description: string
  shared: string
}

export type RoomData = {
  loading: boolean
  error: string | null
  data: RoomType[] | null
}

export type AreaType = {
  name: string
  description: string
  code: string
}

export type AreaData = {
  loading: boolean
  error: string | null
  data: AreaType[] | null
}

export type UserData = {
  rentalId: string
  rooms: { id: string }[]
}

export type InventoryType = {
  id: string
  description: string
  class: {
    code: string
    name: string
  }
  type: string
  manufacturer: string
}

export type InventoryData = {
  loading: boolean
  error: string | null
  data: InventoryType[] | null
}
