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
