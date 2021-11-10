import React, { ReactNode } from 'react'
import { ThemeProvider, DefaultTheme } from 'styled-components'

const theme: DefaultTheme = {
  colors: {
    darkOrange: '#DA4F1E',
    lightOrange: '#F97539',
    paleOrange: '#FFA982',
    yellow: '#FFB305',
    green: '#90BF2D',
    dark: '#323232',
    white: '#FFFFFF',
    darkGrey: '#868686',
    lightGrey: '#E8E8E8',
    extraLightGrey: '#F9F9F9',
  },
  fontSizes: {
    small: '16px',
  },
}

type Props = {
  children: ReactNode
}

const Theme = ({ children }: Props) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}

export default Theme
