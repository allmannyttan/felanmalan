import React from 'react'
import { useAtom } from 'jotai'
import { Icons } from '../components/Icon'
import Section from '../components/Section'
import NextStepCard from '../components/NextStepCard'
import Elements from '../shared-elements'
import { H1 } from '../components/Typography'
import { inventoryAtom } from '../utils/atoms'

const Item = () => {
  const [inventorys] = useAtom(inventoryAtom)
  console.log(inventorys)
  return (
    <>
      <H1>Välj ett objekt</H1>
      <Section>
        <Elements.Layout.Ul>
          {inventorys &&
            inventorys.map((inventory, i) => (
              <li key={i}>
                <NextStepCard
                  title={inventory.description}
                  subtitle={inventory.class.name}
                  icon={Icons.waterTap}
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
