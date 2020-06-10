import {
  addItemToCart,
  removeItemFromCart,
  calculateTotalPrice,
  clearItemFromCart,
  calculateTotalItems,
} from "./cartUtils";

const INITIAL_STATE = {
  cartItems: [],
  totalPrice: null,
  totalItems: null,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      return {
        ...state,
        cartItems: addItemToCart(action.payload, state.cartItems),
        totalPrice: calculateTotalPrice(state.cartItems),
        totalItems: calculateTotalItems(state.cartItems),
      };
    case "REMOVE_ITEM":
      return {
        ...state,
        cartItems: removeItemFromCart(action.payload, state.cartItems),
        totalPrice: calculateTotalPrice(state.cartItems),
        totalItems: calculateTotalItems(state.cartItems),
      };
    case "CLEAR_ITEM":
      return {
        ...state,
        cartItems: clearItemFromCart(action.payload, state.cartItems),
        totalPrice: calculateTotalPrice(state.cartItems),
        totalItems: calculateTotalItems(state.cartItems),
      };
    default:
      return state;
  }
};
