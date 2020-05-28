import styled from "styled-components";

const HomePageContainer = styled.div`
  display: grid;
  grid-template-columns: 4fr 1fr;
  grid-gap: 4rem;
  grid-template-areas:
    "top top"
    "content sidebar"
    "footer footer";
  padding: 3rem 8rem;
`;

export const TopBarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  grid-area: top;
  margin-bottom: 2rem;
`;

export const TitleContainer = styled.h1`
  font-size: var(--text-1);
  font-weight: 400;
`;

export default HomePageContainer;
