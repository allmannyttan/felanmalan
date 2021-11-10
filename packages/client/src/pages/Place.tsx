import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useAtom } from 'jotai'
import { updateProgressAtom } from '../utils/atoms'
import { Pages, ProgressStatus } from '../utils/types'

const Place = () => {
  const [, updateProgressBar] = useAtom(updateProgressAtom)
  useEffect(() => {
    updateProgressBar({ page: Pages.PLACE, status: ProgressStatus.DOING })
    updateProgressBar({ page: Pages.ROOM, status: ProgressStatus.NEXT })
    updateProgressBar({ page: Pages.AREA, status: ProgressStatus.NEXT })
  }, [])

  return (
    <>
      <h4>Välj en plats</h4>
      <Link to="/rum">Nästa</Link>
    </>
  )
}

export default Place
