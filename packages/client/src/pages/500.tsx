import styled from 'styled-components'
import BaseLayout from '../components/BaseLayout'
import { H1, Paragraph } from '../components/Typography'
import serverError from '../images/svg/serverError.svg'

const Image = styled.img`
  margin: 0 auto;
`

const ServerError = () => {
  return (
    <BaseLayout>
      <Image src={serverError} alt="Not Found" />
      <H1>500</H1>
      <Paragraph center={true}>Sidan du försökte nå hittades inte.</Paragraph>
    </BaseLayout>
  )
}
export default ServerError
