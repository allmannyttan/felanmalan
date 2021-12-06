import React from 'react'
import Section from '../components/Section'
import NextStepCard from '../components/NextStepCard'
import { H1 } from '../components/Typography'
import Elements from '../shared-elements'
import { Icons } from '../components/Icon'
import { useAtom } from 'jotai'
import { areaAtom } from '../utils/atoms'

const Area = () => {
  const [area] = useAtom(areaAtom)

  return (
    <>
      <div>
        <H1>Välj ett område</H1>
      </div>
      <Section>
        <Elements.Layout.Ul>
          {area?.data &&
            area.data.map((area, i) => (
              <li key={i}>
                <NextStepCard
                  title={area.name}
                  subtitle={area.description}
                  icon={Icons.kitchen}
                  sendTo="omrade"
                />
              </li>
            ))}
        </Elements.Layout.Ul>
      </Section>
    </>
  )
}

export default Area
