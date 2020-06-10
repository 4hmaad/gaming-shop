import styled from "styled-components";
import { Link } from "react-router-dom";

const HeaderContainer = styled.div`
  grid-area: header;
  height: 9rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 5rem;
  padding: 0rem 8rem;
  border-bottom: 4px solid var(--yellow);
  user-select: none;
`;

export const LogoContainer = styled(Link)`
  font-size: 2.6rem;
  font-weight: 700;
  letter-spacing: 2px;
  position: relative;
  z-index: 1;
  cursor: pointer;
  text-decoration: none;
  color: var(--black);

  &::after {
    content: "";
    position: absolute;
    left: 0;
    pointer-events: none;
    background-image: url("../../dots.png");
    background-position: center;
    background-size: cover;
    height: 50px;
    width: 50px;
    transform: scale(4);
    z-index: -1;
  }

  &::before {
    width: 0.75em;
    height: 0.75em;
    content: "";
    background: var(--yellow);
    left: -4%;
    top: 8%;
    z-index: -2;
    pointer-events: none;
    position: absolute;
    --translate: -0.5rem;
    --rotate: 0deg;
    transform: translateX(var(--translate)) translateY(var(--translate))
      rotate(var(--rotate));
  }
`;

export const MenuContainer = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.6rem;

  & > * {
    color: var(--black);
    text-decoration: none;
    text-transform: uppercase;
    font-weight: 400;
    margin: 0rem 2rem;
    cursor: pointer;
  }
`;

export const CartSpanContainer = styled.span`
  position: absolute;
  top: -1.6rem;
  right: -1.8rem;
  background-color: var(--yellow);
  height: 2.6rem;
  width: 2.6rem;
  border-radius: 250px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: var(--text-4);
`;

export default HeaderContainer;
