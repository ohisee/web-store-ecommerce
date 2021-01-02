/**
 * @fileoverview saga refresher component 
 */
import React from "react";
import { connect } from "react-redux";
import Card from "../card/card.component";

/**
 * @typedef {object} ActionType 
 * @property {string} type
 * @property {any} value 
 */

/**
 * @typedef {object} PropsType
 * @property {() => void} increment 
 * @property {() => void} decrement 
 * @property {() => void} increase 
 * @property {number} value  
 */

/**
 * @type {React.FC<PropsType>}
 */
const SageRefresher = ({ increment, decrement, increase, value }) => {
  return (
    <Card>
      {value}
      <button onClick={increment}>Add 1</button>
      <button onClick={decrement}>Minus 1</button>
      <button onClick={increase}>Add 10</button>
    </Card>
  );
};

/**
 * @param {import("../../redux/root-reducer").RootStateType} rootState 
 */
const mapStateToProps = (rootState) => ({
  value: rootState.app.value,
});

/**
 * @param {(action: ActionType) => void} dispatch 
 */
const mapDispatchToProps = (dispatch) => ({
  increment: () => dispatch({ type: "INCREMENT" }),
  decrement: () => dispatch({ type: 'DECREMENT' }),
  increase: () => dispatch({ type: "INCREMENT_BY_10" }),
});

export default connect(mapStateToProps, mapDispatchToProps)(SageRefresher);
