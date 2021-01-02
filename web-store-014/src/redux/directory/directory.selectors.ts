/**
 * @fileoverview directory redux selector 
 */
import { createSelector } from "reselect";
import { RootState } from "../root-state";

const selectDirectory = (state: RootState) => state.directory;

export const selectDirectorySections = createSelector(
  [selectDirectory],
  (directoryState) => directoryState.sections,
);
