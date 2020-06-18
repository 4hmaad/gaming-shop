import styled from "styled-components";

const ProductsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(17.96rem, 1fr));
  grid-auto-rows: 1fr;
  grid-column-gap: 1.5rem;
  grid-row-gap: 5rem;
  position: relative;
`;

export const ErrorMessage = styled.h1`
  font-size: var(--text-2);
  font-weight: 300;
  position: absolute;
  top: 14rem;
  right: 50%;
`;

export default ProductsContainer;
