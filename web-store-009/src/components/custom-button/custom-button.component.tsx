/**
 * @fileoverview custom button component 
 */
import React from "react";
import styles from "./custom-button.module.scss";

interface CustomBottonProps {
  isGoogleSignIn?: boolean,
  inverted?: boolean,
  [key: string]: any;
}
const CustomBotton: React.FC<CustomBottonProps> =
  ({ children, isGoogleSignIn, inverted, ...otherProps }) => {
    const classes = [styles["custom-button"]];
    if (isGoogleSignIn) {
      classes.push(styles["google-sign-in"]);
    }
    if (inverted) {
      classes.push(styles["inverted"]);
    }

    return (
      <button
        className={classes.join(" ")}
        {...otherProps}>{children}</button>
    );
  };

export default CustomBotton;
