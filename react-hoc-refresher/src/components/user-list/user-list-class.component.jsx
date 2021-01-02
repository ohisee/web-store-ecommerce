/**
 * @fileoverview user list class component 
 * 
 * note that it is very similar code from user-profile-class that we fetch 
 * some data from Rest API and then display them 
 * 
 * we can leverage higher order component to wrap the functionality 
 */
import React from "react";

/**
 * @typedef {object} UserType 
 * @property {string} id 
 * @property {string} name 
 * @property {string} email 
 */

/**
 * @typedef {object} PropsType 
 * @property {UserType[]} data 
 */

/**
 * @extends {React.Component<PropsType>}
 */
class UserListClass extends React.Component {

  /**
   * @typedef {object} StateType 
   * @property {UserType[]} users 
   */

  /** @type {StateType} */
  state = {
    users: [],
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(data => this.setState({ users: data }));
  }

  render() {
    return (
      <div className="container user-list">
        <h2>Users List</h2>
        {
          this.state.users.slice(0, 3).map(user => {
            return (
              <div className="post" key={user.id}>
                <h2>{user.name}</h2>
                <h2>{user.email}</h2>
              </div>
            );
          })
        }
      </div>
    );
  }
}

export default UserListClass;
