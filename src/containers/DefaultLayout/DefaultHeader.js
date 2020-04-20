import React from "react";
import { Link, NavLink } from "react-router-dom";
import {
  Badge,
  UncontrolledDropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Nav,
  NavItem,
  // Collapse,
  NavbarToggler,
} from "reactstrap";

import routes from "../../routes";
// core Ui plugin --> Need to analysis this function

import logo from "../../assets/img/brand/logo.svg";
import avatar6 from "../../assets/img/avatars/6.jpg"
const DefaultHeader = () => {
  const toggleNavbar = () => {
    console.log("toggleNavbar");
  };

  return (
    <>
      <div className="navbar-wrapper">
        <Link className="nav-logo-wrapper app-header navbar-brand" to="\">
          <img src={logo} alt="logo" className="header-logo d-md-down-none navbar-brand-full"/>
        </Link>
        <NavbarToggler onClick={() => toggleNavbar()} className="mr-2" />
        <Nav className="d-md-down-none" navbar>
          {routes.map((route, idx) => {
            return route.component && route.showListPage === false ? (
              <NavItem className="px-3" key={idx}>
                <NavLink to={route.path} className="nav-link">
                  {route.name}
                </NavLink>
              </NavItem>
            ) : null;
          })}
        </Nav>
        <img src={logo} alt="logo" className="header-logo d-md-down-block navbar-brand-full"/>
        <Nav className="ml-auto align-items-center" navbar>
          <NavItem className="d-md-down-none px-3">
            <NavLink to="#" className="nav-link">
              <i className="icon-bell"></i>
              <Badge pill color="danger">
                5
              </Badge>
            </NavLink>
          </NavItem>
          <NavItem className="d-md-down-none px-3">
            <NavLink to="#" className="nav-link">
              <i className="icon-list"></i>
            </NavLink>
          </NavItem>
          <NavItem className="d-md-down-none px-4">
            <NavLink to="#" className="nav-link">
              <i className="icon-location-pin"></i>
            </NavLink>
          </NavItem>
          <UncontrolledDropdown nav direction="down">
            <DropdownToggle nav>
              <img
                src={avatar6}
                className="img-avatar"
                alt="admin@bootstrapmaster.com"
              />
            </DropdownToggle>
            <DropdownMenu right>
              <DropdownItem header tag="div" className="text-center">
                <strong>Account</strong>
              </DropdownItem>
              <DropdownItem>
                <i className="fa fa-bell-o"></i> Updates
                <Badge color="info">42</Badge>
              </DropdownItem>
              <DropdownItem>
                <i className="fa fa-envelope-o"></i> Messages
                <Badge color="success">42</Badge>
              </DropdownItem>
              <DropdownItem>
                <i className="fa fa-tasks"></i> Tasks
                <Badge color="danger">42</Badge>
              </DropdownItem>
              <DropdownItem>
                <i className="fa fa-comments"></i> Comments
                <Badge color="warning">42</Badge>
              </DropdownItem>
              <DropdownItem header tag="div" className="text-center">
                <strong>Settings</strong>
              </DropdownItem>
              <DropdownItem>
                <i className="fa fa-user"></i> Profile
              </DropdownItem>
              <DropdownItem>
                <i className="fa fa-wrench"></i> Settings
              </DropdownItem>
              <DropdownItem>
                <i className="fa fa-usd"></i> Payments
                <Badge color="secondary">42</Badge>
              </DropdownItem>
              <DropdownItem>
                <i className="fa fa-file"></i> Projects
                <Badge color="primary">42</Badge>
              </DropdownItem>
              <DropdownItem divider />
              <DropdownItem>
                <i className="fa fa-shield"></i> Lock Account
              </DropdownItem>
              <DropdownItem onClick={(e) => this.props.onLogout(e)}>
                <i className="fa fa-lock"></i> Logout
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
          <NavbarToggler onClick={() => toggleNavbar()} className="mr-2" />
          
        </Nav>
      </div>
    </>
  );
};

export default DefaultHeader;
