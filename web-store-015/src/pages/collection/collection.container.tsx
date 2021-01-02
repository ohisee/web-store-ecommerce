/**
 * @fileoverview collection page container 
 */
import { connect } from "react-redux";
import { compose } from "redux";
import { createStructuredSelector } from "reselect";
import { selectIsCollectionsFetchingComplete } from "../../redux/shop/shop.selectors";
import WithSpinner from "../../components/with-spinner/with-spinner.component";
import CollectionPage from "./collection.component";
import { RootState } from "../../redux/root-state";

interface CollectionPageProps {
  // must match isLoading name in WithSpinner higer order component 
  isLoading: boolean,
}
const mapStateToPros =
  createStructuredSelector<RootState, CollectionPageProps>({
    // we need to check if collections fetching is not complete, so that 
    // isLoading will continue loading the spinner when collections 
    // fetching is not complete
    isLoading: (state: RootState) => !selectIsCollectionsFetchingComplete(state),
  });

const CollectionPageContainer = compose(
  connect(mapStateToPros),
  WithSpinner,
)(CollectionPage);

export default CollectionPageContainer;
