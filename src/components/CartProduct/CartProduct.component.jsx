import { useCartStore } from "components/Cart/Cart.component";
import React from "react";
import CartProductContainer, {
  ImageContainer,
  TitleContainer,
  TextContainer,
  IconButton
} from "./CartProduct.styles";

const CartProduct = props => {
  const { title, imageUrl, price, quantity } = props.product;
  const { addItem, removeItem, clearItem } = useCartStore();

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

export default CartProduct;
