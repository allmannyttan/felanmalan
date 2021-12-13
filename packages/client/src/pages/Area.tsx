import React from 'react'
import Section from '../components/Section'
import NextStepCard from '../components/NextStepCard'
import { H1 } from '../components/Typography'
import Elements from '../shared-elements'

const Area = () => {
  return (
    <>
      <div>
        <H1>Välj ett område</H1>
      </div>
      <Section>
        <Elements.Layout.Ul>
          <li>
            <NextStepCard title="Vitvaror" subtitle="Kyl, frys, ugn" sendTo="objekt" />
          </li>
        </Elements.Layout.Ul>
      </Section>
    </>
  )
}

export default Area
