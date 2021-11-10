import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useAtom } from 'jotai'
import { progressBarAtom } from '../utils/atoms'
import { ProgressStatus } from '../utils/types'

const Room = () => {
  const [, setProgressBarAtom] = useAtom(progressBarAtom)

  useEffect(() => {
    setProgressBarAtom([
      { page: 'room', status: ProgressStatus.COMPLETED },
      { page: 'object', status: ProgressStatus.DOING },
      { page: 'item', status: ProgressStatus.NEXT },
    ])
  }, [])

  return (
    <>
      <h5>Vad i rummet ska felanmälas</h5>
      <Link to="/omrade">Nästa</Link>
    </>
  )
}
export default Room
