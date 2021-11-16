import React, { ReactChild } from 'react'
import styled from 'styled-components'
const Wrapper = styled.div`
  margin: 1.3rem;
  padding-bottom: 3rem;
  position: relative;
`
const Layout: React.FC<{ children: ReactChild }> = ({ children }) => {
  return <Wrapper>{children}</Wrapper>
}

export default Layout
