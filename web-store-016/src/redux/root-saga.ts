/**
 * @fileoverview root saga 
 */
import { all, call } from "redux-saga/effects";
import { cartSagas } from "./cart/cart.sagas";
import { shopSagas } from "./shop/shop.sagas";
import { userSagas } from "./user/user.sagas";

/**
 * @generator root saga generator
 * 
 * all allows to initialize saga side by side, concurrently, on separate stream 
 * 
 * but individual yield waits for previous yield to 
 * finish before start any following yield 
 */
function* rootSaga() {
  yield all([
    call(shopSagas),
    call(userSagas),
    call(cartSagas),
  ]);
}

export default rootSaga;
