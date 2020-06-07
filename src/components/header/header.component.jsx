import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { auth } from "./../../firebase/firebase.utils";

import HeaderContainer, { LogoContainer, MenuContainer } from "./Header.styles";
import { ReactComponent as CartIcon } from "../../assets/cart.svg";

const Header = ({ signedUser }) => (
  <HeaderContainer>
    <LogoContainer to="/">Gamify</LogoContainer>
    <MenuContainer>
      {!signedUser ? (
        <Link to="/auth">sign in</Link>
      ) : (
        <div onClick={() => auth.signOut()}>sign out</div>
      )}

      <Link to="/checkout">
        <CartIcon style={{ width: "2.8rem", height: "2.8rem" }} />
      </Link>
    </MenuContainer>
  </HeaderContainer>
);

const mapStateToProps = ({ user }) => {
  return user;
};

export default connect(mapStateToProps)(Header);
