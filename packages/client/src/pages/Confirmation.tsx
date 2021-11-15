import React from 'react'
import styled from 'styled-components'
import Button from '../components/Button'
import { H2, Paragraph } from '../components/Typography'
import postbox from '../images/svg/postbox.svg'
import success from '../images/svg/success.svg'

const Flex = styled.div`
  display: flex;
  gap: 0.7rem;
  justify-content: center;
  margin-top: 3rem;
`
const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  height: 90vh;
  align-items: center;
  flex-direction: column;
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Confirmation = () => {
  return (
    <Wrapper>
      <Container>
        <img src={postbox} alt="Postbox" />
        <Flex>
          <H2>Felanmälan inskickad</H2>
          <img src={success} aria-hidden={true} alt="" />
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
