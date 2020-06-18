import { combineReducers } from "redux";

import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import userReducer from "./user/userReducer";
import productReducer from "./product/productReducer";
import cartReducer from "./cart/cartReducer";
import orderReducer from "./order/orderReducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"],
};

const rootReducer = combineReducers({
  user: userReducer,
  products: productReducer,
  cart: cartReducer,
  order: orderReducer,
});

export default persistReducer(persistConfig, rootReducer);
