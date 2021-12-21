import React from 'react'
import { useAtom } from 'jotai'
import Section from '../components/Section'
import NextStepCard from '../components/NextStepCard'
import Elements from '../shared-elements'
import { H1 } from '../components/Typography'
import { inventoryAtom } from '../utils/atoms'
import Loading from '../components/Loading'
import { useNavigate } from 'react-router-dom'

const Item = () => {
  const [inventory] = useAtom(inventoryAtom)
  const navigate = useNavigate()

  inventory?.data &&
    inventory.data.sort((a, b) => (a.description > b.description && 1) || -1)

  React.useEffect(() => {
    if (inventory.error || !inventory.data?.length) {
      navigate('/komplettera', { replace: true })
    }
  }, [inventory])
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
