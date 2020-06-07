import styled from "styled-components";

const CheckoutPageContainer = styled.div`
  ${(props) => props.theme.pageWidth}
`;

export const TitleContainer = styled.h1`
  ${(props) => props.theme.pageTitle}
`;

export default CheckoutPageContainer;
