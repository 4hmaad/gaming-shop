import React, { Fragment, Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import { auth, createUserDocument } from "./firebase/firebase.utils";

/** Pages */
import HomePage from "./pages/home-page/HomePage.component";
import CheckoutPage from "./pages/checkout-page/CheckoutPage.component";
import AuthPage from "./pages/auth-page/AuthPage.component";

/** Components */
import Header from "./components/header/Header.component.jsx";

import { setSignedUser } from "./redux/user/userActions";

class App extends Component {
  componentDidMount() {
    auth.onAuthStateChanged(async (userAuth) => {
      this.props.setSignedUser(userAuth);

      if (userAuth) {
        const userRef = await createUserDocument(userAuth);
        userRef.onSnapshot((snapShot) => {
          this.props.setSignedUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
      }
    });
  }

  render() {
    return (
      <Fragment>
        <Header />

        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/checkout" component={CheckoutPage} />
          <Route
            exact
            path="/auth"
            render={() =>
              this.props.signedUser ? <Redirect to="/" /> : <AuthPage />
            }
          />
        </Switch>
      </Fragment>
    );
  }
}

const mapStateToProps = ({ user }) => {
  return user;
};

export default connect(mapStateToProps, { setSignedUser })(App);
