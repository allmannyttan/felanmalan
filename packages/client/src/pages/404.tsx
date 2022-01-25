import styled from 'styled-components'
import Button from '../components/Button'
import { H1, Paragraph } from '../components/Typography'
import notFound from '../images/svg/notFound.svg'

const Wrapper = styled.div`
  padding: 0 19px;
  display: flex;
  overflow: hidden;
  height: 87vh;
  flex-direction: column;
  justify-content: space-between;
`

const Image = styled.img`
  margin: 0 auto;
`
const Container = styled.div`
  margin-top: 8rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const NotFoundPage = () => {
  return (
    <>
      <Wrapper>
        <Container>
          <Image src={notFound} alt="Not Found" />
          <H1>404</H1>
          <Paragraph center={true}>Sidan du försökte nå hittades inte.</Paragraph>
        </Container>
        <Button
          text="Tillbaka till hemskärm"
          to="/"
          onClick={() => console.log('Go back to start page')}
        />
      </Wrapper>
    </>
  )
}
export default NotFoundPage
