import React from "react";

import StripeCheckout from "react-stripe-checkout";
import { useHistory } from "react-router-dom";
import { useAuth } from "context/auth-context";
import { useCartStore } from "components/Cart/Cart.component";
import { useSaveOrderMutation } from "utils/orders";
import { Fragment } from "react";

const StripeCheckoutWrapper = props => {
  const history = useHistory();
  const { user: signedUser } = useAuth();
  const { clearCart, items } = useCartStore();
  const { saveOrder, isLoading, isError } = useSaveOrderMutation();

  const amount = props.totalPrice * 100;
  // Don't lose your shit! this is just a test key.
  const stripeKey =
    "pk_test_51GsNRsC8KqWYzqmMRBnkvQndy4pspHb0fQhisovpR9sRg3EHPjIddk4ivO1BT6auWrTD8ONyfEpyZZpIKwjakISy00xG47EOe3";

  const onToken = async token => {
    const user = signedUser ? signedUser.email : "anonymous";
    try {
      await saveOrder({
        token,
        cart: {
          items,
          totalPrice: props.totalPrice
        },
        user
      });
      clearCart();
      alert("payment successful, redirecting you to the receipt page.");
      history.push(`/order/receipt/${token.id}`);
    } catch (err) {
      console.error(err);
      alert("Error occurred! please try again");
    }
  };

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <StripeCheckout
        token={onToken}
        stripeKey={stripeKey}
        amount={amount}
        bitcoin
        disabled={isLoading}
        name={`Gamify`}
        description={`Boss you gotta pay $${props.totalPrice}`}
      />
      {isLoading ? (
        <p style={{ fontSize: "1.4rem" }}>Hold up! Processing your order</p>
      ) : isError ? (
        <p style={{ fontSize: "1.4rem", color: "red" }}>
          Boss we faced an issue 🤷‍♀️
        </p>
      ) : null}
    </div>
  );
};

export default StripeCheckoutWrapper;
