import styled from "styled-components";

const AuthPageContainer = styled.div`
  ${(props) => props.theme.pageWidth}
`;

export const TitleContainer = styled.h1`
  ${(props) => props.theme.pageTitle}
`;

export const FormsContainer = styled.div`
  display: grid;
  grid-template-columns: 2fr 2fr 1fr;
  grid-gap: 5rem;
  margin: 8rem auto;
  max-width: 100rem;
`;

export default AuthPageContainer;
