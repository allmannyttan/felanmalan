import Section from '../components/Section'
import { H1, Paragraph } from '../components/Typography'
import styled from 'styled-components'
import Button from '../components/Button'
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

const FlexH1 = styled(H1)`
  display: flex;
  justify-content: center;
  padding: 0 0 0 1.3rem;
  margin-bottom: 13px;
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
        <FlexH1>Du har inga aktiva felanmälningar</FlexH1>
        <Paragraph center={true}>
          När du har gjort en felanmälan kommer den att hamna i en lista här.
        </Paragraph>
      </Container>
      <ButtonWrapper>
        <Button
          text="Skapa felanmälan"
          to="/plats"
          onClick={() => console.log('create new felanmälan')}
        />
      </ButtonWrapper>
    </Section>
  )
}

export default Start
