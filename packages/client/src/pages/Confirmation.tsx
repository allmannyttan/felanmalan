import React from 'react'
import styled from 'styled-components'
import Button from '../components/Button'
import { H1, Paragraph } from '../components/Typography'
import postbox from '../images/svg/postbox.svg'
import success from '../images/svg/success.svg'

const Flex = styled.div`
  display: flex;
  gap: 0.7rem;
  justify-content: center;
  align-items: center;
  margin-top: 3rem;
`

const Wrapper = styled.div`
  padding: 30px 19px;
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 80vh;

  h1 {
    padding: 0 0 0 1.3rem;
  }
`

const Icon = styled.img`
  margin-bottom: 0.7rem;
  padding: 0;
`

const Confirmation = () => {
  return (
    <Wrapper>
      <Container>
        <img src={postbox} alt="Postbox" />
        <Flex>
          <H1>Felanmälan inskickad</H1>
          <Icon src={success} aria-hidden={true} alt="Success" />
        </Flex>
        <Paragraph center={true}>
          Du kommmer att få en notis och påminnelse när du kan göra en tidsbokning
        </Paragraph>
      </Container>

      <Button
        text="Tillbaka till hemskärm"
        to="/"
        onClick={() => console.log('sending felanmälan')}
      />
    </Wrapper>
  )
}
export default Confirmation
