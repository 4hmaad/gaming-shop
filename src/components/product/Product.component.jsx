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

const Product = () => (
  <ProductContainer>
    <ImageContainer
      src="https://cdn1.epicgames.com/0584d2013f0149a791e7b9bad0eec102/offer/GTAV_EGS_Artwork_1200x1600_Portrait%20Store%20Banner-1200x1600-382243057711adf80322ed2aeea42191.jpg?h=854&resize=1&w=640"
      alt="game"
    />
    <DetailsContainer>
      <TitleContainer>Grand Theft Auto: V</TitleContainer>

      <CategoryContainer>Action</CategoryContainer>
      <DiscountContainer>-50%</DiscountContainer>
      <PriceContainer>$15</PriceContainer>
    </DetailsContainer>
    <CustomButton primary inverted>
      Add to Cart
    </CustomButton>
  </ProductContainer>
);

export default Product;
