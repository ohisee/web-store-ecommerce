/**
 * @fileoverview user sagas
 */
import { takeLatest, put, call, all } from "redux-saga/effects";
import { UserActionTypes } from "./user.types";
import firebase, {
  auth,
  googleProvider,
  createUserProfileDocument,
  getCurrentUser
} from "../../firebase/firebase.utils";
import {
  signInSuccess,
  signInFailure,
  signOutFailure,
  signOutSuccess,
  signUpSuccess,
  signUpFailure
} from "./user.actions";
import UserAction from "../shared/actiontype";

/**
 * @generator 
 * @param user current user 
 * @param additionalData additional data to create user profile documet 
 */
function* getSnapShotFromUserAuth(user: firebase.User, additionalData: {} = {}) {
  try {
    const userRef = yield call(createUserProfileDocument, user, additionalData);
    const userSnapshot = yield userRef.get();
    yield put(
      signInSuccess({ id: userSnapshot.id, ...userSnapshot.data() }));
  } catch (error) {
    yield put(signInFailure(error.message));
  }
}

/**
 * @generator 
 * @param userCred current user credential 
 */
function* getSnapShotFromUserCredential(userCred: firebase.auth.UserCredential) {
  try {
    const { user } = userCred;
    yield getSnapShotFromUserAuth(user!);
  } catch (error) {
    yield put(signInFailure(error.message));
  }
}

/**
 * @generator sign in with Google
 */
function* signInWithGoogle() {
  try {
    const userCred: firebase.auth.UserCredential = yield auth.signInWithPopup(googleProvider);
    // const { user } = userCred;
    // const userRef = yield call(createUserProfileDocument, user, {});
    // const userSnapshot = yield userRef.get();
    // yield put(
    //   signInSuccess({ id: userSnapshot.id, ...userSnapshot.data() }));
    yield getSnapShotFromUserCredential(userCred);
  } catch (error) {
    yield put(signInFailure(error.message));
  }
}

/**
 * @generator sign in with Email 
 */
function* signInWithEmail({ payload: { email, password } }: UserAction) {
  try {
    const userCred: firebase.auth.UserCredential = yield auth.signInWithEmailAndPassword(email, password);
    // const { user } = userCred;
    // const userRef = yield call(createUserProfileDocument, user, {});
    // const userSnapshot = yield userRef.get();
    // yield put(
    //   signInSuccess({ id: userSnapshot.id, ...userSnapshot.data() }));
    yield getSnapShotFromUserCredential(userCred);
  } catch (error) {
    yield put(signInFailure(error.message));
  }
}

/**
 * @generator check is the user authenticated 
 */
function* isUserAuthenticated() {
  try {
    const userAuth = yield getCurrentUser();
    if (!userAuth) {  // user never signed in 
      return;
    }
    yield getSnapShotFromUserAuth(userAuth);
  } catch (error) {
    yield put(signInFailure(error));
  }
}

/**
 * @generator user sign out 
 */
function* signOut() {
  try {
    yield auth.signOut();
    yield put(signOutSuccess());
  } catch (error) {
    yield put(signOutFailure(error));
  }
}

/**
 * @generator user sign up 
 */
function* signInAfterSignUpSuccess({ payload: { user, additionalData } }: UserAction) {
  yield getSnapShotFromUserAuth(user, additionalData);
}

/**
 * @generator user sign up 
 */
function* signUp({ payload: { email, password, displayName } }: UserAction) {
  try {
    const userCred: firebase.auth.UserCredential =
      yield auth.createUserWithEmailAndPassword(email, password);
    const { user } = userCred;
    yield put(signUpSuccess(user, { displayName }));
  } catch (error) {
    yield put(signUpFailure(error));
  }
}

/**
 * @generator takeLatest sign in 
 */
export function* onGoogleSignInStart() {
  yield takeLatest(UserActionTypes.GOOGLE_SIGN_IN_START, signInWithGoogle);
}

/**
 * @generator takeLatest email sign in 
 */
export function* onEmailSignInStart() {
  yield takeLatest(UserActionTypes.EMAIL_SIGN_IN_START, signInWithEmail);
}

/**
 * @generator takeLatest check user session  
 */
export function* onCheckUserSession() {
  yield takeLatest(UserActionTypes.CHECK_USER_SESSION, isUserAuthenticated);
}

/**
 * @generator takeLatest sign out 
 */
export function* onSignOutStart() {
  yield takeLatest(UserActionTypes.SIGN_OUT_START, signOut);
}

/**
 * @generator takeLatest sign up 
 */
export function* onSignUpStart() {
  yield takeLatest(UserActionTypes.SIGN_UP_START, signUp);
}

/**
 * @generator takeLatest sign up success 
 */
function* onSignUpSuccess() {
  yield takeLatest(UserActionTypes.SIGN_UP_SUCCESS, signInAfterSignUpSuccess);
}

/**
 * @generator initialize all user action's sagas 
 */
export function* userSagas() {
  yield all([
    call(onGoogleSignInStart),
    call(onEmailSignInStart),
    call(onCheckUserSession),
    call(onSignOutStart),
    call(onSignUpStart),
    call(onSignUpSuccess),
  ]);
}
