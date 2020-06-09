export const addItemToCart = (itemToAdd, cartItems) => {
  const itemAlreadyExists = cartItems.find((item) => item.id === itemToAdd.id);

  if (itemAlreadyExists) {
    return cartItems.map((item) =>
      item.id === itemToAdd.id ? { ...item, quantity: item.quantity + 1 } : item
    );
  }

  return [...cartItems, { ...itemToAdd, quantity: 1 }];
};

export const removeItemFromCart = (itemToRemove, cartItems) => {
  const existingCartItem = cartItems.find(
    (item) => item.id === itemToRemove.id
  );

  if (existingCartItem.quantity === 1) {
    return cartItems.filter((item) => item.id !== existingCartItem.id);
  }

  return cartItems.map((item) =>
    item.id === itemToRemove.id
      ? { ...item, quantity: item.quantity - 1 }
      : item
  );
};

export const calculateTotalPrice = (cartItems) => {
  return cartItems.reduce(
    (totalPrice, currentItem) => totalPrice + currentItem.price,
    0
  );
};

export const calculateTotalItems = (cartItems) => {
  return cartItems.reduce(
    (totalItems, currentItem) => totalItems + currentItem.quantity,
    0
  );
};
