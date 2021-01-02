/**
 * @fileoverview shop actions 
 */
import { ShopActionTypes } from "./shop.types";
import ShopAction from "../shared/actiontype";
import { firestore, convertCollectionsSnapshotToMap } from "../../firebase/firebase.utils";

export const updateCollections = (collectionsMap: any): ShopAction => {
  return {
    type: ShopActionTypes.UPDATE_COLLECTIONS,
    payload: collectionsMap,
  };
};

export const fetchCollectionsStart = (): ShopAction => {
  return {
    type: ShopActionTypes.FETCH_COLLECTIONS_START,
    payload: null,
  }
};

export const fetchCollectionsSuccess = (collectionsMap: any): ShopAction => {
  return {
    type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
    payload: collectionsMap,
  }
};

export const fetchCollectionsFailure = (errorMessage: string): ShopAction => {
  return {
    type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
    payload: errorMessage,
  }
};

type DispatchFunctionType = (param: ShopAction) => void;

/**
 * async action to fetch data from firestore 
 * @returns a function that has a dispatch parameter @see DispatchFunctionType 
 */
export const fetchCollectionsStartAsync = () => {
  return function (dispatch: DispatchFunctionType) {
    // 'collections' is the key in firestore 
    const collectionRef = firestore.collection("collections");
    dispatch(fetchCollectionsStart());

    // no longer leverage live update observable with listerner to get data 
    // returns a promise 
    collectionRef
      .get()
      .then(async (snapshot) => {
        const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
        dispatch(fetchCollectionsSuccess(collectionsMap));
      })
      .catch(error => dispatch(fetchCollectionsFailure(error.message)));
  }
};
