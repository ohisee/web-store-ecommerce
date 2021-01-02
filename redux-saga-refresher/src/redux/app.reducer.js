/**
 * @fileoverview app reducer 
 */
import { AppActionTypes } from "./app.actiontypes";

/**
 * @typedef {object} StateType
 * @property {number} value
 */

/**
 * @typedef {object} ActionType 
 * @property {string} type
 * @property {any} value 
 */

/** @type {StateType} */
const INITIAL_STATE = {
  value: 0,
};

/**
 * @param {StateType} state 
 * @param {ActionType} action 
 * @returns {StateType} a state 
 */
export function appReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case AppActionTypes.INCREMENT_FROM_SAGA:
      return {
        ...state,
        value: state.value + 1,
      }
    case AppActionTypes.INCREMENT:
      return {
        ...state,
        value: state.value + 1,
      }
    case AppActionTypes.DECREMENT:
      return {
        ...state,
        value: state.value - 1,
      }
    case AppActionTypes.INCREMENT_BY_10:
      return {
        ...state,
        value: state.value + 10,
      }
    default:
      return state;
  }
}
