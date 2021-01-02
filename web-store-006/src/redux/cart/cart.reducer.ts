/**
 * @fileoverview cart reducer 
 */
import CartAction from "../shared/actiontype";
import { CartTypes } from "./cart-types";

export interface CartState {
  hidden: boolean,
}

const INITIAL_STATE: CartState = {
  hidden: true,
};

export function cartReducer(state: CartState = INITIAL_STATE, action: CartAction) {
  switch (action.type) {
    case CartTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden
      }
    default:
      return state;
  }
}
