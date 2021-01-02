/**
 * @fileoverview cart item component 
 */
import React from "react";
import styles from "./cart-item.module.scss";

interface Item {
  id: number,
  name: string,
  imageUrl: string,
  price: number,
  quantity: number,
}
interface CartItemProps {
  item: Item,
}
const CartItem: React.FC<CartItemProps> =
  ({ item: { name, price, imageUrl, quantity } }) => {
    return (
      <div className={styles["cart-item"]}>
        <img src={imageUrl} alt={name} />
        <div className={styles["item-details"]}>
          <span className={styles["name"]}>{name}</span>
          <span className={styles["price"]}>{quantity} x ${price}</span>
        </div>
      </div>
    );
  };

export default React.memo(CartItem);
