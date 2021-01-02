/**
 * @fileoverview root reducer
 */
import { combineReducers } from "redux";
import { persistReducer, PersistConfig } from "redux-persist";
// import storage from "redux-persist/lib/storage"; // local storage 
import sessionStorage from "redux-persist/lib/storage/session";
import { RootState } from "./root-state";
import { userReducer } from "./user/user.reducer";
import { cartReducer } from "./cart/cart.reducer";
import { directoryReducer } from "./directory/directory.reducer";
import { shopReducer } from "./shop/shop.reducer";

// whiteList: ["cart"] is the key name of reducer 
const persisConfig: PersistConfig<RootState> = {
  key: "root",
  storage: sessionStorage,
  whitelist: ["cart"],
};

const rootReducer = combineReducers<RootState>({
  user: userReducer,
  cart: cartReducer,
  directory: directoryReducer,
  shop: shopReducer,
});

export default persistReducer(persisConfig, rootReducer);
