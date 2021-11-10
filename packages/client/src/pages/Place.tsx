import React, { useEffect } from 'react'
import styled from 'styled-components'
import { Apartment } from '../assets/Icons'
import Layout from '../components/Layout'
import NextStepCard from '../components/NextStepCard'
import { H2 } from '../components/Typography'
import { useAtom } from 'jotai'
import { updateProgressAtom } from '../utils/atoms'
import { Pages, ProgressStatus } from '../utils/types'

const Ul = styled.ul`
  list-style: none;
  padding: 0;
`

const Place = () => {
  const [, updateProgressBar] = useAtom(updateProgressAtom)
  useEffect(() => {
    updateProgressBar({ page: Pages.PLACE, status: ProgressStatus.DOING })
    updateProgressBar({ page: Pages.ROOM, status: ProgressStatus.NEXT })
    updateProgressBar({ page: Pages.AREA, status: ProgressStatus.NEXT })
  }, [])

  return (
    <Layout>
      <div>
        <H2>Välj en plats</H2>
        <Ul>
          <li>
            <NextStepCard
              title="Lägenhet"
              subtitle="Kök, badrum, sovrum"
              icon={<Apartment />}
            />
          </li>
        </Ul>
      </div>
    </Layout>
  )
}

export default Place
