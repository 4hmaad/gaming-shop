import styled, { css } from "styled-components";

const flexCenterStyle = css`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CartProductContainer = styled.li`
  padding: 1rem 0rem;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  border-bottom: 1px solid var(--lightGrey);

  & > * {
    ${flexCenterStyle}
    padding: 0rem 0.5rem;
  }
`;

export const ImageContainer = styled.img`
  height: 9rem;
  width: 9rem;
  margin: 0 auto;
`;

export const TitleContainer = styled.h1`
  font-size: var(--text-0);
  font-weight: 300;
  text-align: center;
`;

export const TextContainer = styled.div`
  font-size: var(--text-1);
  font-weight: 300;
`;

export const IconButton = styled.button`
  ${(props) => {
    return props.left ? "margin-right: 2rem;" : "margin-left: 2rem;";
  }}
  cursor: pointer;
  font-size: var(--text-1);
  color: var(--black);
  font-weight: 300;
  background: var(--white);
  border: 0;
  padding: 0.2rem 0.5rem;
`;

export default CartProductContainer;
