import React from 'react'
import { ThemeProvider, DefaultTheme } from 'styled-components'

const theme: DefaultTheme = {
  colors: {
    darkOrange: '#DA4F1E',
    lightOrange: '#F97539',
    yellow: '#FFB305',
    green: '#90BF2D',
    dark: '#323232',
    white: '#FFFFFF',
    darkGrey: '#868686',
    lightGrey: '#E8E8E8',
  },
  fontSizes: {
    small: '16px',
  },
}

const Theme = ({ children }: any) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}

export default Theme
