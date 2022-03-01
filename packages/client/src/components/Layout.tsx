import { useAtom } from 'jotai'
import React, { ReactChild } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { userAtom } from '../utils/atoms'
import Header from './Header'
const Wrapper = styled.div`
  padding: 0;
  position: relative;
  background-color: ${({ theme }) => theme.colors.backgroundGrey};
  height: 100vh;
  display: grid;
  grid-template-rows: 1fr 9fr;
  width: 100%;
  overflow-x: hidden;
  display: flex;
  align-items: center;
  flex-direction: column;
`

const FlexCol = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  max-width: 840px;
`

const Layout: React.FC<{ children: ReactChild }> = ({ children }) => {
  const [userData] = useAtom(userAtom)
  const { pathname } = useLocation()
  const navigate = useNavigate()

  const validRoues = [
    '/plats',
    '/rum',
    '/omrade',
    '/objekt',
    '/komplettera',
    '/sammanfattning',
  ]

  React.useEffect(() => {
    if (!userData.rentalId && validRoues.includes(pathname)) navigate('/')
  }, [])
  return (
    <Wrapper>
      <Header />
      <FlexCol>{children}</FlexCol>
    </Wrapper>
  )
}

export default Layout
