import React from 'react'
import styled from 'styled-components'
const Wrapper = styled.div`
  background: ${({ theme }) => theme.colors.white};
  padding-top: 30px;
  padding: 30px 19px;
  border-radius: 30px 30px 0 0;
  padding-bottom: 3rem;
`
const Section: React.FC = ({ children }) => {
  return <Wrapper>{children}</Wrapper>
}

export default Section