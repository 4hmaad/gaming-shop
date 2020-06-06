import styled, { keyframes } from "styled-components";

const ProductsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(17.96rem, 1fr));
  grid-auto-rows: 1fr;
  grid-column-gap: 1.5rem;
  grid-row-gap: 5rem;
  position: relative;
`;

const spinnerKeyFrame = keyframes`
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
`;

export const SpinnerContainer = styled.div`
  display: inline-block;
  width: 6rem;
  height: 6rem;
  position: absolute;
  top: 14rem;
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

export default ProductsContainer;
