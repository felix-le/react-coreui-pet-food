import React, { Suspense } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
// import * as router from "react-router-dom";
import { Container } from "reactstrap";

import DefaultHeader from "./DefaultHeader";
import DefaultFooter from "./DefaultFooter";
import DefaultSideBarNav from "./DefaultSideBarNav";

import mainRoutes from "../../mainRoutes";
// import DefaultAside from "./DefaultAside";

const DefaultLayout = () => {
  const loading = () => (
    <div className="animated fadeIn pt-1 text-center">Loading...</div>
  );
  return (
    <>
      <div className="app">
        <div className="app-header">
          <Suspense fallback={loading()}>
            <DefaultHeader />
          </Suspense>
        </div>
        <div className="app-body">
          <div className="app-sidebar">
            <Suspense>
              <DefaultSideBarNav />
            </Suspense>
          </div>
          <div className="app-main">
            <div className="explorer-link">
              <p> this is link explorer</p>
            </div>
            <Container fluid>
              <Switch>
                {mainRoutes.map((route, idx) => {
                  return route.component ? (
                    <Route
                      key={idx}
                      path={route.path}
                      exact={route.exact}
                      name={route.name}
                      component={route.component}
                    />
                  ) : null;
                })}
                <Redirect from="/" to="/dashboard"/>
              </Switch>
            </Container>
          </div>
        </div>
        <div className="app-footer-wrapper">
          <DefaultFooter />
        </div>
      </div>
    </>
  );
};

export default DefaultLayout;
