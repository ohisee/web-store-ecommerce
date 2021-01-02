/**
 * @fileoverview checkout page component 
 */
import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCartItems, selectCartTotal } from "../../redux/cart/cart.selectors";
import { RootState } from "../../redux/root-state";
import styles from "./checkout.module.scss";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import { id } from "../../utils/utilities";

interface Item {
  id: number,
  name: string,
  imageUrl: string,
  price: number,
  quantity: number,
}
interface CheckoutPageProps {
  cartItems: Item[],
  total: number,
}
const CheckoutPage: React.FC<CheckoutPageProps> = ({ cartItems, total }) => {
  return (
    <div className={styles["checkout-page"]}>
      <div className={styles["checkout-header"]}>
        <div className={styles["header-block"]}>
          <span>Product</span>
        </div>
        <div className={styles["header-block"]}>
          <span>Description</span>
        </div>
        <div className={styles["header-block"]}>
          <span>Quantity</span>
        </div>
        <div className={styles["header-block"]}>
          <span>Price</span>
        </div>
        <div className={styles["header-block"]}>
          <span>Remove</span>
        </div>
      </div>
      {
        cartItems.map(cartItem => <CheckoutItem key={id()} cartItem={cartItem} />)
      }
      <div className={styles["total"]}>
        <span>TOTAL: ${total}</span>
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector<RootState, CheckoutPageProps>({
  cartItems: selectCartItems,
  total: selectCartTotal,
});

export default connect(mapStateToProps)(CheckoutPage);
