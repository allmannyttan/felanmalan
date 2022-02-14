import React from 'react'
import styled from 'styled-components'
import NextPageLink from './NextPageLink'

const Wrapper = styled.div`
  padding: 0 19px;
  display: flex;
  overflow: hidden;
  height: 87vh;
  flex-direction: column;
  justify-content: space-between;
`

const Container = styled.div`
  margin-top: 8rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`
const BaseLayout: React.FC = ({ children }) => {
  return (
    <Wrapper>
      <Container>{children}</Container>
      <NextPageLink text="Tillbaka till hemskärm" to="/" />
    </Wrapper>
  )
}
export default BaseLayout
