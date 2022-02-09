import { atom } from 'jotai'
import {
  ProgressType,
  ProgressStatus,
  Pages,
  RoomData,
  AreaData,
  InventoryData,
  UserData,
  ErrorReportType,
  CommonErrorReportData,
} from './types'
import { client as apiClient } from './apiclient'

export const reportAtom = atom<ErrorReportType>({
  place: '',
  room: '',
  area: '',
  object: '',
  complete: {
    text: '',
    image: null,
    video: null,
  },
})

export const progressBarAtom = atom<ProgressType[]>([
  {
    page: Pages.PLACE,
    status: ProgressStatus.DOING,
  },
  {
    page: Pages.ROOM,
    status: ProgressStatus.NEXT,
  },
  {
    page: Pages.AREA,
    status: ProgressStatus.NEXT,
  },
  {
    page: Pages.ITEM,
    status: ProgressStatus.NEXT,
  },
  {
    page: Pages.COMPLETE,
    status: ProgressStatus.NEXT,
  },
  {
    page: Pages.SUMMARY,
    status: ProgressStatus.NEXT,
  },
])

const updateProgress = (
  progress: ProgressType[],
  page: Pages,
  status: ProgressStatus,
): ProgressType[] =>
  progress.map((progress) => ({
    ...progress,
    status: progress.page == page ? status : progress.status,
  }))

export const updateProgressAtom = atom(
  () => '',
  (get, set, { page, status }: { page: Pages; status: ProgressStatus }) => {
    set(progressBarAtom, updateProgress(get(progressBarAtom), page, status))
  },
)

export const userAtom = atom<UserData>({ rentalId: '', roomId: '', inventoryCode: '' })
const fetchRoomAtom = atom<RoomData>({ loading: true, error: null, data: null })
export const roomAtom = atom(
  (get) => get(fetchRoomAtom),
  (_get, set, rentalId) => {
    const fetchData = async () => {
      set(fetchRoomAtom, (prev) => ({ ...prev, loading: true }))
      try {
        const data = await apiClient.get({
          url: `/rooms?rentalId=${rentalId}`,
        })
        set(fetchRoomAtom, { loading: false, error: null, data })
      } catch (error: any) {
        console.log('error', error)
        set(fetchRoomAtom, { loading: false, error, data: null })
      }
    }
    fetchData()
  },
)

const fetchCommonErrorReportAtom = atom<CommonErrorReportData>({
  loading: true,
  error: null,
  data: null,
})

export const commonErrorReportAtom = atom(
  (get) => get(fetchCommonErrorReportAtom),
  (_get, set) => {
    const fetchData = async () => {
      set(fetchCommonErrorReportAtom, (prev) => ({ ...prev, loading: true }))
      try {
        const data = await apiClient.get({
          url: `/common-error-reports`,
        })
        set(fetchCommonErrorReportAtom, { loading: false, error: null, data })
      } catch (error: any) {
        console.log('error', error)
        set(fetchCommonErrorReportAtom, { loading: false, error, data: null })
      }
    }
    fetchData()
  },
)

const fetchAreaAtom = atom<AreaData>({ loading: true, error: null, data: null })

export const areaAtom = atom(
  (get) => get(fetchAreaAtom),
  (_get, set, roomId) => {
    const fetchData = async () => {
      set(fetchAreaAtom, (prev) => ({ ...prev, loading: true, error: null }))
      try {
        const data = await apiClient.get({
          url: `/area?roomId=${roomId}`,
        })
        set(fetchAreaAtom, { loading: false, error: null, data })
      } catch (error: any) {
        console.log('error', error)
        set(fetchAreaAtom, { loading: false, error, data: null })
      }
    }
    fetchData()
  },
)

const fetchInventoryAtom = atom<InventoryData>({ loading: true, error: null, data: null })
export const inventoryAtom = atom(
  (get) => get(fetchInventoryAtom),
  (_get, set, params: { roomId: string; inventoryCode: string }) => {
    const fetchData = async () => {
      set(fetchInventoryAtom, (prev) => ({ ...prev, loading: true }))
      try {
        const data = await apiClient.get({
          url: `/inventory?roomId=${params.roomId}&inventoryCode=${params.inventoryCode}`,
        })
        set(fetchInventoryAtom, { loading: false, error: null, data })
      } catch (error: any) {
        console.log('error', error)
        set(fetchInventoryAtom, { loading: false, error, data: null })
      }
    }
    fetchData()
  },
)

// Fetch with jotai and react-query. Requires a suspense solution.

// export const roomAtom = atomWithQuery((get) => ({
//   queryKey: ['rental', get(rentalId)],
//   queryFn: async ({ queryKey: [, id] }): Promise<RoomData> => {
//     const res = await apiClient.get({
//       url: `rooms/?rentalId=${id}`,
//     })
//     return res
//   },
// }))

// export const inventoryAtom = atomWithQuery((get) => ({
//   queryKey: ['room', get(roomId)],
//   initialData: () => [],
//   queryFn: async ({ queryKey: [, id] }): Promise<InventoryType[]> => {
//     const res = await apiClient.get({
//       url: `inventory/?roomId=${id}`,
//     })
//     return res
//   },
// }))
