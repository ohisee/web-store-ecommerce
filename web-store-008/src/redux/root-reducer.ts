/**
 * @fileoverview root reducer
 */
import { combineReducers } from "redux";
import { RootState } from "./root-state";
import { userReducer } from "./user/user.reducer";
import { cartReducer } from "./cart/cart.reducer";

export const rootReducer = combineReducers<RootState>({
  user: userReducer,
  cart: cartReducer,
});
