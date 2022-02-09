import React from 'react'
import { useAtom } from 'jotai'
import { H1 } from '../components/Typography'
import NextStepCard from '../components/NextStepCard'
import Section from '../components/Section'
import Elements from '../shared-elements'
import { roomAtom } from '../utils/atoms'
import Loading from '../components/Loading'
import { FlexToStart } from '../shared-elements/layout'

const Room = () => {
  let [room] = useAtom(roomAtom)

  room?.data && room.data.sort((a, b) => (a.name > b.name && 1) || -1)

  return (
    <>
      <FlexToStart>
        <H1>Välj ett rum</H1>
      </FlexToStart>
      <Section>
        {room.loading ? (
          <Loading />
        ) : (
          <Elements.Layout.Ul>
            {room?.data &&
              room.data.map((room, i) => (
                <li key={i}>
                  <NextStepCard
                    title={room.name}
                    id={room.id}
                    subtitle={room.description}
                    sendTo="omrade"
                  />
                </li>
              ))}
          </Elements.Layout.Ul>
        )}
      </Section>
    </>
  )
}
export default Room
