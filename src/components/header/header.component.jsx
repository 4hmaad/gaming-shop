import React from "react";

import HeaderComponent, {
  LogoContainer,
  MenuContainer,
  MenuItemContainer,
} from "./Header.styles";

import { ReactComponent as Logo } from "../../assets/cart.svg";

const Header = () => (
  <HeaderComponent>
    <LogoContainer> Gamify </LogoContainer>
    <MenuContainer>
      <MenuItemContainer href="#">sign in</MenuItemContainer>
      <MenuItemContainer href="#">
        <Logo style={{ width: "35px", height: "35px" }} />
      </MenuItemContainer>
    </MenuContainer>
  </HeaderComponent>
);

export default Header;
