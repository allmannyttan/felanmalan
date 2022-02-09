import { useAtom } from 'jotai'
import React from 'react'
import NextStepCard from '../components/NextStepCard'
import Section from '../components/Section'
import { H1 } from '../components/Typography'
import Elements from '../shared-elements'
import { FlexToStart } from '../shared-elements/layout'
import { userAtom } from '../utils/atoms'

const Place = () => {
  const [userData, setUserdata] = useAtom(userAtom)

  React.useEffect(() => {
    setUserdata({ ...userData, rentalId: 'OBJ-0110203' })
  }, [])
  return (
    <>
      <FlexToStart>
        <H1>Välj en plats</H1>
      </FlexToStart>
      <Section bg="inherit">
        <Elements.Layout.Ul>
          <li>
            <NextStepCard
              bg="inherit"
              title="Lägenhet"
              subtitle="Kök, badrum, sovrum"
              sendTo="rum"
            />
          </li>
        </Elements.Layout.Ul>
      </Section>
      <Section>
        <FlexToStart>
          <H1>Vanliga felanmälnninngar</H1>
        </FlexToStart>
        <Elements.Layout.Ul>
          <li>
            <NextStepCard title="Lägenhet" subtitle="Kök, badrum, sovrum" sendTo="rum" />
            <NextStepCard title="Lägenhet" subtitle="Kök, badrum, sovrum" sendTo="rum" />
            <NextStepCard title="Lägenhet" subtitle="Kök, badrum, sovrum" sendTo="rum" />
            <NextStepCard title="Lägenhet" subtitle="Kök, badrum, sovrum" sendTo="rum" />
            <NextStepCard title="Lägenhet" subtitle="Kök, badrum, sovrum" sendTo="rum" />
            <NextStepCard title="Lägenhet" subtitle="Kök, badrum, sovrum" sendTo="rum" />
          </li>
        </Elements.Layout.Ul>
      </Section>
    </>
  )
}

export default Place
