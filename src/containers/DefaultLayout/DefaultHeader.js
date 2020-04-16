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

const DefaultHeader = () => {
  return (
    <div>
      <p> this is defaulHeader</p>
      <p>heehe</p>
    </div>
  );
};

export default DefaultHeader;
