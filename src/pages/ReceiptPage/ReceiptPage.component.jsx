import React from "react";
import Spinner from "../../components/Spinner/Spinner.component";

import ReceiptPageContainer, {
  TitleContainer,
  ReceiptContainer,
  GamesContainer,
  GamesHeaderContainer
} from "./ReceiptPage.styles";

const ReceiptPage = props => {
  const order = {
    details: {
      token: {}
    },
    cart: {}
  };

  return (
    <ReceiptPageContainer>
      <TitleContainer> Order Receipt </TitleContainer>

      {false ? (
        <ReceiptContainer>
          <ul>
            <li>
              <span>Email:</span>
              <span>{order.details.token.email}</span>
            </li>
            <li>
              <span>Receipt date:</span>
              <span>nil</span>
            </li>
            <li>
              <span>Amount paid:</span>
              <span>${order.details.cart.totalPrice}</span>
            </li>
          </ul>
          <h1>Games</h1>
          <GamesContainer>
            <GamesHeaderContainer>
              <span>Name</span>
              <span>Key</span>
            </GamesHeaderContainer>
            Cart Items
          </GamesContainer>
        </ReceiptContainer>
      ) : order.error ? (
        <p>{order.error}</p>
      ) : (
        <Spinner />
      )}
    </ReceiptPageContainer>
  );
};

export default ReceiptPage;
