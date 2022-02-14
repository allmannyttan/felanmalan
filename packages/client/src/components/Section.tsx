import React from 'react'
import styled from 'styled-components'
const Wrapper = styled.div<{ padding?: string; bg?: string }>`
  background: ${({ theme, bg }) => (bg ? bg : theme.colors.white)};
  padding: ${({ padding }) => padding ?? '30px 0px'};
  border-radius: 30px 30px 0 0;
  padding-bottom: 3rem;
  height: 100%;
  width: 100%;
`

const Section: React.FC<{ padding?: string; bg?: string }> = ({
  children,
  padding,
  bg,
}) => {
  return (
    <Wrapper padding={padding} bg={bg}>
      {children}
    </Wrapper>
  )
}

export default Section
