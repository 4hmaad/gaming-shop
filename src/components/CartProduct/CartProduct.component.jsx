import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { addItem, removeItem, clearItem } from "./../../redux/cart/cartActions";

import CartProductContainer, {
  ImageContainer,
  TitleContainer,
  TextContainer,
  IconButton,
} from "./CartProduct.styles";

const CartProduct = (props) => {
  /** Actions */
  const { addItem, removeItem, clearItem } = props;
  /** The passed product */
  const { title, imageUrl, price, quantity } = props.product;

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

CartProduct.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired,
  }).isRequired,

  addItem: PropTypes.func.isRequired,
  removeItem: PropTypes.func.isRequired,
  clearItem: PropTypes.func.isRequired,
};

export default connect(null, { addItem, removeItem, clearItem })(CartProduct);
