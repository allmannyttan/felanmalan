import React from 'react'
import styled from 'styled-components'
import * as Svg from '../assets/icons/index'

export enum IconName {
  'Förråd',
  'Kök',
  'Vitvaror',
  'Hall',
  'Frys',
  'Lägenhet',
  'Övrigt',
  'Varmvattenberedare',
  'Tvättställ',
  'Dush',
  'Toalett',
  'Spis',
  'Kyl',
  'Fläkt',
  'Avlopp',
  'Belysning',
  'Element',
  'Värme',
  'Gemensamma utrymmen',
}

const Icons = {
  [IconName['Hall']]: Svg.hallway,
  [IconName['Kök']]: Svg.kitchen,
  [IconName['Förråd']]: Svg.storage,
  [IconName['Vitvaror']]: Svg.fridge,
  [IconName['Frys']]: Svg.freezer,
  [IconName['Lägenhet']]: Svg.apartment,
  [IconName['Övrigt']]: Svg.other,
  [IconName['Varmvattenberedare']]: Svg.waterTap,
  [IconName['Tvättställ']]: Svg.basin,
  [IconName['Dush']]: Svg.shower,
  [IconName['Toalett']]: Svg.toilet,
  [IconName['Spis']]: Svg.stove,
  [IconName['Kyl']]: Svg.fridge,
  [IconName['Fläkt']]: Svg.kitchenFan,
  [IconName['Avlopp']]: Svg.drain,
  [IconName['Belysning']]: Svg.lamp,
  [IconName['Element']]: Svg.radiator,
  [IconName['Värme']]: Svg.radiator,
  [IconName['Gemensamma utrymmen']]: Svg.sharedSpaces,
}

type Props = {
  name: string
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
  const getIconName = () => {
    const iconName = Object.keys(IconName).filter((a) => name.includes(a))[0] ?? 'Övrigt'

    return Icons[IconName[iconName as keyof typeof IconName]]
  }

  return (
    <Wrapper>
      <SquareImg src={getIconName()} aria-hidden="true" alt={alt} />
    </Wrapper>
  )
}

export default Icon
