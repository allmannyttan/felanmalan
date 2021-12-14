import React from 'react'
import styled from 'styled-components'
import { useAtom } from 'jotai'
import Button from '../components/Button'
import Section from '../components/Section'
import { H1, BoldParagraph, Paragraph } from '../components/Typography'
import { reportAtom } from '../utils/atoms'
import { client as apiClient } from '../utils/apiclient'

const TextSection = styled.div`
  margin-bottom: 20px;
  width: 100%;
`

const Wrapper = styled.div`
  margin-bottom: 3rem;
`

const Summary = () => {
  const [completeErrorReport] = useAtom(reportAtom)

  const submit = async () => {
    const formdata = new FormData()
    formdata.append('object', completeErrorReport.object)
    formdata.append('place', completeErrorReport.place)
    formdata.append('room', completeErrorReport.room)
    formdata.append('area', completeErrorReport.area)
    if (completeErrorReport.complete.image) {
      formdata.append('image', completeErrorReport.complete.image)
    }
    if (completeErrorReport.complete.video) {
      formdata.append('video', completeErrorReport.complete.video)
    }

    await apiClient.post(formdata)
  }

  return (
    <>
      <H1>Sammanfattaning av felanmälan</H1>
      <Section padding="30px 18px">
        <Wrapper>
          {completeErrorReport.place && (
            <TextSection>
              <>
                <BoldParagraph>Plats</BoldParagraph>
                <Paragraph>{completeErrorReport.place}</Paragraph>
              </>
            </TextSection>
          )}
          {completeErrorReport.room && (
            <TextSection>
              <>
                <BoldParagraph>Rum</BoldParagraph>
                <Paragraph>{completeErrorReport.room}</Paragraph>
              </>
            </TextSection>
          )}
          {completeErrorReport.area && (
            <TextSection>
              <>
                <BoldParagraph>Område</BoldParagraph>
                <Paragraph>{completeErrorReport.area}</Paragraph>
              </>
            </TextSection>
          )}
          {completeErrorReport.object && (
            <TextSection>
              <>
                <BoldParagraph>Objekt</BoldParagraph>
                <Paragraph>{completeErrorReport.object}</Paragraph>
              </>
            </TextSection>
          )}
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
        </Wrapper>
        <Button text="Skicka felanmälan" onClick={submit} to="/bekraftelse" />
      </Section>
    </>
  )
}

export default Summary
