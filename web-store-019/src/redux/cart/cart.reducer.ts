/**
 * @fileoverview cart reducer 
 */
import CartAction from "../shared/actiontype";
import { CartActionTypes } from "./cart-types";
import { addItemToCart, removeItemFromCart } from "./cart.utils";

export interface CartState {
  hidden: boolean,    // hide or show cart drop down selection list 
  cartItems: any[],   // items in shopping cart 
}

const INITIAL_STATE: CartState = {
  hidden: true,
  cartItems: []
};

/**
 * cart reducer 
 * @param state cart state 
 * @param action cart action 
 */
export function cartReducer(state: CartState = INITIAL_STATE, action: CartAction): CartState {
  switch (action.type) {
    case CartActionTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden,
      };
    case CartActionTypes.ADD_ITEM:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload),
      };
    case CartActionTypes.REMOVE_ITEM:
      return {
        ...state,
        cartItems: removeItemFromCart(state.cartItems, action.payload),
      };
    case CartActionTypes.CLEAR_ITEM_FROMT_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (cartItem: any) => cartItem.id !== action.payload.id),
      };
    case CartActionTypes.CLEAR_CART:
      return {
        ...state,
        cartItems: [],
      };
    case CartActionTypes.SET_CART_ITEMS_FROM_FIRESTORE:
      return {
        ...state,
        cartItems: action.payload,
      }
    default:
      return state;
  }
}
