/**
 * @fileoverview shop action using redux saga middleware
 */
import { all, call, takeLatest, put } from "redux-saga/effects";
import { ShopActionTypes } from "./shop.types";
import { firestore, convertCollectionsSnapshotToMap } from "../../firebase/firebase.utils";
import { fetchCollectionsSuccess, fetchCollectionsFailure } from "./shop.actions";
import ShopAction from "../shared/actiontype";

/**
 * @generator fetch collections from firestore async using redux saga 
 */
function* fetchCollectionsAsync() {
  try {
    // 'collections' is the key in firestore 
    const collectionRef = firestore.collection("collections");
    // yield to redux saga middleware 
    const snapshot = yield collectionRef.get();
    // we need to yield convertCollectionsSnapshotToMap in case this function 
    // takes longer than expected to get the response 
    // redux saga call (some function as 1st parameter, some argument as 2nd parameter)
    const collectionsMap = yield call(convertCollectionsSnapshotToMap, snapshot);
    // redux saga put just dispatches one Action object  
    yield put<ShopAction>(fetchCollectionsSuccess(collectionsMap));
  } catch (error) {
    yield put<ShopAction>(fetchCollectionsFailure(error.message));
  }
}

/**
 * take latest action from @see shoppage.component 
 * @generator start redux saga when seeing FETCH_COLLECTIONS_START action in 
 * the store @see shop.reducer and @see store where 
 * this generator is used in sagaMiddleware.run
 */
export function* fetchCollectionsStart() {
  yield takeLatest(
    ShopActionTypes.FETCH_COLLECTIONS_START,
    fetchCollectionsAsync);
}

/**
 * @generator initialize shop sagas 
 */
export function* shopSagas() {
  yield all([
    call(fetchCollectionsStart),
  ]);
}
