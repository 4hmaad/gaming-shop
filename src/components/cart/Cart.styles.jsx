import styled from "styled-components";

const CartContainer = styled.div`
  margin-top: 8rem;
`;

export const HeaderContainer = styled.ul`
  width: 100%;
  list-style-type: none;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  padding-bottom: 2rem;
  border-bottom: 2px solid var(--lightGrey);
`;

export const ItemContainer = styled.li`
  font-size: var(--text-3);
  color: var(--white);
  background: var(--black);
  position: relative;
  transform: skewY(-5deg);
  padding: 0.8rem;
  text-align: center;
  width: 100%;
  max-width: 10rem;
  margin: 0 auto;
`;

export const CartProductsContainer = styled.ul`
  list-style-type: none;
  margin-top: 2rem;
  width: 100%;
`;

export default CartContainer;
