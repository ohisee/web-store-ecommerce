/**
 * @fileoverview shop action types 
 */
type ActionTypes = {
  UPDATE_COLLECTIONS: string,
  FETCH_COLLECTIONS_START: string,
  FETCH_COLLECTIONS_SUCCESS: string,
  FETCH_COLLECTIONS_FAILURE: string,
};

export const ShopActionTypes: Readonly<ActionTypes> = {
  UPDATE_COLLECTIONS: "[action]_update_collections",
  FETCH_COLLECTIONS_START: "[action]_fetch_collections_start",
  FETCH_COLLECTIONS_SUCCESS: "[action]_fetch_collections_success",
  FETCH_COLLECTIONS_FAILURE: "[action]_fetch_collections_failure",
};
