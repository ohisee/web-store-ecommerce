/**
 * @fileoverview cart action using redux saga 
 */
import { all, call, takeLatest, put } from "redux-saga/effects";
import { UserActionTypes } from "../user/user.types";
import { clearCart } from "./cart.actions";

/**
 * @generator clear cart on sign out 
 */
function* clearCartOnSignOut() {
  yield put(clearCart());
}

/**
 * @generator takeLast sign out 
 */
export function* onSignOutSuccess() {
  yield takeLatest(UserActionTypes.SIGN_OUT_SUCCESS, clearCartOnSignOut);
}

/**
 * @generator initialize cart sagas 
 */
export function* cartSagas() {
  yield all([
    call(onSignOutSuccess),
  ]);
}
