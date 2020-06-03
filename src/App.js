import React, { Fragment, Component } from "react";
import { Switch, Route } from "react-router-dom";

import { auth, createUserDocument } from "./firebase/firebase.utils";

import HomePage from "./pages/homepage/Homepage.component";
import CartPage from "./pages/cart-page/CartPage.component";
import AuthPage from "./pages/auth-page/AuthPage.component";
import Header from "./components/header/Header.component";

class App extends Component {
  componentDidMount() {
    auth.onAuthStateChanged(async (signedUser) => {
      console.log(signedUser);

      this.props.setSignedUser(signedUser);

      if (signedUser) {
        const userRef = await createUserDocument(signedUser);
        userRef.onSnapshot((snapShot) => {
          let id = snapShot.id;
          console.table(snapShot.data());
          this.props.setSignedUser({
            id,
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
          <Route path="/cart" component={CartPage} />
          <Route path="/auth" component={AuthPage} />
        </Switch>
      </Fragment>
    );
  }
}

export default App;
