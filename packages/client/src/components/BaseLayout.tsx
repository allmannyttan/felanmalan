import React from 'react'
import styled from 'styled-components'
import Button from './Button'

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
      <Button
        text="Tillbaka till hemskärm"
        to="/"
        onClick={() => console.log('Go back to start page')}
      />
    </Wrapper>
  )
}
export default BaseLayout
