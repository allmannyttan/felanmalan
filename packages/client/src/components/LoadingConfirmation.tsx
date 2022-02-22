import styled, { keyframes } from 'styled-components'

const Wrapper = styled.div`
  padding: 0 19px;
  display: flex;
  overflow: hidden;
  height: 87vh;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  padding-top: 1rem;
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

const LoadingImage = styled(Animation)`
  height: 15rem;
  width: 15rem;
  border-radius: 4px;
`

const LoadingH1 = styled(Animation)`
  width: 6rem;
  height: 1.5rem;
  border-radius: 4px;
`

const LoadingP = styled(Animation)`
  width: 10rem;
  height: 0.8rem;
  border-radius: 4px;
`

const LoadingText = styled(LoadingP)`
  width: 11rem;
`

const Flex = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
`

const LoadingButton = styled(Animation)`
  width: 16rem;
  height: 3rem;
  border-radius: 33px;
`

const LoadingConfirmation = () => {
  return (
    <Wrapper>
      <LoadingImage />
      <Flex>
        <LoadingH1 />
        <LoadingP />
        <LoadingText />
      </Flex>
      <LoadingButton />
    </Wrapper>
  )
}

export default LoadingConfirmation
