import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

import { fetchProducts } from "../../redux/product/productActions";

import ProductsContainer, { SpinnerContainer } from "./Products.styles";
import Product from "../product/Product.component";

const Products = ({ fetchProducts, products }) => {
  useEffect(() => {
    fetchProducts();
  }, []);

  const renderProducts = (products) => {
    if (products.loading === false) {
      return products.data.map((product) => {
        return <Product key={product.id} {...product} />;
      });
    }

    return <SpinnerContainer />;
  };

  return <ProductsContainer>{renderProducts(products)}</ProductsContainer>;
};

const mapStateToProps = ({ products }) => {
  return {
    products,
  };
};

export default connect(mapStateToProps, {
  fetchProducts,
})(Products);
