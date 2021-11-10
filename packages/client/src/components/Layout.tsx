import React from 'react'
import styled from 'styled-components'
const Wrapper = styled.div`
  margin: 1.3rem;
`
const Layout = ({ children }) => {
  return <Wrapper>{children}</Wrapper>
}

export default Layout
