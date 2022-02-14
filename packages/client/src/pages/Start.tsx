import Section from '../components/Section'
import { H1, Paragraph } from '../components/Typography'
import styled from 'styled-components'
import NextPageLink from '../components/NextPageLink'
import active from '../images/svg/active.svg'
import { devices } from '../utils/devices'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  overflow: hidden;
  height: 75vh;
  justify-content: center;
  padding: 0 4rem;
`

const Image = styled.img`
  margin: 1rem auto;
`

const ButtonWrapper = styled.div`
  max-width: 840px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-end;

  @media only screen and (${devices.tablet}) {
    bottom: 2rem;
    position: absolute;
  }
`

const Start = () => {
  return (
    <Section>
      <Container>
        <Image src={active} alt="Active" />
        <H1>Du har inga aktiva felanmälningar</H1>
        <Paragraph center={true}>
          När du har gjort en felanmälan kommer den att hamna i en lista här.
        </Paragraph>
      </Container>
      <ButtonWrapper>
        <NextPageLink text="Skapa felanmälan" to="/plats" />
      </ButtonWrapper>
    </Section>
  )
}

export default Start
