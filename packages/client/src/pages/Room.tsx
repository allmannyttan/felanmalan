import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { useAtom } from 'jotai'
import { updateProgressAtom } from '../utils/atoms'

const Text = styled.p`
  color: ${({ theme }) => theme.colors.yellow};
`

const Room = () => {
  const [, updateProgressBar] = useAtom(updateProgressAtom)

  return (
    <>
      <Text>Välj ett rum</Text>
      <Link to="/objects">
        <button
          onClick={() => {
            updateProgressBar({ page: 'room', status: 'completed' })
            updateProgressBar({ page: 'object', status: 'doing' })
          }}>
          Nästa
        </button>
      </Link>
    </>
  )
}

export default Room
