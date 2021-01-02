/**
 * @fileoverview preview collection component 
 */
import React from "react";
import styles from "./collection-preview.module.scss";
import CollectionItem from "../collection-item/collection-item.component";
import { id } from "../../utils/utilities";

interface Item {
  id: number,
  name: string,
  imageUrl: string,
  price: number,
}
interface CollectionPreviewProps {
  title: string,
  items: Item[]
}
/**
 * this functional component is a performance concern that when this component 
 * gets rendered or re-rendered, it will loop through all items in the list of 
 * collection items 
 */
const CollectionPreview: React.FC<CollectionPreviewProps> = ({ title, items }) => {
  return (
    <div className={styles["collection-preview"]}>
      <h1 className={styles["title"]}>{title}</h1>
      <div className={styles["preview"]}>
        {
          items
            .filter((_, index) => index <= 3)
            .map(({ ...itemProps }) =>
              (<CollectionItem key={id()} {...itemProps} />))
        }
      </div>
    </div>
  );
};

export default CollectionPreview;
