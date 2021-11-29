import React, { ReactChild } from 'react'
import styled from 'styled-components'
import Header from './Header'
const Wrapper = styled.div`
  padding: 0;
  position: relative;
  background-color: ${({ theme }) => theme.colors.backgroundGrey};
  height: 100vh;
  display: grid;
  grid-template-rows: 1fr 1fr 1fr 9fr;
  width: 100%;
  overflow-x: hidden;
  .floor_plan {
    padding-left: 1.3rem;
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
