/**
 * @fileoverview cart icon component 
 */
import React from "react";
import { connect } from "react-redux";
import styles from "./cart-dropdown.module.scss";
import CustomButton from "../custom-button/custom-button.component";
import CartItem from "../cart-item/cart-item.component";
import { RootState } from "../../redux/root-state";
import { id } from "../../utils/utilities";
import { selectCartItems } from "../../redux/cart/cart.selectors";

interface Item {
  id: number,
  name: string,
  imageUrl: string,
  price: number,
  quantity: number,
}
interface CartDrodownProps {
  cartItems: Item[]
}
const CartDrodown: React.FC<CartDrodownProps> = ({ cartItems }) => {
  return (
    <div className={styles["cart-dropdown"]}>
      <div className={styles["cart-items"]}>
        {
          cartItems.map(cartItem => <CartItem key={id()} item={cartItem} />)
        }
      </div>
      <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
  );
};

// this mapStateToProps is being called when any states including cart's 
// state changed, this is a performance issue, unnecessary re-render
/*const mapStateToProps = (state: RootState) => ({
  cartItems: state.cart.cartItems
});*/
// use memoization to solve performance issue, use Reselect
const mapStateToProps = (state: RootState) => ({
  cartItems: selectCartItems(state)
});

export default connect(mapStateToProps)(CartDrodown);
