import styled from 'styled-components'

export const H1 = styled.h1`
  font-size: 20px;
  font-weight: 700;
  margin-top: 20px;
  margin-bottom: 30px;
`

export const H2 = styled.h2`
  font-size: 16px;
  font-weight: 700;
  margin: 0;
`

export const H4 = styled.h4`
  margin: 0;
  font-size: 16px;
  color: #000;
  text-decoration: none;
  font-weight: 400;
`
interface ParagraphProps {
  center?: boolean
}

export const Paragraph = styled.p<ParagraphProps>`
  margin: 0;
  color: #000;
  text-decoration: none;
  font-size: 16px;
  font-weight: 400;
  text-align: ${({ center }) => (center ? 'center' : 'left')};
`
export const ParagraphSmall = styled.p`
  margin: 0;
  color: #000;
  text-decoration: none;
  font-size: 12px;
  font-weight: 400;
`
export const BoldParagraph = styled(Paragraph)`
  font-weight: 700;
`
