import { firestore } from "./../../firebase/firebase.utils";

const loadingOrder = () => ({
  type: "LOADING_ORDER",
});

const errorOrder = (err) => ({
  type: "ERROR_ORDER",
  payload: err.message,
});

export const fetchOrder = (id) => async (dispatch) => {
  const fetchOrderAction = (data) => ({
    type: "FETCH_ORDER",
    payload: data,
  });

  dispatch(loadingOrder());

  const orderRef = firestore.collection("orders").doc(id);
  orderRef
    .get()
    .then((snapShot) => {
      if (snapShot.exists) {
        const data = snapShot.data();
        dispatch(fetchOrderAction(data));
      } else throw new Error(`Couldn't find order with the id ${id}`);
    })
    .catch((err) => {
      console.error(err.message);
      dispatch(errorOrder(err.message));
    });
};

export const saveOrder = (order) => async (dispatch) => {
  const saveOrderAction = (order) => ({
    type: "SAVE_ORDER",
    payload: order,
  });

  return firestore
    .collection("orders")
    .doc(order.token.id)
    .set({
      ...order,
    })
    .then(() => {
      dispatch(saveOrderAction(order));
    })
    .catch((err) => {
      dispatch(errorOrder(err));
    });
};
