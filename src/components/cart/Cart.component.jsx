import React from "react";
import CartContainer, {
  HeaderContainer,
  ItemContainer,
  CartProductsContainer,
} from "./Cart.styles";

import CartProduct from "../../components/cart-product/CartProduct.component";

const Cart = () => {
  return (
    <CartContainer>
      <HeaderContainer>
        <ItemContainer>Product</ItemContainer>
        <ItemContainer>Title</ItemContainer>
        <ItemContainer>Quantity</ItemContainer>
        <ItemContainer>Price</ItemContainer>
        <ItemContainer>Remove</ItemContainer>
      </HeaderContainer>

      <CartProductsContainer>
        <CartProduct />
      </CartProductsContainer>
    </CartContainer>
  );
};

export default Cart;
