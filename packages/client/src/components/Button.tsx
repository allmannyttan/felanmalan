import React from 'react'
import styled from 'styled-components'
import { devices } from '../utils/devices'

interface StyleProps {
  disabled?: boolean
}

export const StyledBtn = styled.button<StyleProps>`
  background-color: ${(props) =>
    props.disabled ? props.theme.colors.lightGrey : props.theme.colors.paleOrange};
  color: ${(props) =>
    props.disabled ? props.theme.colors.darkGrey : props.theme.colors.dark};
  border-radius: 33px;
  border: none;
  cursor: pointer;
  padding: 0.8rem 0;
  width: 300px;
  font-weight: 700;
  font-size: 16px;

  :disabled {
    cursor: not-allowed;
  }

  @media only screen and (${devices.tablet}) {
    width: 400px;
  }

  display: flex;
  justify-content: center;
  text-decoration: none;
`

interface Props {
  text: string
  disabled?: boolean
  onClick: () => void
}

const Button = ({ text, disabled = false, onClick }: Props) => {
  return (
    <StyledBtn onClick={onClick} disabled={disabled}>
      {text}
    </StyledBtn>
  )
}

export default Button
