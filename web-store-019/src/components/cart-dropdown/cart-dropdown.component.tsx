/**
 * @fileoverview cart icon component 
 */
import React from "react";
import { connect, ConnectedProps } from "react-redux";
import { createStructuredSelector } from "reselect";
import { RouteComponentProps, withRouter } from "react-router-dom";
import styles from "./cart-dropdown.module.scss";
import CustomButton from "../custom-button/custom-button.component";
import CartItem from "../cart-item/cart-item.component";
import { RootState } from "../../redux/root-state";
import { id } from "../../utils/utilities";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import { toggleCartHidden } from "../../redux/cart/cart.actions";

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

// use memoization to solve performance issue, use Reselect
// const mapStateToProps = (state: RootState) => ({
//   cartItems: selectCartItems(state)
// });
// use Reselect createStructuredSelector 
const mapStateToProps = createStructuredSelector<RootState, CartDrodownProps>({
  cartItems: selectCartItems
});
const connector = connect(mapStateToProps);
type CartDrodownReduxProps = ConnectedProps<typeof connector>;

const CartDrodown: React.FC<CartDrodownProps & RouteComponentProps & CartDrodownReduxProps> =
  function ({ cartItems, history, dispatch }) {
    return (
      <div className={styles["cart-dropdown"]}>
        <div className={styles["cart-items"]}>
          {cartItems.length > 0 ?
            cartItems.map(cartItem => <CartItem key={id()} item={cartItem} />)
            :
            <span className={styles["empty-message"]}>Your cart is empty</span>}
        </div>
        <CustomButton
          onClick={() => {
            history.push("/checkout");
            dispatch(toggleCartHidden());
          }}>GO TO CHECKOUT</CustomButton>
      </div>
    );
  };

// this mapStateToProps is being called when any states including cart's 
// state changed, this is a performance issue, unnecessary re-render
/*const mapStateToProps = (state: RootState) => ({
  cartItems: state.cart.cartItems
});*/
// Note: moved const mapStateToProps{...} to top to get ConnectedProps type 

// if not passing mapDispatchToProps into Reduct connect, connect will pass 
// dispatch as a property into this component 
export default withRouter(connect(mapStateToProps)(CartDrodown));
