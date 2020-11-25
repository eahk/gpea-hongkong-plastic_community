import React from "react";
import { Provider } from "react-redux";
import configureStore from "./store/configureStore";
import { hydrate, render } from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

const rootElement = document.getElementById("root");
if (rootElement.hasChildNodes()) {
  hydrate(
    <Provider store={configureStore}>
      <App />
    </Provider>,
    rootElement
  );
} else {
  render(
    <Provider store={configureStore}>
      <App />
    </Provider>,
    rootElement
  );
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
