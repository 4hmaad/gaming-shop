import styled from "styled-components";

const HomePageContainer = styled.div`
  display: grid;
  grid-template-areas:
    "header header header"
    "top top top"
    "sidebar content content"
    "footer footer footer";
`;

export const TopBarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  grid-area: top;
`;

export const TitleContainer = styled.h2`
  font-size: 2rem;
  font-weight: 400;
`;

export default HomePageContainer;
