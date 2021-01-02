/**
 * @fileoverview shop page component 
 */
import React from "react";
import { RouteComponentProps, Route } from "react-router-dom";
import { connect } from "react-redux";
import styles from "./shoppage.module.scss";
import CollectionOverviewContainer from "../../components/collection-overview/collection-overview.container";
import CollectionPageContainer from "../../pages/collection/collection.container";
import { fetchCollectionsStart } from "../../redux/shop/shop.actions";
// import { fetchCollectionsStartAsync } from "../../redux/shop/shop.actions";
// import CollectionOverview from "../../components/collection-overview/collection-overview.component";
// import CollectionPage from "../collection/collection.component";
// import { firestore, convertCollectionsSnapshotToMap } from "../../firebase/firebase.utils";
// import { updateCollections } from "../../redux/shop/shop.actions";
// import { createStructuredSelector } from "reselect";
// import { RootState } from "../../redux/root-state";
// import {selectIsCollectionsFetching, selectIsCollectionsFetchingComplete} from "../../redux/shop/shop.selectors";
// import WithSpinner from "../../components/with-spinner/with-spinner.component";

// const ShopPage: React.FC<RouteComponentProps> = ({ match }) => {
//   return (
//     <div className={styles["shop-page"]}>
//       <Route exact path={`${match.path}`} component={CollectionOverview} />
//       <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
//     </div>
//   );
// }

// const CollectionsOverviewWithSpinner = WithSpinner(CollectionOverview);
// const CollectionPageWithSpinner = WithSpinner(CollectionPage);

/**
 * moved to CollectionOverviewContainer @see CollectionOverviewContainer 
 * ------- isFetchingCollections: boolean
 * 
 * moved to CollectionPageContainer @see CollectionPageContainer 
 * ------- isCollectionsLoaded: boolean,
 */
interface ShopPageProps {
  // isFetchingCollections: boolean,
  // isCollectionsLoaded: boolean,
}
interface ShopPageReduxProps {
  // updateCollections: (collectionsMap: any) => void 
  // fetchCollectionsStartAsync: () => void, // redux thunk 
  fetchCollectionsStart: () => void, // redux saga 
}
/**
 * a function that unsubscribes the collection reference's onSnapshot observable 
 */
// type UnsubscribeFunctionType = () => void;
class ShopPage extends React.Component<RouteComponentProps & ShopPageProps & ShopPageReduxProps> {

  // unsubscribeFromSnapshot: UnsubscribeFunctionType | null = null;
  // state = {
  //   isLoading: true,
  // };

  componentDidMount() {
    // 'collections' is the key in firestore  
    // const collectionRef = firestore.collection("collections");
    // 1) live update observable to get data from firestore  
    // this.unsubscribeFromSnapshot = collectionRef.onSnapshot(async snapshot => {
    //   const collectionsMap = convertCollectionsSnapshotToMap(snapshot)
    //   this.props.updateCollections(collectionsMap);
    //   this.setState({ isLoading: false });
    // });

    // 2) returns a promise, but we will only get new shop data from firestore
    // if when we re-mount ShopPage component, because we no longer leverage 
    // live update observable with listerner to get data 
    // collectionRef.get().then(
    //   this.unsubscribeFromSnapshot = collectionRef.onSnapshot(async snapshot => {
    //     const collectionsMap = convertCollectionsSnapshotToMap(snapshot)
    //     this.props.updateCollections(collectionsMap);
    //     this.setState({ isLoading: false });
    //   })
    // );

    // 3) use fetch 
    // const URL = "https://firestore.googleapis.com/v1/projects/project-id/databases/(default)/documents/collections";
    // fetch(URL)
    //   .then(response => response.json())
    //   .then(collections => console.log(collections));

    // const { fetchCollectionsStartAsync } = this.props;
    // fetchCollectionsStartAsync();      // redux thunk 
    this.props.fetchCollectionsStart();   // redux saga  
  }

  componentWillUnmount() {
    // if (this.unsubscribeFromSnapshot) {
    //   this.unsubscribeFromSnapshot();
    // }
  }

  render() {
    const { match } = this.props;
    // const { isLoading } = this.state;
    return (
      <div className={styles["shop-page"]}>
        {/* <Route exact path={`${match.path}`} component={CollectionOverview} /> */}
        {/* <Route path={`${match.path}/:collectionId`} component={CollectionPage} /> */}
        <Route exact
          path={`${match.path}`}
          // render={(props) => <CollectionsOverviewWithSpinner isLoading={isFetchingCollections} {...props} />)} 
          component={CollectionOverviewContainer}
        />
        <Route
          path={`${match.path}/:collectionId`}
          // render={(props) => <CollectionPageWithSpinner isLoading={!isCollectionsLoaded} {...props} />}
          component={CollectionPageContainer}
        />
      </div>
    );
  }
}

// const mapStateToProps = createStructuredSelector<RootState, ShopPageProps>({
//   // isFetchingCollections: selectIsCollectionsFetching,
//   // isCollectionsLoaded: selectIsCollectionsFetchingComplete,
// });

const mapDispatchToProps = (dispatch: any) => ({
  // updateCollections: (collectionsMap: any) => dispatch(updateCollections(collectionsMap)) 
  // fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync()), // redux thunk 
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart()), // redux saga 
});

export default connect(null, mapDispatchToProps)(ShopPage);
