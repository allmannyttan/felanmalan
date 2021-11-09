import React from 'react'
import styled from 'styled-components'
import checkMark from '../images/svg/checkMark.svg'

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
  background: ${(props) => (props.completed ? '#90BF2D' : '#E8E8E8')};
  background-image: ${(props) => (props.completed ? `url(${checkMark})` : '')};
  background-repeat: no-repeat;
  background-position: center;

  ::after {
    height: 0;
    content: '';
    position: absolute;
    bottom: 7px;
    left: 18px;
    background: ${(props) => (props.line ? '#90BF2D' : '#E8E8E8')};
    width: 100px;
    height: 2px;
  }
`

const ProgressBar = () => {
  return (
    <>
      <p>Progressbar</p>
      <StyledUl>
        <StyledLi completed={true} line={true} />
        <StyledLi completed={true} line={true} />
        <StyledLi completed={true} line={false} />
        <StyledLi completed={false} line={false} />
        <StyledLi completed={false} line={false} />
        <StyledLi completed={false} line={false} />
      </StyledUl>
    </>
  )
}

export default ProgressBar
