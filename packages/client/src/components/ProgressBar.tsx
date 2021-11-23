import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import checkMark from '../images/svg/checkMark.svg'
import { useAtom } from 'jotai'
import { progressBarAtom, updateProgressAtom } from '../utils/atoms'
import { ProgressStatus, Pages } from '../utils/types'
import { useLocation } from 'react-router-dom'

interface Completed {
  status: string
  title?: string
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
  height: 4rem;
  display: flex;
  align-items: center;
  padding: 0 2rem;
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
      : props.theme.colors.darkGrey};
  box-shadow: ${(props) =>
    props.status === 'doing' ? `inset 0px 0px 0px 2px${props.theme.colors.green}` : ''};
  background-image: ${(props) =>
    props.status === 'completed' ? `url(${checkMark})` : ''};
  background-repeat: no-repeat;
  background-position: center;

  :nth-child(6)::after {
    width: 0px;
  }

  ::after {
    height: 0;
    content: '';
    position: absolute;
    bottom: 7px;
    left: 18px;
    background: ${(props) =>
      props.status === 'completed'
        ? props.theme.colors.green
        : props.theme.colors.darkGrey};
    width: ${({ title }) => (title === 'Skicka' ? '0px' : '30px')};
    height: 2px;
  }
`

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const TextWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 17px;
`

const Text = styled.p`
  margin: 0;
  font-size: 12px;
  margin-bottom: 0.2rem;
  margin-top: -1.2rem;
`

const ProgressBar = () => {
  interface Page {
    page: Pages
    title: string
  }
  const [progressBar] = useAtom(progressBarAtom)
  const [, updateProgressBar] = useAtom(updateProgressAtom)
  const [pageInfo, setPageInfo] = useState<Page>({ page: Pages.PLACE, title: 'Plats' })
  const { pathname } = useLocation()

  const index = progressBar.map((p) => p.page).indexOf(pageInfo.page)
  const completedPages = progressBar.slice(0, index)
  const nextPages = progressBar.slice(index + 1, 6)

  useEffect(() => {
    completedPages.map(({ page }) =>
      updateProgressBar({ page, status: ProgressStatus.COMPLETED }),
    )
    updateProgressBar({ page: pageInfo.page, status: ProgressStatus.DOING })
    nextPages.map(({ page }) => updateProgressBar({ page, status: ProgressStatus.NEXT }))
  }, [pageInfo])

  useEffect(() => {
    switch (pathname) {
      case '/plats':
        return setPageInfo({ page: Pages.PLACE, title: 'Plats' })
      case '/rum':
        return setPageInfo({ page: Pages.ROOM, title: 'Rum' })
      case '/omrade':
        return setPageInfo({ page: Pages.AREA, title: 'Område' })
      case '/objekt':
        return setPageInfo({ page: Pages.ITEM, title: 'Objekt' })
      case '/komplettera':
        return setPageInfo({ page: Pages.COMPLETE, title: 'Komplettera' })
      case '/sammanfattning':
        return setPageInfo({ page: Pages.SUMMARY, title: 'Skicka' })

      default:
        return
    }
  }, [pathname])

  const getDots = (status: string, i: number) => {
    switch (status) {
      case 'completed':
        return <StyledLi key={i} status="completed" />
      case 'doing':
        return (
          <TextWrap key={i}>
            <Text>{pageInfo.title}</Text>
            <StyledLi status="doing" title={pageInfo.title} />
          </TextWrap>
        )
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
