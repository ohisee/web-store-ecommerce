/**
 * @fileoverview user type 
 */

export interface CurrentUserSnapshot {
  id: string,
  [key: string]: any,
}

type ActionTypes = {
  SET_CURRENT_USER: string,
};

export const UserActionTypes: Readonly<ActionTypes> = {
  SET_CURRENT_USER: "[action]_set_current_user",
};
