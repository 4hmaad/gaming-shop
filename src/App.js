import React, { Fragment, lazy, Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Header from "./components/Header/Header.component";
import Spinner from "./components/Spinner/Spinner.component";
import { useAuth } from "context/auth-context";

const HomePage = lazy(() => import("./pages/HomePage/HomePage.component"));
const CheckoutPage = lazy(() =>
  import("./pages/CheckoutPage/CheckoutPage.component")
);
const AuthPage = lazy(() => import("./pages/AuthPage/AuthPage.component"));
const ReceiptPage = lazy(() =>
  import("./pages/ReceiptPage/ReceiptPage.component")
);

const App = () => {
  const { user } = useAuth();

  return (
    <Fragment>
      <Header />
      <Switch>
        <Suspense fallback={<Spinner />}>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/checkout' component={CheckoutPage} />
          <Route exact path='/order/receipt/:id' component={ReceiptPage} />
          <Route
            exact
            path='/auth'
            render={() => (user ? <Redirect to='/' /> : <AuthPage />)}
          />
        </Suspense>
      </Switch>
    </Fragment>
  );
};

export default App;
