import React from 'react'
import Section from '../components/Section'
import NextStepCard from '../components/NextStepCard'
import { H1 } from '../components/Typography'
import Elements from '../shared-elements'
import { Icons } from '../components/Icon'
import { useAtom } from 'jotai'
import { areaAtom } from '../utils/atoms'
import Loading from '../components/Loading'

const Area = () => {
  const [area] = useAtom(areaAtom)
  area?.data && area.data.sort((a, b) => (a.name > b.name && 1) || -1)

  return (
    <>
      <div>
        <H1>Välj ett område</H1>
      </div>
      <Section>
        {area.loading ? (
          <Loading />
        ) : (
          <Elements.Layout.Ul>
            {area?.data &&
              area.data.map((area, i) => (
                <li key={i}>
                  <NextStepCard
                    title={area.name}
                    id={area.code}
                    subtitle={area.description}
                    icon={Icons.kitchen}
                    sendTo="objekt"
                  />
                </li>
              ))}
          </Elements.Layout.Ul>
        )}
      </Section>
    </>
  )
}

export default Area
