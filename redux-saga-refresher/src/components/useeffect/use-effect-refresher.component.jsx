/**
 * @fileoverview use effect React hook refresher
 */
import React, { useState, useEffect } from "react";
import Card from "../card/card.component";

/**
 * @type {React.FC}
 */
const UseEffectRefresher = () => {

  /**
   * @typedef {object} UserType 
   * @property {string} name 
   * @property {string} username 
   * @property {string} email 
   */

  /** @type {[UserType, (user: UserType)=> void]} */
  const [user, setUser] = useState(null);

  /** @type {[string, (query: string)=> void]} */
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    if (searchQuery.length > 0) {
      const fetchUser = async function () {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/users?username=${searchQuery}`);
        const resJson = await response.json();
        setUser(resJson[0]);
      }

      fetchUser();
    }
  }, [user, searchQuery] /* dependency */);

  return (
    <Card>
      <input
        type="search"
        value={searchQuery}
        onChange={event => setSearchQuery(event.target.value)}
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
}

export default UseEffectRefresher;
