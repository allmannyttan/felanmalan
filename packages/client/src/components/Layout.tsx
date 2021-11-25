import React, { ReactChild } from 'react'
import styled from 'styled-components'
import Header from './Header'
const Wrapper = styled.div`
  padding: 0;
  position: relative;
  background-color: ${({ theme }) => theme.colors.backgroundGrey};
  overflow: hidden;
  height: 100vh;

  .floor_plan {
    padding: 0 1.3rem;
  }
`
const Layout: React.FC<{ children: ReactChild }> = ({ children }) => {
  return (
    <Wrapper>
      <Header />
      {children}
    </Wrapper>
  )
}

export default Layout
