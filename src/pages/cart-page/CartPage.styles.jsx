import styled from "styled-components";

const CartPageContainer = styled.div`
  ${(props) => props.theme.pageWidth}
`;

export const TitleContainer = styled.h1`
  font-size: var(--text-0);
  font-weight: 400;
`;

export default CartPageContainer;
