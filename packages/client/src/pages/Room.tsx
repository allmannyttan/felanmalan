import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { useAtom } from 'jotai'
import { updateProgressAtom } from '../utils/atoms'

const Text = styled.p`
  color: ${({ theme }) => theme.colors.yellow};
`
const Room = () => {
  const [, updateProgressBar] = useAtom(updateProgressAtom)

  useEffect(() => {
    updateProgressBar({ page: 'room', status: 'doing' })
    updateProgressBar({ page: 'object', status: 'next' })
    updateProgressBar({ page: 'item', status: 'next' })
  }, [])
  return (
    <>
      <Text>Välj ett rum</Text>
      <Link to="/objects">Nästa</Link>
    </>
  )
}

export default Room
