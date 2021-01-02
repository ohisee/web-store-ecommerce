/**
 * @fileoverview application component 
 */
import React from 'react';
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import './App.css';
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shoppage.component";
import Header from "./components/header/header.component";
import SignInAndSignUpPage from "./pages/signin-and-signup/signin-and-signup.component";
import firebase, { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { setCurrentUser } from "./redux/user/user.actions";
import { CurrentUserSnapshot } from "./redux/user/user-types";
import { RootState } from './redux/root-state';

interface AppProps {
  currentUser: any,
  setCurrentUser: (user: CurrentUserSnapshot | null) => void
}
class App extends React.Component<AppProps> {

  unsubscribeFromAuth: firebase.Unsubscribe | null = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async user => {
      if (user) {
        const userRef = await createUserProfileDocument(user, {});

        userRef?.onSnapshot(snapShot => {
          this.props.setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });
        });
      } else {
        this.props.setCurrentUser(null);
      }
    });
  }

  componentWillUnmount() {
    if (this.unsubscribeFromAuth) {
      this.unsubscribeFromAuth();
    }
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          {/* <Route path="/signin" component={SignInAndSignUpPage} /> */}
          <Route
            exact
            path="/signin"
            render={() => this.props.currentUser ? (<Redirect to="/" />) : (<SignInAndSignUpPage />)} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = (state: RootState) => {
  return {
    currentUser: state.user.currentUser
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    setCurrentUser: (user: CurrentUserSnapshot | null) => dispatch(setCurrentUser(user))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
