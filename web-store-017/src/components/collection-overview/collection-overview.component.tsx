/**
 * @fileoverview collection overview component 
 */
import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import styles from "./collection-overview.module.scss";
import CollectionPreview from "../collection-preview/collection-preview.component";
import { id } from "../../utils/utilities";
import { selectCollectionsForPreview } from "../../redux/shop/shop.selectors";
import { RootState } from "../../redux/root-state";

interface Item {
  id: number,
  name: string,
  imageUrl: string,
  price: number,
}
interface ShopData {
  id: number,
  title: string,
  routeName: string,
  items: Item[],
}
interface CollectionOverviewProps {
  collections: ShopData[],
}
const CollectionOverview: React.FC<CollectionOverviewProps> = ({ collections }) => {
  return (
    <div className={styles["collection-overview"]}>
      {
        collections.map(({ ...collectionProps }) =>
          (<CollectionPreview key={id()} {...collectionProps} />))
      }
    </div>
  );
};

const mapStateToProps = createStructuredSelector<RootState, CollectionOverviewProps>({
  collections: selectCollectionsForPreview
});

export default connect(mapStateToProps)(CollectionOverview);
