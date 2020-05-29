import React from "react";
import Cart from "../../components/cart/Cart.component";
import CartPageContainer, { TitleContainer } from "./CartPage.styles";

const CartPage = () => {
  return (
    <CartPageContainer>
      <TitleContainer> Shopping Cart </TitleContainer>
      <Cart />
    </CartPageContainer>
  );
};

export default CartPage;
