import React from "react";
import PropTypes from "prop-types";

import { connect } from "react-redux";
import StripeCheckout from "react-stripe-checkout";
import { withRouter } from "react-router-dom";

import { resetCart } from "./../../redux/cart/cartActions";
import { saveOrder } from "./../../redux/order/orderActions";

const StripeCheckoutButton = (props) => {
  /** Actions */
  const { saveOrder, resetCart } = props;
  /** Other Props */
  const { cart, user } = props;
  const { history } = props;

  /** Cart' state */
  const { totalPrice } = cart;

  /** User's state */
  const { signedUser } = user;

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

StripeCheckoutButton.propTypes = {
  cart: PropTypes.shape({
    totalPrice: PropTypes.number.isRequired,
  }).isRequired,
  user: PropTypes.shape({
    signedUser: PropTypes.object,
  }),
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }),
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
