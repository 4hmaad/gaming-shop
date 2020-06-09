import React from "react";
import { connect } from "react-redux";

import CartContainer, {
  HeaderContainer,
  CartProductsContainer,
} from "./Cart.styles";

import CartProduct from "../../components/cart-product/CartProduct.component";

const Cart = ({ cartItems }) => {
  const renderCartProducts = () => {
    return cartItems.map((cartItem) => {
      return <CartProduct key={cartItem.id} product={cartItem} />;
    });
  };

  return (
    <CartContainer>
      <HeaderContainer>
        <li>Product</li>
        <li>Title</li>
        <li>Quantity</li>
        <li>Price</li>
        <li>Remove</li>
      </HeaderContainer>

      <CartProductsContainer>{renderCartProducts()}</CartProductsContainer>
    </CartContainer>
  );
};

const mapStateToProps = ({ cart }) => {
  return cart;
};

export default connect(mapStateToProps)(Cart);
