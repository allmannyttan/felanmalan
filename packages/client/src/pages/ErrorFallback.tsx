import styled from 'styled-components'
import BaseWrapper from '../components/BaseWrapper'
import { H1, Paragraph } from '../components/Typography'
import serverError from '../images/svg/serverError.svg'
import Layout from '../components/Layout'

const Image = styled.img`
  margin: 0 auto;
`

const ErrorFallback = ({
  error,
  resetErrorBoundary,
}: {
  error: Error
  resetErrorBoundary: () => void
}) => {
  return (
    <Layout error={error}>
      <BaseWrapper onReset={resetErrorBoundary}>
        <Image src={serverError} alt="Server error illustarion" />
        <H1>Oops något har gått fel!</H1>
        <Paragraph center={true}>
          Försök att ladda om sidan eller går tillbaka till hemskärmen, ifall problemet
          kvarstå får du gärna kontakta oss.
        </Paragraph>
        <br />
        <Paragraph center={true}>Error message: {error.message}</Paragraph>
      </BaseWrapper>
    </Layout>
  )
}
export default ErrorFallback
