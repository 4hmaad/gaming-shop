import React, { useEffect } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

import { fetchOrder } from "../../redux/order/orderActions";

import Spinner from "./../../components/spinner/Spinner.component";

import ReceiptPageContainer, {
  TitleContainer,
  ReceiptContainer,
  GamesContainer,
} from "./ReceiptPage.styles";

const ReceiptPage = ({ fetchOrder, match, order }) => {
  useEffect(() => {
    const orderTokenId = order.details ? order.details.token.id : null;
    if (orderTokenId !== match.params.id && !order.loading)
      fetchOrder(match.params.id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [order.loading]);

  console.log(order);

  const renderCartItems = () => {
    if (order.loading === false) {
      return order.details.cart.cartItems.map((cartItem) => (
        <div>
          <span>{cartItem.title}</span>
          <span>
            {`${randomNumber(2)}BF1-`}
            {`F${randomNumber(5)}1B`}F-
            {`${randomNumber(6)}-`}
            {`F${randomNumber(3)}1B`}-{`${randomNumber(9)}BXZ`}
          </span>
        </div>
      ));
    }
  };

  const randomNumber = (limit) => {
    return Math.floor(Math.random() * limit);
  };

  return (
    <ReceiptPageContainer>
      <TitleContainer> Order Receipt </TitleContainer>

      {order.loading === false ? (
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
            <div>
              <span>Name</span>
              <span>Key</span>
            </div>
            {renderCartItems()}
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

const mapStateToProps = ({ order }) => {
  return {
    order,
  };
};

export default withRouter(
  connect(mapStateToProps, { fetchOrder })(ReceiptPage)
);
