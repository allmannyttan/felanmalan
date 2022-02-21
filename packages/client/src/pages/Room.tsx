import React from 'react'
import { useAtom } from 'jotai'
import { H1 } from '../components/Typography'
import NextStepCard from '../components/NextStepCard'
import Section from '../components/Section'
import Elements from '../shared-elements'
import { reportAtom, roomAtom, userAtom } from '../utils/atoms'
import Loading from '../components/Loading'
import { FlexToStart } from '../shared-elements/layout'
import { useLocation, useNavigate } from 'react-router-dom'

const Room = () => {
  const [room, fetchRoom] = useAtom(roomAtom)
  const [userData] = useAtom(userAtom)
  const [report] = useAtom(reportAtom)
  const navigate = useNavigate()
  const location = useLocation()

  React.useEffect(() => {
    if (report.place === 'Lägenhet')
      fetchRoom({ rentalId: userData.rentalId, isShared: 'false' })
    else if (report.place === 'Gemensamma utrymmen')
      fetchRoom({ rentalId: userData.rentalId, isShared: 'true' })
  }, [report.place])

  React.useEffect(() => {
    if (room.error) {
      navigate(location.pathname, {
        replace: true,
        state: { errorStatusCode: room.error },
      })
    }
  }, [room])

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
              room.data
                .sort((a, b) => (a.name > b.name && 1) || -1)
                .map((room, i) => (
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
