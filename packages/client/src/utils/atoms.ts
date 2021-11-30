import { atom } from 'jotai'
import { atomWithQuery } from 'jotai/query'
import { ProgressType, ProgressStatus, Pages, ErrorReportType } from './types'
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

type RoomType = {
  id: string
  name: string
  description: string
  shared: string
}

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

const rentalId = atom('OBJ-0110102')
const roomId = atom('SPACE-882')

export const roomAtom = atomWithQuery((get) => ({
  queryKey: ['users', get(rentalId)],
  queryFn: async ({ queryKey: [, id] }): Promise<RoomType[]> => {
    const res = await apiClient.get({
      url: `rooms/?rentalId=${id}`,
    })
    console.log('res', res)
    return res
  },
}))
