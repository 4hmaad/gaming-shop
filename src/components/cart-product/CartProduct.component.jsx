import React from "react";

import CartProductContainer, {
  ImageContainer,
  TitleContainer,
  OptionContainer,
  ArrowIconContainer,
  CloseIconContainer,
} from "./CartProduct.styles";

const CartProduct = () => {
  return (
    <CartProductContainer>
      <ImageContainer
        src="https://cdn1.epicgames.com/ba8062bdcc1342c0b78743e3c6242575/offer/JC4-Reloaded-860x1148-860x1148-145b58e1d3d597871b8585f824540c57-860x1148-145b58e1d3d597871b8585f824540c57.jpg?h=854&resize=1&w=640"
        alt="game"
      />
      <TitleContainer>Just Cause 4</TitleContainer>
      <OptionContainer>
        <ArrowIconContainer
          onClick={() => console.log("Back is clicked")}
          left
        />
        4
        <ArrowIconContainer onClick={() => console.log("Next is clicked")} />
      </OptionContainer>
      <OptionContainer>$19.99</OptionContainer>
      <OptionContainer>✕</OptionContainer>
    </CartProductContainer>
  );
};

export default CartProduct;
