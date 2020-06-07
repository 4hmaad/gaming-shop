import styled from "styled-components";

export const TitleContainer = styled.h1`
  font-weight: 400;
  font-size: var(--text-4);
  text-transform: uppercase;
  margin-top: 1.5rem;
`;

export const CategoriesListContainer = styled.ul`
  list-style: none;
  margin-top: 1rem;

  & > li {
    font-size: 1.4rem;
    margin-bottom: 1rem;
    padding: 2rem;
    transition: all 0.2s;
    cursor: pointer;

    &:hover {
      background: var(--lightGrey-2);
    }
  }
`;

export default CategoriesListContainer;
