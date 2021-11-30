import React from 'react'
import { Icons } from '../components/Icon'
import Section from '../components/Section'
import NextStepCard from '../components/NextStepCard'
import Elements from '../shared-elements'
import { H1 } from '../components/Typography'

const Item = () => {
  return (
    <>
      <H1>Välj ett objekt</H1>
      <Section>
        <Elements.Layout.Ul>
          <li>
            <NextStepCard
              title="Vattenkran"
              subtitle="Stopp, missfärgat vatten"
              icon={Icons.waterTap}
              sendTo="komplettera"
            />
          </li>
        </Elements.Layout.Ul>
      </Section>
    </>
  )
}

export default Item
