import { firestore } from "./../../firebase/firebase.utils";

export const fetchOrder = (id) => async (dispatch) => {
  dispatch({ type: "FETCHING_ORDER" });

  try {
    const orderRef = firestore.collection("orders").doc(id);
    const snapShot = await orderRef.get();
    if (snapShot.exists) {
      const data = snapShot.data();
      dispatch({ type: "FETCHED_ORDER", payload: data });
    } else {
      throw new Error(`Couldn't find order with the id ${id}`);
    }
  } catch (e) {
    console.error(e.message);
    dispatch({ type: "ORDER_ERROR", payload: e.message });
  }
};

export const saveOrder = (order) => async (dispatch) => {
  dispatch({ type: "SAVING_ORDER" });

  try {
    const abc = await firestore
      .collection("orders")
      .doc(order.token.id)
      .set({
        ...order,
      });

    console.log(abc);
  } catch (e) {
    console.error(e.message);
    dispatch({ type: "ORDER_ERROR", payload: e.message });
    return false;
  }

  dispatch({ type: "SAVED_ORDER", payload: order });
  return true;
};
