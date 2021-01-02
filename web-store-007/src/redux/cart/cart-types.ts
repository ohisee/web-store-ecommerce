/**
 * @fileoverview cart types
 */

type ActionTypes = {
  TOGGLE_CART_HIDDEN: string,
  ADD_ITEM: string,
};

export const CartTypes: Readonly<ActionTypes> = {
  TOGGLE_CART_HIDDEN: "[action]_toggle_cart_hidden",
  ADD_ITEM: "[action]_add_item",
};
