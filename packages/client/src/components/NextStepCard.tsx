import { useAtom } from 'jotai'
import React, { ReactElement } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { ExpandRight } from '../assets/Icons'
import { reportAtom } from '../utils/atoms'
import { H4, ParagraphSmall } from './Typography'
import { useLocation } from 'react-router'

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 20% auto 6%;
  background-color: white;
  border: none;
  align-items: center;
  padding: 11px 18px;
  margin-bottom: 1.3rem;
  background: ${({ theme }) => theme.colors.white};
  transition: background 0.1s ease-in;

  svg:first-child {
    background-color: ${({ theme }) => theme.colors.extraLightGrey};
    padding: 0.1rem;
    border-radius: 4px;
  }

  &:hover,
  &:active {
    background: ${({ theme }) => theme.colors.paleOrange};
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
  title: string
  icon?: ReactElement
  subtitle: string
  sendTo: string
}

const NextStepCard: React.FC<INextStepCard> = ({ title, icon, subtitle, sendTo }) => {
  const [value, setReportValue] = useAtom(reportAtom)
  const { pathname } = useLocation()

  const handleOnClickRoom = () => {
    switch (pathname) {
      case '/plats':
        return setReportValue({ ...value, place: title })
      case '/rum':
        return setReportValue({ ...value, room: title })
      case '/omrade':
        return setReportValue({ ...value, area: title })
      case '/objekt':
        return setReportValue({ ...value, object: title })
      default:
        return
    }
  }

  return (
    <StyledLink to={`/${sendTo}`} onClick={handleOnClickRoom}>
      <Wrapper>
        {icon}
        <FlexCol>
          <H4>{title}</H4>
          <ParagraphSmall>{subtitle}</ParagraphSmall>
        </FlexCol>
        <ExpandRight />
      </Wrapper>
    </StyledLink>
  )
}

export default NextStepCard
