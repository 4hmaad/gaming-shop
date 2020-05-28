import React from "react";

import ProductContainer, {
  ImageContainer,
  DetailsContainer,
  TitleContainer,
  CategoryContainer,
  DiscountContainer,
  PriceContainer,
} from "./Product.styles";

import CustomButton from "../custom-button/CustomButton.component";

const Product = ({ title, imageUrl, price, discount, category, makers }) => (
  <ProductContainer>
    <ImageContainer src={imageUrl} alt={title} />
    <DetailsContainer>
      <TitleContainer>{title}</TitleContainer>

      <CategoryContainer>{makers}</CategoryContainer>

      {discount != "0" ? (
        <DiscountContainer>-{discount}%</DiscountContainer>
      ) : (
        ""
      )}
      <PriceContainer>${price}</PriceContainer>
    </DetailsContainer>
    <CustomButton primary inverted>
      Add to Cart
    </CustomButton>
  </ProductContainer>
);

export default Product;
