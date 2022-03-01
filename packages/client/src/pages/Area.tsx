import React from 'react'
import Section from '../components/Section'
import NextStepCard from '../components/NextStepCard'
import { H1 } from '../components/Typography'
import Elements from '../shared-elements'
import { useAtom } from 'jotai'
import { areaAtom, userAtom } from '../utils/atoms'
import Loading from '../components/Loading'
import { useNavigate } from 'react-router-dom'
import { FlexToStart } from '../shared-elements/layout'
import { useErrorHandler } from 'react-error-boundary'

const Area = () => {
  const [area, fetchArea] = useAtom(areaAtom)
  const [userData] = useAtom(userAtom)
  const handleError = useErrorHandler()
  const navigate = useNavigate()

  React.useEffect(() => {
    fetchArea(userData.roomId)
  }, [])

  React.useEffect(() => {
    if (area.error) {
      handleError(area.error)
    }
    if (area.data && area.data?.length < 1) {
      navigate('/komplettera', { replace: true })
    }
  }, [area])
  return (
    <>
      <FlexToStart>
        <H1>Välj ett område</H1>
      </FlexToStart>
      <Section>
        {area.loading ? (
          <Loading />
        ) : (
          <Elements.Layout.Ul>
            {area?.data &&
              area.data
                .sort((a, b) => (a.name > b.name && 1) || -1)
                .map((area, i) => (
                  <li key={i}>
                    <NextStepCard
                      title={area.name}
                      id={area.code}
                      subtitle={area.description}
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
