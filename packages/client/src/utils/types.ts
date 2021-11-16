import { IFormData } from '../pages/Complete'

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

export interface ProgressType {
  page: Pages
  status: ProgressStatus
}
