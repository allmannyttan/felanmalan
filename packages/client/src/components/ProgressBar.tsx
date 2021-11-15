import React from 'react'
import styled from 'styled-components'
import checkMark from '../images/svg/checkMark.svg'
import { useAtom } from 'jotai'
import { progressBarAtom } from '../utils/atoms'

interface Completed {
  completed: boolean
  line: boolean
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
    props.completed ? props.theme.colors.green : props.theme.colors.lightGrey};
  background-image: ${(props) => (props.completed ? `url(${checkMark})` : '')};
  background-repeat: no-repeat;
  background-position: center;

  ::after {
    height: 0;
    content: '';
    position: absolute;
    bottom: 7px;
    left: 18px;
    background: ${(props) =>
      props.line ? props.theme.colors.green : props.theme.colors.lightGrey};
    width: 100px;
    height: 2px;
  }
`

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`

const ProgressBar = () => {
  const [completed] = useAtom(progressBarAtom)

  const getDots = (status: string, i: number) => {
    switch (status) {
      case 'completed':
        return <StyledLi key={i} completed={true} line={true} />
      case 'doing':
        return <StyledLi key={i} completed={true} line={false} />
      case 'next':
        return <StyledLi key={i} completed={false} line={false} />

      default:
        break
    }
  }

  return (
    <Wrapper>
      <StyledUl>{completed.map((item, i) => getDots(item.status, i))}</StyledUl>
    </Wrapper>
  )
}

export default ProgressBar
