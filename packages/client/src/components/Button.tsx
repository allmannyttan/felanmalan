import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

interface StyleProps {
  disabled?: boolean
}

export const StyledBtn = styled.button<StyleProps>`
  background-color: ${(props) =>
    props.disabled ? props.theme.colors.lightGrey : props.theme.colors.lightOrange};
  color: ${(props) =>
    props.disabled ? props.theme.colors.darkGrey : props.theme.colors.white};
  border-radius: 33px;
  border: none;
  cursor: pointer;
  padding: 0.8rem 0;
  width: 90vw;
  font-weight: 700;
  font-size: 16px;
  :disabled {
    cursor: not-allowed;
  }
  bottom: 2rem;
  position: absolute;
`

interface Props {
  text: string
  disabled?: boolean
  onClick: () => void
  to: string
}

const Button = ({ text, disabled = false, onClick, to }: Props) => {
  return (
    <Link to={to}>
      <StyledBtn onClick={onClick} disabled={disabled}>
        {text}
      </StyledBtn>
    </Link>
  )
}

export default Button
