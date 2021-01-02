/**
 * @fileoverview checkout item component 
 */
import React from "react";
import { connect } from "react-redux";
import { clearItemFromCart, addItem, removeItem } from "../../redux/cart/cart.actions";
import styles from "./checkout-item.module.scss";

interface Item {
  id: number,
  name: string,
  imageUrl: string,
  price: number,
  quantity: number,
}
interface CheckoutItemProps {
  cartItem: Item,
}
interface CheckoutItemReduxProps {
  clearItem: (item: Item) => void,
  addItem: (item: Item) => void,
  removeItem: (item: Item) => void,
}
const CheckoutItem: React.FC<CheckoutItemProps & CheckoutItemReduxProps> =
  ({ cartItem, clearItem, addItem, removeItem }) => {
    const { name, quantity, price, imageUrl } = cartItem;
    return (
      <div className={styles["checkout-item"]}>
        <div className={styles["image-container"]}>
          <img src={imageUrl} alt="item" />
        </div>
        <span className={styles["name"]}>{name}</span>
        <span className={styles["quantity"]}>
          <div
            className={styles["arrow"]}
            onClick={() => removeItem(cartItem)}
          >&#10094;</div>
          <span className={styles["value"]}>{quantity}</span>
          <div
            className={styles["arrow"]}
            onClick={() => addItem(cartItem)}
          >&#10095;</div></span>
        <span className={styles["price"]}>{price}</span>
        <div
          className={styles["remove-button"]}
          onClick={() => clearItem(cartItem)}
        >&#10005;</div>
      </div>
    );
  };

const mapDispatchToProps = (dispatch: any) => ({
  clearItem: (item: Item) => dispatch(clearItemFromCart(item)),
  addItem: (item: Item) => dispatch(addItem(item)),
  removeItem: (item: Item) => dispatch(removeItem(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
