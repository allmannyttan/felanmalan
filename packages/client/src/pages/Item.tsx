import React, { useEffect } from 'react'
import { useAtom } from 'jotai'
import { updateProgressAtom } from '../utils/atoms'

const Item = () => {
  const [, updateProgressBar] = useAtom(updateProgressAtom)

  useEffect(() => {
    updateProgressBar({ page: 'room', status: 'completed' })
    updateProgressBar({ page: 'object', status: 'completed' })
    updateProgressBar({ page: 'item', status: 'doing' })
  }, [])

  return (
    <>
      <h5>Vilket item ska felanmälas</h5>
    </>
  )
}

export default Item
