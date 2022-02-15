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
      <H1>Oops något har gått fel!</H1>
      <Paragraph center={true}>
        Försök att ladda om sidan eller går tillbaka till hemskärmen, ifall problemet
        kvarstå får du gärna kontakta oss.
      </Paragraph>
    </BaseLayout>
  )
}
export default ServerError
