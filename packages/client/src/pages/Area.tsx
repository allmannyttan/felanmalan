import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { useAtom } from 'jotai'
import { progressBarAtom } from '../utils/atoms'
import { ProgressStatus } from '../utils/types'

const Text = styled.p`
  color: ${({ theme }) => theme.colors.yellow};
`
const Area = () => {
  const [, setProgressBarAtom] = useAtom(progressBarAtom)
  useEffect(() => {
    setProgressBarAtom([
      { page: 'room', status: ProgressStatus.DOING },
      { page: 'object', status: ProgressStatus.NEXT },
      { page: 'item', status: ProgressStatus.NEXT },
    ])
  }, [])

  return (
    <>
      <Text>Välj ett område du vill felanmäla</Text>
      <Link to="/objekt">Nästa</Link>
    </>
  )
}

export default Area
