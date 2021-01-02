/**
 * @fileoverview card component 
 */
import React from "react";
import styles from "./card.module.css";

/** @type {React.FunctionComponent<{}>} */
const Card = ({ children }) => {
	return (
		<div className={styles["card"]}>{children}</div>
	);
};

export default Card;
