import React from 'react'
import { useAtom } from 'jotai'
import { H1 } from '../components/Typography'
import NextStepCard from '../components/NextStepCard'
import Section from '../components/Section'
import Elements from '../shared-elements'
import { roomAtom } from '../utils/atoms'

const Room = () => {
  let [room] = useAtom(roomAtom)
  if (room.loading) return <p>Loading..</p>

  return (
    <>
      <div>
        <H1>Välj ett rum</H1>
      </div>
      <Section>
        <Elements.Layout.Ul>
          {room?.data &&
            room.data.map((room, i) => (
              <li key={i}>
                <NextStepCard
                  title={room.name}
                  subtitle={room.description}
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
