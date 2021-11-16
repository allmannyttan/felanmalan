import React from 'react'
import styled from 'styled-components'
import { H1 } from '../components/Typography'
import room from '../images/png/room.png'
import NextStepCard from '../components/NextStepCard'
import { Apartment } from '../assets/Icons'

const Line = styled.hr`
  border: none;
  border-top: ${({ theme }) => `2px solid ${theme.colors.paleOrange} `};
  border-radius: 6px;
`

const Ul = styled.ul`
  list-style: none;
  padding: 0;
`

const Room = () => {
  return (
    <>
      <H1>Välj ett rum</H1>
      <img src={room} alt="Planritning" />
      <Line />
      <Ul>
        <li>
          <NextStepCard
            title="Kök"
            subtitle="Vitvaror"
            icon={<Apartment />}
            sendTo="omrade"
          />
        </li>
      </Ul>
    </>
  )
}
export default Room
