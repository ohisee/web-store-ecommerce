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
  collections: { [key: string]: ShopData } | null,
  isFetching: boolean,
  errorMessage: string | undefined,
}

const INITIAL_STATE: ShopState = {
  // collections: SHOP_DATA,
  collections: null,
  isFetching: false,
  errorMessage: undefined,
}

/**
 * Shop action reducer 
 * @param state shop state 
 * @param action shop action 
 * @returns initial state or updated shop state 
 */
export function shopReducer(state: ShopState = INITIAL_STATE, action: ShopAction): ShopState {
  switch (action.type) {
    // case ShopActionTypes.UPDATE_COLLECTIONS:
    //   return {
    //     ...state,
    //     collections: action.payload,
    //   };
    case ShopActionTypes.FETCH_COLLECTIONS_START:
      return {
        ...state,
        isFetching: true,
      };
    case ShopActionTypes.FETCH_COLLECTIONS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        collections: action.payload,
      };
    case ShopActionTypes.FETCH_COLLECTIONS_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload,
      }
    default:
      return state;
  }
}
