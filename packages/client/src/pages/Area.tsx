import React from 'react'
import Section from '../components/Section'
import NextStepCard from '../components/NextStepCard'
import { H1 } from '../components/Typography'
import room from '../images/png/room.png'
import Elements from '../shared-elements'
import { Icons } from '../components/Icon'

const Area = () => {
  return (
    <>
      <div>
        <H1>Välj ett område</H1>
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
              title="Vitvaror"
              subtitle="Kyl, frys, ugn"
              icon={Icons.appliances}
              sendTo="objekt"
            />
          </li>
        </Elements.Layout.Ul>
      </Section>
    </>
  )
}

export default Area
