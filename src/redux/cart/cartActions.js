export const addItem = (cartItem) => {
  return {
    type: "ADD_ITEM",
    payload: cartItem,
  };
};
export const removeItem = (cartItem) => {
  return {
    type: "REMOVE_ITEM",
    payload: cartItem,
  };
};
