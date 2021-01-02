/**
 * @fileoverview user action  
 */
import UserAction from "../shared/actiontype";
import { CurrentUserSnapshot, UserActionTypes } from "./user.types";

const setCurrentUser = (user: CurrentUserSnapshot | null): UserAction => {
  return {
    type: UserActionTypes.SET_CURRENT_USER,
    payload: user
  };
};

const googleSignInStart = (): UserAction => ({
  type: UserActionTypes.GOOGLE_SIGN_IN_START,
  payload: null,
});

// const googleSignInSuccess = (user: CurrentUserSnapshot | null): UserAction => ({
//   type: UserActionTypes.GOOGLE_SIGN_IN_SUCCESS,
//   payload: user,
// });

// const googleSignInFailure = (error: any): UserAction => ({
//   type: UserActionTypes.GOOGLE_SIGN_IN_FAILURE,
//   payload: error,
// });

type EmailSignInPayloadType = { email: string, password: string };
const emailSignInStart =
  (emailSignInPayload: EmailSignInPayloadType): UserAction => ({
    type: UserActionTypes.EMAIL_SIGN_IN_START,
    payload: emailSignInPayload,
  });

// const emailSignInSuccess = (user: CurrentUserSnapshot | null): UserAction => ({
//   type: UserActionTypes.EMAIL_SIGN_IN_SUCCESS,
//   payload: user,
// });

// const emailSignInFailure = (error: any): UserAction => ({
//   type: UserActionTypes.EMAIL_SIGN_IN_FAILURE,
//   payload: error,
// });

const signInSuccess = (user: CurrentUserSnapshot | null): UserAction => ({
  type: UserActionTypes.SIGN_IN_SUCCESS,
  payload: user,
});

const signInFailure = (error: any): UserAction => ({
  type: UserActionTypes.SIGN_IN_FAILURE,
  payload: error,
});

const checkUserSession = (): UserAction => ({
  type: UserActionTypes.CHECK_USER_SESSION,
  payload: null,
});

const signOutStart = (): UserAction => ({
  type: UserActionTypes.SIGN_OUT_START,
  payload: null,
});

const signOutSuccess = (): UserAction => ({
  type: UserActionTypes.SIGN_OUT_SUCCESS,
  payload: null,
});

const signOutFailure = (error: string): UserAction => ({
  type: UserActionTypes.SIGN_IN_FAILURE,
  payload: error,
});

type signUpPayloadType = {
  displayName: string,
  email: string,
  password: string,
};
const signUpStart = (signUpPayload: signUpPayloadType): UserAction => ({
  type: UserActionTypes.SIGN_UP_START,
  payload: signUpPayload,
})

const signUpSuccess = (user: any, additionalData: {}): UserAction => ({
  type: UserActionTypes.SIGN_IN_SUCCESS,
  payload: { user, additionalData },
});

const signUpFailure = (error: string): UserAction => ({
  type: UserActionTypes.SIGN_IN_FAILURE,
  payload: error,
});

export {
  setCurrentUser,
  googleSignInStart,
  emailSignInStart,
  signInSuccess,
  signInFailure,
  checkUserSession,
  signOutStart,
  signOutSuccess,
  signOutFailure,
  signUpStart,
  signUpSuccess,
  signUpFailure,
  // googleSignInSuccess,
  // googleSignInFailure,
  // emailSignInSuccess,
  // emailSignInFailure,
};
