import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import checkMark from '../images/svg/checkMark.svg'
import { useAtom } from 'jotai'
import { progressBarAtom, updateProgressAtom } from '../utils/atoms'
import { ProgressStatus, Pages } from '../utils/types'
import { useLocation } from 'react-router-dom'

interface Completed {
  status: string
}

const StyledUl = styled.ul`
  width: 250px;
  list-style: none;
  margin: 0;
  padding: 0;
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  overflow: hidden;
  margin-left: 10px;

  ::after {
    content: '';
    position: absolute;
    left: 0;
    top: 5px;
    width: 100px;
    height: 2px;
  }
`

const StyledLi = styled.li<Completed>`
  background: #000;
  border-radius: 100px;
  width: 18px;
  height: 18px;
  z-index: 99;
  position: relative;
  background: ${(props) =>
    props.status === 'completed'
      ? props.theme.colors.green
      : props.status === 'doing'
      ? props.theme.colors.white
      : props.theme.colors.lightGrey};
  box-shadow: ${(props) =>
    props.status === 'doing' ? `inset 0px 0px 0px 2px${props.theme.colors.green}` : ''};
  background-image: ${(props) =>
    props.status === 'completed' ? `url(${checkMark})` : ''};
  background-repeat: no-repeat;
  background-position: center;

  ::after {
    height: 0;
    content: '';
    position: absolute;
    bottom: 7px;
    left: 18px;
    background: ${(props) =>
      props.status === 'completed'
        ? props.theme.colors.green
        : props.theme.colors.lightGrey};
    width: 100px;
    height: 2px;
  }
`

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`

const ProgressBar = () => {
  const [progressBar] = useAtom(progressBarAtom)
  const [, updateProgressBar] = useAtom(updateProgressAtom)
  const [page, setPage] = useState<Pages>(Pages.PLACE)
  const { pathname } = useLocation()

  const index = progressBar.map((p) => p.page).indexOf(page)
  const completedPages = progressBar.slice(0, index)
  const nextPages = progressBar.slice(index + 1, 6)

  useEffect(() => {
    completedPages.map(({ page }) =>
      updateProgressBar({ page, status: ProgressStatus.COMPLETED }),
    )
    updateProgressBar({ page, status: ProgressStatus.DOING })
    nextPages.map(({ page }) => updateProgressBar({ page, status: ProgressStatus.NEXT }))
  }, [page])

  useEffect(() => {
    switch (pathname) {
      case '/plats':
        return setPage(Pages.PLACE)
      case '/rum':
        return setPage(Pages.ROOM)
      case '/omrade':
        return setPage(Pages.AREA)
      case '/objekt':
        return setPage(Pages.ITEM)
      case '/sammanfattning':
        return setPage(Pages.SUMMARY)
      case '/komplettera':
        return setPage(Pages.COMPLETE)

      default:
        return
    }
  }, [pathname])

  const getDots = (status: string, i: number) => {
    switch (status) {
      case 'completed':
        return <StyledLi key={i} status="completed" />
      case 'doing':
        return <StyledLi key={i} status="doing" />
      case 'next':
        return <StyledLi key={i} status="next" />

      default:
        break
    }
  }

  return (
    <Wrapper>
      <StyledUl>{progressBar.map((item, i) => getDots(item.status, i))}</StyledUl>
    </Wrapper>
  )
}

export default ProgressBar
