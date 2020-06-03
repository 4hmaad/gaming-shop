import { firestore } from "../../firebase/firebase.utils";

export const fetchProducts = () => async (dispatch) => {
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
