import React from 'react'
import styled from 'styled-components'
import { useAtom } from 'jotai'
import Button from '../components/Button'
import { H1, BoldParagraph, Paragraph } from '../components/Typography'
import { reportAtom } from '../utils/atoms'

const TextSection = styled.div`
  margin-bottom: 20px;
  width: 100%;
`

const Summary = () => {
  const [completeErrorReport] = useAtom(reportAtom)
  return (
    <>
      <H1>Sammanfattaning av din felanmälan</H1>
      {completeErrorReport.complete.text && (
        <TextSection>
          <>
            <BoldParagraph>Beskrivning av problemet</BoldParagraph>
            <Paragraph>{completeErrorReport.complete.text}</Paragraph>
          </>
        </TextSection>
      )}
      {completeErrorReport.complete.image && (
        <TextSection>
          <>
            <BoldParagraph>Bild</BoldParagraph>
            <Paragraph>{completeErrorReport.complete.image?.name}</Paragraph>
          </>
        </TextSection>
      )}
      {completeErrorReport.complete.video && (
        <TextSection>
          <>
            <BoldParagraph>Video</BoldParagraph>
            <Paragraph>{completeErrorReport.complete.video?.name}</Paragraph>
          </>
        </TextSection>
      )}
      <Button
        text="Skicka felanmälan"
        onClick={() => console.log('clicked')}
        to="/bekraftelse"
      />
    </>
  )
}

export default Summary
