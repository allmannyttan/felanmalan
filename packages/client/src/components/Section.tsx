import React from 'react'
import styled from 'styled-components'
const Wrapper = styled.div`
  background: ${({ theme }) => theme.colors.white};
  padding: 30px 19px;
  border-radius: 30px 30px 0 0;
  padding-bottom: 3rem;
  min-height: 100vh;
`
const Section: React.FC = ({ children }) => {
  return <Wrapper>{children}</Wrapper>
}

export default Section
