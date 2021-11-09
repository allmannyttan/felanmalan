import React from 'react'
import { Link } from 'react-router-dom'
import { useAtom } from 'jotai'
import { updateProgressAtom } from '../utils/atoms'

const Objects = () => {
  const [, updateProgressBar] = useAtom(updateProgressAtom)

  return (
    <>
      <h5>Vad i rummet ska felanmälas</h5>
      <Link to="/item">
        <button
          onClick={() => {
            updateProgressBar({ page: 'object', status: 'completed' })
            updateProgressBar({ page: 'item', status: 'doing' })
          }}>
          Nästa
        </button>
      </Link>
    </>
  )
}
export default Objects
