import React, { ReactChild } from 'react'
import styled from 'styled-components'
const Wrapper = styled.div`
  padding: 0;
  position: relative;
  background-color: ${({ theme }) => theme.colors.backgroundGrey};

  .floor_plan {
    padding: 0 1.3rem;
  }
`
const Layout: React.FC<{ children: ReactChild }> = ({ children }) => {
  return <Wrapper>{children}</Wrapper>
}

export default Layout
