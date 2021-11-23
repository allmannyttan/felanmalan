import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      darkOrange: string
      lightOrange: string
      paleOrange: string
      yellow: string
      green: string
      dark: string
      white: string
      darkGrey: string
      lightGrey: string
      extraLightGrey: string
      backgroundGrey: string
    }
    fontSizes: {
      small: string
    }
  }
}
