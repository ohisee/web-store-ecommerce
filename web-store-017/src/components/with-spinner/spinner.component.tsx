/**
 * @fileoverview spinner component 
 */
import React from "react";
import styles from "./spinner.module.scss";

const Spinner: React.FC = () => {
  return (
    <div className={styles["overlay"]}>
      <div className={styles["spinner"]}></div>
    </div>
  )
};

export default Spinner;
