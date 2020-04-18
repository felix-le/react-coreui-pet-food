import React, { Suspense } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import * as router from "react-router-dom";
import { Container } from "reactstrap";

import DefaultHeader from "./DefaultHeader";
// import DefaultAside from "./DefaultAside";
import DefaultFooter from "./DefaultFooter";
import DefaultSideBarNav from './DefaultSideBarNav'

const DefaultLayout = () => {
  const  loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div>
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
            <div className="link-explorer">
              <p> this is link explorer</p>
            </div>
            <Container fluid>
              <p>this is content fluid</p>
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
