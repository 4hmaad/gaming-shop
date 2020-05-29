import React, { Fragment } from "react";
import { Switch, Route } from "react-router-dom";

import HomePage from "./pages/homepage/Homepage.component";
import CartPage from "./pages/cart-page/CartPage.component";
import AuthPage from "./pages/auth-page/AuthPage.component";
import Header from "./components/header/Header.component";

function App() {
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

export default App;
