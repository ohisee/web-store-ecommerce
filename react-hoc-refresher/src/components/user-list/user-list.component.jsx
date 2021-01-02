/**
 * @fileoverview user list component 
 */
import React from "react";
import WithData from "../../with-data";

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
 * @type {React.FC<PropsType>}
 */
const UserList = ({ data }) => {
	return (
		<div className="container user-list">
			<h2>Users List</h2>
			{
				data.slice(0, 3).map(user => {
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
};

export default WithData(UserList);
