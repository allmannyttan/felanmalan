import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useAtom } from 'jotai'
import { updateProgressAtom } from '../utils/atoms'
import { ProgressStatus, Pages } from '../utils/types'
import Button from '../components/Button'
import { H1, BoldParagraph, Paragraph } from '../components/Typography'

const TextSection = styled.div`
  margin-bottom: 30px;
  width: 100%;
`
const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 80vh;
  justify-content: space-between;
`

const Summary = () => {
  const [, updateProgressBar] = useAtom(updateProgressAtom)
  useEffect(() => {
    updateProgressBar({ page: Pages.PLACE, status: ProgressStatus.COMPLETED })
    updateProgressBar({ page: Pages.ROOM, status: ProgressStatus.COMPLETED })
    updateProgressBar({ page: Pages.AREA, status: ProgressStatus.COMPLETED })
    updateProgressBar({ page: Pages.ITEM, status: ProgressStatus.COMPLETED })
    updateProgressBar({ page: Pages.COMPLETE, status: ProgressStatus.COMPLETED })
    updateProgressBar({ page: Pages.SUMMARY, status: ProgressStatus.DOING })
  }, [])

  return (
    <Container>
      <div>
        <H1>Sammanfattaning av din felanmälan</H1>
        <TextSection>
          <BoldParagraph>Plats</BoldParagraph>
          <Paragraph>Lägenhet</Paragraph>
        </TextSection>
      </div>
      <Button
        text="Skicka felanmälan"
        onClick={() => console.log('clicked')}
        to="/bekraftelse"
      />
    </Container>
  )
}

export default Summary
