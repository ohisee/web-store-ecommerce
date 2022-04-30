/**
 * @fileoverview user type 
 */

export interface CurrentUserSnapshot {
  id: string,
  [key: string]: any,
}

type ActionTypes = {
  SET_CURRENT_USER: string,
  GOOGLE_SIGN_IN_START: string,
  // GOOGLE_SIGN_IN_SUCCESS: string,
  // GOOGLE_SIGN_IN_FAILURE: string,
  EMAIL_SIGN_IN_START: string,
  // EMAIL_SIGN_IN_SUCCESS: string,
  // EMAIL_SIGN_IN_FAILURE: string,
  SIGN_IN_SUCCESS: string,
  SIGN_IN_FAILURE: string,
  CHECK_USER_SESSION: string,
  SIGN_OUT_START: string,
  SIGN_OUT_SUCCESS: string,
  SIGN_OUT_FAILURE: string,
  SIGN_UP_START: string,
  SIGN_UP_SUCCESS: string,
  SIGN_UP_FAILURE: string,
};

export const UserActionTypes: Readonly<ActionTypes> = {
  SET_CURRENT_USER: "[action]_set_current_user",
  GOOGLE_SIGN_IN_START: "[action]_google_sign_in_start",
  // GOOGLE_SIGN_IN_SUCCESS: "[action]_google_sign_in_success",
  // GOOGLE_SIGN_IN_FAILURE: "[action]_google_sign_in_failure",
  EMAIL_SIGN_IN_START: "[action]_email_sign_in_start",
  // EMAIL_SIGN_IN_SUCCESS: "[action]_email_sign_in_success",
  // EMAIL_SIGN_IN_FAILURE: "[action]_email_sign_in_failure",
  SIGN_IN_SUCCESS: "[action]_sign_in_success",
  SIGN_IN_FAILURE: "[action]_sign_in_failure",
  CHECK_USER_SESSION: "[action]_check_user_session",
  SIGN_OUT_START: "[action]_sign_out_start",
  SIGN_OUT_SUCCESS: "[action]_sign_out_success",
  SIGN_OUT_FAILURE: "[action]_sign_out_failure",
  SIGN_UP_START: "[action]_sign_up_start",
  SIGN_UP_SUCCESS: "[action]_sign_up_success",
  SIGN_UP_FAILURE: "[action]_sign_up_failure",
};
