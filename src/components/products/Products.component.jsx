import React, { useEffect } from "react";
import PropTypes from "prop-types";

import { connect } from "react-redux";

import { fetchProducts } from "../../redux/product/productActions";

import ProductsContainer, { ErrorMessage } from "./Products.styles";
import Product from "../product/Product.component";
import Spinner from "../spinner/Spinner.component";

const Products = (props) => {
  /** Actions */
  const { fetchProducts } = props;
  /** Products' State */
  const { products } = props;

  useEffect(() => {
    if (!products.data.length) {
      fetchProducts();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const renderProducts = () => {
    const { data, filters, loading, searchQuery } = products;
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
      return <ErrorMessage>No Games Found.</ErrorMessage>;
    }

    return <Spinner />;
  };

  return <ProductsContainer>{renderProducts()}</ProductsContainer>;
};

Products.propTypes = {
  products: PropTypes.exact({
    data: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired,
    filters: PropTypes.array.isRequired,
    searchQuery: PropTypes.string,
  }).isRequired,
  fetchProducts: PropTypes.func.isRequired,
};

const mapStateToProps = ({ products }) => {
  return {
    products,
  };
};

export default connect(mapStateToProps, {
  fetchProducts,
})(Products);
