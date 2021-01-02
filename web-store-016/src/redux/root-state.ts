/**
 * @fileoverview root state 
 */
import { UserState } from "./user/user.reducer";
import { CartState } from "./cart/cart.reducer";
import { DirectorState } from "./directory/directory.reducer";
import { ShopState } from "./shop/shop.reducer";

export interface RootState {
  user: UserState,
  cart: CartState,
  directory: DirectorState,
  shop: ShopState,
}
