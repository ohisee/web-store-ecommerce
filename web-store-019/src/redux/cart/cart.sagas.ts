/**
 * @fileoverview cart action using redux saga 
 */
import { all, call, takeLatest, put, select } from "redux-saga/effects";
import { UserActionTypes, CurrentUserSnapshot } from "../user/user.types";
import { clearCart, setCartItemsFromFirestore } from "./cart.actions";
import CartAction from "../shared/actiontype";
import firebase, { getUserCartRef } from "../../firebase/firebase.utils";
import { selectCurrentUser } from "../user/user.selectors";
import { selectCartItems } from "./cart.selectors";
import { CartActionTypes } from "./cart-types";

/**
 * @generator clear cart on sign out 
 */
function* clearCartOnSignOut() {
  yield put(clearCart());
}

/**
 * @generator check cart items from firestore when sign in success 
 */
function* checkCartFromFirestore({ payload }: CartAction) {
  const user = payload as CurrentUserSnapshot;
  try {
    const cartDocRef: firebase.firestore.DocumentReference = yield getUserCartRef(user.id);
    const cartData: firebase.firestore.DocumentData = yield cartDocRef.get();
    yield put(setCartItemsFromFirestore(cartData.data().cartItems));
  } catch (e) {
    yield put(setCartItemsFromFirestore([]));
  }
}

/**
 * @generator when user has signed in, update cart items in firestore when 
 * adding an item, removing an item (when decreasing item's quantity by one) 
 * or clear an item from cart 
 * 
 * when user has not signed in, there is no action triggered to update firestore
 * 
 * use redux saga effect's select with selector from reselect to get the 
 * current user and cart items 
 * @see selectCurrentUser 
 * @see selectCartItems 
 */
function* updateCartItemsInFirestore() {
  const currentUser: CurrentUserSnapshot | null = yield select(selectCurrentUser);
  if (currentUser) {
    try {
      const cartItems = yield select(selectCartItems);
      const cartRef: firebase.firestore.DocumentReference = yield getUserCartRef(currentUser.id);
      cartRef.update({ cartItems });
    } catch (e) {
      console.log("Failed to update your shopping cart");
    }
  }
}

/**
 * @generator takeLast sign out 
 */
function* onSignOutSuccess() {
  yield takeLatest(UserActionTypes.SIGN_OUT_SUCCESS, clearCartOnSignOut);
}

/**
 * sign in success action returns a payload object 
 * @see import("../user/user.actions").signInSuccess
 * @generator takeLatest sign in success action 
 */
function* onSignInSuccess() {
  yield takeLatest(UserActionTypes.SIGN_IN_SUCCESS, checkCartFromFirestore);
}

/**
 * @generator on cart items change 
 */
function* onCartItemsChange() {
  yield takeLatest([
    CartActionTypes.ADD_ITEM,
    CartActionTypes.REMOVE_ITEM,
    CartActionTypes.CLEAR_ITEM_FROMT_CART,
  ], updateCartItemsInFirestore);
}

/**
 * @generator initialize cart sagas 
 */
export function* cartSagas() {
  yield all([
    call(onSignInSuccess),
    call(onSignOutSuccess),
    call(onCartItemsChange),
  ]);
}
