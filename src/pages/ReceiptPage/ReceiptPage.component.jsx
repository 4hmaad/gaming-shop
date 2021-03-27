import React from "react";
import { useRouteMatch } from "react-router";
import { useOrder } from "utils/orders";
import Spinner from "../../components/Spinner/Spinner.component";

import ReceiptPageContainer, {
  TitleContainer,
  ReceiptContainer,
  GamesContainer,
  GamesHeaderContainer
} from "./ReceiptPage.styles";

const ReceiptPage = () => {
  const match = useRouteMatch();
  const { data: order, isLoading, error } = useOrder(match.params?.id);

  return (
    <ReceiptPageContainer>
      <TitleContainer> Order Receipt </TitleContainer>
      {order ? (
        <ReceiptContainer>
          <ul>
            <li>
              <span>Email:</span>
              <span>{order.token?.email ?? `Nil`}</span>
            </li>
            <li>
              <span>Receipt date:</span>
              <span>nil</span>
            </li>
            <li>
              <span>Amount paid:</span>
              <span>${order.cart?.totalPrice ?? `Nil`}</span>
            </li>
          </ul>
          <h1>Games</h1>
          <GamesContainer>
            <GamesHeaderContainer>
              <span>Name</span>
              <span>Key</span>
            </GamesHeaderContainer>
            {order.cart?.items?.map((item, i) => (
              <div key={i}>
                <span>{item.title}</span>
                <span>{`ZX-SS-XFF-124F-XXL-444X-YYAZ1`}</span>
              </div>
            ))}
          </GamesContainer>
        </ReceiptContainer>
      ) : error && !isLoading ? (
        <p>{error}</p>
      ) : (
        <Spinner />
      )}
    </ReceiptPageContainer>
  );
};

export default ReceiptPage;
