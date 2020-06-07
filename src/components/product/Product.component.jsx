import React from "react";
import { connect } from "react-redux";

import { addItem } from "./../../redux/cart/cartActions";

import ProductContainer, {
  ImageContainer,
  DetailsContainer,
  TitleContainer,
  CategoryContainer,
  DiscountContainer,
  PriceContainer,
} from "./Product.styles";

import CustomButton from "../custom-button/CustomButton.component";

const Product = ({ product, addItem }) => {
  const { title, imageUrl, price, discount, developer } = product;

  return (
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
      <CustomButton primary inverted onClick={() => addItem(product)}>
        Add to Cart
      </CustomButton>
    </ProductContainer>
  );
};
export default connect(null, { addItem })(Product);
