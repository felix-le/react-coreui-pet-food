import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  Badge,
  UncontrolledDropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Nav,
  NavItem,
} from "reactstrap";

// core Ui plugin --> Need to analysis this function
import {
  AppAsideToggler,
  AppNavbarBrand,
  AppSidebarToggler,
} from "@coreui/react";

import logo from "../../assets/img/brand/logo.svg";
import sygnet from "../../assets/img/brand/sygnet.svg";

const DefaultHeader = () => {
  return (
    <>
      <AppSidebarToggler className="d-lg-none" display="md" mobile />
      <AppNavbarBrand
        full={{ src: logo, width: 89, height: 25, alt: "CoreUI logo" }}
        minimized={{ src: sygnet, with: 30, alt: "CoreUI logo" }}
      />
      <AppSidebarToggler className="d-md-down-none" display="lg" />
    </>
  );
};

export default DefaultHeader;
