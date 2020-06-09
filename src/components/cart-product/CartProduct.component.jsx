import React from "react";

import CartProductContainer, {
  ImageContainer,
  TitleContainer,
  TextContainer,
  IconButton,
} from "./CartProduct.styles";

const CartProduct = ({ title, imageUrl, price, quantity }) => {
  return (
    <CartProductContainer>
      <ImageContainer src={imageUrl} alt={title} />
      <TitleContainer>{title}</TitleContainer>
      <TextContainer>
        <IconButton left>❮</IconButton>
        {quantity}
        <IconButton>❯</IconButton>
      </TextContainer>
      <TextContainer>{`$${price}`}</TextContainer>
      <TextContainer>
        <IconButton>✕</IconButton>
      </TextContainer>
    </CartProductContainer>
  );
};

export default CartProduct;
