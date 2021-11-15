import React from 'react'
import { useLocation } from 'react-router'
import styled from 'styled-components'
import { H2 } from './Typography'

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.paleOrange};
  padding: 0.6rem 0;
  display: flex;
  width: 100%;
  justify-content: center;
`
const Header = () => {
  const { pathname } = useLocation()
  const [title, setTitle] = React.useState('Felanmälan')

  React.useEffect(() => {
    switch (pathname) {
      case '/plats':
        return setTitle('Steg för steg')
      case '/rum':
        return setTitle('Din lägenhet')
      case '/bekraftelse':
        return setTitle('Felanmälan inskickad')

      default:
        return
    }
  }, [pathname])

  return (
    <Wrapper>
      <H2>{title}</H2>
    </Wrapper>
  )
}

export default Header
