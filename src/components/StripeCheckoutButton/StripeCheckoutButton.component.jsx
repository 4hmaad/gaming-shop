import React from "react";

import StripeCheckout from "react-stripe-checkout";
import { useHistory } from "react-router-dom";
import { useAuth } from "context/auth-context";
import { useCartStore } from "components/Cart/Cart.component";

const StripeCheckoutWrapper = props => {
  const history = useHistory();
  const { user } = useAuth();
  const { clearCart } = useCartStore();

  const amount = props.totalPrice * 100;
  // Don't lose your shit! this is just a test key.
  const stripeKey =
    "pk_test_51GsNRsC8KqWYzqmMRBnkvQndy4pspHb0fQhisovpR9sRg3EHPjIddk4ivO1BT6auWrTD8ONyfEpyZZpIKwjakISy00xG47EOe3";

  const onToken = async token => {
    const user = user ? user.email : "anonymous";
    try {
      clearCart();
      alert("payment successful, redirecting you to the receipt page.");
      history.push(`/order/receipt/${token.id}`);
    } catch (err) {
      console.error(err);
      alert("Error occurred! please try again");
    }
  };

  return (
    <StripeCheckout
      token={onToken}
      stripeKey={stripeKey}
      amount={amount}
      bitcoin
      disabled={!user}
      name={`Gamify`}
      description={`Boss you gotta pay $${props.totalPrice}`}
    />
  );
};

export default StripeCheckoutWrapper;
