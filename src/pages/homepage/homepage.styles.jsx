import styled from "styled-components";

const HomePageContainer = styled.div`
  ${(props) => props.theme.pageWidth}
`;

export const TopBarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  grid-area: top;
`;

export const ContentContainer = styled.div`
  display: grid;
  grid-template-columns: 4fr 1fr;
  grid-template-areas: "content sidebar";
  grid-gap: 4rem;
  margin-top: 8rem;
`;

export const TitleContainer = styled.h1`
  ${(props) => props.theme.pageTitle}
`;

export default HomePageContainer;
