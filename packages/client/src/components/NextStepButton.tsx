import React, { ReactElement } from 'react'
import styled from 'styled-components'
import { Apartment, ExpandRight } from '../assets/Icons'
import { H4 } from './Typography'

const Button = styled.button`
  width: 100%;
  display: grid;
  grid-template-columns: 20% auto 6%;
  background-color: white;
  border: none;
  align-items: center;
  padding: 0;
  margin-bottom: 1.3rem;

  svg:first-child {
    background-color: ${({ theme }) => theme.colors.extraLightGrey};
    padding: 0.1rem;
    border-radius: 4px;
  }

  div {
    margin-left: 1.2rem;
  }
`

const FlexCol = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

interface INextStepButton {
  title: String
  icon?: ReactElement
  subtitle: String
}

const NextStepButton: React.FC<INextStepButton> = ({ title, icon, subtitle }) => {
  if (icon) console.log('hek')
  return (
    <Button>
      <Apartment />
      <FlexCol>
        <H4>{title}</H4>
        <p style={{ margin: 0 }}>{subtitle}</p>
      </FlexCol>
      <ExpandRight />
    </Button>
  )
}

export default NextStepButton
