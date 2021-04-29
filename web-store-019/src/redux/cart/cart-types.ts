/**
 * @fileoverview cart types
 */

type ActionTypes = {
  TOGGLE_CART_HIDDEN: string,
  ADD_ITEM: string,
  REMOVE_ITEM: string,
  CLEAR_ITEM_FROMT_CART: string,
  CLEAR_CART: string,
  SET_CART_ITEMS_FROM_FIRESTORE: string,
};

export const CartActionTypes: Readonly<ActionTypes> = {
  TOGGLE_CART_HIDDEN: "[action]_toggle_cart_hidden",
  ADD_ITEM: "[action]_add_item",
  REMOVE_ITEM: "[action]_remove_item",
  CLEAR_ITEM_FROMT_CART: "[action]_clear_item_from_cart",
  CLEAR_CART: "[action]_clear_cart",
  SET_CART_ITEMS_FROM_FIRESTORE: "[action]_set_cart_items_from_firestore",
};
