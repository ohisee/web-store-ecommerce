/**
 * @fileoverview user reducer 
 */
import UserAction from "../shared/actiontype";
import { CurrentUserSnapshot, UserActionTypes } from "./user.types";

export interface UserState {
  currentUser: CurrentUserSnapshot | null,
  error: string | null,
}

const INITIAL_STATE: UserState = {
  currentUser: null,
  error: null,
};

function userReducer(state: UserState = INITIAL_STATE, action: UserAction): UserState {
  switch (action.type) {
    case UserActionTypes.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload
      };
    // case UserActionTypes.GOOGLE_SIGN_IN_SUCCESS:
    // case UserActionTypes.EMAIL_SIGN_IN_SUCCESS:
    case UserActionTypes.SIGN_IN_SUCCESS:
    case UserActionTypes.SIGN_UP_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        error: null,
      };
    // case UserActionTypes.GOOGLE_SIGN_IN_FAILURE:
    // case UserActionTypes.EMAIL_SIGN_IN_FAILURE:
    case UserActionTypes.SIGN_IN_FAILURE:
    case UserActionTypes.SIGN_OUT_FAILURE:
    case UserActionTypes.SIGN_UP_FAILURE:
      return {
        ...state,
        currentUser: null,
        error: action.payload,
      }
    case UserActionTypes.SIGN_OUT_SUCCESS:
      return {
        ...state,
        currentUser: null,
        error: null,
      }
    default:
      return state;
  }
}

export { userReducer };
