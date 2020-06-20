import React from "react";
import PropTypes from "prop-types";

import { connect } from "react-redux";

import { addItem, clearItem } from "./../../redux/cart/cartActions";

import ProductContainer, {
  ImageContainer,
  DetailsContainer,
  TitleContainer,
  CategoryContainer,
  DiscountContainer,
  PriceContainer,
} from "./Product.styles";

import CustomButton from "../custom-button/CustomButton.component";

const Product = (props) => {
  /** Actions */
  const { addItem, clearItem } = props;
  /** Current Product */
  const { product } = props;
  /** Cart State */
  const {
    cart: { cartItems },
  } = props;

  const { title, imageUrl, price, discount, developer } = product;

  /** checks if a product is added to cart */
  const isAddedToCart = cartItems.find(({ id }) => id === product.id);

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
        <CustomButton primary onClick={() => clearItem(product)}>
          Added
        </CustomButton>
      ) : (
        <CustomButton primary inverted onClick={() => addItem(product)}>
          Add to Cart
        </CustomButton>
      )}
    </ProductContainer>
  );
};

Product.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    developer: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    discount: PropTypes.number.isRequired,
  }).isRequired,

  cart: PropTypes.shape({
    cartItems: PropTypes.array.isRequired,
  }).isRequired,

  addItem: PropTypes.func.isRequired,
  clearItem: PropTypes.func.isRequired,
};

const mapStateToProps = ({ cart }) => {
  return {
    cart,
  };
};
export default connect(mapStateToProps, { addItem, clearItem })(Product);
