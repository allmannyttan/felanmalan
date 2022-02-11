import { useAtom } from 'jotai'
import React from 'react'
import Loading from '../components/Loading'
import NextStepCard from '../components/NextStepCard'
import Section from '../components/Section'
import { H1 } from '../components/Typography'
import Elements from '../shared-elements'
import { FlexToStart } from '../shared-elements/layout'
import { commonErrorReportAtom, userAtom } from '../utils/atoms'

const Place = () => {
  const [userData, setUserdata] = useAtom(userAtom)
  const [commonErrorReport] = useAtom(commonErrorReportAtom)

  React.useEffect(() => {
    setUserdata({ ...userData, rentalId: 'OBJ-0110203' })
  }, [])
  return (
    <>
      <FlexToStart>
        <H1>Välj en plats</H1>
      </FlexToStart>
      <Section bg="inherit">
        <Elements.Layout.Ul>
          <li>
            <NextStepCard
              bg="inherit"
              title="Lägenhet"
              subtitle="Kök, badrum, sovrum"
              sendTo="rum"
            />
          </li>
        </Elements.Layout.Ul>
      </Section>
      <Section>
        <FlexToStart>
          <H1>Vanliga felanmälnninngar</H1>
        </FlexToStart>
        {commonErrorReport.loading ? (
          <Loading />
        ) : (
          <Elements.Layout.Ul>
            {commonErrorReport?.data &&
              commonErrorReport.data.map((data, i) => (
                <li key={i}>
                  <NextStepCard
                    type="common"
                    title={data.name}
                    subtitle={data.description}
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

export default Place
