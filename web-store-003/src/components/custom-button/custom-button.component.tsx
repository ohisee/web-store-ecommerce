/**
 * @fileoverview custom button component 
 */
import React from "react";
import styles from "./custom-button.module.scss";

interface CustomBottonProps {
  [key: string]: any;
}
const CustomBotton: React.FC<CustomBottonProps> = ({ children, ...otherProps }) => {
  return (
    <button
      className={styles["custom-button"]}
      {...otherProps}>{children}</button>
  );
};

export default CustomBotton;
