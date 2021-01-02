/**
 * @fileoverview user reducer 
 */
import UserAction from "../shared/actiontype";
import { CurrentUserSnapshot, UserActionTypes } from "./user-types";

export interface UserState {
  currentUser: CurrentUserSnapshot | null
}

const INITIAL_STATE: UserState = {
  currentUser: null,
};

function userReducer(state: UserState = INITIAL_STATE, action: UserAction) {
  switch (action.type) {
    case UserActionTypes.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload
      }
    default:
      return state;
  }
}

export { userReducer };
