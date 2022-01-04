import React from 'react'
import Section from '../components/Section'
import NextStepCard from '../components/NextStepCard'
import { H1 } from '../components/Typography'
import Elements from '../shared-elements'
import { useAtom } from 'jotai'
import { areaAtom } from '../utils/atoms'
import Loading from '../components/Loading'
import { useNavigate } from 'react-router-dom'
import { AreaData } from '../utils/types'

const Area = () => {
  const [area] = useAtom(areaAtom)
  const navigate = useNavigate()
  // TODO: should make a function of this aswell
  area?.data && area.data.sort((a, b) => (a.name > b.name && 1) || -1)

  const shouldRedicrectUser = (data: AreaData) => {
    // https://github.com/ryanmcdermott/clean-code-javascript#encapsulate-conditionals
    // TODO: Move function to use more globally
    return data.error || (data.data && data.data?.length < 1)
  }
  React.useEffect(() => {
    if (shouldRedicrectUser(area)) {
      navigate('/komplettera', { replace: true })
    }
  }, [area])
  return (
    <>
      <div>
        <H1>Välj ett område</H1>
      </div>
      <Section>
        {area.loading ? (
          <Loading />
        ) : (
          <Elements.Layout.Ul>
            {area?.data &&
              area.data.map((area, i) => (
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
