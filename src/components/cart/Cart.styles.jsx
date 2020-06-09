import styled from "styled-components";

const CartContainer = styled.div`
  margin-top: 8rem;
`;

export const HeaderContainer = styled.ul`
  width: 100%;
  list-style-type: none;
  border-bottom: 2px solid var(--lightGrey);
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: 1;
  padding: 2.5rem 0rem;

  & > li {
    font-size: var(--text-3);
    color: var(--white);
    background: var(--black);
    position: relative;
    transform: skewY(0deg);
    padding: 0.8rem;
    text-align: center;
    width: 100%;
    max-width: 10rem;
    margin: 0 auto;
  }
`;

export const CartProductsContainer = styled.ul`
  list-style-type: none;
  margin-top: 2rem;
  width: 100%;
`;

export default CartContainer;
