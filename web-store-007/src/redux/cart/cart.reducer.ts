/**
 * @fileoverview cart reducer 
 */
import CartAction from "../shared/actiontype";
import { CartTypes } from "./cart-types";
import { addItemToCart } from "./cart.utils";

export interface CartState {
  hidden: boolean,    // hide or show cart drop down selection list 
  cartItems: any[],   // items in shopping cart 
}

const INITIAL_STATE: CartState = {
  hidden: true,
  cartItems: []
};

export function cartReducer(state: CartState = INITIAL_STATE, action: CartAction) {
  switch (action.type) {
    case CartTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden
      }
    case CartTypes.ADD_ITEM:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload)
      }
    default:
      return state;
  }
}
