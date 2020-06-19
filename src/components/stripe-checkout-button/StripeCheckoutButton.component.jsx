import React from "react";
import { connect } from "react-redux";
import StripeCheckout from "react-stripe-checkout";
import { withRouter } from "react-router-dom";

import { resetCart } from "./../../redux/cart/cartActions";
import { saveOrder } from "./../../redux/order/orderActions";

const StripeCheckoutButton = (props) => {
  /** Actions */
  const { saveOrder, resetCart } = props;
  /** Other Props */
  const { cart, signedUser } = props;
  const { history } = props;

  /** Cart */
  const { totalPrice } = cart;

  const amount = totalPrice * 100;
  const stripeKey =
    "pk_test_51GsNRsC8KqWYzqmMRBnkvQndy4pspHb0fQhisovpR9sRg3EHPjIddk4ivO1BT6auWrTD8ONyfEpyZZpIKwjakISy00xG47EOe3";

  const onToken = async (token) => {
    var user = signedUser ? signedUser : "unknown";

    try {
      await saveOrder({ token, user, cart });
      resetCart();
      alert("payment successful, redirecting you to the receipt page.");
      history.push(`/order/receipt/${token.id}`);
    } catch (err) {
      console.error(err);
      alert("Error occurred! please try again");
      return;
    }
  };

  return (
    <StripeCheckout
      token={onToken}
      stripeKey={stripeKey}
      amount={amount}
      bitcoin
      name={`Gamify`}
      description={`The total amount is $${totalPrice}`}
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
