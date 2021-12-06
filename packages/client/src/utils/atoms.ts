import { atom } from 'jotai'
import {
  ProgressType,
  ProgressStatus,
  Pages,
  ErrorReportType,
  RoomData,
  InventoryData,
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

const roomId = 'SPACE-382'
// roomId=SPACE-944
const rentalId = 'OBJ-0110203'

const fetchRoomAtom = atom<RoomData>({ loading: true, error: null, data: null })
export const roomAtom = atom(
  (get) => get(fetchRoomAtom),
  (_get, set, url) => {
    const fetchData = async () => {
      set(fetchRoomAtom, (prev) => ({ ...prev, loading: true }))
      try {
        const data = await apiClient.get({
          url: url as string,
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
roomAtom.onMount = (runFetch) => {
  runFetch(`/rooms?rentalId=${rentalId}`)
}

const fetchAreaAtom = atom<RoomData>({ loading: true, error: null, data: null })

export const areaAtom = atom(
  (get) => get(fetchAreaAtom),
  (_get, set, url) => {
    const fetchData = async () => {
      set(fetchAreaAtom, (prev) => ({ ...prev, loading: true }))
      try {
        const data = await apiClient.get({
          url: url as string,
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
areaAtom.onMount = (runFetch) => {
  runFetch(`/area?roomId=${roomId}`)
}

const fetchInventoryAtom = atom<InventoryData>({ loading: true, error: null, data: null })
export const inventoryAtom = atom(
  (get) => get(fetchInventoryAtom),
  (_get, set, url) => {
    const fetchData = async () => {
      set(fetchInventoryAtom, (prev) => ({ ...prev, loading: true }))
      try {
        const data = await apiClient.get({
          url: url as string,
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
inventoryAtom.onMount = (runFetch) => {
  runFetch(`/inventory?roomId=${roomId}`)
}

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
