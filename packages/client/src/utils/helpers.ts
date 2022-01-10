import { AreaData, InventoryData } from './types'

export const shouldRedirectUser = (data: AreaData | InventoryData) =>
  data.error || (data.data && data.data?.length < 1)
