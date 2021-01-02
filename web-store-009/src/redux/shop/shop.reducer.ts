/**
 * @fileoverview shop reducer 
 */
import ShopAction from "../shared/actiontype";
import { SHOP_DATA } from "./shop.data";

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
  collections: ShopData[],
}

const INITIAL_STATE: ShopState = {
  collections: SHOP_DATA
}

export function shopReducer(state: ShopState = INITIAL_STATE, action: ShopAction) {
  switch (action.type) {
    default:
      return state;
  }
}
