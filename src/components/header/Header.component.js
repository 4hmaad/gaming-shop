import React from "react";
import { Link } from "react-router-dom";

import HeaderContainer, {
  LogoContainer,
  MenuContainer,
  CartSpanContainer
} from "./Header.styles";
import { ReactComponent as CartIcon } from "../../assets/cart.svg";
import { useCartStore } from "components/Cart/Cart.component";
import { calculateTotalItems } from "utils/cart";
import { useAuth } from "context/auth-context";

const Header = () => {
  const { items } = useCartStore();
  const { signOut, user } = useAuth();

  return (
    <HeaderContainer>
      <LogoContainer to='/'>Gamify</LogoContainer>
      <MenuContainer>
        {!user ? (
          <Link to='/auth'>sign in</Link>
        ) : (
          <div
            onClick={async () => {
              try {
                await signOut();
              } catch (error) {
                console.log({ error });
                alert(error.message);
              }
            }}
          >
            sign out
          </div>
        )}
        <Link to='/checkout' style={{ position: "relative" }}>
          <CartIcon style={{ width: "2.8rem", height: "2.8rem" }} />
          <CartSpanContainer>{calculateTotalItems(items)}</CartSpanContainer>
        </Link>
      </MenuContainer>
    </HeaderContainer>
  );
};
export default Header;
