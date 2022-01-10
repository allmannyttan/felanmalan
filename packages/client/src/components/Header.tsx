import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { H2 } from './Typography'
import arrow from '../images/svg/arrow.svg'
import { useAtom } from 'jotai'
import { reportAtom } from '../utils/atoms'

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.backgroundGrey};
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
  const [value, setReportValue] = useAtom(reportAtom)
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
        return setTitle(value.place)
      case '/omrade':
        return setTitle(value.room)
      case '/objekt':
        return setTitle(value.area)
      case '/komplettera':
        return setTitle(
          value.object ? value.object : value.area ? value.area : value.room,
        )
      case '/bekraftelse':
        return setTitle('Felanmälan inskickad')
      default:
        return setTitle('Felanmälan')
    }
  }, [pathname])

  const handleOnClick = () => {
    switch (pathname) {
      case '/plats':
        setReportValue({ ...value, place: '' })
        break
      case '/rum':
        setReportValue({ ...value, room: '' })
        break
      case '/omrade':
        setReportValue({ ...value, area: '' })
        break
      case '/objekt':
        setReportValue({ ...value, object: '' })
        break
      case '/komplettera':
        setReportValue({ ...value, complete: { text: '', image: null, video: null } })
        break
      default:
        break
    }
    return navigate(-1)
  }

  return (
    <Wrapper>
      {showArrow.includes(pathname) && (
        <Button onClick={handleOnClick}>
          <img src={arrow} alt="Arrow back" />
        </Button>
      )}

      <H2>{title}</H2>
    </Wrapper>
  )
}

export default Header
