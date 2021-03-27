import React from "react";
import CartContainer, {
  HeaderContainer,
  CartProductsContainer,
  CartBottomContainer
} from "./Cart.styles";
import create from "zustand";

import StripeCheckoutButton from "../StripeCheckoutButton/StripeCheckoutButton.component";
import CartProduct from "../CartProduct/CartProduct.component";
import {
  addItem,
  clearItem,
  removeItem,
  calculateTotalPrice
} from "../../utils/cart";

export const useCartStore = create(set => ({
  items: [],
  clearItem: item =>
    set(state => ({ ...state, items: clearItem(item, state.items) })),
  addItem: item =>
    set(state => ({ ...state, items: addItem(item, state.items) })),
  removeItem: item =>
    set(state => ({ ...state, items: removeItem(item, state.items) })),
  clearCart: () => set(state => ({ ...state, items: [] }))
}));

const Cart = () => {
  const { items: cartItems } = useCartStore();

  const totalPrice = calculateTotalPrice(cartItems);

  const renderCartProducts = () => {
    return cartItems.map(cartItem => {
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

      <CartBottomContainer>
        <span>Total:</span>
        <span> {`$${totalPrice}`} </span>
        {cartItems.length ? (
          <StripeCheckoutButton totalPrice={totalPrice} />
        ) : null}
      </CartBottomContainer>
    </CartContainer>
  );
};

export default Cart;
