import React from "react";
import { useCartStore } from "../Cart/Cart.component";
import ProductContainer, {
  ImageContainer,
  DetailsContainer,
  TitleContainer,
  CategoryContainer,
  DiscountContainer,
  PriceContainer
} from "./Product.styles";
import CustomButton from "../CustomButton/CustomButton.component";

const Product = props => {
  const { items: cartItems, addItem, clearItem } = useCartStore();

  const { title, imageUrl, price, discount, developer } = props.product;
  const isAddedToCart = cartItems.find(({ id }) => id === props.product.id);

  return (
    <ProductContainer>
      <ImageContainer src={imageUrl} alt={title} />
      <DetailsContainer>
        <TitleContainer>{title}</TitleContainer>

        <CategoryContainer>{developer}</CategoryContainer>

        {discount !== 0 ? (
          <DiscountContainer>-{discount}%</DiscountContainer>
        ) : (
          ""
        )}
        <PriceContainer>
          {parseFloat(price) > 0 ? `$${price}` : "FREE"}
        </PriceContainer>
      </DetailsContainer>

      {isAddedToCart ? (
        <CustomButton primary onClick={() => clearItem(props.product)}>
          Added
        </CustomButton>
      ) : (
        <CustomButton primary inverted onClick={() => addItem(props.product)}>
          Add to Cart
        </CustomButton>
      )}
    </ProductContainer>
  );
};

export default Product;
