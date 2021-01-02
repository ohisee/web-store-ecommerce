/**
 * @fileoverview shop page component 
 */
import React from "react";
import { RouteComponentProps, Route } from "react-router-dom";
import styles from "./shoppage.module.scss";
import CollectionOverview from "../../components/collection-overview/collection-overview.component";
import CollectionPage from "../collection/collection.component";

const ShopPage: React.FC<RouteComponentProps> = ({ match }) => {
  return (
    <div className={styles["shop-page"]}>
      <Route exact path={`${match.path}`} component={CollectionOverview} />
      <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
    </div>
  );
}

export default ShopPage;
