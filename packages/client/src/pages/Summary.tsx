import React from 'react'
import styled from 'styled-components'
import Button from '../components/Button'
import Section from '../components/Section'
import { H1, BoldParagraph, Paragraph } from '../components/Typography'

const TextSection = styled.div`
  margin-bottom: 30px;
  width: 100%;
`

const Summary = () => {
  return (
    <>
      <H1>Sammanfattaning av felanmälan</H1>
      <Section>
        <TextSection>
          <BoldParagraph>Plats</BoldParagraph>
          <Paragraph>Lägenhet</Paragraph>
        </TextSection>
        <Button
          text="Skicka felanmälan"
          onClick={() => console.log('clicked')}
          to="/bekraftelse"
        />
      </Section>
    </>
  )
}

export default Summary
