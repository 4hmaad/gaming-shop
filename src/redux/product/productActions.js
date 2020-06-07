import { firestore } from "../../firebase/firebase.utils";

export const fetchProducts = () => (dispatch) => {
  dispatch({ type: "FETCHING_PRODUCTS" });

  const productRef = firestore.collection("products");

  productRef.onSnapshot((snapShot) => {
    const productsData = snapShot.docs.map((doc) => {
      const id = doc.id;
      return {
        id,
        ...doc.data(),
      };
    });

    dispatch({ type: "FETCHED_PRODUCTS", payload: productsData });
  });
};

export const addFilter = (category) => ({
  type: "ADD_FILTER",
  payload: category,
});

export const removeFilter = (category) => ({
  type: "REMOVE_FILTER",
  payload: category,
});
