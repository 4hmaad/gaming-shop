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

const Product = ({ title, imageUrl, price, discount, category, developer }) => (
  <ProductContainer>
    <ImageContainer src={imageUrl} alt={title} />
    <DetailsContainer>
      <TitleContainer>{title}</TitleContainer>

      <CategoryContainer>{developer}</CategoryContainer>

      {discount != "0" ? (
        <DiscountContainer>-{discount}%</DiscountContainer>
      ) : (
        ""
      )}
      <PriceContainer>
        {parseFloat(price) > 0 ? `$${price}` : "FREE"}
      </PriceContainer>
    </DetailsContainer>
    <CustomButton primary inverted>
      Add to Cart
    </CustomButton>
  </ProductContainer>
);

export default Product;
