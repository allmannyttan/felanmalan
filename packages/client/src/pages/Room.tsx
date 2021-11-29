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
      <div>
        <H1>Välj ett rum</H1>
        <img
          src={room}
          style={{ width: '200px' }}
          alt="Planritning"
          className="floor_plan"
        />
      </div>
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
