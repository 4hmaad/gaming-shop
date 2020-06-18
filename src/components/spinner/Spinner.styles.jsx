import styled, { keyframes } from "styled-components";

const spinnerKeyFrame = keyframes`
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
`;
const SpinnerContainer = styled.div`
  display: inline-block;
  width: 6rem;
  height: 6rem;
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translateX(-50%);

  &:after {
    content: " ";
    display: block;
    width: 4rem;
    height: 4rem;
    margin: 0.8rem;
    border-radius: 50%;
    border: 0.3rem solid #000;
    border-color: #000 transparent #000 transparent;
    animation: ${spinnerKeyFrame} 1s linear infinite;
  }
`;

export default SpinnerContainer;
