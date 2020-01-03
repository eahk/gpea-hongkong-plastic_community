import React from 'react'
import { hydrate, render } from "react-dom";
import MyApp from './App';
//
import * as serviceWorker from './serviceWorker';
//
const rootElement = document.getElementById("root");
if (rootElement.hasChildNodes()) {
  hydrate(<MyApp />, rootElement);
} else {
  render(<MyApp />, rootElement);
}
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
