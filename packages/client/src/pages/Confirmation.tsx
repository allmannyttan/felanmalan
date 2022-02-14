import React from 'react'
import styled from 'styled-components'
import BaseLayout from '../components/BaseLayout'
import { H1, Paragraph } from '../components/Typography'
import postbox from '../images/svg/postbox.svg'
import success from '../images/svg/success.svg'

const Icon = styled.img`
  margin-left: 0.7rem;
`

const FlexH1 = styled(H1)`
  display: flex;
  justify-content: center;
  padding: 0 0 0 1.3rem;
  margin-bottom: 13px;
`

const Image = styled.img`
  margin: 0 auto;
`

const Confirmation = () => {
  return (
    <BaseLayout>
      <Image src={postbox} alt="Postbox" />
      <FlexH1>
        Felanmälan inskickad
        <span>
          <Icon src={success} aria-hidden={true} alt="Success" />
        </span>
      </FlexH1>
      <Paragraph center={true}>
        Du kommmer att få en notis och påminnelse när du kan göra en tidsbokning
      </Paragraph>
    </BaseLayout>
  )
}
export default Confirmation
