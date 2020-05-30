import { combineReducer } from "redux";

import userReducer from "./user/userReducer";

export default combineReducer({
  user: userReducer,
});
