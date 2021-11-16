import React from 'react'
import styled from 'styled-components'
import Button from '../components/Button'
import { H1, BoldParagraph, Paragraph } from '../components/Typography'

const TextSection = styled.div`
  margin-bottom: 30px;
  width: 100%;
`

const Summary = () => {
  return (
    <>
      <H1>Sammanfattaning av din felanmälan</H1>
      <TextSection>
        <BoldParagraph>Plats</BoldParagraph>
        <Paragraph>Lägenhet</Paragraph>
      </TextSection>
      <Button
        text="Skicka felanmälan"
        onClick={() => console.log('clicked')}
        to="/bekraftelse"
      />
    </>
  )
}

export default Summary
