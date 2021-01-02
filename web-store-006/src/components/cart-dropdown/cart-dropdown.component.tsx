/**
 * @fileoverview cart icon component 
 */
import React from "react";
import styles from "./cart-dropdown.module.scss";
import CustomButton from "../custom-button/custom-button.component";

const CartDrodown: React.FC = () => {
  return (
    <div className={styles["cart-dropdown"]}>
      <div className={styles["cart-items"]}></div>
      <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
  );
};

export default CartDrodown;
