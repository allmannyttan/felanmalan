import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useAtom } from 'jotai'
import { updateProgressAtom } from '../utils/atoms'
import { ProgressStatus, Pages } from '../utils/types'

const Item = () => {
  const [, updateProgressBar] = useAtom(updateProgressAtom)
  useEffect(() => {
    updateProgressBar({ page: Pages.AREA, status: ProgressStatus.COMPLETED })
    updateProgressBar({ page: Pages.ITEM, status: ProgressStatus.DOING })
    updateProgressBar({ page: Pages.COMPLETE, status: ProgressStatus.NEXT })
  }, [])
  return (
    <>
      <h4>Välj ett Object du vill felanmäla</h4>
      <Link to="/komplettera">Nästa</Link>
    </>
  )
}

export default Item
