import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { setSignedUser } from "../../redux/user/userActions";
import { auth } from "./../../firebase/firebase.utils";

import HeaderComponent, {
  LogoContainer,
  MenuContainer,
  MenuItemContainer,
} from "./Header.styles";

import { ReactComponent as CartIcon } from "../../assets/cart.svg";

const Header = ({ history, signedUser, setSignedUser }) => (
  <HeaderComponent>
    <LogoContainer onClick={() => history.push("/")}>Gamify</LogoContainer>
    <MenuContainer>
      {!signedUser ? (
        <MenuItemContainer to="/auth">sign in</MenuItemContainer>
      ) : (
        <MenuItemContainer onClick={() => auth.signOut()}>
          sign out
        </MenuItemContainer>
      )}

      <MenuItemContainer to="/cart">
        <CartIcon style={{ width: "28px", height: "28px" }} />
      </MenuItemContainer>
    </MenuContainer>
  </HeaderComponent>
);

const mapStateToProps = ({ user }) => {
  return user;
};

export default connect(mapStateToProps, { setSignedUser })(withRouter(Header));
