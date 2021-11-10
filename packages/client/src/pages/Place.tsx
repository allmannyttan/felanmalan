import React from 'react'
import styled from 'styled-components'
import { Apartment } from '../assets/Icons'
import Header from '../components/Header'
import Layout from '../components/Layout'
import NextStepButton from '../components/NextStepButton'
import { H2 } from '../components/Typography'

const Ul = styled.ul`
  list-style: none;
  padding: 0;
`
const Place = () => {
  return (
    <div>
      <Header title="Steg för steg" />
      <Layout>
        <H2>Välj en plats</H2>
        <Ul>
          <li>
            <NextStepButton
              title="Lägenhet"
              subtitle="Kök, badrum, sovrum"
              icon={<Apartment />}
            />
          </li>
        </Ul>
      </Layout>
    </div>
  )
}

export default Place
