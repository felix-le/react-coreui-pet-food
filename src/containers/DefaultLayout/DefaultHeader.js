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
  Collapse,
  NavbarToggler,
} from "reactstrap";

import routes from '../../routes';


// core Ui plugin --> Need to analysis this function

import logo from "../../assets/img/brand/logo.svg";
import sygnet from "../../assets/img/brand/sygnet.svg";

const DefaultHeader = () => {


  const toggleNavbar =()=>{
    console.log('toggleNavbar')
  }

  
  return (
    <>
      <div className="navbar-wrapper">
        <div className="nav-logo-wrapper">
          <img src={logo} alt="logo"/>
          <img src={sygnet} alt="logo mobile"/>
        </div>
        <NavbarToggler onClick={() => toggleNavbar()} className="mr-2" />
        <Nav className="d-md-down-none" navbar>
          {routes.map((route, idx) => {
          return route.component && route.showListPage === false ? (
            <NavItem className="px-3">
              <NavLink to={route.path} className="nav-link">
                {route.name}
              </NavLink>
            </NavItem>
          ) : null;
          })}

        </Nav>
      </div>
        


    </>
  );
};

export default DefaultHeader;
