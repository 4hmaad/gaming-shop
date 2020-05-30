import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { Provider } from "react-redux";
import "./index.scss";
import store from "./redux/store";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

const theme = {
  pageWidth: `max-width: 150rem; 
              margin: 0 auto; 
              padding:0rem 1rem;
  `,
  pageTitle: `display:inline-block;
              font-size: var(--text-0);
              font-weight: 400;
              border-bottom: 2px solid var(--yellow);
  `,
};

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
