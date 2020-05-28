import styled from "styled-components";

const HeaderContainer = styled.div`
  grid-area: header;
  height: 7rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 5rem;
`;

export const LogoContainer = styled.h1`
  font-size: 4rem;
  font-weight: 700;
`;

export const MenuContainer = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.6rem;
`;

export const MenuItemContainer = styled.a`
  color: var(--black);
  text-decoration: none;
  text-transform: uppercase;
  font-weight: 400;
  margin: 0rem 2rem;
`;

export default HeaderContainer;
