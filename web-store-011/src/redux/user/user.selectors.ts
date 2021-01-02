/**
 * @fileoverview user redux selector 
 */
import { createSelector } from "reselect";
import { RootState } from "../root-state";

const selectUser = (state: RootState) => state.user;

export const selectCurrentUser = createSelector(
  [selectUser], // input selector 
  (userState) => userState.currentUser,
);
