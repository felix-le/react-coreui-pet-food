// default
import React from "react";
import "./App.scss";

// plugins
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { createBrowserHistory } from "history";

// import components from routes
import routes from "./routes";

// create loading frame

const loading = () => (
  <div className="animated fadeIn pt-3 text-center">Loading...</div>
);

// logout function for testing

function App() {
  const _handleLogout = () => {
    console.log("logut");
  };
  return (
    <Router history={createBrowserHistory()}>
      <React.Suspense fallback={loading()}>
        <ul className="page-list">
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
        </ul>
      </React.Suspense>
    </Router>
  );
}

export default App;
