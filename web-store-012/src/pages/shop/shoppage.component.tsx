/**
 * @fileoverview shop page component 
 */
import React from "react";
import { RouteComponentProps, Route } from "react-router-dom";
import { connect } from "react-redux";
import styles from "./shoppage.module.scss";
import CollectionOverview from "../../components/collection-overview/collection-overview.component";
import CollectionPage from "../collection/collection.component";
import { firestore, convertCollectionsSnapshotToMap } from "../../firebase/firebase.utils";
import { updateCollections } from "../../redux/shop/shop.actions";
import WithSpinner from "../../components/with-spinner/with-spinner.component";

// const ShopPage: React.FC<RouteComponentProps> = ({ match }) => {
//   return (
//     <div className={styles["shop-page"]}>
//       <Route exact path={`${match.path}`} component={CollectionOverview} />
//       <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
//     </div>
//   );
// }

const CollectionsOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

interface CheckoutItemReduxProps {
  updateCollections: (collectionsMap: any) => void
}
/**
 * a function that unsubscribes the collection reference's onSnapshot observable 
 */
type UnsubscribeFunctionType = () => void;
class ShopPage extends React.Component<RouteComponentProps & CheckoutItemReduxProps> {

  unsubscribeFromSnapshot: UnsubscribeFunctionType | null = null;
  state = {
    isLoading: true,
  };

  componentDidMount() {
    // 'collections' is the key in firebase 
    const collectionRef = firestore.collection("collections");
    this.unsubscribeFromSnapshot = collectionRef.onSnapshot(async snapshot => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot)
      this.props.updateCollections(collectionsMap);
      this.setState({ isLoading: false });
    });
  }

  componentWillUnmount() {
    if (this.unsubscribeFromSnapshot) {
      this.unsubscribeFromSnapshot();
    }
  }

  render() {
    const { match } = this.props;
    const { isLoading } = this.state;
    return (
      <div className={styles["shop-page"]}>
        {/* <Route exact path={`${match.path}`} component={CollectionOverview} /> */}
        {/* <Route path={`${match.path}/:collectionId`} component={CollectionPage} /> */}
        <Route exact
          path={`${match.path}`}
          render={(props) => <CollectionsOverviewWithSpinner isLoading={isLoading} {...props} />} />
        <Route
          path={`${match.path}/:collectionId`}
          render={(props) => <CollectionPageWithSpinner isLoading={isLoading} {...props} />} />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch: any) => ({
  updateCollections:
    (collectionsMap: any) => dispatch(updateCollections(collectionsMap))
});

export default connect(null, mapDispatchToProps)(ShopPage);
