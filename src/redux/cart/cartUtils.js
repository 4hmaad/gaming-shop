export const addItemToCart = (itemToAdd, cartItems) => {
  const itemAlreadyExists = cartItems.find((item) => item.id === itemToAdd.id);

  if (itemAlreadyExists) {
    if (itemToAdd.price === 0) return cartItems;

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

export const clearItemFromCart = (itemToRemove, cartItems) => {
  return cartItems.filter((item) => item.id !== itemToRemove.id);
};

export const calculateTotalPrice = (cartItems) => {
  return cartItems.reduce((totalPrice, currentItem) => {
    const price = +(
      totalPrice +
      currentItem.price * currentItem.quantity
    ).toFixed(2);
    return price;
  }, 0);
};

export const calculateTotalItems = (cartItems) => {
  return cartItems.reduce(
    (totalItems, currentItem) => totalItems + currentItem.quantity,
    0
  );
};
