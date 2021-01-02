/**
 * @fileoverview root state 
 */
import { UserState } from "./user/user.reducer";
import { CartState } from "./cart/cart.reducer";

export interface RootState {
  user: UserState,
  cart: CartState,
}
