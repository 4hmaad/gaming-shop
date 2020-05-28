import React from "react";
import { withRouter } from "react-router-dom";

import HeaderComponent, {
  LogoContainer,
  MenuContainer,
  MenuItemContainer,
} from "./Header.styles";

import { ReactComponent as CartIcon } from "../../assets/cart.svg";

const Header = ({ history }) => (
  <HeaderComponent>
    <LogoContainer onClick={() => history.push("/")}>Gamify</LogoContainer>
    <MenuContainer>
      <MenuItemContainer to="/auth">sign in</MenuItemContainer>
      <MenuItemContainer to="/cart">
        <CartIcon style={{ width: "28px", height: "28px" }} />
      </MenuItemContainer>
    </MenuContainer>
  </HeaderComponent>
);

export default withRouter(Header);
