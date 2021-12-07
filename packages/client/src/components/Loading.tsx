import styled, { keyframes } from 'styled-components'

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 20% auto 6%;
  align-items: center;
  padding: 11px 18px;
  margin-bottom: 1.3rem;
  grid-gap: 1.4rem;
`

const PulseAnimation = keyframes`
    0% {
    background-color: #E8E8E8;
    }
    50% {
    background-color: #868686;
    }
    100% {
    background-color: #E8E8E8;
    }
`

const Animation = styled.div`
  animation-name: ${PulseAnimation};
  animation-duration: 2s;
  animation-iteration-count: infinite;
`

const LoadingIcon = styled(Animation)`
  height: 3.6rem;
  width: 4rem;
  border-radius: 4px;
`

const LoadingH1 = styled(Animation)`
  width: 6rem;
  height: 0.9rem;
`

const LoadingP = styled(Animation)`
  width: 9rem;
  height: 0.5rem;
`

const FlexCol = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.6rem;
`

const LoadingArrow = styled(Animation)`
  width: 24px;
  height: 24px;
`

const Loading = () => {
  return (
    <Wrapper>
      <LoadingIcon />
      <FlexCol>
        <LoadingH1 />
        <LoadingP />
      </FlexCol>
      <LoadingArrow />
    </Wrapper>
  )
}

export default Loading
