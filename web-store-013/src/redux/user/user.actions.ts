/**
 * @fileoverview user action  
 */
import UserAction from "../shared/actiontype";
import { CurrentUserSnapshot, UserActionTypes } from "./user-types";

const setCurrentUser = (user: CurrentUserSnapshot | null): UserAction => {
  return {
    type: UserActionTypes.SET_CURRENT_USER,
    payload: user
  };
};

export { setCurrentUser };
