/**
 * @fileoverview shop redux selector 
 */
import { createSelector } from "reselect";
import { RootState } from "../root-state";

// const COLLECTION_ID_MAP: { [key: string]: number } = {
//   hats: 1,
//   sneakers: 2,
//   jackets: 3,
//   womens: 4,
//   mens: 5
// };

const selectShop = (state: RootState) => state.shop;

export const selectShopCollections = createSelector(
  [selectShop],
  (shopState) => shopState.collections,
);

export const selectCollectionsForPreview = createSelector(
  [selectShop],
  (shopState) => Object.keys(shopState.collections).map(
    key => shopState.collections[key]),
);

export const selectCollection = (collectionUrlParam: string) => {
  return createSelector(
    [selectShopCollections],
    (collections) =>
      // collections.find(
      //   collection => collection.id === COLLECTION_ID_MAP[collectionUrlParam]),
      collections[collectionUrlParam],
  );
};
