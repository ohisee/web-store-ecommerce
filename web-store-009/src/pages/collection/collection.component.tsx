/**
 * @fileoverview category page component 
 */
import React from "react";
import { RouteComponentProps } from "react-router-dom";
import { connect } from "react-redux";
import { selectCollection } from "../../redux/shop/shop.selectors";
// import CollectionItems from "../../components/collection-item/collection-item.component";
import styles from "./collection.module.scss";
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

interface CollectionPageProps {
  collection: ShopData
}
interface CollectionPageParams {
  collectionId: string
}
type CollectionPageCombinedProps = CollectionPageProps & RouteComponentProps<CollectionPageParams>;
const CollectionPage: React.FC<CollectionPageCombinedProps> =
  ({ match, collection }) => {
    console.log(collection);
    return (
      <div className={styles["collection-page"]}>
        <h2>Collection PAGE</h2>
      </div>
    );
  };

/**
 * selectCollection function returns a function (Currying) that accepts a root 
 * state for the reselector to get the collection (shop data), note that the 
 * collection (shop data) can be undefined when the colletionId in the URL 
 * params is not found in the COLLECTION_ID_MAP @see shop.selectors 
 * 
 * @param state root state
 * @param ownProps properties of this component that is wrapped in redux connect 
 */
const mapStateToProps = (state: RootState, ownProps: CollectionPageCombinedProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state) as ShopData
});

export default connect(mapStateToProps)(CollectionPage);
