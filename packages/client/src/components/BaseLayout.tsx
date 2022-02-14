import { useAtom } from 'jotai'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { initialErrorReportValues, reportAtom } from '../utils/atoms'
import Button from './Button'

const Wrapper = styled.div`
  padding: 0 19px;
  display: flex;
  overflow: hidden;
  height: 87vh;
  flex-direction: column;
  justify-content: space-between;
`

const Container = styled.div`
  margin-top: 8rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const BaseLayout: React.FC = ({ children }) => {
  const navigate = useNavigate()
  const [, setErrorReport] = useAtom(reportAtom)

  const handleOnClick = () => {
    setErrorReport(initialErrorReportValues)
    navigate('/', { replace: true })
  }
  return (
    <Wrapper>
      <Container>{children}</Container>
      <Button text="Tillbaka till hemskärm" onClick={handleOnClick} />
    </Wrapper>
  )
}
export default BaseLayout
