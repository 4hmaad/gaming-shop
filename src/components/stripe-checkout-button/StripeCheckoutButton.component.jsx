import React from "react";
import { connect } from "react-redux";
import StripeCheckout from "react-stripe-checkout";

import { resetCart } from "./../../redux/cart/cartActions";
import { withRouter } from "react-router-dom";

const StripeCheckoutButton = ({ price, cart, resetCart, history }) => {
  const amount = price * 100;
  const stripeKey =
    "pk_test_51GsNRsC8KqWYzqmMRBnkvQndy4pspHb0fQhisovpR9sRg3EHPjIddk4ivO1BT6auWrTD8ONyfEpyZZpIKwjakISy00xG47EOe3";

  const onToken = (token) => {
    console.log({ token, cart });
    alert(
      "payment successful, redirecting you to the recipe page. #will never happen"
    );
    resetCart();
    history.push("/");
  };

  return (
    <StripeCheckout
      token={onToken}
      stripeKey={stripeKey}
      amount={amount}
      bitcoin
      name={`Gamify`}
      description={`The total amount is $${price}`}
    />
  );
};

const mapStateToProps = ({ cart }) => {
  return {
    cart,
  };
};

const WrappedComponent = connect(mapStateToProps, { resetCart })(
  StripeCheckoutButton
);

export default withRouter(WrappedComponent);
