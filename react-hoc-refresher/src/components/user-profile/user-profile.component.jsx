/**
 * @fileoverview user profile component 
 */
import React from "react";
import WithData from "../../with-data";

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

/** @type {React.FC<PropsType>}  */
const UserProfile = ({ data, name, email }) => {
	return (
		<div className="container">
			<h2>{name}</h2>
			<h3>{email}</h3>
			Post:
			{
				data.slice(0, 3).map(post => {
					return (
						<div className="post" key={post.id}>
							<h2>{post.title}</h2>
							<p>{post.body}</p>
						</div>
					);
				})
			}
		</div>
	);
};

export default WithData(UserProfile);
