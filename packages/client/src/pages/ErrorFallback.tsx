import styled from 'styled-components'
import BaseLayout from '../components/BaseLayout'
import { H1, Paragraph } from '../components/Typography'
import notFound from '../images/svg/notFound.svg'

const Image = styled.img`
  margin: 0 auto;
`

const ErrorFallback = ({ error }: { error: Error }) => {
  console.log('er', error)
  return (
    <BaseLayout>
      <Image src={notFound} alt="Not Found" />
      <H1>Something went wrong</H1>
      <Paragraph center={true}>{error.message}</Paragraph>
    </BaseLayout>
  )
}
export default ErrorFallback
