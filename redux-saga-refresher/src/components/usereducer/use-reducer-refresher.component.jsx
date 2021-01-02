/**
 * @fileoverview use reducer React hook refresher
 */
import React, { useEffect, useReducer } from "react";
import Card from "../card/card.component";

/**
 * @typedef {object} UserType 
 * @property {string} name 
 * @property {string} username 
 * @property {string} email 
 */

/**
 * @typedef {object} StateType 
 * @property {UserType} user 
 * @property {string} searchQuery 
 */

/**
 * @typedef {object} ActionType 
 * @property {string} type 
 * @property {any} payload 
 */

/** @type {StateType} */
const INITIAL_STATE = {
  user: null,
  searchQuery: "Bret",
};

/**
 * @param {StateType} state 
 * @param {ActionType} action 
 * @returns {StateType} a state 
 */
const reducer = (state, action) => {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.payload,
      };
    case "SET_SEARCH_QUERY":
      return {
        ...state,
        searchQuery: action.payload,
      };
    default:
      return state
  }
};

const setUser = (user) => ({
  type: "SET_USER",
  payload: user,
});

const setSearchQuery = (queryString) => ({
  type: "SET_SEARCH_QUERY",
  payload: queryString,
});

/**
 * @type {React.FC}
 */
const UseReducerRefresher = () => {
  /** @type {[StateType, (action: ActionType) => void]} */
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
  const { user, searchQuery } = state;

  useEffect(() => {
    if (searchQuery.length > 0) {
      const fetchUser = async function () {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/users?username=${searchQuery}`);
        const resJson = await response.json();
        dispatch(setUser(resJson[0]));
      }

      fetchUser();
    }
  }, [user, searchQuery] /* dependency */);

  return (
    <Card>
      <input
        type="search"
        value={searchQuery}
        onChange={event => dispatch(setSearchQuery(event.target.value))}
      />
      {
        user ? (
          <div>
            <h3>{user.name}</h3>
            <h3>{user.username}</h3>
            <h3>{user.email}</h3>
          </div>
        ) : (<p>No user found</p>)
      }
    </Card>
  );

};

export default UseReducerRefresher;
