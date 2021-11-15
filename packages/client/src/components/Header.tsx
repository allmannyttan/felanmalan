import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { H2 } from './Typography'
import arrow from '../images/svg/arrow.svg'

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.paleOrange};
  padding: 0.6rem 0;
  display: flex;
  width: 100%;
  justify-content: center;
  color: ${({ theme }) => theme.colors.dark};
`

const Button = styled.button`
  position: absolute;
  left: 1rem;
  top: 0.9rem;
  background-color: inherit;
  cursor: pointer;
  border: none;
`

const Header = () => {
  const { pathname } = useLocation()
  const navigate = useNavigate()

  const [title, setTitle] = React.useState('Felanmälan')
  const showArrow = [
    '/plats',
    '/rum',
    '/omrade',
    '/objekt',
    '/komplettera',
    '/sammanfattning',
  ]

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
      {showArrow.includes(pathname) && (
        <Button onClick={() => navigate(-1)}>
          <img src={arrow} alt="Arrow back" />
        </Button>
      )}

      <H2>{title}</H2>
    </Wrapper>
  )
}

export default Header
