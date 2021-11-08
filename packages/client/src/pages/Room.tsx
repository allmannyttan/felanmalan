import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Text = styled.p`
  color: ${({ theme }) => theme.colors.yellow};
`

const Room = () => {
  return (
    <>
      <Text>Välj ett rum</Text>
      <Link to="/objects">Nästa</Link>
    </>
  )
}

export default Room
