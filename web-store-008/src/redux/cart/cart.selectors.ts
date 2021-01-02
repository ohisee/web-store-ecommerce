/**
 * @fileoverview cart redux selector
 */
import { createSelector } from "reselect";
import { RootState } from "../root-state";

const selectCart = (state: RootState) => state.cart;

// go to selectCart
export const selectCartItems = createSelector(
  [selectCart],
  (cartState) => cartState.cartItems,
);

// go to selectCartItems
export const selectCartItemsCount = createSelector(
  [selectCartItems],
  (cartItems: any[]) =>
    cartItems.reduce(
      (accumlatedQuantity, cur) => accumlatedQuantity + cur.quantity, 0)
);

export const selectCartHidden = createSelector(
  [selectCart],
  (cartState) => cartState.hidden,
);

export const selectCartTotal = createSelector(
  [selectCartItems],
  (cartItems: any[]) => cartItems.reduce(
    (accumlatedPrice, cur) => accumlatedPrice + cur.quantity * cur.price, 0)
);
