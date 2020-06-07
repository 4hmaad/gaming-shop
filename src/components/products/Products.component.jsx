import React, { Component } from "react";
import { connect } from "react-redux";

import { fetchProducts } from "../../redux/product/productActions";

import ProductsContainer, { SpinnerContainer } from "./Products.styles";
import Product from "../product/Product.component";

class Products extends Component {
  componentDidMount() {
    this.props.fetchProducts();
  }

  renderProducts = () => {
    const { data, filters, loading } = this.props.products;

    const productsToDisplay = data.filter((product) => {
      const productCategory = product.category.toLowerCase();

      return filters.length ? filters.includes(productCategory) : product;
    });

    if (loading === false) {
      return productsToDisplay.map((product) => {
        return <Product key={product.id} product={product} />;
      });
    }

    return <SpinnerContainer />;
  };

  render() {
    return <ProductsContainer>{this.renderProducts()}</ProductsContainer>;
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
