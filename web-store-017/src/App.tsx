/**
 * @fileoverview application component 
 */
import React, { useEffect } from 'react';
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
// import './App.css';

import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shoppage.component";
import Header from "./components/header/header.component";
import SignInAndSignUpPage from "./pages/signin-and-signup/signin-and-signup.component";
import CheckoutPage from "./pages/checkout/checkout.component";
import { GlobalStyles } from "./global.styles";

// import firebase from "./firebase/firebase.utils";
// import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
// import { setCurrentUser } from "./redux/user/user.actions";
// import { CurrentUserSnapshot } from "./redux/user/user.types";
// import { selectCollectionsForPreview } from "./redux/shop/shop.selectors";
import { RootState } from './redux/root-state';
import { selectCurrentUser } from "./redux/user/user.selectors";
import { checkUserSession } from "./redux/user/user.actions";

interface AppProps {
  currentUser: any,
  // collectionArr: ShopData[],
}
// this is for Redux Reselect's createStructuredSelector 
// React.Component<AppProps & AppReduxStateToProps>
interface AppReduxStateToProps {
  // switched to use Redux saga, this prop is no needed 
  // setCurrentUser: (user: CurrentUserSnapshot | null) => void 
  checkUserSession: () => void,
}
// class App extends React.Component<AppProps & AppReduxStateToProps> {
const App: React.FC<AppProps & AppReduxStateToProps> = ({ currentUser, checkUserSession }) => {
  // unsubscribeFromAuth: firebase.Unsubscribe | null = null;

  // componentDidMount() {
  // this.unsubscribeFromAuth = auth.onAuthStateChanged(async user => {
  //   if (user) {
  //     const userRef = await createUserProfileDocument(user, {});

  //     userRef?.onSnapshot(snapShot => {
  //       this.props.setCurrentUser({
  //         id: snapShot.id,
  //         ...snapShot.data()
  //       });
  //     });
  //   } else {
  //     this.props.setCurrentUser(null);
  //   }
  // });

  // one time loading shopping data into firestore 
  // addCollectionAndDocuments("collections",
  //   this.props.collectionArr.map(({ title, items }) => ({ title, items })));
  // const { checkUserSession } = this.props;
  // checkUserSession();
  // }

  // componentWillUnmount() {
  //   if (this.unsubscribeFromAuth) {
  //     this.unsubscribeFromAuth();
  //   }
  // }

  useEffect(() => {
    // only need to call this once when App component did mount 
    checkUserSession();
  }, [checkUserSession] /* dependency list */);

  // render() { ... }
  return (
    <div>
      <GlobalStyles />
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route exact path="/checkout" component={CheckoutPage} />
        {/* <Route path="/signin" component={SignInAndSignUpPage} /> */}
        {/* <Route
          exact
          path="/signin"
          render={() => this.props.currentUser ? (<Redirect to="/" />) : (<SignInAndSignUpPage />)} /> */}
        <Route
          exact
          path="/signin"
          render={() => currentUser ? (<Redirect to="/" />) : (<SignInAndSignUpPage />)} />
      </Switch>
    </div>
  );
}

// use memoization to solve performance issue, use Reselect 
// const mapStateToProps = (state: RootState) => {
//   return {
//     currentUser: state.user.currentUser
//   }
// }

const mapStateToProps = createStructuredSelector<RootState, AppProps>({
  currentUser: selectCurrentUser,
  // collectionArr: selectCollectionsForPreview,
});

const mapDispatchToProps = (dispatch: any) => {
  return {
    // Switched to use redux saga
    // setCurrentUser: (user: CurrentUserSnapshot | null) => dispatch(setCurrentUser(user)) 
    checkUserSession: () => (dispatch(checkUserSession())),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
