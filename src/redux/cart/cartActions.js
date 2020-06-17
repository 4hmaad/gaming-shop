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
export const clearItem = (cartItem) => {
  return {
    type: "CLEAR_ITEM",
    payload: cartItem,
  };
};

export const resetCart = (cartItem) => {
  return {
    type: "RESET_CART",
  };
};
