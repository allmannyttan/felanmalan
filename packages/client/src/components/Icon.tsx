/* eslint-disable no-unused-vars */
import React from 'react'
import styled from 'styled-components'
import * as Svg from '../assets/icons/index'

export enum IconName {
  'Förråd',
  'Kök',
  'Vitvaror',
  'Hall',
  'Frys fullstor',
  'Lägenhet',
  'Övrigt',
  'Varmvattenberedare',
  'Tvättställ Standard',
  'Tvättställ',
  'Dushkabin med golv',
  'Toalett Ifö Standard',
}

const Icons = {
  [IconName['Hall']]: Svg.hallway,
  [IconName['Kök']]: Svg.kitchen,
  [IconName['Förråd']]: Svg.appliances,
  [IconName['Vitvaror']]: Svg.appliances,
  [IconName['Frys fullstor']]: Svg.appliances,
  [IconName['Lägenhet']]: Svg.apartment,
  [IconName['Övrigt']]: Svg.other,
  [IconName['Varmvattenberedare']]: Svg.waterTap,
  [IconName['Tvättställ Standard']]: Svg.basin,
  [IconName['Tvättställ']]: Svg.basin,
  [IconName['Dushkabin med golv']]: Svg.shower,
  [IconName['Toalett Ifö Standard']]: Svg.toilet,
}

type Props = {
  name: IconName
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
  console.log('hej', Icons[IconName[name as unknown as keyof typeof IconName]])
  return (
    <Wrapper>
      <SquareImg
        src={Icons[IconName[name as unknown as keyof typeof IconName]]}
        aria-hidden="true"
        alt={alt}
      />
    </Wrapper>
  )
}

export default Icon
