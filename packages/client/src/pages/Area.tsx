import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useAtom } from 'jotai'
import { updateProgressAtom } from '../utils/atoms'
import { ProgressStatus, Pages } from '../utils/types'

const Area = () => {
  const [, updateProgressBar] = useAtom(updateProgressAtom)
  useEffect(() => {
    updateProgressBar({ page: Pages.ROOM, status: ProgressStatus.COMPLETED })
    updateProgressBar({ page: Pages.AREA, status: ProgressStatus.DOING })
    updateProgressBar({ page: Pages.ITEM, status: ProgressStatus.NEXT })
  }, [])

  return (
    <>
      <h4>Välj ett område du vill felanmäla</h4>
      <Link to="/objekt">Nästa</Link>
    </>
  )
}

export default Area
