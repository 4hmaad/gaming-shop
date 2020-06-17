import {
  addItemToCart,
  removeItemFromCart,
  calculateTotalPrice,
  clearItemFromCart,
  calculateTotalItems,
} from "./cartUtils";

const INITIAL_STATE = {
  cartItems: [],
  totalPrice: 0,
  totalItems: 0,
};

export default (state = INITIAL_STATE, action) => {
  const updatedState = (previousState, updatedCart) => ({
    ...previousState,
    cartItems: updatedCart,
    totalPrice: calculateTotalPrice(updatedCart),
    totalItems: calculateTotalItems(updatedCart),
  });
  let updatedCartItems;

  switch (action.type) {
    case "ADD_ITEM":
      updatedCartItems = addItemToCart(action.payload, state.cartItems);
      return updatedState(state, updatedCartItems);
    case "REMOVE_ITEM":
      updatedCartItems = removeItemFromCart(action.payload, state.cartItems);
      return updatedState(state, updatedCartItems);
    case "CLEAR_ITEM":
      updatedCartItems = clearItemFromCart(action.payload, state.cartItems);
      return updatedState(state, updatedCartItems);
    case "RESET_CART":
      return updatedState(state, []);
    default:
      return state;
  }
};
