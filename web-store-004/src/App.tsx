import React from 'react';
import { Switch, Route } from "react-router-dom";
import './App.css';
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shoppage.component";
import Header from "./components/header/header.component";
import SignInAndSignUpPage from "./pages/signin-and-signup/signin-and-signup.component";
import firebase, { auth } from "./firebase/firebase.utils";

interface AppProps { }
interface AppState {
  currentUser: firebase.User | null,
}
class App extends React.Component<AppProps, AppState> {

  unsubscribeFromAuth: firebase.Unsubscribe | null;

  constructor(props: AppProps) {
    super(props);

    this.state = {
      currentUser: null
    }

    this.unsubscribeFromAuth = null;
  }

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({
        currentUser: user
      });
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
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/signin" component={SignInAndSignUpPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
