import React from 'react'
import styled from 'styled-components'
import { useAtom } from 'jotai'
import Section from '../components/Section'
import { H1, BoldParagraph, Paragraph } from '../components/Typography'
import { reportAtom } from '../utils/atoms'
import { client as apiClient } from '../utils/apiclient'
import { FlexToStart } from '../shared-elements/layout'
import { useNavigate } from 'react-router-dom'
import LoadingConfirmation from '../components/LoadingConfirmation'
import Button from '../components/Button'
import { devices } from '../utils/devices'

const TextSection = styled.div`
  margin-bottom: 20px;
  width: 100%;
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

const Wrapper = styled.div`
  margin-bottom: 3rem;
  padding: 0 18px;
`

const Summary = () => {
  const navigate = useNavigate()
  const [completeErrorReport] = useAtom(reportAtom)
  const [loading, setLoading] = React.useState(false)

  const submit = async () => {
    const formdata = new FormData()
    formdata.append('object', completeErrorReport.object)
    formdata.append('place', completeErrorReport.place)
    formdata.append('room', completeErrorReport.room)
    formdata.append('area', completeErrorReport.area)
    formdata.append('rentalId', '12345')

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
      const id = await apiClient.post(formdata)

      if (id) {
        console.log(id)
        navigate('/bekraftelse')
      }
    } catch (error: any) {
      navigate(window.location.pathname, {
        state: { errorStatusCode: error.response.data.status },
        replace: true,
      })
    }
  }

  return (
    <>
      {loading ? (
        <LoadingConfirmation />
      ) : (
        <>
          <FlexToStart>
            <H1>Sammanfattaning av felanmälan</H1>
          </FlexToStart>
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
            <ButtonWrapper>
              <Button
                onClick={() => {
                  setLoading(true)
                  submit()
                }}
                text="Skicka felanmälan"
              />
            </ButtonWrapper>
          </Section>
        </>
      )}
    </>
  )
}

export default Summary
