import React from "react";
import { connect } from "react-redux";
import StripeCheckout from "react-stripe-checkout";
import { withRouter } from "react-router-dom";

import { resetCart } from "./../../redux/cart/cartActions";
import { saveOrder } from "./../../redux/order/orderActions";

const StripeCheckoutButton = ({
  price,
  cart,
  resetCart,
  history,
  signedUser,
  saveOrder,
}) => {
  const amount = price * 100;
  const stripeKey =
    "pk_test_51GsNRsC8KqWYzqmMRBnkvQndy4pspHb0fQhisovpR9sRg3EHPjIddk4ivO1BT6auWrTD8ONyfEpyZZpIKwjakISy00xG47EOe3";

  const onToken = async (token) => {
    signedUser = signedUser ? signedUser : "unknown";
    const saved = await saveOrder({ token, signedUser, cart });
    if (!saved) {
      alert("Error occurred! please try again");
      return;
    }
    resetCart();
    alert("payment successful, redirecting you to the receipt page.");
    history.push(`/order/receipt/${token.id}`);
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

const mapStateToProps = ({ cart, user }) => {
  return {
    cart,
    user,
  };
};

const WrappedComponent = connect(mapStateToProps, { resetCart, saveOrder })(
  StripeCheckoutButton
);

export default withRouter(WrappedComponent);
