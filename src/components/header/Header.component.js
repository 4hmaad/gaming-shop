import React from "react";
import PropTypes from "prop-types";

import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { auth } from "../../firebase/firebase.utils";

import HeaderContainer, {
  LogoContainer,
  MenuContainer,
  CartSpanContainer,
} from "./Header.styles";
import { ReactComponent as CartIcon } from "../../assets/cart.svg";

const Header = ({ user: { signedUser }, cart: { cartItems } }) => (
  <HeaderContainer>
    <LogoContainer to="/">Gamify</LogoContainer>
    <MenuContainer>
      {!signedUser ? (
        <Link to="/auth">sign in</Link>
      ) : (
        <div onClick={() => auth.signOut()}>sign out</div>
      )}

      <Link to="/checkout" style={{ position: "relative" }}>
        <CartIcon style={{ width: "2.8rem", height: "2.8rem" }} />
        <CartSpanContainer>{cartItems.length}</CartSpanContainer>
      </Link>
    </MenuContainer>
  </HeaderContainer>
);

Header.propTypes = {
  user: PropTypes.shape({
    signedUser: PropTypes.object,
  }).isRequired,
  cart: PropTypes.shape({
    cartItems: PropTypes.array.isRequired,
  }),
};

const mapStateToProps = ({ user, cart }) => {
  return {
    user,
    cart,
  };
};

export default connect(mapStateToProps)(Header);
