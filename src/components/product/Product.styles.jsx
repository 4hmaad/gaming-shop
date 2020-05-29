import styled from "styled-components";

const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const ImageContainer = styled.img`
  width: 100%;
  height: 33rem;
  object-fit: cover;
  object-position: center top;

  @media (max-width: 56.25em) {
    height: 28rem;
  }

  @media (max-width: 37.5em) {
    height: 20rem;
  }
`;

export const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem 0rem;
  margin-bottom: auto;
`;

export const TitleContainer = styled.h1`
  font-weight: 400;
  font-size: var(--text-1);
  text-transform: uppercase;
`;

export const CategoryContainer = styled.span`
  color: var(--black);
  opacity: 0.6;
  font-weight: 400;
  font-size: var(--text-3);
`;

export const DiscountContainer = styled.span`
  color: white;
  padding: 1rem;
  background: #5a9516;
  font-size: var(--text-4);
  position: absolute;
  top: 0;
  right: 0;
`;

export const PriceContainer = styled.span`
  margin-top: 0.5rem;
  font-weight: 400;
  font-size: var(--text-1);
`;

export default ProductContainer;
