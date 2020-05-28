import React, { useState, useEffect } from "react";

import ProductsContainer from "./Products.styles";
import Product from "../product/Product.component";
import ProductsData from "./Products.data.json";

const Products = (props) => {
  const [products, setProducts] = useState(ProductsData);

  return (
    <ProductsContainer>
      {products.map((product) => {
        return <Product key={product.id} {...product} />;
      })}
    </ProductsContainer>
  );
};

export default Products;
