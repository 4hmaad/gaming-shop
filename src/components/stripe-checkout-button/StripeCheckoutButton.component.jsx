import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const amount = price * 100;
  const stripeKey =
    "pk_test_51GsNRsC8KqWYzqmMRBnkvQndy4pspHb0fQhisovpR9sRg3EHPjIddk4ivO1BT6auWrTD8ONyfEpyZZpIKwjakISy00xG47EOe3";

  const onToken = (token) => {
    console.log(token);
    alert("payment successful, redirecting you to the recipe page.");
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

export default StripeCheckoutButton;
