import React from 'react'
import { Icons } from '../components/Icon'
import NextStepCard from '../components/NextStepCard'
import Section from '../components/Section'
import { H1 } from '../components/Typography'
import Elements from '../shared-elements'

const Place = () => {
  return (
    <>
      <H1>Välj en plats</H1>
      <Section>
        <Elements.Layout.Ul>
          <li>
            <NextStepCard
              title="Lägenhet"
              subtitle="Kök, badrum, sovrum"
              icon={Icons.apartment}
              sendTo="rum"
            />
          </li>
        </Elements.Layout.Ul>
      </Section>
    </>
  )
}

export default Place
