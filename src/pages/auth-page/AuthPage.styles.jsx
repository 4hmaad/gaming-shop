import styled from "styled-components";

const AuthPageContainer = styled.div`
  ${(props) => props.theme.pageWidth}
`;

export const TitleContainer = styled.h1`
  font-size: var(--text-0);
  max-width: 13rem;
  text-align: center;
  font-weight: 400;
  border-bottom: 2px solid var(--yellow);
`;

export const FormsContainer = styled.div`
  display: grid;
  grid-template-columns: 2fr 2fr 1fr;
  grid-gap: 5rem;
  margin: 8rem auto;
  max-width: 100rem;
`;

export default AuthPageContainer;
