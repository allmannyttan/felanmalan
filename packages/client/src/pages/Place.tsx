import React from 'react'
import styled from 'styled-components'
import { Apartment } from '../assets/Icons'
import NextStepCard from '../components/NextStepCard'
import { H2 } from '../components/Typography'

const Ul = styled.ul`
  list-style: none;
  padding: 0;
`

const Place = () => {
  return (
    <div>
      <H2>Välj en plats</H2>
      <Ul>
        <li>
          <NextStepCard
            title="Lägenhet"
            subtitle="Kök, badrum, sovrum"
            icon={<Apartment />}
            sendTo="rum"
          />
        </li>
      </Ul>
    </div>
  )
}

export default Place
