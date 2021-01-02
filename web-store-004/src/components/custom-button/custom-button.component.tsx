/**
 * @fileoverview custom button component 
 */
import React from "react";
import styles from "./custom-button.module.scss";

interface CustomBottonProps {
  isGoogleSignIn: boolean,
  [key: string]: any;
}
const CustomBotton: React.FC<CustomBottonProps> =
  ({ children, isGoogleSignIn, ...otherProps }) => {
    const classes = [styles["custom-button"]];
    if (isGoogleSignIn) {
      classes.push(styles["google-sign-in"]);
    }

    return (
      <button
        className={classes.join(" ")}
        {...otherProps}>{children}</button>
    );
  };

export default CustomBotton;
