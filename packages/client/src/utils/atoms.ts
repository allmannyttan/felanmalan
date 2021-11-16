import { atom } from 'jotai'
import { initialValues } from '../pages/Complete'
import { ProgressType, ProgressStatus, Pages, ErrorReportType } from './types'

export const reportAtom = atom<ErrorReportType>({ complete: initialValues })

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
