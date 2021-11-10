import React, { useEffect } from 'react'
import { useAtom } from 'jotai'
import { progressBarAtom } from '../utils/atoms'
import { ProgressStatus } from '../utils/types'

const Summary = () => {
  const [, setProgressBarAtom] = useAtom(progressBarAtom)
  useEffect(() => {
    setProgressBarAtom([
      { page: 'room', status: ProgressStatus.COMPLETED },
      { page: 'object', status: ProgressStatus.COMPLETED },
      { page: 'item', status: ProgressStatus.DOING },
    ])
  }, [])

  return (
    <>
      <h5>Sammanfattaning av din felanmälan</h5>
    </>
  )
}

export default Summary
