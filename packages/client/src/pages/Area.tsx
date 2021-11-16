import React from 'react'
import styled from 'styled-components'
import { Apartment } from '../assets/Icons'
import NextStepCard from '../components/NextStepCard'
import { H1 } from '../components/Typography'
import room from '../images/png/room.png'

const Ul = styled.ul`
  list-style: none;
  padding: 0;
`

const Line = styled.hr`
  border: none;
  border-top: ${({ theme }) => `2px solid ${theme.colors.paleOrange} `};
  border-radius: 6px;
`

const Area = () => {
  return (
    <>
      <H1>Välj ett område</H1>
      <img src={room} alt="Planritning" />
      <Line />
      <Ul>
        <li>
          <NextStepCard
            title="Vitvaror"
            subtitle="Kyl, frys, ugn"
            icon={<Apartment />}
            sendTo="objekt"
          />
        </li>
      </Ul>
    </>
  )
}

export default Area
