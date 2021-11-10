import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { useAtom } from 'jotai'
import { progressBarAtom } from '../utils/atoms'
import { ProgressStatus } from '../utils/types'

const Text = styled.p`
  color: ${({ theme }) => theme.colors.yellow};
`
const Place = () => {
  const [, setProgressBarAtom] = useAtom(progressBarAtom)
  useEffect(() => {
    setProgressBarAtom([
      { page: 'lala', status: ProgressStatus.DOING },
      { page: 'object', status: ProgressStatus.NEXT },
      { page: 'item', status: ProgressStatus.NEXT },
    ])
  }, [])

  return (
    <>
      <Text>Välj en plats</Text>
      <Link to="/rum">Nästa</Link>
    </>
  )
}

export default Place
