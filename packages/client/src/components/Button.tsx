import React from 'react'
import { Link } from 'react-router-dom'
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
  width: 330px;
  font-weight: 700;
  font-size: 16px;

  :disabled {
    cursor: not-allowed;
  }

  @media only screen and (${devices.tablet}) {
    width: 400px;
  }
`

interface Props {
  text: string
  disabled?: boolean
  onClick: () => void
  to: string
}

const StyledLink = styled(Link)`
  display: flex;
  justify-content: center;
  text-decoration: none;
`

const Button = ({ text, disabled = false, onClick, to }: Props) => {
  return (
    <StyledLink to={to}>
      <StyledBtn onClick={onClick} disabled={disabled}>
        {text}
      </StyledBtn>
    </StyledLink>
  )
}

export default Button
