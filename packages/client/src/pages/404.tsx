import styled from 'styled-components'
import BaseWrapper from '../components/BaseWrapper'
import { H1, Paragraph } from '../components/Typography'
import notFound from '../images/svg/notFound.svg'

const Image = styled.img`
  margin: 0 auto;
`

const NotFoundPage = () => {
  return (
    <BaseWrapper>
      <Image src={notFound} alt="Not Found" />
      <H1>404</H1>
      <Paragraph center={true}>Sidan du försökte nå hittades inte.</Paragraph>
    </BaseWrapper>
  )
}
export default NotFoundPage
