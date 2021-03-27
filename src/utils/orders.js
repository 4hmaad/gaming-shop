import { queryClient } from "context/index";
import { firestore } from "firebase/firebase.utils";
import { useMutation, useQuery } from "react-query";

export const useSaveOrderMutation = (options = {}) => {
  const result = useMutation(
    order =>
      saveOrder(order).then(data => {
        queryClient.setQueryData(["order", order.token.id], order);
        return data;
      }),
    options
  );
  result.saveOrder = result.mutate;
  return result;
};

export const useOrder = orderId => {
  return useQuery(["order", orderId], () => fetchOrder(orderId));
};

const fetchOrder = id => {
  const orderRef = firestore.collection("orders").doc(id);
  return orderRef.get().then(snapShot => {
    if (snapShot.exists) {
      const data = snapShot.data();
      return data;
    } else throw new Error(`Couldn't find order with the id ${id}`);
  });
};

const saveOrder = order => {
  return firestore
    .collection("orders")
    .doc(order.token.id)
    .set({
      ...order
    });
};
