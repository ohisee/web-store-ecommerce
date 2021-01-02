/**
 * @fileoverview User profile component using class 
 * 
 * note that it is very similar code from user-list-class that we fetch 
 * some data from Rest API and then display them 
 * 
 * we can leverage higher order component to wrap the functionality 
 */
import React from "react";

/**
 * @typedef {object} PostType 
 * @property {string} id 
 * @property {string} title 
 * @property {string} body 
 */

/**
 * @typedef {object} PropsType 
 * @property {PostType[]} data 
 * @property {string} name
 * @property {string} email
 */

/**
 * @extends React.Component<PropsType>
 */
class UserProfileClass extends React.Component {

  /**
   * @typedef {object} StateType 
   * @property {PostType[]} posts
   */

  /** @type {StateType} */
  state = {
    posts: []
  };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(response => response.json())
      .then(data => this.setState({ posts: data }));
  }

  render() {
    return (
      <div className="container">
        <h2>{this.props.name}</h2>
        <h3>{this.props.email}</h3>
        Post: <br />
        {
          this.state.posts.slice(0, 3).map(post => {
            return (
              <div className="post" key={post.id}>
                <h2>{post.title}</h2>
                <p>{post.body}</p>
              </div>
            )
          })
        }
      </div>
    );
  }
}

export default UserProfileClass;