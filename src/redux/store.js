import { createStore, applyMiddleware, compose } from "redux";
import { persistStore } from "redux-persist";

import thunk from "redux-thunk";
import logger from "redux-logger";

import reducers from "./rootReducer";

const middlewareArray = [logger, thunk];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(...middlewareArray))
);

const persistor = persistStore(store);

export { store, persistor };
