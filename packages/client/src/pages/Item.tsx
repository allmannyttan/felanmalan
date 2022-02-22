import React from 'react'
import { useAtom } from 'jotai'
import Section from '../components/Section'
import NextStepCard from '../components/NextStepCard'
import Elements from '../shared-elements'
import { inventoryAtom, userAtom } from '../utils/atoms'
import Loading from '../components/Loading'

const Item = () => {
  const [inventory, fetchInventory] = useAtom(inventoryAtom)
  const [userData] = useAtom(userAtom)

  React.useEffect(() => {
    fetchInventory({ roomId: userData.roomId, inventoryCode: userData.inventoryCode })
  }, [])

  return (
    <>
      <Section>
        {inventory.loading ? (
          <Loading />
        ) : (
          <Elements.Layout.Ul>
            {inventory.data &&
              inventory.data
                .sort((a, b) => (a.description > b.description && 1) || -1)
                .map((inventory, i) => (
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
