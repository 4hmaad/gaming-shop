import { createStore, applyMiddleware, compose } from "redux";

import thunk from "redux-thunk";
import logger from "redux-logger";

import reducers from "./user/userReducer";

const middlewareArray = [logger, thunk];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(...middlewareArray))
);

export default store;
