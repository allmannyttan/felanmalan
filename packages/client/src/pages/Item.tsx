import React from 'react'
import { useAtom } from 'jotai'
import Section from '../components/Section'
import NextStepCard from '../components/NextStepCard'
import Elements from '../shared-elements'
import { H1 } from '../components/Typography'
import { inventoryAtom } from '../utils/atoms'
import Loading from '../components/Loading'

const Item = () => {
  const [inventory] = useAtom(inventoryAtom)

  return (
    <>
      <H1>Välj ett objekt</H1>
      <Section>
        {inventory.loading ? (
          <Loading />
        ) : (
          <Elements.Layout.Ul>
            {inventory.data &&
              inventory.data.map((inventory, i) => (
                <li key={i}>
                  <NextStepCard
                    title={inventory.description}
                    subtitle={inventory.class.name}
                    sendTo="komplettera"
                  />
                </li>
              ))}
          </Elements.Layout.Ul>
        )}
      </Section>
    </>
  )
}

export default Item
