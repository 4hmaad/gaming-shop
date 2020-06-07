import React from "react";
import Cart from "../../components/cart/Cart.component";
import CheckoutPageContainer, { TitleContainer } from "./CheckoutPage.styles";

const CheckoutPage = () => {
  return (
    <CheckoutPageContainer>
      <TitleContainer> Shopping Cart </TitleContainer>
      <Cart />
    </CheckoutPageContainer>
  );
};

export default CheckoutPage;
