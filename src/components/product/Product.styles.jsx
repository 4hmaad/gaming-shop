import styled from "styled-components";

const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ImageContainer = styled.img`
  width: 100%;
`;

export const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1.5rem;
  margin-bottom: 2rem;
  position: relative;
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
  padding: 0.5rem;
  background: #5a9516;
  font-size: var(--text-4);
  position: absolute;
  bottom: 0;
  left: 4.5rem;
`;

export const PriceContainer = styled.span`
  margin-top: 0.5rem;
  font-weight: 400;
  font-size: var(--text-1);
`;

export default ProductContainer;
