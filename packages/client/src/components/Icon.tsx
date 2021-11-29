/* eslint-disable no-unused-vars */
import React from 'react'
import styled from 'styled-components'
import apartment from '../assets/icons/apartment.svg'
import kitchen from '../assets/icons/kitchen.svg'
import appliances from '../assets/icons/appliances.svg'

const ICONS = {
  apartment,
  kitchen,
  appliances,
}

export enum Icons {
  apartment = 'apartment',
  kitchen = 'kitchen',
  appliances = 'appliances',
}

type Props = {
  name: Icons
  alt: string
}

const SquareImg = styled.img`
  padding: 0.4rem 0.6rem;
`

const Wrapper = styled.div`
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.dark};
  height: 3.6rem;
  width: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Icon = ({ name, alt }: Props) => {
  return (
    <Wrapper>
      <SquareImg src={ICONS[name]} aria-hidden="true" alt={alt} />
    </Wrapper>
  )
}

export default Icon
