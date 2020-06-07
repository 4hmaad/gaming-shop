import { addItemToCart, removeItemFromCart } from "./cartUtils";

const INITIAL_STATE = {
  cartItems: [],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      return {
        ...state,
        cartItems: addItemToCart(action.payload, state.cartItems),
      };
    case "REMOVE_ITEM":
      return {
        ...state,
        cartItems: removeItemFromCart(action.payload, state.cartItems),
      };
    default:
      return state;
  }
};
