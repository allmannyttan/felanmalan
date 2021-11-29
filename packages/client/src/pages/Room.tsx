import React from 'react'
import { H1 } from '../components/Typography'
import room from '../images/png/room.png'
import NextStepCard from '../components/NextStepCard'
import Section from '../components/Section'
import Elements from '../shared-elements'
import { Icons } from '../components/Icon'

const Room = () => {
  return (
    <>
      <H1>Välj ett rum</H1>
      <img src={room} alt="Planritning" className="floor_plan" />
      <Section>
        <Elements.Layout.Ul>
          <li>
            <NextStepCard
              title="Kök"
              subtitle="Vitvaror"
              icon={Icons.kitchen}
              sendTo="omrade"
            />
          </li>
        </Elements.Layout.Ul>
      </Section>
    </>
  )
}
export default Room
