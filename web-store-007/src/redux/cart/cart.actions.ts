/**
 * @fileoverview cart action
 */
import CartAction from "../shared/actiontype";
import { CartTypes } from "./cart-types";

export const toggleCartHidden = (): CartAction => {
  return {
    type: CartTypes.TOGGLE_CART_HIDDEN,
    payload: true
  }
};

export const addItem = (item: any): CartAction => {
  return {
    type: CartTypes.ADD_ITEM,
    payload: item,
  }
};
