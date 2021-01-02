/**
 * @fileoverview root reducer 
 */
import { combineReducers } from "redux";
import { appReducer } from "./app.reducer";

/**
 * @typedef {import "./app.reducer".StateType} StateType
 */

/**
 * @typedef {object} RootStateType 
 * @property {StateType} app 
 */

/** @type {Reducer<RootStateType>} */
const rootReducer = combineReducers({
  app: appReducer,
});

export default rootReducer;
