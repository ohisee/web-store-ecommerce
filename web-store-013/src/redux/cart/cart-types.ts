/**
 * @fileoverview cart types
 */

type ActionTypes = {
  TOGGLE_CART_HIDDEN: string,
  ADD_ITEM: string,
  REMOVE_TIEM: string,
  CLEAR_ITEM_FROMT_CART: string,
};

export const CartActionTypes: Readonly<ActionTypes> = {
  TOGGLE_CART_HIDDEN: "[action]_toggle_cart_hidden",
  ADD_ITEM: "[action]_add_item",
  REMOVE_TIEM: "[action]_remove_item",
  CLEAR_ITEM_FROMT_CART: "[action]_clear_item_from_cart",
};
