import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useAtom } from 'jotai'
import { updateProgressAtom } from '../utils/atoms'
import { ProgressStatus, Pages } from '../utils/types'

const Room = () => {
  const [, updateProgressBar] = useAtom(updateProgressAtom)
  useEffect(() => {
    updateProgressBar({ page: Pages.PLACE, status: ProgressStatus.COMPLETED })
    updateProgressBar({ page: Pages.ROOM, status: ProgressStatus.DOING })
    updateProgressBar({ page: Pages.AREA, status: ProgressStatus.NEXT })
  }, [])

  return (
    <>
      <h5>Vad i rummet ska felanmälas</h5>
      <Link to="/omrade">Nästa</Link>
    </>
  )
}
export default Room
