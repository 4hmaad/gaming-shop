import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import CartContainer, {
  HeaderContainer,
  CartProductsContainer,
  CartBottomContainer,
} from "./Cart.styles";

import StripeCheckoutButton from "../../components/StripeCheckoutButton/StripeCheckoutButton.component";
import CartProduct from "../../components/CartProduct/CartProduct.component";

const Cart = (props) => {
  /** Cart's state */
  const { cartItems, totalPrice } = props.cart;

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

      <CartBottomContainer>
        <span>Total:</span>

        <span> {`$${totalPrice}`} </span>
        {cartItems.length ? <StripeCheckoutButton /> : null}
      </CartBottomContainer>
    </CartContainer>
  );
};

Cart.propTypes = {
  cart: PropTypes.shape({
    cartItems: PropTypes.array.isRequired,
    totalPrice: PropTypes.number.isRequired,
  }).isRequired,
};

const mapStateToProps = ({ cart }) => {
  return {
    cart,
  };
};

export default connect(mapStateToProps)(Cart);
