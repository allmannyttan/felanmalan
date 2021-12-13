import React from 'react'
import { useAtom } from 'jotai'
import Section from '../components/Section'
import NextStepCard from '../components/NextStepCard'
import Elements from '../shared-elements'
import { H1 } from '../components/Typography'
import { inventoryAtom } from '../utils/atoms'

const Item = () => {
  const [inventory] = useAtom(inventoryAtom)
  if (inventory.loading) return <p>Loading.. </p>
  return (
    <>
      <H1>Välj ett objekt</H1>
      <Section>
        <Elements.Layout.Ul>
          {inventory?.data &&
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
      </Section>
    </>
  )
}

export default Item
