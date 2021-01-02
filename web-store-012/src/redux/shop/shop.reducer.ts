/**
 * @fileoverview shop reducer 
 */
import ShopAction from "../shared/actiontype";
import { SHOP_DATA } from "./shop.data";
import { ShopActionTypes } from "./shop.types";

interface Item {
  id: number,
  name: string,
  imageUrl: string,
  price: number,
}

interface ShopData {
  id: number,
  title: string,
  routeName: string,
  items: Item[],
}

export interface ShopState {
  collections: { [key: string]: ShopData },
}

const INITIAL_STATE: ShopState = {
  collections: SHOP_DATA
}

export function shopReducer(state: ShopState = INITIAL_STATE, action: ShopAction) {
  switch (action.type) {
    case ShopActionTypes.UPDATE_COLLECTIONS:
      return {
        ...state,
        collections: action.payload,
      };
    default:
      return state;
  }
}
