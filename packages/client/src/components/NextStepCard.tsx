import React, { ReactElement } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { ExpandRight } from '../assets/Icons'
import { H4, Paragraph } from './Typography'

const Wrapper = styled.div`
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

const StyledLink = styled(Link)`
  text-decoration: none;
`

interface INextStepCard {
  title: String
  icon?: ReactElement
  subtitle: String
}

const NextStepCard: React.FC<INextStepCard> = ({ title, icon, subtitle }) => {
  return (
    <StyledLink to="/room">
      <Wrapper>
        {icon}
        <FlexCol>
          <H4>{title}</H4>
          <Paragraph>{subtitle}</Paragraph>
        </FlexCol>
        <ExpandRight />
      </Wrapper>
    </StyledLink>
  )
}

export default NextStepCard
