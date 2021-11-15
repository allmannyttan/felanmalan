import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useAtom } from 'jotai'
import { updateProgressAtom } from '../utils/atoms'
import { ProgressStatus, Pages } from '../utils/types'

const Complete = () => {
  const [, updateProgressBar] = useAtom(updateProgressAtom)
  useEffect(() => {
    updateProgressBar({ page: Pages.PLACE, status: ProgressStatus.COMPLETED })
    updateProgressBar({ page: Pages.ROOM, status: ProgressStatus.COMPLETED })
    updateProgressBar({ page: Pages.AREA, status: ProgressStatus.COMPLETED })
    updateProgressBar({ page: Pages.ITEM, status: ProgressStatus.COMPLETED })
    updateProgressBar({ page: Pages.COMPLETE, status: ProgressStatus.DOING })
    updateProgressBar({ page: Pages.SUMMARY, status: ProgressStatus.NEXT })
  }, [])

  return (
    <>
      <h4>Komplettera din felanmälan med text, bild och film</h4>
      <Link to="/sammanfattning">Nästa</Link>
    </>
  )
}

export default Complete
