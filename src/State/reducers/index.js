import { combineReducers } from "redux";
import cartReducer from "./cartReducer";
import productReducer from "./productReducer";
import usersReducer from "./usersReducer";

const reducers = combineReducers({
  products: productReducer,
  users: usersReducer,
  cart: cartReducer,
});

export default reducers;
