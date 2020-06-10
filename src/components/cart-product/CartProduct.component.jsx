import React from "react";
import { connect } from "react-redux";

import { addItem, removeItem, clearItem } from "./../../redux/cart/cartActions";

import CartProductContainer, {
  ImageContainer,
  TitleContainer,
  TextContainer,
  IconButton,
} from "./CartProduct.styles";

const CartProduct = (props) => {
  const { title, imageUrl, price, quantity } = props.product;
  const { addItem, removeItem, clearItem } = props;

  return (
    <CartProductContainer>
      <ImageContainer src={imageUrl} alt={title} />
      <TitleContainer>{title}</TitleContainer>
      <TextContainer>
        <IconButton onClick={() => removeItem(props.product)} left>
          ❮
        </IconButton>
        {quantity}
        <IconButton onClick={() => addItem(props.product)}>❯</IconButton>
      </TextContainer>
      <TextContainer>{`$${price}`}</TextContainer>
      <TextContainer>
        <IconButton onClick={() => clearItem(props.product)}>✕</IconButton>
      </TextContainer>
    </CartProductContainer>
  );
};

const mapStateToProps = ({ cart }) => {
  return {
    cart,
  };
};
export default connect(mapStateToProps, { addItem, removeItem, clearItem })(
  CartProduct
);
