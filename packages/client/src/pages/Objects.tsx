import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useAtom } from 'jotai'
import { updateProgressAtom } from '../utils/atoms'

const Objects = () => {
  const [, updateProgressBar] = useAtom(updateProgressAtom)

  useEffect(() => {
    updateProgressBar({ page: 'room', status: 'completed' })
    updateProgressBar({ page: 'object', status: 'doing' })
    updateProgressBar({ page: 'item', status: 'next' })
  }, [])

  return (
    <>
      <h5>Vad i rummet ska felanmälas</h5>
      <Link to="/item">Nästa</Link>
    </>
  )
}
export default Objects
