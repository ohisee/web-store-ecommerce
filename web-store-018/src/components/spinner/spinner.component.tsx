/**
 * @fileoverview spinner component 
 */
import React from "react";
import styles from "./spinner.module.scss";

const Spinner: React.FC = () => (
  <div className={styles["spinner-overlay"]}>
    <div className={styles["spinner-container"]} />
  </div>
);

export default Spinner;
