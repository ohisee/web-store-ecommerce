/**
 * @fileoverview preview item component 
 */
import React from "react";
import styles from "./collection-item.module.scss";
import CustomButton from "../custom-button/custom-button.component";

interface CollectionItemProps {
  id: number,
  name: string,
  imageUrl: string,
  price: number,
}
const CollectionItem: React.FC<CollectionItemProps> = ({ id, name, imageUrl, price }) => {
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
        <CustomButton inverted>Add To Cart</CustomButton>
      </div>
    </div>
  );
};

export default CollectionItem;
