/**
 * @fileoverview cart icon component 
 */
import React from "react";
import styles from "./cart-icon.module.scss";
import { ReactComponent as ShoppingIcon } from "../../assets/svg/shopping-bag.svg";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { toggleCartHidden } from "../../redux/cart/cart.actions";
import { RootState } from "../../redux/root-state";
import { selectCartItemsCount } from "../../redux/cart/cart.selectors";

interface CartIconProps {
  itemCount: number,
}
interface CartIconReduxProps {
  toggleCartHidden: () => void,
}
const CartIcon: React.FC<CartIconProps & CartIconReduxProps> = ({ toggleCartHidden, itemCount }) => {
  return (
    <div className={styles["cart-icon"]} onClick={toggleCartHidden}>
      <ShoppingIcon className={styles["shopping-icon"]} />
      <span className={styles["item-count"]}>{itemCount}</span>
    </div>
  )
};

// Redux selector, this mapStateToProps is being called when any states 
// including cart's state changed 
// because state is always a new object even the values inside are same 
// this is a performance issue 
/*const mapStateToProps = (state: RootState) => ({
  itemCount: state.cart.cartItems.reduce(
    (accumlatedQuantity, cur) => accumlatedQuantity + cur.quantity, 0)
});*/

// use memoization to solve this issue, use Reselect
// const mapStateToProps = (state: RootState) => ({
//   itemCount: selectCartItemsCount(state)
// });
// use Reselect createStructuredSelector 
const mapStateToProps = createStructuredSelector<RootState, CartIconProps>({
  itemCount: selectCartItemsCount
});

const mapDispatchToProps = (dispatch: any) => {
  return {
    toggleCartHidden: () => dispatch(toggleCartHidden())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
