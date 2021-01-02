/**
 * @fileoverview cart icon component 
 */
import React from "react";
import styles from "./cart-icon.module.scss";
import { ReactComponent as ShoppingIcon } from "../../assets/svg/shopping-bag.svg";
import { connect } from "react-redux";
import { toggleCartHidden } from "../../redux/cart/cart.actions";

interface CartIconProps {
  toggleCartHidden: () => void
}
const CartIcon: React.FC<CartIconProps> = ({ toggleCartHidden }) => {
  return (
    <div className={styles["cart-icon"]} onClick={toggleCartHidden}>
      <ShoppingIcon className={styles["shopping-icon"]} />
      <span className={styles["item-count"]}>0</span>
    </div>
  )
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    toggleCartHidden: () => dispatch(toggleCartHidden())
  };
}

export default connect(null, mapDispatchToProps)(CartIcon);
