// default
import React from "react";

// config reudx
import { connect } from "react-redux";

// plugins
import { HashRouter, Switch, Route } from "react-router-dom";


// import scss
import "./App.scss";

import Login from "./views/Pages/Login";
import ForgotPassword from "./views/Pages/ForgetPass";
// import Dashboard from './views/Dashboard'
import DefaultLayout from "./containers/DefaultLayout";
// import actions

import { setUser } from "./redux/actions";

// create loading frame
const loading = () => (
  <div className="animated fadeIn pt-3 text-center">Loading...</div>
);

function App({ setUser }) {
  return (
    <HashRouter>
      <React.Suspense fallback={loading()}>
        <>
          <Switch>
            <Route exact path="/login" name="Login Page" component={Login} />
            <Route
              exact
              path="/forgot-password"
              name="Login Page"
              component={ForgotPassword}
            />
            <Route path="/" name="Home" component={DefaultLayout} />
          </Switch>
        </>
      </React.Suspense>
    </HashRouter>
  );
}

const mapDispatchToProps = {
  setUser,
};

export default connect(null, mapDispatchToProps)(App);
