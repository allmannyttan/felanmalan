import React, { useEffect } from 'react'
import { useAtom } from 'jotai'
import { updateProgressAtom } from '../utils/atoms'
import { ProgressStatus, Pages } from '../utils/types'

const Summary = () => {
  const [, updateProgressBar] = useAtom(updateProgressAtom)
  useEffect(() => {
    updateProgressBar({ page: Pages.PLACE, status: ProgressStatus.COMPLETED })
    updateProgressBar({ page: Pages.ROOM, status: ProgressStatus.COMPLETED })
    updateProgressBar({ page: Pages.AREA, status: ProgressStatus.COMPLETED })
    updateProgressBar({ page: Pages.ITEM, status: ProgressStatus.COMPLETED })
    updateProgressBar({ page: Pages.COMPLETE, status: ProgressStatus.COMPLETED })
    updateProgressBar({ page: Pages.SUMMARY, status: ProgressStatus.DOING })
  }, [])

  return (
    <>
      <h5>Sammanfattaning av din felanmälan</h5>
    </>
  )
}

export default Summary