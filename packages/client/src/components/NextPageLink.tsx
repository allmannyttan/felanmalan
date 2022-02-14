import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { devices } from '../utils/devices'

const StyledLink = styled(Link)`
  display: flex;
  justify-content: center;
  text-decoration: none;
  background-color: ${(props) => props.theme.colors.paleOrange};
  color: ${(props) => props.theme.colors.dark};
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
`

interface Props {
  text: string
  to: string
}

const NextPageLink = ({ text, to }: Props) => {
  return <StyledLink to={to}>{text}</StyledLink>
}

export default NextPageLink
