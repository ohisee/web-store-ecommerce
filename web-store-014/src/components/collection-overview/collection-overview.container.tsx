/**
 * @fileoverview collection overview container 
 */
import { connect } from "react-redux";
import { compose } from "redux";
import { createStructuredSelector } from "reselect";
import { RootState } from "../../redux/root-state";
import { selectIsCollectionsFetching } from "../../redux/shop/shop.selectors";
import WithSpinner from "../with-spinner/with-spinner.component";
import CollectionOverview from "./collection-overview.component";

interface CollectionOverviewProps {
  // must match isLoading name in WithSpinner higer order component 
  isLoading: boolean,
}
const mapStateToProps =
  createStructuredSelector<RootState, CollectionOverviewProps>({
    isLoading: selectIsCollectionsFetching
  });

/**
 * Composes single-argument functions from right to left 
 */
const CollectionOverviewContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionOverview);

export default CollectionOverviewContainer;
