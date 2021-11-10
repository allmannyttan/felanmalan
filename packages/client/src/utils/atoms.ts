import { atom } from 'jotai'
import { ItemEnum, ObjectEnum, RoomEnum, ProgressType, ProgressStatus } from './types'

export const reportAtom = atom({ room: RoomEnum, object: ObjectEnum, item: ItemEnum })

export const progressBarAtom = atom<ProgressType[]>([
  {
    page: 'room',
    status: ProgressStatus.COMPLETED,
  },
  {
    page: 'object',
    status: ProgressStatus.DOING,
  },
  {
    page: 'item',
    status: ProgressStatus.NEXT,
  },
])

// const updateProgress = (
//   progress: ProgressType[],
//   page: string,
//   status: string,
// ): ProgressType[] =>
//   progress.map((progress) => ({
//     ...progress,
//     status: progress.page == page ? status : progress.status,
//   }))

// export const updateProgressAtom = atom(
//   () => '',
//   (get, set, { page, status }: { page: string; status: string }) => {
//     set(progressBarAtom, updateProgress(get(progressBarAtom), page, status))
//   },
// )
