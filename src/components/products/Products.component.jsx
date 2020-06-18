import React, { Component } from "react";
import { connect } from "react-redux";

import { fetchProducts } from "../../redux/product/productActions";

import ProductsContainer, { ErrorMessage } from "./Products.styles";
import Product from "../product/Product.component";
import Spinner from "../spinner/Spinner.component";

class Products extends Component {
  componentDidMount() {
    this.props.fetchProducts();
  }

  renderProducts = () => {
    const { data, filters, loading, searchQuery } = this.props.products;
    var productsToDisplay;

    if (searchQuery) {
      productsToDisplay = data.filter((product) => {
        const searchCondition = [
          ...product.title.toLowerCase().split(" "),
          ...product.developer.toLowerCase().split(" "),
        ];

        const doesExist = searchQuery
          .toLowerCase()
          .split(" ")
          .find((word) => searchCondition.includes(word));

        return doesExist ? true : false;
      });
    } else {
      productsToDisplay = data.filter((product) => {
        const productCategory = product.category.toLowerCase();

        return filters.length ? filters.includes(productCategory) : product;
      });
    }

    if (loading === false && productsToDisplay.length) {
      return productsToDisplay.map((product) => {
        return <Product key={product.id} product={product} />;
      });
    } else if (loading === false && !productsToDisplay.length) {
      return <ErrorMessage> No Games Found </ErrorMessage>;
    }

    return <Spinner />;
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
