import { atom } from 'jotai'
import { ItemEnum, ObjectEnum, RoomEnum, ProgressType } from './types'

export const reportAtom = atom({ room: RoomEnum, object: ObjectEnum, item: ItemEnum })

export const progressBarAtom = atom<ProgressType[]>([
  {
    page: 'room',
    status: 'doing',
  },
  {
    page: 'object',
    status: 'next',
  },
  {
    page: 'item',
    status: 'next',
  },
])

const updateProgress = (
  progress: ProgressType[],
  page: string,
  status: string,
): ProgressType[] =>
  progress.map((progress) => ({
    ...progress,
    status: progress.page == page ? status : progress.status,
  }))

export const updateProgressAtom = atom(
  () => '',
  (get, set, { page, status }: { page: string; status: string }) => {
    set(progressBarAtom, updateProgress(get(progressBarAtom), page, status))
  },
)
