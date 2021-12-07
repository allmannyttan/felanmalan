import { useAtom } from 'jotai'
import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { ExpandRight } from '../assets/Icons'
import { areaAtom, inventoryAtom, reportAtom, roomAtom } from '../utils/atoms'
import { H4, ParagraphSmall } from './Typography'
import { useLocation } from 'react-router'
import Icon, { Icons } from './Icon'

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 20% auto 6%;
  background-color: white;
  border: none;
  align-items: center;
  padding: 11px 18px;
  margin-bottom: 1.3rem;
  grid-gap: 1.4rem;
  background: ${({ theme }) => theme.colors.white};
  transition: background 0.1s ease-in;

  &:hover,
  &:active {
    background: ${({ theme }) => theme.colors.paleOrange};
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
  icon: Icons
  subtitle: string
  sendTo: string
  id?: string
}

const NextStepCard: React.FC<INextStepCard> = ({ title, icon, subtitle, sendTo, id }) => {
  const [value, setReportValue] = useAtom(reportAtom)
  const [, fetchInventory] = useAtom(inventoryAtom)
  const [, fetchAreas] = useAtom(areaAtom)
  const [room] = useAtom(roomAtom)
  const { pathname } = useLocation()

  const handleOnClickRoom = () => {
    switch (pathname) {
      case '/plats':
        return setReportValue({ ...value, place: title })
      case '/rum':
        fetchAreas(`/area?roomId=${id}`)
        return setReportValue({ ...value, room: title })
      case '/omrade':
        fetchInventory(`/inventory?roomId=${room?.data[0].id}&inventoryCode=${id}`)
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
        <Icon name={icon} alt={subtitle} />
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
