import React, { useState, useEffect } from "react";

import ProductsContainer from "./Products.styles";
import Product from "../product/Product.component";
import ProductsData from "./Products.data.json";

import { firestore } from "./../../firebase/firebase.utils";

const Products = (props) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    const productsRef = firestore.collection("products");

    // const snapShot = await productsRef.get();

    productsRef.onSnapshot((snapShot) => {
      const data = [];
      snapShot.docs.map((doc) => {
        const id = doc.id;
        data.push({
          id,
          ...doc.data(),
        });
      });

      setProducts(data);
    });
  };

  return (
    <ProductsContainer>
      {products.map((product) => {
        return <Product key={product.id} {...product} />;
      })}
    </ProductsContainer>
  );
};

export default Products;
