/**
 * @fileoverview cart action
 */
import CartAction from "../shared/actiontype";
import { CartActionTypes } from "./cart-types";

export const toggleCartHidden = (): CartAction => {
  return {
    type: CartActionTypes.TOGGLE_CART_HIDDEN,
    payload: true
  }
};

export const addItem = (item: any): CartAction => {
  return {
    type: CartActionTypes.ADD_ITEM,
    payload: item,
  }
};

export const removeItem = (item: any): CartAction => {
  return {
    type: CartActionTypes.REMOVE_TIEM,
    payload: item,
  };
};

export const clearItemFromCart = (item: any): CartAction => {
  return {
    type: CartActionTypes.CLEAR_ITEM_FROMT_CART,
    payload: item,
  }
};

export const clearCart = (): CartAction => ({
  type: CartActionTypes.CLEAR_CART,
  payload: null,
})
