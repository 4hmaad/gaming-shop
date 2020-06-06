import React, { Component } from "react";
import { connect } from "react-redux";

import { fetchProducts } from "../../redux/product/productActions";

import ProductsContainer, { SpinnerContainer } from "./Products.styles";
import Product from "../product/Product.component";

class Products extends Component {
  componentDidMount() {
    this.props.fetchProducts();
  }

  renderProducts = (products) => {
    if (products.loading === false) {
      return products.data.map((product) => {
        return <Product key={product.id} {...product} />;
      });
    }

    return <SpinnerContainer />;
  };

  render() {
    return (
      <ProductsContainer>
        {this.renderProducts(this.props.products)}
      </ProductsContainer>
    );
  }
}

const mapStateToProps = ({ products }) => {
  return {
    products,
  };
};

export default connect(mapStateToProps, {
  fetchProducts,
})(Products);
