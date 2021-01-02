/**
 * @fileoverview user component 
 */
import React from "react";
import Card from "../card/card.component";
import { useFetch } from "../effects/use-fetch.effect";

/**
 * @typedef {object} UserPropsType
 * @property {string} userId
 */

/** @type {React.FC<UserPropsType>} */
const User = ({ userId }) => {
  /**
   * @typedef {object} UserType 
   * @property {string} name 
   * @property {string} username 
   * @property {string} email
   */

  /** @type {[UserType, (u: UserType) => void]} */
  // const [user, setUser] = useState(null);

  // useEffect(() => {
  //   const fectchUser = async function () {
  //     const res = await fetch(
  //       `https://jsonplaceholder.typicode.com/users?id=${userId}`);
  //     const users = await res.json();
  //     setUser(users[0]);
  //   }
  //   fectchUser();
  // }, [userId]);

  /** @type {UserType} */
  const user = useFetch(
    `https://jsonplaceholder.typicode.com/users?id=${userId}`);

  return (
    <Card>
      {
        user ? (
          <div>
            <h3>{user.username}</h3>
            <p>{user.name}</p>
          </div>
        ) : (<p>User not found</p>)
      }
    </Card>
  );
};

export default User;
