/* eslint-disable no-unused-vars */
import React from 'react'
import styled from 'styled-components'
import apartment from '../assets/icons/apartment.svg'
import kitchen from '../assets/icons/kitchen.svg'
import appliances from '../assets/icons/appliances.svg'
import waterTap from '../assets/icons/watertap.svg'
import hallway from '../assets/icons/hallway.svg'

export enum Icons {
  'Förråd',
  'Kök',
  'Vitvaror',
  'Hall',
  'Frys fullstor',
}

const IconVariant = {
  [Icons['Hall']]: hallway,
  [Icons['Kök']]: kitchen,
  [Icons['Förråd']]: appliances,
  [Icons['Vitvaror']]: appliances,
  [Icons['Frys fullstor']]: appliances,
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
      <SquareImg
        src={IconVariant[Icons[name as unknown as keyof typeof Icons]]}
        aria-hidden="true"
        alt={alt}
      />
    </Wrapper>
  )
}

export default Icon
