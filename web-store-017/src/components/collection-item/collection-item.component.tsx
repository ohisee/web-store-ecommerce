/**
 * @fileoverview preview item component 
 */
import React from "react";
import styles from "./collection-item.module.scss";
import CustomButton from "../custom-button/custom-button.component";
import { connect } from "react-redux";
import { addItem } from "../../redux/cart/cart.actions";

interface Item {
  id: number,
  name: string,
  imageUrl: string,
  price: number,
}
interface CollectionItemProps {
  item: Item,
}
interface AddCollectionItemProps {
  addItem: (item: any) => void,
}
const CollectionItem: React.FC<CollectionItemProps & AddCollectionItemProps> =
  ({ item, addItem }) => {
    const { name, imageUrl, price } = item;
    return (
      <div className={styles["collection-item"]}>
        <div
          className={styles["image"]}
          style={{ backgroundImage: `url(${imageUrl})` }}></div>
        <div className={styles["collection-footer"]}>
          <span className={styles["name"]}>{name}</span>
          <span className={styles["price"]}>{price}</span>
        </div>
        <div className={styles["custom-button"]}>
          <CustomButton
            onClick={() => addItem(item)}
            inverted>Add To Cart</CustomButton>
        </div>
      </div>
    );
  };

const mapDispatchToProps = (dispatch: any) => {
  return {
    addItem: (item: Item) => dispatch(addItem(item))
  }
};

export default connect(null, mapDispatchToProps)(CollectionItem);
