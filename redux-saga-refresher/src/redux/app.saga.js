/**
 * @fileoverview redux saga 
 */
import { take, takeLatest, takeEvery, delay, put } from "redux-saga/effects";
import { AppActionTypes } from "./app.actiontypes";

/**
 * @generator take 
 */
export function* incrementSagaTake() {
  yield take(AppActionTypes.INCREMENT_BY_10); // just one call 
  console.log("------- incremented --------");
}

/**
 * @generator called by incrementSageTakeEvery
 * @see incrementSageTakeEvery
 */
export function* onIncrement() {
  yield console.log("------- onIncrement --------");
  yield delay(3000); // non block 3000 ms delay 
  yield put({ type: AppActionTypes.INCREMENT_FROM_SAGA });
}

/**
 * @generator showing to simulate takeEvery  
 */
export function* showHowToUseTakeAsTakeEvery() {
  while (true) {
    yield take(AppActionTypes.INCREMENT);
    console.log("------- onIncrement --------");
    yield delay(3000); // block and wait for 3 seconds 
  }
}

/**
 * @generator takeEvery, handle concurrently 
 */
export function* incrementSageTakeEvery() {
  // loop and listern for every AppActionTypes.INCREMENT call 
  // and then create new generator call that is passed into this takeEvery 
  yield takeEvery(AppActionTypes.INCREMENT, onIncrement);
  // same as {@see showHowToUseTakeAsTakeEvery} while loop but takeEvery
  // is non-blocking and take will wait for any subsequent delay 
  // takeEvery creates new generator / task, and so non blocking 
  // handle concurrently 
}

/**
 * @generator takeLatest 
 */
export function* incrementSageTakeLatest() {
  // only take latest action and will cancel previous 
  yield takeLatest(AppActionTypes.INCREMENT, onIncrement);
}
