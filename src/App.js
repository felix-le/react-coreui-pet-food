// default
import React from "react";

// config reudx
import { connect } from "react-redux";

// plugins
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { createBrowserHistory } from "history";

// import components from routes
import routes from "./routes";

// import scss
import "./App.scss";

// import actions

import { setUser } from "./redux/actions";

// create loading frame
const loading = () => (
  <div className="animated fadeIn pt-3 text-center">Loading...</div>
);

function App({ setUser }) {
  const _handleLogout = () => {
    setUser("");
  };
  return (
    <Router history={createBrowserHistory()}>
      <React.Suspense fallback={loading()}>
        <>
          <ul className="page-list no-bullet">
            {routes.map((route, idx) => {
              return (
                <li key={idx}>
                  <Link to={route.path}>{route.name}</Link>
                </li>
              );
            })}
            <li>
              <button onClick={_handleLogout}>logout</button>
            </li>
          </ul>
          <Switch>
            {routes.map((route, idx) => {
              return route.component ? (
                <Route
                  key={idx}
                  path={route.path}
                  exact={route.exact}
                  component={route.component}
                />
              ) : null;
            })}
          </Switch>
        </>
      </React.Suspense>
    </Router>
  );
}

const mapDispatchToProps = {
  setUser,
};

export default connect(null, mapDispatchToProps)(App);
