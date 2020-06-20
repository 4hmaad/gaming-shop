import React, { useEffect } from "react";
import PropTypes from "prop-types";

import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

import { fetchOrder } from "../../redux/order/orderActions";

import Spinner from "./../../components/spinner/Spinner.component";

import ReceiptPageContainer, {
  TitleContainer,
  ReceiptContainer,
  GamesContainer,
  GamesHeaderContainer,
} from "./ReceiptPage.styles";

const ReceiptPage = (props) => {
  /** Actions */
  const { fetchOrder } = props;
  /** Router */
  const { match } = props;
  /** Order State */
  const { order } = props;

  useEffect(() => {
    const currentLoadedOrderId = order.details ? order.details.token.id : null;
    if (currentLoadedOrderId !== match.params.id) fetchOrder(match.params.id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const renderCartItems = () => {
    if (!order.isLoading && order.details) {
      const {
        details: { cart },
      } = order;

      // eslint-disable-next-line array-callback-return
      return cart.cartItems.map((cartItem, idx) => {
        const { quantity, title, id } = cartItem;
        const rN = (limit) => {
          return Math.floor(Math.random() * limit);
        };
        const items = [];

        for (let i = 1; i <= quantity; i++) {
          items.push(
            <div key={id + i}>
              <span>{title}</span>
              <span>
                {`${rN(9)}ZX${rN(9)}`}-{`${rN(9)}${rN(9)}F${rN(9)}`}-
                {`${rN(9)}X${rN(9)}${rN(9)}`}-{`${rN(9)}${rN(999)}${rN(9)}`}-
                {`${rN(555)}F${rN(9)}`}
              </span>
            </div>
          );
        }

        return <>{items}</>;
      });
    }
  };

  return (
    <ReceiptPageContainer>
      <TitleContainer> Order Receipt </TitleContainer>

      {!order.isLoading && order.details ? (
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

ReceiptPage.propTypes = {
  order: PropTypes.exact({
    details: PropTypes.object,
    isLoading: PropTypes.bool.isRequired,
    hasError: PropTypes.bool.isRequired,
    error: PropTypes.string,
  }).isRequired,

  fetchOrder: PropTypes.func.isRequired,
};

const mapStateToProps = ({ order }) => {
  return {
    order,
  };
};

export default withRouter(
  connect(mapStateToProps, { fetchOrder })(ReceiptPage)
);
