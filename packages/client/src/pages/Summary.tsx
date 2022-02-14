import React from 'react'
import styled from 'styled-components'
import { useAtom } from 'jotai'
import Button from '../components/Button'
import Section from '../components/Section'
import { H1, BoldParagraph, Paragraph } from '../components/Typography'
import { reportAtom } from '../utils/atoms'
import { devices } from '../utils/devices'
import { client as apiClient } from '../utils/apiclient'
import { FlexToStart } from '../shared-elements/layout'
import { useNavigate } from 'react-router-dom'

const TextSection = styled.div`
  margin-bottom: 20px;
  width: 100%;
`

const Wrapper = styled.div`
  margin-bottom: 3rem;
  padding: 0 18px;
`
const ButtonWrapper = styled.div`
  max-width: 840px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-end;

  @media only screen and (${devices.tablet}) {
    bottom: 2rem;
    position: absolute;
  }
`

const Summary = () => {
  const navigate = useNavigate()
  const [completeErrorReport] = useAtom(reportAtom)

  const submit = async () => {
    const formdata = new FormData()
    formdata.append('object', completeErrorReport.object)
    formdata.append('place', completeErrorReport.place)
    formdata.append('room', completeErrorReport.room)
    formdata.append('area', completeErrorReport.area)

    if (completeErrorReport.complete.text) {
      formdata.append('text', completeErrorReport.complete.text)
    }
    if (completeErrorReport.complete.image) {
      formdata.append('image', completeErrorReport.complete.image)
    }
    if (completeErrorReport.complete.video) {
      formdata.append('video', completeErrorReport.complete.video)
    }

    try {
      await apiClient.post(formdata)
    } catch (error: any) {
      navigate(window.location.pathname, {
        state: { errorStatusCode: error.response.data.status },
        replace: true,
      })
    }
  }

  return (
    <>
      <FlexToStart>
        <H1>Sammanfattaning av felanmälan</H1>
      </FlexToStart>
      <Section>
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
        <ButtonWrapper>
          <Button onClick={submit} text="Skicka felanmälan" />
        </ButtonWrapper>
      </Section>
    </>
  )
}

export default Summary
