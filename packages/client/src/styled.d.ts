import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      darkOrange: string
      lightOrange: string
      yellow: string
      green: string
      dark: string
      white: string
      darkGrey: string
      lightGrey: string
    }
    fontSizes: {
      small: string
    }
  }
}
