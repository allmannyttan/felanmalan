import React from 'react'
import { useAtom } from 'jotai'
import { H1 } from '../components/Typography'
import NextStepCard from '../components/NextStepCard'
import Section from '../components/Section'
import Elements from '../shared-elements'
import { Icons } from '../components/Icon'
import { roomAtom } from '../utils/atoms'

const Room = () => {
  const [rooms] = useAtom(roomAtom)

  console.log('rooms', rooms)

  return (
    <>
      <div>
        <H1>Välj ett rum</H1>
      </div>
      <Section>
        <Elements.Layout.Ul>
          {rooms &&
            rooms.map((room, i) => (
              <li key={i}>
                <NextStepCard
                  title={room.name}
                  subtitle={room.description}
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
export default Room
