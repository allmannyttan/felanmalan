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

type InventoryType = {
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
