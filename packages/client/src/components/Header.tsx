import React from 'react'
import styled from 'styled-components'
import { H4 } from './Typography'

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.lightGrey};
  padding: 0.7rem 0;
  display: flex;
  width: 100%;
  justify-content: center;
`
const Header: React.FC<{ title: string }> = ({ title }) => {
  return (
    <Wrapper>
      <H4>{title}</H4>
    </Wrapper>
  )
}

export default Header
