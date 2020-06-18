import React, { Fragment, useEffect, lazy, Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import { auth, createUserDocument } from "./firebase/firebase.utils";

/** Components */
import Header from "./components/header/Header.component";
import Spinner from "./components/spinner/Spinner.component";
/** Actions */
import { setSignedUser } from "./redux/user/userActions";
/** Pages */
const HomePage = lazy(() => import("./pages/home-page/HomePage.component"));
const CheckoutPage = lazy(() =>
  import("./pages/checkout-page/CheckoutPage.component")
);
const AuthPage = lazy(() => import("./pages/auth-page/AuthPage.component"));
const ReceiptPage = lazy(() =>
  import("./pages/receipt-page/ReceiptPage.component")
);

const App = ({ setSignedUser, user: { signedUser } }) => {
  useEffect(() => {
    const unsubscribeAuth = auth.onAuthStateChanged(async (userAuth) => {
      setSignedUser(userAuth);

      if (userAuth) {
        const userRef = await createUserDocument(userAuth);
        userRef.onSnapshot((snapShot) => {
          setSignedUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
      }
    });

    return () => {
      unsubscribeAuth();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Fragment>
      <Header />
      <Switch>
        <Suspense fallback={<Spinner />}>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/checkout" component={CheckoutPage} />
          <Route exact path="/order/receipt/:id" component={ReceiptPage} />
          <Route
            exact
            path="/auth"
            render={() => (signedUser ? <Redirect to="/" /> : <AuthPage />)}
          />
        </Suspense>
      </Switch>
    </Fragment>
  );
};

const mapStateToProps = ({ user }) => {
  return { user };
};

export default connect(mapStateToProps, { setSignedUser })(App);
