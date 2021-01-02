/**
 * @fileoverview shop actions 
 */
import { ShopActionTypes } from "./shop.types";
import ShopAction from "../shared/actiontype";

export const updateCollections = (collectionsMap: any): ShopAction => {
  return {
    type: ShopActionTypes.UPDATE_COLLECTIONS,
    payload: collectionsMap,
  };
};
