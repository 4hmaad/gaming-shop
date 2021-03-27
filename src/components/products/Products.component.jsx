import React from "react";
import ProductsContainer, { ErrorMessage } from "./Products.styles";
import Product from "../Product/Product.component";
import Spinner from "../Spinner/Spinner.component";
import { useProducts } from "utils/products";
import { useFiltersStore } from "components/Filters/Filters.component";

const Products = () => {
  const { data: products, isLoading, isError, error } = useProducts();
  const { filters } = useFiltersStore();

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <ErrorMessage>{error}</ErrorMessage>;
  }

  let filteredProducts = products
    ? products.filter(product => {
        if (filters.length === 0) return true;
        return filters.includes(product.category);
      })
    : [];

  return (
    <ProductsContainer>
      {filteredProducts.map(product => (
        <Product product={product} />
      ))}
    </ProductsContainer>
  );
};

export default Products;
