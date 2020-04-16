import "react-app-polyfill/ie9";
import "react-app-polyfill/stable";

import "./plyfill";

import React from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";

import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

//import redux && redux-persist
import { PersistGate } from "redux-persist/integration/react";
import { stores, persistor } from "./stores";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={stores}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register();
