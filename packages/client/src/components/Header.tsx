import React from 'react'
import { useLocation } from 'react-router'
import styled from 'styled-components'
import { H4 } from './Typography'

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.paleOrange};
  padding: 0.7rem 0;
  display: flex;
  width: 100%;
  justify-content: center;
`
const Header = () => {
  const { pathname } = useLocation()
  const [title, setTitle] = React.useState('')

  React.useEffect(() => {
    switch (pathname) {
      case '/plats':
        return setTitle('Steg för steg')
      case '/rum':
        return setTitle('Din lägenhet')

      default:
        return
    }
  }, [pathname])

  return (
    <Wrapper>
      <H4>{title}</H4>
    </Wrapper>
  )
}

export default Header
